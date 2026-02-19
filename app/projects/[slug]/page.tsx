import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, getAllProjects } from '@/lib/projects-data';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Project Details',
  description: 'View detailed project information',
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex(p => p.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  return (
    <main className="bg-background min-h-screen">
      {/* Navigation */}
      <div className="sticky top-0 z-40 border-b border-accent/20 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link 
            href="/#projects"
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 border-b border-accent/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
                {project.category}
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground text-pretty">
                {project.title}
              </h1>
            </div>

            <p className="text-xl text-foreground/70 max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-4 pt-6">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 text-accent font-semibold hover:bg-accent/10 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 border-b border-accent/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Challenge</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Solution</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Outcome */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Outcome</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Long Description */}
          <div className="space-y-4 pt-8 border-t border-accent/20">
            <h2 className="text-3xl font-bold text-foreground">Project Overview</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation to Next/Prev Projects */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Previous Project */}
            <Link href={`/projects/${prevProject.slug}`}>
              <div className="group relative overflow-hidden rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer h-full p-8 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm hover:from-background/90 hover:to-background/70">
                <div className="space-y-3">
                  <p className="text-sm text-accent uppercase tracking-widest">Previous Project</p>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {prevProject.title}
                  </h3>
                  <p className="text-foreground/70">
                    {prevProject.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-accent pt-4">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span>View Project</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Next Project */}
            <Link href={`/projects/${nextProject.slug}`}>
              <div className="group relative overflow-hidden rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer h-full p-8 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm hover:from-background/90 hover:to-background/70">
                <div className="space-y-3">
                  <p className="text-sm text-accent uppercase tracking-widest">Next Project</p>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-foreground/70">
                    {nextProject.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-accent pt-4 justify-end">
                    <span>View Project</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
