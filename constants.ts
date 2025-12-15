import { Listing, NavItem, Review, ConsultingStep } from './types';

export const COLORS = {
  primary: '#1A365D', // Navy
  secondary: '#C5A065', // Gold/Warm Gray
  background: '#F7F9FC',
  textMain: '#1A202C',
  textSub: '#4A5568',
};

export const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '추천 매물', path: '/listings' },
  { label: '투자 컨설팅', path: '/consulting' },
  { label: '부동산 소개', path: '/about' },
  { label: '상담 예약', path: '/contact' },
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: 'special-1',
    title: '[주인직접/가격조절] 장호원 시내 알짜 상가 건물',
    category: 'Commercial',
    price: '6억 5,000만원 (조절 가능)',
    location: '이천시 장호원읍 시장통 메인',
    area: '본관(B1~3F) + 별동(원룸2) / 총 2동',
    description: '장호원 시내 시장통 핵심 요지. 월세 세팅 시 수익률 10% 이상 가능. 공실 걱정 없는 확실한 투자처.',
    imageUrl: 'https://loremflickr.com/800/600/modern,retail,building,facade',
    features: ['수익률10%↑', '가격조절가능', '시내중심', '1가구2주택제외'],
  },
  {
    id: 'special-2',
    title: '[초급매] 선읍리 5,000평 대단지 농지',
    category: 'Land',
    price: '평당 30만원 (총 15억)',
    location: '이천시 장호원읍 선읍리',
    area: '5,000평',
    description: '주변 시세 파괴 초급매! 농업법인 설립 및 공장/창고 건축 가능. 개발 호재 풍부하여 지가 상승 확실시.',
    imageUrl: 'https://loremflickr.com/800/600/green,hill,field',
    features: ['초급매', '공장설립가능', '농업법인추천', '개발호재'],
  },
  {
    id: 'apt-1',
    title: '장호원 코아루 아파트 급매',
    category: 'House',
    price: '2억 7,000만원',
    location: '이천시 장호원읍',
    area: '34평형',
    description: '로얄층, 전망 최상. 즉시 입주 가능하며 내부 상태 매우 깨끗함.',
    imageUrl: 'https://loremflickr.com/800/600/apartment,modern',
    features: ['로얄층', '급매', '전망굿', '즉시입주'],
  },
  {
    id: 'naver-1',
    title: '장호원읍 대서리 계획관리 토지',
    category: 'Land',
    price: '평당 65만원',
    location: '장호원읍 대서리',
    area: '350평',
    description: '2차선 도로 접, 창고 부지 추천. 남향으로 일조량 풍부.',
    imageUrl: 'https://loremflickr.com/800/600/land,road',
    features: ['계획관리', '도로접', '창고추천'],
  },
  {
    id: 'naver-2',
    title: '설성면 금당리 신축 전원주택',
    category: 'House',
    price: '3억 8,000만원',
    location: '이천시 설성면 금당리',
    area: '대지 180평 / 건평 35평',
    description: '모던한 인테리어, 넓은 잔디 마당. 주말 주택으로 최적.',
    imageUrl: 'https://loremflickr.com/800/600/house,garden',
    features: ['신축', '잔디마당', '조망권'],
  },
  {
    id: 'naver-3',
    title: '율면 산성리 과수원 부지',
    category: 'Land',
    price: '2억 5,000만원',
    location: '이천시 율면 산성리',
    area: '1,000평',
    description: '현재 복숭아 농장 운영 중. 귀농귀촌 추천 매물.',
    imageUrl: 'https://loremflickr.com/800/600/orchard,farm',
    features: ['귀농추천', '생산관리', '유실수'],
  },
  {
    id: 'naver-4',
    title: '장호원 역세권 투자용 답',
    category: 'Land',
    price: '평당 120만원',
    location: '장호원읍 노탑리',
    area: '600평',
    description: '감곡장호원역 인근, 향후 지가 상승 기대 지역.',
    imageUrl: 'https://loremflickr.com/800/600/field,train',
    features: ['역세권', '투자용', '미래가치'],
  },
  {
    id: 'naver-5',
    title: '상가 주택 통매매',
    category: 'Commercial',
    price: '9억원',
    location: '장호원읍 주거밀집지역',
    area: '대지 90평 / 연면적 150평',
    description: '1층 편의점 입점 성업 중. 안정적인 임대 수익.',
    imageUrl: 'https://loremflickr.com/800/600/store,street',
    features: ['공실없음', '코너건물', '수익형'],
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: '박** 고객님',
    rating: 5,
    text: '권대현 대표님 덕분에 좋은 상가 건물을 매입했습니다. 수익률 분석이 정말 정확하시네요.',
    date: '2023.11.15',
  },
  {
    id: 'r2',
    author: '이** 고객님',
    rating: 5,
    text: '장호원 지역 토지는 역시 이곳이 제일 물건이 많습니다. 친절한 상담 감사합니다.',
    date: '2023.12.02',
  },
  {
    id: 'r3',
    author: '최** 고객님',
    rating: 4,
    text: '주말 농장용 땅을 구했는데 도로 사정까지 꼼꼼히 체크해주셔서 믿음이 갔습니다.',
    date: '2024.01.20',
  },
];

export const CONSULTING_STEPS: ConsultingStep[] = [
  {
    step: 1,
    title: '유선 상담',
    description: '전화로 방문 예약 및 기본적인 투자 방향을 설정합니다.',
    iconName: 'ClipboardList',
  },
  {
    step: 2,
    title: '매물 브리핑',
    description: '사무소에 방문하여 조건에 맞는 최적의 매물을 확인합니다.',
    iconName: 'Search',
  },
  {
    step: 3,
    title: '현장 임장',
    description: '대표 공인중개사와 함께 현장을 직접 확인하고 분석합니다.',
    iconName: 'Map',
  },
  {
    step: 4,
    title: '안전 계약',
    description: '등기부터 세무 상담까지 안전하게 계약을 마무리합니다.',
    iconName: 'Handshake',
  },
];
