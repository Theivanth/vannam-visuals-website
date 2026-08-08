import { ChevronRight } from "lucide-react";
import FadeIn from "../shared/FadeIn";
import SectionLabel from "../shared/SectionLabel";
import { CATEGORIES } from "../../data/categories";

const SERIF = "'Libre Baskerville', Georgia, serif";
const CALISTO = "'Calisto MT', 'Lora', Georgia, serif";
const LIGHT_BG = "#E8DDCB";
const GOLD = "#C9A66B";

const lightH = {
  color: "#11301C",
};

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: LIGHT_BG }}
      className="py-24 px-6"
    >
      <div className="max-w-[1380px] mx-auto">
        <FadeIn className="text-center mb-14">
          <SectionLabel>Services</SectionLabel>

          <h2
            style={{
              ...lightH,
              fontFamily: SERIF,
              fontWeight: 700,
              fontSize: "clamp(28px, 3.8vw, 48px)",
            }}
          >
            Every Celebration,{" "}
            <em
              style={{
                fontFamily: CALISTO,
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              Every Story
            </em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeIn className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div
              className="group relative overflow-hidden rounded-2xl cursor-pointer w-full"
              style={{
                minHeight: 440,
                height: "100%",
                background: "#2a1a10",
              }}
            >
              <img
                src={CATEGORIES[0].img}
                alt="Wedding photography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ minHeight: 440 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/15 to-transparent" />

              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full"
                style={{ background: GOLD }}
              >
                <span className="text-[9px] tracking-[0.24em] text-white uppercase">
                  {CATEGORIES[0].tag}
                </span>
              </div>

              <div className="absolute bottom-0 p-7">
                <h3
                  className="text-white leading-none mb-2"
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 700,
                    fontSize: 26,
                  }}
                >
                  {CATEGORIES[0].title}
                </h3>

                <p
                  className="text-[13px] font-light mb-4"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {CATEGORIES[0].sub}
                </p>

                <span
                  className="inline-flex items-center gap-1.5 text-[10.5px] tracking-[0.16em] uppercase"
                  style={{ color: GOLD }}
                >
                  View Gallery <ChevronRight size={11} />
                </span>
              </div>
            </div>
          </FadeIn>

          {CATEGORIES.slice(1).map((cat, i) => (
            <FadeIn key={cat.title} delay={(i + 1) * 0.07}>
              <div
                className="group relative overflow-hidden rounded-2xl bg-[#ddd8d2] cursor-pointer"
                style={{ height: 210 }}
              >
                <img
                  src={cat.img}
                  alt={`${cat.title} photography`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />

                <div className="absolute bottom-0 p-5">
                  <h3
                    className="text-white text-xl mb-0.5"
                    style={{
                      fontFamily: SERIF,
                      fontWeight: 700,
                    }}
                  >
                    {cat.title}
                  </h3>

                  <p
                    className="text-[11.5px] font-light leading-snug"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {cat.sub}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}