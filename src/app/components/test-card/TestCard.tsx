
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export function TestCard() {
  return (
    <div id='testElem' className='min-h-screen bg-[#2a2a2a] p-4 text-[#b5b5b5]'>
      {/* Header Row */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-lg font-bold text-white'>UI magician Agent</h1>
        <FiSettings className='text-xl text-white' />
      </div>

      {/* Sub-header/Breadcrumb */}
      <div className='flex items-center mb-6 text-sm text-[#8c8078]'>
        <FiChevronUp className='mr-2' />
        <span>From entire frame to a singl...</span>
      </div>

      <div className='h-4'></div> {/* Spacer */}

      {/* Add New Design Section */}
      <div className='flex items-center mb-4'>
        <FiChevronUp className='mr-2 text-white' />
        <h2 className='text-base font-bold text-white'>Add New Design</h2>
      </div>

      {/* Form Fields */}
      <div className='mb-4'>
        <label htmlFor='accessToken' className='flex items-center text-sm font-semibold mb-2'>
          Personal Access Token
          <FiInfo className='ml-2 text-xs text-[#8b9291]' />
        </label>
        <input
          id='accessToken'
          type='text'
          placeholder='figd_xxxxxxxxxxxxxxxxxx'
          className='w-full p-2 rounded bg-[#3c3c3c] text-white border border-[#555555] focus:outline-none focus:border-[#b5541c]'
        />
      </div>

      <div className='mb-6'>
        <label htmlFor='designUrl' className='flex items-center text-sm font-semibold mb-2'>
          Design URL
          <FiInfo className='ml-2 text-xs text-[#8b9291]' />
        </label>
        <input
          id='designUrl'
          type='text'
          placeholder='https://www.figma.com/file/:'
          className='w-full p-2 rounded bg-[#3c3c3c] text-white border border-[#555555] focus:outline-none focus:border-[#b5541c]'
        />
      </div>

      {/* Action Buttons */}
      <div className='flex space-x-4 mb-8'>
        <button className='flex-1 px-4 py-2 bg-[#b5541c] text-white font-semibold rounded hover:opacity-90 transition-opacity'>
          Awesome
        </button>
        <button className='flex-1 px-4 py-2 bg-[#b5541c] text-white font-semibold rounded hover:opacity-90 transition-opacity'>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <h2 className='text-base font-bold text-white mb-4'>Recent Breakdowns</h2>
    </div>
  );
}
