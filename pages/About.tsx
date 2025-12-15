import React from 'react';
import { COLORS } from '../constants';
import { Quote, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const address = "경기 이천시 장호원읍 서동대로 8809길 10-36";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="min-h-screen bg-white">
      {/* CEO Greeting Section - Luxury Text Only Design */}
      <div className="relative py-24 md:py-32 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10 flex justify-center">
            <Quote className="w-10 h-10 text-[#C5A065] opacity-50" />
          </div>
          
          <h4 className="text-[#C5A065] font-bold tracking-[0.3em] text-sm uppercase mb-6">
            CEO Message
          </h4>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A365D] leading-tight mb-10 font-serif">
            "땅은 거짓말을 하지 않습니다.<br />
            <span className="relative inline-block mt-2">
              진심을 담아 중개하겠습니다.
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#C5A065] opacity-20 -z-10"></span>
            </span>"
          </h2>

          <div className="w-px h-16 bg-gray-300 mx-auto mb-10"></div>

          <div className="prose prose-lg mx-auto text-gray-600 leading-8 md:leading-10 font-light">
            <p className="mb-8">
              안녕하십니까, 장호원 글로벌 부동산 대표 <strong className="text-[#1A365D]">권대현</strong>입니다.
            </p>
            <p className="mb-8">
              저는 이천시 장호원읍 지역의 지리와 특성을 누구보다 깊이 이해하고 있습니다.<br className="hidden md:inline"/>
              고객님의 소중한 자산을 안전하게 지키고, 확실한 미래 가치를 창출할 수 있는<br className="hidden md:inline"/>
              검증된 매물만을 엄선하여 소개해 드리는 것을 원칙으로 합니다.
            </p>
            <p>
              단순한 중개를 넘어, 고객님의 성공적인 투자를 돕는<br className="hidden md:inline"/>
              가장 든든하고 신뢰할 수 있는 파트너가 되겠습니다.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-gray-200 inline-block px-10">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500 tracking-wider mb-2">장호원 글로벌 부동산 대표 공인중개사</span>
              <span className="font-serif text-3xl text-[#1A365D] font-bold">권 대 현</span>
            </div>
          </div>
        </div>
      </div>

      {/* Office Info & Map Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">오시는 길</h2>
            <div className="w-12 h-1 bg-[#1A365D] mx-auto mb-4"></div>
            <p className="text-gray-500">언제든지 편하게 방문해주시면 친절히 상담해 드리겠습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
             {/* Map Area - Google Maps Embed */}
             <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[450px] w-full relative group">
                <iframe 
                  title="장호원 글로벌 부동산 위치"
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-500"
                  aria-label="장호원 글로벌 부동산 위치 지도"
                ></iframe>
                
                {/* Overlay Buttons for External Maps */}
                <div className="absolute bottom-4 right-4 flex flex-col sm:flex-row gap-2">
                  <a 
                    href={`https://map.kakao.com/link/search/${address}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#FAE100] text-[#3C1E1E] px-4 py-2.5 text-xs font-bold rounded shadow-md hover:bg-[#ffe600] transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                    카카오맵 보기
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white text-gray-700 px-4 py-2.5 text-xs font-bold rounded shadow-md hover:bg-gray-50 border border-gray-200 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 mr-1.5" />
                    구글지도 보기
                  </a>
                </div>
             </div>

             {/* Info Area */}
             <div className="flex flex-col justify-center h-full space-y-8 py-4 pl-0 md:pl-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded bg-[#1A365D]/5 text-[#1A365D]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">주소</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {address}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      (장호원 시내 중심가 / 주차 가능)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded bg-[#1A365D]/5 text-[#1A365D]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">연락처</h3>
                    <p className="text-gray-600 font-medium text-lg">031-642-9800</p>
                    <p className="text-gray-600 font-medium text-lg">010-6418-7897</p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded bg-[#1A365D]/5 text-[#1A365D]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   </div>
                   <div className="ml-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">운영 시간</h3>
                    <p className="text-gray-600">평일: 09:00 - 19:00</p>
                    <p className="text-gray-600">토/일/공휴일: 사전 전화 예약</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;