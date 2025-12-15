import React from 'react';
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { COLORS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">상담 문의</h1>
          <p className="text-gray-600 text-lg">
            방문 전 전화 주시면 더욱 빠르고 정확한 상담이 가능합니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
          {/* Main Contact Info */}
          <div className="w-full bg-[#1A365D] p-12 text-white flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold mb-8">대표 전화</h3>
            
            <div className="space-y-6 mb-10 w-full">
              <a href="tel:0316429800" className="flex items-center justify-center bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all cursor-pointer group">
                <Phone className="w-8 h-8 mr-4 text-[#C5A065] group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold tracking-wider">031-642-9800</span>
              </a>
              
              <a href="tel:01064187897" className="flex items-center justify-center bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all cursor-pointer group">
                <Phone className="w-8 h-8 mr-4 text-[#C5A065] group-hover:scale-110 transition-transform" />
                <span className="text-3xl font-bold tracking-wider">010-6418-7897</span>
              </a>
            </div>

            <div className="text-blue-200">
              <p>대표 공인중개사: <span className="text-white font-bold text-lg">권대현</span></p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="w-full bg-white p-12 flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-[#1A365D]" />
                  상담 가능 시간
                </h3>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                   <ul className="space-y-3 text-gray-600">
                      <li className="flex justify-between">
                        <span className="font-medium">평일</span>
                        <span>09:00 - 19:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">토요일</span>
                        <span>전화 예약 상담 가능</span>
                      </li>
                       <li className="flex justify-between">
                        <span className="font-medium">일요일/공휴일</span>
                        <span>전화 예약 상담 가능</span>
                      </li>
                   </ul>
                </div>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-[#1A365D]" />
                  오시는 길
                </h3>
                <p className="text-gray-600 mb-2">
                  경기 이천시 장호원읍 서동대로 8809길 10-36
                </p>
                <p className="text-sm text-gray-500">
                  * 방문하시기 전에 미리 연락주시면 기다리지 않고 상담받으실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
