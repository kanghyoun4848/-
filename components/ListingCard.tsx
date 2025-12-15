import React from 'react';
import { MapPin, Maximize, ArrowRight } from 'lucide-react';
import { Listing } from '../types';
import { COLORS } from '../constants';

interface ListingCardProps {
  listing: Listing;
  onClick: (id: string) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
      onClick={() => onClick(listing.id)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={listing.imageUrl} 
          alt={listing.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-opacity-90 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white" style={{ backgroundColor: COLORS.primary }}>
          {listing.category === 'Land' ? '토지/임야' : listing.category === 'House' ? '전원주택' : '상가/건물'}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
           <span className="text-white font-bold text-lg">{listing.price}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 truncate group-hover:text-[#1A365D] transition-colors">
          {listing.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-[#C5A065]" />
            {listing.location}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Maximize className="w-4 h-4 mr-2 text-[#C5A065]" />
            {listing.area}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {listing.features.map((feature, idx) => (
            <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              #{feature}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">상세보기</span>
          <ArrowRight className="w-4 h-4 text-[#1A365D] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
