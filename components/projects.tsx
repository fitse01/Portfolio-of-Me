'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { getAllProjects } from '@/lib/projects-data';

export function Projects() {
  const projects = getAllProjects();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Projects</h2>
          <span className="hidden md:block text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            Selected Work
          </span>
        </div>

        {/* Vertical Project List */}
        <div className="flex flex-col divide-y divide-accent/15">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group block"
            >
              {/* Top border marker */}
              <div className="relative">
                <span className="absolute -top-px left-0 w-6 h-px bg-accent/60 group-hover:w-full transition-all duration-500" />
              </div>

              <div className="flex flex-col md:flex-row items-start gap-8 py-10 group-hover:bg-accent/[0.03] transition-colors duration-300 rounded-xl px-2">
                
                {/* Project Number */}
                <span className="hidden md:block text-xs font-mono text-muted-foreground/50 pt-1 w-8 shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Thumbnail */}
                <div className="w-full md:w-48 lg:w-56 shrink-0">
                  <div
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}
                  >
                    {/* Placeholder visual — replace with real screenshots */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/20 text-6xl font-black select-none">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    {/* Overlay shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Category */}
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                    {project.category}
                  </p>

                  {/* Title + Arrow */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-1" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed mb-5 max-w-2xl">
                    {project.shortDescription}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-accent/20 text-accent/80 bg-accent/5 hover:bg-accent/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
