import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { MessageCircle, Phone, Mail, MapPin, Building2 } from "lucide-react";
import { toast } from "sonner";
import { PageBanner } from "@/components/page-banner";
import { Field, Area } from "@/components/form-fields";
import { enviarContacto, contactoSchema } from "@/lib/forms.functions";
import { WHATSAPP_URL, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — CRBX Agencia de TikTok LIVE" },
      { name: "description", content: "Escríbenos por formulario, WhatsApp, llamada o correo. CRBX, Carbe Global Corp SAC, Lima, Perú." },
      { property: "og:title", content: "Contacto — CRBX Agencia de TikTok LIVE" },
      { property: "og:description", content: "Escríbenos por formulario, WhatsApp, llamada o correo. CRBX, Lima, Perú." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const send = useServerFn(enviarContacto);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = contactoSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      toast.error("Revisa los datos: completa todos los campos correctamente.");
      return;
    }
    setLoading(true);
    try {
      await send({ data: parsed.data });
      toast.success("Mensaje enviado. Te responderemos pronto.");
      form.reset();
    } catch {
      toast.error("No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  const canales = [
    { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL },
    { icon: Phone, label: "Llamadas", value: PHONE_DISPLAY, href: PHONE_TEL },
    { icon: Mail, label: "Correo", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: "Ubicación", value: "Lima, Perú" },
    { icon: Building2, label: "Empresa", value: "Carbe Global Corp SAC — RUC 20616178769" },
  ];

  return (
    <>
      <PageBanner label="Contacto" />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {canales.map((c) => {
            const inner = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-live-cyan/20 to-live-pink/20">
                  <c.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">{c.label}</span>
                  <span className="block text-sm font-semibold">{c.value}</span>
                </span>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:shadow-md hover:shadow-black/5">
                {inner}
              </a>
            ) : (
              <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">{inner}</div>
            );
          })}
        </div>
        <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-7 shadow-xl shadow-black/5 lg:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre completo" name="nombre" required maxLength={100} />
            <Field label="Teléfono / WhatsApp" name="telefono" type="tel" required maxLength={30} />
          </div>
          <Field label="Correo electrónico" name="email" type="email" required maxLength={255} />
          <Field label="Asunto" name="asunto" required maxLength={150} />
          <Area label="Mensaje" name="mensaje" required />
          <button disabled={loading} className="w-full rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
            {loading ? "Enviando…" : "Enviar mensaje"}
          </button>
        </form>
      </section>
    </>
  );
}
