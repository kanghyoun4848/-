import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, TrendingUp, ShieldCheck, PieChart, Star, Megaphone, CheckCircle2 } from 'lucide-react';
import ListingCard from '../components/ListingCard';
import { MOCK_LISTINGS, REVIEWS, COLORS } from '../constants';

const Main: React.FC = () => {
  const navigate = useNavigate();
  // Filter out the special listings to show others in the normal grid
  const normalListings = MOCK_LISTINGS.filter(l => !l.id.startsWith('special')).slice(0, 3);
  
  // Get special listings
  const specialBuilding = MOCK_LISTINGS.find(l => l.id === 'special-1');
  const specialLand = MOCK_LISTINGS.find(l => l.id === 'special-2');

  const handleListingClick = (id: string) => {
    navigate(`/listings?id=${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <img 
            src="https://loremflickr.com/1600/900/countryside,landscape" 
            alt="Janghowon Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A365D]/90 to-[#1A365D]/70 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            장호원의 가치를 잇다<br />
            <span style={{ color: COLORS.secondary }}>당신의 미래를 짓다</span>
          </h1>
          <p className="text-lg text-gray-200 mb-8 font-light">
            20년 경력의 토박이 전문가 권대현 대표가 제안하는 확실한 투자 가치
          </p>
          
          <div className="bg-white p-2 rounded-lg shadow-2xl flex flex-col md:flex-row max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="원하시는 지역이나 매물 종류를 검색하세요" 
              className="flex-grow px-4 py-3 text-gray-700 focus:outline-none rounded-md"
            />
            <button 
              className="mt-2 md:mt-0 md:ml-2 px-8 py-3 bg-[#1A365D] text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
              onClick={() => navigate('/listings')}
            >
              <Search className="w-5 h-5 mr-2" />
              매물 검색
            </button>
          </div>
        </div>
      </section>

      {/* SPECIAL RECOMMENDATION SECTION (Highlights) */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Star className="w-8 h-8 text-yellow-500 fill-current mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A365D] text-center">
              전문가 강력 추천 <span className="text-[#C5A065]">특급 매물</span>
            </h2>
            <Star className="w-8 h-8 text-yellow-500 fill-current ml-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Special 1: Commercial Building */}
            {specialBuilding && (
              <div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#1A365D] transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                onClick={() => handleListingClick(specialBuilding.id)}
              >
                <div className="bg-[#1A365D] text-white py-3 px-6 flex justify-between items-center">
                  <span className="font-bold text-lg flex items-center">
                    <Megaphone className="w-5 h-5 mr-2 text-[#C5A065]" />
                    수익형 부동산 강력 추천
                  </span>
                  <span className="bg-[#C5A065] text-[#1A365D] text-xs font-bold px-2 py-1 rounded">HOT</span>
                </div>
                <div className="relative h-64">
                  <img src={specialBuilding.imageUrl} alt={specialBuilding.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                    수익률 10% 이상!
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
                    장호원 시내 시장통 상가 건물 <br/>
                    <span className="text-red-600">6억 5천만원 (가격 조절 가능)</span>
                  </h3>
                  <div className="h-1 w-20 bg-[#C5A065] mb-4"></div>
                  <ul className="space-y-2 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#1A365D] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-bold">지하 1층 ~ 지상 3층 본관 + 원룸 2개 별동 (총 2동)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#1A365D] mr-2 flex-shrink-0 mt-0.5" />
                      <span>장호원 시내 메인 상권 위치, 공실 걱정 없는 요지</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#1A365D] mr-2 flex-shrink-0 mt-0.5" />
                      <span>1가구 2주택 제외 가능, 확실한 노후 대비 매물</span>
                    </li>
                  </ul>
                  <button className="w-full bg-[#1A365D] text-white font-bold py-3 rounded-lg hover:bg-[#152c4e] transition-colors">
                    상세 정보 및 상담 예약
                  </button>
                </div>
              </div>
            )}

            {/* Special 2: Farmland */}
            {specialLand && (
              <div 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#C5A065] transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
                onClick={() => handleListingClick(specialLand.id)}
              >
                <div className="bg-[#C5A065] text-white py-3 px-6 flex justify-between items-center">
                  <span className="font-bold text-lg flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-white" />
                    미래 가치 투자 1순위
                  </span>
                  <span className="bg-[#1A365D] text-white text-xs font-bold px-2 py-1 rounded">급매</span>
                </div>
                <div className="relative h-64">
                  <img src={specialLand.imageUrl} alt={specialLand.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-4 py-2 rounded-full shadow-lg">
                    평당 30만원 파격가
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
                    장호원 선읍리 5,000평 대단지 농지 <br/>
                    <span className="text-red-600">공장/창고/농업법인 최적지</span>
                  </h3>
                  <div className="h-1 w-20 bg-[#1A365D] mb-4"></div>
                   <ul className="space-y-2 mb-6 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A065] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="font-bold">평당 30만원 (총 5,000평) - 주변 시세 대비 저렴</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A065] mr-2 flex-shrink-0 mt-0.5" />
                      <span>농업법인 설립 가능, 공장 및 창고 건축 허가 가능</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A065] mr-2 flex-shrink-0 mt-0.5" />
                      <span>개발 호재 풍부, 지가 상승 기대되는 특급 투자처</span>
                    </li>
                  </ul>
                  <button className="w-full bg-[#C5A065] text-white font-bold py-3 rounded-lg hover:bg-[#b08d55] transition-colors">
                    상세 정보 및 상담 예약
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Listings (Normal) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">장호원/이천 추천 매물</h2>
              <p className="text-gray-600">다양한 조건의 알짜배기 매물을 만나보세요.</p>
            </div>
            <button 
              onClick={() => navigate('/listings')}
              className="hidden md:flex items-center text-[#1A365D] font-medium hover:text-[#C5A065] transition-colors"
            >
              더 많은 매물 보기 <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {normalListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} onClick={handleListingClick} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={() => navigate('/listings')}
              className="inline-flex items-center text-[#1A365D] font-medium"
            >
              전체 매물 보기 <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              단순한 중개를 넘어 고객님의 자산 가치를 높이는 파트너가 되겠습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck className="w-12 h-12 text-[#C5A065]" />,
                title: "20년 무사고 신뢰",
                desc: "지역 토박이로서 쌓아온 신뢰와 명성으로 안전한 거래만을 약속드립니다."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-[#C5A065]" />,
                title: "정확한 권리 분석",
                desc: "복잡한 법률 문제부터 미래 가치 분석까지 전문가의 시각으로 꼼꼼하게 따집니다."
              },
              {
                icon: <PieChart className="w-12 h-12 text-[#C5A065]" />,
                title: "맞춤형 투자 컨설팅",
                desc: "고객님의 예산과 목적에 맞는 최적의 포트폴리오를 1:1로 제안합니다."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">고객 감동 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <div key={review.id} className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                <div className="flex text-[#C5A065] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-semibold">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1A365D]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 무료 상담을 받아보세요</h2>
          <p className="text-lg text-gray-300 mb-10">
            고민하는 시간에도 땅의 가치는 변하고 있습니다.<br className="hidden md:block" />
            전문가와 함께 가장 확실한 기회를 잡으세요.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-10 py-4 bg-[#C5A065] text-white text-lg font-bold rounded-full hover:bg-white hover:text-[#1A365D] transition-all shadow-lg"
          >
            상담 예약하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main;
