/**
 * Smoke-test component: renders the "UI magician Agent" settings panel from the
 * supplied Figma frame. Self-contained and prop-free by design.
 *
 * The frame's chevron icons are inlined as exported data URIs. The frame's gear
 * and info exports contain only a cropped fragment of the artwork, so those two
 * are drawn as inline SVG to match what the frame actually shows.
 */

const CHEVRON_SMALL_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAQCAYAAAAI0W+oAAAC6ElEQVR4nK2USUxTURiFz3uvlIo0jC2goMaEjaHiRIJa4kAMJCaC0bULYGPiAmKC08IFRoNuiDEqixKVSCRKoKhYAY2hOEJQ2gJlsNK+FgoVWtRWCu39XUEcgrTKtz7nfv+9N/dyCIPislLaotqMIGMoLSnhwumGzIlTp9ytXQbqGRql3hEbtb3scofTD3mq1jcGSlIqAEYAz4EXOIzZRXve7qy0UPp8KKH2bqMxRqmAPwD4GTBPDETA2nXrU++3PDeuiKjtrVGfmKDIAAHzQQbwBF7CgdE8wDNsSE/PqKlr0P+XSKc3NKWsSVMLvAAWBL56Z/DZ9RnfPD5wvBQymRSxcTHI3J6lfqBrb/rbWkveUcdbkyZekVwkSKXw+WdhMvUjSLPF875ZyKNioUhWQBYt0SSlpAABBq/3K0SrtebQPnXxcrtb5GWPodI8Oklm2xSZx72kffGeyiuqyn/PVd9rLO8ctNDw1AyZxz303mKnu826ypAk2vaO8kFxksxWJ404v5BJ9FDl9doly7eadZX9E9M0PDFDRtFJnaYhulyt+WOoX7hd31LUPWClvk8TZHa4aUCcpicd3Zrlhnv8ukfTP+6iQeckGUQnPdJ3UXVtXdHPGQ4Azl66UJCXdxhsjm9KSEyAEMEjwBjslo/ag7k7C0M5iZZX75pSU5UF0ogocJBgzGEDH8EKG+sbUXWxQsudO1+h3qjapN+VvQdsjiBIBMwxwGLu7yzMV+eEIlngjrZBn7l1hzpOHg9OEOCf8+GZrhW9xr4cXh4Xr9+2LRvEGCSrBEhWRWLM7jCFKwGAYwVHcoZHRkwQeAA8olbLsTf3AGJiE/S8VCYHEyQQpJGQyGT4/t2LfLVKFa5kgaP7c1U2xxgCCCDIESKioxAdpwDfZ/jgcbmmPD7/LFyTLnR2vPD8q2SBpy0PPQ67E1+m3bCNfoLVMuBZfLBXbt6gafcMLp05vSLf//Gyk6RMVkJ0iKi5eo37ARBDW+z0ddH6AAAAAElFTkSuQmCC";

const CHEVRON_MEDIUM_ICON =
  "data:image/png;base64,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";

const ACTION_LABELS = ["Awesome", "Prepare"];

const IconSettings = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const IconInfo = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-elevation-surface-sunken px-5 py-5"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-black text-xs text-font">
          UI magician Agent
        </span>
        <span className="text-font-subtle">
          <IconSettings />
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <img src={CHEVRON_SMALL_ICON} width={8} height={5} alt="" />
        <span className="truncate font-primary-bold text-2xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <img src={CHEVRON_MEDIUM_ICON} width={12} height={8} alt="" />
        <span className="font-primary-black text-xs text-font-subtle">
          Add New Design
        </span>
      </div>

      <TestCardField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <TestCardField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-5 flex gap-4">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-9 w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#cfc5bf] hover:bg-[#9c4520]"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mt-11 font-primary-black text-xs text-font-subtle">
        Recent Breakdowns
      </p>
    </div>
  );
};

const TestCardField = ({
  label,
  placeholder,
}: TestCardFieldProps): JSX.Element => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-font-subtle">
        {label}
      </span>
      <span className="text-font-subtlest">
        <IconInfo />
      </span>
    </div>
    <input
      readOnly
      placeholder={placeholder}
      aria-label={label}
      className="mt-2 h-9 w-full rounded bg-background-input px-3 font-primary-light text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

interface TestCardFieldProps {
  label: string;
  placeholder: string;
}
