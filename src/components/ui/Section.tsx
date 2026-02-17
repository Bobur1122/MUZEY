import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
export function Section({ children, className = '', id }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2
  });
  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col justify-center relative ${className}`}>

      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        animate={
        isInView ?
        {
          opacity: 1,
          y: 0
        } :
        {
          opacity: 0,
          y: 50
        }
        }
        transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}
        className="w-full max-w-7xl mx-auto">

        {children}
      </motion.div>
    </section>);

}