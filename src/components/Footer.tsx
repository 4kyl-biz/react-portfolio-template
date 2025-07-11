import { socialLinks } from "@/lib/data";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-white/10 py-10 px-4 mt-20 relative">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <Image
          src="/images/profile.png"
          alt="Lee Li"
          width={80}
          height={80}
          className="rounded-full border"
        />

        <p className="text-xl font-semibold max-w-sm leading-relaxed text-center">
          Solving real problems with clean code and simple, thoughtful solutions
        </p>

        <div>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-primary-foreground rounded-full border-2 p-3 text-primary-foreground hover:bg-primary-foreground transition-colors hover:text-primary hover:scale-110 transform"
                >
                  <Icon style={{ width: "16px", height: "16px" }} />
                </Badge>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 md:mt-16">
        <p>© {new Date().getFullYear()} Lee Li. All rights reserved.</p>
      </div>

      <a
        href="#home"
        className="absolute bottom-4 right-4 bg-primary-foreground text-primary p-2 rounded-full shadow hover:bg-gray-100 transition"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </a>
    </footer>
  );
}
