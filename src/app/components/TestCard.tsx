import {
  AiOutlineInfoCircle,
  AiOutlineSetting,
  AiOutlineUp,
} from "react-icons/ai";

import { Button } from "./button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-elevation-surface p-5 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-sm">UI magician Agent</h2>
      <AiOutlineSetting aria-hidden className="text-icon-subtle" size={16} />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <AiOutlineUp aria-hidden className="shrink-0 text-icon-subtle" size={10} />
      <p className="truncate text-2xs text-font-subtlest">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <AiOutlineUp aria-hidden className="shrink-0 text-icon" size={14} />
      <h3 className="font-primary-bold text-sm">Add New Design</h3>
    </div>

    <label className="mt-6 flex flex-col gap-2">
      <span className="flex items-center gap-2 text-2xs text-font-subtle">
        Personal Access Token
        <AiOutlineInfoCircle
          aria-hidden
          className="text-icon-subtle"
          size={14}
        />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="w-full rounded-md bg-background-input p-3 text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </label>

    <label className="mt-3 flex flex-col gap-2">
      <span className="flex items-center gap-2 text-2xs text-font-subtle">
        Design URL
        <AiOutlineInfoCircle
          aria-hidden
          className="text-icon-subtle"
          size={14}
        />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="w-full rounded-md bg-background-input p-3 text-2xs text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </label>

    <div className="mt-5 flex gap-4">
      <Button type="button" className="w-[87px] text-2xs">
        Awesome
      </Button>
      <Button type="button" className="w-[87px] text-2xs">
        Prepare
      </Button>
    </div>

    <h3 className="mt-11 font-primary-bold text-sm text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
