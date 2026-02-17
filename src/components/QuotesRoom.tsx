import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Quote, RefreshCw } from 'lucide-react';
const quotes = [
"Adabiyot jamiyatning aksidir — uning fikrlarini va qadriyatlarini ochiq ko'rsatadi.",
'Adabiy tanqid yozuvchini shakllantiradi, uni yanada chuqurroq anglashga undaydi.',
'Adabiyot orqali insonlar haqiqat bilan yuzlashadi va tafakkurini boyitadi.',
"Adabiy asar tarixiy va g'oyaviy kontekstni mujassamlashtiradi.",
"Tanqid — yozuvchiga mas'uliyatning tan olinishi.",
"Adabiyot orqali jamiyat o'zini anglaydi.",
'Ilm va adabiyot birgalikda milliy tafakkurni shakllantiradi.',
'Haqqoniy tanqid asarning chuqurligini ochib beradi.',
"Adabiyotning vazifasi nafaqat go'zallikni ko'rsatish, balki haqiqatni yoritishdir.",
"Yozuvchi o'z vaqtining ovozi bo'lishi kerak.",
"Asar nafis san'at bo'lishi bilan birga, ma'naviy-axloqiy jihatdan boy bo'lishi kerak.",
"Xarakterni anglamaslik — adabiy asarni to'la tushunmaslik demakdir.",
'Adabiy tanqidning asosiy vazifasi — asarni tahlil qilish, emas uni sudlash.',
"Yaxshi asar — inson qalbiga yo'l topgan asar.",
'Tanqid — ilm bilan xizmat qiluvchi ijodiy faoliyat.'];

export function QuotesRoom() {
  const [index, setIndex] = useState(0);
  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };
  return (
    <Section className="bg-gradient-to-b from-[#f5f0eb] to-white flex items-center justify-center min-h-[60vh]">
      <div className="max-w-4xl mx-auto text-center relative">
        <Quote className="absolute -top-12 -left-12 w-24 h-24 text-[#d4af37]/10 rotate-180" />
        <Quote className="absolute -bottom-12 -right-12 w-24 h-24 text-[#d4af37]/10" />

        <div className="h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                filter: 'blur(10px)',
                y: 20
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                y: 0
              }}
              exit={{
                opacity: 0,
                filter: 'blur(10px)',
                y: -20
              }}
              transition={{
                duration: 0.8
              }}
              className="px-8">

              <h3 className="text-3xl md:text-5xl font-serif italic text-[#1a1a1a] leading-tight mb-8">
                "{quotes[index]}"
              </h3>
              <p className="text-[#d4af37] font-bold tracking-widest uppercase text-sm">
                — Ozod Sharafiddinov
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextQuote}
          className="mt-12 group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 hover:border-[#d4af37] hover:text-[#d4af37] transition-all shadow-sm hover:shadow-md">

          <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-sm font-medium">Hikmat olish</span>
        </button>
      </div>
    </Section>);

}