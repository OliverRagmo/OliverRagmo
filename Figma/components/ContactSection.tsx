import { Mail, MapPin, Linkedin, Github, Heart } from 'lucide-react';
import { DoodleUnderline, DoodleStar, DoodleHeart } from './DoodleElements';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DoodleHeart className="absolute top-20 left-20 w-10 h-10 text-red-accent opacity-20 wiggle" color="var(--red-accent)" />
        <DoodleStar className="absolute bottom-32 right-16 w-6 h-6 text-red-accent opacity-25" color="var(--red-accent)" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
            <DoodleUnderline className="h-3 text-red-accent opacity-60" color="var(--red-accent)" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and explore how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-50 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-red-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">oliver@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-50 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-red-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Stockholm, Sweden</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Find me online</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-card p-3 rounded-xl hover:bg-red-50 hover:text-red-accent transition-colors duration-200 sketch-shadow"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-card p-3 rounded-xl hover:bg-red-50 hover:text-red-accent transition-colors duration-200 sketch-shadow"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 sketch-shadow">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-red-accent focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-red-accent focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-red-accent focus:border-transparent transition-colors"
                >
                  <option>Game Design</option>
                  <option>UI/UX Design</option>
                  <option>Design Systems</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-red-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-accent text-white py-3 px-6 rounded-xl hover:bg-red-accent-dark transition-colors duration-200 sketch-shadow hover:scale-105 transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2025 Oliver Rågmo. Designed with{' '}
                <Heart className="inline w-4 h-4 text-red-accent fill-current" />{' '}
                in Stockholm.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-red-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-red-accent transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}