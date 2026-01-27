// Path: components/Hero.tsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const YOUTUBE_URL = "https://www.youtube.com/@healingmusic6179/videos";
const KAKAO_URL = "https://invite.kakao.com/tc/yBbJA8619b";
const BLOG_URL = "https://blog.naver.com/healingarter";

const GRID_ITEMS = [
  { id: 1, url: "/images/hero_v7/h1.png" },
  { id: 2, url: "/images/hero_v7/h2.png" },
  { id: 3, url: "/images/hero_v7/h3.png" },
  { id: 4, url: "/images/hero_v7/h4.png" },
  { id: 5, url: "/images/hero_v7/h5.jpg" },
  { id: 6, url: "/images/hero_v7/h6.png" },
  { id: 7, url: "/images/hero_v7/h7.png" },
  { id: 8, url: "/images/hero_v7/h8.jpg" },
  { id: 9, url: "/images/hero_v7/h9.jpg" },
  { id: 10, url: "/images/hero_v7/h10.png" },
  { id: 11, url: "/images/hero_v7/h11.png" },
  { id: 12, url: "/images/hero_v7/h12.png" },
  { id: 13, url: "/images/hero_v7/h13.png" },
  { id: 14, url: "/images/hero_v7/h14.png" },
  { id: 15, url: "/images/hero_v7/h15.png" }
].map(item => ({
  ...item,
  url: item.url.startsWith('/') ? item.url : `${item.url}?q=80&w=500&h=500&auto=format&fit=crop`
}));

const Hero: React.FC = () => {
  const [phase, setPhase] = useState<'spread' | 'align'>('spread');
  const [isPaused, setIsPaused] = useState(false);
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 500], [0, -30]);
  const bgOpacity = useTransform(scrollY, [0, 300], [0.1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setPhase('align'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const itemWidth = 240;
  const gap = 30;
  const totalStep = itemWidth + gap;
  const totalWidth = GRID_ITEMS.length * totalStep;
  const duplicatedItems = [...GRID_ITEMS, ...GRID_ITEMS, ...GRID_ITEMS];

  const colorCycle = ["#FFFFFF", "#E5E7EB", "#4B5563", "#000000", "#4B5563", "#E5E7EB", "#FFFFFF"];

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 360],
              x: [Math.cos(i * 36 * Math.PI / 180) * 300, Math.cos(i * 36 * Math.PI / 180) * 500],
              y: [Math.sin(i * 36 * Math.PI / 180) * 300, Math.sin(i * 36 * Math.PI / 180) * 500],
            }}
            transition={{ duration: 15 + i, repeat: Infinity, ease: "linear" }}
            className="absolute text-2xl font-serif text-blue-400/10"
          >
            {['♪', '♫', '∮', '♭', '♮', '♯'][i % 6]}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{ y: titleY }}
        className="relative z-20 text-center mb-16 mt-48 md:mt-56 w-full px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="flex flex-col items-center w-full"
        >
          <motion.div
            animate={{ color: colorCycle }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="select-none mb-6"
          >
            <h1 className="text-[7vw] md:text-[4.2vw] font-gothic font-black tracking-[0.15em] md:tracking-[0.45em] uppercase block leading-[1.1] md:leading-none drop-shadow-sm">
              <span className="block md:inline">HEALING </span>
              <span className="block md:inline">ART </span>
              <span className="block md:inline">CENTER</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[10px] md:text-sm font-bold text-neutral-400 tracking-[0.4em] uppercase font-gothic opacity-80"
          >
            Art & Music Experience Center
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="relative w-full h-[200px] md:h-[280px] flex items-center justify-center mb-12">
        {phase === 'spread' ? (
          <div className="relative w-full h-full">
            {GRID_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ x: 0, y: 0, scale: 0.5, opacity: 0, rotate: -20 }}
                animate={{
                  x: (i - GRID_ITEMS.length / 2) * 80,
                  y: [Math.sin(i * 1.5) * 40, (Math.sin(i * 1.5) * 40) + 10, Math.sin(i * 1.5) * 40],
                  scale: 0.7,
                  opacity: 1,
                  rotate: [Math.random() * 6 - 3, (Math.random() * 6 - 3) + 2, Math.random() * 6 - 3]
                }}
                transition={{
                  x: { type: "spring", stiffness: 40, damping: 12, delay: i * 0.05 },
                  y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: i * 0.05 }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] md:w-[180px] aspect-square rounded-[1rem] md:rounded-[1.2rem] overflow-hidden shadow-xl border-2 md:border-4 border-white"
              >
                <img src={item.url} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full overflow-hidden py-4"
          >
            <motion.div
              className="flex gap-4 md:gap-8 w-max"
              initial={{ x: 0 }}
              animate={isPaused ? {} : { x: -totalWidth }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedItems.map((item, index) => (
                <motion.a
                  key={`${item.id}-${index}`}
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative w-[180px] md:w-[240px] aspect-[16/10] bg-white rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden cursor-pointer shadow-md border border-neutral-100 flex-shrink-0 group"
                >
                  <img
                    src={item.url}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="flex flex-row gap-2 md:gap-4 mb-16 z-30"
      >
        {[
          { label: "YouTube", url: YOUTUBE_URL, color: "border border-red-500 text-red-600 hover:bg-red-50" },
          { label: "Blog", url: BLOG_URL, color: "bg-[#03C75A] text-white hover:bg-[#02a94d]" },
          { label: "Kakao", url: KAKAO_URL, color: "bg-[#FEE500] text-[#3A1D1D] hover:bg-[#e6ce00]" }
        ].map((btn, i) => (
          <motion.a
            key={i}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-all shadow-sm font-gothic ${btn.color}`}
          >
            {btn.label}
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <svg className="w-5 h-5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;