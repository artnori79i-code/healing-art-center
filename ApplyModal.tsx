// Path: components/ApplyModal.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [ip, setIp] = useState<string>('Loading...');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: '문화예술교육 프로그램',
    message: '',
    privacyAgreed: false
  });

  useEffect(() => {
    if (isOpen) {
      fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => setIp(data.ip))
        .catch(() => setIp('Unknown'));
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`[힐링예술터 프로그램 신청] ${formData.name}님`);
    const body = encodeURIComponent(
      `이름: ${formData.name}\n` +
      `연락처: ${formData.phone}\n` +
      `신청 프로그램: ${formData.program}\n` +
      `문의 및 요청사항: ${formData.message}\n\n` +
      `--------------------------\n` +
      `수신처: 힐링예술터 (486sk@naver.com)\n` +
      `사용자 IP: ${ip}`
    );

    try {
      window.location.href = `mailto:486sk@naver.com?subject=${subject}&body=${body}`;

      const stored = localStorage.getItem('healing_applications');
      const apps = stored ? JSON.parse(stored) : [];
      apps.unshift({
        id: Date.now().toString(),
        name: formData.name,
        phone: formData.phone,
        program: formData.program,
        message: formData.message,
        date: new Date().toLocaleString(),
        ip: ip
      });
      localStorage.setItem('healing_applications', JSON.stringify(apps));

      await new Promise(resolve => setTimeout(resolve, 800));
      alert('신청서 작성이 완료되었습니다.\n메일 프로그램이 열리면 [보내기]를 눌러 최종 전송을 완료해주세요.');

      onClose();
      setFormData({
        name: '',
        phone: '',
        program: '문화예술교육 프로그램',
        message: '',
        privacyAgreed: false
      });
    } catch (error) {
      console.error('Submission Error:', error);
      alert('오류가 발생했습니다. 카카오톡 채널을 통해 문의해주시면 감사하겠습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Minimal Artistic Header */}
            <div className="bg-blue-600 px-8 py-6 text-white relative shrink-0 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-gothic font-black tracking-tighter uppercase">PROGRAM APPLY</h3>
                <p className="text-blue-100 text-[11px] font-medium opacity-80">예술로 빚어내는 변화, 힐링예술터와 함께하세요.</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 md:p-10 flex flex-col items-center justify-center space-y-8 min-h-[300px]">
              <div className="text-center space-y-4">
                <p className="text-lg md:text-xl font-black text-neutral-800 font-gothic leading-relaxed">
                  <span className="text-blue-600">486sk@naver.com</span> 으로<br />
                  신청 및 문의하시면 됩니다!
                </p>
                <p className="text-neutral-400 text-xs font-medium">
                  빠른 시일 내에 답변 드리겠습니다.
                </p>
              </div>

              <button
                onClick={onClose}
                className="px-12 py-4 rounded-full bg-blue-600 text-white text-xs font-black tracking-widest uppercase hover:bg-neutral-900 transition-all shadow-lg active:scale-95"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;