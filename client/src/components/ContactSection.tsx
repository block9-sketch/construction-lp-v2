/*
 * Design: Industrial Modernism Contact
 * - Dark charcoal background
 * - Amber accent CTA
 * - Clean form with industrial styling
 */

import { useState, useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

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

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "お電話でのお問い合わせ",
    value: "0120-XXX-XXX",
    sub: "受付時間：平日 8:00〜18:00",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "メールでのお問い合わせ",
    value: "info@takumi-construction.co.jp",
    sub: "24時間受付（返信は翌営業日）",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "本社所在地",
    value: "東京都千代田区大手町1-1-1",
    sub: "匠ビル8F",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "営業時間",
    value: "平日 8:00〜18:00",
    sub: "土日祝日・年末年始を除く",
  },
];

const inquiryTypes = [
  "工事のご相談・お見積もり",
  "土木工事について",
  "建築工事について",
  "リノベーションについて",
  "採用について",
  "その他",
];

export default function ContactSection() {
  const { ref, inView } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#F5F0EB] py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl" ref={ref}>
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#F59E0B]" />
            <span
              className="text-[#F59E0B] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              CONTACT US
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E]"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            お問い合わせ
          </h2>
          <p className="text-[#1C1C1E]/60 mt-4 max-w-xl" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
            工事のご相談・お見積もりは無料です。お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div
            className={`lg:col-span-1 transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-[#1C1C1E] p-8 h-full">
              <h3
                className="text-white font-bold text-lg mb-8"
                style={{ fontFamily: "'Noto Serif JP', serif" }}
              >
                連絡先情報
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#F59E0B]/10 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div
                        className="text-white/40 text-xs mb-1"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      >
                        {info.label}
                      </div>
                      <div
                        className="text-white font-medium text-sm"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      >
                        {info.value}
                      </div>
                      <div
                        className="text-white/40 text-xs"
                        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                      >
                        {info.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Phone */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p
                  className="text-white/60 text-xs mb-3"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  お急ぎの方はお電話で
                </p>
                <a
                  href="tel:0120XXXXXX"
                  className="flex items-center gap-2 text-[#F59E0B] font-bold text-2xl"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  <Phone className="w-6 h-6" />
                  0120-XXX-XXX
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {submitted ? (
              <div className="bg-white p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle className="w-16 h-16 text-[#F59E0B] mb-6" />
                <h3
                  className="text-[#1C1C1E] text-2xl font-bold mb-4"
                  style={{ fontFamily: "'Noto Serif JP', serif" }}
                >
                  送信が完了しました
                </h3>
                <p
                  className="text-[#1C1C1E]/60 text-sm"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  お問い合わせありがとうございます。
                  <br />
                  担当者より2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-[#1C1C1E]/70 text-xs font-medium mb-2"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      className="w-full border border-[#1C1C1E]/20 px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#F59E0B] transition-colors"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                  {/* Company */}
                  <div>
                    <label
                      className="block text-[#1C1C1E]/70 text-xs font-medium mb-2"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      会社名・団体名
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="株式会社〇〇"
                      className="w-full border border-[#1C1C1E]/20 px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#F59E0B] transition-colors"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      className="block text-[#1C1C1E]/70 text-xs font-medium mb-2"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@company.co.jp"
                      className="w-full border border-[#1C1C1E]/20 px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#F59E0B] transition-colors"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label
                      className="block text-[#1C1C1E]/70 text-xs font-medium mb-2"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    >
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03-XXXX-XXXX"
                      className="w-full border border-[#1C1C1E]/20 px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#F59E0B] transition-colors"
                      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="mb-5">
                  <label
                    className="block text-[#1C1C1E]/70 text-xs font-medium mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="type"
                    required
                    value={form.type}
                    onChange={handleChange}
                    className="w-full border border-[#1C1C1E]/20 px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#F59E0B] transition-colors bg-white"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    <option value="" disabled>選択してください</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    className="block text-[#1C1C1E]/70 text-xs font-medium mb-2"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="工事の概要、場所、ご希望の工期などをご記入ください。"
                    className="w-full border border-[#1C1C1E]/20 px-4 py-3 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#F59E0B] transition-colors resize-none"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] text-[#1C1C1E] py-4 font-bold text-base tracking-wide hover:bg-[#D97706] transition-all duration-200 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  <Send className="w-5 h-5" />
                  送信する（無料）
                </button>

                <p
                  className="text-[#1C1C1E]/40 text-xs mt-4 text-center"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  ご入力いただいた個人情報は、お問い合わせへの回答のみに使用いたします。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
