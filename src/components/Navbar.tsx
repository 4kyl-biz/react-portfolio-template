// components/Navbar.tsx
export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full text-primary-foreground bg-primary backdrop-blur z-50 p-4 flex justify-center gap-6 border-b border-border">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
