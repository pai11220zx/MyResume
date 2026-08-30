import React from 'react';

/**
 * Reusable IconBox Component
 * กล่องไอคอนสไตล์โปร่งแสงโทนม่วงเอกลักษณ์ของแบรนด์ MyResume
 * 
 * @param {Object} props
 * @param {React.ComponentType} props.icon - Lucide หรือ SVG Icon component
 * @param {string} [props.size='md'] - 'sm' (w-10 h-10), 'md' (w-11 h-11), 'lg' (w-12 h-12)
 * @param {string} [props.className=''] - Custom container classes
 * @param {string} [props.iconClassName=''] - Custom icon classes
 * @param {React.ReactNode} [props.children] - ทางเลือกสำหรับ Custom icon node
 */
export default function IconBox({
  icon: Icon,
  size = 'md',
  className = '',
  iconClassName = '',
  children
}) {
  const sizeClasses = {
    sm: 'w-10 h-10 rounded-xl',
    md: 'w-11 h-11 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl'
  };

  const iconSizes = {
    sm: 'w-4 h-4 sm:w-5 sm:h-5',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div
      className={`bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0 shadow-md transition-transform group-hover:scale-110 ${sizeClasses[size] || sizeClasses.md} ${className}`.trim()}
    >
      {Icon ? (
        <Icon className={`${iconSizes[size] || iconSizes.md} ${iconClassName}`.trim()} />
      ) : (
        children
      )}
    </div>
  );
}
