import type { ReactNode } from "react";

const IconCog = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const IconChevronUp = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const IconInfo = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const DesignField = ({
  id,
  label,
  placeholder,
}: DesignFieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label
        className="font-primary-light text-base text-[#c9c9c9]"
        htmlFor={id}
      >
        {label}
      </label>
      <span className="text-[#c9c9c9]">
        <IconInfo />
      </span>
    </div>
    <input
      className="mt-3 w-full rounded-[10px] border-2 border-[#b3b3b3] bg-[#2a2a2a] px-4 py-3 font-primary-light text-base text-[#e6e6e6] placeholder:text-[#8f8f8f]"
      id={id}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    className="rounded-md bg-[#a04a2c] px-7 py-3 font-primary text-base text-[#d8cec8]"
    type="button"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    className="w-[508px] bg-[#1e1e1e] px-6 py-7 font-primary text-[#e6e6e6]"
    id="testElem"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-xl text-[#f2f2f2]">
        UI magician Agent
      </h2>
      <span className="text-[#d0d0d0]">
        <IconCog />
      </span>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <span className="text-[#d0d0d0]">
        <IconChevronUp />
      </span>
      <span className="truncate font-primary-light text-base text-[#c9c9c9]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <span className="text-[#f2f2f2]">
        <IconChevronUp />
      </span>
      <h3 className="font-primary-bold text-xl text-[#f2f2f2]">
        Add New Design
      </h3>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <DesignField
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <DesignField
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex items-center gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-24 font-primary-bold text-xl text-[#f2f2f2]">
      Recent Breakdowns
    </h3>
  </div>
);

interface DesignFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
