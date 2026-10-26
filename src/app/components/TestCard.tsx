import cx from "classix";
import type { ReactNode } from "react";

const SvgIcon = ({ className, children }: SvgIconProps) => (
  <svg
    className={cx("h-6 w-6 shrink-0", className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const SettingsIcon = () => (
  <SvgIcon className="h-7 w-7">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </SvgIcon>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <SvgIcon className={className}>
    <path d="m18 15-6-6-6 6" />
  </SvgIcon>
);

const InfoIcon = () => (
  <SvgIcon>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </SvgIcon>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-24 pt-14 font-primary-light text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px] leading-none">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex-center -mt-1 rounded text-[var(--DarkNeutral800)] hover:text-[var(--DarkNeutral1000)]"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3 text-[var(--DarkNeutral800)]">
      <ChevronUpIcon />
      <span className="truncate text-[21px]">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-24 flex items-center gap-3 font-primary-bold text-[28px]">
      <ChevronUpIcon className="h-7 w-7" />
      Add New Design
    </h2>

    <div className="mt-10">
      <div className="flex items-center gap-4">
        <label htmlFor="test-card-token" className="text-[21px]">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[var(--DarkNeutral350)] bg-transparent px-3 py-4 text-[19px] text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-4">
        <label htmlFor="test-card-url" className="text-[21px]">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file:"
        className="mt-3 w-full rounded border border-[var(--DarkNeutral350)] bg-transparent px-3 py-4 text-[19px] text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>

    <div className="mt-12 flex gap-9">
      <button
        type="button"
        className="h-[75px] flex-1 rounded-lg bg-[var(--Orange800)] font-primary-bold text-[21px] text-[var(--DarkNeutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[75px] flex-1 rounded-lg bg-[var(--Orange800)] font-primary-bold text-[21px] text-[var(--DarkNeutral600)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[26px]">Recent Breakdowns</h2>
  </div>
);

interface SvgIconProps {
  className?: string;
  children: ReactNode;
}
