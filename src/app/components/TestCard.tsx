import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-elevation-surface-sunken p-5 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-sm">UI magician Agent</span>
        <SettingsGlyph />
      </div>

      <div className="mt-[34px] flex items-center gap-2">
        <ChevronUpGlyph className="h-[5px] w-2" />
        <span className="truncate text-xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[91px] flex items-center gap-2">
        <ChevronUpGlyph className="h-2 w-3" />
        <span className="font-primary-bold text-sm">Add New Design</span>
      </div>

      <label className="mt-[44px] block">
        <span className="flex items-center gap-3 text-xs text-font-subtle">
          Personal Access Token
          <InfoGlyph />
        </span>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="mt-[26px] h-9 w-full rounded border border-border-bold bg-background-input px-2 text-xs text-font outline-none placeholder:text-font-subtlest"
        />
      </label>

      <label className="mt-[11px] block">
        <span className="flex items-center gap-3 text-xs text-font-subtle">
          Design URL
          <InfoGlyph />
        </span>
        <input
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-[25px] h-9 w-full rounded border border-border-bold bg-background-input px-2 text-xs text-font outline-none placeholder:text-font-subtlest"
        />
      </label>

      <div className="mt-[22px] ml-6 flex gap-4">
        <Button color="warning" className="w-[85px] text-xs">
          Awesome
        </Button>
        <Button color="warning" className="w-[85px] text-xs">
          Prepare
        </Button>
      </div>

      <div className="mt-[46px] font-primary-bold text-sm">
        Recent Breakdowns
      </div>
    </div>
  );
};

const SettingsGlyph = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-4 w-3.5 text-font-subtle"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
  >
    <circle cx="8" cy="8" r="2.6" />
    <path d="M8 1.5v2.2M8 12.3v2.2M1.5 8h2.2M12.3 8h2.2M3.4 3.4l1.6 1.6M11 11l1.6 1.6M12.6 3.4 11 5M5 11l-1.6 1.6" />
  </svg>
);

const ChevronUpGlyph = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="h-4 w-4 text-font-subtle"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.4v4" />
    <circle cx="8" cy="4.9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);
