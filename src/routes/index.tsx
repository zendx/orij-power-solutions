import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GeneratorCard } from "@/components/GeneratorCard";
import { bands, generators, getPrimaryPhoto } from "@/data/generators";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orij Power | Industrial Diesel Generators in Nigeria" },
      {
        name: "description",
        content:
          "Orij Power supplies diesel generators from 12.5 kVA to 2000 kVA for homes, businesses and industry, with project pricing by call, WhatsApp or email.",
      },
      { property: "og:title", content: "Orij Power | Industrial Diesel Generators" },
      {
        property: "og:description",
        content:
          "Total power solutions from 12.5 kVA to 2000 kVA, with real product galleries and pricing on enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const featured = generators.filter((g) =>
  ["diesel-generator-20-kva", "fg-wilson-150-kva", "fg-wilson-1000-kva"].includes(g.slug),
);
const heroGenerator = generators.find((generator) => generator.slug === "fg-wilson-300-kva")!;
const heroPhoto = getPrimaryPhoto(heroGenerator);
const cataloguePhotoCount = generators.reduce(
  (total, generator) => total + generator.gallery.length,
  0,
);

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        <section className="border-b border-navy/10">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-1 animate-breaker flex-col justify-center p-8 lg:p-20">
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-orange">
                // Reliable power for home &amp; business
              </p>
              <h1 className="mb-8 text-balance font-display text-6xl leading-[0.85] tracking-wide sm:text-7xl lg:text-8xl">
                TOTAL POWER
                <br />
                SOLUTION
              </h1>
              <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
                Diesel generating sets from 12.5 kVA to 2000 kVA for homes, businesses and industry.
                Review our currently photographed units, then talk to an engineer for final
                specification and pricing.
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {bands.map((band) => (
                  <Link
                    key={band.id}
                    to="/generators"
                    className="border-2 border-navy py-4 text-center font-mono text-xs font-bold transition-all hover:bg-navy hover:text-white"
                  >
                    {band.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid flex-1 place-items-center bg-surface p-8 lg:p-12">
              <div className="relative w-full">
                <img
                  src={heroPhoto.src}
                  alt={heroPhoto.alt}
                  width={1200}
                  height={900}
                  decoding="async"
                  className="aspect-[4/3] w-full bg-white object-contain p-4 shadow-2xl"
                />
                <div className="absolute bottom-0 right-0 bg-orange px-3 py-1 font-mono text-[10px] text-white">
                  CURRENT CATALOGUE PHOTOGRAPHY
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-navy/10 bg-white">
          <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-px bg-navy/10 lg:grid-cols-4">
            {[
              { k: "12.5 – 2000", v: "kVA supply range" },
              { k: String(generators.length), v: "Capacity groups" },
              { k: String(cataloguePhotoCount), v: "Catalogue images" },
              { k: "24/7", v: "Technical response line" },
            ].map((stat) => (
              <div key={stat.v} className="bg-white p-8">
                <p className="font-display text-4xl tracking-wide text-navy">{stat.k}</p>
                <p className="label-mono mt-2 text-muted-foreground">{stat.v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface p-8 lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="font-display text-4xl tracking-wide">SELECTED UNITS</h2>
                <p className="mt-2 font-mono text-xs uppercase text-muted-foreground">
                  {generators.length} capacity groups // {cataloguePhotoCount} product photos
                </p>
              </div>
              <Link
                to="/generators"
                className="border border-navy/20 bg-white px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-navy hover:text-white"
              >
                Open full catalogue
              </Link>
            </div>
            <div className="grid gap-px border border-navy/10 bg-navy/10 md:grid-cols-3">
              {featured.map((g) => (
                <GeneratorCard key={g.slug} generator={g} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy p-8 text-white lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <h2 className="mb-12 font-display text-4xl tracking-wide">HOW ORDERING WORKS</h2>
            <div className="grid gap-px bg-white/10 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "VIEW THE PRODUCT",
                  d: "Review the stated rating, visible model reference and every supplied photo. Matching kVA views stay together in one gallery.",
                },
                {
                  n: "02",
                  t: "REQUEST PRICING",
                  d: "We do not sell online. Choose WhatsApp, a call back, or email and an engineer confirms scope and price.",
                },
                {
                  n: "03",
                  t: "DELIVERY & COMMISSIONING",
                  d: "Load bank testing, installation, cabling, ATS integration and a maintenance schedule are quoted with the set.",
                },
              ].map((step) => (
                <div key={step.n} className="bg-navy p-8">
                  <span className="label-mono text-orange">{step.n}</span>
                  <h3 className="mt-4 font-display text-2xl tracking-wide">{step.t}</h3>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-white/60">{step.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/generators"
                className="bg-orange px-8 py-4 font-display text-xl tracking-widest text-white hover:brightness-110"
              >
                BROWSE CATALOGUE
              </Link>
              <a
                href={`tel:${site.phone}`}
                className="border border-white/20 px-8 py-4 font-display text-xl tracking-widest hover:bg-white/10"
              >
                CALL {site.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
