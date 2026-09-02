import { Link } from "@tanstack/react-router";
import { formatKva, getBrandLabel, getPrimaryPhoto, type Generator } from "@/data/generators";

export function GeneratorCard({ generator }: { generator: Generator }) {
  const primaryPhoto = getPrimaryPhoto(generator);
  const brandLabel = getBrandLabel(generator);
  const configurationLabel = generator.configurations.join(" / ");

  return (
    <Link
      to="/generators/$slug"
      params={{ slug: generator.slug }}
      aria-label={`View ${generator.name} photos and product details`}
      className="group flex min-w-0 flex-col bg-white p-6 transition-all hover:ring-2 hover:ring-orange focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
    >
      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden border border-navy/5 bg-surface p-3">
        <img
          src={primaryPhoto.src}
          alt={primaryPhoto.alt}
          loading="lazy"
          decoding="async"
          width={1024}
          height={768}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {generator.gallery.length > 1 ? (
          <span className="absolute bottom-2 right-2 bg-navy px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-white">
            {generator.gallery.length} photos
          </span>
        ) : null}
      </div>

      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl tracking-wide">{generator.name.toUpperCase()}</h3>
          <p className="font-mono text-[10px] uppercase text-muted-foreground">
            {brandLabel} // Model {generator.model}
          </p>
        </div>
        <span className="shrink-0 bg-navy px-2 py-1 font-mono text-xs text-white">
          {formatKva(generator.kva)} kVA
        </span>
      </div>

      <table className="mt-auto w-full table-fixed border-t border-navy/5 font-mono text-[10px]">
        <tbody>
          <tr className="border-b border-navy/5">
            <td className="py-2 uppercase text-muted-foreground">Catalogue rating</td>
            <td className="py-2 text-right font-bold">{formatKva(generator.kva)} kVA</td>
          </tr>
          <tr className="border-b border-navy/5">
            <td className="py-2 uppercase text-muted-foreground">Manufacturer</td>
            <td className="py-2 text-right">{brandLabel}</td>
          </tr>
          <tr className="border-b border-navy/5">
            <td className="py-2 pr-4 uppercase text-muted-foreground">Configuration</td>
            <td className="py-2 text-right">{configurationLabel}</td>
          </tr>
        </tbody>
      </table>

      <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-orange">
        View photos &amp; details <span aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
