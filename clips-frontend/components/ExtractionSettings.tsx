"use client";

import React, { useState } from 'react';
import { Switch } from './ui/Switch';
import { InfoIcon } from 'lucide-react';

export default function ExtractionSettings() {
  const [autoExtract, setAutoExtract] = useState(false);

  return (
    <div className="max-w-md p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-white">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <label htmlFor="auto-clip-toggle" className="font-semibold text-sm sm:text-base">
            Auto-generate clips
          </label>
          <p className="text-zinc-400 text-xs sm:text-sm">
            AI will automatically find the most viral moments.
          </p>
        </div>
        
        <Switch 
          id="auto-clip-toggle" 
          checked={autoExtract} 
          onChange={setAutoExtract} 
        />
      </div>

      {/* Processing Time Disclaimer */}
      <div className="mt-6 flex items-start gap-2 text-zinc-500">
        <InfoIcon className="w-4 h-4 mt-0.5 shrink-0" />
        <p className="text-xs leading-relaxed">
          Estimated processing time: 5-10 minutes depending on video length. 
          You will receive a notification when clips are ready.
        </p>
      </div>
    </div>
  );
}
