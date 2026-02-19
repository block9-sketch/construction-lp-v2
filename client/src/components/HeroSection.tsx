/*
 * Design: Industrial Modernism Hero
 * - Full-screen dark overlay on construction site image
 * - Large Noto Serif JP heading with amber accent word
 * - Oswald font for stats
 * - Diagonal bottom clip-path
 */

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-1_1771498610000_na1fn_aGVyby1jb25zdHJ1Y3Rpb24.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTFfMTc3MTQ5ODYxMDAwMF9uYTFmbl9hR1Z5YnkxamIyNXpkSEoxWTNScGIyNC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jlhleullEs8u4Kf7C6DOfwFqF1p4n1FeJgO2vvsNXRwbu0xs3DnlZmdxeL54nq0uKdOGs-dLQEbAORg7dLWrgf9c-CfxqUaa-U5aE0y9MNIjZthZonwuHiGkCkjej8Gf5tF637benW85bGj-5vtFS1w6nhF1LR1z1y3-kpdWq4ZtgNVEP3voAJeK0Y36sY8pKP9PmPHKbUTGvo-IjbTDK4A0XvWnSQYwGn6AjKwGn1~bTTjytTsRQFY4VTXBzxvUkKYhtwmMji9tk~haLd4R~-F4lAN8Sxvqvd9aBjlWWShClzldWsog58X~hfB1iA4egGKAC-oRYhi5KMu0knBxBA__";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projects = useCountUp(1200, 2000, visible);
  const years = useCountUp(52, 1500, visible);
  const satisfaction = useCountUp(98, 1800, visible);

  const scrollToNext = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)",
        marginBottom: "-4%",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1E]/90 via-[#1C1C1E]/70 to-[#1C1C1E]/30" />
      {/* Bottom gradient for clip-path transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C1C1E] to-transparent" />

      {/* Grid overlay decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-8 h-[2px] bg-[#F59E0B]" />
            <span
              className="text-[#F59E0B] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              TAKUMI CONSTRUCTION CO., LTD.
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            確かな技術と
            <br />
            <span className="text-[#F59E0B]">信頼</span>で、
            <br />
            未来を築く。
          </h1>

          {/* Subtext */}
          <p
            className={`text-white/70 text-base lg:text-lg leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            土木・建築・リノベーションを手がける総合建設会社として、
            創業以来50年以上にわたり地域の発展に貢献してきました。
            お客様の夢を、確かな技術と誠実な姿勢で実現します。
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center bg-[#F59E0B] text-[#1C1C1E] px-8 py-4 font-bold text-base tracking-wide hover:bg-[#D97706] transition-all duration-200 hover:shadow-lg hover:shadow-[#F59E0B]/30"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              無料相談・お見積もり
            </a>
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 font-medium text-base tracking-wide hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-200"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              施工事例を見る
            </a>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-8 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="border-l-2 border-[#F59E0B] pl-4">
              <div
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {projects.toLocaleString()}
                <span className="text-[#F59E0B] text-2xl">+</span>
              </div>
              <div className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                累計施工件数
              </div>
            </div>
            <div className="border-l-2 border-[#F59E0B] pl-4">
              <div
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {years}
                <span className="text-[#F59E0B] text-2xl">年</span>
              </div>
              <div className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                創業からの実績
              </div>
            </div>
            <div className="border-l-2 border-[#F59E0B] pl-4">
              <div
                className="text-4xl font-bold text-white"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {satisfaction}
                <span className="text-[#F59E0B] text-2xl">%</span>
              </div>
              <div className="text-white/60 text-xs mt-1" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                顧客満足度
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#F59E0B] transition-colors animate-bounce z-10"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
