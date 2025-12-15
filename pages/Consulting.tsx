import React from 'react';
import { CONSULTING_STEPS, COLORS } from '../constants';
import { ClipboardList, Search, Map, Handshake } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const iconMap: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList className="w-8 h-8 text-white" />,
  Search: <Search className="w-8 h-8 text-white" />,
  Map: <Map className="w-8 h-8 text-white" />,
  Handshake: <Handshake className="w-8 h-8 text-white" />,
};

// Mock data for price trends
const data = [
  { year: '2019', price: 65 },
  { year: '2020', price: 72 },
  { year: '2021', price: 85 },
  { year: '2022', price: 92 },
  { year: '2023', price: 105 },
  { year: '2024', price: 118 },
];

const Consulting: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1A365D] py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">부동산 투자 컨설팅</h1>
        <p className="text-gray-300 max-w-2xl mx-auto px-4">
          단순 중개가 아닌, 고객님의 성공적인 자산 증식을 위한 체계적인 솔루션을 제공합니다.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Process Steps */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">
            컨설팅 프로세스
          </h2>
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {CONSULTING_STEPS.map((step) => (
                <div key={step.step} className="bg-white p-6 rounded-lg text-center group">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110"
                    style={{ backgroundColor: COLORS.secondary }}
                  >
                    {iconMap[step.iconName]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Analysis Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              데이터 기반의 <br />
              <span style={{ color: COLORS.secondary }}>과학적 분석</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              장호원 및 이천 남부권은 지속적인 개발 호재와 교통망 확충으로 
              꾸준한 지가 상승세를 보이고 있습니다.<br /><br />
              저희는 단순 감이 아닌, 국토부 실거래가 데이터와 
              도시 계획 분석을 통해 투자가치가 확실한 지역만을 엄선하여 추천드립니다.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[#1A365D] rounded-full mr-3"></span>
                성남-장호원 자동차 전용도로 개통 수혜
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[#1A365D] rounded-full mr-3"></span>
                중부내륙철도 감곡장호원역 역세권 개발
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-[#1A365D] rounded-full mr-3"></span>
                인근 산업단지 조성에 따른 배후 수요 증가
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">장호원읍 평균 지가 상승 추이 (예시)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF'}} unit="만원" />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke={COLORS.primary} 
                    strokeWidth={3} 
                    dot={{ fill: COLORS.secondary, r: 6, strokeWidth: 0 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-gray-400 text-center mt-4">* 위 데이터는 이해를 돕기 위한 예시 자료입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
