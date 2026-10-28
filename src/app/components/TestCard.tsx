import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "@app/components/button";

const SUMMARY_LABEL = "From entire frame to a singl...";

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="w-[440px] rounded-md bg-elevation-surface-overlay p-5 font-primary text-font shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex size-6 shrink-0 items-center justify-center rounded-full text-icon-subtle hover:bg-background-neutral-hovered"
        >
          <FiSettings aria-hidden size={20} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 py-2">
        <FiChevronUp
          aria-hidden
          size={20}
          className="shrink-0 text-icon-subtle"
        />
        <span className="truncate font-primary-light text-sm text-font-subtle">
          {SUMMARY_LABEL}
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <FiChevronUp
          aria-hidden
          size={20}
          className="shrink-0 text-icon-subtle"
        />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-personal-access-token"
            className="font-primary-bold text-sm"
          >
            Personal Access Token
          </label>
          <FiInfo aria-hidden size={18} className="text-icon-subtle" />
        </div>
        <input
          id="test-card-personal-access-token"
          name="personalAccessToken"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="h-12 w-full rounded bg-background-input px-3 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus:outline-border-brand"
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-design-url"
            className="font-primary-bold text-sm"
          >
            Design URL
          </label>
          <FiInfo aria-hidden size={18} className="text-icon-subtle" />
        </div>
        <input
          id="test-card-design-url"
          name="designUrl"
          placeholder="https://www.figma.com/file/"
          className="h-12 w-full rounded bg-background-input px-3 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus:outline-border-brand"
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Button variant="contained" className="flex-1">
          Awesome
        </Button>
        <Button variant="contained" className="flex-1">
          Prepare
        </Button>
      </div>

      <h2 className="mt-8 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  </div>
);
