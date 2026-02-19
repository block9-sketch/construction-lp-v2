/*
 * Design: Industrial Modernism Services
 * - Dark charcoal background
 * - Card hover with amber accent
 * - Asymmetric image/text layout
 */

import { useRef, useEffect, useState } from "react";
import { Building2, Wrench, HardHat, TreePine, ArrowRight } from "lucide-react";

const CIVIL_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-2_1771498610000_na1fn_c2VydmljZS1jaXZpbA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTJfMTc3MTQ5ODYxMDAwMF9uYTFmbl9jMlZ5ZG1salpTMWphWFpwYkEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TH8Ey~j3fukLrQhIdsZ-q1~kwvWxKuhQddeXo6uCDGiwTG5o3OoG5oNEh66jmVJpQ3jN88PPMacAUmDEEZC4FFjNDOF-bDAakvzW7OWy-jiH92lDXhIU9Q8p2SYluvIZNSpqtIGxSdAXw9doXJPwp9Ezf9FpOsgwX71o9pYB1uO4dn6kklnSg61kPqjLX3rtk2f-GV2UezNJSR3O09n93lwRM9dwjgxBAFwloMe4JtDCZHOV1B8im~EFg7b-IkVQRg2r0cYR0cLd9gQVOAOGbpJOa245XC0Pcg5VyNvvQLC4zFmW8Rrf4iTErkAgXTo38UWy3m50nhhABjY26w5DDA__";
const BUILDING_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-3_1771498609000_na1fn_c2VydmljZS1idWlsZGluZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTNfMTc3MTQ5ODYwOTAwMF9uYTFmbl9jMlZ5ZG1salpTMWlkV2xzWkdsdVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MXeVqiOwMwjW2boG6VW2sUPT7fYpeF6OVYokmEJCcjXRg2z3WZ-HUIQMtnTtWvZBEzBEIXTNZ5FATXYoQ4sfOixjwxq-4IFDhlCS1jMslz2ZjeRdpKn4mFeYOg5Ur7gSbp9c~GvHkJgChpTC~HDxLKPxcxxeIe5CiDKGv3GXQO1Iq-s0NmWptVMKdoTRnwIVgy521lLrR8QJ54dzJHDddURT~2EB3pH4nAhUtzqsutNfHiherY3MhChry-WOD2YqPAmAn4SrCLyJucD3V4iuzdeQQOOM-U-54Yo3wI6jYkQxwzzqxBuFumEaQBtx8FrV5gnArEgxiJMeTBDDFEX~tw__";
const RENOVATION_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-4_1771498610000_na1fn_c2VydmljZS1yZW5vdmF0aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTRfMTc3MTQ5ODYxMDAwMF9uYTFmbl9jMlZ5ZG1salpTMXlaVzV2ZG1GMGFXOXUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K81ULNxBfCIj4eIkqN1V2nnglXsz0KjG9XmO~7qa-kh4y0eiOgMjJY13i9SV2Qbuts5m7dMlelZTkgVpMM3EpSk29rrAX6nHtCXkMDb-754RL1hQg09HyEdRcShALLLTngY7vwOIJAxQWIEQn4p4J9JDX7BdG6jVKsGgdHLtKhCsBEYbUs0wfRupFT7nc4qdT6HdpAxfIbRpWc7npVTqYVpL88IgY3Tr8ytqdY6a0IJchuXxuKxFS6q7K5rtVFnnpgKiTnJ-rrbUsJq8u~MfCBC7eHkipMJzTSXtFzfU3WwHHbScyhcjR4LkVUNPv5Zvyueh6JjSLtAx~zIjiVYdxSA__";

const services = [
  {
    id: "01",
    title: "土木工事",
    subtitle: "Civil Engineering",
    description:
      "道路・橋梁・河川・下水道など、社会インフラの整備を担います。最新の施工技術と豊富な経験で、安全で長持ちする構造物を提供します。",
    features: ["道路・舗装工事", "橋梁・トンネル工事", "河川・護岸工事", "上下水道工事"],
    icon: <HardHat className="w-6 h-6" />,
    image: CIVIL_IMAGE,
  },
  {
    id: "02",
    title: "建築工事",
    subtitle: "Building Construction",
    description:
      "オフィスビル・商業施設・住宅など、あらゆる建築物の設計から施工まで一貫して対応。お客様のビジョンを形にします。",
    features: ["オフィスビル・商業施設", "集合住宅・マンション", "工場・物流施設", "公共施設・学校"],
    icon: <Building2 className="w-6 h-6" />,
    image: BUILDING_IMAGE,
  },
  {
    id: "03",
    title: "リノベーション",
    subtitle: "Renovation",
    description:
      "既存建物の価値を最大限に引き出すリノベーション工事。耐震補強から内装改修まで、建物の可能性を広げます。",
    features: ["耐震補強・改修工事", "内装・外装リノベーション", "設備更新工事", "バリアフリー改修"],
    icon: <Wrench className="w-6 h-6" />,
    image: RENOVATION_IMAGE,
  },
  {
    id: "04",
    title: "緑化・造園",
    subtitle: "Landscaping",
    description:
      "建設工事と連携した緑化・造園工事を提供。環境に配慮した持続可能な空間づくりをサポートします。",
    features: ["公園・緑地整備", "植栽・造園工事", "環境緑化", "維持管理サービス"],
    icon: <TreePine className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

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

export default function ServicesSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="services" className="bg-[#1C1C1E] py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#F59E0B]" />
            <span
              className="text-[#F59E0B] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              OUR SERVICES
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            事業内容
          </h2>
          <p className="text-white/50 mt-4 max-w-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            土木から建築、リノベーションまで。総合建設会社として幅広いニーズにお応えします。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden bg-[#2C2C2E] hover:bg-[#333335] transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2E] via-[#2C2C2E]/30 to-transparent" />
                {/* Number */}
                <div
                  className="absolute top-4 right-4 text-6xl font-bold text-white/10"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {service.id}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-[#1C1C1E] transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-xl"
                      style={{ fontFamily: "'Noto Serif JP', serif" }}
                    >
                      {service.title}
                    </h3>
                    <div
                      className="text-[#F59E0B] text-xs tracking-widest"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {service.subtitle}
                    </div>
                  </div>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-1 mb-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-white/50 text-xs flex items-center gap-1.5"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      <div className="w-1 h-1 bg-[#F59E0B] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium group-hover:gap-3 transition-all duration-200"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  詳しく見る
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
