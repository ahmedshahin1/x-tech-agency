import { motion } from "framer-motion";

/**
 * Animated brand "X" mark — pure CSS/SVG, no Three.js dep.
 * Two glowing crossed strokes, slowly rotating with floating particles.
 */
export function HeroX() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* radial glow */}
      <div
        className="absolute h-[80vmin] w-[80vmin] rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--gradient-radial-glow)" }}
      />

      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* spinning X */}
      <motion.div
        className="relative h-[60vmin] w-[60vmin] animate-spin-slow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <linearGradient id="xgrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.65 0.22 264)" />
              <stop offset="100%" stopColor="oklch(0.82 0.16 195)" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#glow)" stroke="url(#xgrad)" strokeWidth="14" strokeLinecap="round" fill="none">
            <path d="M40 40 Q 100 100 160 160" />
            <path d="M160 40 Q 100 100 40 160" />
          </g>
          <circle cx="100" cy="100" r="80" stroke="url(#xgrad)" strokeWidth="0.5" fill="none" opacity="0.4" />
          <circle cx="100" cy="100" r="92" stroke="url(#xgrad)" strokeWidth="0.5" fill="none" opacity="0.25" />
        </svg>
      </motion.div>

      {/* floating particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-gradient-brand"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
