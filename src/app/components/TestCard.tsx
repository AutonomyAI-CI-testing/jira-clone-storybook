import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "./button/button";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-elevation-surface px-5 py-5 font-primary text-font"
  >
    <div className="flex items-center justify-between gap-2">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <FiSettings aria-hidden size={16} className="shrink-0 text-icon-subtle" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={12} className="shrink-0 text-icon-subtle" />
      <span className="truncate font-primary text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FiChevronUp aria-hidden size={14} className="shrink-0 text-icon-subtle" />
      <h3 className="font-primary-bold text-xs text-font-subtle">
        Add New Design
      </h3>
    </div>

    <div className="mt-7 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="testElem-token"
          className="font-primary text-2xs text-font-subtle"
        >
          Personal Access Token
        </label>
        <FiInfo aria-hidden size={15} className="shrink-0 text-icon-subtle" />
      </div>
      <input
        id="testElem-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="h-9 rounded-md border border-border bg-background-input px-3 font-primary-light text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-3 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <label
          htmlFor="testElem-url"
          className="font-primary text-2xs text-font-subtle"
        >
          Design URL
        </label>
        <FiInfo aria-hidden size={15} className="shrink-0 text-icon-subtle" />
      </div>
      <input
        id="testElem-url"
        placeholder="https://www.figma.com/file/:"
        className="h-9 rounded-md border border-border bg-background-input px-3 font-primary-light text-2xs text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-5 flex justify-center gap-[18px]">
      <Button className="h-10 w-[85px] text-2xs">Awesome</Button>
      <Button className="h-10 w-[85px] text-2xs">Prepare</Button>
    </div>

    <h3 className="mt-[46px] font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
