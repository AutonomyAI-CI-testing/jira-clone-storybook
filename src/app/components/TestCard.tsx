import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

import { Button } from "@app/components/button/button";

const fieldClass =
  "h-9 w-full rounded border-none bg-background-input px-3 text-2xs text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-2xs placeholder:text-font-subtlest hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-border-brand";

const labelClass = "font-primary-bold text-2xs text-font-subtle";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-xl bg-elevation-surface-sunken px-5 pb-8 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xs text-font">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex cursor-pointer items-center justify-center rounded-full text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <MdSettings size={16} />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-1.5">
      <HiChevronUp size={12} className="shrink-0 text-font-subtle" />
      <span className="truncate font-primary text-2xs text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiChevronUp size={14} className="shrink-0 text-font-subtle" />
      <h3 className="font-primary-bold text-xs text-font-subtle">
        Add New Design
      </h3>
    </div>

    <div className="mt-6 space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-token" className={labelClass}>
          Personal Access Token
        </label>
        <AiOutlineInfoCircle
          size={15}
          aria-hidden
          className="shrink-0 text-font-subtle"
        />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </div>

    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor="testElem-url" className={labelClass}>
          Design URL
        </label>
        <AiOutlineInfoCircle
          size={15}
          aria-hidden
          className="shrink-0 text-font-subtle"
        />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={fieldClass}
      />
    </div>

    <div className="mt-8 flex justify-center gap-4">
      <Button color="primary" variant="contained">
        Awesome
      </Button>
      <Button color="primary" variant="contained">
        Prepare
      </Button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs text-font">
      Recent Breakdowns
    </h3>
  </div>
);
