import Image from "next/image";
import { Badge } from "./ui/badge";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "AWS",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive Design",
  "Vercel",
];

export default function About() {
  return (
    <section id="about" className="min-h-screen px-4 py-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <Image
          src="/images/profile2.png"
          alt="Lee Li"
          width={200}
          height={200}
          className="rounded-full border border-muted shadow-md mb-6 mx-auto"
        />
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
        <div className="grid grid-cols-1 gap-10 items-start">
          <div className="flex flex-col items-center md:items-start text-left">
            <h3 className="text-xl font-bold mb-2">Get to know me!</h3>
            <p className="text-muted-foreground mb-4">
              I'm a <strong>Frontend-Focused Web Developer</strong> building and
              managing web apps using modern frameworks. I enjoy creating
              products that are fast, accessible, and visually engaging. Check
              out some of my work in the{" "}
              <a
                href="#projects"
                className="text-primary font-medium underline"
              >
                Projects
              </a>{" "}
              section.
            </p>
            <p className="text-muted-foreground mb-4">
              I like sharing what I learn in tech and open source. Feel free to
              connect with me on
              <a
                href="https://www.linkedin.com/in/ka-yuen-li-b39669147/"
                target="_blank"
                className="text-primary font-medium ml-1"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-muted-foreground text-sm px-3 py-1 rounded-md shadow"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
