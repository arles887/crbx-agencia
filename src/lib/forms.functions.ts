import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendMail } from "./mail.server";

const base = {
  nombre: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  telefono: z.string().trim().min(6).max(30),
};

export const contactoSchema = z.object({
  ...base,
  asunto: z.string().trim().min(2).max(150),
  mensaje: z.string().trim().min(5).max(2000),
});

export const postularSchema = z.object({
  ...base,
  pais: z.string().trim().min(2).max(60),
  edad: z.string().trim().min(1).max(3),
  tiktok: z.string().trim().min(2).max(200),
  seguidores: z.string().trim().max(30),
  experiencia: z.string().trim().max(60),
  mensaje: z.string().trim().max(2000),
});

export const enviarContacto = createServerFn({ method: "POST" })
  .inputValidator((d) => contactoSchema.parse(d))
  .handler(async ({ data }) => {
    await sendMail({
      subject: `Contacto web CRBX: ${data.asunto}`,
      replyTo: data.email,
      fields: { Nombre: data.nombre, Correo: data.email, Teléfono: data.telefono, Asunto: data.asunto, Mensaje: data.mensaje },
    });
    return { ok: true };
  });

export const enviarPostulacion = createServerFn({ method: "POST" })
  .inputValidator((d) => postularSchema.parse(d))
  .handler(async ({ data }) => {
    await sendMail({
      subject: `Nueva postulación CRBX: ${data.nombre}`,
      replyTo: data.email,
      fields: {
        Nombre: data.nombre,
        Correo: data.email,
        "Teléfono / WhatsApp": data.telefono,
        País: data.pais,
        Edad: data.edad,
        "Perfil TikTok": data.tiktok,
        Seguidores: data.seguidores,
        "Experiencia en LIVE": data.experiencia,
        Mensaje: data.mensaje,
      },
    });
    return { ok: true };
  });
