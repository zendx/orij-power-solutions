import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GeneratorCard } from "@/components/GeneratorCard";
import { bandFor, bands, generators, type BandId } from "@/data/generators";

type Duty = "Prime" | "Standby";
type Enclosure = "Open Frame" | "Soundproof Canopy" | "Containerised";

export const Route = createFileRoute("/generators/")({
  head: () => ({
    meta: [
      { title: "Generator Catalogue | Orij Power" },
      {
        name: "description",
        content:
          "Browse Orij Power diesel generating sets from 15 kVA to 2000 kVA. Filter by capacity band, duty rating and enclosure, then request pricing.",
      },
      { property: "og:title", content: "Generator Catalogue | Orij Power" },
      {
        property: "og:description",
        content:
          "Filterable catalogue of prime and standby diesel generators with full datasheets.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Catalogue,
});

const enclosures: Enclosure[] = ["Open Frame", "Soundproof Canopy", "Containerised"];
const duties: Duty[] = ["Prime", "Standby"];

function Catalogue() {
  const [band, setBand] = useState<BandId | null>(null);
  const [duty, setDuty] = useState<Duty | null>(null);
  const [enclosure, setEnclosure] = useState<Enclosure | null>(null);
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const list = generators
    .filter((g) => (band ? bandFor(g.kva) === band : true))
    .filter((g) => (duty ? g.duty === duty : true))
    .filter((g) => (enclosure ? g.enclosure === enclosure : true))
    .sort((a, b) => (sort === "desc" ? b.kva - a.kva : a.kva - b.kva));

  const reset = () => {
    setBand(null);
    setDuty(null);
    setEnclosure(null);
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
              Specifications are published in full. Prices are not listed — every installation is
              quoted per site after an engineer reviews load, cabling and installation scope.
            </p>
          </div>
        </section>

        <section className="bg-surface p-8 lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 grid gap-8 border border-navy/10 bg-white p-6 lg:grid-cols-3">
              <FilterGroup label="Capacity band">
                <Chip active={!band} label="All" onClick={() => setBand(null)} />
                {bands.map((b) => (
                  <Chip
                    key={b.id}
                    active={band === b.id}
                    label={b.label}
                    onClick={() => setBand(b.id)}
                  />
                ))}
              </FilterGroup>
              <FilterGroup label="Duty rating">
                <Chip active={!duty} label="All" onClick={() => setDuty(null)} />
                {duties.map((d) => (
                  <Chip key={d} active={duty === d} label={d} onClick={() => setDuty(d)} />
                ))}
              </FilterGroup>
              <FilterGroup label="Enclosure">
                <Chip active={!enclosure} label="All" onClick={() => setEnclosure(null)} />
                {enclosures.map((e) => (
                  <Chip
                    key={e}
                    active={enclosure === e}
                    label={e}
                    onClick={() => setEnclosure(e)}
                  />
                ))}
              </FilterGroup>
            </div>

            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <p className="font-mono text-xs uppercase text-muted-foreground">
                Showing {list.length} of {generators.length} units
              </p>
              <button
                type="button"
                onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
                className="border border-navy/20 bg-white px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-navy hover:text-white"
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
                  className="mt-6 inline-block bg-orange px-6 py-3 font-mono text-xs uppercase tracking-widest text-white"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid gap-px border border-navy/10 bg-navy/10 md:grid-cols-2 lg:grid-cols-3">
                {list.map((g) => (
                  <GeneratorCard key={g.slug} generator={g} />
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
    <div>
      <h2 className="label-mono mb-3 text-muted-foreground">{label}</h2>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "border-2 border-navy bg-navy px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-white"
          : "border-2 border-navy/15 px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:border-navy"
      }
    >
      {label}
    </button>
  );
}
