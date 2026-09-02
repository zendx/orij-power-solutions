import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { GeneratorCard } from "@/components/GeneratorCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  bandFor,
  bands,
  brandOptions,
  configurationOptions,
  generators,
  type BandId,
  type GeneratorBrand,
  type GeneratorConfiguration,
} from "@/data/generators";

export const Route = createFileRoute("/generators/")({
  head: () => ({
    meta: [
      { title: "Generator Catalogue | Orij Power" },
      {
        name: "description",
        content:
          "Browse Orij Power generator photography from 12.5 kVA to 1000 kVA. Filter by capacity, manufacturer and configuration, then request pricing.",
      },
      { property: "og:title", content: "Generator Catalogue | Orij Power" },
      {
        property: "og:description",
        content:
          "Filterable catalogue of diesel generators with real product galleries and project pricing on enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const [band, setBand] = useState<BandId | null>(null);
  const [brand, setBrand] = useState<GeneratorBrand | null>(null);
  const [configuration, setConfiguration] = useState<GeneratorConfiguration | null>(null);
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = generators
    .filter((generator) => (band ? bandFor(generator.kva) === band : true))
    .filter((generator) => (brand ? generator.brands.includes(brand) : true))
    .filter((generator) =>
      configuration ? generator.configurations.includes(configuration) : true,
    )
    .sort((a, b) => (sort === "desc" ? b.kva - a.kva : a.kva - b.kva));

  const visiblePhotoCount = list.reduce((total, generator) => total + generator.gallery.length, 0);

  const reset = () => {
    setBand(null);
    setBrand(null);
    setConfiguration(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        <section className="border-b border-navy/10 p-8 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-orange">
              // Catalogue selector
            </p>
            <h1 className="font-display text-6xl leading-none tracking-wide lg:text-7xl">
              DIESEL GENERATING SETS
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Each capacity is listed once, with matching kVA photos grouped into one product
              gallery. Exact engine, alternator and installation specifications are confirmed with
              your project quotation.
            </p>
          </div>
        </section>

        <section className="bg-surface p-8 lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 grid gap-8 border border-navy/10 bg-white p-6 lg:grid-cols-3">
              <FilterGroup label="Capacity band">
                <Chip active={!band} label="All" onClick={() => setBand(null)} />
                {bands.map((option) => (
                  <Chip
                    key={option.id}
                    active={band === option.id}
                    label={option.label}
                    onClick={() => setBand(option.id)}
                  />
                ))}
              </FilterGroup>

              <FilterGroup label="Manufacturer">
                <Chip active={!brand} label="All" onClick={() => setBrand(null)} />
                {brandOptions.map((option) => (
                  <Chip
                    key={option}
                    active={brand === option}
                    label={option}
                    onClick={() => setBrand(option)}
                  />
                ))}
              </FilterGroup>

              <FilterGroup label="Configuration">
                <Chip active={!configuration} label="All" onClick={() => setConfiguration(null)} />
                {configurationOptions.map((option) => (
                  <Chip
                    key={option}
                    active={configuration === option}
                    label={option}
                    onClick={() => setConfiguration(option)}
                  />
                ))}
              </FilterGroup>
            </div>

            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Showing {list.length} of {generators.length} capacity groups // {visiblePhotoCount}{" "}
                {visiblePhotoCount === 1 ? "photo" : "photos"}
              </p>
              <button
                type="button"
                onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
                className="border border-navy/20 bg-white px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
              >
                Sort: kVA {sort === "asc" ? "ascending" : "descending"}
              </button>
            </div>

            {list.length === 0 ? (
              <div className="border border-navy/10 bg-white p-12 text-center">
                <p className="font-display text-3xl tracking-wide">NO UNITS MATCH THIS FILTER</p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-6 inline-block bg-orange px-6 py-3 font-mono text-xs uppercase tracking-widest text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid min-w-0 grid-cols-1 gap-px border border-navy/10 bg-navy/10 md:grid-cols-2 lg:grid-cols-3">
                {list.map((generator) => (
                  <GeneratorCard key={generator.slug} generator={generator} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div role="group" aria-label={label}>
      <h2 className="label-mono mb-3 text-muted-foreground">{label}</h2>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "border-2 border-navy bg-navy px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          : "border-2 border-navy/15 px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:border-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
      }
    >
      {label}
    </button>
  );
}
