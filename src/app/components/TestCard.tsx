import React from 'react';
import { FaCog, FaChevronUp, FaInfoCircle } from 'react-icons/fa';

export const TestCard: React.FC = () => {
  return (
    <div id='testElem' className='bg-[#2a2a2a] p-5 w-full max-w-sm font-sans text-white min-h-screen'>
      {/* 1. Header row */}
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-white text-lg font-bold'>UI magician Agent</h2>
        <FaCog className='text-gray-400 text-xl' />
      </div>

      {/* 2. Subtitle row */}
      <div className='flex items-center gap-2 mb-6'>
        <FaChevronUp className='text-gray-400' />
        <span className='text-[#c87941] text-sm'>From entire frame to a singl...</span>
      </div>

      {/* 3. Spacer */}
      <div className='py-6'></div>

      {/* 4. Section row */}
      <div className='flex items-center gap-2 mb-4'>
        <FaChevronUp className='text-gray-400' />
        <h3 className='text-white text-xl font-bold'>Add New Design</h3>
      </div>

      {/* 5. Personal Access Token Label row */}
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor='accessToken' className='text-gray-200 text-sm'>Personal Access Token</label>
        <FaInfoCircle className='text-gray-400 text-xs' />
      </div>
      {/* 6. Personal Access Token Input */}
      <input
        id='accessToken'
        type='text'
        placeholder='figd_xxxxxxxxxxxxxxxxxx'
        className='w-full bg-[#3a3a3a] border border-[#555] rounded text-gray-400 placeholder-gray-600 px-3 py-2 text-sm mb-4 focus:outline-none focus:border-amber-600'
      />

      {/* 7. Design URL Label row */}
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor='designUrl' className='text-gray-200 text-sm'>Design URL</label>
        <FaInfoCircle className='text-gray-400 text-xs' />
      </div>
      {/* 8. Design URL Input */}
      <input
        id='designUrl'
        type='text'
        placeholder='https://www.figma.com/file/:'
        className='w-full bg-[#3a3a3a] border border-[#555] rounded text-gray-400 placeholder-gray-600 px-3 py-2 text-sm mb-6 focus:outline-none focus:border-amber-600'
      />

      {/* 9. Button row */}
      <div className='flex gap-3 mt-4'>
        <button className='bg-[#b85c2a] hover:bg-[#a04f22] text-white rounded-lg px-5 py-3 font-semibold text-sm'>Awesome</button>
        <button className='bg-[#b85c2a] hover:bg-[#a04f22] text-white rounded-lg px-5 py-3 font-semibold text-sm'>Prepare</button>
      </div>

      {/* 10. Recent Breakdowns heading */}
      <h3 className='text-white text-lg font-bold mt-8'>Recent Breakdowns</h3>
    </div>
  );
};
