import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SectionHeading({
  tag,
  title,
  description,
  icon: Icon = Sparkles,
  className = "mb-16",
  align = "center"
}) {
  return (
    <div className={`text-${align} ${className}`}>
      {tag && (
        <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
          <Icon className="w-4 h-4" />
          <span>{tag}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-[#A1A1AA] mt-2 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
