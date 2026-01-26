import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PROGRAMS } from './constants';

const Programs: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<number | null>(null);
  const selectedProgram = PROGRAMS.find(p => p.id === selectedProgramId);

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants: Variants = {
    initial: { opacity: 0, y: 60, scale: 0.9, rotateX: 10 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-white py-24 border-t border-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-blue-600"></div>
            <span className="text-blue-500 font-bold tracking-[0.4em] text-[9px] uppercase">Curriculum</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-5xl font-gothic font-extrabold mb-4 text-neutral-900 tracking-tighter leading-tight"
          >
            예술로 피어나는 <span className="text-blue-600">긍정적인 에너지</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-lg text-neutral-400 font-medium leading-relaxed font-gothic"
          >
            개개인의 감수성을 일깨우는 힐링예술터만의 맞춤형 커리큘럼입니다.
          </motion.p>
        </div>

        <div className="flex justify-center w-full">
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl w-full"
          >
            {PROGRAMS.map((prog, idx) => (
              <motion.div
                key={prog.id}
                variants={cardVariants}
                onClick={() => setSelectedProgramId(prog.id)}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group relative overflow-hidden rounded-[2rem] aspect-[16/10] cursor-pointer shadow-2xl border border-neutral-100"
              >
                <motion.img
                  initial={{ scale: 1.3 }}
                  whileInView={{ scale: 1.1 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  src={prog.image}
                  alt={prog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10">
                  <h3 className="text-lg md:text-3xl font-gothic font-black mb-2 text-white tracking-tighter group-hover:-translate-y-2 transition-transform">
                    {prog.title}
                  </h3>
                  <p className="text-white/70 text-[10px] md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                    {prog.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProgramId(null)} className="absolute inset-0 bg-neutral-900/80 backdrop-blur-lg" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className={`p-8 md:p-10 text-white relative ${selectedProgram.color}`}>
                <button onClick={() => setSelectedProgramId(null)} className="absolute top-8 right-8 text-white/60 hover:text-white bg-black/10 p-2 rounded-full transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                <h3 className="text-2xl md:text-3xl font-gothic font-black mb-2 tracking-tighter">{selectedProgram.title}</h3>
                <p className="text-white/80 text-sm md:text-base font-medium">{selectedProgram.description}</p>
              </div>
              <div className="p-6 md:p-14 overflow-y-auto">
                <div className="grid gap-10">
                  {selectedProgram.subPrograms?.map((sub, i) => (
                    <div key={sub.id} className="border-b border-neutral-200 pb-10 last:border-0 last:pb-0">
                      <h4 className="text-xl font-black text-neutral-800 font-gothic mb-4">{sub.title}</h4>
                      <p className="text-neutral-600 text-[15px] leading-relaxed font-gothic" dangerouslySetInnerHTML={{ __html: sub.content }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Programs;