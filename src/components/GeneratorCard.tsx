import { Link } from "@tanstack/react-router";
import type { Generator } from "@/data/generators";

export function GeneratorCard({ generator }: { generator: Generator }) {
  return (
    <Link
      to="/generators/$slug"
      params={{ slug: generator.slug }}
      className="group flex flex-col bg-white p-6 transition-all hover:ring-2 hover:ring-orange"
    >
      <div className="mb-6 aspect-video w-full overflow-hidden bg-surface">
        <img
          src={generator.image}
          alt={`${generator.name} diesel generator`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl tracking-wide">{generator.name.toUpperCase()}</h3>
          <p className="font-mono text-[10px] uppercase text-muted-foreground">
            {generator.engine.split(" ")[0]} engine // {generator.alternator.split(" ")[0]}{" "}
            alternator
          </p>
        </div>
        <span className="shrink-0 bg-navy px-2 py-1 font-mono text-xs text-white">
          {generator.kva} kVA
        </span>
      </div>
      <table className="mt-auto w-full border-t border-navy/5 font-mono text-[10px]">
        <tbody>
          <tr className="border-b border-navy/5">
            <td className="py-2 uppercase text-muted-foreground">Prime power</td>
            <td className="py-2 text-right font-bold">
              {generator.kw} kW / {generator.kva} kVA
            </td>
          </tr>
          <tr className="border-b border-navy/5">
            <td className="py-2 uppercase text-muted-foreground">Enclosure</td>
            <td className="py-2 text-right">{generator.enclosure}</td>
          </tr>
          <tr className="border-b border-navy/5">
            <td className="py-2 uppercase text-muted-foreground">Duty</td>
            <td className="py-2 text-right">{generator.duty}</td>
          </tr>
        </tbody>
      </table>
      <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-orange">
        View specification →
      </span>
    </Link>
  );
}
