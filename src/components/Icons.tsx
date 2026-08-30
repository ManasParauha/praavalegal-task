import React from "react";

export function BillingIcon({ className = "h-16 w-16 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="44" height="40" rx="8" stroke="currentColor" strokeWidth="3.5" />
      <path d="M18 24H46M18 32H34" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="42" cy="38" r="7" fill="currentColor" />
      <path d="M42 34.5V41.5M39.5 37H44.5" stroke="#2f46ff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function MattersIcon({ className = "h-16 w-16 text-white" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 8L52 18V46L32 56L12 46V18L32 8Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 24L36 12L44 20L32 32M24 24L18 30L26 38L32 32M24 24L32 32"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 46H44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function TasksIcon({ className = "h-16 w-16 text-[#f08c2b]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20L22 26L34 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 40L22 46L34 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 20H48M40 40H48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function DocumentsIcon({ className = "h-16 w-16 text-[#f08c2b]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 10C18 7.79086 19.7909 6 22 6H38L50 18V54C50 56.2091 48.2091 58 46 58H22C19.7909 58 18 56.2091 18 54V10Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38 6V18H50" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 28H42M26 38H42M26 48H36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
