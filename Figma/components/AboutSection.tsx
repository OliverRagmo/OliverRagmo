import { MapPin, GraduationCap, Palette } from 'lucide-react';
import { DoodleUnderline, DoodleStar, DoodleHeart } from './DoodleElements';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DoodleStar className="absolute top-20 right-20 w-6 h-6 text-red-accent opacity-20" color="var(--red-accent)" />
        <DoodleHeart className="absolute bottom-32 left-16 w-8 h-8 text-red-accent opacity-15 wiggle" color="var(--red-accent)" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <DoodleUnderline className="h-3 text-red-accent opacity-60" color="var(--red-accent)" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences through thoughtful design and user-centered thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a designer based in Stockholm with a passion for creating engaging digital experiences. 
                My journey began with game design studies at Uppsala University, where I developed a deep 
                understanding of user psychology, interactive systems, and the art of creating compelling narratives.
              </p>
            </div>

            <div className="relative">
              <p className="text-lg leading-relaxed text-muted-foreground">
                What started as a fascination with games has evolved into a broader design practice. I believe 
                that the principles that make games engaging—clear feedback, intuitive interactions, and 
                meaningful progression—can be applied to any digital product to create better user experiences.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex items-center space-x-2 text-red-accent">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Stockholm, Sweden</span>
              </div>
              <div className="w-2 h-2 bg-red-accent rounded-full"></div>
              <div className="flex items-center space-x-2 text-red-accent">
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium">Uppsala University</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 sketch-shadow">
              <div className="flex items-center mb-6">
                <Palette className="w-6 h-6 text-red-accent mr-3" />
                <h3 className="text-xl font-semibold">What I Do</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium mb-1">Game Design</h4>
                    <p className="text-sm text-muted-foreground">Creating engaging gameplay mechanics and user experiences</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium mb-1">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">Designing intuitive interfaces and seamless user journeys</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium mb-1">Interactive Prototyping</h4>
                    <p className="text-sm text-muted-foreground">Bringing ideas to life through interactive mockups and prototypes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}