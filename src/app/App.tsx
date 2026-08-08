import imgWeddingCollage
  from "../imports/candid_wedding_photographer_si_1781933692_bd9afc3c_progressive.jpg";

import imgHaldi
  from "../imports/candid_wedding_photographer_si_1781933692_a13c1a71_progressive.jpg";

import imgEditorialBridal
  from "../imports/candid_wedding_photographer_si_1781933692_28552c13_progressive.jpg";

import Process from "./components/sections/Process";

import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";

import FadeIn from "./components/shared/FadeIn";
import SectionLabel from "./components/shared/SectionLabel";

import { useState, useEffect, useRef } from "react";
import Hero from "./components/sections/Hero";
import DesktopNav from "./components/layout/DesktopNav";0
import { motion, useInView } from "motion/react";
import {
  Menu, X, ArrowRight, ArrowDown, Heart, Camera, Star,
  Award, Users, Shield, Sparkles, BookOpen, MapPin, Mail,
  Phone, Instagram, Facebook, Youtube, ChevronRight,
  MessageCircle, Eye, Aperture, Layers, Feather, Sun,
  ChevronDown, Play, User, CheckSquare, Square,
} from "lucide-react";

// ─── Local image imports ───────────────────────────────────
import imgBeachCouple       from "../imports/candid_wedding_photographer_si_1781933692_99738319_progressive.jpg";
import imgBwCouple          from "../imports/candid_wedding_photographer_si_1781933692_a31d2973_progressive.jpg";
import imgGirlFlower        from "../imports/candid_wedding_photographer_si_1781933692_afba47d3_progressive.jpg";
import imgChandelierWedding from "../imports/candid_wedding_photographer_si_1781933692_4d95cb05_progressive.jpg";
import imgUrbanEvent        from "../imports/specialised_photographers_1718641800_e43656dd_progressive.jpg";
import imgFamilyDusk        from "../imports/candid_wedding_photographer_si_1781933692_aeb4f915_progressive.jpg";

// ─── Design tokens ─────────────────────────────────────────
const SERIF   = "'Libre Baskerville', Georgia, serif";
const CALISTO = "'Calisto MT', 'Lora', Georgia, serif";
const SANS    = "'Roboto', system-ui, sans-serif";
const DARK_BG = "#11301C";
const LIGHT_BG = "#E8DDCB";
const GOLD = "#C9A66B";

// Heading colour on dark sections → cream (not gold gradient)
const darkH: React.CSSProperties = { color: LIGHT_BG };
// Heading colour on light sections → forest green
const lightH: React.CSSProperties = { color: DARK_BG };

// Google Sheets URL — swap this for a Google Apps Script web-app URL to collect data automatically
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1fQ0y50xQ1E2YhzVnWo78uShZYeRXuafwszf8EliGzno/edit?usp=sharing";

// ─── CSS-only logo (no image, text only) ──────────────────
function VannamLogo({ onHero = false }: { onHero?: boolean }) {
  return (
    <div className="flex flex-col items-start" style={{ gap: 3 }}>
      <span style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 22, letterSpacing: "0.28em", color: onHero ? "white" : DARK_BG, lineHeight: 1 }}>
        VANNAM
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <span style={{ height: 1, width: 18, background: GOLD, display: "block" }} />
        <span style={{ fontFamily: SANS, fontWeight: 400, fontSize: 9, letterSpacing: "0.44em", color: GOLD }}>
          VISUALS
        </span>
        <span style={{ height: 1, width: 18, background: GOLD, display: "block" }} />
      </div>
    </div>
  );
}

// ─── Data ──────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Services",   id: "services"   },
  { label: "Experience", id: "experience" },
  { label: "Stories",    id: "stories"    },
  { label: "About",      id: "about"      },
];

const PROCESS = [
  { num: "01", title: "Connect", icon: MessageCircle, body: "A personal consultation to understand your story and the feeling you want to carry forever." },
  { num: "02", title: "Plan",    icon: Layers,        body: "We craft a mood board, select locations, and design every detail around your unique vision." },
  { num: "03", title: "Capture", icon: Camera,        body: "On your day we move quietly — two cameras, one mission — capturing every real moment." },
  { num: "04", title: "Curate",  icon: Eye,           body: "Every image carefully selected and colour-graded to our signature warm cinematic palette." },
  { num: "05", title: "Deliver", icon: Feather,       body: "Your private online gallery arrives within 4–6 weeks, print-ready and yours to keep forever." },
  { num: "06", title: "Relive",  icon: BookOpen,      body: "From heirloom albums to framed wall art — we turn images into objects of beauty." },
];

