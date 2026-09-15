import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GeneratorPreview } from "@/components/GeneratorPreview";
import { EnquiryChannels } from "@/components/EnquiryChannels";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { formatKva, getBrandLabel, getGenerator, getPrimaryPhoto } from "@/data/generators";
import { site } from "@/lib/site";

export const Route = createFileRoute("/enquiry/$slug")({
  loader: ({ params }) => {
    const generator = getGenerator(params.slug);
    if (!generator) throw notFound();
    return { generator };
  },
  head: ({ loaderData }) => {
    const generator = loaderData?.generator;
    const title = generator
      ? `Request Pricing - ${generator.name} | Orij Power`
      : "Request Pricing | Orij Power";
    const description = generator
      ? `Request pricing for the ${generator.name} (${formatKva(generator.kva)} kVA) by WhatsApp, phone call or email. An Orij Power engineer confirms the specification and project scope.`
      : "Request generator pricing from Orij Power by WhatsApp, call or email.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Enquiry,
});

function Enquiry() {
  const { generator } = Route.useLoaderData();
  const brandLabel = getBrandLabel(generator);
  const primaryPhoto = getPrimaryPhoto(generator);
  const ratingLabel = `${formatKva(generator.kva)} kVA`;
  const configurationLabel = generator.configurations.join(" / ");
  const reference = `${generator.model} / ${ratingLabel} / ${brandLabel}`;
  const message = `Hello Orij Power, I would like pricing for the ${generator.name} (${reference}). Please confirm the available specification and quote for delivery and installation.`;
  const subject = `Pricing request - ${generator.model} (${ratingLabel})`;

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main>
        <section className="border-b border-navy/10 bg-surface p-8 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-orange">
              // Step 02 - request pricing
            </p>
            <h1 className="font-display text-5xl leading-none tracking-wide lg:text-7xl">
              YOU ARE ONE STEP FROM A QUOTATION
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              We do not process online payments. Choose the channel that suits you and an Orij Power
              sales engineer confirms availability, equipment specification, installation scope and
              price for this unit.
            </p>
          </div>
        </section>

        <section className="p-8 lg:p-20">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_420px]">
            <div>
              <h2 className="label-mono mb-4 text-muted-foreground">Select a channel</h2>
              <EnquiryChannels subject={subject} message={message} />

              <div className="mt-10 border-2 border-navy/10 p-6">
                <h3 className="label-mono text-muted-foreground">Message we will send with you</h3>
                <p className="mt-3 font-mono text-xs leading-relaxed text-navy/80">{message}</p>
              </div>

              <div className="mt-10 grid gap-px bg-navy/10 sm:grid-cols-3">
                {[
                  { t: "Response time", d: "Within 1 working hour on WhatsApp" },
                  { t: "Quote validity", d: "14 days from issue" },
                  { t: "Included", d: "Delivery, install and ATS options priced" },
                ].map((item) => (
                  <div key={item.t} className="bg-white p-5">
                    <p className="label-mono text-muted-foreground">{item.t}</p>
                    <p className="mt-2 font-mono text-xs">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="h-fit border-2 border-navy">
              <div className="bg-navy p-6 text-white">
                <p className="label-mono text-orange">Selected unit</p>
                <h2 className="mt-2 font-display text-3xl tracking-wide">
                  {generator.name.toUpperCase()}
                </h2>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
                  {reference}
                </p>
              </div>

              <div className="aspect-[4/3] bg-surface">
                <GeneratorPreview photo={primaryPhoto} />
              </div>

              <table className="w-full font-mono text-xs">
                <tbody>
                  {[
                    ["Catalogue rating", ratingLabel],
                    ["Manufacturer", brandLabel],
                    ["Model reference", generator.model],
                    ["Fuel", generator.fuel],
                    ["Configuration", configurationLabel],
                    ["Availability", "Confirmed on enquiry"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-t border-navy/10">
                      <td className="p-3 uppercase text-muted-foreground">{label}</td>
                      <td className="p-3 text-right">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="border-t border-navy/10 p-4">
                <Link
                  to="/generators/$slug"
                  params={{ slug: generator.slug }}
                  className="font-mono text-[10px] uppercase tracking-widest text-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                >
                  <span aria-hidden="true">&larr;</span> Back to product details
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-navy p-8 text-white lg:p-20">
          <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl tracking-wide">PREFER TO TALK FIRST?</h2>
              <p className="mt-2 font-mono text-xs text-white/60">
                Sales desk {site.phoneDisplay} // Service {site.servicePhoneDisplay}
              </p>
            </div>
            <Link
              to="/contact"
              className="border border-white/20 px-8 py-4 font-display text-xl tracking-widest hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
            >
              CONTACT OPTIONS
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
