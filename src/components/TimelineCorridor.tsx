import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from './ui/Section';
const milestones = [
{
  year: '1929',
  title: "Tug'ilishi",
  desc: "Ozod Sharafiddinov (1929-yil 1-mart – 2005-yil 4-oktyabr) – adabiyotshunos, adabiy tanqidchi. U 1929-yil 1-martda Qoʻqon yaqinidagi Oxunqaynar qishlogʻida tugʻildi."
},
{
  year: '1950-yillar',
  title: 'Ilmiy faoliyat boshlanishi',
  desc: "Toshkentdagi 14-oʻrta maktabni, Oʻrta Osiyo Davlat universiteti (hozirgi Oʻzbekiston milliy universiteti) filologiya fakultetini tugatdi (1951). Moskvada aspiranturani tugatdi, fan nomzodi ilmiy darajasini oldi (1955). Ozod Sharafiddinov poeziya muammolari bilan shugʻullandi, oʻzbek sheʼriyati va uning holati haqida adabiy-tanqidiy maqolalar yozdi. Oʻsha davrdagi ilmiy-ijodiy, adabiy-tanqidiy izlanishlari „Zamon. Qalb. Poeziya“ (1962) asarida oʻz aksini topgan. XX asrning 60-80-yillarida u Choʻlpon hayoti va ijodini targʻib qilishga intildi."
},
{
  year: '1960–70-yillar',
  title: 'Adabiy tanqid maktabi',
  desc: "Sharafiddinov 20-asrning 60-yillaridan adabiyotshunos sifatida tanilgan. „Zamon. Qalb. Poeziya“ (1962) kitobida adabiy asarlarni badiiylik qonuniyatlari nuqtai nazaridan tadqiq etgan. Uning tadqiqotlari adabiyotni milliy gʻoyalar va adabiy qonuniyatlar asosida tahlil qilishga bagʻishlangan. „Adabiy etyudlar“ (1968) kitobida ijodkor shaxsi va uning badiiy asardagi oʻrni masalalari talqin qilingan. „Yalovbardorlar“ (1974), „Isteʼdod jilolari“ (1976) toʻplamlariga kiritilgan ilmiy maqolalari adabiy ijoddagi anʼanalar, mumtoz adabiyotni oʻrganish vositalari va jahon adabiyotini oʻrganish muammolari haqida. Sharafiddinov oʻzbek adabiyotshunosligi va tanqidchiligida milliy va jahon adabiyoti anʼanalarini uygʻun qabul qilish tamoyillarini boshlab berdi."
},
{
  year: '1980–90-yillar',
  title: 'Professor va ustoz',
  desc: "Ozod Sharafiddinov XX asrning 90-yillari oʻrtalarigacha Oʻzbekiston Milliy universitetida professor boʻldi. 1995—1997-yillarda „Tafakkur“ jurnali bosh muharrir oʻrinbosari vazifasini bajardi. U 1997-yildan beri „Jahon adabiyoti“ jurnalining bosh muharriri. Ozod Sharafiddinov Beruniy nomidagi davlat mukofoti laureati (1970), „Buyuk xizmatlari uchun“ (1999), „Mehnat shuhrati“ (1997) ordenlari sohibi. 2002-yil 23-avgustda Ozod Sharafiddinovga „Oʻzbekiston qahramoni“ unvoni berildi."
},
{
  year: '2002',
  title: "O'zbekiston Qahramoni",
  desc: 'Milliy madaniyatga qo\'shgan ulkan hissasi uchun "O\'zbekiston Qahramoni" oliy unvoni bilan taqdirlangan.'
},
{
  year: '2005',
  title: 'Abadiy meros',
  desc: "Ozod Sharafiddinov 2005-yilda vafot etgan. Uning ilmiy merosi va g'oyalari bugungi kungacha olimlar avlodlariga ta'sir ko'rsatishda davom etmoqda."
}];

export function TimelineCorridor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <Section className="relative" id="timeline">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Vaqt Yo'lagi</h2>
        <div className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"></div>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
          <motion.div
            style={{
              height: lineHeight
            }}
            className="w-full bg-[#d4af37] origin-top" />

        </div>

        <div className="space-y-12 md:space-y-24">
          {milestones.map((item, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}
            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Content Side */}
              <div className="flex-1 pl-12 md:pl-0 md:text-right">
                <div
                className={`md:px-8 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

                  <span className="inline-block px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] font-bold rounded-full text-sm mb-2 border border-[#d4af37]/20">
                    {item.year}
                  </span>
                  <h3 className="mb-2 font-serif text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>

              {/* Dot on Line */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-[#d4af37] rounded-full transform -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_0_4px_rgba(255,255,255,0.5)]"></div>

              {/* Empty Side for Balance */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          )}
        </div>
      </div>
    </Section>);

}