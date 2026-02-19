'use client';

export function About() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-pretty">About Me</h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm a passionate full-stack developer with a deep commitment to building products that solve real-world problems. With expertise spanning TypeScript, React, Node.js, and mobile development, I transform complex ideas into elegant, scalable solutions.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              My journey in software engineering has been driven by a love for clean code, user-centric design, and continuous learning. I thrive in collaborative environments where innovation meets execution, and I'm dedicated to delivering high-impact solutions that create meaningful value.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Beyond coding, I'm fascinated by emerging technologies, architectural patterns, and the intersection of design and development. I believe that great software is built when technical excellence meets thoughtful design and a deep understanding of user needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 to-background">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-foreground/70">Years in Development</p>
              </div>
              <div className="p-6 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 to-background">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <p className="text-foreground/70">Projects Completed</p>
              </div>
              <div className="p-6 rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 to-background">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <p className="text-foreground/70">Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
