import React from 'react';

interface PrefabCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function PrefabCard({ title, children, className = "" }: PrefabCardProps) {
  return (
    <div className={`bg-[#1b1825] rounded border border-[#2a2635] ${className}`}>
      <div className="p-4 border-b border-[#2a2635]">
        <h3 className="text-white text-sm">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}