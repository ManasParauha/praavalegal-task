"use client";

import React from "react";
import FloatingCard, { CardColor, PortalData } from "./FloatingCard";
import { BillingIcon, MattersIcon, TasksIcon, DocumentsIcon } from "./Icons";

interface CardConfig {
  id: string;
  wrapperClass: string;
  variant?: "standard" | "portal";
  color: CardColor;
  rotation: number;
  label?: string;
  textColor?: string;
  icon?: React.ReactNode;
  iconRotation?: number;
  portalData?: PortalData;
  delay?: number;
  floatDuration?: number;
  floatDistance?: number;
}

// Configuration for Desktop Floating Canvas
const DESKTOP_CARDS: CardConfig[] = [
  {
    id: "billing",
    wrapperClass: "absolute right-[160px] top-[290px] w-[430px]",
    color: "blue",
    rotation: 9.35,
    label: "Billing",
    icon: <BillingIcon />,
    iconRotation: -9.35,
    delay: 0.2,
    floatDuration: 6,
    floatDistance: 7,
  },
  {
    id: "matters",
    wrapperClass: "absolute left-[240px] top-[430px] w-[360px]",
    color: "orange",
    rotation: -9.35,
    label: "Matters",
    icon: <MattersIcon />,
    iconRotation: 9.35,
    delay: 0.3,
    floatDuration: 6.5,
    floatDistance: 8,
  },
  {
    id: "portal",
    wrapperClass: "absolute left-[620px] top-[430px] h-[96px] w-[390px]",
    variant: "portal",
    color: "portal",
    rotation: 3.4,
    delay: 0.4,
    floatDuration: 7,
    floatDistance: 6,
    portalData: {
      title: "John Doe - Portal",
      subtitle: "Hey! Could you please review a document for me?",
      timeTag: "MAT-2233 - 2 h ago",
      indicatorColor: "bg-[#eb7a24]",
      avatarBg: "bg-[#f4c8ab]",
    },
  },
  {
    id: "tasks",
    wrapperClass: "absolute left-[calc(50%-180px)] top-[572px] w-[360px]",
    color: "dark",
    rotation: 0,
    label: "Tasks",
    textColor: "text-[#f08c2b]",
    icon: <TasksIcon />,
    delay: 0.5,
    floatDuration: 5.8,
    floatDistance: 9,
  },
  {
    id: "documents",
    wrapperClass: "absolute right-[-82px] top-[540px] w-[480px]",
    color: "dark",
    rotation: -6.8,
    label: "Documents",
    textColor: "text-[#f08c2b]",
    icon: <DocumentsIcon />,
    iconRotation: 6.8,
    delay: 0.6,
    floatDuration: 6.2,
    floatDistance: 7,
  },
];

