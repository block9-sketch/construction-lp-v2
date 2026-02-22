/*
 * Design: Industrial Modernism Navbar
 * - Dark charcoal background on scroll, transparent on top
 * - Amber accent for active/hover states
 * - Oswald font for nav items
 */

import { useState, useEffect } from "react";
import { Menu, X, HardHat } from "lucide-react";

const navItems = [
  { label: "ホーム", href: "#hero" },
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#achievements" },
  { label: "会社概要", href: "#about" },
  { label: "施工事例", href: "#works" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1C1C1E]/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-[#F59E0B] flex items-center justify-center">
              <HardHat className="w-5 h-5 text-[#1C1C1E]" />
            </div>
            <div>
              <div
                className="text-white font-bold text-lg leading-none"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                サンプル建設
              </div>
              <div
                className="text-[#F59E0B] text-[10px] tracking-widest uppercase"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                SAMPLE CONSTRUCTION
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-white/80 hover:text-[#F59E0B] transition-colors duration-200 text-sm font-medium tracking-wide"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="bg-[#F59E0B] text-[#1C1C1E] px-5 py-2 font-bold text-sm tracking-wide hover:bg-[#D97706] transition-colors duration-200"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              無料相談
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1C1C1E] border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-white/80 hover:text-[#F59E0B] py-3 border-b border-white/5 text-sm font-medium transition-colors"
                style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="mt-3 bg-[#F59E0B] text-[#1C1C1E] px-5 py-3 font-bold text-sm text-center tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              無料相談
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
