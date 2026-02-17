import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { MuseumCard } from './ui/MuseumCard';
import { Search, X, Download, BookOpen } from 'lucide-react';
const archiveItems = [
{
  id: 1,
  title: 'Zamon. Qalb. Poeziya',
  year: '1962',
  category: 'Kitoblar',
  color: 'from-amber-200 to-orange-100',
  desc: "Ozod Sharafiddinovning dastlabki kitobi bo'lib, adabiy asarni badiiylik qonuniyatlari asosida tahlil qilishga bag'ishlangan.",
  details: [
    "Poeziya muammolari va adabiy tanqid yo'nalishlari yoritiladi.",
    "Muallifning 1960-yillardagi ilmiy-ijodiy izlanishlari jamlangan.",
    "Asar o'zbek adabiyotshunosligida yangi tanqidiy ovoz sifatida baholanadi."
  ]
},
{
  id: 2,
  title: 'Adabiy etyudlar',
  year: '1968',
  category: 'Kitoblar',
  color: 'from-blue-200 to-cyan-100',
  desc: "Ijodkor shaxsi, badiiy asarda muallif pozitsiyasi va adabiy jarayon masalalariga bag'ishlangan.",
  details: [
    "Ijodkor shaxsining badiiy asardagi o'rni tahlil qilinadi.",
    "Adabiy jarayon va tanqid metodlari haqida mulohazalar beriladi."
  ]
},
{
  id: 3,
  title: 'Yalovbardorlar',
  year: '1974',
  category: 'Kitoblar',
  color: 'from-emerald-200 to-teal-100',
  desc: "O'zga adabiyotlar namoyandalari ijodi haqidagi adabiy-tanqidiy ocherklar to'plami.",
  details: [
    "Jahon adabiyoti namoyandalari ijodiga nazar.",
    "Adabiy an'ana va badiiy mezonlar tahlili."
  ]
},
{
  id: 4,
  title: "Iste'dod jilolari",
  year: '1976',
  category: 'Kitoblar',
  color: 'from-purple-200 to-pink-100',
  desc: "O'zbek adabiyotidagi ijodkorlar haqida adabiy portretlar to'plami.",
  details: [
    "Adabiy portretlar va badiiy tahlillar jamlanadi.",
    "Oybek, G'afur G'ulom, Abdulla Qahhor va boshqalar haqida yozilgan."
  ]
},
{
  id: 5,
  title: "Birinchi mo'jiza",
  year: '1979',
  category: 'Kitoblar',
  color: 'from-rose-200 to-red-100',
  desc: "Adabiyot va ijodkorlik masalalari haqida tanqidiy-analitik qarashlar.",
  details: [
    "Adabiy jarayon va badiiylik mezonlari yoritiladi."
  ]
},
{
  id: 6,
  title: 'Hayot bilan hamnafas',
  year: '1983',
  category: 'Kitoblar',
  color: 'from-indigo-200 to-blue-100',
  desc: "O'zbek she'riyati, nasri va adabiy tanqid muammolarini yoritgan maqolalar to'plami.",
  details: [
    "Adabiy jarayon va estetik qarashlar tahlili."
  ]
},
{
  id: 7,
  title: 'Istiqlol fidoiylari',
  year: '1993',
  category: 'Maqolalar',
  color: 'from-yellow-200 to-amber-100',
  desc: "Istiqlol g'oyalari, ma'naviyat va milliy tiklanish masalalariga bag'ishlangan publitsistik maqolalar to'plami.",
  details: [
    "“Yo'lboshchi”, “Mustaqillik me'mori”, “Istiqlol jilolalari” kabi maqolalar turkumi qayd etiladi."
  ]
},
{
  id: 8,
  title: 'Jahon adabiyoti tarjimalari',
  year: '1997-yildan',
  category: 'Tarjimalar',
  color: 'from-slate-200 to-gray-100',
  desc: "“Jahon adabiyoti” jurnali faoliyati doirasida jahon adabiyotining sara asarlarini o'zbek tiliga tarjima qilishga boshchilik qilgan.",
  details: [
    "1997-yildan “Jahon adabiyoti” jurnalining bosh muharriri bo'lgan.",
    "Jurnal orqali ko'plab yirik roman va qissalar o'zbek tilida e'lon qilingan."
  ]
}];

const filters = ['Barchasi', 'Kitoblar', 'Maqolalar', 'Tarjimalar'];
export function DigitalArchive() {
  const [activeFilter, setActiveFilter] = useState('Barchasi');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<
    (typeof archiveItems)[0] | null>(
    null);
  const filteredItems = archiveItems.filter((item) => {
    const matchesFilter =
    activeFilter === 'Barchasi' || item.category === activeFilter;
    const matchesSearch = item.title.
    toLowerCase().
    includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  return (
    <Section id="digital-archive" className="bg-white/40">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Raqamli Arxiv</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          To'liq raqamlashtirilgan asarlar, qo'lyozmalar va tanqidiy maqolalarga
          kirish.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 max-w-5xl mx-auto">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Arxivdan qidirish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none bg-white/80 backdrop-blur transition-all" />

        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {filters.map((filter) =>
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeFilter === filter ? 'bg-[#1a1a1a] text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>

              {filter}
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) =>
          <motion.div
            key={item.id}
            layout
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.9
            }}
            transition={{
              duration: 0.3
            }}>

              <MuseumCard
              onClick={() => setSelectedItem(item)}
              className="h-full flex flex-col group">

                <div
                className={`h-48 bg-gradient-to-br ${item.color} relative p-6 flex flex-col justify-between`}>

                  <div className="bg-white/30 backdrop-blur self-start px-3 py-1 rounded-full text-xs font-bold">
                    {item.category}
                  </div>
                  <BookOpen className="text-[#1a1a1a]/10 w-24 h-24 absolute -bottom-4 -right-4 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 bg-white flex-1 flex flex-col">
                  <div className="text-xs text-[#d4af37] font-bold mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-lg font-bold font-serif leading-tight mb-4 group-hover:text-[#d4af37] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-500">
                      Batafsil ko'rish
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </MuseumCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}>

            <motion.div
            initial={{
              y: 50,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: 50,
              opacity: 0
            }}
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}>

              <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors z-10">

                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row h-full">
                <div
                className={`w-full md:w-1/3 bg-gradient-to-br ${selectedItem.color} p-8 flex items-center justify-center`}>

                  <div className="w-32 h-48 bg-white shadow-2xl rotate-3 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-gray-300" />
                  </div>
                </div>
                <div className="p-8 md:p-10 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider">
                      {selectedItem.category}
                    </span>
                    <span className="text-[#d4af37] font-bold">
                      {selectedItem.year}
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedItem.desc}
                  </p>

                  {selectedItem.details &&
                  <ul className="mb-6 space-y-2 text-sm text-gray-600 list-disc list-inside">
                    {selectedItem.details.map((detail, i) =>
                    <li key={i}>{detail}</li>
                    )}
                  </ul>
                  }

                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h4 className="font-bold text-sm mb-2">
                        Arxiv eslatmalari
                      </h4>
                      <p className="text-xs text-gray-500">
                        Asl nusxalar O'zbekiston Milliy kutubxonasida
                        saqlanmoqda. Qo'shimcha bibliografik ma'lumotlar
                        aniqlashtirilmoqda.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </Section>);

}
