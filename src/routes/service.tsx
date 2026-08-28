import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import controllerImg from "@/assets/gen-controller.jpg";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Generator Service & Maintenance | Orij Power" },
      {
        name: "description",
        content:
          "Planned maintenance, load bank testing, ATS integration and 24/7 breakdown response for diesel generating sets across Nigeria.",
      },
      { property: "og:title", content: "Generator Service & Maintenance | Orij Power" },
      {
        property: "og:description",
        content: "Planned maintenance contracts, commissioning and 24/7 breakdown response.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Service,
});

const services = [
  {
    n: "01",
    t: "SIZING & LOAD STUDY",
    d: "We measure or model your load profile, motor starting currents and future expansion before recommending a rating.",
  },
  {
    n: "02",
    t: "INSTALLATION & COMMISSIONING",
    d: "Foundation, exhaust routing, cabling, earthing, ATS and changeover panel integration, then load bank verification.",
  },
  {
    n: "03",
    t: "PLANNED MAINTENANCE",
    d: "250 / 500 / 1000 hour schedules with genuine filters, oil analysis and coolant treatment records.",
  },
  {
    n: "04",
    t: "BREAKDOWN RESPONSE",
    d: "24/7 technical line with regional engineers in Lagos, Abuja and Port Harcourt.",
  },
];

function Service() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section className="border-b border-navy/10">
          <div className="mx-auto flex max-w-[1500px] flex-col lg:flex-row">
            <div className="flex-1 p-8 lg:p-20">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-orange">
                // Service division
              </p>
              <h1 className="font-display text-6xl leading-none tracking-wide lg:text-7xl">
                KEEPING SETS ON LOAD
              </h1>
              <p className="mt-6 max-w-xl text-muted-foreground">
                A generator is only as reliable as its maintenance record. Our engineers cover the
                full lifecycle — sizing, installation, servicing and emergency response.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-block bg-orange px-8 py-4 font-display text-xl tracking-widest text-white hover:brightness-110"
              >
                BOOK A SITE VISIT
              </Link>
            </div>
            <div className="flex-1 bg-surface">
              <img
                src={controllerImg}
                alt="Generator control panel during commissioning"
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-surface p-8 lg:p-20">
          <div className="mx-auto grid max-w-[1500px] gap-px bg-navy/10 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.n} className="bg-white p-8">
                <span className="label-mono text-orange">{s.n}</span>
                <h2 className="mt-4 font-display text-3xl tracking-wide">{s.t}</h2>
                <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
