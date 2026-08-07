type NavLink = {
  label: string;
  id: string;
};

type DesktopNavProps = {
  navLinks: NavLink[];
  scrolled: boolean;
  darkBg: string;
};

export default function DesktopNav({
  navLinks,
  scrolled,
  darkBg,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map(({ label, id }) => (
        <a
          key={id}
          href={`#${id}`}
          className="text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 hover:text-[#C9A66B]"
          style={{
            color: scrolled ? darkBg : "rgba(255,255,255,0.8)",
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}