/**
 * TestCard
 *
 * A static, self-contained reproduction of the "UI magician Agent" Figma frame
 * (Test Page - Simple). Smoke-test component: no props, no state, no data.
 *
 * Colours, spacing and type are taken from the frame's own style guide, so this
 * file deliberately does not use the app's semantic colour tokens: the frame's
 * palette (near-black surfaces, #843a17 buttons) has no equivalent in them, and
 * the card is not part of the product's design system.
 *
 * Every text style in the frame is weight 600. The repo selects weight by font
 * family rather than with a numeric weight utility, so `font-primary-bold` is
 * the family used throughout.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="2.4" stroke="#b5b5b5" strokeWidth="1.2" />
    <circle cx="7" cy="8" r="4.6" stroke="#b5b5b5" strokeWidth="1.2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="7"
        y1="1.6"
        x2="7"
        y2="3.4"
        stroke="#b5b5b5"
        strokeWidth="1.4"
        strokeLinecap="round"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
  </svg>
);

const INFO_ICON =
  "data:image/png;base64,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";

const CHEVRON_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAC6ElEQVR4nK2USUxTURiFz3uvlIo0jC2goMaEjaHiRIJa4kAMJCaC0bULYGPiAmKC08IFRoNuiDEqixKVSCRKoKhYAY2hOEJQ2gJlsNK+FgoVWtRWCu39XUEcgrTKtz7nfv+9N/dyCIPislLaotqMIGMoLSnhwumGzIlTp9ytXQbqGRql3hEbtb3scofTD3mq1jcGSlIqAEYAz4EXOIzZRXve7qy0UPp8KKH2bqMxRqmAPwD4GTBPDETA2nXrU++3PDeuiKjtrVGfmKDIAAHzQQbwBF7CgdE8wDNsSE/PqKlr0P+XSKc3NKWsSVMLvAAWBL56Z/DZ9RnfPD5wvBQymRSxcTHI3J6lfqBrb/rbWkveUcdbkyZekVwkSKXw+WdhMvUjSLPF875ZyKNioUhWQBYt0SSlpAABBq/3K0SrtebQPnXxcrtb5GWPodI8Oklm2xSZx72kffGeyiuqyn/PVd9rLO8ctNDw1AyZxz303mKnu826ypAk2vaO8kFxksxWJ404v5BJ9FDl9doly7eadZX9E9M0PDFDRtFJnaYhulyt+WOoX7hd31LUPWClvk8TZHa4aUCcpicd3Zrlhnv8ukfTP+6iQeckGUQnPdJ3UXVtXdHPGQ4Azl66UJCXdxhsjm9KSEyAEMEjwBjslo/ag7k7C0M5iZZX75pSU5UF0ogocJBgzGEDH8EKG+sbUXWxQsudO1+h3qjapN+VvQdsjiBIBMwxwGLu7yzMV+eEIlngjrZBn7l1hzpOHg9OEOCf8+GZrhW9xr4cXh4Xr9+2LRvEGCSrBEhWRWLM7jCFKwGAYwVHcoZHRkwQeAA8olbLsTf3AGJiE/S8VCYHEyQQpJGQyGT4/t2LfLVKFa5kgaP7c1U2xxgCCCDIESKioxAdpwDfZ/jgcbmmPD7/LFyTLnR2vPD8q2SBpy0PPQ67E1+m3bCNfoLVMuBZfLBXbt6gafcMLp05vSLf//Gyk6RMVkJ0iKi5eo37ARBDW+z0ddH6AAAAAElFTkSuQmCC";

const ChevronLargeIcon = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="#b2b2b1"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const INFO_ICON_ALT =
  "data:image/png;base64,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";

export const TestCard = () => (
  <div
    id="testElem"
    className="relative flex h-[508px] w-[254px] flex-col overflow-hidden bg-black font-primary-bold"
  >
    {/* top strip */}
    <div className="h-[9px] w-full shrink-0 bg-black" />

    {/* header */}
    <div className="mt-[11px] flex items-center justify-between pl-5 pr-6">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* collapsed panel row */}
    <div className="mt-[18px] flex items-center gap-[9px] pl-[23px]">
      <img src={CHEVRON_ICON} alt="" width={8} height={5} />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* section heading */}
    <div className="mt-[77px] flex items-center gap-[5px] pl-[26px]">
      <ChevronLargeIcon />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* personal access token */}
    <div className="mt-[28px] flex items-center gap-[18px] pl-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <img src={INFO_ICON} alt="" width={15} height={15} />
    </div>
    <div className="ml-5 mt-[11px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* design url */}
    <div className="mt-[11px] flex items-center gap-[9px] pl-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <img src={INFO_ICON_ALT} alt="" width={15} height={15} />
    </div>
    <div className="ml-5 mt-[10px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* actions */}
    <div className="mt-[23px] flex gap-[17px] pl-[44px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* recent breakdowns */}
    <span className="mt-[47px] pl-5 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

export default TestCard;
