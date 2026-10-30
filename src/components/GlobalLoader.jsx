// // // import React from "react";

// // // const GlobalLoader = () => {
// // //   return (
// // //     <div className="flex items-center justify-center min-h-[70vh]">

// // //       <div className="relative flex items-center justify-center">

// // //         {/* glow */}
// // //         <div className="absolute w-20 h-20 rounded-full bg-secondary/15 blur-xl"></div>

// // //         {/* spinning ring */}
// // //         <div className="w-12 h-12 border-[3px] border-secondary/20 border-t-secondary rounded-full animate-spin"></div>

// // //         {/* center dot */}
// // //         <div className="absolute w-2.5 h-2.5 bg-secondary rounded-full"></div>

// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default GlobalLoader;


// // import React from "react";

// // /* NTHRE3 brand loader (pure code, no image)
// //    - terracotta arc ring spinning around the wordmark
// //    - shimmer sweeping across "NTHRE"
// //    - the "3" gently pulses in terracotta
// //    - colors come from the site's CSS variables, so light + dark mode match automatically */

// // const RING_SIZE = 132;
// // const RING_RADIUS = 60;
// // const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

// // const GlobalLoader = () => {
// //   return (
// //     <div
// //       role="status"
// //       aria-live="polite"
// //       aria-label="Loading"
// //       className="flex items-center justify-center min-h-[70vh]"
// //     >
// //       <style>{`
// //         @keyframes nthre3-spin { to { transform: rotate(360deg); } }
// //         @keyframes nthre3-shimmer {
// //           0%   { background-position: 130% 0; }
// //           100% { background-position: -130% 0; }
// //         }
// //         @keyframes nthre3-pulse {
// //           0%, 100% { opacity: 1; transform: translateY(2px) scale(1); }
// //           50%      { opacity: 0.55; transform: translateY(2px) scale(0.9); }
// //         }
// //         @keyframes nthre3-glow {
// //           0%, 100% { opacity: 0.55; transform: scale(0.92); }
// //           50%      { opacity: 1; transform: scale(1.06); }
// //         }
// //         @keyframes nthre3-fade {
// //           0%, 100% { opacity: 0.45; }
// //           50%      { opacity: 1; }
// //         }

// //         .nthre3-arc  { transform-origin: 50% 50%; animation: nthre3-spin 1.4s linear infinite; }
// //         .nthre3-glow { animation: nthre3-glow 2.4s ease-in-out infinite; }
// //         .nthre3-three { display: inline-block; animation: nthre3-pulse 1.4s ease-in-out infinite; }
// //         .nthre3-label { animation: nthre3-fade 1.8s ease-in-out infinite; }

// //         .nthre3-shimmer {
// //           color: rgb(var(--c-ink));
// //           background-image: linear-gradient(
// //             100deg,
// //             rgb(var(--c-ink)) 38%,
// //             rgb(var(--c-secondary)) 50%,
// //             rgb(var(--c-ink)) 62%
// //           );
// //           background-size: 260% 100%;
// //           background-repeat: no-repeat;
// //           -webkit-background-clip: text;
// //           background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           animation: nthre3-shimmer 2.2s linear infinite;
// //         }
// //         .dark .nthre3-shimmer {
// //           background-image: linear-gradient(
// //             100deg,
// //             rgb(var(--c-ink)) 38%,
// //             #E58A57 50%,
// //             rgb(var(--c-ink)) 62%
// //           );
// //         }

// //         @media (prefers-reduced-motion: reduce) {
// //           .nthre3-arc, .nthre3-glow, .nthre3-three, .nthre3-label, .nthre3-shimmer {
// //             animation: none;
// //           }
// //           .nthre3-shimmer { -webkit-text-fill-color: rgb(var(--c-ink)); }
// //         }
// //       `}</style>

// //       <div className="flex flex-col items-center gap-y-6">

// //         <div
// //           className="relative flex items-center justify-center"
// //           style={{ width: RING_SIZE, height: RING_SIZE }}
// //         >
// //           {/* soft terracotta glow */}
// //           <div className="absolute rounded-full inset-3 nthre3-glow bg-secondary/15 blur-xl" />

