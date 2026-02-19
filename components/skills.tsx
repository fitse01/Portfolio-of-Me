'use client';

import React from 'react';
import { 
  Code2, 
  Zap, 
  Smartphone, 
  Database, 
  Boxes,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'TypeScript', icon: '📘' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '✨' }
    ]
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: [
      { name: 'React Native', icon: '📱' },
      { name: 'Expo', icon: '🚀' },
      { name: 'iOS/Android', icon: '🔧' },
      { name: 'Redux', icon: '📊' },
      { name: 'Context API', icon: '🔄' }
    ]
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'NestJS', icon: '🐦' },
      { name: 'PostgreSQL', icon: '🗄️' },
      { name: 'Prisma ORM', icon: '⚙️' },
      { name: 'RESTful API', icon: '🔗' }
    ]
  },
  {
    title: 'Interaction',
    icon: Zap,
    skills: [
      { name: 'Three.js', icon: '🎭' },
      { name: 'Framer Motion', icon: '✨' },
      { name: 'GSAP', icon: '⏱️' },
      { name: 'WebRTC', icon: '📡' },
      { name: 'Socket.io', icon: '🔌' }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-pretty">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive toolkit for building modern, scalable web applications with focus on clean code and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div 
                  key={category.title}
                  className="group p-6 rounded-xl bg-background border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <CategoryIcon className="w-6 h-6 text-accent" />
                    <h3 className="text-lg font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="text-foreground/80 text-sm flex items-center gap-3 hover:translate-x-1 transition-transform">
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
