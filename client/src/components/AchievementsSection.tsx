/*
 * Design: Industrial Modernism Achievements
 * - Amber accent on dark background
 * - Large Oswald numbers for impact
 * - Diagonal clip-path top/bottom
 */

import { useRef, useEffect, useState } from "react";
import { Shield, Award, Users, Clock } from "lucide-react";

function useInView(threshold = 0.3) {
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

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const stats = [
  {
    value: 1200,
    suffix: "+",
    label: "累計施工件数",
    sublabel: "Total Projects",
    icon: <Award className="w-6 h-6" />,
    description: "創業以来、1,200件以上の施工実績",
  },
  {
    value: 52,
    suffix: "年",
    label: "創業年数",
    sublabel: "Years of Experience",
    icon: <Clock className="w-6 h-6" />,
    description: "1972年創業、半世紀以上の歴史",
  },
  {
    value: 98,
    suffix: "%",
    label: "顧客満足度",
    sublabel: "Customer Satisfaction",
    icon: <Shield className="w-6 h-6" />,
    description: "お客様アンケートによる満足度",
  },
  {
    value: 280,
    suffix: "名",
    label: "従業員数",
    sublabel: "Team Members",
    icon: <Users className="w-6 h-6" />,
    description: "経験豊富なプロフェッショナル集団",
  },
];

const certifications = [
  "国土交通大臣許可（特-〇〇）第〇〇〇〇〇号",
  "ISO 9001:2015 認証取得",
  "ISO 14001:2015 認証取得",
  "建設業安全優良事業所 認定",
  "優良建設工事表彰 受賞多数",
];

export default function AchievementsSection() {
  const { ref, inView } = useInView(0.2);

  const counts = [
    useCountUp(1200, 2000, inView),
    useCountUp(52, 1500, inView),
    useCountUp(98, 1800, inView),
    useCountUp(280, 1600, inView),
  ];

  return (
    <section
      id="achievements"
      className="relative bg-[#F59E0B] py-24 lg:py-32 overflow-hidden"
      style={{
        clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
        marginTop: "-3%",
        marginBottom: "-3%",
        paddingTop: "calc(5% + 4rem)",
        paddingBottom: "calc(5% + 4rem)",
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(28,28,30,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,28,30,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#1C1C1E]" />
            <span
              className="text-[#1C1C1E] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              ACHIEVEMENTS & NUMBERS
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            実績と信頼の数字
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-[#1C1C1E]/10 backdrop-blur-sm p-6 border border-[#1C1C1E]/20 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-[#1C1C1E]/70 mb-3">{stat.icon}</div>
              <div
                className="text-5xl lg:text-6xl font-bold text-[#1C1C1E] leading-none mb-1"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {counts[index].toLocaleString()}
                <span className="text-3xl">{stat.suffix}</span>
              </div>
              <div
                className="text-[#1C1C1E] font-bold text-sm mb-1"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {stat.label}
              </div>
              <div
                className="text-[#1C1C1E]/60 text-xs tracking-widest"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {stat.sublabel}
              </div>
              <p
                className="text-[#1C1C1E]/70 text-xs mt-2"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={`bg-[#1C1C1E] p-8 transition-all duration-700 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3
            className="text-white font-bold text-lg mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            認証・許可・受賞歴
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 text-white/70 text-sm"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                <div className="w-2 h-2 bg-[#F59E0B] flex-shrink-0" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