// //           {/* ring: thin track + spinning terracotta arc */}
// //           <svg
// //             width={RING_SIZE}
// //             height={RING_SIZE}
// //             viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
// //             className="absolute inset-0"
// //             aria-hidden="true"
// //           >
// //             <circle
// //               cx={RING_SIZE / 2}
// //               cy={RING_SIZE / 2}
// //               r={RING_RADIUS}
// //               fill="none"
// //               stroke="rgb(var(--c-line))"
// //               strokeWidth="2"
// //             />
// //             <circle
// //               className="nthre3-arc"
// //               cx={RING_SIZE / 2}
// //               cy={RING_SIZE / 2}
// //               r={RING_RADIUS}
// //               fill="none"
// //               stroke="rgb(var(--c-secondary))"
// //               strokeWidth="3"
// //               strokeLinecap="round"
// //               strokeDasharray={`${CIRCUMFERENCE * 0.26} ${CIRCUMFERENCE}`}
// //             />
// //           </svg>

// //           {/* wordmark */}
// //           <div className="relative z-10 flex items-baseline font-display font-semibold leading-none select-none text-[23px] tracking-[0.06em]">
// //             <span className="nthre3-shimmer">NTHRE</span>
// //             <span className="nthre3-three text-secondary dark:text-[#E58A57] text-[18px] ml-[1px]">3</span>
// //           </div>
// //         </div>

// //         {/* label */}
// //         <p className="nthre3-label text-[10.5px] font-semibold uppercase tracking-[0.34em] text-gray-30 dark:text-darkmuted">
// //           Fashion Forward
// //         </p>

// //       </div>
// //     </div>
// //   );
// // };

// // export default GlobalLoader;


// import React from "react";

// /* NTHRE3 premium brand loader (pure code, no images)
//    - full-screen ivory splash with a thin frame + soft terracotta glow
//    - slowly orbiting rings with a single terracotta dot
//    - "NTHRE3" wordmark revealed with a left-to-right wipe, then a shimmer sweep
//    - hairline progress bar + "FASHION FORWARD" tagline + brand motto
//    - appears after a tiny delay, so fast page loads never flash the loader
//    - colors come from the site's CSS variables: light + dark mode match automatically */

// const GlobalLoader = () => {
//   return (
//     <div
//       role="status"
//       aria-live="polite"
//       aria-label="Loading NTHRE3"
//       className="nthre3-loader fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
//     >
//       <style>{`
//         .nthre3-loader {
//           background:
//             radial-gradient(60% 46% at 50% 46%, rgb(var(--c-secondary) / 0.11), transparent 72%),
//             rgb(var(--c-paper));
//           animation: nthre3-appear 0.55s ease 0.18s both;
//         }

//         /* thin inner frame */
//         .nthre3-frame {
//           position: absolute;
//           inset: 12px;
//           border: 1px solid rgb(var(--c-line));
//           border-radius: 22px;
//           pointer-events: none;
//         }
//         @media (min-width: 768px) { .nthre3-frame { inset: 20px; border-radius: 28px; } }

//         /* orbit rings */
//         .nthre3-orbit {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           width: min(78vw, 400px);
//           height: min(78vw, 400px);
//           margin: calc(min(78vw, 400px) / -2) 0 0 calc(min(78vw, 400px) / -2);
//           border-radius: 9999px;
//           border: 1px solid rgb(var(--c-line));
//           animation: nthre3-spin 9s linear infinite;
//         }
//         .nthre3-orbit::after {
//           content: "";
//           position: absolute;
//           top: -4px;
//           left: 50%;
//           width: 8px;
//           height: 8px;
//           margin-left: -4px;
//           border-radius: 9999px;
//           background: rgb(var(--c-secondary));
//           box-shadow: 0 0 14px 2px rgb(var(--c-secondary) / 0.55);
//         }
//         .nthre3-orbit-inner {
//           position: absolute;
//           left: 50%;
//           top: 50%;
//           width: min(60vw, 310px);
//           height: min(60vw, 310px);
//           margin: calc(min(60vw, 310px) / -2) 0 0 calc(min(60vw, 310px) / -2);
//           border-radius: 9999px;
//           border: 1px dashed rgb(var(--c-secondary) / 0.35);
//           animation: nthre3-spin 22s linear infinite reverse;
//         }

