import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { MuseumCard } from './ui/MuseumCard';
import { Play, Image as ImageIcon, X } from 'lucide-react';
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
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
    year?: string;
    duration?: string;
    url: string;
  } | null>(null);
  const videoItems = [
    {
      id: 'video-1',
      title: "Ozod Sharafiddinov Tanlangan asarlar. Ma'naviy kamolot yo'llarida. Jannati odam edi",
      url: 'https://youtu.be/hGvwqS21MrM?si=vDhHdKw9P5kOoOSp'
    },
    {
      id: 'video-2',
      title: 'OZOD SHARAFIDDINOV IDEAL SHAXSMIDI?',
      url: 'https://youtu.be/6fenDtEgYPE?si=AAXIDN92ozTMvyiG'
    },
    {
      id: 'video-3',
      title: 'Ozod Sharafiddinov bilan suhbat',
      url: 'https://youtu.be/NwHLgq6Jp5w?si=PbbAZ-0ES3GcQpsf'
    }
  ];
  const getVideoId = (url: string) =>
    new URL(url).searchParams.get('v') || url.split('/').pop()?.split('?')[0];
  const getEmbedUrl = (url: string) =>
    `https://www.youtube.com/embed/${getVideoId(url)}?rel=0`;
  const getThumbUrl = (url: string) =>
    `https://img.youtube.com/vi/${getVideoId(url)}/hqdefault.jpg`;
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

              {videoItems.map((item) =>
            <MuseumCard
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="overflow-hidden bg-white/5 border-white/10 group h-full flex flex-col">

                  <div className="relative flex items-center justify-center aspect-video overflow-hidden">
                    <img
                      src={getThumbUrl(item.url)}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 transition-transform rounded-full bg-white/30 backdrop-blur group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="p-4 bg-black/40 flex-1">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {item.title}
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


      <AnimatePresence>
        {selectedVideo &&
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
          onClick={() => setSelectedVideo(null)}>

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
            className="relative w-full max-w-4xl overflow-hidden bg-black rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}>

            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-white/10 hover:bg-white/20">
              <X className="w-5 h-5 text-white" />
            </button>

            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={getEmbedUrl(selectedVideo.url)}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen />
            </div>

            <div className="p-4 bg-[#1a1a1a] text-white">
              <h3 className="text-lg font-bold">{selectedVideo.title}</h3>
              <p className="text-sm text-gray-300">
                {selectedVideo.title}
              </p>
            </div>
          </motion.div>
        </motion.div>
        }
      </AnimatePresence>
    </Section>);

}
