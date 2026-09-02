import kva1000Main from "../../generator/1000kva.jpeg";
import kva60FactoryStock from "../../generator/1000kva01.jpeg";
import kva100Main from "../../generator/100kva.jpeg";
import kva125Canopy from "../../generator/12.5kva.jpeg";
import kva125Open from "../../generator/12.5kva basic.jpeg";
import kva135Open from "../../generator/135kva basic.jpeg";
import kva145Canopy from "../../generator/14.5kva tt.jpeg";
import kva145Lineup from "../../generator/14.5kva.jpeg";
import kva150Canopy from "../../generator/150KVA.jpeg";
import kva150Open from "../../generator/150KVA 00.jpeg";
import kva200Canopy from "../../generator/200kva.jpeg";
import kva20Engine from "../../generator/20kva Basic.jpeg";
import kva20Eletromak from "../../generator/20kva Eletromak.jpeg";
import kva20FgWilson from "../../generator/20KVA.jpeg";
import kva250Open from "../../generator/250kva00.jpeg";
import kva300Canopy from "../../generator/300kva.jpeg";
import kva60Eletromak from "../../generator/60kva Eletromak.jpeg";

export const bands = [
  { id: "12-50", label: "12.5 - 50 kVA", min: 12.5, max: 50 },
  { id: "60-200", label: "60 - 200 kVA", min: 60, max: 200 },
  { id: "250-800", label: "250 - 800 kVA", min: 250, max: 800 },
  { id: "1000-plus", label: "1000+ kVA", min: 1000, max: 100000 },
] as const;

export const brandOptions = ["FG Wilson", "Eletromak"] as const;
export const configurationOptions = ["Soundproof Canopy", "Open Frame"] as const;

export type BandId = (typeof bands)[number]["id"];
export type GeneratorBrand = (typeof brandOptions)[number];
export type GeneratorConfiguration = (typeof configurationOptions)[number];

export type GeneratorPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type Generator = {
  slug: string;
  model: string;
  name: string;
  brands: readonly GeneratorBrand[];
  kva: number;
  fuel: "Diesel";
  configurations: readonly GeneratorConfiguration[];
  application: string;
  gallery: readonly [GeneratorPhoto, ...GeneratorPhoto[]];
  summary: string;
  highlights: readonly string[];
};

