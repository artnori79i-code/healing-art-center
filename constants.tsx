// Path: constants.tsx
import { Review, Program } from './types';

export const REVIEWS: Review[] = [
  // Row 1: Soldiers (4)
  { id: 1, name: "김지훈", role: "육군 정훈장교", program: "전우의 달빛 소나타", content: "정훈장교로서 장병들이 음악으로 소통하는 모습에 큰 감명을 받았습니다. 전우애가 선율로 피어나는 시간이었어요. 삭막한 병영 생활에 예술이 스며드니 부대 분위기가 한층 밝아진 것을 실감합니다.", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 2, name: "이아름", role: "공군 대위", program: "하늘 위의 아르페지오", content: "조종사들에게 필요한 정서적 안정을 음악 합주를 통해 찾았습니다. 팀워크의 본질을 예술로 배웠습니다. 복잡한 기계음 사이로 흐르는 악기 소리는 우리에게 진정한 휴식과 집중력을 선물해주었습니다.", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 3, name: "박준서", role: "해병대 상병", program: "무적의 리듬", content: "훈련의 고단함을 젬베 비트에 실어 보냈습니다. 동기들과 박자를 맞출 때 비로소 하나가 됨을 느꼈습니다. 거친 파도 소리보다 더 강렬한 울림이 제 가슴 속 열정을 다시 깨워준 소중한 경험이었습니다.", image: "https://images.unsplash.com/photo-1550186082-670cdd604276?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 11, name: "임동혁", role: "육군 하사", program: "부사관 감성 리더십", content: "대원들을 이해하는 새로운 관점을 가졌습니다. 부드러운 선율이 강한 부대를 만듭니다. 지시와 통제가 아닌 예술을 통한 공감의 소통 방식이 얼마나 효과적인지 체험하며 지휘 역량을 키우는 계기가 되었습니다.", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400&h=400&auto=format&fit=crop" },

  // Row 2-3: Mixed (8)
  { id: 4, name: "최민수", role: "대학생(음악전공)", program: "청춘 앙상블", content: "전공자로서도 배울 점이 많은 깊이 있는 커리큘럼이었습니다. 소통하는 음악의 가치를 알게 되었습니다. 기술적인 완성을 넘어 마음을 나누는 합주가 얼마나 큰 힘을 가졌는지 깨닫는 전환점이 되었습니다.", image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 5, name: "강민준", role: "대학생(공대)", program: "코드 & 멜로디", content: "좌뇌만 쓰던 일상에 우뇌의 감성을 깨워준 소중한 경험입니다. 우쿨렐레 소리가 너무 예뻐요. 공식과 숫자에서 벗어나 오직 소리에만 집중하는 시간 동안 머릿속이 맑아지고 새로운 아이디어가 솟아났습니다.", image: "https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 6, name: "이지윤", role: "초등학교 교사", program: "교사 힐링 연수", content: "아이들에게 줄 에너지를 여기서 채워갑니다. 예술이 주는 위로가 정말 큽니다. 수업을 준비하며 지쳤던 마음이 동료 교사들과 하모니를 맞추며 치유되었고, 아이들에게 더 따뜻한 시각을 가질 수 있게 되었습니다.", image: "https://images.unsplash.com/photo-1490750967868-886ec002c21c?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 7, name: "정현우", role: "IT 기업 팀장", program: "오피스 심포니", content: "부서원들과 말보다 악기로 대화하니 벽이 허물어지더군요. 최고의 팀빌딩 프로그램입니다. 딱딱한 회의실 대신 자유로운 연습실에서 마주한 동료들의 웃음소리가 우리 팀의 새로운 원동력이 되었습니다.", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 8, name: "한송이", role: "간호사", program: "선율의 휴식", content: "환자들을 돌보느라 소진됐던 마음이 음악으로 다시 살아났습니다. 나를 위한 시간이었습니다. 매일 긴박한 현장에서 잊고 지냈던 내면의 목소리를 아름다운 선율을 통해 마주하며 다시 시작할 힘을 얻었습니다.", image: "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 12, name: "서유나", role: "대학생", program: "방학 예술 캠프", content: "다양한 전공의 친구들과 화음을 맞추며 인맥도 쌓고 감성도 충전했습니다. 낯선 사람들과 음악이라는 공통분모 아래 하나가 되는 마법 같은 경험이었고, 제 대학 생활 중 가장 잊지 못할 여름날의 추억이 되었습니다.", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 13, name: "윤준호", role: "직장인", program: "퇴근 후 밴드", content: "업무 스트레스가 드럼 비트에 싹 날아갔습니다. 제 안의 열정을 다시 발견했어요. 지루했던 반복적인 일상이 드림 비트와 함께 리드미컬하게 바뀌었고, 매주 기다려지는 이 시간 덕분에 회사 생활도 더 즐거워졌습니다.", image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 14, name: "고서윤", role: "작가", program: "예술적 상상력", content: "창작의 고통에서 벗어나 자유롭게 리듬을 타는 즐거움을 느꼈습니다. 영감이 솟아납니다. 모니터 앞에서는 절대 나오지 않던 따뜻한 감각들이 악기를 연주하고 소통하는 과정에서 자연스럽게 흘러나와 다음 작품의 토대가 되었습니다.", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=400&h=400&auto=format&fit=crop" },

  // Row 4+ Sparse Seniors (4) & Remaining Soldiers (5) & Others
  { id: 15, name: "김철수", role: "사회복지사", program: "나눔의 하모니", content: "현장에서 고군분투하는 우리 동료들에게 꼭 필요한 공감의 시간이었습니다. 남을 돕기 위해 정작 돌보지 못했던 우리들의 내면을 예술로 어루만져주었고, 다시 누군가에게 따뜻한 손길을 건넬 에너지를 가득 채웠습니다.", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 24, name: "권오진", role: "해군 중사", program: "파도 위의 심포니", content: "함상 생활의 단조로움을 음악이라는 취미로 채우니 전우애가 더욱 돈독해졌습니다. 힘든 임무 수행 중에도 우리가 함께 맞춘 박자를 떠올리면 큰 위안이 되었고, 바다 한가운데서도 문화의 향기를 누릴 수 있어 너무 감사했습니다.", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 9, name: "오영수", role: "시니어(72세)", program: "두 번째 청춘 악기", content: "이 나이에도 무언가를 배울 수 있다는 게 꿈만 같습니다. 인생의 하이라이트 무대였어요. 손끝에서 피어나는 멜로디와 함께 제 인생에도 새로운 봄날이 찾아온 것 같아 매일 아침 악기를 만지는 순간이 설렙니다.", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=400&h=400&auto=format&fit=crop" }, // Senior 1
  { id: 22, name: "백경훈", role: "공군 소령", program: "창공의 선율", content: "비행 뒤에 오는 긴장감을 클래식 음악으로 다스렸습니다. 하늘 위에서 느꼈던 자유로움을 악기 연주를 통해 지상에서도 경험하는 특별한 매순간이 제 삶의 새로운 원천이 되었습니다.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&h=400&auto=format&fit=crop" }, // Soldier 6
  { id: 16, name: "장미숙", role: "주부", program: "맘스 콰이어", content: "엄마라는 이름 뒤에 숨겨진 '나'의 목소리를 찾았습니다. 노래하는 제가 너무 예뻐 보여요. 가사 일에 치여 잊고 지냈던 저만의 빛나는 색깔을 합창단 활동을 통해 되찾았고, 가족들에게도 더 밝고 건강한 에너지를 전하게 되었습니다.", image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 21, name: "홍지민", role: "육군 중위", program: "최전방의 하모니", content: "장병들과 함께 화음을 맞추며 군복 뒤에 숨겨진 꿈과 감성을 발견했습니다. 서로의 다름을 인정하는 과정은 그 어떤 훈련보다 값진 실전 리더십의 완성이었으며, 최전방에 예술의 온기를 더했습니다.", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&h=400&auto=format&fit=crop" }, // Soldier 7
  { id: 10, name: "박순자", role: "시니어(68세)", program: "실버 리듬 합창단", content: "친구들과 함께 노래하며 우울함을 떨쳐냈습니다. 매주 이 시간이 기다려집니다. 혼자라고 느꼈던 시간들이 같은 목소리를 내는 동료들 덕분에 활기로 채워졌고, 제 삶의 가장 빛나는 화음을 찾았습니다.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=400&auto=format&fit=crop" }, // Senior 2
  { id: 25, name: "신혜수", role: "특전사 중사", program: "강철의 비트", content: "강인함 속에 숨겨진 부드러운 감성을 젬베 연주로 표현했습니다. 극한의 훈련 속에서도 리듬을 타는 즐거움을 알게 되었고, 전우들과 소통하는 새로운 언어를 배워 팀워크가 한층 견고해졌습니다.", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&h=400&auto=format&fit=crop" }, // Soldier 8
  { id: 17, name: "한지혜", role: "대학원생", program: "논문 탈출 예술제", content: "꽉 막혔던 머리가 클래식 감상과 드로잉으로 시원하게 뚫렸습니다. 삶의 균형을 찾았어요. 지적 노동에만 치우쳐 있던 삶에 감성적인 자극을 주어 사고의 유연성을 얻었고, 덕분에 연구 과정도 한층 즐거워지는 놀라운 경험을 했습니다.", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 23, name: "소예지", role: "해병대 병장", program: "필승의 멜로디", content: "전역을 앞두고 기타를 배우며 사회로 나갈 용기를 얻었습니다. 해병대의 패기에 예술의 감성을 더하니 세상이 더 넓게 보였고, 선임과 후임이 음악으로 하나 되는 잊지 못할 병영 생활의 마지막 추억을 만들었습니다.", image: "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a?q=80&w=400&h=400&auto=format&fit=crop" }, // Soldier 9
  { id: 19, name: "김은지", role: "시니어 수강생", program: "회상 음악 활동", content: "과거의 기억들을 예술로 빚어내며 인생을 긍정하게 됐습니다. 참 따뜻한 시간이었어요. 잊고 지냈던 어린 시절의 노래와 악기 소리를 통해 삶의 발자취를 되돌아보니, 제 인생의 모든 순간이 소중한 작품이었음을 깨닫게 되었습니다.", image: "https://images.unsplash.com/photo-1551029122-0396dd32675d?q=80&w=400&h=400&auto=format&fit=crop" }, // Senior 3
  { id: 18, name: "유승현", role: "공무원", program: "공공기관 소통 워크숍", content: "경직된 조직 문화가 음악 하나로 유연해지는 기적을 봤습니다. 모두가 즐거워했습니다. 직급과 부서를 떠나 오직 소리에 집중하며 서로를 마주 보니 인간적인 유대감이 형성되었고, 업무 능률도 함께 상승하는 효과를 보았습니다.", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 20, name: "정태호", role: "취업 준비생", program: "자신감 비트", content: "면접 공포증을 타악기 연주로 이겨냈습니다. 제 안의 당당한 소리를 들었습니다. 위축되어 있던 제 자신이 드럼의 강한 비트와 함께 힘차게 고동치는 것을 느꼈고, 이제는 어떤 무대에서도 제 목소리를 낼 수 있는 자신감으로 무장하게 되었습니다.", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 26, name: "도경완", role: "직장인", program: "주말 첼로 클래스", content: "악기 하나 다루는 것이 제 삶에 이렇게 큰 생동감을 줄지 몰랐습니다. 성취감이 어마어마합니다. 첼로의 낮은 저음이 제 일상의 소음들을 덮어줄 때 진정한 고독과 조우하며, 한 주의 피로를 씻어내고 다시 월요일을 맞이할 근력을 키웠습니다.", image: "https://images.unsplash.com/photo-1522868293962-f67fba9ad3b5?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 27, name: "우미나", role: "전통예술인", program: "크로스오버 워크숍", content: "국악의 선율과 서양 악기가 만나 새로운 우주를 만드는 과정에 참여하며 창작의 지평을 넓혔습니다. 전통을 고수하면서도 현대적인 감각과 소통하는 법을 배워 예술가로서 한 걸음 더 도약하는 계기가 된 뜻깊은 시간이었습니다.", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 22, name: "김재훈", role: "구청 공무원", program: "힐링 아트 데이", content: "지역 주민들과 어우러져 예술을 즐기는 모습에서 진정한 자치 교육의 의미를 찾았습니다. 행정적인 업무를 넘어 주민들의 행복한 웃음소리를 보며 제 일에 대한 보람을 다시 느꼈고, 문화로 하나 되는 마을의 가능성을 보았습니다.", image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400&h=400&auto=format&fit=crop" }, // Name changed to 김재훈 (탁재훈 -> 김재훈)
  { id: 29, name: "채송화", role: "원예관리사", program: "꽃과 음악의 대화", content: "식물을 가꾸듯 제 마음을 음악으로 가꾸는 법을 알게 된 신비롭고 아름다운 시간이었습니다. 꽃의 향기와 소리의 울림이 조화를 이룰 때 느껴지는 깊은 안식은 그 어떤 명약보다 치유적이었고, 생명을 사랑하는 마음이 더욱 깊어졌습니다.", image: "https://images.unsplash.com/photo-1490750967868-886ec002c21c?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 30, name: "남궁훈", role: "은퇴 교육자", program: "인생 제2막 아카이브", content: "수십 년간 교단을 지켰던 엄격함 대신 예술의 자유로움으로 제 노년을 꾸미게 되어 기쁩니다. 제가 직접 연주하는 음악이 제 인생의 마지막 장을 장식하는 사운드트랙처럼 느껴지며, 매일을 보물처럼 여기는 새로운 삶의 자세를 갖게 되었습니다.", image: "https://images.unsplash.com/photo-1506197394121-6a01799dc891?q=80&w=400&h=400&auto=format&fit=crop" } // Senior 4
];

export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "국방부 프로그램",
    description: "군장병들의 정서적 유대와 사기 진작을 위한 고품격 문화예술교육 공연 및 버스킹 프로그램<br/><span class='text-[10px] md:text-[11px] font-black text-red-500 mt-2 block'>\"본 사진들은 병영문화예술 홍보를 위해 담당장교의 승인하에 게시된 저작물입니다. 무단 배포 및 상업적 이용을 금합니다.\" [ⓒ 힐링예술터 All rights reserved]</span>",
    image: "/images/cat_army.png",
    color: "bg-blue-600",
    subPrograms: [
      {
        id: "d1",
        title: "병영문화예술체험교육 (체험형)",
        sessions: "8회기 이상",
        participants: "20명 내외",
        content: "악기 연주 기초부터 합주까지, 장병들이 직접 음악팀을 구성하고 연습할 수 있도록 전문가가 밀착 지도합니다. 책임감과 협동심을 기를 수 있는 장기 교육 과정입니다. 병영문화생활의 복지를 향상 합니다! <br/><br/><span class='text-spangle-box'>* 힐링예술터는 15년간의 군장병 문화예술교육 기획으로 군장병들의 교육과정 니즈와 선호도를 잘 파악하고 있어 매주 참여율이 굉장히 높습니다!</span>",
        image: "/images/army_program_1.png?v=3",
        youtubeUrl: "https://youtu.be/AiXyLolD6A4"
      },
      {
        id: "d2",
        title: "군장병 문화예술교육 (중/장기교육)",
        sessions: "단기/중장기",
        participants: "전 장병",
        content: "매주 1회씩 문화예술교육을 진행합니다! 부대 일정에 맞춰 5주차 미만, 10주차 미만, 중장기 교육을 진행합니다! 병영 생활에 활력을 불어넣습니다. 장병들과 가까이서 호흡하는 예술교육입니다. <br/><br/><span class='text-spangle-box'>부대에서 2년 연속 매해 신청할 정도로 재참여율 및 신청률이 높습니다!</span>",
        image: "/images/army_program_2_v2.png",
        youtubeUrl: "https://youtu.be/cmc5f3t0Kb0"
      },
      {
        id: "d3",
        title: "대대/중대별 문화예술교육",
        sessions: "매주 1회",
        participants: "20~150명 (부대 단위별)",
        content: "부대 규모(대대/중대)에 최적화된 맞춤형 문화예술교육 시스템을 제공합니다. 대단위 정기 교육부터 소규모 집중 합주 워크숍까지, 부대 일정과 여건에 맞춘 유연한 커리큘럼 운영이 가능합니다. <br /><br />예술적 소통과 악기 합주를 통해 장병 상호 간의 심리적 벽을 허물고 유대를 강화합니다. 자기 이해와 타인 공감을 실천하는 과정 속에서 조직의 단결력을 고취하고 병영 생활의 활력을 극대화하는 전문 프로젝트입니다.",
        image: "/images/army_program_3_clean.png",
        youtubeUrl: "https://youtu.be/P25i5tIAfXg?si=EBfI63nfW_Jo3ah6"
      },
      {
        id: "d4",
        title: "병영문화예술 소개교육",
        sessions: "60분 내외",
        participants: "50~200명 내외",
        content: "일일 체험형 예술을 매개로 병영 내 유연한 단결 문화를 정착시키는 문화예술교육 워크숍입니다. 악기 합주 과정은 장병 간의 심리적 거리감을 해소하며, 협업을 통한 실질적인 유대와 정서적 공감대를 형성합니다. <br /><br />장병들의 문화적 소외감을 해소하는 동시에 고유한 심미적 경험을 제공하며, 참여형 합주 구성을 통해 강력한 그룹 성취감과 단합력을 고취합니다. 몰입도 높은 예술적 활동을 통해 직무 스트레스를 관리하고, 병영 생활의 에너지를 생산적이고 창의적인 예술 경험으로 재구조화하는 전문 문화예술교육 프로그램입니다.",
        image: "/images/army_program_4_v2.jpg"
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
        title: "고품격 문화예술교육 워크샵",
        sessions: "주 1회 (상시)",
        participants: "기관협의",
        content: "의뢰하신 기업 및 기관의 특성과 워크숍 주제에 따라 섬세하게 기획되는 맞춤형 문화예술교육입니다. 예술의 힐링 요소를 깊이 있게 결합하여 조직의 '단합, 화합, 성취감'을 예술적 감수성과 치유적 에너지로 승화시킵니다. 조직 실정에 맞는 창의적 커리큘럼을 통해 구성원 모두가 예술적 하모니 속에서 진정한 연대와 내면의 회복을 경험하며, 일상에 새로운 영감과 활력을 불어넣는 프리미엄 문화예술 솔루션입니다.",
        image: "/images/workshop_program.png"
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
        image: "/images/arts_program_3.jpg?v=2"
      },
      {
        id: "m4",
        title: "찾아가는 예술 학교",
        sessions: "협의 가능",
        participants: "학교 및 기관협의",
        content: "지리적 경계와 환경적 제약에 구애받지 않고, 예술의 향기가 필요한 모든 곳으로 전문 교육의 빛을 전합니다. 힐링예술터의 독보적인 커리큘럼을 지닌 강사진이 직접 현장을 방문하여 누구나 고품격 예술 복지를 누릴 수 있도록 지원하며, 일상을 특별한 예술 무대로 변화시키는 따뜻하고 혁신적인 교육 서비스입니다.",
        image: "/images/arts_program_4.jpg?v=2"
      }
    ]
  },
  {
    id: 3,
    title: "예술 체험 프로그램",
    description: "일상의 스트레스를 비워내고 예술적 감수성을 채우는 프리미엄 예술 프로그램",
    image: "/images/cat_healing.jpg",
    color: "bg-indigo-600",
    subPrograms: [
      {
        id: "h1",
        title: "프리미엄 예술체험 프로젝트",
        sessions: "8~10회",
        participants: "8명 내외",
        content: "전문 예술가와 교육전문가가 정교하게 설계한 예술적 여정을 통해 마음의 깊은 결을 어루만집니다. 억눌려 있던 감정을 선율과 색채로 풀어내며 정서적 안정을 장려하고, 심리적 회복탄력성을 높여 흔들리는 일상 속에서도 스스로를 단단하게 지탱할 수 있는 마음의 중심을 세워주는 심도 깊은 예술 체험 프로젝트입니다.",
        image: "/images/healing_program_v2_1.jpg"
      },
      {
        id: "h2",
        title: "사운드 배스 명상",
        sessions: "1회(원데이)",
        participants: "20명 내외",
        content: "싱잉볼과 텅드럼이 자아내는 신비로운 파동의 울림 속에 전신을 맡깁니다. 소리의 공명이 몸의 세포 하나하나를 깨우고 깊은 명상의 세계로 안내하여, 뇌파를 안정시키고 신체의 긴장을 완화해주는 휴식형 프로그램입니다. 예술적 도구가 전하는 순수한 울림을 통해 진정한 '비움'의 평온을 경험하게 됩니다.",
        image: "/images/healing_program_2_v2.jpg"
      },
      {
        id: "h3",
        title: "직장인 번아웃 예방 워크숍",
        sessions: "2시간",
        participants: "임직원",
        content: "치열한 업무 현장에서 잠시 벗어나 예술이라는 쉼표를 찍습니다. 예술적 유희와 즉흥적인 표현 활동을 통해 소진된 에너지를 충전하고, 정서적 환기를 유도하여 조직 내의 경직된 소통을 유연하게 바꿉니다. 창의적 자극을 통해 번아웃을 예방하고 다시 일상으로 나아갈 수 있는 건강한 생명력을 불어넣는 맞춤형 솔루션입니다.",
        image: "/images/healing_program_3_v2.jpg"
      },
      {
        id: "h4",
        title: "공공기관-복지관 예술 융합 클래스",
        sessions: "8회기 내외",
        participants: "기관협의",
        content: "복지관과 센터의 소중한 회원 및 직원들을 위해 설계된 고품격 예술 복지 서비스입니다. 음악과 다감각 예술 활동을 결합하여 자존감을 단단히 높이고, 흩어진 집중력을 선율 위로 모으는 창의적인 경험을 선사합니다. 함께 마음을 나누는 과정을 통해 사회적 고립감을 해소하고, 개개인의 삶에 반짝이는 예술적 활력과 긍정적인 자아 정체성을 선물하는 따뜻한 치유의 시간입니다.",
        image: "/images/healing_program_4_new.jpg"
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
        title: "마음의 선율로 그리는 은빛 미소 (노인 우울 예방 예술 교육)",
        sessions: "12회기",
        participants: "15명 내외",
        content: "다채로운 악기의 음색으로 뇌를 깨우고, 잊혀진 기억의 편린들을 아름다운 선율 위에 다시 수놓습니다. 리듬에 맞춰 몸과 마음을 움직이며 고립감의 벽을 허물고, 서로의 하모니 속에서 활력을 되찾는 예술적 신경 자극 중심의 집단 예술 프로그램입니다.",
        image: "/images/senior_program_healing_1.jpg"
      },
      {
        id: "s2",
        title: "인생 피날레 성취 우쿨렐레 앙상블",
        sessions: "8회기 이상",
        participants: "10명",
        content: "생애 최고의 무대를 향한 감동의 도전입니다. 한 번도 만져보지 못했던 다양한 악기를 배우고, 동료들과 우쿨렐레 화음을 맞추며 '해냈다'는 벅찬 감동을 경험합니다. 인생 제2막의 주인공으로서 무대 위에서 자신의 목소리를 당당히 내는 성취감 중심의 우쿨렐레 앙상블 프로젝트입니다.",
        image: "/images/senior_program_2_v2.jpg"
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
        title: "실버 힐링 예술 댄스!",
        sessions: "주 1회 상시",
        participants: "20명 이상",
        content: "음악에 맞춰 함께 자유롭게 춤을 추며, 악기를 연주하며 모두 예술가가 되어 봅니다. 음악에 맞춰 악기를 연주하고 자유롭게 춤추는 활동은 신체적 건강은 물론, 공동체 안에서 소속감을 느끼며 외로움을 떨쳐내는 활기찬 사회 활동 프로그램입니다.",
        image: "/images/senior_program_4_new.jpg"
      }
    ]
  }
];
