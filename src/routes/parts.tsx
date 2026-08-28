import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EnquiryChannels } from "@/components/EnquiryChannels";

export const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: "Genuine Generator Spare Parts | Orij Power" },
      {
        name: "description",
        content:
          "Filters, alternators, controllers, ATS panels and consumables for Perkins, Cummins and Baudouin generating sets. Pricing on enquiry.",
      },
      { property: "og:title", content: "Genuine Generator Spare Parts | Orij Power" },
      {
        property: "og:description",
        content: "Filters, controllers, ATS panels and consumables held in Lagos. Pricing on enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Parts,
});

const parts = [
  { t: "Filter sets", d: "Oil, fuel, air and water separator kits per engine family" },
  { t: "Alternators", d: "Stamford and Leroy Somer replacements, rewind service" },
  { t: "Controllers", d: "DeepSea 4520 / 6020 / 7320 / 8610 modules and looms" },
  { t: "ATS & panels", d: "Changeover panels 63 A to 3200 A, motorised and contactor type" },
  { t: "Batteries & chargers", d: "12 V / 24 V banks with trickle charging" },
  { t: "Consumables", d: "15W40 engine oil, coolant, AVRs, sensors, belts and hoses" },
];

function Parts() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section className="border-b border-navy/10 p-8 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-orange">
              // Spare parts
            </p>
            <h1 className="font-display text-6xl leading-none tracking-wide lg:text-7xl">
              GENUINE PARTS, HELD IN STOCK
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Send us the engine serial or controller model and we confirm availability and price.
              Parts are not sold through an online basket — every order is confirmed by an engineer.
            </p>
          </div>
        </section>

        <section className="bg-surface p-8 lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-px bg-navy/10 md:grid-cols-3">
              {parts.map((p) => (
                <div key={p.t} className="bg-white p-8">
                  <h2 className="font-display text-2xl tracking-wide">{p.t.toUpperCase()}</h2>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="label-mono mb-4 text-muted-foreground">Request parts pricing</h2>
              <EnquiryChannels
                subject="Spare parts enquiry — Orij Power"
                message="Hello Orij Power, I need pricing for generator spare parts. Engine model / serial:"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
