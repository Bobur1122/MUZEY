import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { MuseumCard } from './ui/MuseumCard';
import { Play, Image as ImageIcon, Pause } from 'lucide-react';
const tabs = [
{
  id: 'video',
  label: 'Video suhbatlar',
  icon: Play
},
{
  id: 'photo',
  label: 'Fotogalereya',
  icon: ImageIcon
}];

export function MediaRoom() {
  const [activeTab, setActiveTab] = useState('video');
  const photoItems = [
    {
      id: 'photo-1',
      src: '/kutub.png',
      caption: 'Kutubxona lavhasi',
      location: 'Toshkent'
    },
    {
      id: 'photo-2',
      src: '/image copy 3.png',
      caption: 'Ozod Sharafiddinov portreti',
      location: 'Arxiv'
    },
    {
      id: 'photo-3',
      src: '/ozod2.png',
      caption: 'Ustoz bilan uchrashuv',
      location: 'Toshkent'
    },
    {
      id: 'photo-4',
      src: '/image.png',
      caption: 'Oʻzbekiston 1-prezidenti bilan uchrashuv',
      location: 'Toshkent'
    },
    {
      id: 'photo-5',
      src: '/image copy.png',
      caption: 'Ilmiy anjuman lavhasi',
      location: 'Toshkent'
    },
    {
      id: 'photo-6',
      src: '/image copy 2.png',
      caption: 'Ustozlar davrasida',
      location: 'Toshkent'
    }
  ];
  return (
    <Section className="bg-[#1a1a1a] text-white">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Media Xonasi
        </h2>
        <p className="text-gray-400">
          Olimning ovozi va shaxsiyatiga cho'ming.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex max-w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 p-1 rounded-full bg-white/10 backdrop-blur-sm">
          {tabs.map((tab) =>
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-3 sm:px-6 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? 'text-[#1a1a1a]' : 'text-gray-300 hover:text-white'}`}>

              {activeTab === tab.id &&
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white rounded-full"
              transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.6
              }} />

            }
              <span className="relative z-10 flex items-center gap-2">
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </span>
            </button>
          )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === 'video' &&
          <motion.div
            key="video"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

              {[1, 2, 3].map((i) =>
            <MuseumCard
              key={i}
              className="overflow-hidden bg-white/5 border-white/10 group">

                  <div className="relative flex items-center justify-center transition-colors aspect-video bg-black/50 group-hover:bg-black/40">
                    <div className="flex items-center justify-center w-16 h-16 transition-transform rounded-full bg-white/20 backdrop-blur group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      Adabiyot haqida mulohazalar
                    </h3>
                    <p className="text-sm text-gray-400">
                      Arxiv suhbati, 1998 • 12:45
                    </p>
                  </div>
                </MuseumCard>
            )}
            </motion.div>
          }

          {activeTab === 'photo' &&
          <motion.div
            key="photo"
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.3
            }}
            className="gap-6 space-y-6 columns-1 md:columns-2 lg:columns-3">

              {photoItems.map((item, index) =>
            <div
              key={item.id}
              className="relative overflow-hidden break-inside-avoid group rounded-xl">

                  <div
                className={`bg-gray-800 w-full ${index % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square'} relative`}>
                    {item.src ?
                <img
                  src={item.src}
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover object-top" /> :
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                      Rasm qo'shiladi
                    </div>
                }

                    <div className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-100">
                      <p className="font-medium text-white">
                        {item.caption}
                      </p>
                      <p className="text-sm text-gray-300">{item.location}</p>
                    </div>
                  </div>
                </div>
            )}
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </Section>);

}
