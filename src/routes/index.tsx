import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PortfolioVideoCard } from "@/components/PortfolioVideoCard";

const perfumeOne = { url: "/images/perfume.png" };
const skincareOne = { url: "/images/skincare.png" };
const skincareTwo = { url: "/images/collection.png" };
const perfumeTwo = { url: "/images/rose-perfume.png" };

export const Route = createFileRoute("/")({
  component: Index,
});

// Drop MP4 files in public/videos/ and reference as "/videos/name.mp4",
// or use a hosted URL. Leave src empty to show the play-overlay placeholder.
const portfolio: { title: string; src?: string }[] = [
  { title: "Fragrance", src: "/video/perfume-commercial.mp4" },
  { title: "Coffee", src: "/video/craftedcoffee.mp4" },
  { title: "Apparel", src: "/video/Apparel_1080p_202607172331.mp4" },
  { title: "Car", src: "/video/car-commercial.mp4" },
];

const services = [
  "AI UGC Videos",
  "Product Reviews",
  "Product Demos",
  "TikTok Ads",
  "Instagram Reels",
  "YouTube Shorts",
  "Facebook Ads",
];

const industries = [
  "Coffee",
  "Lip Gloss",
  "Face Serum",
  "Wireless Headphones",
  "Sneakers",
  "Vitamin Gummies",
  "Luxury Candle",
  "Tote Bag",
  "Chocolate",
  "Productivity App",
];

const whyChoose = [
  { icon: "⚡", title: "Flexible-Fast Turnaround", body: "Quick delivery without sacrificing quality." },
  { icon: "✨", title: "Studio-Quality AI Content", body: "Polished visuals that feel authentic and premium." },
  { icon: "👁", title: "Scroll-Stopping Creatives", body: "Ads designed to capture attention in seconds." },
  { icon: "📈", title: "Optimized for Conversions", body: "Content tuned for TikTok, Reels & Shorts." },
];

const faqs = [
  { q: "What is AI UGC?", a: "AI UGC is user-generated-style content produced with AI tools — authentic, ad-ready videos without the traditional production timeline." },
  { q: "How long does delivery take?", a: "Most projects are delivered within 3–5 business days depending on scope." },
  { q: "What platforms do you create for?", a: "TikTok, Instagram Reels, Facebook Ads, and YouTube Shorts." },
  { q: "Can I request revisions?", a: "Yes — every package includes revision rounds to make sure the final cut feels right." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Industries />
      <WhyChoose />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="font-serif text-xl md:text-2xl">Next Frame UGC</a>
        <nav className="hidden gap-10 text-sm text-foreground/80 md:flex">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#portfolio" className="hover:text-foreground">Portfolio</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function BlobImg({
  className,
  gradient,
  src,
  alt,
}: {
  className?: string;
  gradient?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-25px_rgba(120,60,40,0.25)] ${className ?? ""}`}
      style={src ? undefined : { background: gradient }}
    >
      {src && (
        <img
          src={src}
          alt={alt ?? ""}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:py-28">
        {/* decorative floating product images */}
        <BlobImg
          src={perfumeOne.url}
          alt="Elegant perfume bottle"
          className="animate-float-1 absolute left-2 top-10 hidden h-56 w-56 rotate-[-6deg] md:block"
        />
        <BlobImg
          src={skincareOne.url}
          alt="Luxury skincare set"
          className="animate-float-2 absolute right-4 top-32 hidden h-64 w-72 rotate-[6deg] md:block"
        />
        <BlobImg
          src={skincareTwo.url}
          alt="Premium skincare collection"
          className="animate-float-3 absolute left-12 bottom-8 hidden h-52 w-56 rotate-[4deg] lg:block"
        />
        <BlobImg
          src={perfumeTwo.url}
          alt="Luxury rose perfume"
          className="animate-float-4 absolute right-10 bottom-2 hidden h-52 w-52 rotate-[-8deg] lg:block"
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            Creating AI UGC Ads That Feel Real
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            Premium AI-generated UGC videos that help brands stand out across TikTok,
            Instagram Reels, Facebook, and YouTube Shorts.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-foreground/25 px-8 py-4 text-sm font-medium text-foreground transition hover:bg-foreground/5"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl">About Me</h2>
        <p className="mt-8 text-lg text-foreground/80">Creating AI UGC that feels real.</p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          We help brands stand out with premium AI-generated videos designed for social media
          advertising. Every project is crafted to look authentic, capture attention, and inspire action.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl md:text-5xl">Services</h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s}
              className="rounded-2xl bg-card px-6 py-8 text-center text-base font-medium shadow-sm transition hover:-translate-y-0.5"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl md:text-5xl">Featured Portfolio</h2>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {portfolio.map((item) => (
            <PortfolioVideoCard key={item.title} title={item.title} src={item.src || undefined} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-serif text-3xl md:text-5xl">Industries I Serve</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {industries.map((i) => (
            <span
              key={i}
              className="rounded-full bg-card px-6 py-3 text-sm shadow-sm md:text-base"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl md:text-5xl">Why Brands Choose Me</h2>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((c) => (
            <div key={c.title} className="rounded-2xl bg-card p-8 text-center shadow-sm">
              <div className="text-3xl text-accent">{c.icon}</div>
              <h3 className="mt-4 font-serif text-xl">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl md:text-5xl">Frequently Asked Questions</h2>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl bg-card shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-medium md:text-lg">{f.q}</span>
                <span className={`transition-transform ${open === i ? "rotate-180" : ""}`}>⌄</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-sm text-muted-foreground md:text-base">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl md:text-5xl">Let's Work Together</h2>
        <div className="mt-12 rounded-3xl bg-card p-8 shadow-sm md:p-12">
          <div className="space-y-4 border-b border-border pb-6 text-sm md:text-base">
            <a
              href="mailto:nextframestudio.media@gmail.com"
              className="flex items-center gap-2 text-foreground transition hover:text-accent hover:underline"
            >
              <span aria-hidden="true">✉</span>
              nextframestudio.media@gmail.com
            </a>
            <a
              href="https://wa.me/27634595961?text=Hi%21%20I%20found%20your%20portfolio%20and%20I%27m%20interested%20in%20collaborating%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:scale-[1.02] hover:shadow-md"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const name = String(data.get("name") ?? "").trim();
              const email = String(data.get("email") ?? "").trim();
              const message = String(data.get("message") ?? "").trim();
              const subject = `New inquiry from ${name || "your portfolio"}`;
              const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
              window.location.href = `mailto:nextframestudio.media@gmail.com?subject=${encodeURIComponent(
                subject,
              )}&body=${encodeURIComponent(body)}`;
            }}
          >
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-xl bg-background px-4 py-3 outline-none ring-1 ring-border focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.702h-.004c-3.95 0-7.164 3.219-7.16 7.172.002 1.478.459 2.906 1.31 4.115l-1.395 4.054 4.146-1.092a7.166 7.166 0 0 0 3.431.879h.003c3.947 0 7.164-3.22 7.16-7.174-.003-3.952-3.221-7.172-7.174-7.172-.001 0-.002 0-.003 0" />
    </svg>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-xl bg-background px-4 py-3 outline-none ring-1 ring-border focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Next Frame UGC. All rights reserved.
    </footer>
  );
}
