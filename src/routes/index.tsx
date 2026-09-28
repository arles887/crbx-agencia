import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, Check } from "lucide-react";
import logoAsset from "@/assets/crbx-logo.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/51916753556?text=Hola%20CRBX%2C%20quiero%20unirme%20a%20la%20agencia%20de%20TikTok%20LIVE";
const PHONE_DISPLAY = "+51 916 753 556";
const EMAIL = "seguraxdata@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRBX — Agencia de TikTok LIVE en Perú" },
      {
        name: "description",
        content:
          "CRBX (Carbe Global Corp SAC) es una agencia de TikTok LIVE en Perú que ayuda a creadores de Latinoamérica a crecer y monetizar sus transmisiones en vivo.",
      },
      { property: "og:title", content: "CRBX — Agencia de TikTok LIVE en Perú" },
      {
        property: "og:description",
        content:
          "Únete a CRBX y convierte tus transmisiones en vivo de TikTok en una fuente de ingresos real. Acompañamiento, eventos y monetización para creadores de LATAM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const beneficios = [
  {
    titulo: "Acceso al programa de monetización",
    texto:
      "Te vinculamos al programa de incentivos de TikTok LIVE para que tus regalos y diamantes se conviertan en ingresos reales.",
  },
  {
    titulo: "Acompañamiento personalizado",
    texto:
      "Un manager de la agencia revisa tus métricas, te ayuda con tu contenido y resuelve tus dudas por WhatsApp o llamada.",
  },
  {
    titulo: "Batallas y eventos",
    texto:
      "Participas en batallas PK y eventos de la comunidad que aumentan tu visibilidad y tus diamantes.",
  },
  {
    titulo: "Capacitación continua",
    texto:
      "Aprendes dinámicas de live, horarios que funcionan en Perú y LATAM, y buenas prácticas para crecer sin infracciones.",
  },
];

const pasos = [
  {
    numero: "01",
    titulo: "Postula",
    texto: "Escríbenos por WhatsApp con el enlace de tu perfil de TikTok.",
  },
  {
    numero: "02",
    titulo: "Evaluación",
    texto: "Revisamos tu perfil y te respondemos en un plazo máximo de 48 horas.",
  },
  {
    numero: "03",
    titulo: "Onboarding",
    texto: "Te registramos en la agencia y configuramos tu cuenta para monetizar.",
  },
  {
    numero: "04",
    titulo: "Transmite y gana",
    texto: "Haces tus lives con nuestro respaldo y retiras tus ganancias.",
  },
];

const requisitos = [
  "Ser mayor de 18 años",
  "Tener una cuenta de TikTok activa y sin infracciones",
  "Compromiso mínimo de 15 horas de transmisión a la semana",
  "Contenido propio y auténtico",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Logo de CRBX"
            className="size-10 rounded-full"
          />
          <span className="font-display text-xl font-bold tracking-tight">
            CRBX
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-14 text-center">
        <img
          src={logoAsset.url}
          alt="CRBX — Agencia de TikTok LIVE"
          className="mx-auto mb-10 size-44 rounded-full shadow-xl shadow-black/10 sm:size-56"
        />
        <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Tu talento en vivo, convertido en ingresos
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
          Somos una agencia de TikTok LIVE con sede en Perú. Ayudamos a
          creadores de Latinoamérica a crecer, profesionalizar sus
          transmisiones y monetizar su contenido.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-5" />
            Postular por WhatsApp
          </a>
          <a
            href="tel:+51916753556"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold transition-colors hover:bg-secondary"
          >
            <Phone className="size-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Beneficios */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            Qué obtienes al unirte a CRBX
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {beneficios.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl border border-border bg-background p-7"
              >
                <h3 className="text-lg font-semibold">{b.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Cómo empezar</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <div key={p.numero}>
              <span className="font-display text-sm font-bold text-live-pink">
                {p.numero}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Requisitos */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Requisitos</h2>
              <p className="mt-4 text-muted-foreground">
                Buscamos personas con ganas de transmitir en serio. Si cumples
                estos puntos, puedes postular hoy.
              </p>
            </div>
            <ul className="space-y-4">
              {requisitos.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-live-cyan/20">
                    <Check className="size-3.5 text-foreground" />
                  </span>
                  <span className="text-sm leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Empieza a transmitir con CRBX
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Escríbenos y un asesor te explica todo el proceso sin compromiso.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-5" />
            Escribir por WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-semibold transition-colors hover:bg-secondary"
          >
            <Mail className="size-5" />
            {EMAIL}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="CRBX"
              className="size-9 rounded-full"
            />
            <div>
              <p className="font-display font-bold">CRBX</p>
              <p className="text-xs text-muted-foreground">
                Agencia de TikTok LIVE — Lima, Perú
              </p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Carbe Global Corp SAC</p>
            <p>RUC 20616178769</p>
            <p>{EMAIL}</p>
            <p>{PHONE_DISPLAY}</p>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-5xl px-6 py-5 text-xs text-muted-foreground">
            © 2026 Carbe Global Corp SAC. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
