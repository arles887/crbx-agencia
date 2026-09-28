import { createFileRoute } from "@tanstack/react-router";
import { Check, MapPin, Gift, Users, Swords, GraduationCap } from "lucide-react";
import { beneficios, pasos, requisitos, preguntas } from "@/lib/site";
import { PageBanner } from "@/components/page-banner";
import { CtaBand } from "@/components/cta-band";
import creatorLive from "@/assets/creator-live.jpg";
import liveGifts from "@/assets/live-gifts.jpg";

export const Route = createFileRoute("/monetizacion")({
  head: () => ({
    meta: [
      { title: "Monetización — CRBX Agencia de TikTok LIVE" },
      { name: "description", content: "Cómo funcionan los regalos, diamantes e incentivos de TikTok LIVE con CRBX." },
      { property: "og:title", content: "Monetización — CRBX Agencia de TikTok LIVE" },
      { property: "og:description", content: "Cómo funcionan los regalos, diamantes e incentivos de TikTok LIVE con CRBX." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MonetizacionPage,
});

function MonetizacionPage() {
  return (
    <>
      <PageBanner label="Monetización" />
      <section id="monetizacion" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-live-pink/25 to-live-cyan/25 blur-2xl" />
            <img
              src={liveGifts}
              alt="Regalos y diamantes en un live de TikTok"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-3xl border border-border object-cover shadow-xl shadow-black/10"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-live-cyan">
              Monetización
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Regalos, diamantes e ingresos reales
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              En TikTok LIVE tu audiencia te apoya con regalos virtuales que se
              convierten en diamantes y luego en dinero. Como parte de CRBX
              accedes a incentivos adicionales de la plataforma y a metas
              mensuales que premian tu constancia.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Los retiros los haces tú directamente desde tu cuenta de TikTok",
                "Incentivos por horas de transmisión y metas de diamantes",
                "Batallas PK que multiplican la llegada de regalos",
                "Reportes claros de tu rendimiento cada mes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-live-cyan/20">
                    <Check className="size-3.5 text-foreground" />
                  </span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
