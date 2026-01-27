// Path: constants.tsx
import { Review, Program } from './types';

export const REVIEWS: Review[] = [
  { id: 1, name: "김지훈", role: "육군 정훈장교", program: "전우의 달빛 소나타", content: "정훈장교로서 장병들이 음악으로 소통하는 모습에 큰 감명을 받았습니다. 전우애가 선율로 피어나는 시간이었어요.", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 2, name: "이아름", role: "공군 대위", program: "하늘 위의 아르페지오", content: "조종사들에게 필요한 정서적 안정을 음악 합주를 통해 찾았습니다. 팀워크의 본질을 예술로 배웠습니다.", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 3, name: "박준서", role: "해병대 상병", program: "무적의 리듬", content: "훈련의 고단함을 젬베 비트에 실어 보냈습니다. 동기들과 박자를 맞출 때 비로소 하나가 됨을 느꼈습니다.", image: "https://images.unsplash.com/photo-1550186082-670cdd604276?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 4, name: "최민수", role: "대학생(음악전공)", program: "청춘 앙상블", content: "전공자로서도 배울 점이 많은 깊이 있는 커리큘럼이었습니다. 소통하는 음악의 가치를 알게 되었습니다.", image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 5, name: "강민준", role: "대학생(공대)", program: "코드 & 멜로디", content: "좌뇌만 쓰던 일상에 우뇌의 감성을 깨워준 소중한 경험입니다. 우쿨렐레 소리가 너무 예뻐요.", image: "https://images.unsplash.com/photo-1440508319978-8b681ba5e733?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 6, name: "이지윤", role: "초등학교 교사", program: "교사 힐링 연수", content: "아이들에게 줄 에너지를 여기서 채워갑니다. 예술이 주는 위로가 정말 큽니다.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 7, name: "정현우", role: "IT 기업 팀장", program: "오피스 심포니", content: "부서원들과 말보다 악기로 대화하니 벽이 허물어지더군요. 최고의 팀빌딩 프로그램입니다.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 8, name: "한송이", role: "간호사", program: "선율의 휴식", content: "환자들을 돌보느라 소진됐던 마음이 음악으로 다시 살아났습니다. 나를 위한 시간이었습니다.", image: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 9, name: "오영수", role: "시니어(72세)", program: "두 번째 청춘 악기", content: "이 나이에도 무언가를 배울 수 있다는 게 꿈만 같습니다. 인생의 하이라이트 무대였어요.", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 10, name: "박순자", role: "시니어(68세)", program: "실버 리듬 합창단", content: "친구들과 함께 노래하며 우울함을 떨쳐냈습니다. 매주 이 시간이 기다려집니다.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 11, name: "임동혁", role: "육군 하사", program: "부사관 감성 리더십", content: "대원들을 이해하는 새로운 관점을 가졌습니다. 부드러운 선율이 강한 부대를 만듭니다.", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 12, name: "서유나", role: "대학생", program: "방학 예술 캠프", content: "다양한 전공의 친구들과 화음을 맞추며 인맥도 쌓고 감성도 충전했습니다.", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 13, name: "윤준호", role: "직장인", program: "퇴근 후 밴드", content: "업무 스트레스가 드럼 비트에 싹 날아갔습니다. 제 안의 열정을 다시 발견했어요.", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 14, name: "고서윤", role: "작가", program: "예술적 상상력", content: "창작의 고통에서 벗어나 자유롭게 리듬을 타는 즐거움을 느꼈습니다. 영감이 솟아납니다.", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 15, name: "김철수", role: "사회복지사", program: "나눔의 하모니", content: "현장에서 고군분투하는 우리 동료들에게 꼭 필요한 공감의 시간이었습니다.", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 16, name: "장미숙", role: "주부", program: "맘스 콰이어", content: "엄마라는 이름 뒤에 숨겨진 '나'의 목소리를 찾았습니다. 노래하는 제가 너무 예뻐 보여요.", image: "https://images.unsplash.com/photo-1520608421741-68228b76b63c?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 17, name: "한지혜", role: "대학원생", program: "논문 탈출 예술제", content: "꽉 막혔던 머리가 클래식 감상과 드로잉으로 시원하게 뚫렸습니다. 삶의 균형을 찾았어요.", image: "https://images.unsplash.com/photo-1559519529-bb559fe2d2bd?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 18, name: "유승현", role: "공무원", program: "공공기관 소통 워크숍", content: "경직된 조직 문화가 음악 하나로 유연해지는 기적을 봤습니다. 모두가 즐거워했습니다.", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 19, name: "김은지", role: "시니어 수강생", program: "회상 음악 활동", content: "과거의 기억들을 예술로 빚어내며 인생을 긍정하게 됐습니다. 참 따뜻한 시간이었어요.", image: "https://images.unsplash.com/photo-1551029122-0396dd32675d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 20, name: "정태호", role: "취업 준비생", program: "자신감 비트", content: "면접 공포증을 타악기 연주로 이겨냈습니다. 제 안의 당당한 소리를 들었습니다.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop" }
];

export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "국방부 프로그램",
    description: "군장병들의 정서적 유대와 사기 진작을 위한 고품격 문화예술교육 공연 및 버스킹 프로그램<br/><span class='text-[11px] md:text-[12px] font-black text-red-500 mt-2 block'>* 본 사진들은 담당장교의 승낙하에 사용되는 사진으로 불펌 금지입니다!</span>",
    image: "/images/cat_army.png",
    color: "bg-blue-600",
    subPrograms: [
      {
        id: "d1",
        title: "병영문화예술체험교육 (체험형)",
        sessions: "8회기 이상",
        participants: "20명 내외",
        content: "악기 연주 기초부터 합주까지, 장병들이 직접 음악팀을 구성하고 연습할 수 있도록 전문가가 밀착 지도합니다. 책임감과 협동심을 기를 수 있는 장기 교육 과정입니다. 병영문화생활의 복지를 향상 합니다! <br/><br/><b class='text-red-600 font-bold'>* 힐링예술터는 15년간의 군장병 문화예술교육 기획으로 군장병들의 니즈와 선호도를 잘 파악하고 있고 이에 맞춰 교육을 진행해 참여율이 굉장히 높습니다^^!</b>",
        image: "/images/army_program_2.jpg"
      },
      {
        id: "d2",
        title: "군장병 문화예술교육",
        sessions: "단기/중장기",
        participants: "전 장병",
        content: "매주 1회씩 문화예술교육을 진행합니다! 부대 일정에 맞춰 5주차 미만, 10주차 미만, 중장기 교육을 진행합니다! 병영 생활에 활력을 불어넣습니다. 장병들과 가까이서 호흡하는 예술교육입니다. <br/><br/><b class='text-red-600 font-bold'>부대에서 2년 연속 매해 신청할 정도로 재참여율 및 신청률이 높습니다!</b>",
        image: "/images/army_program_1.png"
      },
      {
        id: "d3",
        title: "병영문화예술 소개교육",
        sessions: "1일 4시간",
        participants: "50~200명 내외",
        content: "일일 체험형 예술을 매개로 자기 이해와 타인 공감을 실천하는 소통 중심 워크숍입니다. 본 활동은 장병 상호 간의 유대를 강화하고 악기를 통해 스트레스를 해소하는 시간입니다.",
        image: "/images/army_program_3.jpg"
      },
      {
        id: "d4",
        title: "찾아가는 버스킹",
        sessions: "60분 내외",
        participants: "부대 신청인원에 맞춰 조율 가능함",
        content: "전문 아티스트들이 직접 부대를 방문하여 품격 있는 음악과 예술 공연을 선사합니다. 장병들의 문화적 갈증을 해소하고 정서적 안정을 돕는 프로젝트입니다.",
        image: "/images/army_program_4.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "문화예술교육 프로그램",
    description: "음악의 기초부터 앙상블까지, 전문 강사진과 함께하는 체계적인 예술 여정",
    image: "/images/cat_culture.jpg",
    color: "bg-emerald-600",
    subPrograms: [
      {
        id: "m1",
        title: "전문 악기 마스터 공연 클래스",
        sessions: "주 1회 (상시)",
        participants: "기관협의",
        content: "단순한 기술 습득을 넘어, 악기와 연주자가 하나의 호흡으로 연결되는 몰입의 시간을 선사합니다. 음악 전공 강사진의 1:1 맞춤 지도를 통해 섬세한 테크닉부터 깊이 있는 예술적 해석까지 마스터하며, 자신만의 독창적인 음악적 언어를 발견하고 공연으로 완성하는 비약적인 성장을 경험하는 최고급 전문 교육 과정입니다.",
        image: "/images/arts_program_1.jpg"
      },
      {
        id: "m2",
        title: "창의 융합 예술 캠프",
        sessions: "12회기",
        participants: "단체 및 기관협의",
        content: "경계를 허무는 예술적 실험실에서 음악과 미술, 그리고 미디어가 하나로 어우러집니다. 다양한 장르를 넘나드는 프로젝트형 수업을 통해 고정관념을 탈피하고, 참가자 상호 간의 유기적인 협업으로 상상력의 한계를 확장하며 세상에 없던 새로운 예술적 결과물을 빚어내는 역동적인 체험형 캠프입니다.",
        image: "/images/arts_program_2.jpg"
      },
      {
        id: "m3",
        title: "문화예술 놀이터",
        sessions: "단기/중장기",
        participants: "학교 및 기관협의",
        content: "서로 다른 우리가 만나 하나의 거대한 하모니를 이루는 과정 속에서 소통의 진정한 의미를 배웁니다. 놀이+악기합주가 결합된 프로그램입니다. 또래 친구들과 악기를 통해 대화하며 타인의 소리에 귀 기울이는 법을 익히고, 공감의 깊이를 더해가며 음악적 완성도뿐만 아니라 다양한 색깔 놀이와 더불어 공동체 의식과 자아존중감을 높여주는 아동 및 청소년 맞춤형 앙상블 프로젝트입니다.",
        image: "/images/arts_program_3.jpg"
      },
      {
        id: "m4",
        title: "찾아가는 예술 학교",
        sessions: "협의 가능",
        participants: "학교 및 기관협의",
        content: "지리적 경계와 환경적 제약에 구애받지 않고, 예술의 향기가 필요한 모든 곳으로 전문 교육의 빛을 전합니다. 힐링예술터의 독보적인 커리큘럼을 지닌 강사진이 직접 현장을 방문하여 누구나 고품격 예술 복지를 누릴 수 있도록 지원하며, 일상을 특별한 예술 무대로 변화시키는 따뜻하고 혁신적인 교육 서비스입니다.",
        image: "/images/arts_program_4.jpg"
      }
    ]
  },
  {
    id: 3,
    title: "예술 치유 프로그램",
    description: "일상의 스트레스를 비워내고 예술적 감수성을 채우는 프리미엄 예술 프로그램",
    image: "/images/cat_healing.jpg",
    color: "bg-indigo-600",
    subPrograms: [
      {
        id: "h1",
        title: "프리미엄 예술치유 프로젝트",
        sessions: "8~10회",
        participants: "8명 내외",
        content: "전문 예술치료사와 음악치료사가 정교하게 설계한 예술적 여정을 통해 마음의 깊은 결을 어루만집니다. 억눌려 있던 감정을 선율과 색채로 풀어내며 정서적 안정을 회복하고, 심리적 회복탄력성을 높여 흔들리는 일상 속에서도 스스로를 단단하게 지탱할 수 있는 마음의 중심을 세워주는 심도 깊은 예술 치유 프로젝트입니다.",
        image: "/images/healing_program_1.jpg"
      },
      {
        id: "h2",
        title: "사운드 배스 테라피",
        sessions: "1회(원데이)",
        participants: "20명 내외",
        content: "싱잉볼과 텅드럼이 자아내는 신비로운 파동의 목욕 속에 전신을 맡깁니다. 소리의 공명이 몸의 세포 하나하나를 깨우고 깊은 명상의 세계로 안내하여, 뇌파를 안정시키고 신체의 긴장을 마법처럼 완화해주는 휴식형 테라피입니다. 예술적 도구가 전하는 순수한 울림을 통해 진정한 '비움'의 평온을 경험하게 됩니다.",
        image: "/images/healing_program_2.jpg"
      },
      {
        id: "h3",
        title: "직장인 번아웃 예방 워크숍",
        sessions: "2시간",
        participants: "임직원",
        content: "치열한 업무 현장에서 잠시 벗어나 예술이라는 쉼표를 찍습니다. 예술적 유희와 즉흥적인 표현 활동을 통해 소진된 에너지를 충전하고, 정서적 환기를 유도하여 조직 내의 경직된 소통을 유연하게 바꿉니다. 창의적 자극을 통해 번아웃을 예방하고 다시 일상으로 나아갈 수 있는 건강한 생명력을 불어넣는 맞춤형 솔루션입니다.",
        image: "/images/healing_program_3.jpg"
      },
      {
        id: "h4",
        title: "공공기관-복지관 예술 융합 클래스",
        sessions: "8회기 내외",
        participants: "기관협의",
        content: "복지관과 센터의 소중한 회원 및 직원들을 위해 설계된 고품격 예술 복지 서비스입니다. 음악과 다감각 예술 활동을 결합하여 자존감을 단단히 높이고, 흩어진 집중력을 선율 위로 모으는 창의적인 경험을 선사합니다. 함께 마음을 나누는 과정을 통해 사회적 고립감을 해소하고, 개개인의 삶에 반짝이는 예술적 활력과 긍정적인 자아 정체성을 선물하는 따뜻한 치유의 시간입니다.",
        image: "/images/healing_program_4.jpg"
      }
    ]
  },
  {
    id: 4,
    title: "시니어 프로그램",
    description: "새로운 리듬으로 열어가는 인생 제2막, 활기찬 노년을 위한 맞춤형 예술 활동",
    image: "/images/cat_senior.jpg",
    color: "bg-orange-600",
    subPrograms: [
      {
        id: "s1",
        title: "액티브 실버 인지 활력 프로그램",
        sessions: "12회기",
        participants: "15명 내외",
        content: "예술의 색채로 뇌를 깨우는 지적 유희의 시간입니다. 음악적 자극과 신체 리듬 활동을 결합하여 인지 기능을 강화하고, 뇌세포의 활력을 찾아가는 예술적 신경 자극 프로그램입니다. 잊고 있던 기억의 조각들을 선율 위에 다시 놓으며 건강한 노년의 지혜를 지켜냅니다.",
        image: "/images/senior_program_1.jpg"
      },
      {
        id: "s2",
        title: "인생 피날레 성취 우쿨렐레 앙상블",
        sessions: "8회기 이상",
        participants: "10명",
        content: "생애 최고의 무대를 향한 감동의 도전입니다. 한 번도 만져보지 못했던 다양한 악기를 배우고, 동료들과 우쿨렐레 화음을 맞추며 '해냈다'는 벅찬 감동을 경험합니다. 인생 제2막의 주인공으로서 무대 위에서 자신의 목소리를 당당히 내는 성취감 중심의 우쿨렐레 앙상블 프로젝트입니다.",
        image: "/images/senior_program_2.jpg"
      },
      {
        id: "s3",
        title: "회상 감성 음악 합주 교실",
        sessions: "10회",
        participants: "15명",
        content: "그 시절 소중한 추억이 깃든 노래를 매개로 인생을 돌아보고 긍정합니다. 과거의 반짝이던 순간들을 노래와 함께 악기로 합주하며 노년의 소외감을 해소하고, 같은 시대를 살아온 이들과 깊은 정서적 유대감을 형성하는 감성 회생 커리큘럼입니다.",
        image: "/images/senior_program_3.jpg"
      },
      {
        id: "s4",
        title: "실버 리듬 하모니 합창단",
        sessions: "주 1회 상시",
        participants: "20명 이상",
        content: "함께 목소리를 높여 하나의 거대한 하모니를 빚어냅니다. 합창 활동을 통해 폐활량을 증진하는 신체적 건강은 물론, 공동체 안에서 소속감을 느끼며 외로움을 떨쳐내는 활기찬 사회 활동 프로그램입니다. 정기 악기+노래 연주회를 통해 가족과 이웃에게 감동을 전합니다.",
        image: "/images/senior_program_4.jpg"
      }
    ]
  }
];
