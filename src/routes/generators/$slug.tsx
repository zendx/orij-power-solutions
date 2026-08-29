import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { generators, getGenerator } from "@/data/generators";

export const Route = createFileRoute("/generators/$slug")({
  loader: ({ params }) => {
    const generator = getGenerator(params.slug);
    if (!generator) throw notFound();
    return { generator };
  },
  head: ({ loaderData }) => {
    const g = loaderData?.generator;
    const title = g ? `${g.name} — ${g.kva} kVA Datasheet | Orij Power` : "Generator | Orij Power";
    const description = g
      ? `${g.name}: ${g.kva} kVA prime / ${g.standbyKva} kVA standby, ${g.engine} engine, ${g.alternator} alternator. Full specification and pricing on enquiry.`
      : "Diesel generator specification from Orij Power.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Detail,
});

function Detail() {
  const { generator: g } = Route.useLoaderData();

  const specs: Array<[string, string]> = [
    ["Prime power", `${g.kw} kW / ${g.kva} kVA`],
    ["Standby power", `${g.standbyKva} kVA`],
    ["Engine", g.engine],
    ["Cylinders", g.cylinders],
    ["Alternator", g.alternator],
    ["Control system", g.controller],
    ["Phase", g.phase],
    ["Voltage", g.voltage],
    ["Frequency", g.frequency],
    ["Cooling", g.cooling],
    ["Starting", g.starting],
    ["Fuel", g.fuel],
    ["Fuel consumption", g.consumption],
    ["Fuel tank", g.tank],
    ["Runtime", g.runtime],
    ["Noise level", g.noise],
    ["Enclosure", g.enclosure],
    ["Dimensions (L x W x H)", g.dimensions],
    ["Dry weight", g.weight],
    ["Duty rating", g.duty],
  ];

  const related = generators.filter((x) => x.slug !== g.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        <div className="border-b border-navy/10 px-8 py-4 lg:px-20">
          <div className="mx-auto flex max-w-[1500px] gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-orange">
              Home
            </Link>
            <span>/</span>
            <Link to="/generators" className="hover:text-orange">
              Catalogue
            </Link>
            <span>/</span>
            <span className="text-navy">{g.model}</span>
          </div>
        </div>

        <section className="border-b border-navy/10">
          <div className="mx-auto flex max-w-[1500px] flex-col lg:flex-row">
            <div className="flex-1 bg-surface p-8 lg:p-16">
              <img
                src={g.gallery[0]}
                alt={`${g.name} diesel generator`}
                width={1024}
                height={768}
                className="w-full object-contain"
              />
              <div className="mt-4 grid grid-cols-3 gap-2">
                {g.gallery.map((src, i) => (
                  <div key={i} className="border border-navy/10 bg-white p-2">
                    <img
                      src={src}
                      alt={`${g.name} view ${i + 1}`}
                      loading="lazy"
                      width={400}
                      height={300}
                      className="aspect-video w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 p-8 lg:p-16">
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="bg-navy px-3 py-1 font-mono text-xs text-white">
                  {g.kva} kVA
                </span>
                <span className="bg-orange px-3 py-1 font-mono text-xs text-white">
                  {g.duty} rated
                </span>
                <span className="border border-navy/20 px-3 py-1 font-mono text-xs">
                  {g.phase}
                </span>
              </div>
              <h1 className="font-display text-5xl leading-none tracking-wide lg:text-6xl">
                {g.name.toUpperCase()}
              </h1>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Model {g.model} // {g.application}
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{g.summary}</p>

              <ul className="mt-8 space-y-2 border-t border-navy/10 pt-6">
                {g.highlights.map((h) => (
                  <li key={h} className="flex gap-3 font-mono text-xs">
                    <span className="text-orange">▪</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-2 border-navy p-6">
                <p className="label-mono text-muted-foreground">Pricing</p>
                <p className="mt-2 font-display text-3xl tracking-wide">QUOTED PER PROJECT</p>
                <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                  Orij Power does not sell generators online. Installation scope, cabling, ATS and
                  logistics change the figure, so an engineer prices your site directly.
                </p>
                <Link
                  to="/enquiry/$slug"
                  params={{ slug: g.slug }}
                  className="mt-6 block bg-orange px-6 py-4 text-center font-display text-2xl tracking-widest text-white transition-all hover:brightness-110"
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
              // Technical datasheet
            </p>
            <h2 className="mb-10 font-display text-4xl tracking-wide">
              {g.model} SPECIFICATIONS
            </h2>
            <div className="grid gap-x-16 md:grid-cols-2">
              {specs.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-6 border-b border-white/10 py-3"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                    {k}
                  </span>
                  <span className="font-mono text-sm tabular-nums">{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-white/40">
              Ratings per ISO 8528. Data subject to change without notice.
            </p>
          </div>
        </section>

        <section className="bg-surface p-8 lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="mb-10 font-display text-4xl tracking-wide">COMPARE OTHER UNITS</h2>
            <div className="overflow-x-auto border border-navy/10 bg-white">
              <table className="w-full min-w-[640px] font-mono text-xs">
                <thead>
                  <tr className="border-b border-navy/10 text-left">
                    <th className="p-4 label-mono text-muted-foreground">Model</th>
                    <th className="p-4 label-mono text-muted-foreground">Prime kVA</th>
                    <th className="p-4 label-mono text-muted-foreground">Engine</th>
                    <th className="p-4 label-mono text-muted-foreground">Enclosure</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {related.map((r) => (
                    <tr key={r.slug} className="border-b border-navy/5">
                      <td className="p-4 font-bold">{r.model}</td>
                      <td className="p-4 tabular-nums">{r.kva}</td>
                      <td className="p-4">{r.engine}</td>
                      <td className="p-4">{r.enclosure}</td>
                      <td className="p-4 text-right">
                        <Link
                          to="/generators/$slug"
                          params={{ slug: r.slug }}
                          className="uppercase tracking-widest text-orange"
                        >
                          View →
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
