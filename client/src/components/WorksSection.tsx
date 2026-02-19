/*
 * Design: Industrial Modernism Works Gallery
 * - Dark background with image grid
 * - Hover overlay with project details
 * - Category filter tabs
 */

import { useRef, useEffect, useState } from "react";
import { MapPin, Calendar } from "lucide-react";

const CIVIL_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-2_1771498610000_na1fn_c2VydmljZS1jaXZpbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTJfMTc3MTQ5ODYxMDAwMF9uYTFmbl9jMlZ5ZG1salpTMWphWFpwYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TH8Ey~j3fukLrQhIdsZ-q1~kwvWxKuhQddeXo6uCDGiwTG5o3OoG5oNEh66jmVJpQ3jN88PPMacAUmDEEZC4FFjNDOF-bDAakvzW7OWy-jiH92lDXhIU9Q8p2SYluvIZNSpqtIGxSdAXw9doXJPwp9Ezf9FpOsgwX71o9pYB1uO4dn6kklnSg61kPqjLX3rtk2f-GV2UezNJSR3O09n93lwRM9dwjgxBAFwloMe4JtDCZHOV1B8im~EFg7b-IkVQRg2r0cYR0cLd9gQVOAOGbpJOa245XC0Pcg5VyNvvQLC4zFmW8Rrf4iTErkAgXTo38UWy3m50nhhABjY26w5DDA__";
const BUILDING_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-3_1771498609000_na1fn_c2VydmljZS1idWlsZGluZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTNfMTc3MTQ5ODYwOTAwMF9uYTFmbl9jMlZ5ZG1salpTMWlkV2xzWkdsdVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MXeVqiOwMwjW2boG6VW2sUPT7fYpeF6OVYokmEJCcjXRg2z3WZ-HUIQMtnTtWvZBEzBEIXTNZ5FATXYoQ4sfOixjwxq-4IFDhlCS1jMslz2ZjeRdpKn4mFeYOg5Ur7gSbp9c~GvHkJgChpTC~HDxLKPxcxxeIe5CiDKGv3GXQO1Iq-s0NmWptVMKdoTRnwIVgy521lLrR8QJ54dzJHDddURT~2EB3pH4nAhUtzqsutNfHiherY3MhChry-WOD2YqPAmAn4SrCLyJucD3V4iuzdeQQOOM-U-54Yo3wI6jYkQxwzzqxBuFumEaQBtx8FrV5gnArEgxiJMeTBDDFEX~tw__";
const RENOVATION_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-4_1771498610000_na1fn_c2VydmljZS1yZW5vdmF0aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTRfMTc3MTQ5ODYxMDAwMF9uYTFmbl9jMlZ5ZG1salpTMXlaVzV2ZG1GMGFXOXUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K81ULNxBfCIj4eIkqN1V2nnglXsz0KjG9XmO~7qa-kh4y0eiOgMjJY13i9SV2Qbuts5m7dMlelZTkgVpMM3EpSk29rrAX6nHtCXkMDb-754RL1hQg09HyEdRcShALLLTngY7vwOIJAxQWIEQn4p4J9JDX7BdG6jVKsGgdHLtKhCsBEYbUs0wfRupFT7nc4qdT6HdpAxfIbRpWc7npVTqYVpL88IgY3Tr8ytqdY6a0IJchuXxuKxFS6q7K5rtVFnnpgKiTnJ-rrbUsJq8u~MfCBC7eHkipMJzTSXtFzfU3WwHHbScyhcjR4LkVUNPv5Zvyueh6JjSLtAx~zIjiVYdxSA__";

const works = [
  {
    id: 1,
    title: "○○大橋 架け替え工事",
    category: "土木",
    location: "東京都",
    year: "2023",
    image: CIVIL_IMAGE,
    description: "老朽化した橋梁の架け替え工事。最新の耐震技術を採用し、100年以上の耐久性を確保。",
  },
  {
    id: 2,
    title: "△△オフィスタワー 新築工事",
    category: "建築",
    location: "神奈川県",
    year: "2023",
    image: BUILDING_IMAGE,
    description: "地上30階建ての超高層オフィスビル。ZEB認証取得の環境配慮型設計を採用。",
  },
  {
    id: 3,
    title: "□□商業施設 リノベーション",
    category: "リノベーション",
    location: "埼玉県",
    year: "2022",
    image: RENOVATION_IMAGE,
    description: "築40年の商業施設を全面リノベーション。耐震補強と内装刷新で新たな価値を創出。",
  },
  {
    id: 4,
    title: "国道○○号線 道路改良工事",
    category: "土木",
    location: "千葉県",
    year: "2022",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "幹線道路の拡幅・改良工事。交通渋滞の解消と安全性向上を実現。",
  },
  {
    id: 5,
    title: "◇◇マンション 新築工事",
    category: "建築",
    location: "東京都",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description: "地上15階建て分譲マンション。免震構造採用で高い安全性と快適性を実現。",
  },
  {
    id: 6,
    title: "○○公園 整備工事",
    category: "緑化",
    location: "埼玉県",
    year: "2021",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "市民公園の大規模整備工事。多目的広場・遊具・緑化エリアを整備。",
  },
];

const categories = ["すべて", "土木", "建築", "リノベーション", "緑化"];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function WorksSection() {
  const { ref, inView } = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState("すべて");

  const filtered = activeCategory === "すべて"
    ? works
    : works.filter((w) => w.category === activeCategory);

  return (
    <section id="works" className="bg-[#1C1C1E] py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl" ref={ref}>
        {/* Section Header */}
        <div className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#F59E0B]" />
            <span
              className="text-[#F59E0B] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              OUR WORKS
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            施工事例
          </h2>
          <p className="text-white/50 mt-4 max-w-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            これまでに手がけた主な施工事例をご紹介します。
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#F59E0B] text-[#1C1C1E]"
                  : "border border-white/20 text-white/60 hover:border-[#F59E0B] hover:text-[#F59E0B]"
              }`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work, index) => (
            <div
              key={work.id}
              className={`group relative overflow-hidden bg-[#2C2C2E] transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1C1C1E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p
                    className="text-white/80 text-sm text-center px-6"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {work.description}
                  </p>
                </div>
                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 bg-[#F59E0B] text-[#1C1C1E] text-xs px-3 py-1 font-bold"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {work.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-white font-bold text-base mb-2"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  {work.title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-white/40 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    <MapPin className="w-3 h-3" />
                    {work.location}
                  </div>
                  <div className="flex items-center gap-1 text-white/40 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                    <Calendar className="w-3 h-3" />
                    {work.year}年竣工
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            className="border-2 border-[#F59E0B] text-[#F59E0B] px-10 py-4 font-bold text-sm tracking-wide hover:bg-[#F59E0B] hover:text-[#1C1C1E] transition-all duration-200"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            施工事例をもっと見る
          </button>
        </div>
      </div>
    </section>
  );
}