interface PortfolioItem { src: string; alt: string; h: string; collection: string; collectionImages: string[]; }
const PORTFOLIO_IMGS: PortfolioItem[] = [
  { src: imgBwCouple,          alt: "Elegant black & white couple portrait",       h: "h-[340px]", collection: "Elegant Portraits",  collectionImages: [imgBwCouple] },
  { src: imgBeachCouple,       alt: "Indian couple dancing on beach",               h: "h-[220px]", collection: "Beach Wedding",       collectionImages: [imgBeachCouple] },
  { src: imgEditorialBridal,   alt: "Bridal editorial in gold gown",               h: "h-[300px]", collection: "Bridal Editorial",    collectionImages: [imgEditorialBridal] },
  { src: imgHaldi,             alt: "Couple at joyful haldi ceremony",             h: "h-[200px]", collection: "Haldi Ceremony",      collectionImages: [imgHaldi] },
  { src: imgFamilyDusk,        alt: "Family portrait at dusk",                      h: "h-[260px]", collection: "Family Portraits",    collectionImages: [imgFamilyDusk] },
  { src: imgUrbanEvent,        alt: "Portrait at live event, urban style",          h: "h-[320px]", collection: "Events & Portraits",  collectionImages: [imgUrbanEvent] },
  { src: imgChandelierWedding, alt: "Couple at wedding reception with chandeliers", h: "h-[230px]", collection: "Wedding Receptions", collectionImages: [imgChandelierWedding] },
  { src: imgGirlFlower,        alt: "Little girl with yellow flower crown",         h: "h-[200px]", collection: "Childhood Portraits", collectionImages: [imgGirlFlower] },
];

const WHY_CARDS = [
  { icon: Sun,      title: "Natural Light Artists",  body: "We chase the golden hour. Every session is timed around the most flattering, cinematic light available." },
  { icon: Heart,    title: "Emotion-First Approach", body: "We capture feelings, not just faces. Our work begins with listening before the camera is ever raised." },
  { icon: Award,    title: "Award-Winning Quality",  body: "Recognised by the Asia-Pacific Photography Guild for editorial excellence and narrative storytelling." },
  { icon: Shield,   title: "Backed Up & Secure",     body: "Triple-redundant storage means your memories are safe, always — even years after delivery." },
  { icon: Users,    title: "Limited Bookings",       body: "We take only 12 clients per month. Every session receives undivided attention and full creative investment." },
  { icon: Aperture, title: "Signature Colour Grade", body: "Our hand-crafted LUT library produces the warm, film-like palette that has become our visual signature." },
];

const FAQS = [
  { q: "How far in advance should we book?",          a: "We recommend booking 3–6 months ahead for weddings and 4–8 weeks for portrait sessions. Peak dates (November–February) fill up quickly — reach out early to secure your date." },
  { q: "What is included in a session package?",      a: "Every booking includes a pre-session consultation, professional editing of all delivered images, and access to a private online gallery. Package specifics — hours, add-ons, prints — are discussed during our consultation." },
  { q: "How long until we receive our photos?",       a: "Portrait and birthday sessions: 2–3 weeks. Weddings and full-day events: 4–6 weeks. Rush delivery is available on request for an additional fee." },
  { q: "Do you travel outside Singapore?",            a: "Absolutely. We regularly shoot across Singapore and travel throughout Southeast Asia for destination weddings and editorial sessions. Travel and accommodation are quoted separately." },
  { q: "Can we request specific shots or poses?",     a: "We love it when you do! Share Pinterest boards, reference images, or a shot list before your session. We blend your vision with our editorial instinct to create something uniquely yours." },
  { q: "What if it rains on our shoot day?",          a: "Rain is just another kind of light. We always plan indoor and covered backup options. We'll never cancel a session due to weather — but if you prefer to reschedule, we'll accommodate that too." },
  { q: "How many photos will we receive?",            a: "Portrait and maternity sessions deliver 50–100 curated images. Full wedding coverage delivers 400–600+ images. We prioritise quality over quantity — every image we deliver is one we're proud of." },
  { q: "Do you offer albums, prints, and wall art?",  a: "Yes — we partner with premium print labs to offer lay-flat albums, framed fine-art prints, and photo books. These can be added to any package and make beautiful heirloom gifts." },
];

