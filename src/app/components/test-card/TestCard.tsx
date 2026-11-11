/**
 * TestCard
 *
 * A static, self-contained reproduction of the Figma frame
 * "Test Page - Simple (FOR TESTING)" (node 2:2) rendered as a dark panel.
 *
 * Smoke test: no props, no state, no interaction. Every value below is the
 * frame's own measurement taken from its exported style guide, written as
 * Tailwind arbitrary utilities — this repo's Tailwind config replaces
 * `theme.colors` and `theme.fontFamily` wholesale, so stock palette and font
 * classes compile to nothing. The icons are the frame's own exported SVGs,
 * inlined (the frame's `assets/` folder is not on this sandbox's disk).
 */

function GearIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="14" height="16" fill="url(#testcard-gear-pattern)" />
      <defs>
        <pattern
          id="testcard-gear-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#testcard-gear-image"
            transform="matrix(0.0192308 0 0 0.0168269 0 -0.00480769)"
          />
        </pattern>
        <image
          id="testcard-gear-image"
          width="52"
          height="60"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

function ChevronSmallIcon() {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="8" height="5" fill="url(#testcard-chevron-sm-pattern)" />
      <defs>
        <pattern
          id="testcard-chevron-sm-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#testcard-chevron-sm-image"
            transform="matrix(0.0390625 0 0 0.0625 -0.0078125 0)"
          />
        </pattern>
        <image
          id="testcard-chevron-sm-image"
          width="26"
          height="16"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAC6ElEQVR4nK2USUxTURiFz3uvlIo0jC2goMaEjaHiRIJa4kAMJCaC0bULYGPiAmKC08IFRoNuiDEqixKVSCRKoKhYAY2hOEJQ2gJlsNK+FgoVWtRWCu39XUEcgrTKtz7nfv+9N/dyCIPislLaotqMIGMoLSnhwumGzIlTp9ytXQbqGRql3hEbtb3scofTD3mq1jcGSlIqAEYAz4EXOIzZRXve7qy0UPp8KKH2bqMxRqmAPwD4GTBPDETA2nXrU++3PDeuiKjtrVGfmKDIAAHzQQbwBF7CgdE8wDNsSE/PqKlr0P+XSKc3NKWsSVMLvAAWBL56Z/DZ9RnfPD5wvBQymRSxcTHI3J6lfqBrb/rbWkveUcdbkyZekVwkSKXw+WdhMvUjSLPF875ZyKNioUhWQBYt0SSlpAABBq/3K0SrtebQPnXxcrtb5GWPodI8Oklm2xSZx72kffGeyiuqyn/PVd9rLO8ctNDw1AyZxz303mKnu826ypAk2vaO8kFxksxWJ404v5BJ9FDl9doly7eadZX9E9M0PDFDRtFJnaYhulyt+WOoX7hd31LUPWClvk8TZHa4aUCcpicd3Zrlhnv8ukfTP+6iQeckGUQnPdJ3UXVtXdHPGQ4Azl66UJCXdxhsjm9KSEyAEMEjwBjslo/ag7k7C0M5iZZX75pSU5UF0ogocJBgzGEDH8EKG+sbUXWxQsudO1+h3qjapN+VvQdsjiBIBMwxwGLu7yzMV+eEIlngjrZBn7l1hzpOHg9OEOCf8+GZrhW9xr4cXh4Xr9+2LRvEGCSrBEhWRWLM7jCFKwGAYwVHcoZHRkwQeAA8olbLsTf3AGJiE/S8VCYHEyQQpJGQyGT4/t2LfLVKFa5kgaP7c1U2xxgCCCDIESKioxAdpwDfZ/jgcbmmPD7/LFyTLnR2vPD8q2SBpy0PPQ67E1+m3bCNfoLVMuBZfLBXbt6gafcMLp05vSLf//Gyk6RMVkJ0iKi5eo37ARBDW+z0ddH6AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}

function ChevronLargeIcon() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="12" height="8" fill="url(#testcard-chevron-lg-pattern)" />
      <defs>
        <pattern
          id="testcard-chevron-lg-pattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#testcard-chevron-lg-image"
            transform="matrix(0.0222222 0 0 0.0333333 -0.0111111 0)"
          />
        </pattern>
        <image
          id="testcard-chevron-lg-image"
          width="46"
          height="30"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

function InfoIcon({ id }: { id: string }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="15" height="15" fill={`url(#${id}-pattern)`} />
      <defs>
        <pattern
          id={`${id}-pattern`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={`#${id}-image`} transform="scale(0.0181818)" />
        </pattern>
        <image
          id={`${id}-image`}
          width="55"
          height="55"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-[20px] pt-[20px] pb-[62px] font-[Inter,sans-serif]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <ChevronSmallIcon />
        <span className="text-[11.5px] leading-[14px] font-semibold text-[#8b9291]">
          From entire frame to a singl…
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <ChevronLargeIcon />
        <span className="text-[13.5px] leading-[16px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[18px]">
        <span className="text-[11.5px] leading-[14px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon id="testcard-info-token" />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className="text-[11.5px] leading-[14px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[18px]">
        <span className="text-[11.5px] leading-[14px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon id="testcard-info-url" />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[18px]">
        <span className="text-[10.5px] leading-[13px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[14px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[14px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <h2 className="mt-[47px] text-[13.5px] leading-[16px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
