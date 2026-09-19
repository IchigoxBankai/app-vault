import React from 'react';

export const TechStackBadge = ({ tech }) => {
  const getTechStyle = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('flutter')) return { bg: 'rgba(2, 125, 253, 0.12)', border: 'rgba(2, 125, 253, 0.35)', color: '#44A5FF' };
    if (lower.includes('kotlin')) return { bg: 'rgba(127, 82, 255, 0.12)', border: 'rgba(127, 82, 255, 0.35)', color: '#A970FF' };
    if (lower.includes('react')) return { bg: 'rgba(97, 218, 251, 0.12)', border: 'rgba(97, 218, 251, 0.35)', color: '#61DAFB' };
    if (lower.includes('compose')) return { bg: 'rgba(66, 133, 244, 0.12)', border: 'rgba(66, 133, 244, 0.35)', color: '#4285F4' };
    if (lower.includes('sqlite') || lower.includes('room') || lower.includes('hive')) return { bg: 'rgba(0, 245, 212, 0.12)', border: 'rgba(0, 245, 212, 0.35)', color: '#00F5D4' };
    if (lower.includes('firebase') || lower.includes('supabase')) return { bg: 'rgba(255, 158, 0, 0.12)', border: 'rgba(255, 158, 0, 0.35)', color: '#FFB703' };
    if (lower.includes('aes') || lower.includes('security') || lower.includes('biometric')) return { bg: 'rgba(0, 229, 255, 0.12)', border: 'rgba(0, 229, 255, 0.35)', color: '#00E5FF' };
    return { bg: 'rgba(255, 255, 255, 0.06)', border: 'rgba(255, 255, 255, 0.15)', color: '#CBD5E1' };
  };

  const style = getTechStyle(tech);

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-md text-[10.5px] font-mono font-medium tracking-tight"
      style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        color: style.color,
      }}
    >
      {tech}
    </span>
  );
};
