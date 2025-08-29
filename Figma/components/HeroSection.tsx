import { ArrowDown } from "lucide-react";
import {
  DoodleArrow,
  DoodleCircle,
  DoodleStar,
} from "./DoodleElements";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background doodle elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DoodleStar
          className="absolute top-20 left-10 w-8 h-8 text-red-accent opacity-30 wiggle"
          color="var(--red-accent)"
        />
        <DoodleCircle
          className="absolute top-32 right-20 w-12 h-12 text-red-accent opacity-20"
          color="var(--red-accent)"
        />
        <DoodleStar
          className="absolute bottom-40 left-20 w-6 h-6 text-red-accent opacity-40"
          color="var(--red-accent)"
        />
        <DoodleCircle
          className="absolute bottom-20 right-10 w-10 h-10 text-red-accent opacity-25 wiggle"
          color="var(--red-accent)"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <ImageWithFallback
            src="/placeholder-avatar.jpg"
            alt="Oliver Rågmo"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover sketch-shadow"
          />
        </div>

        <div className="relative inline-block mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello there! I'm{" "}
            <span className="relative inline-block">
              Oliver
              <DoodleCircle
                className="absolute -inset-16 w-full h-full text-red-accent opacity-20"
                color="var(--red-accent)"
              />
            </span>
          </h1>
        </div>

        <div className="relative mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A game designer from Stockholm who loves creating{" "}
            <span className="relative inline-block text-red-accent font-semibold">
              engaging experiences
            </span>{" "}
            and bringing ideas to life through thoughtful
            design.
          </p>
          <DoodleArrow
            className="absolute -left-11 top-11 w-16 h-8 text-red-accent opacity-60 hidden lg:block"
            color="var(--red-accent)"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-red-accent text-white px-8 py-3 rounded-xl hover:bg-red-accent-dark transition-colors duration-200 sketch-shadow hover:scale-105 transform"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-red-accent text-red-accent px-8 py-3 rounded-xl hover:bg-red-accent hover:text-white transition-all duration-200 hover:scale-105 transform"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-red-accent transition-colors duration-200"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}