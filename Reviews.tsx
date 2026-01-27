// Path: components/Reviews.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVIEWS } from './constants';
import { Review } from './types';

const Reviews: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [localReviews, setLocalReviews] = useState<Review[]>(REVIEWS);
  const [passInput, setPassInput] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    program: '',
    content: '',
    rating: 5
  });

  const displayedReviews = localReviews;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Date.now(),
      name: formData.name || "익명 수강생",
      role: formData.role || "일반 수강생",
      program: formData.program || "힐링예술 프로그램",
      content: formData.content || "정말 감동적인 시간이었습니다.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&h=400&auto=format&fit=crop"
    };

    setLocalReviews([newReview, ...localReviews]);
    setFormData({ name: '', role: '', program: '', content: '', rating: 5 });
    handleCloseModal();
    alert('소중한 후기가 등록되었습니다. 감사합니다!');
  };

  const toggleAdmin = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setPassInput(['', '', '', '', '', '']);
      setIsPassModalOpen(true);
    }
  };

  const handlePassChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newPass = [...passInput];
    newPass[index] = value.slice(-1);
    setPassInput(newPass);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !passInput[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (passInput.every(digit => digit !== '')) {
      const fullPass = passInput.join('');
      if (fullPass === '595684') {
        setIsAdmin(true);
        setIsPassModalOpen(false);
        alert('운영자 권한이 활성화되었습니다.');
      } else {
        alert('비밀번호가 일치하지 않습니다.');
        setPassInput(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
    }
  }, [passInput]);

  const handleDeleteReview = (id: number) => {
    if (window.confirm('이 리뷰를 목록에서 영구히 삭제하시겠습니까?')) {
      setLocalReviews(prev => prev.filter(review => review.id !== id));
    }
  };

  return (
    <div id="review" className="bg-white py-24 md:py-32 border-t border-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-blue-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block font-gothic"
            >
              Voices of Harmony
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-gothic font-extrabold mb-4 text-neutral-900 tracking-tighter"
            >
              힐링예술터 프로그램 후기
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-400 text-[11px] md:text-lg font-medium font-gothic whitespace-nowrap overflow-hidden"
            >
              프로그램 수강생이 전하는 생생한 변화의 이야기입니다.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <button
              onClick={handleOpenModal}
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-[11px] md:text-xs font-black tracking-widest uppercase hover:bg-neutral-900 transition-all shadow-xl font-gothic flex items-center gap-3 active:scale-95"
            >
              후기 작성하기
            </button>
          </motion.div>
        </div>
      </div>

      <div className="px-3 max-w-[2400px] mx-auto">
        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {displayedReviews.map((review, idx) => (
            <motion.div
              layout
              key={`${review.id}-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (idx % 20) * 0.02 }}
              viewport={{ once: true, margin: "-20px" }}
              className="break-inside-avoid bg-neutral-50/50 p-4 md:p-5 rounded-[1.5rem] md:rounded-[1.8rem] border border-neutral-100/70 hover:bg-white transition-all duration-300 group relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-gothic font-black text-[13px] md:text-[14px] text-neutral-800 tracking-tight leading-none mb-1">{review.name}</h4>
                  <p className="text-[8px] text-blue-500 font-black uppercase tracking-tighter">{review.role}</p>
                </div>
              </div>
              <p className="text-neutral-500 text-[12px] md:text-[13px] leading-[1.6] font-medium tracking-tight font-gothic">
                "{review.content}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;