"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold">FT</span>
            </div>
            <span className="font-bold text-foreground text-lg hidden sm:inline">
              FitsumTafese
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/70 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-sm inline-block"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-accent/20 space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-foreground/70 hover:text-accent transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-sm block text-center"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
