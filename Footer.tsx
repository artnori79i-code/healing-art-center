// Path: components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  onApplyClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onApplyClick }) => {
  return (
    <footer className="bg-white py-24 border-t border-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-12">

          {/* 브랜드 섹션: 중앙 정렬 */}
          <div className="max-w-2xl">
            <div className="flex justify-center items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-gothic font-extrabold text-neutral-800 tracking-tighter">힐링예술터</h2>
            </div>
            <p className="text-neutral-400 font-bold leading-relaxed text-sm md:text-base">
              문화예술로 하나 되는 행복한 세상, <br />
              예술을 통한 긍정적 에너지를 전합니다.
            </p>
          </div>

          {/* 중앙 컨택트 카드: 균형감 있게 축소 및 중앙 배치 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group w-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-neutral-50/70 border border-neutral-100 rounded-[2.2rem] px-8 md:px-12 py-6 shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-500 inline-block"
            >
              <div className="flex flex-col items-center gap-4">
                {/* 상단 라벨 */}
                <div className="flex items-center gap-2.5">
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, -15, 0] }}
                    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <span className="text-[9px] font-black text-neutral-300 uppercase tracking-[0.4em] font-gothic">Contact & Apply</span>
                </div>

                {/* 문의 및 이메일: 한 줄 구성 및 동일 크기 */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm md:text-base font-black text-neutral-400 font-gothic tracking-tight shrink-0">문의</span>
                    <span
                      className="relative text-sm md:text-base font-black text-neutral-800 font-gothic group-hover:text-blue-600 transition-colors inline-block tracking-tight cursor-default"
                    >
                      486sk@naver.com
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onApplyClick}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-black text-xs md:text-[11px] tracking-widest uppercase hover:bg-neutral-900 transition-all shadow-md flex items-center gap-2"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    메일 보내기
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 소셜 버튼 그룹: 중앙 정렬 */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href="https://blog.naver.com/healingarter"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-neutral-50 text-neutral-600 hover:bg-blue-50 hover:text-blue-700 transition-all font-bold border border-neutral-100 shadow-sm text-xs tracking-widest uppercase"
            >
              Blog
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href="https://www.youtube.com/@healingmusic6179/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-neutral-50 text-neutral-600 hover:bg-red-50 hover:text-red-600 transition-all font-bold border border-neutral-100 shadow-sm text-xs tracking-widest uppercase"
            >
              YouTube
            </motion.a>
            <motion.a
              whileHover={{ y: -5, scale: 1.05 }}
              href="https://invite.kakao.com/tc/yBbJA8619b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition-all font-bold shadow-lg text-xs tracking-widest uppercase"
            >
              KAKAO TALK
            </motion.a>
          </div>
        </div>

        {/* 하단 카피라이트 영역: 중앙 정렬 */}
        <div className="mt-24 pt-10 border-t border-neutral-100 flex flex-col items-center gap-6 text-[10px] md:text-[11px] font-bold text-neutral-300 tracking-[0.2em] uppercase">
          <div className="text-center space-y-2">
            <p>본 사이트의 사진·영상은 촬영 및 활용 동의를 받아 사용되었습니다. 무단배포 및 상업적 이용을 금합니다.</p>
            <p>[ⓒ 힐링예술터 All rights reserved]</p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-neutral-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-800 transition-colors">Terms of Service</a>
            <button
              onClick={() => {
                const password = window.prompt("관리자 비밀번호를 입력하세요:");
                if (password === "794256") { // 업데이트된 관리자 비밀번호
                  window.open("https://analytics.naver.com/", "_blank");
                } else if (password !== null) {
                  alert("비밀번호가 일치하지 않습니다.");
                }
              }}
              className="hover:text-neutral-800 transition-colors cursor-pointer"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;