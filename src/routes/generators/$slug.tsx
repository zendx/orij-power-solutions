import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GeneratorGallery } from "@/components/GeneratorGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  formatKva,
  generators,
  getBrandLabel,
  getGenerator,
  getPrimaryPhoto,
} from "@/data/generators";

export const Route = createFileRoute("/generators/$slug")({
  loader: ({ params }) => {
    const generator = getGenerator(params.slug);
    if (!generator) throw notFound();
    return { generator };
  },
  head: ({ loaderData }) => {
    const generator = loaderData?.generator;
    const title = generator ? `${generator.name} | Orij Power` : "Generator | Orij Power";
    const description = generator
      ? `${generator.name}: ${formatKva(generator.kva)} kVA diesel generator, ${getBrandLabel(generator)}, model ${generator.model}. View product photos and request project pricing.`
      : "Diesel generator product details and pricing from Orij Power.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        ...(generator
          ? [
              {
                property: "og:image",
                content: getPrimaryPhoto(generator).src,
              },
            ]
          : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Detail,
});

function Detail() {
  const { generator } = Route.useLoaderData();
  const brandLabel = getBrandLabel(generator);
  const configurationLabel = generator.configurations.join(" / ");
  const ratingLabel = `${formatKva(generator.kva)} kVA`;

  const details: Array<[string, string]> = [
    ["Catalogue rating", ratingLabel],
    ["Manufacturer", brandLabel],
    ["Model reference", generator.model],
    ["Fuel type", generator.fuel],
    ["Configuration pictured", configurationLabel],
    ["Typical application", generator.application],
    ["Engine specification", "Confirmed with quotation"],
    ["Alternator specification", "Confirmed with quotation"],
    ["Control system", "Confirmed with quotation"],
    ["Electrical configuration", "Matched to site requirement"],
    ["Availability", "Confirmed on enquiry"],
    ["Installation", "Quoted to project scope"],
  ];

  const related = generators
    .filter((candidate) => candidate.slug !== generator.slug)
    .sort(
      (a, b) => Math.abs(a.kva - generator.kva) - Math.abs(b.kva - generator.kva) || a.kva - b.kva,
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        <div className="border-b border-navy/10 px-8 py-4 lg:px-20">
          <div className="mx-auto flex max-w-[1500px] gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-orange">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/generators" className="hover:text-orange">
              Catalogue
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-navy">{generator.model}</span>
          </div>
        </div>

        <section className="border-b border-navy/10">
          <div className="mx-auto flex min-w-0 max-w-[1500px] flex-col lg:flex-row">
            <div className="min-w-0 flex-1 bg-surface p-8 lg:p-12 xl:p-16">
              <GeneratorGallery
                key={generator.slug}
                gallery={generator.gallery}
                productName={generator.name}
              />
            </div>

            <div className="min-w-0 flex-1 p-8 lg:p-12 xl:p-16">
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="bg-navy px-3 py-1 font-mono text-xs text-white">
                  {ratingLabel}
                </span>
                <span className="bg-orange px-3 py-1 font-mono text-xs text-white">
                  {generator.gallery.length} {generator.gallery.length === 1 ? "photo" : "photos"}
                </span>
                <span className="border border-navy/20 px-3 py-1 font-mono text-xs">
                  {generator.fuel}
                </span>
              </div>

              <h1 className="font-display text-5xl leading-none tracking-wide lg:text-6xl">
                {generator.name.toUpperCase()}
              </h1>
              <p className="mt-2 font-mono text-xs uppercase leading-relaxed tracking-widest text-muted-foreground">
                Model {generator.model} // {generator.application}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{generator.summary}</p>

              <ul className="mt-8 space-y-2 border-t border-navy/10 pt-6">
                {generator.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 font-mono text-xs">
                    <span className="text-orange" aria-hidden="true">
                      &bull;
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-2 border-navy p-6">
                <p className="label-mono text-muted-foreground">Pricing</p>
                <p className="mt-2 font-display text-3xl tracking-wide">QUOTED PER PROJECT</p>
                <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                  Availability and final equipment specification are confirmed before quotation.
                  Delivery, cabling, ATS and installation can be priced for your site.
                </p>
                <Link
                  to="/enquiry/$slug"
                  params={{ slug: generator.slug }}
                  className="mt-6 block bg-orange px-6 py-4 text-center font-display text-2xl tracking-widest text-white transition-all hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  REQUEST PRICING
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy p-8 text-white lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-orange">
              // Product and supply details
            </p>
            <h2 className="mb-4 font-display text-4xl tracking-wide">{generator.model} DETAILS</h2>
            <p className="mb-10 max-w-3xl font-mono text-xs leading-relaxed text-white/60">
              The catalogue rating, manufacturer and model references come from the supplied product
              photography. Final technical selections are documented with your quotation.
            </p>
            <div className="grid gap-x-16 md:grid-cols-2">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-6 border-b border-white/10 py-3"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                    {label}
                  </span>
                  <span className="text-right font-mono text-sm tabular-nums">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface p-8 lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="mb-10 font-display text-4xl tracking-wide">COMPARE NEARBY RATINGS</h2>
            <div className="grid gap-px border border-navy/10 bg-navy/10 md:hidden">
              {related.map((candidate) => (
                <Link
                  key={candidate.slug}
                  to="/generators/$slug"
                  params={{ slug: candidate.slug }}
                  className="flex items-center justify-between gap-5 bg-white p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  <span>
                    <span className="block font-mono text-xs font-bold">{candidate.model}</span>
                    <span className="mt-1 block font-mono text-[10px] uppercase text-muted-foreground">
                      {getBrandLabel(candidate)} // {candidate.configurations.join(" / ")}
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-xs font-bold text-orange">
                    {formatKva(candidate.kva)} kVA
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden w-full max-w-full overflow-x-auto border border-navy/10 bg-white md:block">
              <table className="w-full min-w-[680px] font-mono text-xs">
                <thead>
                  <tr className="border-b border-navy/10 text-left">
                    <th className="p-4 label-mono text-muted-foreground">Product</th>
                    <th className="p-4 label-mono text-muted-foreground">Rating</th>
                    <th className="p-4 label-mono text-muted-foreground">Manufacturer</th>
                    <th className="p-4 label-mono text-muted-foreground">Configuration</th>
                    <th className="p-4">
                      <span className="sr-only">View product</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {related.map((candidate) => (
                    <tr key={candidate.slug} className="border-b border-navy/5">
                      <td className="p-4 font-bold">{candidate.model}</td>
                      <td className="p-4 tabular-nums">{formatKva(candidate.kva)} kVA</td>
                      <td className="p-4">{getBrandLabel(candidate)}</td>
                      <td className="p-4">{candidate.configurations.join(" / ")}</td>
                      <td className="p-4 text-right">
                        <Link
                          to="/generators/$slug"
                          params={{ slug: candidate.slug }}
                          className="uppercase tracking-widest text-orange hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                        >
                          View <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
