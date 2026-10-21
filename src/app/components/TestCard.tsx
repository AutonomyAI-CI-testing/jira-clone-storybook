import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

import { Button } from "./button/button";

const inputStyle =
  "mt-2 w-full rounded border border-border-bold bg-background-input px-3 py-2.5 text-sm font-primary-light text-font outline-none placeholder:text-font-subtlest focus-visible:outline-2 focus-visible:outline-border-brand";

const labelStyle = "flex items-center gap-1.5 text-sm text-font-subtle";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[360px] rounded-md bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer rounded-full p-1 text-icon hover:bg-background-neutral"
      >
        <IoSettingsOutline size={20} />
      </button>
    </div>

    <div className="mt-3 flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={16} />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <FiChevronUp size={16} />
      <h2 className="font-primary-black text-xl">Add New Design</h2>
    </div>

    <div className="mt-5">
      <label htmlFor="testcard-access-token" className={labelStyle}>
        Personal Access Token
        <FiInfo aria-hidden size={14} />
      </label>
      <input
        id="testcard-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={inputStyle}
      />
    </div>

    <div className="mt-4">
      <label htmlFor="testcard-design-url" className={labelStyle}>
        Design URL
        <FiInfo aria-hidden size={14} />
      </label>
      <input
        id="testcard-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={inputStyle}
      />
    </div>

    <div className="my-6 border-t border-border" />

    <div className="flex gap-3">
      <Button className="flex-1">Awesome</Button>
      <Button className="flex-1">Prepare</Button>
    </div>

    <h2 className="mt-10 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
