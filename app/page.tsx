"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "923001234567"; // yahan apna number daalo (bina +, bina 0)
const WHATSAPP_DEFAULT_TEXT =
  "Hi, I want an AI & SEO strategy call for my business.";

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_DEFAULT_TEXT,
  )}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Yahan se WhatsApp message build kar rahe hain
    const text = `New website lead:
Name: ${name}
Email: ${email}
Message: ${message}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text,
    )}`;

    try {
      window.open(url, "_blank"); // WhatsApp chat open hogi
      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top navigation */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="text-lg font-semibold tracking-tight">
            Buji AI &amp; SEO
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#results" className="hover:text-white">
              Results
            </a>
            <a href="#blog" className="hover:text-white">
              Blog
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 rounded-full border border-emerald-500 px-4 py-2 text-xs font-medium text-emerald-400 hover:bg-emerald-500/10 md:inline-flex"
            >
              WhatsApp us
            </a>
            <a
              href="#contact"
              className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
            >
              Book Free Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-800">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              AI Powered Growth
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Turn clicks into customers with AI driven SEO &amp; ads.
            </h1>
            <p className="mt-4 text-sm text-slate-300 sm:text-base">
              We help businesses in Pakistan, Dubai and the US generate
              qualified leads with data driven SEO, PPC, and AI automation
              – without guesswork or vanity metrics.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                Get Free Audit
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-slate-200 hover:text-white"
              >
                View Services →
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/10"
              >
                WhatsApp us
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Avg. 3–5x ROAS on paid campaigns • 6–12 month SEO roadmaps
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Quick snapshot
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Leads generated</p>
                <p className="mt-1 text-xl font-semibold">10k+</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">SEO projects</p>
                <p className="mt-1 text-xl font-semibold">50+</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Avg. traffic growth</p>
                <p className="mt-1 text-xl font-semibold">+220%</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                <p className="text-xs text-slate-400">Client locations</p>
                <p className="mt-1 text-xl font-semibold">PK • UAE • US</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services (placeholder – as is) */}
      <section id="services" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="mt-2 text-sm text-slate-300">
            Focused offers optimised for measurable pipeline and revenue – not just traffic.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold">AI Powered SEO</h3>
              <p className="mt-2 text-xs text-slate-300">
                Topic maps, technical clean‑up, and content systems built to win
                long‑term rankings in competitive niches.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold">Performance Media</h3>
              <p className="mt-2 text-xs text-slate-300">
                Google Ads &amp; paid social campaigns with AI‑driven creative
                testing and conversion tracking.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold">Automation &amp; CRM</h3>
              <p className="mt-2 text-xs text-slate-300">
                Lead routing, pipelines, and reporting so your team sees exactly
                which campaigns drive revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process (placeholder) */}
      <section id="process" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
          <div className="mt-8 grid gap-6 text-sm text-slate-300 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold text-emerald-400">01 • Audit</p>
              <p className="mt-1 text-xs">
                Deep audit of your analytics, search console, and current funnel.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-400">02 • Strategy</p>
              <p className="mt-1 text-xs">
                6–12 month roadmap with clear forecasts, priorities, and quick wins.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-400">03 • Execution</p>
              <p className="mt-1 text-xs">
                We implement, test, and refine – with dashboards you can check anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results (placeholder) */}
      <section id="results" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Recent wins</h2>
          <p className="mt-2 text-sm text-slate-300">
            A quick snapshot of what we&apos;ve shipped for clients.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300">
              <p className="font-semibold">E‑commerce brand (UAE)</p>
              <p className="mt-1">+180% organic traffic in 8 months.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300">
              <p className="font-semibold">B2B SaaS (US)</p>
              <p className="mt-1">3.2x pipeline from SEO &amp; paid search.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300">
              <p className="font-semibold">Local service (PK)</p>
              <p className="mt-1">From 0 to 150+ qualified leads/month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">
            Book a free strategy call
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Tell us about your business and we will share a short, actionable plan.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-6 grid max-w-xl gap-4 text-sm"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-emerald-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-emerald-500"
              required
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your goals, current traffic, and budget range."
              className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none focus:border-emerald-500"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
            >
              {submitting ? "Opening WhatsApp..." : "Submit & open WhatsApp"}
            </button>
          </form>

          {status === "ok" && (
            <p className="mt-3 text-xs text-emerald-400">
              WhatsApp opened with your details. Please send the message there.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 text-xs text-red-400">
              Something went wrong. Please try again or use the WhatsApp button above.
            </p>
          )}

          <p className="mt-4 text-xs text-slate-400">
            Prefer WhatsApp directly?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-emerald-400 underline underline-offset-4"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-slate-500">
          <p>© 2026 Buji AI &amp; SEO. All rights reserved.</p>
          <p>Based in Rawalpindi • Serving PK, UAE &amp; US.</p>
        </div>
      </footer>
    </main>
  );
}