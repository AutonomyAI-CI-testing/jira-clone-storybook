/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke-test component: it takes no props, holds no state and is not used anywhere in
 * the app. It reproduces the frame's own dark palette instead of the app's semantic
 * theme tokens, so it deliberately opts out of theming (see task/PLAN.md, decision D1).
 * The icons are the frame's own exported artwork, inlined as-is.
 */

const GEAR_IMAGE =
  "data:image/png;base64,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";

const COLLAPSE_CHEVRON_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAC6ElEQVR4nK2USUxTURiFz3uvlIo0jC2goMaEjaHiRIJa4kAMJCaC0bULYGPiAmKC08IFRoNuiDEqixKVSCRKoKhYAY2hOEJQ2gJlsNK+FgoVWtRWCu39XUEcgrTKtz7nfv+9N/dyCIPislLaotqMIGMoLSnhwumGzIlTp9ytXQbqGRql3hEbtb3scofTD3mq1jcGSlIqAEYAz4EXOIzZRXve7qy0UPp8KKH2bqMxRqmAPwD4GTBPDETA2nXrU++3PDeuiKjtrVGfmKDIAAHzQQbwBF7CgdE8wDNsSE/PqKlr0P+XSKc3NKWsSVMLvAAWBL56Z/DZ9RnfPD5wvBQymRSxcTHI3J6lfqBrb/rbWkveUcdbkyZekVwkSKXw+WdhMvUjSLPF875ZyKNioUhWQBYt0SSlpAABBq/3K0SrtebQPnXxcrtb5GWPodI8Oklm2xSZx72kffGeyiuqyn/PVd9rLO8ctNDw1AyZxz303mKnu826ypAk2vaO8kFxksxWJ404v5BJ9FDl9doly7eadZX9E9M0PDFDRtFJnaYhulyt+WOoX7hd31LUPWClvk8TZHa4aUCcpicd3Zrlhnv8ukfTP+6iQeckGUQnPdJ3UXVtXdHPGQ4Azl66UJCXdxhsjm9KSEyAEMEjwBjslo/ag7k7C0M5iZZX75pSU5UF0ogocJBgzGEDH8EKG+sbUXWxQsudO1+h3qjapN+VvQdsjiBIBMwxwGLu7yzMV+eEIlngjrZBn7l1hzpOHg9OEOCf8+GZrhW9xr4cXh4Xr9+2LRvEGCSrBEhWRWLM7jCFKwGAYwVHcoZHRkwQeAA8olbLsTf3AGJiE/S8VCYHEyQQpJGQyGT4/t2LfLVKFa5kgaP7c1U2xxgCCCDIESKioxAdpwDfZ/jgcbmmPD7/LFyTLnR2vPD8q2SBpy0PPQ67E1+m3bCNfoLVMuBZfLBXbt6gafcMLp05vSLf//Gyk6RMVkJ0iKi5eo37ARBDW+z0ddH6AAAAAElFTkSuQmCC";

const SECTION_CHEVRON_IMAGE =
  "data:image/png;base64,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";

const TOKEN_INFO_IMAGE =
  "data:image/png;base64,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";

const URL_INFO_IMAGE =
  "data:image/png;base64,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";

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="14" height="16" fill="url(#testCardGear)" />
    <defs>
      <pattern
        id="testCardGear"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          href="#testCardGearImage"
          transform="matrix(0.0192308 0 0 0.0168269 0 -0.00480769)"
        />
      </pattern>
      <image
        id="testCardGearImage"
        width="52"
        height="60"
        preserveAspectRatio="none"
        href={GEAR_IMAGE}
      />
    </defs>
  </svg>
);

const CollapseChevronIcon = () => (
  <svg
    aria-hidden="true"
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="8" height="5" fill="url(#testCardCollapseChevron)" />
    <defs>
      <pattern
        id="testCardCollapseChevron"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          href="#testCardCollapseChevronImage"
          transform="matrix(0.0390625 0 0 0.0625 -0.0078125 0)"
        />
      </pattern>
      <image
        id="testCardCollapseChevronImage"
        width="26"
        height="16"
        preserveAspectRatio="none"
        href={COLLAPSE_CHEVRON_IMAGE}
      />
    </defs>
  </svg>
);

const SectionChevronIcon = () => (
  <svg
    aria-hidden="true"
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="12" height="8" fill="url(#testCardSectionChevron)" />
    <defs>
      <pattern
        id="testCardSectionChevron"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          href="#testCardSectionChevronImage"
          transform="matrix(0.0222222 0 0 0.0333333 -0.0111111 0)"
        />
      </pattern>
      <image
        id="testCardSectionChevronImage"
        width="46"
        height="30"
        preserveAspectRatio="none"
        href={SECTION_CHEVRON_IMAGE}
      />
    </defs>
  </svg>
);

const TokenInfoIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="15" height="15" fill="url(#testCardTokenInfo)" />
    <defs>
      <pattern
        id="testCardTokenInfo"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use href="#testCardTokenInfoImage" transform="scale(0.0181818)" />
      </pattern>
      <image
        id="testCardTokenInfoImage"
        width="55"
        height="55"
        preserveAspectRatio="none"
        href={TOKEN_INFO_IMAGE}
      />
    </defs>
  </svg>
);

const UrlInfoIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="15" height="15" fill="url(#testCardUrlInfo)" />
    <defs>
      <pattern
        id="testCardUrlInfo"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use href="#testCardUrlInfoImage" transform="scale(0.0181818)" />
      </pattern>
      <image
        id="testCardUrlInfoImage"
        width="55"
        height="55"
        preserveAspectRatio="none"
        href={URL_INFO_IMAGE}
      />
    </defs>
  </svg>
);

const fieldClassName =
  "w-full bg-[#272822] px-[19px] leading-[13.92px] placeholder:text-[#737470]";

const buttonClassName =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843A17] text-[11.5px] leading-[13.92px] text-[#8C8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pt-5 font-primary-bold"
    >
      {/* Title */}
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <CollapseChevronIcon />
        <span className="text-[11.5px] leading-[13.92px] text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <SectionChevronIcon />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[10px]">
        <label
          htmlFor="testElem-token"
          className="text-[11.5px] leading-[13.92px] text-[#A4A4A3]"
        >
          Personal Access Token
        </label>
        <TokenInfoIcon />
      </div>
      <input
        id="testElem-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-3 h-9 border border-[#A5ADAD] text-[11.5px] text-[#737470] ${fieldClassName}`}
      />

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[10px]">
        <label
          htmlFor="testElem-url"
          className="text-[11.5px] leading-[13.92px] text-[#A3A3A2]"
        >
          Design URL
        </label>
        <UrlInfoIcon />
      </div>
      <input
        id="testElem-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={`mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726E] ${fieldClassName}`}
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
