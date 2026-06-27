'use client';

import { useState, ReactNode } from 'react';

export default function BotTypeCard({
  title,
  description,
  icon,
  features,
  tech,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  tech: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`glass rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-purple-500/30 ${
        expanded ? 'border-purple-500/40' : ''
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="text-purple-400 mt-1">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 mt-1 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/5 pt-4">
          <ul className="space-y-2 mb-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 font-mono">{tech}</div>
        </div>
      </div>
    </div>
  );
}
