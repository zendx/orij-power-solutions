import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/generators", label: "Generators" },
  { to: "/service", label: "Service" },
  { to: "/parts", label: "Spare Parts" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-navy/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="Orij Power emblem"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="leading-none">
            <span className="block font-display text-3xl tracking-wide text-navy">ORIJ POWER</span>
            <span className="label-mono block text-navy/40">Powering Reliability</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-xs font-semibold uppercase tracking-widest md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-navy transition-colors hover:text-orange"
              activeProps={{ className: "text-orange" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/generators"
            className="bg-orange px-5 py-2 text-white transition-colors hover:bg-navy"
          >
            Request Quote
          </Link>
        </nav>

        <Link
          to="/generators"
          className="bg-orange px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-white md:hidden"
        >
          Catalogue
        </Link>
      </div>
    </header>
  );
}
