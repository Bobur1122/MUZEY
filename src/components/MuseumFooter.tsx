import React from 'react';
import { Section } from './ui/Section';
export function MuseumFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 border-t-4 border-[#d4af37]">
      <div className="px-6 mx-auto max-w-7xl md:px-12">
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">
              Ozod Sharafiddinov
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              O'zbekistonning eng nufuzli adabiy tanqidchilaridan biri bo'lgan
              shaxsning hayoti, ijodi va merosiga bag'ishlangan raqamli muzey.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-[#d4af37] mb-4 uppercase tracking-wider text-sm">
              Muzey Xaritasi
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Ko'rgazma Zali
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Raqamli Arxiv
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Vaqt Yo'lagi
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Media Xonasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#d4af37] mb-4 uppercase tracking-wider text-sm">
              Aloqa
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>O'zbekiston jurnalistika va ommaviy komunikatsiyalar universiteti</li>
              <li>Toshkent, O'zbekiston</li>
              <li>info@ozodmuseum.uz</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 text-xs text-gray-500 border-t border-white/10 md:flex-row">
          <p>© 2026 Raqamli Muzey Loyihasi. Barcha huquqlar himoyalangan.</p>
          <p className="mt-2 md:mt-0">
            Ozod Sharafiddinov merosiga bag'ishlanadi
          </p>
        </div>
      </div>
    </footer>);

}