

// solution 4
// "use client";

// import * as React from "react";

// /**
//  * Loading - Full-page spinner loader with a large, dynamic animated circle,
//  * animated gradient background, and a center pulse.
//  * Spinner icon is a true "spinner" (rotating arc) for a lively effect.
//  * Tailwind CSS required. Place in app/loading.tsx for Next.js.
//  */

// export default function Loading({ className }: { className?: string }) {
//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
//         className || ""
//       }`}
//       aria-busy="true"
//       aria-label="Loading"
//       role="status"
//     >
//       {/* Animated background */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-primary via-fuchsia-500 to-sky-400 opacity-80 blur-2xl"
//         style={{
//           backgroundSize: "200% 200%",
//           animation: "gradientMove 8s ease-in-out infinite",
//         }}
//       />

//       {/* Glassy overlay */}
//       <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-xl -z-10" />

//       {/* Big revolving spinner with pulse and gradient */}
//       <div className="relative flex flex-col items-center gap-6">
//         <div className="relative flex items-center justify-center h-40 w-40">
//           {/* True spinner: Only the arc spins */}
//           <svg
//             className="animate-spin-fast drop-shadow-2xl"
//             width="160"
//             height="160"
//             viewBox="0 0 160 160"
//             fill="none"
//             style={{ transformOrigin: "50% 50%" }}
//           >
//             <defs>
//               <linearGradient
//                 id="loader-gradient"
//                 x1="0"
//                 y1="0"
//                 x2="160"
//                 y2="160"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#06b6d4" />
//                 <stop offset="0.5" stopColor="#a21caf" />
//                 <stop offset="1" stopColor="#0ea5e9" />
//               </linearGradient>
//             </defs>
//             {/* Faint full ring */}
//             <circle
//               cx="80"
//               cy="80"
//               r="70"
//               stroke="url(#loader-gradient)"
//               strokeWidth="16"
//               opacity="0.16"
//             />
//             {/* Rotating arc */}
//             <path
//               d="
//                 M80 20
//                 a60 60 0 1 1 0 120
//               "
//               stroke="url(#loader-gradient)"
//               strokeWidth="16"
//               strokeLinecap="round"
//               fill="none"
//               style={{
//                 filter: "drop-shadow(0 4px 16px #a21caf55)",
//               }}
//             />
//           </svg>
//           {/* Center pulse */}
//           <span className="absolute h-16 w-16 rounded-full bg-gradient-to-tr from-primary to-fuchsia-500 opacity-60 animate-pulse shadow-2xl" />
//         </div>
//         <span className="text-2xl md:text-3xl font-semibold text-primary drop-shadow-lg animate-fade-in-up">
//           Loading, please wait...
//         </span>
//       </div>

//       {/* Keyframes for custom animations */}
//       <style jsx global>{`
//         @keyframes gradientMove {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//         .animate-gradient-move {
//           animation: gradientMove 8s ease-in-out infinite;
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
//         }
//         .animate-spin-fast {
//           animation: spin 1s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// solution 3
// "use client";

// import * as React from "react";

// /**
//  * Loading - Full-page loader with a large, revolving animated circle,
//  * animated gradient background, and a center pulse.
//  * Designed for Next.js + Tailwind CSS.
//  */

// export default function Loading({ className }: { className?: string }) {
//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
//         className || ""
//       }`}
//       aria-busy="true"
//       aria-label="Loading"
//       role="status"
//     >
//       {/* Animated background */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-primary via-fuchsia-500 to-sky-400 opacity-80 blur-2xl"
//         style={{
//           backgroundSize: "200% 200%",
//           animation: "gradientMove 8s ease-in-out infinite",
//         }}
//       />

//       {/* Glassy overlay */}
//       <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-xl -z-10" />

//       {/* Big revolving spinner with pulse and gradient */}
//       <div className="relative flex flex-col items-center gap-6">
//         <div className="relative flex items-center justify-center h-40 w-40">
//           {/* Revolving SVG ring */}
//           <svg
//             className="animate-spin-slow drop-shadow-2xl"
//             width="160"
//             height="160"
//             viewBox="0 0 160 160"
//             fill="none"
//             style={{ transformOrigin: "50% 50%" }}
//           >
//             <defs>
//               <linearGradient
//                 id="loader-gradient"
//                 x1="0"
//                 y1="0"
//                 x2="160"
//                 y2="160"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#06b6d4" />
//                 <stop offset="0.5" stopColor="#a21caf" />
//                 <stop offset="1" stopColor="#0ea5e9" />
//               </linearGradient>
//             </defs>
//             {/* Faint full ring */}
//             <circle
//               cx="80"
//               cy="80"
//               r="70"
//               stroke="url(#loader-gradient)"
//               strokeWidth="16"
//               opacity="0.16"
//             />
//             {/* Animated arc */}
//             <path
//               d="
//                 M80 10
//                 a70 70 0 1 1 -0.01 0
//               "
//               stroke="url(#loader-gradient)"
//               strokeWidth="16"
//               strokeLinecap="round"
//               fill="none"
//               className="animate-dash"
//               style={{
//                 strokeDasharray: 220,
//                 strokeDashoffset: 70,
//               }}
//             />
//           </svg>
//           {/* Center pulse */}
//           <span className="absolute h-16 w-16 rounded-full bg-gradient-to-tr from-primary to-fuchsia-500 opacity-60 animate-pulse shadow-2xl" />
//         </div>
//         <span className="text-2xl md:text-3xl font-semibold text-primary drop-shadow-lg animate-fade-in-up">
//           Loading, please wait...
//         </span>
//       </div>

