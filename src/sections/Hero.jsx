import React from "react";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import Button from "../components/Button";
import AnimatedBorderButton from "../components/AnimatedBorderButton";

// Pre-generated floating dots
const dots = Array.from({ length: 30 }).map(() => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: 15 + Math.random() * 20,
  delay: Math.random() * 5,
}));

const Hero = () => {
  const handleContactClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Software Engineer • React Specialist
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Crafting <span className="text-primary glow-text">digital</span>
              <br />
              experiences with
              <br />
              <span className="font-serif italic font-normal text-white">
                precision.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Hi, I'm <strong>Atta Ullah</strong> — a software engineer
              specializing in React and JavaScript.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Contact Me button */}
              <Button size="lg" onClick={handleContactClick}>
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Download CV button */}
              <a
                href="/Atta_Ullah_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <AnimatedBorderButton className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[Github, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative max-w-md mx-auto">
            <div className="glass rounded-3xl p-2">
              <img
                src="/profile-photo.jpg"
                alt="Atta Ullah"
                className="w-full aspect-[2/3] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
