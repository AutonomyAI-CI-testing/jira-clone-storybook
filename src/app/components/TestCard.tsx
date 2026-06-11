
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

/**
 * This component follows the "UI magician Agent" Figma design.
 * It's a self-contained panel for Figma credential entry and status display.
 * 
 * Note: Colors and spacing are hardcoded to match the specific Figma spec.
 */
export const TestCard = () => {
  return (
    <div 
      id='testElem' 
      className='bg-[#2a2a2a] p-4 text-white w-[254px] min-h-[508px] flex flex-col'
    >
      {/* Header: Title and Settings icon */}
      <header className='flex justify-between items-center'>
        <p className='text-[#b5b5b5] font-semibold text-[13.5px] leading-tight'>UI magician Agent</p>
        <IoSettingsOutline className='text-[#b5b5b5] size-4' />
      </header>

      {/* Breadcrumb-style subheader */}
      <div className='flex items-center gap-1 mt-1'>
        <HiChevronUp className='text-[#8b9291] size-3' />
        <p className='text-[#8b9291] text-[11.5px] font-semibold'>From entire frame to a singl...</p>
      </div>

      {/* Fixed spacer to match Figma vertical layout */}
      <div className='h-8' aria-hidden="true" />

      {/* Accordion-style section header */}
      <section>
        <div className='flex items-center gap-1 mb-3'>
          <HiChevronUp className='text-[#b2b2b1] size-3' />
          <p className='text-[#b2b2b1] font-semibold text-[13.5px]'>Add New Design</p>
        </div>

        <form className='flex flex-col gap-y-3' onSubmit={(e) => e.preventDefault()}>
          {/* Personal Access Token Field */}
          <div>
            <div className='flex items-center gap-1.5 mb-1'>
              <label className='text-[#a4acab] text-[11.5px] font-semibold'>Personal Access Token</label>
              <HiInformationCircle className='text-[#a4acab] size-[15px]' />
            </div>
            <input
              type='text'
              className='w-full h-9 bg-[#272822] border border-[#a5adad] rounded px-3 text-[#6b7372] text-[11.5px] font-semibold placeholder-[#6b7372] focus:outline-none'
              placeholder='figd_xxxxxxxxxxxxxxxxxx'
              readOnly
            />
          </div>

          {/* Design URL Field */}
          <div>
            <div className='flex items-center gap-1.5 mb-1'>
              <label className='text-[#a4acab] text-[11.5px] font-semibold'>Design URL</label>
              <HiInformationCircle className='text-[#a4acab] size-[15px]' />
            </div>
            <input
              type='text'
              className='w-full h-9 bg-[#272822] border-2 border-[#929291] rounded px-3 text-[#6b7372] text-[11.5px] font-semibold placeholder-[#6b7372] focus:outline-none'
              placeholder='https://www.figma.com/file/:'
              readOnly
            />
          </div>

          {/* Action Buttons */}
          <div className='flex gap-x-3 mt-1 justify-center'>
            <button 
              type="button"
              className='bg-[#843a17] text-[#8c8078] rounded px-6 py-2 text-[11.5px] font-semibold h-[37px] w-[85px]'
            >
              Awesome
            </button>
            <button 
              type="button"
              className='bg-[#843a17] text-[#8c8078] rounded px-6 py-2 text-[11.5px] font-semibold h-[37px] w-[85px]'
            >
              Prepare
            </button>
          </div>
        </form>
      </section>

      {/* Footer link/section */}
      <footer className='mt-6'>
        <p className='text-[#b0b0b0] font-semibold text-[13.5px]'>Recent Breakdowns</p>
      </footer>
    </div>
  );
};
