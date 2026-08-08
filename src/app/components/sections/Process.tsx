import { ArrowRight } from "lucide-react";
import FadeIn from "../shared/FadeIn";
import SectionLabel from "../shared/SectionLabel";
import { PROCESS } from "../../data/process";

const SERIF = "'Libre Baskerville', Georgia, serif";
const CALISTO = "'Calisto MT', 'Lora', Georgia, serif";
const SANS = "'Roboto', system-ui, sans-serif";

const DARK_BG = "#11301C";
const LIGHT_BG = "#E8DDCB";
const GOLD = "#C9A66B";

export default function Process() {
  return (
    <section
      style={{ background: LIGHT_BG }}
      className="py-28 px-6 overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto">

        <FadeIn className="text-center mb-20">
          <SectionLabel>The Experience</SectionLabel>

          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(26px, 3.2vw, 42px)",
              color: DARK_BG,
            }}
          >
            How Your Story{" "}
            <em
              style={{
                fontFamily: CALISTO,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Unfolds
            </em>
          </h2>
        </FadeIn>

        <div className="relative">

          <div
            className="hidden lg:block absolute top-[38px] left-[80px] right-[80px] h-px"
            style={{ background: `${DARK_BG}22` }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">

            {PROCESS.map((step, i) => {
              const Icon = step.icon;

              return (
                <FadeIn
                  key={step.num}
                  delay={i * 0.09}
                  y={20}
                >
                  <div className="flex flex-col items-center text-center">

                    <div className="relative mb-6">

                      <div
                        className="w-[76px] h-[76px] rounded-full flex items-center justify-center relative z-10"
                        style={{
                          border: `1px solid ${DARK_BG}33`,
                          background: LIGHT_BG,
                        }}
                      >
                        <div
                          className="w-[56px] h-[56px] rounded-full flex items-center justify-center"
                          style={{
                            background: `${DARK_BG}11`,
                          }}
                        >
                          <Icon
                            size={20}
                            style={{ color: DARK_BG }}
                          />
                        </div>
                      </div>

                      <span
                        className="absolute -top-2 -right-1 text-[9px] tracking-wider px-1.5"
                        style={{
                          fontFamily: SANS,
                          fontWeight: 500,
                          color: GOLD,
                          background: LIGHT_BG,
                        }}
                      >
                        {step.num}
                      </span>

                    </div>

                    <h3
                      className="text-xl mb-2"
                      style={{
                        fontFamily: SERIF,
                        fontWeight: 700,
                        color: DARK_BG,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-[12.5px] leading-[1.85] font-light"
                      style={{
                        color: `${DARK_BG}99`,
                      }}
                    >
                      {step.body}
                    </p>

                  </div>
                </FadeIn>
              );
            })}

          </div>
        </div>

        <FadeIn className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-9 py-[13px] text-[#E8DDCB] text-[11px] tracking-[0.2em] uppercase rounded-full hover:opacity-80 transition-all group"
            style={{ background: DARK_BG }}
          >
            Start Your Journey

            <ArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </FadeIn>

      </div>
    </section>
  );
}