//         /* wordmark */
//         .nthre3-word {
//           display: flex;
//           align-items: baseline;
//           justify-content: center;
//           font-weight: 600;
//           line-height: 1;
//           letter-spacing: 0.16em;
//           font-size: clamp(2.5rem, 11.5vw, 4.6rem);
//           padding-left: 0.16em; /* balances the trailing letter-spacing */
//           animation: nthre3-wipe 1.3s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
//         }
//         .nthre3-shimmer {
//           color: rgb(var(--c-ink));
//           background-image: linear-gradient(
//             100deg,
//             rgb(var(--c-ink)) 38%,
//             rgb(var(--c-secondary)) 50%,
//             rgb(var(--c-ink)) 62%
//           );
//           background-size: 260% 100%;
//           background-repeat: no-repeat;
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: nthre3-shimmer 2.6s linear 1.5s infinite;
//           background-position: 130% 0;
//         }
//         .dark .nthre3-shimmer {
//           background-image: linear-gradient(
//             100deg,
//             rgb(var(--c-ink)) 38%,
//             #E58A57 50%,
//             rgb(var(--c-ink)) 62%
//           );
//         }
//         .nthre3-three {
//           display: inline-block;
//           font-size: 0.62em;
//           margin-left: 0.04em;
//           color: rgb(var(--c-secondary));
//           animation: nthre3-pulse 1.6s ease-in-out 1.4s infinite;
//         }
//         .dark .nthre3-three { color: #E58A57; }

//         /* hairline progress */
//         .nthre3-track {
//           position: relative;
//           width: 150px;
//           height: 2px;
//           overflow: hidden;
//           border-radius: 9999px;
//           background: rgb(var(--c-line));
//         }
//         .nthre3-bar {
//           position: absolute;
//           top: 0;
//           bottom: 0;
//           left: 0;
//           width: 42%;
//           border-radius: 9999px;
//           background: rgb(var(--c-secondary));
//           animation: nthre3-slide 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
//         }
//         .dark .nthre3-bar { background: #E58A57; }

//         .nthre3-tag   { animation: nthre3-rise 0.9s ease 0.9s both; }
//         .nthre3-motto { animation: nthre3-rise 0.9s ease 1.15s both; }

//         @keyframes nthre3-appear { from { opacity: 0; } to { opacity: 1; } }
//         @keyframes nthre3-spin   { to { transform: rotate(360deg); } }
//         @keyframes nthre3-wipe {
//           from { clip-path: inset(-10% 100% -10% 0); opacity: 0; transform: translateY(10px); }
//           to   { clip-path: inset(-10% -10% -10% -10%); opacity: 1; transform: translateY(0); }
//         }
//         @keyframes nthre3-shimmer {
//           0%   { background-position: 130% 0; }
//           100% { background-position: -130% 0; }
//         }
//         @keyframes nthre3-pulse {
//           0%, 100% { opacity: 1; }
//           50%      { opacity: 0.5; }
//         }
//         @keyframes nthre3-slide {
//           0%   { transform: translateX(-110%); }
//           100% { transform: translateX(260%); }
//         }
//         @keyframes nthre3-rise {
//           from { opacity: 0; transform: translateY(8px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .nthre3-loader, .nthre3-orbit, .nthre3-orbit-inner, .nthre3-word,
//           .nthre3-shimmer, .nthre3-three, .nthre3-bar, .nthre3-tag, .nthre3-motto {
//             animation: none !important;
//           }
//           .nthre3-shimmer { -webkit-text-fill-color: rgb(var(--c-ink)); }
//           .nthre3-bar { width: 100%; }
//         }
//       `}</style>

//       <div className="nthre3-frame" aria-hidden="true" />
//       <div className="nthre3-orbit" aria-hidden="true" />
//       <div className="nthre3-orbit-inner" aria-hidden="true" />

//       <div className="relative z-10 flex flex-col items-center px-6 text-center">

//         {/* wordmark */}
//         <div className="select-none nthre3-word font-display">
//           <span className="nthre3-shimmer">NTHRE</span>
//           <span className="nthre3-three">3</span>
//         </div>

//         {/* progress */}
//         <div className="mt-7 nthre3-track" aria-hidden="true">
//           <span className="nthre3-bar" />
//         </div>

//         {/* tagline */}
//         <p className="nthre3-tag mt-6 flex items-center gap-x-3 text-[10.5px] sm:text-[11.5px] font-semibold uppercase tracking-[0.34em] text-gray-30 dark:text-darkmuted">
//           <span className="w-6 h-px bg-secondary/60" />
//           Fashion Forward
//           <span className="w-6 h-px bg-secondary/60" />
//         </p>
//       </div>

