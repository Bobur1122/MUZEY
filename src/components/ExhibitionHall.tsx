import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { MuseumCard } from './ui/MuseumCard';
import { BookOpen, Award, Camera, PenTool, FileText, Mail, X } from 'lucide-react';
const exhibits = [
{
  id: 1,
  title: 'Dastlabki ilmiy izlanishlar',
  category: "Qo'lyozmalar",
  icon: PenTool,
  color: 'bg-amber-100',
  desc: `Ozod Sharafiddinov ilmiy faoliyatini 1950-yillar o‘rtalarida Moskva shahrida aspiranturada davom ettirgan va 1955-yilda fan nomzodi ilmiy darajasini olgan. Bu u uchun ilmiy tadqiqot yo‘nalishiga rasmiy kirish hisoblanadi — u she’riyat muammolari, adabiy tanqid va maqolalar ustida izlanishlar olib borgan.

Uning dastlabki ilmiy-ijodiy va adabiy-tanqidiy izlanishlari 1962-yilda chop etilgan “Zamon. Qalb. Poeziya” asarida aks etgan. Shu asar orqali u adabiy asarlarni badiiy qonuniyatlar va milliy g‘oyalar asosida tahlil qilganiga oid ilmiy izlanishlarini nashrga chiqardi.

Ozod Sharafiddinov XX asrning 1960-yillarida adabiyotshunos olim sifatida keng tanila boshladi — bu davr uning ilmiy maqolalar va tadqiqotlari jamlangan asarlar orqali madaniy-ilmiy maydonda aniqlik bilan ko‘rinadigan bo‘ldi.

Uning ilmiy tadqiqotlari asosan:

O‘zbek she’riyati va uning holati tahlili;

Adabiy asarlarni milliy fikr va badiiy qonuniyatlar nuqtai nazaridan o‘rganish;

Adabiyotshunoslik va tanqid sohalarini takomillashtirish bo‘yicha translyatsiya, tarjima va tanqidiy maqolalar;

Adabiy-estetik muammolarni mustaqil ilmiy nazariy asoslarda izohlash`
},
{
  id: 2,
  title: 'Oilaviy va ilmiy hayot lavhalari',
  category: 'Noyob suratlar',
  icon: Camera,
  color: 'bg-blue-100',
  desc: "1929-yil 1-martda Qo‘qon yaqinidagi Oxunqaynar qishlog‘ida tug‘ilgan. 1951-yili O‘rta Osiyo davlat universiteti filologiya fakultetini tugatgan. ToshDUda 1955–1995 yillarda dotsent va professor bo‘lib ishlagan, 1996–1997 yillarda “Tafakkur” jurnalida bosh muharrir o‘rinbosari, 1997-yildan umrining oxirigacha “Jahon adabiyoti” jurnalining bosh muharriri bo‘lgan."
},
{
  id: 3,
  title: 'Adabiy tanqid merosi',
  category: 'Nashr etilgan kitoblar',
  icon: BookOpen,
  color: 'bg-emerald-100',
  desc: "Asosiy ilmiy asarlari: “Zamon. Qalb. Poeziya” (1962), “Adabiy etyudlar” (1968), “Yalovbardorlar” (1974), “Iste’dod jilolari” (1976). Bu asarlarda adabiy asarlarni badiiylik qonuniyatlari, ijodkor shaxsi va tanqid metodlari nuqtai nazaridan tahlil qiladi."
},
{
  id: 4,
  title: "O'zbekiston Qahramoni (2002)",
  category: 'Mukofotlar',
  icon: Award,
  color: 'bg-purple-100',
  desc: "2002-yilda “O‘zbekiston Qahramoni” unvoniga sazovor bo‘lgan. Avvalroq Beruniy nomidagi Davlat mukofoti (1970), “Mehnat shuhrati” ordeni (1997) va “Buyuk xizmatlari uchun” ordeni (1999) bilan taqdirlangan."
},
{
  id: 5,
  title: 'Tanqidiy tahlillar',
  category: 'Maqolalar',
  icon: FileText,
  color: 'bg-rose-100',
  desc: "O‘zbek she’riyati va adabiy tanqid masalalariga bag‘ishlangan maqolalari bilan 1960-yillardan adabiyotshunos sifatida tanilgan. Tadqiqotlarida adabiy asarni badiiylik qonuniyatlari hamda milliy g‘oyalar asosida tahlil qilishga urg‘u beradi."
},
{
  id: 6,
  title: 'Adabiy muloqot merosi',
  category: 'Xatlar',
  icon: Mail,
  color: 'bg-orange-100',
  desc: "1997-yildan umrining oxirigacha “Jahon adabiyoti” jurnalining bosh muharriri sifatida jahon adabiyotining eng yaxshi namunalarini o‘zbek kitobxonlariga yetkazish ishiga rahbarlik qilgan."
}];

export function ExhibitionHall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<
    (typeof exhibits)[0] | null>(null);
  return (
    <Section id="exhibition-hall" className="overflow-hidden">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px bg-[#d4af37] flex-1 opacity-50"></div>
        <h2 className="text-3xl font-bold text-center md:text-4xl shrink-0">
          Ko'rgazma Zali
        </h2>
        <div className="h-px bg-[#d4af37] flex-1 opacity-50"></div>
      </div>

      <div
        ref={containerRef}
        className="flex items-stretch gap-8 px-4 pb-12 -mx-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>

        {exhibits.map((item, index) =>
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            x: 50
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}
          viewport={{
            once: true
          }}
          className="snap-center shrink-0 group">

            <MuseumCard
              onClick={() => setSelectedItem(item)}
              className="w-[280px] md:w-[320px] h-[400px] flex flex-col relative cursor-pointer">
              <div
              className={`h-2/3 ${item.color} flex items-center justify-center relative overflow-hidden`}>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <item.icon className="w-20 h-20 text-[#1a1a1a]/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full shadow-sm top-4 right-4 bg-white/90 backdrop-blur">
                  {item.category}
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white/50">
                <div>
                  <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-[#d4af37] transition-colors line-clamp-2 min-h-[3.25rem]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  To'plamni ko'rish →
                </div>
              </div>
            </MuseumCard>
          </motion.div>
        )}
      </div>

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
            className="relative w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl"
            onClick={(e) => e.stopPropagation()}>

              <button
              onClick={() => setSelectedItem(null)}
              className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-black/5 hover:bg-black/10">

                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col h-full md:flex-row">
                <div
                className={`w-full md:w-1/3 ${selectedItem.color} p-8 flex items-center justify-center relative`}>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <selectedItem.icon className="w-20 h-20 text-[#1a1a1a]/30 relative" />
                </div>
                <div className="flex-1 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase bg-gray-100 rounded-full">
                      {selectedItem.category}
                    </span>
                  </div>
                  <h2 className="mb-4 font-serif text-3xl font-bold">
                    {selectedItem.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {selectedItem.desc}
                  </p>

                </div>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </Section>);

}