const TESTIMONIALS = [
  { quote: "Vannam Visuals delivered something we didn't know was possible — photographs that make you feel exactly the way you felt on that day.", name: "Priya & Arjun Sharma",    event: "Wedding · January 2024",  initials: "PA", stars: 5 },
  { quote: "The haldi session was pure chaos and pure magic. They captured every laugh, every turmeric-stained hand, every moment of joy so beautifully.", name: "Kavya & Rohan Nair", event: "Pre-Wedding · March 2024", initials: "KR", stars: 5 },
  { quote: "Our family portrait session at dusk was everything. They made us feel so comfortable and the photos feel absolutely timeless.", name: "The Selvam Family",           event: "Family · February 2024",  initials: "SF", stars: 5 },
];

const INSTAGRAM_IMGS = [
  { src: imgBeachCouple,       alt: "Indian couple dancing on beach" },
  { src: imgHaldi,             alt: "Haldi ceremony couple" },
  { src: imgBwCouple,          alt: "Elegant black and white couple" },
  { src: imgGirlFlower,        alt: "Girl with yellow flower crown" },
  { src: imgChandelierWedding, alt: "Wedding couple at chandelier hall" },
  { src: imgEditorialBridal,   alt: "Editorial bridal gown portrait" },
  { src: imgFamilyDusk,        alt: "Family portrait at dusk" },
  { src: imgWeddingCollage,    alt: "Wedding album highlights" },
  { src: imgUrbanEvent,        alt: "Urban event portrait" },
];

