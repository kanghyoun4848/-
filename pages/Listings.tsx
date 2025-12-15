import React, { useState } from 'react';
import ListingCard from '../components/ListingCard';
import { MOCK_LISTINGS, COLORS } from '../constants';
import { Listing } from '../types';

const Listings: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Land' | 'House' | 'Commercial'>('All');

  const filteredListings = filter === 'All' 
    ? MOCK_LISTINGS 
    : MOCK_LISTINGS.filter(l => l.category === filter);

  const categories = [
    { id: 'All', label: '전체' },
    { id: 'Land', label: '토지/임야' },
    { id: 'House', label: '전원주택' },
    { id: 'Commercial', label: '상가/건물' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">추천 매물</h1>
          <p className="text-gray-600">장호원 및 인근 지역의 알짜배기 매물을 확인하세요.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-[#1A365D] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1A365D] hover:text-[#1A365D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.length > 0 ? (
            filteredListings.map(listing => (
              <ListingCard 
                key={listing.id} 
                listing={listing} 
                onClick={(id) => console.log(`Navigate to details for ${id}`)} 
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              조건에 맞는 매물이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;
