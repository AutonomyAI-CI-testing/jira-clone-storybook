import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

import { Button } from "@app/components/button/button";

const TOKEN_FIELD_ID = "testElem-personal-access-token";
const URL_FIELD_ID = "testElem-design-url";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-elevation-surface p-5 font-primary text-2xs text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded-full p-1 text-font-subtle"
      >
        <FiSettings aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="h-3 w-3 shrink-0 text-font-subtle"
      />
      <span className="truncate text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className="h-3 w-3 shrink-0 text-font-subtle"
      />
      <h3 className="font-primary-bold text-xs text-font-subtle">
        Add New Design
      </h3>
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label htmlFor={TOKEN_FIELD_ID} className="text-font-subtlest">
          Personal Access Token
        </label>
        <FiInfo
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-font-subtlest"
        />
      </div>
      <input
        id={TOKEN_FIELD_ID}
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded bg-background-input p-2 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label htmlFor={URL_FIELD_ID} className="text-font-subtlest">
          Design URL
        </label>
        <FiInfo
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-font-subtlest"
        />
      </div>
      <input
        id={URL_FIELD_ID}
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 w-full rounded bg-background-input p-2 text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-5 flex gap-4">
      <Button color="neutral" className="w-[85px]">
        Awesome
      </Button>
      <Button color="neutral" className="w-[85px]">
        Prepare
      </Button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
