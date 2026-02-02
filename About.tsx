// Path: components/About.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PROF_URL = "https://arttherapy.sdu.ac.kr/arttherapy/cms/FR_VPRO_CON/ProfDetail.do?MENU_ID=40&SITE_NO=46&CONTENTS_NO=&ClassCode=F6003&YEAR=2026&TeacNo=231026";

const Sparkle: React.FC<{ index: number; isHovered: boolean }> = ({ index, isHovered }) => {
  const angle = (index * 45) * (Math.PI / 180);
  const distance = isHovered ? 80 : 0;
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHovered ? [0, 1.2, 0] : 0,
        opacity: isHovered ? [0, 1, 0] : 0,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      }}
      transition={{ duration: 0.6, delay: index * 0.02, ease: "easeOut" }}
      className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full blur-[1px] pointer-events-none"
    />
  );
};

const TimelineItem: React.FC<{ year: string; label: string; index: number }> = ({ year, label, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="flex flex-col items-center text-center group relative min-w-[100px] md:min-w-[120px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center -top-8 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Sparkle key={i} index={i} isHovered={isHovered} />
        ))}
      </div>

      <motion.span
        animate={isHovered ? {
          color: "#2563eb",
          x: [0, -1, 1, -1, 1, 0],
          rotate: [0, -1, 1, -1, 1, 0],
          y: -4,
        } : {
          color: "#171717",
          x: 0,
          rotate: 0,
          y: 0,
        }}
        transition={isHovered ? {
          x: { repeat: Infinity, duration: 0.4 },
          rotate: { repeat: Infinity, duration: 0.4 },
          color: { duration: 0.2 },
          y: { duration: 0.2 }
        } : { duration: 0.2 }}
        className="text-[12px] md:text-[14px] font-black mb-2 block tracking-tight text-neutral-800 cursor-default relative z-[100]"
      >
        {label}
      </motion.span>
      <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full border border-white shadow-sm transition-transform duration-300 ${isHovered ? 'scale-150' : 'scale-100'} ${index < 6 ? 'bg-blue-800' : 'bg-blue-600'}`} />
      <span className="text-[8px] font-bold text-neutral-400 mt-1.5 font-gothic tracking-widest">{year}</span>
    </div>
  );
};

const GoldSparkle: React.FC<{ index: number; isHovered: boolean }> = ({ index, isHovered }) => {
  const angle = (index * 22.5) * (Math.PI / 180);
  const distance = isHovered ? 120 : 0;
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHovered ? [0, 1, 0] : 0,
        opacity: isHovered ? [0, 0.8, 0] : 0,
        x: Math.cos(angle) * distance + (Math.random() * 20 - 10),
        y: Math.sin(angle) * distance + (Math.random() * 20 - 10),
      }}
      transition={{ duration: 1.2, delay: index * 0.03, ease: "easeOut" }}
      className="absolute w-1 h-1 bg-yellow-400 rounded-full blur-[0.5px] pointer-events-none"
    />
  );
};

const StatItem: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const colorCycle = ["#FFFFFF", "#737373", "#000000", "#737373", "#FFFFFF"];

  return (
    <div
      className="relative flex flex-col items-center justify-center px-6 py-4 rounded-2xl bg-white/50 border border-neutral-100/50 backdrop-blur-sm shadow-sm group cursor-default overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Sparkle key={i} index={i} isHovered={isHovered} />
        ))}
      </div>

      <motion.p
        className="text-[10px] md:text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-1 font-gothic"
      >
        {label}
      </motion.p>

      <motion.span
        animate={isHovered ? {
          x: [0, -2, 2, -2, 2, 0],
          rotate: [0, -1, 1, -1, 1, 0],
          color: colorCycle,
        } : {
          x: 0,
          rotate: 0,
          color: colorCycle // Use the cycle for consistent animation
        }}
        transition={isHovered ? {
          x: { repeat: Infinity, duration: 0.3 },
          rotate: { repeat: Infinity, duration: 0.3 },
          color: { repeat: Infinity, duration: 4, ease: "linear" }
        } : {
          color: { repeat: Infinity, duration: 6, ease: "linear" }
        }}
        className="text-xl md:text-2xl font-black font-gothic tracking-tighter"
      >
        {value}
      </motion.span>
    </div>
  );
};

const HistoryCard: React.FC<{ title: string; items: string[]; delay: number }> = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-neutral-50/50 border border-neutral-100 p-6 md:p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all group"
  >
    <h4 className="text-sm md:text-base font-black text-neutral-900 mb-6 flex items-center gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
      {title}
    </h4>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[13px] md:text-[14px] leading-relaxed">
          <span className="text-blue-600 font-black shrink-0">•</span>
          <span className="text-neutral-500 font-medium group-hover:text-neutral-700 transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const About: React.FC = () => {
  const [isQuoteHovered, setIsQuoteHovered] = React.useState(false);
  const [showHistory, setShowHistory] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const profileRotate = useTransform(scrollYProgress, [0.1, 0.4], [-2, 2]);
  const profileY = useTransform(scrollYProgress, [0.1, 0.4], [0, -30]);
  const imageScale = useTransform(scrollYProgress, [0.1, 0.3], [1.1, 1]);

  const timelineData = [
    { year: "2011", label: "초기" }, { year: "2013", label: "도약" },
    { year: "2015", label: "전국" }, { year: "2018", label: "심화" },
    { year: "2019", label: "성장" }, { year: "2020", label: "도입" },
    { year: "2023", label: "확장" }, { year: "", label: "융합" }
  ];

  return (
    <div className="bg-white py-16 md:py-24 overflow-hidden border-t border-neutral-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="flex items-center justify-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <div className="h-[1px] w-6 bg-blue-600/20" />
            </div>
            <h2 className="text-xl md:text-3xl font-black tracking-tighter uppercase font-gothic text-neutral-900">
              HEALING 예술터
            </h2>
          </motion.div>
          <div className="hidden md:flex gap-4 text-[8px] font-black tracking-[0.2em] uppercase text-neutral-300 font-gothic">
            <span className="text-neutral-900">Director</span>
            <span>Portfolio</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-24 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-white aspect-[16/10]">
              <motion.img
                animate={{
                  scale: [1, 1.15, 1],
                  x: [0, -20, 0],
                  y: [0, 10, 0],
                  filter: ["brightness(1) contrast(1)", "brightness(1.1) contrast(1.05)", "brightness(1) contrast(1)"]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop"
                alt="Healing Art Studio"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            <div className="space-y-6 px-2">
              <h3 className="text-lg md:text-2xl font-extrabold text-neutral-900 tracking-tight">Healing Art Perspective</h3>
              <p className="text-neutral-500 text-[13px] md:text-base leading-[2.2] font-medium max-w-xl md:max-w-none text-left">
                2011년 설립 이후, 전국 200여 주요 기관과 국방부 전 군을 무대로 고유한 예술적 가치를 실현해 왔습니다.<br />
                15년의 집요한 현장 전문성은 공동체의 결속을 다짐과 함께 개인의 감각을 깨우는 예술이 되었습니다!<br />
                평범한 일상을 예술적 미학으로 재해석하는 고품격 문화예술교육 프로그램은 삶의 본질을 향한 깊은 통찰과 울림을 제공드리기 위해 기획됩니다!<br />
                우리속에 스며든 예술을 통해 더 나은 세상을 향한 창의적 솔루션을 설계하며, 참여자들의 뜨거운 신뢰와 열정 속에 지속적인 성장을 이뤘습니다.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3 md:gap-4 pt-4"
              >
                <StatItem label="활동기간" value="15년" />
                <StatItem label="누적인원" value="2만명" />
                <StatItem label="만족도" value="97%" />
              </motion.div>

              {/* History Toggle Button */}
              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowHistory(!showHistory)}
                  className="w-full flex items-center justify-between px-8 py-5 rounded-full bg-neutral-900 text-white hover:bg-blue-600 transition-all shadow-xl group"
                >
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase">힐링예술터 주요 활동 실적 (연혁)</span>
                  <motion.div
                    animate={{ rotate: showHistory ? 180 : 0 }}
                    className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expandable History Section */}
        <motion.div
          initial={false}
          animate={{ height: showHistory ? "auto" : 0, opacity: showHistory ? 1 : 0 }}
          className="overflow-hidden mb-24"
        >
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <HistoryCard
              delay={0.1}
              title="1. 문화예술교육 기획 및 총괄 운영 (전국)"
              items={[
                "범국가적 지원사업 수행: 문체부·국방부 주관 '군부대 문화예술교육' 음악 분야 총괄 기획 및 운영",
                "육·해·공군 맞춤형 교육: 전국 전방 부대 및 격오지 대상 수십여 개 맞춤형 커리큘럼 설계",
                "특수 공공기관 교육: 용산경찰서 밴드 강사 파견 및 김포 교육청 '기초학력심리센터' 전담 교육",
                "서울문화재단 전략 프로젝트: 17개 혁신 예술교육 모델(상상음악공장, 뮤지컬 등) 개발 및 보급"
              ]}
            />
            <HistoryCard
              delay={0.2}
              title="2. 장르 통합형 창의 융합 예술 실적"
              items={[
                "수도권 수십여 개교 장기 프로젝트: 동작초(전교생 창의예술체험), 지평초 등 정규 프로그램 운영",
                "지자체 교육지원사업: 서울시(동작·은평·성북), 경기도(김포·시흥) 관내 학교 및 센터 연계",
                "인문·문학 융합 교육: '예술동화탐험' 시리즈를 통한 독서 창작과 시각/음악 활동 복합 설계",
                "미디어 기반 통합 교육: 스마트폰 중독 예방 '밴드 융합 소리놀이' 및 청소년 예술 치유 캠프"
              ]}
            />
            <HistoryCard
              delay={0.3}
              title="3. 시니어 특화 및 생애주기별 정서지원"
              items={[
                "고위험군 시니어 전문 교육: 고양시 대화노인복지관 우울증 및 자살 고위험군(F진단) 정서지원",
                "수도권 주요 복지관 거점 활동: 동작, 중계, 서초, 분당 등 노인종합복지관 상설 교육 진행",
                "특수 케어 및 데이케어: 성심치매노인기관, 역촌데이케어센터, 한우리정보문화센터 지원",
                "가족 보호자 지원: 서초구청 '치매 부양 가족을 위한 예술 정서요법' 등 특화 프로그램"
              ]}
            />
            <HistoryCard
              delay={0.4}
              title="4. 기업 사회공헌(CSR) 및 의료기관 프로젝트"
              items={[
                "글로벌 기업 협력: 사노피 아벤티스('싱싱엔돌픈'), GS칼텍스, 대웅제약 예술 솔루션 제공",
                "주요 대학병원 정서지원: 한강성심(정신과), 여의도성모, 한양대, 고려대 암센터 프로젝트",
                "사회복지재단 연계: 삼성꿈장학재단, 초록우산 어린이재단 등 취약계층 예술 복지 실현"
              ]}
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-24 overflow-x-auto pb-4 scrollbar-hide">
          <div className="min-w-[700px] md:min-w-[900px] relative px-4 mx-auto">
            <div className="absolute top-[40px] md:top-[48px] left-0 w-full h-[1px] bg-neutral-100" />
            <div className="flex justify-between relative z-10">
              {timelineData.map((item, i) => (
                <TimelineItem key={i} index={i} {...item} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center w-full mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl w-full"
          >
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  style={{ rotate: profileRotate, y: profileY }}
                  className="w-[260px] md:w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-white border-4 md:border-8 mb-6 group"
                >
                  <motion.img
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src="/images/profile.jpg"
                    alt="Director Lee Seong-gyeong"
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  />
                </motion.div>

                <div className="text-center">
                  <h4 className="text-2xl md:text-3xl font-black text-neutral-900 font-gothic tracking-tighter mb-1">이성경</h4>
                  <p className="text-blue-600 font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-gothic">Art Director</p>
                </div>
              </div>

              <div className="text-left space-y-10">
                <div className="border-b border-neutral-100 pb-8">
                  <h5 className="text-[9px] font-black text-neutral-300 uppercase tracking-[0.4em] mb-6 font-gothic">Director Insight</h5>
                  <div
                    className="relative cursor-default"
                    onMouseEnter={() => setIsQuoteHovered(true)}
                    onMouseLeave={() => setIsQuoteHovered(false)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {[...Array(16)].map((_, i) => (
                        <GoldSparkle key={i} index={i} isHovered={isQuoteHovered} />
                      ))}
                    </div>
                    <motion.p
                      animate={{
                        color: isQuoteHovered ? "#EAB308" : "#262626", // yellow-500 or neutral-800
                        scale: isQuoteHovered ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-xl md:text-[32px] font-black leading-[1.4] font-gothic tracking-tight"
                    >
                      "예술의 따스한 숨결이 머무는 곳,<br />
                      당신의 삶을 평온하게 다독입니다."
                    </motion.p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h6 className="text-[12px] font-black text-neutral-900 flex items-center justify-start gap-3 font-gothic uppercase tracking-widest">
                    <span className="w-4 h-[2px] bg-blue-600"></span> 주요 약력
                  </h6>
                  <ul className="text-[13px] md:text-[14px] text-neutral-500 space-y-2.5 font-medium leading-tight text-left">
                    <li>• 이화여자대학교 교육대학원 음악치료교육 졸업</li>
                    <li>• 이화여자대학교 문화예술교육원 무용학/음악학 수료</li>
                    <li>• 연세대학교 신학과 졸업</li>
                    <li className="font-bold text-neutral-800">• 前) 국방부 문화예술교육 총괄 기획자</li>
                    <li className="font-bold text-neutral-800">• 前) 서울디지털대학교 음악치료반주법 교수</li>
                    <li>• 前) 이화여자대학교 예술교육치료연구소 연구원</li>
                  </ul>
                </div>

                <div className="pt-4 flex justify-start">
                  <motion.a
                    href={PROF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-4 bg-white border border-neutral-100 px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all group"
                  >
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-neutral-800 font-gothic">Profile Archive</span>
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;