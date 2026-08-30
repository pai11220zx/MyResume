import React from 'react';

export default function SectionHeading({
  tag,
  title,
  description,
  className = "mb-16",
  align = "center"
}) {
  const isLeft = align === 'left';
  const isRight = align === 'right';

  const containerAlign = isLeft ? 'items-start text-left' : isRight ? 'items-end text-right' : 'items-center text-center';
  const textAlign = isLeft ? 'text-left' : isRight ? 'text-right' : 'text-center';

  return (
    <div className={`flex flex-col ${containerAlign} ${className}`}>
      {/* Clean Solid Section Title */}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-title-readable mb-2 ${textAlign}`}>
        {title}
      </h2>

      {/* Section Description */}
      {description && (
        <p className={`mt-2 max-w-2xl text-sm sm:text-base text-[#E2E8F0] font-medium text-secondary-readable ${textAlign}`}>
          {description}
        </p>
      )}
    </div>
  );
}
