import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EnquiryChannels } from "@/components/EnquiryChannels";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Orij Power | Generator Sales & Service Nigeria" },
      {
        name: "description",
        content:
          "Reach the Orij Power sales and service desks by phone, WhatsApp or email. Offices in Lagos, Abuja and Port Harcourt.",
      },
      { property: "og:title", content: "Contact Orij Power" },
      {
        property: "og:description",
        content: "Phone, WhatsApp and email channels for generator pricing and technical support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        <section className="border-b border-navy/10 p-8 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1500px]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-orange">
              // Contact
            </p>
            <h1 className="font-display text-6xl leading-none tracking-wide lg:text-7xl">
              TALK TO AN ENGINEER
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Tell us the load you need to carry and we will size the set, quote it and schedule
              installation.
            </p>
          </div>
        </section>

        <section className="p-8 lg:p-20">
          <div className="mx-auto max-w-[1500px]">
            <EnquiryChannels
              subject="General enquiry — Orij Power"
              message="Hello Orij Power, I would like to discuss a generator requirement."
            />

            <div className="mt-16 grid gap-px bg-navy/10 md:grid-cols-3">
              {site.offices.map((o) => (
                <div key={o.city} className="bg-white p-8">
                  <h2 className="font-display text-3xl tracking-wide">{o.city.toUpperCase()}</h2>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{o.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-8 border-2 border-navy p-8 md:grid-cols-3">
              <div>
                <p className="label-mono text-muted-foreground">Sales desk</p>
                <p className="mt-2 font-mono text-sm">{site.phoneDisplay}</p>
              </div>
              <div>
                <p className="label-mono text-muted-foreground">Service line (24/7)</p>
                <p className="mt-2 font-mono text-sm">{site.servicePhoneDisplay}</p>
              </div>
              <div>
                <p className="label-mono text-muted-foreground">Email</p>
                <p className="mt-2 font-mono text-sm">{site.email}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
