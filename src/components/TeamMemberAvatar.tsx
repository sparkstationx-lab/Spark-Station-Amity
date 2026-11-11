import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberAvatarProps {
  member: TeamMember;
  className?: string;
  imgClassName?: string;
}

export const TeamMemberAvatar: React.FC<TeamMemberAvatarProps> = ({
  member,
  className = '',
  imgClassName = '',
}) => {
  const isInitials = !member.avatarUrl || member.avatarUrl.startsWith('initials:');
  const initials = isInitials
    ? member.avatarUrl?.replace('initials:', '') ||
      member.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : '';

  if (isInitials) {
    return (
      <div
        className={`relative w-full h-full flex flex-col items-center justify-center bg-[#161b22] overflow-hidden select-none ${className}`}
        style={{
          background: `radial-gradient(circle at 50% 40%, ${member.color}25 0%, #0d1117 90%)`,
        }}
      >
        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${member.color} 1.5px, transparent 1.5px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Ambient colored aura */}
        <div
          className="absolute w-40 h-40 rounded-full blur-2xl opacity-25"
          style={{ backgroundColor: member.color }}
        />

        {/* Initials glassmorphism emblem */}
        <div
          className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center backdrop-blur-md shadow-2xl transition-transform duration-500 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${member.color}25 0%, rgba(22, 27, 34, 0.95) 100%)`,
            border: `1.5px solid ${member.color}60`,
            boxShadow: `0 0 25px ${member.color}30`,
          }}
        >
          <span
            className="font-display font-bold text-3xl sm:text-4xl tracking-wider uppercase"
            style={{
              color: member.color,
              textShadow: `0 0 16px ${member.color}90`,
            }}
          >
            {initials}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={member.avatarUrl}
      alt={member.name}
      referrerPolicy="no-referrer"
      loading="lazy"
      className={`w-full h-full object-cover ${
        member.slug === 'abhinav-sharma' ? 'object-top' : ''
      } ${imgClassName}`}
    />
  );
};
