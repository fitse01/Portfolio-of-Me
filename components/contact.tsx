"use client";

import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      // Credentials loaded from .env.local
      const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      platform: "X",
      handle: "@fitse01",
      href: "https://twitter.com/fitse01",
    },
    {
      platform: "LinkedIn",
      handle: "@fitsum-tafese",
      href: "https://www.linkedin.com/in/fitsum-tafese-b2791a279/",
    },
    {
      platform: "GitHub",
      handle: "@fitse01",
      href: "https://github.com/fitse01",
    },
    {
      platform: "Telegram",
      handle: "@Fafina21",
      href: "https://t.me/Fafina21",
    },
  ];

  const inputBase =
    "w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Have a project in mind? I&apos;d love to hear about it and discuss
            how we can bring your ideas to life.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT — Contact Form */}
          <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full name"
                className={inputBase}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className={inputBase}
              />

              {/* Subject input field */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className={inputBase}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Message"
                className={`${inputBase} resize-none`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-foreground text-sm font-medium transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT — Email + Social grid */}
          <div className="flex flex-col gap-10">
            {/* Clickable email */}
            <a
              href="mailto:fitsumtafese01@gmail.com"
              className="group inline-flex items-center gap-3 text-foreground text-xl font-semibold hover:text-accent transition-colors"
            >
              <span>fitsumtafese01@gmail.com</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
            </a>

            {/* Elsewhere label */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.18em] mb-4">
                Elsewhere
              </p>

              {/* 2×2 social grid */}
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 px-5 py-4 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {link.platform}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {link.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
