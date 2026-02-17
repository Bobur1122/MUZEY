import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import {
  ChevronDown,
  Download,
  GraduationCap,
  FileText,
  Book } from
'lucide-react';
const resources = [
{
  id: 1,
  title: 'Yuklab olinadigan materiallar',
  icon: Download,
  content:
  <ul className="space-y-3">
        {[
    {
      label: "Ozod Sharafiddinov bibliografiyasi (PDF)",
      href: "/hayot.pdf"
    },
    {
      label: "Arxiv fotosuratlari to'plami (ZIP)",
      href: "/files/ozod-sharafiddinov-arxiv-foto.zip"
    },
    {
      label: "Ma'ruza materiallari (PDF)",
      href: "https://zenodo.org/records/15565947/files/31-35.pdf?download=1"
    }].
    map((item, i) =>
    <li
      key={i}
      className="flex items-center gap-3 text-gray-600 transition-colors hover:text-[#d4af37]">

            <FileText className="w-4 h-4" />
            <a
              className="underline-offset-2 hover:underline"
              href={item.href}
              download>
              {item.label}
            </a>
          </li>
    )}
      </ul>

},
{
  id: 2,
  title: 'Tavsiya etilgan dissertatsiya mavzulari',
  icon: GraduationCap,
  content:
  <div className="space-y-4">
        <p className="mb-2 text-sm text-gray-500">
          Ozod Sharafiddinov ijodiga doir ilmiy tadqiqot uchun mavzular:
        </p>
        <ol className="space-y-2 text-gray-700 list-decimal list-inside">
          <li>
            “Zamon. Qalb. Poeziya” (1962) asari asosida adabiy tanqid metodlari
          </li>
          <li>
            “Adabiy etyudlar” (1968)da ijodkor shaxsi va badiiylik masalalari
          </li>
          <li>
            “Jahon adabiyoti” jurnalidagi bosh muharrirlik faoliyati va adabiy
            jarayonga ta’siri (1997–2005)
          </li>
          <li>
            Sharafiddinovning adabiy portretlari: Oybek, G‘afur G‘ulom,
            Abdulla Qahhor obrazlari talqini
          </li>
          <li>
            1960–2000-yillar o‘zbek adabiy tanqidida Sharafiddinov maktabi
          </li>
        </ol>
      </div>

},
{
  id: 3,
  title: 'Ilmiy adabiyotlar',
  icon: Book,
  content:
  <div className="space-y-2 font-mono text-sm text-gray-600">
        <p>
          Sharafiddinov, O. (1962). *Zamon. Qalb. Poeziya*.
        </p>
        <p>
          Sharafiddinov, O. (1968). *Adabiy etyudlar*.
        </p>
        <p>
          Sharafiddinov, O. (1974). *Yalovbardorlar*.
        </p>
        <p>
          Sharafiddinov, O. (1976). *Iste’dod jilolari*.
        </p>
        <p>
          Sharafiddinov, O. (1979). *Birinchi mo‘jiza*.
        </p>
        <p>
          Sharafiddinov, O. (1983). *Hayot bilan hamnafas*.
        </p>
        <p>
          Sharafiddinov, O. (2004). *Ijodni anglash baxti*.
        </p>
      </div>

}];

export function ResearchLab() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <Section className="bg-white">
      <div className="flex flex-col max-w-6xl gap-12 mx-auto md:flex-row">
        {/* Left Info */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Talabalar Tadqiqot Markazi
            </h2>
            <p className="mb-8 leading-relaxed text-gray-600">
              Talabalar, olimlar va tadqiqotchilar uchun Ozod Sharafiddinov
              hayoti va ijodiga oid birlamchi manbalar va ilmiy materiallarga
              kirish imkoniyati.
            </p>
          </div>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4 md:w-2/3">
          {resources.map((item, index) =>
          <div
            key={item.id}
            className="overflow-hidden transition-colors border border-gray-200 rounded-xl bg-gray-50 hover:bg-white">

              <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex items-center justify-between w-full p-6 text-left">

                <div className="flex items-center gap-4">
                  <div
                  className={`p-2 rounded-lg ${openIndex === index ? 'bg-[#d4af37] text-white' : 'bg-gray-200 text-gray-500'} transition-colors`}>

                    <item.icon className="w-5 h-5" />
                  </div>
                  <span
                  className={`font-bold text-lg ${openIndex === index ? 'text-[#1a1a1a]' : 'text-gray-600'}`}>

                    {item.title}
                  </span>
                </div>
                <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />

              </button>

              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>

                    <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                      {item.content}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </Section>);

}
