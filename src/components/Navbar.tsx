import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-6 px-16 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image
          src="/images/profile.png"
          alt="Lee Li"
          width={40}
          height={40}
          className="rounded-full border"
        />
        <span className="text-lg font-bold">Lee Li</span>
      </div>
      <nav className="hidden md:flex gap-12 text-lg font-bold">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
