import React from 'react';
import { MapPin, Phone, User } from 'lucide-react';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.secondary }}>
              장호원 글로벌 부동산
            </h3>
            <div className="text-gray-400 text-sm leading-relaxed mb-4 space-y-2">
              <p>경기 이천시 장호원읍 서동대로 8809길 10-36</p>
              <p>대표 공인중개사: 권대현</p>
              <p>중개사무소 등록번호: 제41500-2024-00000호</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">빠른 메뉴</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#/listings" className="hover:text-white transition-colors">추천 매물 보기</a></li>
              <li><a href="#/consulting" className="hover:text-white transition-colors">투자 컨설팅 안내</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors">오시는 길</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">상담 예약</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">문의 안내</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-[#C5A065] flex-shrink-0" />
                <span>경기 이천시 장호원읍 서동대로 8809길 10-36</span>
              </li>
              <li className="flex items-center">
                <User className="w-5 h-5 mr-2 text-[#C5A065] flex-shrink-0" />
                <span>대표 권대현</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#C5A065] flex-shrink-0" />
                <div className="flex flex-col">
                  <span>031-642-9800</span>
                  <span>010-6418-7897</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 장호원 글로벌 부동산. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
