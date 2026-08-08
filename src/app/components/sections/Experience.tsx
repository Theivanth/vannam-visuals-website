import { ArrowRight } from "lucide-react";
import FadeIn from "../shared/FadeIn";
import SectionLabel from "../shared/SectionLabel";
import { STORIES_FEATURED } from "../../data/stories";

const SERIF = "'Libre Baskerville', Georgia, serif";
const CALISTO = "'Calisto MT', 'Lora', Georgia, serif";
const DARK_BG = "#11301C";
const LIGHT_BG = "#E8DDCB";
const GOLD = "#C9A66B";

const darkH = {
  color: LIGHT_BG,
};

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: DARK_BG }}
      className="py-24 px-6"
    >
      <div className="max-w-[1380px] mx-auto">
        <FadeIn className="text-center mb-14">
          <SectionLabel dark>Featured Stories</SectionLabel>

          <h2
            style={{
              ...darkH,
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(28px, 3.8vw, 48px)",
            }}
          >
            Stories We've{" "}
            <em
              style={{
                fontFamily: CALISTO,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Told
            </em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STORIES_FEATURED.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <article
                className="group rounded-2xl overflow-hidden border border-white/6 flex flex-col h-full hover:border-[#C9A66B]/20 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: 260 }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-sm"
                    style={{ background: "rgba(201,166,107,0.9)" }}
                  >
                    <span className="text-[9px] tracking-[0.22em] text-white uppercase">
                      {s.tag}
                    </span>
                  </div>

                  <div
                    className="absolute bottom-4 right-4 text-[10px] tracking-wide"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {s.date}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-2"
                    style={{ color: GOLD }}
                  >
                    {s.sub}
                  </p>

                  <h3
                    className="leading-tight mb-3"
                    style={{
                      fontFamily: SERIF,
                      fontWeight: 700,
                      fontSize: 19,
                      color: LIGHT_BG,
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-[13.5px] leading-[1.8] font-light flex-1 mb-5"
                    style={{ color: "rgba(232,221,203,0.5)" }}
                  >
                    {s.desc}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.16em] uppercase group-hover:gap-3 transition-all"
                    style={{ color: GOLD }}
                  >
                    Read Story <ArrowRight size={11} />
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}