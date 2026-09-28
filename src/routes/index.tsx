import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import logoAsset from "@/assets/crbx-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import creatorLive from "@/assets/creator-live.jpg";
import liveGifts from "@/assets/live-gifts.jpg";
import { WHATSAPP_URL, PHONE_DISPLAY, stats } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";

const destacados = [
  { to: "/nosotros", titulo: "Nosotros", texto: "Agencia peruana de Carbe Global Corp SAC para creadores de LATAM.", img: creatorLive },
  { to: "/monetizacion", titulo: "Monetización", texto: "Regalos, diamantes e incentivos que se convierten en ingresos.", img: liveGifts },
] as const;

const accesos = [
  { to: "/beneficios", titulo: "Beneficios", texto: "Acompañamiento, batallas PK y capacitación." },
  { to: "/proceso", titulo: "Proceso y requisitos", texto: "Cuatro pasos para empezar a transmitir." },
  { to: "/preguntas", titulo: "Preguntas frecuentes", texto: "Costos, pagos, permanencia y más." },
  { to: "/postular", titulo: "Postular", texto: "Envía tu perfil y te respondemos en 48 h." },
] as const;

function HomeLinks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-2">
        {destacados.map((d) => (
          <Link key={d.to} to={d.to} className="group overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-black/5">
            <img src={d.img} alt={d.titulo} loading="lazy" width={1024} height={1024} className="aspect-[16/10] w-full object-cover" />
            <div className="p-7">
              <h2 className="text-2xl font-bold tracking-tight">{d.titulo}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d.texto}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-live-pink">
                Ver más <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {accesos.map((a) => (
          <Link key={a.to} to={a.to} className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-black/5">
            <h3 className="font-semibold">{a.titulo}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.texto}</p>
            <ArrowRight className="mt-4 size-4 text-live-cyan transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </section>
  );
}

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

function Index() {
  return (
    <>
      {/* Hero con fondo */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 text-center sm:pt-20">
          <img
            src={logoAsset.url}
            alt="CRBX — Agencia de TikTok LIVE"
            className="mx-auto mb-10 size-44 rounded-full shadow-xl shadow-black/10 ring-4 ring-background sm:size-56"
          />
          <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Tu talento en vivo,{" "}
            <span className="bg-gradient-to-r from-live-cyan to-live-pink bg-clip-text text-transparent">
              convertido en ingresos
            </span>
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
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.valor} className="text-center">
              <p className="font-display text-3xl font-bold tracking-tight text-live-pink sm:text-4xl">
                {s.valor}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.texto}</p>
            </div>
          ))}
        </div>
      </section>
      <HomeLinks />
      <CtaBand />
    </>
  );
}
