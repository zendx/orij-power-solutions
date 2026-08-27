import heroImg from "@/assets/gen-hero.jpg";
import openFrameImg from "@/assets/gen-open-frame.jpg";
import canopyImg from "@/assets/gen-canopy.jpg";
import containerImg from "@/assets/gen-container.jpg";
import controllerImg from "@/assets/gen-controller.jpg";

export const bands = [
  { id: "15-50", label: "15 - 50 kVA", min: 15, max: 50 },
  { id: "60-200", label: "60 - 200 kVA", min: 60, max: 200 },
  { id: "250-800", label: "250 - 800 kVA", min: 250, max: 800 },
  { id: "1000-plus", label: "1000+ kVA", min: 1000, max: 100000 },
] as const;

export type BandId = (typeof bands)[number]["id"];

export type Generator = {
  slug: string;
  model: string;
  name: string;
  engine: string;
  alternator: string;
  controller: string;
  kva: number;
  standbyKva: number;
  kw: number;
  phase: "Three Phase" | "Single Phase";
  enclosure: "Open Frame" | "Soundproof Canopy" | "Containerised";
  duty: "Prime" | "Standby";
  application: string;
  fuel: string;
  consumption: string;
  tank: string;
  runtime: string;
  noise: string;
  dimensions: string;
  weight: string;
  cylinders: string;
  cooling: string;
  frequency: string;
  voltage: string;
  starting: string;
  image: string;
  gallery: string[];
  summary: string;
  highlights: string[];
};

