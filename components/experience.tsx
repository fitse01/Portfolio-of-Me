'use client';

const experiences = [
  {
    id: 1,
    period: 'Jul 2025 — Present',
    role: 'Co-Founder & Software Engineer',
    company: 'Motion Digitals',
    description: 'Leading product development and technical architecture for a digital innovation lab. Building scalable solutions and mentoring engineering teams.',
    highlights: ['Technical Leadership', 'Product Strategy', 'Team Building']
  },
  {
    id: 2,
    period: 'Dec 2024 — Jun 2025',
    role: 'Full Stack & Mobile Developer',
    company: 'Xyber Labs',
    description: 'Developed full-stack applications using TypeScript, React, and Node.js. Implemented mobile solutions with React Native for cross-platform deployment.',
    highlights: ['Full Stack Development', 'Mobile Development', 'API Design']
  }
];

export function Experience() {
  return (
    <section className="py-20 bg-background border-y border-accent/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-pretty">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Professional journey building innovative products and leading technical initiatives.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/20"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>

                  {/* Content */}
                  <div className="group">
                    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-1">
                      {exp.period}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-accent/80 font-semibold mb-3">
                      @ {exp.company}
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
