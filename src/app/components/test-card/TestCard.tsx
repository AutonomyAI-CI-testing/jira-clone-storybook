import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "../button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col gap-12 bg-elevation-surface-sunken px-10 py-12 text-font"
  >
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-lg">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer rounded-full p-1 text-font-subtle hover:bg-background-neutral-hovered"
        >
          <FiSettings aria-hidden size={22} />
        </button>
      </div>

      <div className="flex items-center gap-3 pl-1 text-font-subtlest">
        <FiChevronUp aria-hidden size={18} />
        <span className="truncate font-primary text-sm">
          From entire frame to a singl...
        </span>
      </div>
    </div>

    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-4">
        <FiChevronUp aria-hidden size={22} />
        <h3 className="font-primary-black text-xl">Add New Design</h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-personal-access-token"
            className="font-primary text-sm text-font-subtle"
          >
            Personal Access Token
          </label>
          <FiInfo aria-hidden size={16} className="text-font-subtle" />
        </div>
        <input
          id="test-card-personal-access-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-border-bold bg-background-input p-3 font-primary text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-design-url"
            className="font-primary text-sm text-font-subtle"
          >
            Design URL
          </label>
          <FiInfo aria-hidden size={16} className="text-font-subtle" />
        </div>
        <input
          id="test-card-design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="w-full rounded border border-border-bold bg-background-input p-3 font-primary text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex items-center gap-8 pt-2">
        <Button size="lg" className="min-w-[150px]">
          Awesome
        </Button>
        <Button size="lg" className="min-w-[150px]">
          Prepare
        </Button>
      </div>
    </div>

    <h3 className="font-primary-black text-lg">Recent Breakdowns</h3>
  </div>
);
