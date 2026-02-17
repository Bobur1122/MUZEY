import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
export function AIGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
  {
    role: 'ai',
    text: "Xush kelibsiz! Men sizning AI muzey yo'lboshchingizman. Ozod Sharafiddinov hayoti yoki asarlari haqida istalgan savolingizni bering."
  }]
  );
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setChatHistory((prev) => [
    ...prev,
    {
      role: 'user',
      text: message
    }]
    );
    setMessage('');
    // Mock response
    setTimeout(() => {
      setChatHistory((prev) => [
      ...prev,
      {
        role: 'ai',
        text: "Bu funksiya demo prototip hisoblanadi. To'liq versiyada men ko'rgazmalar haqidagi savollarga javob bera olaman!"
      }]
      );
    }, 1000);
  };
  return (
    <>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.95
          }}
          className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 flex flex-col"
          style={{
            maxHeight: '500px',
            height: '60vh'
          }}>

            {/* Header */}
            <div className="bg-[#1a1a1a] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span className="font-bold">Muzey Yo'lboshchisi</span>
              </div>
              <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white">

                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {chatHistory.map((msg, i) =>
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>

                  <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#1a1a1a] text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>

                    {msg.text}
                  </div>
                </div>
            )}
            </div>

            {/* Input */}
            <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-gray-100 flex gap-2">

              <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Savol bering..."
              className="flex-1 px-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]" />

              <button
              type="submit"
              className="p-2 bg-[#d4af37] text-white rounded-full hover:bg-[#b89628] transition-colors">

                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        }
      </AnimatePresence>

      <motion.button
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#1a1a1a] text-white rounded-full shadow-xl flex items-center justify-center z-50 border-2 border-[#d4af37]">

        {isOpen ?
        <X className="w-6 h-6" /> :

        <MessageCircle className="w-6 h-6" />
        }
      </motion.button>
    </>);

}