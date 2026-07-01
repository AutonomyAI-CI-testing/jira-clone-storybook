
/**
 * TestCard component
 * 
 * A single, self-contained component that replicates the "UI magician Agent" Figma design panel.
 * Built as a one-shot smoke test to verify rendering accuracy.
 * 
 * Features:
 * - Dark themed UI
 * - Multiple sections with inline SVG icons
 * - Form inputs for Personal Access Token and Design URL
 * - Custom branded buttons
 */

import React from 'react';

// SVG Icons extracted as sub-components for readability
const SettingsIcon = () => (
  <svg
    className='w-6 h-6 text-gray-400'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37zm-2.006 8.56c-.145.145-.145.38 0 .524l.659.659c.287.287.22.65-.11.751-.57.171-.787.893-.418 1.408.384.513.914.773 1.48.972.33.114.542.495.23.791-.482.482-.947.925-1.53.844-1.928-.27-3.238-2.124-2.822-4.103.26-.64.846-1.009 1.48-.975.33.114.542.495.23.791-.482.482-.947.925-1.53.844-1.928-.27-3.238-2.124-2.822-4.103.26-.64.846-1.009 1.48-.975z'
    />
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
  </svg>
);

const ChevronUpIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 15l7-7 7 7' />
  </svg>
);

const InfoIcon = () => (
  <svg
    className='w-4 h-4 ml-1 text-gray-400'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

export function TestCard() {
  // Constants for re-usable styles that match Figma design specs
  const CARD_BG = 'bg-[#2a2a2a]';
  const INPUT_BG = 'bg-[#1e1e1e]';
  const BUTTON_BG = 'bg-[#b5541e]';
  const MUTED_ORANGE = 'text-[#c8794a]';

  return (
    <div id='testElem' className={`p-6 ${CARD_BG} max-w-lg mx-auto text-white rounded-lg shadow-lg`}>
      {/* Header */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-bold'>UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* Collapsed row Info */}
      <div className={`flex items-center ${MUTED_ORANGE} mb-6`}>
        <ChevronUpIcon className='w-4 h-4 mr-1' />
        <span className='text-sm'>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section Header */}
      <div className='flex items-center mb-4'>
        <ChevronUpIcon className='w-4 h-4 mr-2 text-white' />
        <h2 className='text-lg font-bold'>Add New Design</h2>
      </div>

      {/* Form Fields */}
      <div className='space-y-4 mb-6'>
        {/* Personal Access Token */}
        <div>
          <label htmlFor='personalAccessToken' className='block text-sm font-medium text-white flex items-center mb-1'>
            Personal Access Token
            <InfoIcon />
          </label>
          <input
            type='text'
            id='personalAccessToken'
            placeholder='figd_xxxxxxxxxxxxxxxxxx'
            className={`w-full p-2 rounded-md ${INPUT_BG} border border-[#444] text-white placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500`}
          />
        </div>

        {/* Design URL */}
        <div>
          <label htmlFor='designUrl' className='block text-sm font-medium text-white flex items-center mb-1'>
            Design URL
            <InfoIcon />
          </label>
          <input
            type='url'
            id='designUrl'
            placeholder='https://www.figma.com/file/: '
            className={`w-full p-2 rounded-md ${INPUT_BG} border border-[#444] text-white placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500`}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex gap-2 mb-8'>
        <button className={`flex-1 py-2 px-4 rounded-lg ${BUTTON_BG} text-white font-medium hover:opacity-90 transition-opacity`}>
          Awesome
        </button>
        <button className={`flex-1 py-2 px-4 rounded-lg ${BUTTON_BG} text-white font-medium hover:opacity-90 transition-opacity`}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h2 className='text-lg font-bold'>Recent Breakdowns</h2>
    </div>
  );
}

