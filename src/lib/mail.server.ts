import nodemailer from "nodemailer";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendMail(opts: { subject: string; replyTo: string; fields: Record<string, string> }) {
  const user = process.env["SMTP_USER"];
  const pass = process.env["SMTP_PASS"];
  if (!user || !pass) throw new Error("SMTP no configurado");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass: pass.replace(/\s+/g, "") },
  });
  const rows = Object.entries(opts.fields)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#666">${esc(k)}</td><td style="padding:6px 12px">${esc(v || "—").replace(/\n/g, "<br>")}</td></tr>`)
    .join("");
  const text = Object.entries(opts.fields).map(([k, v]) => `${k}: ${v || "—"}`).join("\n");
  await transporter.sendMail({
    from: `"CRBX Web" <${user}>`,
    to: "seguraxdata@gmail.com",
    replyTo: opts.replyTo,
    subject: opts.subject,
    text,
    html: `<table style="font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
  });
}
