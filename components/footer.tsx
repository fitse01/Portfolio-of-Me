'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-accent/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">FullStack Dev</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Building scalable web systems with TypeScript, React, and Node.js. Passionate about clean code and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-foreground/70 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-accent uppercase tracking-widest">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' }
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-background hover:border-accent transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-accent/20 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} Full-Stack Developer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
