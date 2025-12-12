import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import multer from "multer";
import fs from "fs/promises";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ----------------------------------------
//// SETUP MULTER FOR RESUME UPLOADS
// ----------------------------------------
const uploadDir = path.resolve("uploads");
await fs.mkdir(uploadDir, { recursive: true }).catch(() => {});

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + file.originalname.replace(/\s+/g, "-");
    cb(null, unique);
  }
});

const upload = multer({ storage });

// ----------------------------------------
//// SETUP NODEMAILER
// ----------------------------------------
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// -------------------------------
// SEND EMAIL TO ADMIN
// -------------------------------
async function sendAdminEmail(subject, html, attachments = []) {
  return transporter.sendMail({
    from: `"Laverse Digital" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject,
    html,
    attachments
  });
}

// -------------------------------
// AUTO REPLY TO USER
// -------------------------------
async function sendAutoReply(to, message) {
  return transporter.sendMail({
    from: `"Laverse Digital" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Thank You — Laverse Digital",
    text: message
  });
}

// ----------------------------------------
//// CONTACT FORM — JSON ONLY
// ----------------------------------------
app.post("/contact", async (req, res) => {
  const { name, email, phone, service, budget, message } = req.body;

  try {
    await sendAdminEmail(
      `New Contact — ${name}`,
      `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Message:</b> ${message}</p>
      `
    );

    await sendAutoReply(
      email,
      `Hello ${name}, your inquiry has been received. Our team will respond shortly.\n\n— Laverse Digital`
    );

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ----------------------------------------
//// CAREER FORM — WITH RESUME UPLOAD
// ----------------------------------------
app.post("/career", upload.single("resume"), async (req, res) => {
  const { name, email, phone, position, experience, expectedSalary, message } = req.body;

  try {
    const resumeFile = req.file;

    await sendAdminEmail(
      `New Job Application — ${name}`,
      `
        <h2>New Career Application</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Position:</b> ${position}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Expected Salary:</b> ${expectedSalary}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      resumeFile ?
      [{ filename: resumeFile.originalname, path: resumeFile.path }] :
      []
    );

    await sendAutoReply(
      email,
      `Hello ${name},\n\nThank you for applying to Laverse Digital. Our HR team will contact you soon.\n\n— Laverse Digital HR`
    );

    if (resumeFile) {
      await fs.unlink(resumeFile.path).catch(() => {});
    }

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ----------------------------------------
//// START SERVER
// ----------------------------------------
app.listen(process.env.PORT, () =>
  console.log(`SERVER RUNNING ON PORT ${process.env.PORT}`)
);