// Configuration for Mobile Floating Canvas
const MOBILE_CARDS: CardConfig[] = [
  {
    id: "billing-m",
    wrapperClass: "absolute right-1 top-2 w-[166px]",
    color: "blue",
    rotation: 10.2,
    label: "Billing",
    icon: <BillingIcon className="h-7 w-7 text-white" />,
    iconRotation: -10.2,
  },
  {
    id: "matters-m",
    wrapperClass: "absolute left-[5px] top-[10px] w-[151px]",
    color: "orange",
    rotation: -10.2,
    label: "Matters",
    icon: <MattersIcon className="h-7 w-7 text-white" />,
    iconRotation: 10.2,
  },
  {
    id: "portal-m",
    wrapperClass: "absolute left-[80px] top-[90px] w-[280px]",
    variant: "portal",
    color: "portal",
    rotation: 5.5,
    portalData: {
      title: "John Doe - Portal",
      subtitle: "Hey! Could you please review a document for me?",
      timeTag: "MAT-2233 - 2 h ago",
    },
  },
  {
    id: "tasks-m",
    wrapperClass: "absolute left-[25px] top-[150px] w-[166px]",
    color: "dark",
    rotation: 11.3,
    label: "Tasks",
    textColor: "text-[#f08c2b]",
    icon: <TasksIcon className="h-7 w-7 text-[#f08c2b]" />,
    iconRotation: -11.3,
  },
  {
    id: "documents-m",
    wrapperClass: "absolute left-[130px] top-[205px] w-[200px]",
    color: "dark",
    rotation: -5.7,
    label: "Documents",
    textColor: "text-[#f08c2b]",
    icon: <DocumentsIcon className="h-7 w-7 text-[#f08c2b]" />,
    iconRotation: 5.7,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f6f7fb] dark:bg-[#0a0d18] text-[#0f172a] dark:text-slate-100 transition-colors duration-500 flex flex-col justify-center">
      {/* Background Soft Blobs */}
      <div className="pointer-events-none select-none z-0">
        {/* Mobile Background Shapes */}
        <div className="block lg:hidden">
          <div className="absolute -left-10 bottom-[150px] h-[36px] w-[75px] rotate-[170deg] rounded-[90px] bg-[#E3EAF8] dark:bg-[#1f2945] blur-[0.5px]" />
          <div className="absolute -left-6 bottom-[105px] h-[36px] w-[80px] rotate-[-180deg] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] dark:bg-[#1f2945] blur-[0.5px]" />
          <div className="absolute -left-2 bottom-[60px] h-[36px] w-[134px] rotate-[-180deg] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] dark:bg-[#1f2945] blur-[0.5px]" />
          <div className="absolute right-[-40px] top-[110px] h-[36px] w-[99px] rotate-[9deg] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] dark:bg-[#1f2945] blur-[0.5px]" />
          <div className="absolute right-[-25px] top-[155px] h-[36px] w-[143px] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] dark:bg-[#1f2945] blur-[0.5px]" />
          <div className="absolute right-[-15px] top-[200px] h-[36px] w-[86px] rounded-tl-[90px] rounded-bl-[90px] bg-[#E3EAF8] dark:bg-[#1f2945] blur-[0.5px]" />
        </div>

        {/* Desktop Background Shapes */}
        <div className="hidden lg:block">
          <div className="absolute -left-28 bottom-[290px] h-[88px] w-[280px] -rotate-[10deg] rounded-full bg-[#e7ecf8] dark:bg-[#1b233a] blur-[0.5px]" />
          <div className="absolute -left-16 bottom-[180px] h-[88px] w-[300px] rounded-full bg-[#e7ecf8] dark:bg-[#1b233a] blur-[0.5px]" />
          <div className="absolute -left-8 bottom-[70px] h-[88px] w-[480px] rounded-full bg-[#e7ecf8] dark:bg-[#1b233a] blur-[0.5px]" />

          <div className="absolute right-[-78px] top-[112px] h-[88px] w-[280px] rotate-[8deg] rounded-full bg-[#e7ecf8] dark:bg-[#1f2945] blur-[0.5px]" />
          <div className="absolute right-[-45px] top-[224px] h-[88px] w-[400px] rounded-full bg-[#e7ecf8] dark:bg-[#1f2945] blur-[0.5px]" />
          <div className="absolute right-[-24px] top-[334px] h-[88px] w-[300px] rounded-full bg-[#e7ecf8] dark:bg-[#1f2945] blur-[0.5px]" />
        </div>
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 md:px-10 lg:px-16 py-12 lg:py-20 min-h-[720px] flex flex-col justify-between">
        {/* Left Headline & Description Column */}
        <div className="relative z-20 max-w-[580px]">
          <h1
            className="w-full text-left text-[32px] sm:text-[48px] lg:text-[56px] font-light leading-[1.08] tracking-[-0.03em] text-[#7377a8] dark:text-[#b3bce5]"
            style={{ wordSpacing: "0.08em" }}
          >
            A single platform to
            <br />
            <span className="font-semibold text-[#6971aa] dark:text-[#d4ddff]">manage</span> every part of
            <br />
            your <span className="font-semibold text-[#6971aa] dark:text-[#d4ddff]">legal work</span>
          </h1>

          <p
            className="mt-6 w-full max-w-[460px] text-left text-[16px] sm:text-[18px] lg:text-[19px] font-normal leading-[1.45] text-[#3955ff] dark:text-[#88a0ff]"
            style={{ wordSpacing: "0.06em" }}
          >
            Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
          </p>
        </div>

        {/* Desktop Floating Cards Canvas */}
        <div className="hidden lg:block absolute inset-0 pointer-events-auto z-10">
          {DESKTOP_CARDS.map((card) => (
            <div key={card.id} className={card.wrapperClass}>
              <FloatingCard {...card} />
            </div>
          ))}
        </div>

        {/* Mobile Floating Cards Canvas */}
        <div className="relative mt-8 w-full max-w-[360px] lg:hidden h-[280px]">
          {MOBILE_CARDS.map((card) => (
            <div key={card.id} className={card.wrapperClass}>
              <FloatingCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
