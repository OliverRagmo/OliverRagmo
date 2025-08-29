import { ExternalLink, Github } from 'lucide-react';
import { DoodleUnderline, DoodleCircle, DoodleStar } from './DoodleElements';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useProjects } from '../hooks/useProjects';

export default function WorkSection() {
  const { getFeaturedProjects, loading } = useProjects();

  return (
    <section id="work" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DoodleCircle className="absolute top-32 left-10 w-12 h-12 text-red-accent opacity-10" color="var(--red-accent)" />
        <DoodleStar className="absolute bottom-40 right-20 w-8 h-8 text-red-accent opacity-15 wiggle" color="var(--red-accent)" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <DoodleUnderline className="h-3 text-red-accent opacity-60" color="var(--red-accent)" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my approach to design and problem-solving.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden h-80 animate-pulse">
                <div className="bg-muted h-48"></div>
                <div className="p-6 space-y-3">
                  <div className="bg-muted h-6 rounded"></div>
                  <div className="bg-muted h-4 rounded"></div>
                  <div className="bg-muted h-4 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFeaturedProjects().map((project, index) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden sketch-shadow hover:scale-105 transition-transform duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors"
                        title="View project"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 rounded-lg hover:bg-white transition-colors"
                        title="View source code"
                      >
                        <Github className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-red-50 text-red-accent rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my complete portfolio on GitHub or get in touch to discuss a project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#"
              className="bg-red-accent text-white px-6 py-3 rounded-xl hover:bg-red-accent-dark transition-colors duration-200 sketch-shadow hover:scale-105 transform inline-flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-red-accent text-red-accent px-6 py-3 rounded-xl hover:bg-red-accent hover:text-white transition-all duration-200 hover:scale-105 transform"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}