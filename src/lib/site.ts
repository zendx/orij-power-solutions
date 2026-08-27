export const site = {
  name: "Orij Power",
  tagline: "Powering Reliability",
  phone: "+2348000000000",
  phoneDisplay: "+234 800 000 0000",
  servicePhone: "+2348111111111",
  servicePhoneDisplay: "+234 811 111 1111",
  whatsapp: "2348000000000",
  email: "sales@orijpower.com",
  serviceEmail: "technical@orijpower.com",
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
