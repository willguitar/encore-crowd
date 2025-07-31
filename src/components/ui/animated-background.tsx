import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'gradient' | 'particles' | 'mesh' | 'aurora';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  className, 
  variant = 'gradient' 
}) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'animated-bg';
      case 'particles':
        return 'relative overflow-hidden bg-background';
      case 'mesh':
        return 'relative bg-background';
      case 'aurora':
        return 'relative overflow-hidden bg-background';
      default:
        return 'animated-bg';
    }
  };

  return (
    <div className={cn(getBackgroundClasses(), className)}>
      {variant === 'particles' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-music-purple/20 blur-3xl animate-float"></div>
          <div className="absolute -top-20 -right-32 w-64 h-64 rounded-full bg-music-pink/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-music-blue/20 blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      )}
      
      {variant === 'mesh' && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-music-purple/10 via-transparent to-music-pink/10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.1)_25%,rgba(147,51,234,0.1)_50%,transparent_50%,transparent_75%,rgba(219,39,119,0.1)_75%,rgba(219,39,119,0.1))] bg-[length:60px_60px] animate-gradient-shift"></div>
        </div>
      )}
      
      {variant === 'aurora' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-music-purple/30 via-music-pink/20 to-music-blue/30 rounded-full blur-3xl animate-gradient-shift"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-music-pink/30 via-music-blue/20 to-music-purple/30 rounded-full blur-3xl animate-gradient-shift" style={{ animationDelay: '7s' }}></div>
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;