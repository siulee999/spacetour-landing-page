import gravityImg from "../assets/explore/bg-gravity.webp";
import starSvg from "../assets/explore/star.svg";
import { marsImg, moonImg, europaImg } from "../assets/destination/index.js";
import {
  mobileBg,
  tabletBg,
  desktopBg,
  mobileM,
  tabletM,
  desktopM,
} from "@/assets/hero/index.js";


export const navigation = [
  { id: "home", route: "#home" },
  { id: "explore", route: "#explore" },
  { id: "destination", route: "#destination" },
];

export const heroAssets = {
  mobile: {
    bg: mobileBg,
    bgHash: "LDAmrh}[bCtSxyoMM{R*005Re?V?",
    mountain: mobileM,
  },
  tablet: {
    bg: tabletBg,
    bgHash: "",
    mountain: tabletM,
  },
  desktop: {
    bg: desktopBg,
    bgHash: "",
    mountain: desktopM,
  }
};

export const explore = [
  { id: "zeroGravitySpa", size: "large", bgImg: gravityImg },
  { id: "launchSchedule", size: "small" },
  { id: "happyTravelers", size: "small", animateImgSrc: starSvg },
  { id: "spaceChef", size: "medium" },
  { id: "auroraDeck", size: "medium" },
  { id: "bookNow", size: "medium" },
];

export const destinations = [
  { id: "moon", imgSrc: moonImg },
  { id: "mars", imgSrc: marsImg },
  { id: "europa", imgSrc: europaImg },
];

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
    logo: "collaborations/nasa.svg",
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
