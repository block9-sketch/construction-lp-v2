/*
 * Design: Industrial Modernism About
 * - Warm white background for contrast after dark sections
 * - Asymmetric layout: text left, image right
 * - Amber accent borders and highlights
 */

import { useRef, useEffect, useState } from "react";

const TEAM_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/uYWRewbpM9swZZu7j0aFD6/sandbox/J6SzUdvDSFUTVHLZi4Q3zm-img-5_1771498602000_na1fn_YWJvdXQtdGVhbQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdVlXUmV3YnBNOXN3Wlp1N2owYUZENi9zYW5kYm94L0o2U3pVZHZEU0ZVVFZITFppNFEzem0taW1nLTVfMTc3MTQ5ODYwMjAwMF9uYTFmbl9ZV0p2ZFhRdGRHVmhiUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fW0vTT7nLBgzuOrImSbG1ksalfatgGgRZqdjJ6H6jqnRd33OBRWfIjisGezPjZ1qNfZQi7Gqf-TBaRTMdS9XUAUrYNCJuzozz~JfOpw-h-mOHc4dbYP5se-yek73cJxAGHhV0NopRZn2ROYOofHgB-gYepNucg~v-olR2mYDHqlUqKolxQG22neF66PFYH1odbHuAqmLbBmEtdH88HHLzzisOeAE70i2Y6kbAerd2oZBeka6kUdhspdZja3BRLEpkOObD4im1Q8tPA4rUbagua82m94HAt5xJ7JIMaOB9j~ZmycyzNvMogNSKdwmKkJq1ET~ZdWzP2OOcWxYOAGJcQ__";

const companyInfo = [
  { label: "会社名", value: "株式会社 サンプル建設" },
  { label: "設立", value: "1972年（昭和47年）4月" },
  { label: "代表取締役", value: "山田 匠（やまだ たくみ）" },
  { label: "資本金", value: "5,000万円" },
  { label: "従業員数", value: "280名（2024年4月現在）" },
  { label: "本社所在地", value: "東京都" },
  { label: "営業エリア", value: "関東・東北・北海道・中部・近畿" },
  { label: "許可番号", value: "国土交通大臣許可（特-〇〇）第〇〇〇〇〇号" },
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

export default function AboutSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section id="about" className="bg-[#F5F0EB] py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#F59E0B]" />
            <span
              className="text-[#F59E0B] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              ABOUT US
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            会社概要
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Message from President */}
            <div className="mb-10">
              <div className="border-l-4 border-[#F59E0B] pl-6 mb-6">
                <h3
                  className="text-2xl font-bold text-[#1C1C1E] mb-4"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  「地域とともに、未来を築く」
                </h3>
                <p
                  className="text-[#1C1C1E]/70 leading-relaxed text-sm"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  1972年の創業以来、私たちは「確かな技術と誠実な姿勢」を経営理念に掲げ、
                  地域社会の発展に貢献してまいりました。
                </p>
              </div>
              <p
                className="text-[#1C1C1E]/70 leading-relaxed text-sm mb-4"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                土木・建築・リノベーションの各分野において、最高水準の品質と安全性を追求し続けています。
                お客様の信頼に応えるため、技術の向上と人材育成に積極的に取り組み、
                持続可能な社会の実現に向けた環境配慮型の施工を推進しています。
              </p>
              <p
                className="text-[#1C1C1E]/70 leading-relaxed text-sm"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                これからも、地域の皆様とともに歩み、次世代に誇れる構造物を築き続けることが
                私たちの使命です。
              </p>
              <div
                className="mt-6 text-right text-[#1C1C1E]/60 text-sm"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                代表取締役社長　山田 匠
              </div>
            </div>

            {/* Company Info Table */}
            <div className="bg-white border border-[#1C1C1E]/10">
              {companyInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex border-b border-[#1C1C1E]/10 last:border-b-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-[#F5F0EB]/50"
                  }`}
                >
                  <div
                    className="w-32 flex-shrink-0 bg-[#1C1C1E] text-white px-4 py-3 text-xs font-medium flex items-center"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="px-4 py-3 text-[#1C1C1E]/80 text-sm flex items-center"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src={TEAM_IMAGE}
                alt="匠建設チーム"
                className="w-full h-80 lg:h-96 object-cover"
              />
              {/* Amber accent border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#F59E0B] -z-10" />
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { title: "品質", desc: "ISO認証取得の品質管理" },
                { title: "安全", desc: "ゼロ災害を目指す安全文化" },
                { title: "環境", desc: "持続可能な施工への取り組み" },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div
                    className="text-2xl font-bold text-[#F59E0B] mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {value.title}
                  </div>
                  <div
                    className="text-[#1C1C1E]/60 text-xs"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {value.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
