/*
 * Design: Industrial Modernism Footer
 * - Deep charcoal background
 * - Amber accent links
 * - Clean grid layout
 */

import { HardHat, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  サービス: [
    { label: "土木工事", href: "#services" },
    { label: "建築工事", href: "#services" },
    { label: "リノベーション", href: "#services" },
    { label: "緑化・造園", href: "#services" },
  ],
  会社情報: [
    { label: "会社概要", href: "#about" },
    { label: "施工事例", href: "#works" },
    { label: "実績・数字", href: "#achievements" },
    { label: "採用情報", href: "#contact" },
  ],
  サポート: [
    { label: "お問い合わせ", href: "#contact" },
    { label: "無料相談", href: "#contact" },
    { label: "プライバシーポリシー", href: "#" },
    { label: "サイトマップ", href: "#" },
  ],
};

const scrollTo = (href: string) => {
  if (href === "#") return;
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* CTA Banner */}
      <div className="bg-[#F59E0B]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-[#1C1C1E] text-2xl font-bold mb-1"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              まずはお気軽にご相談ください
            </h3>
            <p
              className="text-[#1C1C1E]/70 text-sm"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              見積もり・相談は無料です。お電話またはメールでお気軽にどうぞ。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0120XXXXXX"
              className="flex items-center gap-2 bg-[#1C1C1E] text-white px-6 py-3 font-bold text-sm hover:bg-[#2C2C2E] transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <Phone className="w-4 h-4" />
              0120-XXX-XXX
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 border-2 border-[#1C1C1E] text-[#1C1C1E] px-6 py-3 font-bold text-sm hover:bg-[#1C1C1E] hover:text-white transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              <Mail className="w-4 h-4" />
              メールで相談
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-[#F59E0B] flex items-center justify-center">
                <HardHat className="w-5 h-5 text-[#1C1C1E]" />
              </div>
              <div>
                <div
                  className="text-white font-bold text-lg leading-none"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  サンプル
                </div>
                <div
                  className="text-[#F59E0B] text-[10px] tracking-widest uppercase"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  SAMPLE CONSTRUCTION
                </div>
              </div>
            </div>
            <p
              className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              1972年創業。確かな技術と誠実な姿勢で、地域社会の発展に貢献し続ける総合建設会社です。
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                <MapPin className="w-3 h-3 text-[#F59E0B]" />
                東京都
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                <Phone className="w-3 h-3 text-[#F59E0B]" />
                0120-XXX-XXX（平日 8:00〜18:00）
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                <Mail className="w-3 h-3 text-[#F59E0B]" />
                info@takumi-construction.co.jp
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-white font-bold text-sm mb-5 pb-2 border-b border-white/10"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-white/50 hover:text-[#F59E0B] text-sm transition-colors"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            © 2024 株式会社 サンプル建設 All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#F59E0B]" />
            <span
              className="text-white/30 text-xs tracking-widest"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              TAKUMI CONSTRUCTION CO., LTD.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