//       {/* Keyframes for custom animations */}
//       <style jsx global>{`
//         @keyframes gradientMove {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//         .animate-gradient-move {
//           animation: gradientMove 8s ease-in-out infinite;
//         }
//         @keyframes dash {
//           0% {
//             stroke-dashoffset: 220;
//           }
//           50% {
//             stroke-dashoffset: 70;
//           }
//           100% {
//             stroke-dashoffset: 220;
//           }
//         }
//         .animate-dash {
//           animation: dash 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
//         }
//         .animate-spin-slow {
//           animation: spin 1.6s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// solution 2
// "use client";

// import * as React from "react";

// /**
//  * Loading - An engaging, beautifully styled full-page loader with a large animation
//  * and animated, softly moving background suitable for Next.js + Tailwind CSS.
//  *
//  * - Full-screen, glassy effect, animated gradient background.
//  * - Large, colorful SVG spinner with additional pulsing effect.
//  * - Accessible with proper aria attributes.
//  * - Highly customizable and visually impressive.
//  */

// export default function Loading({ className }: { className?: string }) {
//   return (
//     <div
//       className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
//         className || ""
//       }`}
//       aria-busy="true"
//       aria-label="Loading"
//       role="status"
//     >
//       {/* Animated background */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 -z-10 animate-gradient-move bg-gradient-to-br from-primary via-fuchsia-500 to-sky-400 opacity-80 blur-2xl"
//         style={{
//           backgroundSize: "200% 200%",
//           animation: "gradientMove 8s ease-in-out infinite",
//         }}
//       />

//       {/* Glassy overlay */}
//       <div className="absolute inset-0 bg-white/30 dark:bg-black/40 backdrop-blur-xl -z-10" />

//       {/* Big spinner with pulse and gradient */}
//       <div className="relative flex flex-col items-center gap-6">
//         <div className="relative flex items-center justify-center h-40 w-40">
//           <svg
//             className="animate-spin-slow drop-shadow-2xl"
//             width="160"
//             height="160"
//             viewBox="0 0 160 160"
//             fill="none"
//           >
//             <defs>
//               <linearGradient
//                 id="loader-gradient"
//                 x1="0"
//                 y1="0"
//                 x2="160"
//                 y2="160"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#06b6d4" />
//                 <stop offset="0.5" stopColor="#a21caf" />
//                 <stop offset="1" stopColor="#0ea5e9" />
//               </linearGradient>
//             </defs>
//             <circle
//               cx="80"
//               cy="80"
//               r="70"
//               stroke="url(#loader-gradient)"
//               strokeWidth="16"
//               strokeDasharray="320"
//               strokeDashoffset="70"
//               strokeLinecap="round"
//               opacity="0.25"
//             />
//             <circle
//               cx="80"
//               cy="80"
//               r="70"
//               stroke="url(#loader-gradient)"
//               strokeWidth="16"
//               strokeDasharray="140"
//               strokeDashoffset="35"
//               strokeLinecap="round"
//               className="animate-dash"
//             />
//           </svg>
//           {/* Center pulse */}
//           <span className="absolute h-16 w-16 rounded-full bg-gradient-to-tr from-primary to-fuchsia-500 opacity-60 animate-pulse shadow-2xl" />
//         </div>
//         {/* Optional: Add engaging text below spinner */}
//         <span className="text-2xl md:text-3xl font-semibold text-primary drop-shadow-lg animate-fade-in-up">
//           Loading, please wait...
//         </span>
//       </div>

//       {/* Keyframes for custom animations */}
//       <style jsx global>{`
//         @keyframes gradientMove {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//         .animate-gradient-move {
//           animation: gradientMove 8s ease-in-out infinite;
//         }
//         @keyframes dash {
//           0% {
//             stroke-dashoffset: 140;
//           }
//           50% {
//             stroke-dashoffset: 35;
//           }
//           100% {
//             stroke-dashoffset: 140;
//           }
//         }
//         .animate-dash {
//           animation: dash 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
//         }
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in-up {
//           animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
//         }
//         .animate-spin-slow {
//           animation: spin 2.5s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// solution 1
"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // If you have a classnames utility, otherwise remove

export default function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm",
        className
      )}
      aria-busy="true"
      aria-label="Loading"
      role="status"
    >
      {/* Spinner */}
      <span className="relative flex h-16 w-16">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 bg-primary"></span>
        <svg
          className="absolute top-0 left-0 h-16 w-16 animate-spin text-white"
          viewBox="0 0 32 32"
          fill="none"
        >
          <circle
            className="opacity-30"
            cx="16"
            cy="16"
            r="14"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            d="M30 16a14 14 0 01-14 14"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-primary"
          />
        </svg>
      </span>
    </div>
  );
}
