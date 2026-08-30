import React from 'react';

export default function SectionHeading({
  tag,
  title,
  description,
  className = "mb-16",
  align = "center"
}) {
  return (
    <div className={`text-${align} ${className} flex flex-col items-center`}>
      {/* Clean Solid Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mb-2 text-center">
        {title}
      </h2>

      {/* Section Description without fade in */}
      {description && (
        <p className="mt-2 max-w-2xl text-sm sm:text-base text-[#E2E8F0] font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] text-center">
          {description}
        </p>
      )}
    </div>
  );
}