export const generators: Generator[] = [
  {
    slug: "fg-wilson-12-5-kva",
    model: "P13.5-1",
    name: "FG Wilson 12.5 kVA Generator",
    brands: ["FG Wilson"],
    kva: 12.5,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy", "Open Frame"],
    application: "Compact backup power",
    gallery: [
      {
        src: kva125Canopy,
        alt: "FG Wilson 12.5 kVA diesel generator in a white soundproof canopy",
        caption: "Soundproof canopy view",
      },
      {
        src: kva125Open,
        alt: "FG Wilson 12.5 kVA open-frame diesel generator showing the engine and alternator",
        caption: "Open-frame engine and alternator view",
      },
    ],
    summary:
      "A compact 12.5 kVA diesel generating set shown in both soundproof canopy and open-frame configurations.",
    highlights: [
      "12.5 kVA catalogue rating",
      "Canopied and open-frame views",
      "Delivery and installation options available",
    ],
  },
  {
    slug: "fg-wilson-14-5-kva",
    model: "P16-1",
    name: "FG Wilson 14.5 kVA Generator",
    brands: ["FG Wilson"],
    kva: 14.5,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Compact residential and business backup",
    gallery: [
      {
        src: kva145Canopy,
        alt: "FG Wilson 14.5 kVA diesel generator in a compact soundproof canopy",
        caption: "Soundproof canopy and controller view",
      },
      {
        src: kva145Lineup,
        alt: "FG Wilson 14.5 kVA soundproof diesel generator at the front of a factory lineup",
        caption: "Factory lineup view",
      },
    ],
    summary:
      "A compact FG Wilson diesel generator with a weather-protected acoustic canopy for everyday standby applications.",
    highlights: [
      "14.5 kVA catalogue rating",
      "Compact soundproof canopy",
      "Pricing confirmed against installation scope",
    ],
  },
  {
    slug: "diesel-generator-20-kva",
    model: "EP22 / P22-1",
    name: "20 kVA Diesel Generator",
    brands: ["Eletromak", "FG Wilson"],
    kva: 20,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Residential and small commercial backup",
    gallery: [
      {
        src: kva20Eletromak,
        alt: "Eletromak 20 kVA diesel generator in a white soundproof canopy",
        caption: "Eletromak soundproof canopy",
      },
      {
        src: kva20FgWilson,
        alt: "FG Wilson 20 kVA diesel generator in a white soundproof canopy",
        caption: "FG Wilson soundproof canopy",
      },
      {
        src: kva20Engine,
        alt: "20 kVA diesel generator with its canopy door open to show the engine",
        caption: "Open-door engine view",
      },
    ],
    summary:
      "One 20 kVA catalogue group with Eletromak and FG Wilson product views, including canopy exterior and engine access photography.",
    highlights: [
      "20 kVA catalogue rating",
      "Eletromak and FG Wilson options pictured",
      "Canopied and internal equipment views",
    ],
  },
  {
    slug: "eletromak-60-kva",
    model: "EY66",
    name: "Eletromak 60 kVA Generator",
    brands: ["Eletromak"],
    kva: 60,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Commercial and institutional backup",
    gallery: [
      {
        src: kva60Eletromak,
        alt: "Eletromak 60 kVA diesel generator in a white soundproof canopy",
        caption: "Eletromak soundproof canopy",
      },
      {
        src: kva60FactoryStock,
        alt: "Eletromak EY66 60 kVA generator at the front of a factory stock lineup",
        caption: "Eletromak EY66 factory stock view",
      },
    ],
    summary:
      "An Eletromak 60 kVA diesel generator housed in a service-accessible acoustic canopy for commercial standby duty.",
    highlights: [
      "60 kVA catalogue rating",
      "Eletromak EY66 model reference",
      "Product and factory stock views",
    ],
  },
  {
    slug: "fg-wilson-100-kva",
    model: "P110-3",
    name: "FG Wilson 100 kVA Generator",
    brands: ["FG Wilson"],
    kva: 100,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Commercial and light industrial power",
    gallery: [
      {
        src: kva100Main,
        alt: "FG Wilson 100 kVA diesel generator in a white soundproof canopy",
        caption: "Soundproof canopy side view",
      },
    ],
    summary:
      "A 100 kVA FG Wilson diesel generator presented in a full acoustic canopy for commercial and light industrial sites.",
    highlights: [
      "100 kVA catalogue rating",
      "FG Wilson P110-3 model reference",
      "Site-specific quotation and installation",
    ],
  },
  {
    slug: "fg-wilson-135-kva",
    model: "P150-5",
    name: "FG Wilson 135 kVA Generator",
    brands: ["FG Wilson"],
    kva: 135,
    fuel: "Diesel",
    configurations: ["Open Frame"],
    application: "Commercial and industrial power",
    gallery: [
      {
        src: kva135Open,
        alt: "FG Wilson 135 kVA open-frame diesel generator showing the full engine assembly",
        caption: "Open-frame engine and alternator view",
      },
    ],
    summary:
      "An open-frame 135 kVA FG Wilson diesel generating set with clear service access to the engine, alternator and control panel.",
    highlights: [
      "135 kVA catalogue rating",
      "Open-frame configuration",
      "Suitable enclosure options confirmed on enquiry",
    ],
  },
  {
    slug: "fg-wilson-150-kva",
    model: "P165-5",
    name: "FG Wilson 150 kVA Generator",
    brands: ["FG Wilson"],
    kva: 150,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Commercial and industrial power",
    gallery: [
      {
        src: kva150Canopy,
        alt: "FG Wilson 150 kVA diesel generator in a long white soundproof canopy",
        caption: "Soundproof canopy exterior",
      },
      {
        src: kva150Open,
        alt: "FG Wilson 150 kVA soundproof generator with its service door open",
        caption: "Open-door engine access",
      },
    ],
    summary:
      "A 150 kVA FG Wilson set with matching exterior and open-door views of its soundproof canopy configuration.",
    highlights: [
      "150 kVA catalogue rating",
      "Exterior and internal gallery views",
      "Service-accessible acoustic enclosure",
    ],
  },
  {
    slug: "fg-wilson-200-kva",
    model: "P220-3",
    name: "FG Wilson 200 kVA Generator",
    brands: ["FG Wilson"],
    kva: 200,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Large commercial and industrial backup",
    gallery: [
      {
        src: kva200Canopy,
        alt: "FG Wilson 200 kVA diesel generator in a white soundproof canopy",
        caption: "Soundproof canopy exterior",
      },
    ],
    summary:
      "A 200 kVA FG Wilson diesel generator in a full acoustic enclosure for larger commercial and industrial loads.",
    highlights: [
      "200 kVA catalogue rating",
      "FG Wilson P220-3 model reference",
      "Soundproof canopy configuration",
    ],
  },
  {
    slug: "fg-wilson-250-kva",
    model: "P275-3",
    name: "FG Wilson 250 kVA Generator",
    brands: ["FG Wilson"],
    kva: 250,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Industrial and large-facility power",
    gallery: [
      {
        src: kva250Open,
        alt: "FG Wilson 250 kVA soundproof diesel generator with its service doors open",
        caption: "Open-door equipment view",
      },
    ],
    summary:
      "A 250 kVA FG Wilson generator photographed with its acoustic enclosure open for a clear view of the internal equipment layout.",
    highlights: [
      "250 kVA catalogue rating",
      "FG Wilson P275-3 model reference",
      "Internal equipment access pictured",
    ],
  },
  {
    slug: "fg-wilson-300-kva",
    model: "P330-3",
    name: "FG Wilson 300 kVA Generator",
    brands: ["FG Wilson"],
    kva: 300,
    fuel: "Diesel",
    configurations: ["Soundproof Canopy"],
    application: "Industrial and large-facility power",
    gallery: [
      {
        src: kva300Canopy,
        alt: "FG Wilson 300 kVA diesel generator in a large white soundproof canopy",
        caption: "Soundproof canopy exterior",
      },
    ],
    summary:
      "A 300 kVA FG Wilson diesel generator in a large-format acoustic canopy for demanding facility power requirements.",
    highlights: [
      "300 kVA catalogue rating",
      "FG Wilson P330-3 model reference",
      "Project pricing issued after site review",
    ],
  },
  {
    slug: "fg-wilson-1000-kva",
    model: "P1100-1",
    name: "FG Wilson 1000 kVA Generator",
    brands: ["FG Wilson"],
    kva: 1000,
    fuel: "Diesel",
    configurations: ["Open Frame"],
    application: "Heavy industrial and infrastructure power",
    gallery: [
      {
        src: kva1000Main,
        alt: "FG Wilson 1000 kVA open-frame diesel generator with a Perkins engine",
        caption: "Open-frame engine and alternator view",
      },
    ],
    summary:
      "A large open-frame 1000 kVA FG Wilson generating set, photographed with clear access around the engine, alternator and radiator package.",
    highlights: [
      "1000 kVA catalogue rating",
      "FG Wilson P1100-1 model reference",
      "Heavy-duty open-frame configuration",
    ],
  },
];

export function bandFor(kva: number) {
  return bands.find((band) => kva >= band.min && kva <= band.max)?.id;
}

export function formatKva(kva: number) {
  return new Intl.NumberFormat("en-NG", { maximumFractionDigits: 1 }).format(kva);
}

export function getBrandLabel(generator: Generator) {
  return generator.brands.join(" / ");
}

export function getPrimaryPhoto(generator: Generator) {
  return generator.gallery[0];
}

export function getGenerator(slug: string) {
  return generators.find((generator) => generator.slug === slug);
}
