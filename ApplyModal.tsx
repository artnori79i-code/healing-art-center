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

            <div className="p-8 md:p-10 flex flex-col items-center justify-center space-y-10 min-h-[400px]">
              <div className="text-center space-y-4">
                <p className="text-lg md:text-xl font-black text-neutral-800 font-gothic leading-relaxed">
                  <span className="text-blue-600">486sk@naver.com</span> 으로<br />
                  신청 및 문의하시면 됩니다!
                </p>
                <p className="text-neutral-400 text-[11px] font-medium">
                  로그인 후 더 쉽고 빠르게 문의하실 수 있습니다.
                </p>
              </div>

              {/* Social Login Section */}
              <div className="w-full max-w-sm space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const subject = encodeURIComponent('[힐링예술터] 구글 계정 문의');
                    const body = encodeURIComponent('문의 내용을 여기에 적어주세요.\n\n---\n구글 로그인 계정으로 보냄');
                    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=486sk@naver.com&su=${subject}&body=${body}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-sm font-bold text-neutral-700">Google로 시작하기</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const subject = encodeURIComponent('[힐링예술터] 네이버 계정 문의');
                    const body = encodeURIComponent('문의 내용을 여기에 적어주세요.\n\n---\n네이버 로그인 계정으로 보냄');
                    // Naver Mail direct composition URL
                    window.open(`https://mail.naver.com/v2/folders/0/write?to=486sk@naver.com&subject=${subject}&body=${body}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#03C75A] shadow-sm hover:shadow-md transition-all group"
                >
                  <span className="w-5 h-5 flex items-center justify-center bg-white text-[#03C75A] rounded-sm font-black text-[12px]">N</span>
                  <span className="text-sm font-bold text-white">Naver로 시작하기</span>
                </motion.button>
              </div>

              <div className="flex flex-col items-center gap-4 w-full">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const subject = encodeURIComponent('[힐링예술터] 프로그램 신청 및 문의');
                    const body = encodeURIComponent('이름:\n연락처:\n문의내용:');
                    window.location.href = `mailto:486sk@naver.com?subject=${subject}&body=${body}`;
                  }}
                  className="w-full max-w-xs py-4 rounded-full bg-blue-600 text-white text-xs font-black tracking-[0.2em] uppercase hover:bg-neutral-900 transition-all shadow-xl flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  기본 메일 앱으로 보내기
                </motion.button>

                <button
                  onClick={onClose}
                  className="text-neutral-300 hover:text-neutral-500 text-[10px] font-black tracking-widest uppercase transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;