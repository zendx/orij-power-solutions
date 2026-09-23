export const site = {
  name: "Orij Power",
  tagline: "Powering Reliability",
  phone: "+2348033558927",
  phoneDisplay: "+234 803 355 8927",
  whatsapp: "2348060234445",
  whatsappDisplay: "+234 806 023 4445",
  email: "orijpower@gmail.com",
  offices: [
    { city: "Lagos", detail: "Victoria Island HQ" },
    { city: "Abuja", detail: "Central Business District" },
    { city: "Port Harcourt", detail: "Trans Amadi Industrial Layout" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
