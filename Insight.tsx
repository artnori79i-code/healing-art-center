// Path: components/Insight.tsx
import React from 'react';
import { motion } from 'framer-motion';

const YOUTUBE_URL = "https://www.youtube.com/@healingmusic6179/videos";
const KAKAO_URL = "https://invite.kakao.com/tc/yBbJA8619b";
const BLOG_URL = "https://blog.naver.com/healingarter";

const INSIGHT_DATA = [
  {
    type: 'YOUTUBE',
    label: 'HEALING ART YOUTUBE',
    title: '힐링예술터 유튜브',
    desc: '공식 유튜브 채널에서 다양한 공연 영상을 만나보세요.',
    url: YOUTUBE_URL,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=600&auto=format&fit=crop',
    linkText: 'YOUTUBE'
  },
  {
    type: 'BLOG',
    label: 'NAVER BLOG',
    title: '네이버 블로그',
    desc: '교육 현장의 생생한 소식을 블로그에서 전합니다.',
    url: BLOG_URL,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop',
    linkText: 'BLOG'
  },
  {
    type: 'KAKAO',
    label: 'KAKAOTALK',
    title: '실시간 카카오톡 상담',
    desc: '1:1 문의를 통해 언제든 편하게 소통하세요.',
    url: KAKAO_URL,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    linkText: 'KAKAO'
  }
];

const Insight: React.FC = () => {
  return (
    <div id="insight" className="bg-white py-20 md:py-32 border-t border-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-gothic font-black mb-4 text-neutral-900 tracking-tighter"
          >
            INSIGHT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-400 text-sm font-medium font-gothic opacity-80"
          >
            유튜브와 블로그를 통해 소식을 만나보세요.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {INSIGHT_DATA.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-xl border border-neutral-50 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* Ken Burns Effect for Insight Images */}
                <motion.img 
                  initial={{ scale: 1.2, x: "-2%" }}
                  animate={{ scale: 1.1, x: "2%" }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-5 right-5 px-3 py-1 bg-white/95 backdrop-blur rounded-full shadow-lg">
                  <span className="text-[9px] font-black text-neutral-800 tracking-widest uppercase font-gothic">
                    {item.type}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col items-center text-center flex-1">
                <span className="text-[9px] font-black text-neutral-300 tracking-[0.2em] uppercase mb-3 font-gothic">
                  {item.label}
                </span>
                <h3 className="text-lg md:text-xl font-black text-neutral-900 font-gothic tracking-tighter mb-3 whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-[13px] leading-relaxed font-gothic mb-8 flex-1 max-w-[220px]">
                  {item.desc}
                </p>
                
                <div className="flex items-center gap-2 group/link">
                  <span className="text-[11px] font-black text-neutral-800 tracking-widest uppercase border-b-2 border-neutral-100 group-hover/link:border-blue-600 transition-all font-gothic pb-1">
                    {item.linkText}
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insight;