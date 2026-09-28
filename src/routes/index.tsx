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

const navItems = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Monetización", href: "#monetizacion" },
  { label: "Proceso", href: "#proceso" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Preguntas", href: "#preguntas" },
];

const stats = [
  { valor: "LATAM", texto: "Creadores de toda Latinoamérica pueden postular" },
  { valor: "48 h", texto: "Tiempo máximo de respuesta a tu postulación" },
  { valor: "S/ 0", texto: "Unirte a la agencia no tiene ningún costo" },
  { valor: "24/7", texto: "Atención de tu manager por WhatsApp" },
];

const beneficios = [
  {
    icono: Gift,
    titulo: "Acceso al programa de monetización",
    texto:
      "Te vinculamos al programa de incentivos de TikTok LIVE para que tus regalos y diamantes se conviertan en ingresos reales.",
  },
  {
    icono: Users,
    titulo: "Acompañamiento personalizado",
    texto:
      "Un manager de la agencia revisa tus métricas, te ayuda con tu contenido y resuelve tus dudas por WhatsApp o llamada.",
  },
  {
    icono: Swords,
    titulo: "Batallas y eventos",
    texto:
      "Participas en batallas PK y eventos de la comunidad que aumentan tu visibilidad y tus diamantes.",
  },
  {
    icono: GraduationCap,
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

const preguntas = [
  {
    pregunta: "¿Unirme a CRBX tiene algún costo?",
    respuesta:
      "No. La vinculación a la agencia es completamente gratuita. Nuestro modelo se basa en el crecimiento conjunto: ganamos cuando tú ganas.",
  },
  {
    pregunta: "¿Cómo recibo mis ganancias?",
    respuesta:
      "Los diamantes que generes en tus lives se convierten en dinero dentro de tu propia cuenta de TikTok y los retiras directamente tú, sin intermediarios.",
  },
  {
    pregunta: "¿Puedo salirme de la agencia cuando quiera?",
    respuesta:
      "Sí. No hay contratos de permanencia forzosa. Si decides continuar por tu cuenta, gestionamos tu salida sin trabas.",
  },
  {
    pregunta: "¿Debo vivir en Perú para postular?",
    respuesta:
      "No. Aunque nuestra sede está en Lima, aceptamos creadores de toda Latinoamérica. Todo el acompañamiento es remoto.",
  },
  {
    pregunta: "¿Qué pasa si nunca he hecho un live?",
    respuesta:
      "No hay problema. Te capacitamos desde cero: configuración, dinámicas, horarios y todo lo necesario para tu primera transmisión.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header con menú */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo de CRBX"
              className="size-10 rounded-full"
            />
            <span className="font-display text-xl font-bold tracking-tight">
              CRBX
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </div>
      </header>

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

      {/* Nosotros */}
      <section id="nosotros" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-live-cyan">
              Nosotros
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Una agencia peruana para creadores de toda Latinoamérica
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              CRBX es la agencia de TikTok LIVE de Carbe Global Corp SAC, una
              empresa peruana constituida con RUC 20616178769. Nacimos en Lima
              con una convicción: el talento latinoamericano merece
              acompañamiento profesional para vivir de las transmisiones en
              vivo.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Trabajamos de la mano con cada creador: revisamos métricas,
              planificamos contenido, organizamos batallas y resolvemos dudas
              todos los días. No somos un número más en tu cuenta; somos tu
              equipo.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-live-pink" />
              Lima, Perú — operación remota para toda LATAM
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-live-cyan/25 to-live-pink/25 blur-2xl" />
            <img
              src={creatorLive}
              alt="Creadora de CRBX transmitiendo en vivo"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative rounded-3xl border border-border object-cover shadow-xl shadow-black/10"
            />
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-live-cyan">
            Beneficios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Qué obtienes al unirte a CRBX
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {beneficios.map((b) => (
              <div
                key={b.titulo}
                className="rounded-2xl border border-border bg-background p-7 transition-shadow hover:shadow-lg hover:shadow-black/5"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-live-cyan/20 to-live-pink/20">
                  <b.icono className="size-5 text-foreground" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{b.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monetización */}
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

      {/* Proceso */}
      <section id="proceso" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-live-cyan">
            Proceso
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Cómo empezar
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.numero} className="rounded-2xl border border-border bg-background p-6">
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
        </div>
      </section>

      {/* Requisitos */}
      <section id="requisitos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-live-cyan">
              Requisitos
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Lo que necesitas para postular
            </h2>
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
      </section>

      {/* Preguntas frecuentes */}
      <section id="preguntas" className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-live-cyan">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Resolvemos tus dudas
          </h2>
          <div className="mt-12 space-y-4">
            {preguntas.map((p) => (
              <details
                key={p.pregunta}
                className="group rounded-2xl border border-border bg-background p-6 open:shadow-md open:shadow-black/5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold marker:hidden">
                  {p.pregunta}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.respuesta}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <Radio className="mx-auto size-10 text-live-pink" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
          <div>
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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Convertimos el talento de los creadores latinos en una fuente de
              ingresos real a través de TikTok LIVE.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Secciones</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="text-sm font-semibold text-foreground">Contacto</p>
            <div className="mt-4 space-y-2.5">
              <p className="font-medium text-foreground">Carbe Global Corp SAC</p>
              <p>RUC 20616178769</p>
              <p>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-foreground">
                  {EMAIL}
                </a>
              </p>
              <p>
                <a href="tel:+51916753556" className="transition-colors hover:text-foreground">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground">
            © 2026 Carbe Global Corp SAC. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
