import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { PageBanner } from "@/components/page-banner";
import { Field, Area, Select } from "@/components/form-fields";
import { enviarPostulacion, postularSchema } from "@/lib/forms.functions";
import { requisitos } from "@/lib/site";
import creatorLive from "@/assets/creator-live.jpg";

export const Route = createFileRoute("/postular")({
  head: () => ({
    meta: [
      { title: "Postular — CRBX Agencia de TikTok LIVE" },
      { name: "description", content: "Envía tu postulación a CRBX y únete a la agencia de TikTok LIVE. Respuesta en máximo 48 horas." },
      { property: "og:title", content: "Postular — CRBX Agencia de TikTok LIVE" },
      { property: "og:description", content: "Envía tu postulación a CRBX. Respuesta en máximo 48 horas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PostularPage,
});

const paises = ["Perú", "México", "Colombia", "Argentina", "Chile", "Ecuador", "Bolivia", "Venezuela", "Paraguay", "Uruguay", "Guatemala", "Rep. Dominicana", "Otro"];

function PostularPage() {
  const send = useServerFn(enviarPostulacion);
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = postularSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      toast.error("Revisa los datos: completa los campos obligatorios.");
      return;
    }
    setLoading(true);
    try {
      await send({ data: parsed.data });
      setEnviado(true);
      form.reset();
    } catch {
      toast.error("No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageBanner label="Postular" />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={creatorLive} alt="Creadora transmitiendo en vivo" width={1024} height={1024} loading="lazy" className="rounded-3xl border border-border object-cover shadow-xl shadow-black/10" />
          <ul className="mt-8 space-y-4">
            {requisitos.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-live-cyan/20">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          {enviado ? (
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-xl shadow-black/5">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-gradient-to-br from-live-cyan/30 to-live-pink/30">
                <Check className="size-7" />
              </span>
              <h2 className="mt-5 text-2xl font-bold">Postulación enviada</h2>
              <p className="mt-2 text-muted-foreground">Te contactaremos en un plazo máximo de 48 horas.</p>
              <button onClick={() => setEnviado(false)} className="mt-6 rounded-full border border-border px-6 py-2.5 text-sm font-semibold hover:bg-secondary">
                Enviar otra
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-7 shadow-xl shadow-black/5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre completo *" name="nombre" required maxLength={100} />
                <Field label="Edad *" name="edad" type="number" required maxLength={3} />
                <Field label="Correo electrónico *" name="email" type="email" required maxLength={255} />
                <Field label="Teléfono / WhatsApp *" name="telefono" type="tel" required maxLength={30} />
                <Select label="País *" name="pais">
                  {paises.map((p) => <option key={p}>{p}</option>)}
                </Select>
                <Field label="Seguidores en TikTok" name="seguidores" maxLength={30} />
              </div>
              <Field label="Usuario o enlace de TikTok *" name="tiktok" required placeholder="@tuusuario" />
              <Select label="Experiencia en LIVE" name="experiencia">
                <option>Nunca he hecho un live</option>
                <option>Menos de 3 meses</option>
                <option>De 3 a 12 meses</option>
                <option>Más de 1 año</option>
              </Select>
              <Area label="Cuéntanos sobre tu contenido" name="mensaje" />
              <button disabled={loading} className="w-full rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
                {loading ? "Enviando…" : "Enviar postulación"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
