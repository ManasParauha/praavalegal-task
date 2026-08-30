"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export type CardColor = "blue" | "orange" | "dark" | "portal" | "purple";

export interface PortalData {
  avatarText?: string;
  avatarBg?: string;
  avatarImg?: string;
  indicatorColor?: string;
  title: string;
  subtitle?: string;
  timeTag?: string;
}

export interface FloatingCardProps {
  variant?: "standard" | "portal";
  color?: CardColor | string;
  rotation?: number;
  icon?: ReactNode;
  iconRotation?: number;
  label?: string;
  textColor?: string;
  portalData?: PortalData;
  children?: ReactNode;
  className?: string;
  delay?: number;
  floatDuration?: number;
  floatDistance?: number;
  onClick?: () => void;
}

const COLOR_STYLES: Record<string, { bg: string; text: string; shadow: string }> = {
  blue: {
    bg: "bg-[#2f46ff]",
    text: "text-white",
    shadow: "shadow-[0_14px_32px_rgba(47,70,255,0.28)] dark:shadow-[0_14px_32px_rgba(47,70,255,0.45)]",
  },
  orange: {
    bg: "bg-[#e67e2b]",
    text: "text-white",
    shadow: "shadow-[0_14px_32px_rgba(230,126,43,0.28)] dark:shadow-[0_14px_32px_rgba(230,126,43,0.45)]",
  },
  dark: {
    bg: "bg-[#2f254d]",
    text: "text-[#f08c2b]",
    shadow: "shadow-[0_14px_32px_rgba(47,37,77,0.35)] dark:shadow-[0_14px_32px_rgba(15,10,30,0.6)]",
  },
  portal: {
    bg: "bg-[#9ea6ef] dark:bg-[#727bd4]",
    text: "text-[#0c144b] dark:text-white",
    shadow: "shadow-[0_14px_32px_rgba(106,123,214,0.30)] dark:shadow-[0_14px_32px_rgba(60,70,150,0.5)]",
  },
};

export default function FloatingCard({
  variant = "standard",
  color = "blue",
  rotation = 0,
  icon,
  iconRotation = 0,
  label,
  textColor,
  portalData,
  children,
  className = "",
  delay = 0.2,
  floatDuration = 6,
  floatDistance = 6,
  onClick,
}: FloatingCardProps) {
  const styles = COLOR_STYLES[color] || {
    bg: color,
    text: textColor || "text-white",
    shadow: "shadow-xl",
  };
  const activeTextColor = textColor || styles.text;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="inline-block select-none"
    >
      <motion.div
        animate={{ y: [0, -floatDistance, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: delay * 1.2,
        }}
        whileHover={{ scale: 1.04, transition: { duration: 0.2, ease: "easeOut" } }}
        style={{ rotate: `${rotation}deg` }}
        className={`relative flex items-center transition-shadow duration-300 rounded-[100px] ${styles.bg} ${styles.shadow} ${className}`}
      >
        {children ? (
          children
        ) : variant === "portal" ? (
          <div className="flex items-center gap-3 py-3 px-5 sm:px-6 min-w-[320px] sm:w-[390px] h-[84px] sm:h-[96px] rounded-[90px] overflow-hidden">
            <div className={`h-11 w-1 rounded-full shrink-0 ${portalData?.indicatorColor || "bg-[#eb7a24]"}`} />
            <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full overflow-hidden ${portalData?.avatarBg || "bg-[#f4c8ab]"}`}>
              {portalData?.avatarImg ? (
                <img src={portalData.avatarImg} alt={portalData.title} className="h-7 w-7 object-contain" />
              ) : (
                <User className="h-6 w-6 text-[#7a3b10]" />
              )}
            </div>
            <div className="min-w-0 flex-1 text-left">
              <p className="truncate text-[15px] sm:text-[16px] font-normal leading-none text-[#0c144b] dark:text-white">
                {portalData?.title || "John Doe - Portal"}
              </p>
              {portalData?.subtitle && (
                <p className="mt-1 text-[11px] leading-tight text-[#797DA7] dark:text-indigo-100 line-clamp-2 max-w-[180px] sm:max-w-[200px]">
                  {portalData.subtitle}
                </p>
              )}
              {portalData?.timeTag && (
                <p className="mt-1 truncate text-[11px] leading-none text-[#6a77bc] dark:text-indigo-200">
                  {portalData.timeTag}
                </p>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-5">
            {icon && (
              <span
                style={{ transform: `rotate(${iconRotation}deg)` }}
                className="shrink-0 flex items-center justify-center -mr-1 transition-transform duration-300"
              >
                {icon}
              </span>
            )}
            <span className={`text-2xl sm:text-3xl md:text-[40px] font-normal tracking-tight ${activeTextColor}`}>
              {label}
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
