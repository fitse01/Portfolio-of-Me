"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden max-sm:py-10">
      {/* Gradient background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.6 0.22 29) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* Left Content */}
        <div className="flex flex-col gap-8 z-10">
          <div className="space-y-4">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">
              TypeScript Developer
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-pretty">
              Full-Stack Developer
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Crafting scalable, secure, and high-performance web systems using
              TypeScript, React, and Node.js. Passionate about clean
              architecture and delivering end-to-end solutions.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="#contact">
              <button className="px-8  py-3 max-sm:px-4 max-sm:py-2 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 group">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#projects">
              <button className="px-8 py-3 max-sm:px-4 max-sm:py-2 border border-accent text-accent-foreground font-semibold rounded-full hover:bg-accent/10 transition-colors">
                View work
              </button>
            </Link>
          </div>

          <div className="flex gap-8 pt-4 text-sm">
            <div>
              <p className="text-2xl font-bold text-accent">4+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">30+</p>
              <p className="text-muted-foreground">Projects Shipped</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
          <div className="relative w-full h-full max-w-sm">
            {/* Accent border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-accent/30 transform rotate-3"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-accent/10 -rotate-3"></div>

            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary shadow-2xl">
              <Image
                src="/fitse.JPG"
                alt="Professional developer"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-0 -left-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.6 0.22 29) 0%, transparent 70%)",
          }}
        ></div>
      </div>
    </section>
  );
}
