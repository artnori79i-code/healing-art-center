import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

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
  const [isHovered, setIsHovered] = useState(false);
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

const HistoryCard: React.FC<{ title: string; items: React.ReactNode[]; delay: number }> = ({ title, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-neutral-50/50 border border-neutral-100 p-6 md:p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all group"
  >
    <motion.h4
      initial={{ x: -10, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: delay + 0.2, type: "spring", stiffness: 100 }}
      className="text-sm md:text-base font-black text-neutral-900 mb-6 flex items-center gap-3"
    >
      <motion.span
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 2, delay: delay }}
        className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-lg shadow-blue-200"
      ></motion.span>
      {title}
    </motion.h4>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[13px] md:text-[14px] leading-relaxed">
          <span className="text-blue-600 font-black shrink-0">•</span>
          <span className="text-neutral-500 font-medium group-hover:text-neutral-700 transition-colors">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);


const About: React.FC = () => {
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [showExpertise, setShowExpertise] = useState(false);
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

        <motion.div
          initial={false}
          animate={{ height: showHistory ? "auto" : 0, opacity: showHistory ? 1 : 0 }}
          className="overflow-hidden mb-24"
        >
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <HistoryCard
              delay={0.1}
              title="1. 문화예술교육 기획 및 총괄 운영 실적 (전국 단위)"
              items={[
                <>범국가적 문화예술지원사업 수행: <b>문화체육관광부</b> 및 <b>국방부</b> 주관 <b>'군부대 문화예술교육 지원사업'</b> 음악 분야 <b>[힐링예술터]</b> 총괄 기획 및 운영</>,
                <><b>육·해·공군 및 해병대</b> 맞춤형 교육: 인천, 강화, 화성, 안산, 강원도 철원, 백령도, 연평도 등 <b>전국 전방 부대 및 격오지</b> 대상 수십여 개 <b>군부대 문화예술교육/소개교육/군장병 공연 교육</b> 커리큘럼 설계</>,
                <>특수 공공기관 상설 교육: <b>용산경찰서 [2013-2016]</b>의경대상 밴드 예술 교육 기획 및 <b>경기도여성비전센터 '문화예술교육 통합 리더십'</b>교육 기획</>,
                <><b>서울문화재단</b> 전략 프로젝트: <b>성북예술창작센터 [이성경-힐링예술터] 4년간</b> 입주작가로서 '상상음악공장', '동물의 왕국 뮤지컬', '새소망 노래 녹음방' 등 <b>17개 혁신 교육 모델</b> 개발</>,
                <><b>서울시청 평생교육센터</b>, <b>서울시 드림스타트 센터 '예술로 놀자!'</b> 프로그램 기획 및 개발 참여</>
              ]}
            />
            <HistoryCard
              delay={0.2}
              title="2. 장르 통합형 창의 융합 예술 실적"
              items={[
                <><b>문화체육관광부</b> 산하 <b>한국문화예술교육진흥원(ARTE) '오감충족'</b> 전통놀이음악극 개발 및 공연 기획/운영/연구</>,
                <><b>100여개 초·중·고교</b> 문화예술교육 기획 및 교육 협약, 전교생 대상 장기 프로젝트: <b>동작초등학교</b>(전교생 대상 창의예술체험), <b>서울시 교육청</b> 등 수도권 수십여 개교와 협력하여 학기별 정규 프로그램 운영</>,
                <><b>광역 지자체</b> 교육지원사업: <b>서울시</b>(동작구, 은평구, 성북구 등), <b>경기도</b>(김포, 시흥 등) 관내 학교 및 센터 연계 예술 교육 서비스 제공</>,
                <>인문·문학 융합 교육: <b>어린이도서연구회</b> 협력 '예술동화탐험' 시리즈를 통한 독서 창작과 시각/음악 활동의 복합 설계</>,
                <>미디어 기반 통합 교육: <b>세종시</b> 협력 <b>스마트폰·인터넷 중독 예방</b>을 위한 '밴드 융합 소리놀이' 및 세종시 청소년 <b>예술 체험 캠프</b> 운영</>
              ]}
            />
            <HistoryCard
              delay={0.3}
              title="3. 시니어 특화 및 생애주기별 정서지원 실적"
              items={[
                <><b>고위험군 시니어 전문 교육</b>: <b>고양시 대화노인종합복지관</b> 우울증 및 자살 고위험군(F진단) 대상 예술 정서지원</>,
                <>수도권 <b>주요 노인종합복지관</b> 거점 활동: <b>동작, 중계, 서초, 분당</b> 등 주요 노인종합복지관 대상 상설 문화예술 교육 세션 진행</>,
                <>특수 케어 및 데이케어: <b>성심치매노인기관, 역촌데이케어센터, 한우리정보문화센터</b> 등 돌봄 기반 예술 활동 지원</>,
                <>가족 및 보호자 지원: <b>서초구청 '치매 부양 가족을 위한 예술 정서요법'</b> 등 <b>보호자 대상 힐링 프로그램</b> 특화</>,
                <><b>중랑구청</b> 파견 <b>원광종합사회복지관</b> 노인돌봄 <b>문화예술교육 프로그램 기획 및 설계 연구</b></>
              ]}
            />
            <HistoryCard
              delay={0.4}
              title="4. 기업 사회공헌(CSR) 및 의료기관 문화예술교육+예술체험 실적"
              items={[
                <><b>글로벌 기업</b> 협력 실적: <b>사노피 아벤티스</b>('싱싱엔돌핀', '함께해송'), <b>GS칼텍스</b>, <b>대웅제약</b> 등 기업 연계 예술 솔루션 제공</>,
                <><b>주요 대학병원 환자 정서지원</b>: <b>한강성심(신경정신), 여의도성모, 한양대, 고려대병원 암센터</b> 등 의료 현장 내 <b>문화예술교육 +예술체험</b> 접목 교육 적용</>,
                <><b>2014 사노피 아벤티스</b> 제약회사 후원사업 운영 <b>&lt;'암생존자/ 암환우 대상': '함께해송 프로그램' 기획자 및 주강사&gt;</b></>,
                <><b>(사)세계예술교육협회 &lt;세계예술체험축제: 장애-비장애형제를 위한 왁자지껄 예술체험축제, 아싸라비아!&gt; 10년 이상 매해 꾸준히</b> 참여 함</>,
                <><b>사회복지재단</b> 협력: <b>삼성꿈장학재단, 초록우산 어린이재단, 하이패밀리</b> 등과 연계한 취약계층 예술 복지 실현</>
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
            <div className="grid md:grid-cols-[1.2fr_2fr] gap-10 md:gap-16 items-start">
              {/* Left Column: Photo & Name */}
              <div className="flex flex-col items-center sticky top-24">
                <motion.div
                  style={{ rotate: profileRotate, y: profileY }}
                  className="w-full aspect-[3.1/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-white border-8 mb-8 group relative"
                >
                  <motion.img
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src="/images/profile.jpg"
                    alt="Director Lee Seong-gyeong"
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                </motion.div>

                <div className="text-center space-y-2">
                  <h4 className="text-3xl md:text-4xl font-black text-neutral-900 font-gothic tracking-tighter">이성경</h4>
                  <p className="text-blue-600 font-black text-[11px] tracking-[0.4em] uppercase font-gothic">Art Director</p>
                </div>
              </div>

              {/* Right Column: Narrative & Buttons */}
              <div className="space-y-12">
                {/* 1. Director Insight (Quote) */}
                <div className="border-b border-neutral-100 pb-10">
                  <h5 className="text-[10px] font-black text-neutral-300 uppercase tracking-[0.4em] mb-6 font-gothic">Director Insight</h5>
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
                        color: isQuoteHovered ? "#EAB308" : "#171717",
                        scale: isQuoteHovered ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl md:text-[36px] font-black leading-[1.3] font-gothic tracking-tight"
                    >
                      "예술의 따스한 숨결이 머무는 곳,<br />
                      당신의 삶을 평온하게 다독입니다."
                    </motion.p>
                  </div>
                </div>

                {/* 2. Key Experience (Always Visible) */}
                <div className="space-y-6">
                  <h6 className="text-[12px] font-black text-neutral-900 flex items-center gap-3 font-gothic uppercase tracking-widest">
                    <span className="w-4 h-[2px] bg-blue-600"></span> 주요 약력
                  </h6>
                  <ul className="text-[14px] text-neutral-500 space-y-3 font-medium leading-relaxed">
                    <li>• 이화여자대학교 교육대학원 음악치료 교육학과 졸업</li>
                    <li>• 이화여자대학교 문화예술교육원 무용학/음악학 수료</li>
                    <li>• 연세대학교 신학과 졸업</li>
                    <li className="font-bold text-neutral-800">• 前) 국방부 문화예술교육 총괄 기획자</li>
                    <li className="font-bold text-neutral-800">• 前) 서울디지털대학교 음악교육 반주법 교수</li>
                    <li>• 前) 이화여자대학교 예술교육연구소 연구원</li>
                  </ul>
                </div>

                {/* 3. Three Button Row */}
                <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.a
                    href={PROF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between px-6 py-5 rounded-full bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all group"
                  >
                    <span className="text-[9px] font-black tracking-[0.1em] uppercase text-neutral-800">Profile Archive</span>
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowPhilosophy(!showPhilosophy);
                      setShowExpertise(false);
                    }}
                    className={`flex items-center justify-between px-6 py-5 rounded-full transition-all shadow-sm hover:shadow-md border ${showPhilosophy ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-neutral-800 border-neutral-100'}`}
                  >
                    <span className="text-[9px] font-black tracking-[0.1em] uppercase">Director's Philosophy</span>
                    <motion.div animate={{ rotate: showPhilosophy ? 180 : 0 }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowExpertise(!showExpertise);
                      setShowPhilosophy(false);
                    }}
                    className={`flex items-center justify-between px-6 py-5 rounded-full transition-all shadow-sm hover:shadow-md ${showExpertise ? 'bg-blue-600 text-white' : 'bg-neutral-900 text-white'}`}
                  >
                    <span className="text-[9px] font-black tracking-[0.1em] uppercase">Professional Expertise</span>
                    <motion.div animate={{ rotate: showExpertise ? 180 : 0 }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Expandable Sections Below */}
            <div className="mt-12 space-y-12">
              <motion.div
                initial={false}
                animate={{ height: showPhilosophy ? "auto" : 0, opacity: showPhilosophy ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="bg-neutral-50/50 rounded-[3rem] p-10 md:p-14 border border-neutral-100/50 space-y-10">
                  <div className="text-center space-y-4">
                    <span className="text-blue-600 font-black text-[10px] tracking-widest uppercase block">Philosophy</span>
                    <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-gothic leading-tight tracking-tighter">
                      통합 예술교육을 향한 15년의 사유
                    </h2>
                    <div className="w-12 h-1 bg-blue-600/20 mx-auto rounded-full" />
                  </div>
                  
                  <div className="max-w-4xl mx-auto space-y-10">
                    <p className="text-lg md:text-2xl text-neutral-800 leading-relaxed font-black text-center italic font-gothic">
                      “음악의 본질적 힘을 매개로, 일상과 예술을 잇는 <br className="hidden md:block" /> 통합적 교육 모델을 실천합니다.”
                    </p>
                    
                    <div className="max-w-2xl mx-auto space-y-8 text-neutral-500 leading-relaxed font-medium">
                      <p className="text-[15px] md:text-base">
                        저는 지난 15년이라는 시간 동안, 음악이 지닌 단단한 구조적 아름다움과 따스한 정서적 위로가 어떻게 다른 예술 장르, 그리고 우리 삶의 교육적 가치와 맞닿을 수 있을지 깊이 고민해 왔습니다. 학문적으로는 <b>'Music Therapy'</b>라는 토대 위에서 성장했으며, 이를 우리 곁의 보편적인 문화예술교육 안에서 그 치유적 온기로 자연스럽게 녹여내고자 마음을 다해왔습니다.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-10 pt-4">
                        <div className="space-y-3">
                          <span className="text-[14px] font-black text-neutral-900 block font-gothic tracking-wider">감각의 확장과 융합</span>
                          <p className="text-[14px] leading-relaxed">음악의 리듬과 선율이 신체의 부드러운 움직임이 되고, 다시 시각적인 형상화와 인문학적 성찰로 이어지는 <b>'통합예술교육'</b>을 연구합니다. 이러한 고유의 교수법을 현장에 조심스럽게 적용하며 예술의 경계가 허물어지는 지점을 발견해 왔습니다.</p>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[14px] font-black text-neutral-900 block font-gothic tracking-wider">일상의 예술화</span>
                          <p className="text-[14px] leading-relaxed">예술은 특별한 재능을 가진 이들만의 영역이 아니라고 믿습니다. 평범한 개인의 일상을 미학적으로 재해석하고 소중하게 기록하는 따스한 교육적 도구로 활용될 수 있도록, 예술의 문턱을 낮추고 그 깊이를 채우는 데 집중합니다.</p>
                        </div>
                        <div className="md:col-span-2 space-y-3 pt-4 border-t border-neutral-200/50">
                          <span className="text-[14px] font-black text-neutral-900 block font-gothic tracking-wider">현장의 집요함</span>
                          <p className="text-[14px] leading-relaxed">15년 동안 현장에서 마주한 수많은 삶의 결들은 저에게 큰 가르침을 주었습니다. 예술이 단순히 지식을 전달하는 것을 넘어, 사람의 마음을 보듬고 우리 공동체를 회복시키는 '문화적 처방'이 될 수 있음을 매 순간 가슴으로 체득해 왔습니다.</p>
                        </div>
                      </div>
                      
                      <p className="text-center text-[15px] md:text-base text-neutral-800 font-extrabold pt-6">
                        거창한 성과를 내세우기보다는, 예술의 온기가 필요한 곳에서 <br className="hidden md:block"/> 참여자분들과 함께 숨 쉬며 지속 가능한 통합 예술교육의 모델을 겸허히 실천해 나가겠습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={false}
                animate={{ height: showExpertise ? "auto" : 0, opacity: showExpertise ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-[4rem] p-10 md:p-16 border border-neutral-100 shadow-2xl space-y-16">
                  <div className="text-center space-y-4">
                    <span className="text-blue-600 font-black text-[10px] tracking-widest uppercase block">Expertise Directory</span>
                    <h2 className="text-2xl md:text-3xl font-black text-neutral-900 font-gothic leading-tight tracking-tighter">
                      “음악적 본질을 바탕으로 예술의 경계를 넓히는 통합 예술교육가”
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 font-black text-xs font-gothic">01</span>
                        </div>
                        <span className="text-[15px] font-black text-neutral-900 uppercase tracking-wider font-gothic">핵심 전문성 (Core Expertise)</span>
                      </div>
                      <ul className="text-[14px] text-neutral-500 space-y-3 pl-14 leading-relaxed font-medium">
                        <li>• <b>KCMT(음악중재전문가)</b> 전문 Music Therapist 자격</li>
                        <li>• 이화여자대학교 교육대학원 연구원 과정 수료</li>
                        <li>• 음악의 구조적 요소를 교육적 매개체로 활용하는 <b>통합문화예술교육 교수법</b> 구축</li>
                      </ul>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 font-black text-xs font-gothic">02</span>
                        </div>
                        <span className="text-[15px] font-black text-neutral-900 uppercase tracking-wider font-gothic">예술적 외연 확장 (Artistic Expansion)</span>
                      </div>
                      <div className="pl-14 space-y-4">
                        <div className="text-[11px] text-blue-600/70 font-black italic tracking-widest uppercase font-gothic">
                          Ewha Arts & Culture Education Center / <br /> Institute for Continuing Education
                        </div>
                        <ul className="text-[14px] text-neutral-500 space-y-3 leading-relaxed font-medium">
                          <li>• 무용지도사 / 체형교정발레 지도사 / 영어발레 지도사</li>
                          <li>• <b>신체 중심 교육(Movement-based Education)</b> 체계 수립</li>
                          <li>• 이화여자대학교 유아아동무용지도사 자격</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 font-black text-xs font-gothic">03</span>
                        </div>
                        <span className="text-[15px] font-black text-neutral-900 uppercase tracking-wider font-gothic">교육적 통찰 (Educational Insight)</span>
                      </div>
                      <ul className="text-[14px] text-neutral-500 space-y-3 pl-14 leading-relaxed font-medium">
                        <li>• <b>인성지도사, 미술심리상담사, 독서성품지도사</b> 자격증</li>
                        <li>• 예술 활동 내면의 심미적 경험을 인문학적 성품과 자기 주도적 창의성으로 연결하는 <b>통합 커리큘럼 설계</b></li>
                      </ul>
                    </div>

                    <div className="space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                          <span className="text-blue-600 font-black text-xs font-gothic">04</span>
                        </div>
                        <span className="text-[15px] font-black text-neutral-900 uppercase tracking-wider font-gothic">글로벌 학술 연구 (Global Research)</span>
                      </div>
                      <ul className="text-[14px] text-neutral-500 space-y-3 pl-14 leading-relaxed font-medium">
                        <li>• <b>Nordoff-Robbins Music Therapy Program</b>, Clive Robbins 워크숍 수료</li>
                        <li>• Music Therapy 양적 연구방법(<b>SPSS 데이터 분석</b>) 전문</li>
                        <li>• 예술교육 효과성의 데이터 기반 분석적 접근</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
