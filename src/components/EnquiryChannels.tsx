import { mailtoLink, site, whatsappLink } from "@/lib/site";

export function EnquiryChannels({
  subject,
  message,
  compact = false,
}: {
  subject: string;
  message: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "grid gap-2 sm:grid-cols-3" : "grid gap-3"}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-between bg-whatsapp px-5 py-4 text-white transition-opacity hover:opacity-90"
      >
        <span className="font-display text-lg tracking-widest">WHATSAPP PRICING</span>
        <span className="label-mono opacity-80">Fastest</span>
      </a>
      <a
        href={`tel:${site.phone}`}
        className="flex items-center justify-between bg-navy px-5 py-4 text-white transition-colors hover:bg-navy/90"
      >
        <span className="font-display text-lg tracking-widest">CALL SALES DESK</span>
        <span className="label-mono opacity-70">{site.phoneDisplay}</span>
      </a>
      <a
        href={mailtoLink(subject, message)}
        className="flex items-center justify-between border-2 border-navy px-5 py-4 transition-colors hover:bg-navy hover:text-white"
      >
        <span className="font-display text-lg tracking-widest">EMAIL QUOTATION</span>
        <span className="label-mono opacity-70">{site.email}</span>
      </a>
    </div>
  );
}
