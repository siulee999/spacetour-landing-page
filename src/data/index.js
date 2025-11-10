import gravityImg from "../assets/explore/bg-gravity.webp";
import { marsImg, moonImg, europaImg } from "../assets/destination/index.js";

export const navigation = [
  { id: "home", route: "#home" },
  { id: "explore", route: "#explore" },
  { id: "destination", route: "#destination" },
];

export const explore = [
  { id: "zeroGravitySpa", size: "large", bgImg: gravityImg },
  { id: "launchSchedule", size: "small" },
  { id: "happyTravelers", size: "small" },
  { id: "spaceChef", size: "medium" },
  { id: "auroraDeck", size: "medium" },
  { id: "bookNow", size: "medium" },
];

export const destinations = [
  { id: "moon", imgSrc: moonImg },
  { id: "mars", imgSrc: marsImg },
  { id: "europa", imgSrc: europaImg },
];

// export const explores = [
//   {
//     id: "",
//     title: "Zero Gravity Spa",
//     subtitle: "Float in luxury",
//     description:
//       "Experience weightless massages and hydrotherapy in orbit. Pure bliss, 400km above Earth.",
//     size: "large", // spans 2x2
//     bgImg: gravityImg,
//   },
//   {
//     id: 2,
//     title: "Launch Schedule",
//     subtitle: "Next trip: 2026",
//     blockStack: [
//       "Q2: Moon Base Alpha",
//       "Q3: Mars Colony Beta",
//       "Q4: Europa Ice Resort",
//     ],
//     size: "small",
//   },
//   {
//     id: 3,
//     title: "1M+ Happy Travelers",
//     subtitle: "Since 2024",
//     description: "Rated 5 stars across the solar system.",
//     size: "small",
//   },
//   {
//     id: 4,
//     title: "Space Chef Experience",
//     subtitle: "Michelin in Microgravity",
//     description: "Dine on 3D-printed truffle pasta while orbiting Saturn.",
//     maskText: "FLAVOR BEYOND GRAVITY",
//     size: "medium",
//   },
//   {
//     id: 5,
//     title: "Aurora Viewing Deck",
//     subtitle: "Earth from above",
//     description:
//       "Watch the Northern Lights from space — a 360° light show every 90 minutes.",
//     size: "medium", // 2x1
//   },
//   {
//     id: 6,
//     title: "🎟️ Book Now",
//     subtitle: "Limited seats",
//     description:
//       "Only 12 passengers per mission. Secure your spot before launch.",
//     size: "medium",
//     cta: "Reserve Seat",
//   },
// ];

// const faqs = [
//   {
//     question: "Do I need a spacesuit for the trip?",
//     answer: "Only for spacewalks! Inside the spacecraft and habitats, you’ll enjoy a comfortable Earth-like environment with artificial gravity and climate control."
//   },
//   {
//     question: "What if I get spacesick?",
//     answer: "Our medical team provides anti-nausea patches and orientation training. 98% of travelers adapt within 24 hours."
//   },
//   {
//     question: "Can I bring my pet?",
//     answer: "Currently, only certified emotional support micro-organisms are allowed. We’re working on a canine Mars program for 2028!"
//   },
//   {
//     question: "Is Wi-Fi available in space?",
//     answer: "Yes! Starlink Ultra provides 10 Gbps with <20ms latency. Stream, work, or call home from the Moon."
//   },
//   {
//     question: "What’s the cancellation policy?",
//     answer: "Full refund if canceled 30 days before launch. After that, credit toward future missions."
//   },
//   {
//     question: "Are children allowed?",
//     answer: "Passengers must be 16+ for interplanetary trips. Lunar getaways are family-friendly for ages 12+ with parental consent."
//   }
// ];

export const collaborations = [
  {
    company: "nasa",
    logo: "collaborations/nasa.svg",
  },
  {
    company: "starbucks",
    logo: "/collaborations/nasa.svg",
  },
  {
    company: "redbull",
    logo: "collaborations/nasa.svg",
  },
  {
    company: "nike",
    logo: "collaborations/nasa.svg",
  },
  {
    company: "adidas",
    logo: "collaborations/nasa.svg",
  },
  {
    company: "netflex",
    logo: "collaborations/nasa.svg",
  },
];
