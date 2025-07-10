// components/Navbar.tsx
export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50 p-4 flex justify-center gap-6 border-b border-white/10">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm text-white hover:text-blue-400 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
