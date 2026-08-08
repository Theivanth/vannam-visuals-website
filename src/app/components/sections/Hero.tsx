import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";

import imgBeachCouple from "../../../imports/candid_wedding_photographer_si_1781933692_99738319_progressive.jpg";

const SERIF = "'Libre Baskerville', Georgia, serif";
const CALISTO = "'Calisto MT', 'Lora', Georgia, serif";
const SANS = "'Roboto', system-ui, sans-serif";
const DARK_BG = "#11301C";
const GOLD = "#C9A66B";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ background: "#1a100a" }}
      >
        <img
          src={imgBeachCouple}
          alt="Indian couple in traditional wedding attire dancing on a sandy beach"
          className="w-full h-full object-cover object-center opacity-70"
        />
      </div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-black/40" />

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-end px-8 md:px-16 lg:px-24">
        
        <div className="max-w-xl text-right">

          {/* Location / category */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3 justify-end mb-7"
          >
            <span
              className="text-[10px] tracking-[0.44em] uppercase"
              style={{
                fontFamily: SANS,
                color: GOLD,
              }}
            >
              Singapore · Photography
            </span>

            <span
              className="h-px w-8"
              style={{ background: GOLD }}
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white leading-[1.05] mb-7"
            style={{
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(44px, 7.5vw, 100px)",
            }}
          >
            Every Colour
            <br />
            <em
              style={{
                fontFamily: CALISTO,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Has A Story.
            </em>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 1.15,
            }}
            className="max-w-md ml-auto mb-11 font-light leading-[1.85]"
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            We don't just capture moments.
            <br />
            We preserve emotions that last forever.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 1.45,
            }}
            className="flex flex-col sm:flex-row gap-3 justify-end"
          >
            <a
              href="#stories"
              className="inline-flex items-center justify-center gap-2 px-9 py-[14px] text-[#E8DDCB] text-[11px] tracking-[0.22em] uppercase rounded-full hover:opacity-80 transition-opacity"
              style={{ background: DARK_BG }}
            >
              Explore Our Stories
              <ArrowRight size={12} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-9 py-[14px] border border-white/40 text-white text-[11px] tracking-[0.22em] uppercase rounded-full hover:border-white/80 transition-all"
            >
              Book a Session
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2.2,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <span className="text-[9px] tracking-[0.35em] uppercase">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={13} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}