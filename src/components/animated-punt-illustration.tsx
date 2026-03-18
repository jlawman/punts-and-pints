"use client";

import { motion } from "motion/react";

export function AnimatedPuntIllustration() {
  return (
    <motion.svg
      viewBox="0 0 1400 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Sky/Background */}
      <rect width="1400" height="800" fill="#F9FAFB" />

      {/* Bridge in background */}
      <g opacity="0.6">
        {/* Bridge arches */}
        <ellipse cx="900" cy="280" rx="80" ry="40" fill="none" stroke="#D1D5DB" strokeWidth="2" />
        <ellipse cx="1050" cy="280" rx="80" ry="40" fill="none" stroke="#D1D5DB" strokeWidth="2" />
        <ellipse cx="1200" cy="280" rx="80" ry="40" fill="none" stroke="#D1D5DB" strokeWidth="2" />
        {/* Bridge deck */}
        <line x1="750" y1="240" x2="1350" y2="240" stroke="#D1D5DB" strokeWidth="3" />
        <line x1="750" y1="245" x2="1350" y2="245" stroke="#D1D5DB" strokeWidth="1" />
      </g>

      {/* Trees/foliage */}
      <g opacity="0.4">
        <path d="M 1250 150 Q 1270 180 1250 200 Q 1230 180 1250 150" fill="none" stroke="#9CA3AF" strokeWidth="2" />
        <path d="M 1300 170 Q 1315 195 1300 210 Q 1285 195 1300 170" fill="none" stroke="#9CA3AF" strokeWidth="2" />
        <path d="M 800 180 Q 820 210 800 230 Q 780 210 800 180" fill="none" stroke="#9CA3AF" strokeWidth="2" />
      </g>

      {/* Animated water lines */}
      <motion.g
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ellipse cx="400" cy="520" rx="60" ry="8" fill="none" stroke="#D1D5DB" strokeWidth="2" />
        <ellipse cx="600" cy="540" rx="50" ry="6" fill="none" stroke="#D1D5DB" strokeWidth="1.5" />
        <ellipse cx="250" cy="500" rx="40" ry="5" fill="none" stroke="#D1D5DB" strokeWidth="1.5" />
        <ellipse cx="900" cy="560" rx="55" ry="7" fill="none" stroke="#D1D5DB" strokeWidth="2" />
        <ellipse cx="1100" cy="580" rx="45" ry="6" fill="none" stroke="#D1D5DB" strokeWidth="1.5" />
      </motion.g>

      {/* Duck */}
      <motion.g
        animate={{
          y: [0, -2, 0],
          x: [0, 3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ellipse cx="1080" cy="650" rx="25" ry="15" fill="none" stroke="#6B7280" strokeWidth="2" />
        <circle cx="1095" cy="645" r="8" fill="none" stroke="#6B7280" strokeWidth="2" />
        <circle cx="1100" cy="643" r="2" fill="#6B7280" />
      </motion.g>

      {/* Main boat and people - with gentle drift */}
      <motion.g
        animate={{
          x: [0, -8, 0],
          y: [0, 2, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {/* Punt boat */}
        <path
          d="M 250 480 Q 240 490 250 500 L 850 500 Q 860 490 850 480 L 250 480"
          fill="none"
          stroke="#374151"
          strokeWidth="3"
        />
        <line x1="255" y1="480" x2="255" y2="500" stroke="#374151" strokeWidth="2" />
        <line x1="845" y1="480" x2="845" y2="500" stroke="#374151" strokeWidth="2" />

        {/* Person 1: Punter (standing, left side) */}
        <g>
          {/* Punt pole */}
          <line x1="320" y1="320" x2="280" y2="500" stroke="#6B7280" strokeWidth="3" />
          {/* Body */}
          <ellipse cx="340" cy="400" rx="25" ry="35" fill="none" stroke="#374151" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="340" cy="360" r="18" fill="none" stroke="#374151" strokeWidth="2.5" />
          {/* Arms */}
          <path d="M 320 390 L 315 410" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 360 390 L 325 330" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          {/* Legs */}
          <line x1="330" y1="430" x2="325" y2="465" stroke="#374151" strokeWidth="2.5" />
          <line x1="350" y1="430" x2="355" y2="465" stroke="#374151" strokeWidth="2.5" />
        </g>

        {/* Person 2: Interviewer (sitting, middle) */}
        <g>
          {/* Body */}
          <ellipse cx="520" cy="440" rx="22" ry="30" fill="none" stroke="#374151" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="520" cy="405" r="16" fill="none" stroke="#374151" strokeWidth="2.5" />
          {/* Arms holding notepad */}
          <path d="M 500 430 L 480 445" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 540 430 L 520 445" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          {/* Notepad */}
          <rect x="475" y="440" width="30" height="25" fill="none" stroke="#6B7280" strokeWidth="2" rx="2" />
          {/* Legs */}
          <path d="M 510 465 L 505 485" stroke="#374151" strokeWidth="2.5" />
          <path d="M 530 465 L 535 485" stroke="#374151" strokeWidth="2.5" />
        </g>

        {/* Person 3: Interviewee (woman, sitting, right side) */}
        <g>
          {/* Body */}
          <ellipse cx="720" cy="440" rx="22" ry="30" fill="none" stroke="#374151" strokeWidth="2.5" />
          {/* Head */}
          <circle cx="720" cy="405" r="16" fill="none" stroke="#374151" strokeWidth="2.5" />
          {/* Hair (simple long hair representation) */}
          <path d="M 710 395 Q 705 405 710 415" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 730 395 Q 735 405 730 415" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          {/* Arms (gesturing) */}
          <path d="M 700 430 L 680 420" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 740 430 L 760 425" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
          {/* Legs */}
          <path d="M 710 465 L 705 485" stroke="#374151" strokeWidth="2.5" />
          <path d="M 730 465 L 735 485" stroke="#374151" strokeWidth="2.5" />
        </g>
      </motion.g>

      {/* More water lines in foreground */}
      <motion.g
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <ellipse cx="150" cy="620" rx="70" ry="10" fill="none" stroke="#9CA3AF" strokeWidth="2" />
        <ellipse cx="1200" cy="640" rx="65" ry="9" fill="none" stroke="#9CA3AF" strokeWidth="2" />
        <ellipse cx="500" cy="670" rx="80" ry="12" fill="none" stroke="#9CA3AF" strokeWidth="2.5" />
      </motion.g>
    </motion.svg>
  );
}
