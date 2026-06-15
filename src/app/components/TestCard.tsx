import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Design tokens for custom smoke-test colors not in the main system
const COLORS = {
  BACKGROUND: '#2a2a2a',
  INPUT_BG: '#3a3a3a',
  BRAND_ORANGE: '#c0622a',
} as const;

/**
 * A self-contained smoke-test component that replicates the "UI magician Agent" panel.
 * Used to verify UI rendering and Tailwind configuration in isolation.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-xs flex-col gap-4 rounded p-5 text-white"
      style={{ backgroundColor: COLORS.BACKGROUND }}
    >
      <Header />

      <Subtitle />

      <SectionHeader title="Add New Design" />

      <InputGroup
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputGroup
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-1 flex gap-3">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <div className="mt-4">
        <h3 className="text-base font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex items-center justify-between">
    <h2 className="text-lg font-bold">UI magician Agent</h2>
    <HiCog className="text-xl text-gray-400" />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center gap-2">
    <HiChevronUp style={{ color: COLORS.BRAND_ORANGE }} />
    <span className="text-sm" style={{ color: COLORS.BRAND_ORANGE }}>
      From entire frame to a singl...
    </span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mt-2 flex items-center gap-2">
    <HiChevronUp className="text-white" />
    <h3 className="text-base font-bold">{title}</h3>
  </div>
);

const InputGroup = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-1">
    <label className="flex items-center gap-1 text-sm">
      {label}
      <HiInformationCircle />
    </label>
    <input
      type="text"
      readOnly // Static smoke-test only - no state management needed
      placeholder={placeholder}
      className="w-full rounded border border-gray-600 px-3 py-2 text-sm placeholder-gray-500"
      style={{ backgroundColor: COLORS.INPUT_BG }}
    />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="rounded px-4 py-2 text-sm font-medium text-white"
    style={{ backgroundColor: COLORS.BRAND_ORANGE }}
  >
    {children}
  </button>
);

