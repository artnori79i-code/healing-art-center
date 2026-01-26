import { Review, Program } from './types';

export const REVIEWS: Review[] = [
  { id: 1, name: "김지훈", role: "육군 정훈장교", program: "전우의 달빛 소나타", content: "정훈장교로서 장병들이 음악으로 소통하는 모습에 큰 감명을 받았습니다. 전우애가 선율로 피어나는 시간이었어요.", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 2, name: "이아름", role: "공군 대위", program: "하늘 위의 아르페지오", content: "조종사들에게 필요한 정서적 안정을 음악 합주를 통해 찾았습니다. 팀워크의 본질을 예술로 배웠습니다.", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&h=400&auto=format&fit=crop" }
];

export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "국방부 프로그램",
    description: "군장병들의 정서적 유대와 사기 진작을 위한 고품격 문화예술교육 공연 및 버스킹",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&h=600&auto=format&fit=crop",
    color: "bg-blue-600",
    subPrograms: [
      { id: "d1", title: "체험형 문화예술교육", sessions: "1회", participants: "50~300명", content: "군장병들이 직접 악기를 만지고 연주하며 동료들과 하모니를 맞추는 실습 중심 교육입니다." }
    ]
  },
  {
    id: 2,
    title: "문화예술교육 프로그램",
    description: "음악의 기초부터 앙상블까지, 전문 강사진과 함께하는 체계적인 예술 여정",
    image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=800&h=600&auto=format&fit=crop",
    color: "bg-emerald-600",
    subPrograms: [
      { id: "m1", title: "전문 악기 마스터 클래스", sessions: "주 1회", participants: "개인", content: "음악 전공 강사진의 1:1 맞춤 지도를 통해 연주 실력을 향상시키는 과정입니다." }
    ]
  }
];