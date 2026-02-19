'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-pretty">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className="group p-6 rounded-xl bg-secondary border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                    Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch!
                </p>
                <div className="space-y-4">
                  <p className="text-foreground">
                    <span className="font-semibold">Response Time:</span> Usually within 24 hours
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Availability:</span> Available for freelance and full-time projects
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Services:</span> Web Development, Mobile Apps, UI/UX Design, Consulting
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const SocialIcon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className="p-3 rounded-lg bg-secondary border border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
                      >
                        <SocialIcon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
