// Path: components/Programs.tsx
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
        <div className="max-w-4xl mb-20 text-left md:text-left">
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
            className="text-xl md:text-5xl font-gothic font-extrabold mb-4 text-neutral-900 tracking-tighter leading-tight whitespace-nowrap"
          >
            예술로 피어나는 <span className="text-blue-600">긍정적인 에너지</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[11px] md:text-lg text-neutral-400 font-medium leading-relaxed font-gothic whitespace-nowrap overflow-hidden text-ellipsis"
          >
            개개인의 감성을 일깨우는 힐링예술터만의 맞춤형 커리큘럼입니다.
          </motion.p>
        </div>

        <div className="flex justify-center w-full">
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl w-full perspective-1000"
          >
            {PROGRAMS.map((prog, idx) => (
              <motion.div
                key={prog.id}
                variants={cardVariants}
                onClick={() => setSelectedProgramId(prog.id)}
                whileHover={{ y: -12, scale: 1.03, rotateX: 0 }}
                className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] aspect-[16/10] cursor-pointer shadow-2xl border border-neutral-100"
              >
                {/* Ken Burns Animation on Background Image */}
                <motion.img
                  initial={{ scale: 1.3 }}
                  whileInView={{ scale: 1.1 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  src={prog.image}
                  alt={prog.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-700" />

                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end z-10">
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[8px] font-bold mb-3 tracking-[0.2em] border border-white/20 uppercase w-fit"
                  >
                    CAT 0{idx + 1}
                  </motion.span>
                  <h3 className="text-lg md:text-3xl font-gothic font-black mb-2 text-white tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">
                    {prog.title}
                  </h3>
                  <p
                    className="text-white/70 text-[10px] md:text-sm font-medium max-w-[320px] leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0"
                    dangerouslySetInnerHTML={{ __html: prog.description }}
                  />
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
              initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100, rotateX: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative bg-white w-full max-w-4xl rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className={`p-8 md:p-10 text-white relative ${selectedProgram.color}`}>
                <button onClick={() => setSelectedProgramId(null)} className="absolute top-8 right-8 text-white/60 hover:text-white bg-black/10 p-2 rounded-full transition-colors"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                <h3 className="text-2xl md:text-3xl font-gothic font-black mb-2 tracking-tighter">{selectedProgram.title}</h3>
                <p
                  className="text-white/80 text-sm md:text-base font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedProgram.description }}
                />
              </div>
              <div className="p-6 md:p-14 overflow-y-auto bg-neutral-50/30">
                <div className="grid gap-16">
                  {selectedProgram.subPrograms?.map((sub, i) => (
                    <motion.div
                      key={sub.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="border-b border-neutral-100 pb-16 last:border-0 last:pb-0"
                    >
                      <div className="flex flex-col md:flex-row gap-10 items-start">
                        {sub.image && (
                          <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-neutral-100">
                            <img src={sub.image} alt={sub.title} className="w-full h-full object-contain" />
                          </div>
                        )}
                        <div className="flex-1 space-y-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] font-black text-blue-600 bg-blue-100/50 px-3 py-1.5 rounded-full uppercase tracking-widest">Stage {i + 1}</span>
                              <span className="text-[10px] font-black text-neutral-400 bg-neutral-100 px-3 py-1.5 rounded-full uppercase tracking-widest">참여인원: {sub.participants}</span>
                            </div>
                            <h4 className="text-xl md:text-2xl font-black text-neutral-800 tracking-tighter">{sub.title}</h4>
                          </div>
                          <p className="text-neutral-600 text-[15px] md:text-base leading-[1.8] font-medium opacity-90" dangerouslySetInnerHTML={{ __html: sub.content }} />
                        </div>
                      </div>
                    </motion.div>
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