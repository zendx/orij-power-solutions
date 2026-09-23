import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy p-8 text-white lg:p-20">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h2 className="mb-6 font-display text-3xl tracking-wide">ORIJ POWER DISTRIBUTORS</h2>
          <p className="max-w-md font-mono text-xs leading-relaxed text-white/60">
            Supplier of high-performance diesel generating sets for Nigerian grid-backup and
            off-grid prime power installations. Full technical advisory, installation, maintenance
            and spare parts management. Pricing is issued per project on enquiry.
          </p>
        </div>
        <div>
          <h3 className="label-mono mb-4 text-orange">Regional Offices</h3>
          <ul className="space-y-2 font-mono text-xs text-white/80">
            {site.offices.map((o) => (
              <li key={o.city}>
                {o.city.toUpperCase()}: {o.detail}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="label-mono mb-4 text-orange">Technical Lines</h3>
          <ul className="space-y-2 font-mono text-xs text-white/80">
            <li>Sales: {site.phoneDisplay}</li>
            <li>WhatsApp: {site.whatsappDisplay}</li>
            <li>{site.email}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-20 flex max-w-[1500px] flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
        <span className="label-mono text-white/30">
          © {new Date().getFullYear()} Orij Power // All Rights Reserved
        </span>
        <div className="flex gap-6">
          <Link to="/service" className="label-mono text-white/30 hover:text-white">
            Service
          </Link>
          <Link to="/parts" className="label-mono text-white/30 hover:text-white">
            Spare Parts
          </Link>
          <Link to="/contact" className="label-mono text-white/30 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
