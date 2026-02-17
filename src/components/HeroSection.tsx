import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function HeroSection() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#d4af37]/10 blur-3xl"
          initial={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            scale: 0.5 + Math.random()
          }}
          animate={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            rotate: 360
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            width: `${300 + Math.random() * 200}px`,
            height: `${300 + Math.random() * 200}px`
          }} />

        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.2
          }}
          className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full mb-8" />


        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] tracking-tight leading-tight">

          Ozod <br className="md:hidden" /> Sharafiddinov
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="text-xl md:text-2xl text-[#555] font-light tracking-widest uppercase">

          Raqamli Muzey
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="text-lg text-[#666] max-w-2xl mx-auto italic font-serif">

          "Adabiyotshunos olim, adabiy tanqidchi va tarjimon
          (1929–2005)"
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 1
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8">

          <button
            onClick={() => scrollToId('exhibition-hall')}
            className="px-8 py-3 bg-[#d4af37] text-white rounded-full font-medium hover:bg-[#b89628] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Muzeyga kirish
          </button>
          <button
            onClick={() => scrollToId('digital-archive')}
            className="px-8 py-3 border border-[#1a1a1a] text-[#1a1a1a] rounded-full font-medium hover:bg-[#1a1a1a] hover:text-white transition-all">
            Arxivni ko'rish
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          delay: 1.5,
          repeat: Infinity
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#1a1a1a]/50">

        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">
            Pastga aylantiring
          </span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>);

}
