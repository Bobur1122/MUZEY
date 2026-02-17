import React from 'react';
import { Section } from './ui/Section';
export function MuseumFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 border-t-4 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              Ozod Sharafiddinov
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              O'zbekistonning eng nufuzli adabiy tanqidchilaridan biri bo'lgan
              shaxsning hayoti, ijodi va merosiga bag'ishlangan raqamli muzey.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-[#d4af37] mb-4 uppercase tracking-wider text-sm">
              Muzey Xaritasi
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Ko'rgazma Zali
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Raqamli Arxiv
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vaqt Yo'lagi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
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
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>O'zbekiston Milliy Universiteti</li>
              <li>Toshkent, O'zbekiston</li>
              <li>info@ozodmuseum.uz</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Raqamli Muzey Loyihasi. Barcha huquqlar himoyalangan.</p>
          <p className="mt-2 md:mt-0">
            Ozod Sharafiddinov merosiga bag'ishlanadi
          </p>
        </div>
      </div>
    </footer>);

}