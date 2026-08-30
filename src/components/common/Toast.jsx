import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';
import './Toast.css';

/**
 * Reusable Toast Notification Component
 * ใช้แสดงกล่องข้อความแจ้งเตือนสถานะต่างๆ ที่มุมบนของหน้าจอ
 * 
 * @param {Object} props
 * @param {string|null} props.message - ข้อความแจ้งเตือน (หากเป็น null จะไม่แสดงผล)
 * @param {Function} props.onClose - ฟังก์ชันสำหรับปิดกล่องแจ้งเตือน
 * @param {string} [props.title='สถานะผลงาน'] - หัวข้อของข้อความแจ้งเตือน
 */
export default function Toast({
  message,
  onClose,
  title = 'สถานะผลงาน'
}) {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.9, x: '-50%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
          exit={{ opacity: 0, y: -30, scale: 0.9, x: '-50%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="toast-notice-wrapper px-5 py-3.5 rounded-2xl bg-[#090B10]/95 border border-[#8B5CF6] text-white toast-notice-card flex items-center gap-3.5 min-w-[320px] max-w-[90vw] sm:max-w-md pointer-events-auto"
        >
          <div className="w-9 h-9 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6] shrink-0 shadow-inner">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex-1 pr-2">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-[#8B5CF6]">{title}</div>
            <div className="text-sm font-medium text-[#F8FAFC] leading-snug">{message}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