//       {/* brand motto */}
//       <p className="nthre3-motto absolute inset-x-0 bottom-9 sm:bottom-11 px-6 text-center text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.3em] text-gray-20 dark:text-darkmuted/80">
//         Be Clever · Be Stylish · Be <span className="text-secondary dark:text-[#E58A57]">You</span>
//       </p>
//     </div>
//   );
// };

// export default GlobalLoader;


import React from "react";

/* NTHRE3 brand loader (pure code, no image) - editorial edition
   - hairline rules draw out from the center (runway / magazine masthead feel)
   - "NTHRE3" letters rise out of a mask one by one, hold, then lift away
   - the "3" stays in terracotta
   - a thin terracotta line glides along the hairline as the progress mark
   - colors come from the site's CSS variables, so light + dark mode match automatically */

const LETTERS = ["N", "T", "H", "R", "E"];

const GlobalLoader = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className="flex items-center justify-center min-h-[70vh]"
    >
      <style>{`
        @keyframes nthre3-rule {
          0%        { transform: scaleX(0); opacity: 0; }
          20%       { opacity: 1; }
          45%, 75%  { transform: scaleX(1); opacity: 1; }
          100%      { transform: scaleX(0); opacity: 0; }
        }
        @keyframes nthre3-rise {
          0%        { transform: translateY(112%); }
          28%, 70%  { transform: translateY(0); }
          92%, 100% { transform: translateY(-112%); }
        }
        @keyframes nthre3-slide {
          0%   { transform: translateX(-110%); }
          100% { transform: translateX(260%); }
        }
        @keyframes nthre3-fade {
          0%, 100% { opacity: 0.45; }
          50%      { opacity: 1; }
        }

        .nthre3-rule  { transform-origin: 50% 50%; animation: nthre3-rule 3.2s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
        .nthre3-mask  { display: inline-block; overflow: hidden; line-height: 1.15; padding: 0.04em 0; }
        .nthre3-char  { display: inline-block; animation: nthre3-rise 3.2s cubic-bezier(0.65, 0, 0.35, 1) infinite; will-change: transform; }
        .nthre3-three { color: rgb(var(--c-secondary)); }
        .dark .nthre3-three { color: #E58A57; }
        .nthre3-bar   { animation: nthre3-slide 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
        .nthre3-label { animation: nthre3-fade 1.8s ease-in-out infinite; }

        .nthre3-ink   { color: rgb(var(--c-ink)); }
        .nthre3-line  { background-color: rgb(var(--c-line)); }
        .nthre3-accent { background-color: rgb(var(--c-secondary)); }
        .dark .nthre3-accent { background-color: #E58A57; }

        @media (prefers-reduced-motion: reduce) {
          .nthre3-rule, .nthre3-char, .nthre3-bar, .nthre3-label {
            animation: none;
          }
          .nthre3-rule { transform: scaleX(1); opacity: 1; }
          .nthre3-char { transform: none; }
          .nthre3-bar  { transform: translateX(80%); }
        }
      `}</style>

      <div className="flex flex-col items-center gap-y-7">

        {/* top hairline */}
        <div className="nthre3-rule nthre3-line h-px w-[190px]" aria-hidden="true" />

        {/* wordmark: letters rise out of a mask */}
        <div
          className="flex items-baseline font-display font-semibold leading-none select-none text-[38px] tracking-[0.3em] nthre3-ink"
          style={{ paddingLeft: "0.3em" }}
        >
          {LETTERS.map((ch, i) => (
            <span key={ch + i} className="nthre3-mask">
              <span className="nthre3-char" style={{ animationDelay: `${i * 0.09}s` }}>
                {ch}
              </span>
            </span>
          ))}
          <span className="nthre3-mask">
            <span
              className="nthre3-char nthre3-three"
              style={{ animationDelay: `${LETTERS.length * 0.09}s` }}
            >
              3
            </span>
          </span>
        </div>

        {/* bottom hairline with gliding terracotta mark */}
        <div
          className="nthre3-line relative h-px w-[190px] overflow-hidden"
          aria-hidden="true"
        >
          <span className="nthre3-bar nthre3-accent absolute inset-y-0 left-0 w-[38%]" />
        </div>

        {/* label */}
        <p className="nthre3-label text-[10.5px] font-semibold uppercase tracking-[0.34em] text-gray-30 dark:text-darkmuted">
          Fashion Forward
        </p>

      </div>
    </div>
  );
};

export default GlobalLoader;