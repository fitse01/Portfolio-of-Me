'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Exceptional developer with a keen eye for detail. Built our telemedicine platform from scratch with incredible attention to security and scalability. A true problem-solver.",
    author: "Dr. Aris T.",
    role: "CEO at Xyber Labs",
    rating: 5
  },
  {
    id: 2,
    quote: "The technical expertise and project management skills are outstanding. Delivered the travel platform on time and exceeded our expectations in every way.",
    author: "Sarah M.",
    role: "Founder at Imaltu",
    rating: 5
  },
  {
    id: 3,
    quote: "Working with this developer transformed our entire product. The code quality, architecture decisions, and willingness to mentor the team made a huge difference.",
    author: "James K.",
    role: "CTO at Motion Digitals",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background border-y border-accent/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-pretty">Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              What collaborators and clients have to say about working together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative overflow-hidden rounded-xl border border-accent/20 p-8 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl"></div>

                <div className="relative space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/80 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-accent/20">
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-accent">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
