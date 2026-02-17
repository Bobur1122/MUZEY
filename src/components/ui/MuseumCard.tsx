import React from 'react';
import { motion } from 'framer-motion';
interface MuseumCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export function MuseumCard({
  children,
  className = '',
  onClick
}: MuseumCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className={`glass-panel rounded-2xl overflow-hidden shadow-md cursor-pointer transition-colors border border-transparent hover:border-[#d4af37]/30 ${className}`}
      onClick={onClick}>

      {children}
    </motion.div>);

}