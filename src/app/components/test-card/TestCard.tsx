import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "../button";

/**
 * Static reproduction of the "UI magician Agent" settings frame, built as a
 * self-contained smoke test: no props, no state, no interactivity.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-elevation-surface px-5 pt-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-xs font-primary-bold">UI magician Agent</h1>
      <FiSettings
        aria-hidden="true"
        className="mt-0.5 shrink-0 text-icon-subtle"
        size={16}
      />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={12} />
      <span className="truncate text-2xs">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-16 flex items-center gap-2 text-xs font-primary-bold">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={14} />
      Add New Design
    </h2>

    <label className="mt-8 block">
      <span className="flex items-center justify-between text-2xs text-font-subtle">
        Personal Access Token
        <FiInfo aria-hidden="true" size={15} />
      </span>
      <input
        readOnly
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-border-bold bg-background-input px-4 text-2xs text-font-subtle placeholder:text-font-subtlest"
      />
    </label>

    <label className="mt-3 block">
      <span className="flex items-center justify-between text-2xs text-font-subtle">
        Design URL
        <FiInfo aria-hidden="true" size={15} />
      </span>
      <input
        readOnly
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-9 w-full border border-border-bold bg-background-input px-4 text-2xs text-font-subtle placeholder:text-font-subtlest"
      />
    </label>

    <div className="mt-6 flex gap-4">
      <Button type="button" color="warning" className="text-2xs">
        Awesome
      </Button>
      <Button type="button" color="warning" className="text-2xs">
        Prepare
      </Button>
    </div>

    <h2 className="mt-12 text-xs font-primary-bold">Recent Breakdowns</h2>
  </div>
);
