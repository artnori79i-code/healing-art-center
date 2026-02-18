// Path: components/Programs.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { PROGRAMS } from './constants';

const Programs: React.FC = () => {
  const [selectedProgramId, setSelectedProgramId] = useState<number | null>(null);
  const [selectedPartnerIndex, setSelectedPartnerIndex] = useState<number | null>(null);

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
                  className="text-white/80 text-sm md:text-base font-medium mb-6"
                  dangerouslySetInnerHTML={{ __html: selectedProgram.description }}
                />

                {selectedProgram.partners && selectedProgram.partners.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {selectedProgram.partners.map((partner, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setSelectedPartnerIndex(idx)}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-[10px] md:text-xs font-black text-white shadow-xl flex items-center gap-2 group/btn transition-all"
                      >
                        {/* Shimmer/Sparkle Effect */}
                        <motion.div
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 1
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
                        />

                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        협업기관 {idx + 1}. {partner}
                      </motion.button>
                    ))}
                  </div>
                )}
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
                      <div className="flex flex-col md:flex-row gap-12 items-start">
                        {sub.image && (
                          <div className="w-full md:w-[48%] space-y-4 flex-shrink-0">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                              <img
                                src={sub.image}
                                alt={sub.title}
                                className="w-full h-auto block transition-transform duration-700 hover:scale-105"
                                style={{ imageRendering: 'auto' }}
                              />
                            </div>
                            {sub.youtubeUrl && (
                              <motion.a
                                href={sub.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-2 w-full py-3 bg-[#FF0000] text-white rounded-xl font-bold text-sm shadow-lg hover:bg-[#CC0000] transition-colors"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                                영상 보기 (YOUTUBE)
                              </motion.a>
                            )}
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
        {selectedPartnerIndex !== null && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPartnerIndex(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedPartnerIndex(null)}
                className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors font-bold"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="overflow-y-auto">
                {selectedPartnerIndex === 1 ? (
                  <div className="flex flex-col">
                    {/* Goyang-si Custom Header */}
                    <div className="bg-orange-600 p-8 md:p-12 text-white">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-black mb-4 uppercase tracking-widest">Partner Story 02</span>
                      <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter leading-tight">고양시 관내 경로당 순회사업<br /><span className="text-orange-200">예술로 전하는 따뜻한 위로와 활력</span></h3>
                      <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-3xl">
                        고양시 노인종합복지관 관내 모든 경로당 문화예술교육 순회사업에서 힐링예술터-이성경 예술강사는 시니어 회원들께 음악 중심의 문화예술교육과 예술치유를 진행했습니다.
                        힐링예술터의 이성경 예술강사가 어르신들과 함께하며, 악기 연주와 신체 활동을 통해 소외된 이웃 없이 모두가 예술의 주인공이 되는 소중한 시간을 만들었습니다.
                      </p>
                    </div>

                    {/* Goyang-si Activity Gallery */}
                    <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-neutral-50">
                      {[1, 2, 3].map((num) => (
                        <motion.div
                          key={num}
                          whileHover={{ y: -8 }}
                          className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-[4/3]"
                        >
                          <img
                            src={`/images/goyang_${num}.png`}
                            alt={`Goyang Activity ${num}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>

                    <div className="p-8 md:p-12 border-t border-neutral-100 bg-white">
                      <div className="flex items-center gap-4 text-orange-600">
                        <div className="w-12 h-[2px] bg-orange-600"></div>
                        <span className="font-black text-sm uppercase tracking-widest">Together with Goyang-si</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 md:p-8">
                    <img
                      src="/images/partner_article_1.png"
                      alt="협업기관 뉴스 기사"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Programs;