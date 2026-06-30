
import React from 'react';

/**
 * Icons used within the TestCard component.
 * SVGs are kept as constants to keep the JSX clean and focused on structure.
 */
const ICONS = {
  Magic: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.83.147-1.65.451-2.404.904a1.867 1.867 0 00-2.282 1.087l-1.399 3.091c-.2.441-.741.642-1.23.485A10.868 10.868 0 00.5 12c0 5.922 4.48 10.74 10.373 11.21.574.045 1.05-.436 1.05-1.006v-.919c0-.528-.423-.974-.951-1.007a8.509 8.509 0 01-7.017-8.868c1.393-4.004 5.92-6.353 10.32-5.952.48.042.924-.319.924-.817V2.553a1.006 1.006 0 00-1.05-.992zM15.75 9a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H15.75zm.375 1.875a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 2.25a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H15.75zM18.75 9a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H18.75zm.375 1.875a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 2.25a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H18.75z" clipRule="evenodd" />
      <path d="M15.375 17.25a.75.75 0 000 1.5h.008a.75.75 0 100-1.5h-.008zM15.75 21a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H15.75zM12.75 21a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H12.75zM12 17.25a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H12zM9.75 21a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H9.75zM9.375 17.25a.75.75 0 100 1.5h.008a.75.75 0 100-1.5h-.008zM21.75 9a.75.75 0 000 1.5h.008a.75.75 0 100-1.5H21.75zm.375 1.875a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 2.25a.75.75 0 100 1.5h.008a.75.75 0 100-1.5H21.75zM16.5 4.125c0-.574.47-1.04 1.04-1.04h.115c.918 0 1.699.663 1.85 1.567l.128.736c.83.147 1.65.451 2.404.904a1.867 1.867 0 011.087 2.282l.736 1.399c.145.26.113.559-.08.775a10.869 10.869 0 01-2.903 2.502c-.417.295-.93.204-1.23-.169V5.056c0-.527-.423-.973-.951-1.006a8.51 8.51 0 00-8.868 7.017c-4.004-.393-6.353-4.92-5.952-9.32.042-.48.319-.924.817-.924h.919c.528 0 .974.414 1.007.951a8.504 8.504 0 019.043 7.556 1.152 1.152 0 001.071 1.009h.119c.44 0 .75-.487.587-.822a9.782 9.782 0 00-2.613-3.692c-.295-.417-.204-.93.169-1.23L15.42 4.113a1.04 1.04 0 00.954.012z" clipRule="evenodd" />
    </svg>
  ),
  CaretUp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
    </svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block ml-1">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.308l-.329 1.395a.75.75 0 00.772.818h.75a.75.75 0 00.772-.818l-.329-1.395a.25.25.0 01.244-.308H11a.75.75 0 000-1.5H9z" clipRule="evenodd" />
    </svg>
  ),
};

/**
 * TestCard component provides a focused interface for design breakdown operations.
 * It features a dark theme optimized for technical workflows.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-6 rounded-lg bg-[#2a2a2a] text-[#b5b5b5] max-w-sm">
      {/* Header section with branding and primary action icon */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
        <ICONS.Magic />
      </div>

      {/* Collapsible/Status info section */}
      <div className="flex items-center gap-2 mb-6">
        <ICONS.CaretUp />
        <p className="text-[#8b9291]">From entire frame to a singl...</p>
      </div>

      <div className="mb-6">
        {/* Section title with toggle indicator */}
        <div className="flex items-center gap-2 mb-2">
          <ICONS.CaretUp />
          <h2 className="text-xl font-semibold text-[#b2b2b1]">Add New Design</h2>
        </div>

        {/* Input: Personal Access Token - Dark variant with warm focus border */}
        <div className="mb-4">
          <label className="block text-[#a4a4a3] text-sm font-medium mb-1">
            Personal Access Token
            <ICONS.Info />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md bg-[#2d2d2d] border border-[#444444] text-[#b5b5b5] placeholder-[#737470] focus:outline-none focus:border-[#7a4a30]"
          />
        </div>

        {/* Input: Design URL */}
        <div className="mb-6">
          <label className="block text-[#a4a4a3] text-sm font-medium mb-1">
            Design URL
            <ICONS.Info />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md bg-[#2d2d2d] border border-[#444444] text-[#b5b5b5] placeholder-[#737470] focus:outline-none focus:border-[#7a4a30]"
          />
        </div>
      </div>

      {/* Dual primary action buttons — matches the warm, earthy theme */}
      <div className="flex gap-4 mb-6">
        <button className="flex-1 bg-[#7a4a30] text-[#c8b8b0] rounded-lg px-6 py-3 font-semibold hover:bg-[#8c5a3a] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#7a4a30] text-[#c8b8b0] rounded-lg px-6 py-3 font-semibold hover:bg-[#8c5a3a] transition-colors">
          Prepare
        </button>
      </div>

      <h2 className="text-xl font-semibold text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};