export const generators: Generator[] = [
  {
    slug: "op-30d-open",
    model: "OP-30D",
    name: "OP-30D Open Frame",
    engine: "Perkins 404A-22G",
    alternator: "Stamford UCI224",
    controller: "DeepSea DSE 4520 MKII",
    kva: 30,
    standbyKva: 33,
    kw: 24,
    phase: "Three Phase",
    enclosure: "Open Frame",
    duty: "Standby",
    application: "Residential estates, retail outlets, small offices",
    fuel: "AGO / Diesel",
    consumption: "6.1 L/hr @ 75% load",
    tank: "80 L base tank",
    runtime: "13 hrs @ 75% load",
    noise: "92 dB(A) @ 1 m",
    dimensions: "1780 x 780 x 1200 mm",
    weight: "780 kg",
    cylinders: "4 in-line",
    cooling: "Liquid, radiator mounted",
    frequency: "50 Hz / 1500 rpm",
    voltage: "415/240 V",
    starting: "12 V DC electric start",
    image: openFrameImg,
    gallery: [openFrameImg, controllerImg],
    summary:
      "Entry-level skid-mounted set built on the Perkins 400 series. Compact footprint for plant rooms with existing acoustic treatment.",
    highlights: [
      "Skid base with integrated fuel tank",
      "Auto-start ready via ATS interface",
      "Genuine Perkins service parts held in Lagos",
    ],
  },
  {
    slug: "op-60d-canopy",
    model: "OP-60D",
    name: "OP-60D Soundproof",
    engine: "Perkins 1103A-33TG1",
    alternator: "Stamford UCI274C",
    controller: "DeepSea DSE 6020 MKIII",
    kva: 60,
    standbyKva: 66,
    kw: 48,
    phase: "Three Phase",
    enclosure: "Soundproof Canopy",
    duty: "Standby",
    application: "Clinics, schools, mid-size commercial buildings",
    fuel: "AGO / Diesel",
    consumption: "11.4 L/hr @ 75% load",
    tank: "150 L base tank",
    runtime: "13 hrs @ 75% load",
    noise: "68 dB(A) @ 7 m",
    dimensions: "2400 x 1000 x 1450 mm",
    weight: "1290 kg",
    cylinders: "3 in-line turbocharged",
    cooling: "Liquid, radiator mounted",
    frequency: "50 Hz / 1500 rpm",
    voltage: "415/240 V",
    starting: "12 V DC electric start",
    image: canopyImg,
    gallery: [canopyImg, controllerImg],
    summary:
      "Acoustic canopy set with lockable service doors and residential-grade noise levels. The workhorse for built-up commercial sites.",
    highlights: [
      "68 dB(A) acoustic enclosure",
      "Weatherproof, powder-coated steel canopy",
      "Emergency stop and lockable panel access",
    ],
  },
  {
    slug: "op-150d-perkins",
    model: "OP-150D",
    name: "OP-150D Perkins",
    engine: "Perkins 1106A-70TAG3",
    alternator: "Stamford UCDI274K",
    controller: "DeepSea DSE 7320 MKII",
    kva: 150,
    standbyKva: 165,
    kw: 120,
    phase: "Three Phase",
    enclosure: "Soundproof Canopy",
    duty: "Prime",
    application: "Light manufacturing, hotels, warehousing",
    fuel: "AGO / LFO capable",
    consumption: "27.8 L/hr @ 75% load",
    tank: "280 L base tank",
    runtime: "10 hrs @ 75% load",
    noise: "72 dB(A) @ 7 m",
    dimensions: "3200 x 1150 x 1800 mm",
    weight: "2240 kg",
    cylinders: "6 in-line turbocharged, air-to-air aftercooled",
    cooling: "Liquid, radiator mounted",
    frequency: "50 Hz / 1500 rpm",
    voltage: "415/240 V",
    starting: "24 V DC electric start",
    image: canopyImg,
    gallery: [canopyImg, controllerImg, heroImg],
    summary:
      "Continuous-duty prime power set rated for unlimited running hours at variable load. Specified for sites operating off-grid.",
    highlights: [
      "Prime rated for unlimited hours",
      "Remote monitoring ready (RS485 / GSM module)",
      "Load bank tested before dispatch",
    ],
  },
  {
    slug: "op-250c-cummins",
    model: "OP-250C",
    name: "OP-250C Cummins",
    engine: "Cummins NTA855-G1B",
    alternator: "Leroy Somer TAL 044",
    controller: "DeepSea DSE 7320 MKII",
    kva: 250,
    standbyKva: 275,
    kw: 200,
    phase: "Three Phase",
    enclosure: "Soundproof Canopy",
    duty: "Prime",
    application: "Plastics and food processing, telecom hubs",
    fuel: "AGO / Diesel",
    consumption: "45.2 L/hr @ 75% load",
    tank: "450 L base tank",
    runtime: "9.5 hrs @ 75% load",
    noise: "74 dB(A) @ 7 m",
    dimensions: "3900 x 1400 x 2100 mm",
    weight: "3450 kg",
    cylinders: "6 in-line turbocharged",
    cooling: "Liquid, radiator mounted",
    frequency: "50 Hz / 1500 rpm",
    voltage: "415/240 V",
    starting: "24 V DC electric start",
    image: heroImg,
    gallery: [heroImg, controllerImg],
    summary:
      "Cummins-powered mid-range unit with a Leroy Somer alternator. Chosen where duty cycles are heavy and load steps are aggressive.",
    highlights: [
      "Heavy-duty Cummins NTA855 block",
      "Class H insulation, copper-wound alternator",
      "Optional bulk fuel transfer package",
    ],
  },
  {
    slug: "op-500p-prime",
    model: "OP-500P",
    name: "OP-500P Prime Power",
    engine: "Perkins 2506C-E15TAG2",
    alternator: "Stamford S5L1D-C",
    controller: "DeepSea DSE 7320 MKII",
    kva: 500,
    standbyKva: 550,
    kw: 400,
    phase: "Three Phase",
    enclosure: "Soundproof Canopy",
    duty: "Prime",
    application: "Estates, hospitals, cement and steel plants",
    fuel: "AGO / LFO capable",
    consumption: "78.5 L/hr @ 75% load",
    tank: "990 L base tank",
    runtime: "12 hrs @ 75% load",
    noise: "75 dB(A) @ 7 m",
    dimensions: "4800 x 1900 x 2450 mm",
    weight: "5600 kg",
    cylinders: "6 in-line turbocharged, aftercooled",
    cooling: "Liquid, radiator mounted",
    frequency: "50 Hz / 1500 rpm",
    voltage: "415/240 V",
    starting: "24 V DC electric start",
    image: heroImg,
    gallery: [heroImg, controllerImg, canopyImg],
    summary:
      "The flagship canopy set. Synchronising-capable controller allows paralleling into a multi-unit power house as demand grows.",
    highlights: [
      "Paralleling and synchronising capable",
      "990 L base tank with level sensing",
      "Full load bank certificate supplied",
    ],
  },
  {
    slug: "op-800k-standby",
    model: "OP-800K",
    name: "OP-800K Heavy Standby",
    engine: "Baudouin 12M26G900/5",
    alternator: "Leroy Somer LSA 49.1",
    controller: "DeepSea DSE 8610 MKII",
    kva: 800,
    standbyKva: 880,
    kw: 640,
    phase: "Three Phase",
    enclosure: "Soundproof Canopy",
    duty: "Standby",
    application: "Data centres, refineries, critical operations",
    fuel: "AGO / Diesel",
    consumption: "132 L/hr @ 75% load",
    tank: "1500 L base tank",
    runtime: "11 hrs @ 75% load",
    noise: "77 dB(A) @ 7 m",
    dimensions: "5600 x 2100 x 2600 mm",
    weight: "8900 kg",
    cylinders: "V12 turbocharged, aftercooled",
    cooling: "Liquid, radiator mounted",
    frequency: "50 Hz / 1500 rpm",
    voltage: "415/240 V",
    starting: "24 V DC electric start",
    image: heroImg,
    gallery: [heroImg, controllerImg],
    summary:
      "Critical-operations standby unit with 10-second transfer and DSE 8610 multi-set control for N+1 topologies.",
    highlights: [
      "10 second load acceptance",
      "N+1 redundancy with multi-set control",
      "Dual battery bank and trickle charger",
    ],
  },
  {
    slug: "op-1250d-container",
    model: "OP-1250D",
    name: "OP-1250D Containerised",
    engine: "Cummins KTA50-G3",
    alternator: "Stamford HCI634J",
    controller: "DeepSea DSE 8610 MKII",
    kva: 1250,
    standbyKva: 1375,
    kw: 1000,
    phase: "Three Phase",
    enclosure: "Containerised",
    duty: "Prime",
    application: "Mines, EPC projects, off-grid industrial parks",
    fuel: "AGO / LFO capable",
    consumption: "198 L/hr @ 75% load",
    tank: "3000 L integrated bunded tank",
    runtime: "15 hrs @ 75% load",
    noise: "76 dB(A) @ 7 m",
    dimensions: "20 ft ISO container",
    weight: "14 500 kg",
    cylinders: "V16 turbocharged, aftercooled",
    cooling: "Liquid, radiator mounted",
    frequency: "50 Hz / 1500 rpm",
    voltage: "415/240 V",
    starting: "24 V DC electric start",
    image: containerImg,
    gallery: [containerImg, controllerImg],
    summary:
      "20 ft ISO containerised power module with internal walkway, bunded fuel tank and integrated distribution board.",
    highlights: [
      "Internal walkway and service lighting",
      "Bunded 3000 L fuel tank",
      "Craneable, transport ready ISO frame",
    ],
  },
  {
    slug: "op-2000d-powerhouse",
    model: "OP-2000D",
    name: "OP-2000D Power House",
    engine: "Cummins QSK60-G4",
    alternator: "Stamford PI734F",
    controller: "DeepSea DSE 8610 MKII",
    kva: 2000,
    standbyKva: 2200,
    kw: 1600,
    phase: "Three Phase",
    enclosure: "Containerised",
    duty: "Prime",
    application: "Independent power projects, heavy industry",
    fuel: "AGO / LFO capable",
    consumption: "312 L/hr @ 75% load",
    tank: "External bulk tank interface",
    runtime: "Continuous with bulk supply",
    noise: "78 dB(A) @ 7 m",
    dimensions: "40 ft ISO container",
    weight: "24 800 kg",
    cylinders: "V16 turbocharged, aftercooled",
    cooling: "Liquid, remote radiator option",
    frequency: "50 Hz / 1500 rpm",
    voltage: "11 kV step-up available",
    starting: "24 V DC electric start",
    image: containerImg,
    gallery: [containerImg, heroImg],
    summary:
      "Utility-scale module engineered for paralleled power house installations with medium-voltage step-up options.",
    highlights: [
      "Medium voltage step-up package available",
      "Paralleling up to 8 units",
      "SCADA integration on request",
    ],
  },
];

export function bandFor(kva: number) {
  return bands.find((b) => kva >= b.min && kva <= b.max)?.id;
}

export function getGenerator(slug: string) {
  return generators.find((g) => g.slug === slug);
}
