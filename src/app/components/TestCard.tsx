
/**
 * TestCard component
 * 
 * A single self-contained component that visually replicates a Figma design panel.
 * Designed as a visual smoke test for the code generation pipeline.
 * All styling is hardcoded via Tailwind arbitrary values to match the target design exactly.
 */

// UI Constants - extracted for clarity while maintaining exact visual values
const COLORS = {
  bgMain: 'bg-[#2a2a2a]',
  bgInput: 'bg-[#1e1e1e]',
  bgButton: 'bg-[#b5541e]',
  textMutedOrange: 'text-[#c8794a]',
  borderLight: 'border-[#444]',
} as const;

export function TestCard() {
  return (
    <div id='testElem' className={`min-h-screen ${COLORS.bgMain} p-6 max-w-sm mx-auto`}>
      {/* Header row */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-xl font-bold text-white'>UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Subtitle row with muted orange text */}
      <div className='flex items-center mb-6'>
        <ChevronUpIcon className="text-gray-400 mr-2" />
        <span className={COLORS.textMutedOrange}>From entire frame to a singl...</span>
      </div>

      {/* Section Header: Add New Design */}
      <div className='flex items-center mb-6'>
        <ChevronUpIcon className="text-white mr-2" />
        <h2 className='text-lg font-bold text-white'>Add New Design</h2>
      </div>

      {/* Input Field: Personal Access Token */}
      <InputField 
        label="Personal Access Token" 
        id="personalAccessToken" 
        placeholder="figd_xxxxxxxxxxxxxxxxxx" 
      />

      {/* Input Field: Design URL */}
      <div className='mb-6'>
        <InputField 
          label="Design URL" 
          id="designURL" 
          placeholder="https://www.figma.com/file/:" 
        />
      </div>

      {/* Action Buttons - Burnt orange theme */}
      <div className='flex gap-4 mb-8'>
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className='text-xl font-bold text-white'>Recent Breakdowns</h2>
    </div>
  );
}

// Sub-components for cleaner structure

function InputField({ label, id, placeholder }: { label: string; id: string; placeholder: string }) {
  return (
    <div className='mb-4'>
      <div className='flex items-center mb-2'>
        <label htmlFor={id} className='text-white mr-2'>
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        type='text'
        id={id}
        placeholder={placeholder}
        className={`w-full p-2 rounded-md ${COLORS.bgInput} border ${COLORS.borderLight} text-gray-400 focus:outline-none`}
      />
    </div>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={`flex-1 ${COLORS.bgButton} text-white rounded-lg px-6 py-3 font-semibold`}>
      {children}
    </button>
  );
}

// SVG Icons - Extracted for readability

function GearIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6 text-gray-400'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.125 1.125 0 011.035.771c.915 1.637 4.238 1.055 4.238 1.055s-.337-.152-.395-.178l-.337.892L19.46 9.49l-.027-.008L21 9.773c1.756.426 1.756 2.924 0 3.35-.426.213-.699.42-.876.657-.225.291-.334.484.07-.61h.005l.337.892c.059.026.395.178.395.178s-3.323-.582-4.238 1.055a1.125 1.125 0 01-1.035.771c-.426 1.756-2.924 1.756-3.35 0-.279-.204-.543-.377-.872-.45c-.417-.091-1.229-.028-1.574.07-.492.14-.999.04-1.425-.07l-.337.892c-.058.026-.395.178-.395.178s-3.323-.582-4.238 1.055a1.125 1.125 0 01-1.035.771c-.426 1.756-2.924 1.756-3.35 0-.279-.204-.543-.377-.872-.45-.417-.091-1.229-.028-1.574.07L4 12.01l.027.008L2.54 11.23c-1.756-.426-1.756-2.924 0-3.35.426-.213.699-.42.876-.657.225-.291.334-.484-.07-.61h-.005l-.337-.892c-.059-.026-.395-.178-.395-.178s3.323.582 4.238-1.055a1.125 1.125 0 011.035-.771zm3.877 10.375a2.125 2.125 0 100-4.25 2.125 2.125 0 000 4.25z'
      />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={`w-5 h-5 ${className}`}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-4 h-4 text-gray-400'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M11.25 11.25l-3.042 1.218a3.75 3.75 0 115.93-4.14M5.72 17.653A2.25 2.25 0 017.5 15h1.5a2.25 2.25 0 012.25 2.25v.75m0 3a1.5 1.5 0 01-1.5 1.5H8.25A1.5 1.5 0 016.75 21v-.75m0 0H4.875A2.25 2.25 0 012.625 18.75v-1.5m1.5-1.5h1.5a2.25 2.25 0 012.25 2.25v.75m0 3a1.5 1.5 0 01-1.5 1.5H8.25A1.5 1.5 0 016.75 21v-.75m0 0H4.875A2.25 2.25 0 012.625 18.75v-1.5m1.5-1.5H7.5m-.75 4.5H5.25m-.75 0H3.75'
      />
    </svg>
  );
}

