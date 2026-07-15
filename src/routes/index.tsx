import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PortfolioVideoCard } from "@/components/PortfolioVideoCard";

export const Route = createFileRoute("/")({
  component: Index,
});

// Drop MP4 files in public/videos/ and reference as "/videos/name.mp4",
// or use a hosted URL. Leave src empty to show the play-overlay placeholder.
const portfolio: { title: string; src?: string }[] = [
  { title: "Fragrance", src: "" },
  { title: "Skincare", src: "" },
  { title: "Beauty", src: "" },
  { title: "Lifestyle", src: "" },
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

function BlobImg({ className, gradient }: { className?: string; gradient: string }) {
  return (
    <div
      className={`rounded-[2rem] shadow-[0_20px_50px_-25px_rgba(120,60,40,0.25)] ${className ?? ""}`}
      style={{ background: gradient }}
    />
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:py-28">
        {/* decorative floating blobs */}
        <BlobImg
          gradient="linear-gradient(135deg,#f3d4d1,#e9a9a3)"
          className="absolute left-2 top-10 hidden h-56 w-56 rotate-[-6deg] md:block"
        />
        <BlobImg
          gradient="linear-gradient(135deg,#f8d7d0,#f0b6b0)"
          className="absolute right-4 top-32 hidden h-64 w-72 rotate-[6deg] md:block"
        />
        <BlobImg
          gradient="linear-gradient(135deg,#ecd6c6,#d9b39a)"
          className="absolute left-12 bottom-8 hidden h-52 w-56 rotate-[4deg] lg:block"
        />
        <BlobImg
          gradient="linear-gradient(135deg,#f2e4d8,#dcc4ae)"
          className="absolute right-10 bottom-2 hidden h-52 w-52 rotate-[-8deg] lg:block"
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
          <div className="space-y-3 border-b border-border pb-6 text-sm md:text-base">
            <div>✉ nextframestudio.media@gmail.com</div>
            <div>💬 +27 63 459 5961</div>
          </div>
          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">Message</label>
              <textarea
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
