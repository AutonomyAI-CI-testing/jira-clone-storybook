
// Custom icon components to avoid repetition and improve readability
const ChevronIcon = ({ className = 'h-3 w-3' }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    aria-hidden='true'
  >
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
  </svg>
);

const InfoIcon = ({ className = 'h-3 w-3' }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    aria-hidden='true'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const SettingsIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={className}
    viewBox='0 0 20 20'
    fill='currentColor'
    aria-hidden='true'
  >
    <path
      fillRule='evenodd'
      d='M11.49 3.17c-.38-.15-.78-.27-1.2-.36A4.002 4.002 0 0010 3c-1.12 0-2.14.3-3.04.83-.41-.09-.8-.21-1.18-.36A4 4 0 001.5 9c0 1.05.35 2.05.98 2.87-.27.7-.42 1.47-.42 2.29a4 4 0 004 4c.82 0 1.59-.15 2.29-.42.82.63 1.82.98 2.87.98 1.05 0 2.05-.35 2.87-.98.7.27 1.47.42 2.29.42a4 4 0 004-4c0-.82-.15-1.59-.42-2.29.63-.82.98-1.82.98-2.87a4 4 0 00-3.09-3.83zm-1.77 1.27a1 1 0 01-1.12 0 1 1 0 00-1.4.15l-.88.75a1 1 0 01-1.32-.4l-.54-1.3A1 1 0 004.5 4h-.1a1 1 0 00-.97.77l.54 1.3a1 1 0 01-.4 1.32l-.75.88a1 1 0 00.16 1.4l1.3.54a1 1 0 01.4 1.32l-.88.75a1 1 0 000 1.4l1.3.54a1 1 0 01.4 1.32l-.75.88a1 1 0 00-.16 1.4l1.3.54a1 1 0 011.32.4l.54 1.3a1 1 0 00.97.77h.1a1 1 0 00.97-.77l.54-1.3a1 1 0 011.32-.4l.75.88a1 1 0 001.4-.16l.54-1.3a1 1 0 01.4-1.32l.88-.75a1 1 0 00.16-1.4l-1.3-.54a1 1 0 01-.4-1.32l.75-.88a1 1 0 00-.16-1.4l-1.3-.54a1 1 0 01-.4-1.32l.88-.75a1 1 0 000-1.4l-1.3-.54a1 1 0 01-.4-1.32l.75-.88a1 1 0 00.15-1.4l-1.3-.54a1 1 0 01-1.32-.4l-.54-1.3a1 1 0 00-.97-.77zM10 13a3 3 0 100-6 3 3 0 000 6z'
      clipRule='evenodd'
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id='testElem' className='p-4 bg-[#222] min-h-screen text-[#f0f0f0]'>
      {/* Header Row */}
      <div className='flex items-center justify-between'>
        <span className='text-[#b5b5b5] font-semibold text-sm'>UI magician Agent</span>
        <SettingsIcon className='h-4 w-4 text-[#b5b5b5]' />
      </div>

      {/* Subtitle Row - Small text for context */}
      <div className='flex items-center gap-1 mt-1'>
        <ChevronIcon className='h-3 w-3 text-[#f0f0f0]' />
        <span className='text-[#8b9291] text-xs'>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section - Uses dark background typical for specialized agents */}
      <div className='flex items-center gap-1 mt-4'>
        <ChevronIcon className='h-3 w-3 text-[#f0f0f0]' />
        <span className='text-[#b2b2b1] font-semibold text-sm'>Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className='mt-4'>
        <div className='flex items-center gap-1 mb-1'>
          <label htmlFor='personal-access-token' className='text-[#a4a4a3] text-xs font-semibold'>
            Personal Access Token
          </label>
          <InfoIcon className='h-3 w-3 text-[#a4a4a3]' />
        </div>
        <input
          type='text'
          id='personal-access-token'
          placeholder='figd_xxxxxxxxxxxxxxxxx'
          className='w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] p-2 text-[#737470] text-xs focus:border-[#555] outline-none outline-0 transition-colors'
        />
      </div>

      {/* Design URL Field */}
      <div className='mt-3'>
        <div className='flex items-center gap-1 mb-1'>
          <label htmlFor='design-url' className='text-[#a3a3a2] text-xs font-semibold'>
            Design URL
          </label>
          <InfoIcon className='h-3 w-3 text-[#a3a3a2]' />
        </div>
        <input
          type='text'
          id='design-url'
          placeholder='https://www.figma.com/file/:'
          className='w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] p-2 text-[#71726e] text-xs focus:border-[#555] outline-none outline-0 transition-colors'
        />
      </div>

      {/* Action Buttons - Distinct secondary color for the agent UI */}
      <div className='flex gap-3 mt-4'>
        <button className='flex-1 rounded-lg py-2 bg-[#6b3d1e] text-[#8c8078] font-semibold text-xs active:bg-[#7a4623] transition-colors'>
          Awesome
        </button>
        <button className='flex-1 rounded-lg py-2 bg-[#6b3d1e] text-[#8c8078] font-semibold text-xs active:bg-[#7a4623] transition-colors'>
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div className='mt-6'>
        <span className='text-[#b0b0b0] font-semibold text-sm'>Recent Breakdowns</span>
      </div>
    </div>
  );
};

