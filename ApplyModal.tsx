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

            <div className="p-8 md:p-10 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Compact Artistic Header */}
                <div className="relative p-6 rounded-[2rem] overflow-hidden flex items-center gap-6 bg-blue-50/50 border border-blue-100">
                  <motion.div
                    animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="shrink-0 text-blue-400"
                  >
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </motion.div>
                  <div className="text-left">
                    <h4 className="text-sm font-black text-blue-900 font-gothic tracking-tight leading-snug">
                      당신의 소중한 울림이 예술이 되는 곳, <br />
                      힐링예술터가 당신의 마음을 기다립니다.
                    </h4>
                    <p className="text-[9px] text-blue-400 font-bold uppercase tracking-wider mt-1">
                      Where resonance becomes art.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                    <input required type="text" placeholder="성함" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-gothic" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 ml-1">Phone Number</label>
                    <input required type="tel" placeholder="010-0000-0000" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-gothic" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 ml-1">Select Program</label>
                  <select className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none font-gothic" value={formData.program} onChange={(e) => setFormData({ ...formData, program: e.target.value })}>
                    <option>국방부 프로그램</option>
                    <option>문화예술교육 프로그램</option>
                    <option>'예술로 힐링 프로그램</option>
                    <option>시니어 프로그램</option>
                    <option>기타 자유 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-1.5 ml-1">Inquiry Details</label>
                  <textarea rows={2} placeholder="궁금하신 점을 적어주세요." className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none font-gothic" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>

                <div className="flex items-start gap-3 px-1">
                  <input id="privacy" type="checkbox" className="mt-0.5 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" checked={formData.privacyAgreed} onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })} />
                  <label htmlFor="privacy" className="text-[10px] text-neutral-500 leading-tight font-medium font-gothic cursor-pointer select-none">
                    개인정보 수집 및 이용 동의하며, 작성 내용은 안전하게 기록됨을 인지하였습니다.
                  </label>
                </div>

                <div className="pt-2">
                  {/* Positioned Official Contact above the Button */}
                  <div className="flex flex-col items-center mb-4 space-y-1">
                    <span className="text-[8px] font-black text-neutral-300 uppercase tracking-widest">Official Recipient</span>
                    <div className="bg-neutral-50 px-6 py-1.5 rounded-full border border-neutral-100">
                      <span className="text-[11px] font-bold text-neutral-600 font-gothic">신청서 수신처 : 486sk@naver.com</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl text-[13px] font-black tracking-[0.2em] uppercase transition-all shadow-xl font-gothic flex items-center justify-center gap-3 ${isSubmitting ? 'bg-neutral-200 text-neutral-400' : 'bg-blue-600 text-white hover:bg-neutral-900 active:scale-95'}`}
                  >
                    {isSubmitting ? 'Processing...' : 'Submit Application'}
                  </button>
                </div>

              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;