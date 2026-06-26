import React from 'react';

const ATSScoreCircle = ({ score, size = 'md', showLabel = true }) => {
  const sizes = {
    sm: { circle: 60, text: 'text-lg', label: 'text-xs' },
    md: { circle: 80, text: 'text-3xl', label: 'text-sm' },
    lg: { circle: 120, text: 'text-4xl', label: 'text-base' },
  };

  const s = sizes[size];
  const radius = s.circle / 2 - 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = (score) => {
    if (score >= 80) return '#22c55e';
    if (score >= 60) return '#eab308';
    return '#ef4444';
  };

  const getLabel = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Work';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: s.circle, height: s.circle }}>
        <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${s.circle} ${s.circle}`}>
          {/* Background circle */}
          <circle
            cx={s.circle / 2}
            cy={s.circle / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="6"
            className="dark:stroke-gray-700"
          />
          {/* Progress circle */}
          <circle
            cx={s.circle / 2}
            cy={s.circle / 2}
            r={radius}
            fill="none"
            stroke={getColor(score)}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`${s.text} font-bold text-dark-900 dark:text-white`}>{score}</span>
          <span className="text-xs text-gray-600 dark:text-gray-400">%</span>
        </div>
      </div>
      {showLabel && <p className={`mt-2 ${s.label} font-semibold text-gray-700 dark:text-gray-300`}>{getLabel(score)}</p>}
    </div>
  );
};

export default ATSScoreCircle;
