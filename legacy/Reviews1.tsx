import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from './constants';

const Reviews: React.FC = () => {
  const displayedReviews = REVIEWS;

  return (
    <div id="review" className="bg-white py-24 border-t border-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block font-gothic"
          >
            Voices of Harmony
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-gothic font-extrabold mb-4 text-neutral-900 tracking-tighter">
            힐링예술터 프로그램 후기
          </h2>
        </div>
      </div>

      <div className="px-6 max-w-[2400px] mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {displayedReviews.map((review, idx) => (
            <div key={idx} className="break-inside-avoid bg-neutral-50/50 p-6 rounded-[1.8rem] border border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <img src={review.image} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-gothic font-black text-sm text-neutral-800">{review.name}</h4>
                  <p className="text-[9px] text-blue-500 font-black uppercase">{review.role}</p>
                </div>
              </div>
              <p className="text-neutral-500 text-[13px] leading-relaxed font-gothic">"{review.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;