// ─── App ──────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);
  const [openFaq, setOpenFaq]   = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventType: "", message: "", terms: false });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.terms) return;
    setFormStatus("submitting");
    // Opens the Google Sheet so submissions can be tracked.
    // To collect data automatically, deploy a Google Apps Script web app and replace SHEET_URL above.
    window.open(SHEET_URL, "_blank");
    setTimeout(() => setFormStatus("success"), 600);
  };

  return (
    <div className="min-h-screen text-[#2E2E2E] overflow-x-hidden" style={{ fontFamily: SANS, background: LIGHT_BG }}>

      {/* ── FLOATING WHATSAPP ──────────────────────────────── */}
      <a href="https://wa.me/6581444594" target="_blank" rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform duration-200"
        style={{ background: DARK_BG }}>
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.36.63 4.63 1.82 6.62L3 29l6.55-1.77A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.8a10.8 10.8 0 0 1-5.52-1.52l-.4-.23-4.13 1.12 1.1-4-.26-.41A10.8 10.8 0 0 1 5.2 16C5.2 10.04 10.04 5.2 16 5.2S26.8 10.04 26.8 16 21.96 26.8 16 26.8zm5.92-8.07c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.38.48-.57.16-.19.22-.32.32-.54.1-.22.05-.41-.03-.57-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7s1.17 3.14 1.33 3.36c.16.22 2.3 3.5 5.56 4.91.78.33 1.39.53 1.86.68.78.25 1.5.21 2.06.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38z"/>
        </svg>
      </a>

      {/* ── LIGHTBOX ──────────────────────────────────────── */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(0,0,0,0.92)" }} onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-6 text-white/60 hover:text-white transition-colors" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <div className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt}
              className="w-full h-full object-contain max-h-[75vh] rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
              <p className="text-[10px] tracking-[0.32em] uppercase mb-1" style={{ color: GOLD, fontFamily: SANS }}>Collection</p>
              <h3 className="text-white text-lg" style={{ fontFamily: SERIF, fontWeight: 700 }}>{lightbox.collection}</h3>
              <p className="text-white/50 text-[12px] mt-0.5">More images from this collection coming soon.</p>
            </div>
          </div>
        </div>
      )}

      {/* ══ 1. NAV ════════════════════════════════════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "shadow-[0_1px_0_rgba(17,48,28,0.1)]" : "bg-transparent"}`}
        style={scrolled ? { background: LIGHT_BG } : {}}>
        <div className="max-w-[1380px] mx-auto px-6 lg:px-10 h-[70px] flex items-center justify-between">
          <a href="#"><VannamLogo onHero={!scrolled} /></a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, id }) => (
              <a key={id} href={`#${id}`}
                className="text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 hover:text-[#C9A66B]"
                style={{ color: scrolled ? DARK_BG : "rgba(255,255,255,0.8)" }}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-[10.5px] tracking-[0.18em] uppercase px-6 py-[10px] rounded-full border transition-all duration-300"
            style={scrolled
              ? { borderColor: DARK_BG, color: DARK_BG }
              : { borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
            Book Your Story <ArrowRight size={11} />
          </a>

          <button className={`lg:hidden`} style={{ color: scrolled ? DARK_BG : "white" }}
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t px-6 py-7 flex flex-col gap-5"
            style={{ background: LIGHT_BG, borderColor: `${DARK_BG}18` }}>
            {NAV_LINKS.map(({ label, id }) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}
                className="text-[12px] tracking-[0.14em] uppercase hover:text-[#C9A66B] transition-colors"
                style={{ color: DARK_BG }}>{label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-2 text-center text-[11px] tracking-[0.18em] uppercase px-6 py-3 rounded-full border"
              style={{ borderColor: DARK_BG, color: DARK_BG }}>Book Your Story</a>
          </div>
        )}
      </header>

      <Hero />

      {/* ══ 3. BRAND PHILOSOPHY — dark ════════════════════════ */}
      <section id="about" style={{ background: DARK_BG }} className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionLabel dark>The Name Behind The Brand</SectionLabel>
              <h2 className="leading-[1.15] mb-6"
                style={{ ...darkH, fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(26px, 3.5vw, 44px)" }}>
                <em style={{ fontFamily: CALISTO, fontWeight: 400, fontStyle: "italic" }}>Vannam</em> — the Tamil
                <br />word for Colour
              </h2>
              <p className="leading-[1.9] text-[15px] font-light mb-5" style={{ color: "rgba(232,221,203,0.72)" }}>
                Colour is not merely visual. It is the warmth of a mother's embrace, the gold of a first dance, the turmeric yellow of a haldi morning, the deep red of a lehenga twirling on sand.
              </p>
              <p className="leading-[1.9] text-[15px] font-light" style={{ color: "rgba(232,221,203,0.72)" }}>
                At Vannam Visuals, every photograph is a colour — a preserved emotion that lives beyond the moment. We are storytellers first, photographers second.
              </p>
              <a href="#services"
                className="mt-10 inline-flex items-center gap-2 text-[12px] tracking-[0.16em] uppercase pb-1 hover:opacity-70 transition-opacity group"
                style={{ color: GOLD, borderBottom: `1px solid ${GOLD}44` }}>
                See Our Services <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart,    label: "Emotion",  desc: "We feel before we frame. Every session begins with empathy and listening." },
                  { icon: Camera,   label: "Craft",    desc: "Technical mastery placed entirely in service of authentic moments." },
                  { icon: Sparkles, label: "Light",    desc: "Natural, golden, cinematic — light is our medium and our language." },
                  { icon: BookOpen, label: "Story",    desc: "A beginning, a middle, an end. Every gallery we deliver is a narrative." },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="rounded-2xl p-6 border border-white/8 hover:border-[#C9A66B]/30 transition-all duration-300 group"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(201,166,107,0.15)" }}>
                      <Icon size={18} style={{ color: GOLD }} />
                    </div>
                    <p className="text-[16px] mb-2" style={{ fontFamily: SERIF, fontWeight: 700, color: LIGHT_BG }}>{label}</p>
                    <p className="text-[12.5px] leading-relaxed font-light" style={{ color: "rgba(232,221,203,0.5)" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 5. FEATURED STORIES — dark ════════════════════════ */}
      <Experience />

      {/* ══ 6. PROCESS — light ════════════════════════════════ */}
      <Process />

      {/* ══ 7. STORIES MASONRY — dark ════════════════════════ */}
      <section id="stories" style={{ background: DARK_BG }} className="py-24 px-6">
        <div className="max-w-[1380px] mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <SectionLabel dark>Our Stories</SectionLabel>
              <h2 style={{ ...darkH, fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 42px)" }}>
                A Glimpse of Our{" "}
                <em style={{ fontFamily: CALISTO, fontWeight: 400, fontStyle: "italic" }}>World</em>
              </h2>
            </div>
            <p className="text-[12px]" style={{ color: `${GOLD}99`, fontFamily: SANS }}>Click any image to open the collection</p>
          </FadeIn>
          <div className="columns-2 md:columns-3 lg:columns-4" style={{ columnGap: 14 }}>
            {PORTFOLIO_IMGS.map((img, i) => (
              <FadeIn key={i} delay={i * 0.06} className="mb-[14px] break-inside-avoid">
                <button className={`group relative overflow-hidden rounded-xl w-full block cursor-pointer ${img.h}`}
                  style={{ background: "#1e2e22" }}
                  onClick={() => setLightbox(img)} aria-label={`Open ${img.collection}`}>
                  <img src={img.src} alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Eye size={14} className="text-white" />
                    </div>
                    <span className="text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full backdrop-blur-sm"
                      style={{ background: "rgba(201,166,107,0.85)", fontFamily: SANS }}>{img.collection}</span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. VANNAM DIFFERENCE — light ══════════════════════ */}
      <section style={{ background: LIGHT_BG }} className="py-28 px-6">
        <div className="max-w-[1380px] mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 style={{ ...lightH, fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 42px)" }}>
              The Vannam{" "}
              <em style={{ fontFamily: CALISTO, fontWeight: 400, fontStyle: "italic" }}>Difference</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <FadeIn key={card.title} delay={i * 0.08}>
                  <div className="group p-7 rounded-2xl border bg-white/60 hover:bg-white/80 transition-all duration-300"
                    style={{ borderColor: `${DARK_BG}12` }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${DARK_BG}0f` }}>
                      <Icon size={20} style={{ color: DARK_BG }} />
                    </div>
                    <h3 className="text-xl mb-3" style={{ fontFamily: SERIF, fontWeight: 700, color: DARK_BG }}>{card.title}</h3>
                    <p className="text-[13.5px] leading-[1.85] font-light" style={{ color: `${DARK_BG}99` }}>{card.body}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ 9. FAQS — dark ════════════════════════════════════ */}
      <section style={{ background: DARK_BG }} className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel dark>Common Questions</SectionLabel>
            <h2 style={{ ...darkH, fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 42px)" }}>
              Frequently Asked{" "}
              <em style={{ fontFamily: CALISTO, fontWeight: 400, fontStyle: "italic" }}>Questions</em>
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="rounded-xl border border-white/8 overflow-hidden hover:border-[#C9A66B]/20 transition-colors"
                  style={{ background: "rgba(255,255,255,0.04)" }}>
                  <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="text-[15px] font-medium" style={{ fontFamily: SERIF, fontWeight: 700, color: LIGHT_BG }}>{faq.q}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}
                      className="shrink-0" style={{ color: GOLD }}>
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  <motion.div initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}>
                    <p className="px-6 pb-6 text-[14px] leading-[1.9] font-light"
                      style={{ color: "rgba(232,221,203,0.6)", fontFamily: SANS }}>{faq.a}</p>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="text-center mt-12" delay={0.2}>
            <p className="text-[13px] mb-4" style={{ color: "rgba(232,221,203,0.45)", fontFamily: SANS }}>Don't see your question?</p>
            <a href="https://wa.me/6581444954" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase hover:opacity-70 transition-opacity"
              style={{ color: GOLD, fontFamily: SANS }}>
              <MessageCircle size={13} /> Ask us on WhatsApp
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ══ 10. TESTIMONIALS — light ══════════════════════════ */}
      <section style={{ background: LIGHT_BG }} className="py-28 px-6">
        <div className="max-w-[1380px] mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel>Kind Words</SectionLabel>
            <h2 style={{ ...lightH, fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(26px, 3.2vw, 42px)" }}>
              What Our Families{" "}
              <em style={{ fontFamily: CALISTO, fontWeight: 400, fontStyle: "italic" }}>Say</em>
            </h2>
          </FadeIn>

          {/* Video testimonial */}
          <FadeIn className="mb-8">
            <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: `${DARK_BG}15`, background: "white" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative flex items-center justify-center" style={{ minHeight: 320, background: DARK_BG }}>
                  <img src={imgBeachCouple} alt="Video testimonial thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/50" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-[72px] h-[72px] rounded-full border-2 border-white/60 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                      style={{ background: "rgba(201,166,107,0.3)" }}>
                      <Play size={28} className="text-white ml-1.5" fill="white" />
                    </div>
                    <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.7)", fontFamily: SANS }}>Watch Testimonial</span>
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-[9px] tracking-[0.2em] uppercase text-white"
                    style={{ background: "rgba(201,166,107,0.85)", fontFamily: SANS }}>Video · Coming Soon</div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center" style={{ background: "white" }}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={13} className="fill-[#C9A66B] text-[#C9A66B]" />)}
                  </div>
                  <p className="leading-[1.8] mb-6" style={{ fontFamily: CALISTO, fontWeight: 400, fontSize: 18, fontStyle: "italic", color: DARK_BG }}>
                    "Watching this video will bring you right back to that day. Vannam Visuals captured things I didn't even realise happened — and now I get to relive them forever."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px]"
                      style={{ background: `${DARK_BG}18`, color: DARK_BG, fontWeight: 500 }}>AR</div>
                    <div>
                      <p className="text-[13.5px] font-medium" style={{ color: DARK_BG }}>Ananya & Rishi Kumar</p>
                      <p className="text-[11px] mt-0.5" style={{ color: GOLD }}>Wedding · December 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Written testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-[0_2px_24px_rgba(17,48,28,0.07)] border flex flex-col h-full"
                  style={{ borderColor: `${DARK_BG}0d` }}>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, s) => <Star key={s} size={12} className="fill-[#C9A66B] text-[#C9A66B]" />)}
                  </div>
                  <span className="block leading-[0.8] mb-2 select-none" style={{ fontFamily: SERIF, fontSize: 72, color: `${GOLD}30` }}>"</span>
                  <p className="leading-[1.78] flex-1 mb-7" style={{ fontFamily: CALISTO, fontWeight: 400, fontSize: 17, fontStyle: "italic", color: DARK_BG }}>
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4 pt-5 border-t" style={{ borderColor: `${DARK_BG}12` }}>
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${DARK_BG}15` }}>
                      <span className="text-[11px] tracking-wide" style={{ fontWeight: 500, color: DARK_BG }}>{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-[13.5px] font-medium" style={{ color: DARK_BG }}>{t.name}</p>
                      <p className="text-[11px] mt-0.5" style={{ color: GOLD }}>{t.event}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. CONTACT US — dark ═════════════════════════════ */}
      <section id="contact" style={{ background: DARK_BG }} className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — info */}
            <FadeIn>
              <h2 className="mb-6 leading-tight" style={{ fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(42px, 6vw, 80px)", color: LIGHT_BG }}>
                Contact Us
              </h2>
              {/* Gold star divider */}
              <div className="flex items-center gap-3 mb-8">
                <span style={{ color: GOLD, fontSize: 18 }}>✦</span>
                <span className="h-px w-24" style={{ background: GOLD }} />
              </div>
              <p className="text-[15px] leading-[1.85] font-light mb-12 max-w-sm" style={{ color: "rgba(232,221,203,0.65)" }}>
                We'd love to hear from you. Whether you have a question, need a quote, or want to plan your next event, we're here to help.
              </p>

              {/* Contact rows */}
              {[
                { icon: Phone, label: "PHONE", value: "+65 8144 4954", href: "tel:+6581444954" },
                { icon: Mail,  label: "EMAIL", value: "vannamvisuals@gmail.com", href: "mailto:vannamvisuals@gmail.com" },
                { icon: MapPin, label: "LOCATION", value: "Singapore", href: "#" },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <div key={label}>
                  <div className="flex items-center gap-5 py-5">
                    <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0"
                      style={{ borderColor: GOLD, background: "transparent" }}>
                      <Icon size={17} style={{ color: GOLD }} />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.28em] uppercase mb-1" style={{ color: GOLD, fontFamily: SANS }}>{label}</p>
                      <a href={href} className="text-[15px] font-light hover:opacity-70 transition-opacity" style={{ color: LIGHT_BG }}>
                        {value}
                      </a>
                    </div>
                  </div>
                  {i < 2 && <div className="h-px" style={{ background: "rgba(201,166,107,0.2)" }} />}
                </div>
              ))}
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay={0.15}>
              {formStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-white/8"
                  style={{ background: "rgba(255,255,255,0.04)" }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: `${GOLD}22` }}>
                    <span style={{ fontSize: 28, color: GOLD }}>✓</span>
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 26, color: LIGHT_BG }}>Message Received!</h3>
                  <p className="text-[14px] leading-relaxed font-light max-w-xs" style={{ color: "rgba(232,221,203,0.6)" }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button className="mt-8 text-[11px] tracking-[0.18em] uppercase hover:opacity-70 transition-opacity" style={{ color: GOLD }}
                    onClick={() => { setFormStatus("idle"); setForm({ name: "", email: "", phone: "", eventType: "", message: "", terms: false }); }}>
                    Send Another Message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Input style helper */}
                  {[
                    { name: "name",  label: "Your Name *",          type: "text",  required: true,  icon: <User size={16} /> },
                    { name: "email", label: "Your Email *",          type: "email", required: true,  icon: <Mail size={16} /> },
                    { name: "phone", label: "Your Phone (Optional)", type: "tel",   required: false, icon: <Phone size={16} /> },
                  ].map(field => (
                    <div key={field.name} className="relative">
                      <input name={field.name} type={field.type} required={field.required}
                        placeholder={field.label} value={(form as any)[field.name]} onChange={handleField}
                        className="w-full px-5 py-4 pr-12 rounded-xl border text-[14px] outline-none transition-colors"
                        style={{
                          background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,166,107,0.3)",
                          color: LIGHT_BG, fontFamily: SANS,
                        }}
                        onFocus={e => e.target.style.borderColor = GOLD}
                        onBlur={e => e.target.style.borderColor = "rgba(201,166,107,0.3)"}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: "rgba(201,166,107,0.5)" }}>
                        {field.icon}
                      </span>
                    </div>
                  ))}

                  {/* Event Type dropdown */}
                  <div className="relative">
                    <select name="eventType" required value={form.eventType} onChange={handleField}
                      className="w-full px-5 py-4 rounded-xl border text-[14px] outline-none appearance-none transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,166,107,0.3)",
                        color: form.eventType ? LIGHT_BG : "rgba(232,221,203,0.45)", fontFamily: SANS,
                      }}>
                      <option value="" disabled hidden>Event Type *</option>
                      {["Wedding", "Birthday", "Family Portrait", "Maternity", "Graduation", "Corporate", "Other"].map(o => (
                        <option key={o} value={o} style={{ background: DARK_BG, color: LIGHT_BG }}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(201,166,107,0.5)" }} />
                  </div>

                  {/* Message textarea */}
                  <div className="relative">
                    <textarea name="message" required rows={5} placeholder="Your Message *"
                      value={form.message} onChange={handleField}
                      className="w-full px-5 py-4 pr-12 rounded-xl border text-[14px] outline-none resize-none transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.05)", borderColor: "rgba(201,166,107,0.3)",
                        color: LIGHT_BG, fontFamily: SANS,
                      }}
                      onFocus={e => e.target.style.borderColor = GOLD}
                      onBlur={e => e.target.style.borderColor = "rgba(201,166,107,0.3)"}
                    />
                    <MessageCircle size={16} className="absolute right-4 bottom-4 pointer-events-none" style={{ color: "rgba(201,166,107,0.5)" }} />
                  </div>

                  {/* T&C checkbox */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" name="terms" checked={form.terms} onChange={handleField} className="sr-only" />
                    <span className="shrink-0 transition-colors" style={{ color: form.terms ? GOLD : "rgba(201,166,107,0.4)" }}>
                      {form.terms ? <CheckSquare size={18} /> : <Square size={18} />}
                    </span>
                    <span className="text-[13px]" style={{ color: "rgba(232,221,203,0.6)", fontFamily: SANS }}>
                      I accept the{" "}
                      <a href="#" className="underline hover:opacity-70" style={{ color: GOLD }}>Terms & Conditions</a>
                    </span>
                  </label>

                  {/* Submit */}
                  <button type="submit" disabled={!form.terms || formStatus === "submitting"}
                    className="w-full py-4 text-[12px] tracking-[0.22em] uppercase font-medium transition-all duration-300 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50"
                    style={{ background: GOLD, color: DARK_BG, fontFamily: SANS }}>
                    {formStatus === "submitting" ? "Sending…" : <>Send Message <ArrowRight size={13} /></>}
                  </button>

                  <p className="text-center text-[11px]" style={{ color: "rgba(232,221,203,0.35)", fontFamily: SANS }}>
                    ⏱ We typically respond within 24 hours.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 12. INSTAGRAM — light — right before footer ═══════ */}
      <section style={{ background: LIGHT_BG }} className="py-20 px-6">
        <div className="max-w-[1380px] mx-auto">
          <FadeIn className="text-center mb-10">
            <a href="https://instagram.com/vannamvisuals" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase transition-colors hover:opacity-70"
              style={{ color: DARK_BG, fontFamily: SANS }}>
              <Instagram size={14} /> @vannamvisuals · Follow Our Journey
            </a>
            <h2 className="mt-3" style={{ ...lightH, fontFamily: SERIF, fontWeight: 700, fontSize: "clamp(24px, 2.8vw, 36px)" }}>
              Life Through Our{" "}
              <em style={{ fontFamily: CALISTO, fontWeight: 400, fontStyle: "italic" }}>Lens</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
            {INSTAGRAM_IMGS.map((img, i) => (
              <FadeIn key={i} delay={i * 0.04} className="aspect-square col-span-1">
                <a href="https://instagram.com/vannamvisuals" target="_blank" rel="noreferrer"
                  className="group relative w-full h-full overflow-hidden rounded-xl block" style={{ background: "#c8bfb0" }}>
                  <img src={img.src} alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <Instagram size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════ */}
      <footer className="pt-16 pb-8 px-6" style={{ background: "#0d1f13", color: "rgba(232,221,203,0.3)" }}>
        <div className="max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
            <div className="md:col-span-1">
              {/* Text-only logo in footer */}
              <div className="flex flex-col mb-4" style={{ gap: 3 }}>
                <span style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 20, letterSpacing: "0.28em", color: "rgba(232,221,203,0.75)", lineHeight: 1 }}>VANNAM</span>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ height: 1, width: 16, background: GOLD, display: "block" }} />
                  <span style={{ fontFamily: SANS, fontWeight: 400, fontSize: 8, letterSpacing: "0.44em", color: GOLD }}>VISUALS</span>
                  <span style={{ height: 1, width: 16, background: GOLD, display: "block" }} />
                </div>
              </div>
              <p className="text-[12px] leading-[1.85] mb-5">Every Colour Has A Story.<br />Singapore-based photography studio.</p>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Instagram, label: "Instagram", href: "https://instagram.com/vannamvisuals" },
                  { icon: Facebook,  label: "Facebook",  href: "#" },
                  { icon: Youtube,   label: "YouTube",   href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A66B]/40 hover:text-[#C9A66B] transition-all duration-200">
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { heading: "Navigate", items: [{ l: "Services", id: "services" }, { l: "Experience", id: "experience" }, { l: "Stories", id: "stories" }, { l: "About", id: "about" }] },
              { heading: "Services", items: [{ l: "Weddings", id: "services" }, { l: "Birthdays", id: "services" }, { l: "Family", id: "services" }, { l: "Maternity", id: "services" }, { l: "Graduation", id: "services" }] },
            ].map(col => (
              <div key={col.heading}>
                <p className="text-[10px] tracking-[0.26em] uppercase mb-5" style={{ fontWeight: 500, color: "rgba(232,221,203,0.45)", fontFamily: SANS }}>{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.items.map(({ l, id }) => (
                    <li key={l}><a href={`#${id}`} className="text-[12.5px] hover:text-white/55 transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-[10px] tracking-[0.26em] uppercase mb-5" style={{ fontWeight: 500, color: "rgba(232,221,203,0.45)", fontFamily: SANS }}>Connect</p>
              <div className="space-y-3 text-[12.5px]">
                <p className="flex items-start gap-2"><MapPin size={12} style={{ color: `${GOLD}99` }} className="mt-0.5 shrink-0" /><span>Singapore</span></p>
                <p className="flex items-center gap-2"><Mail size={12} style={{ color: `${GOLD}99` }} className="shrink-0" /><a href="mailto:vannamvisuals@gmail.com" className="hover:text-white/60 transition-colors">vannamvisuals@gmail.com</a></p>
                <p className="flex items-center gap-2"><Phone size={12} style={{ color: `${GOLD}99` }} className="shrink-0" /><a href="tel:+6581444954" className="hover:text-white/60 transition-colors">+65 8144 4954</a></p>
                <p className="flex items-center gap-2"><MessageCircle size={12} style={{ color: `${GOLD}99` }} className="shrink-0" /><a href="https://wa.me/6581444954" className="hover:text-white/60 transition-colors">WhatsApp Available</a></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-7 text-[11px]" style={{ fontFamily: SANS }}>
            <p>© 2024 Vannam Visuals. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/50 transition-colors">Terms of Service</a>
            </div>
            <p style={{ color: "rgba(232,221,203,0.2)" }}>Crafted with care in Singapore.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
