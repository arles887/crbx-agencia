import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Phone,
  Mail,
  Check,
  Radio,
  Users,
  TrendingUp,
  Gift,
  GraduationCap,
  Swords,
  MapPin,
} from "lucide-react";
import logoAsset from "@/assets/crbx-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import creatorLive from "@/assets/creator-live.jpg";
import liveGifts from "@/assets/live-gifts.jpg";

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
