import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "./button/button";

export const TestCard = (): JSX.Element => {
  const labelClass = "text-xs text-font-subtle";
  const inputClass =
    "w-full rounded-md border border-border bg-background-input p-3 text-sm text-font placeholder:text-font-subtlest";

  return (
    <div
      id="testElem"
      className="flex w-[440px] flex-col gap-6 rounded-md bg-elevation-surface p-5 shadow-md"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-lg text-font">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Open settings"
          className="flex items-center justify-center rounded-full text-icon-subtle"
        >
          <IoSettingsOutline size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-font-subtle">
        <IoChevronUpOutline size={18} />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </div>

      <section className="flex flex-col gap-4">
        <h3 className="flex items-center gap-2 font-primary-bold text-lg text-font">
          <IoChevronUpOutline size={18} />
          Add New Design
        </h3>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="test-card-token" className={labelClass}>
              Personal Access Token
            </label>
            <IoInformationCircleOutline
              size={16}
              className="text-icon-subtle"
            />
          </div>
          <input
            id="test-card-token"
            className={inputClass}
            placeholder="figd_xxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="test-card-url" className={labelClass}>
              Design URL
            </label>
            <IoInformationCircleOutline
              size={16}
              className="text-icon-subtle"
            />
          </div>
          <input
            id="test-card-url"
            className={inputClass}
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="flex items-center gap-6 pt-2">
          <Button size="lg">Awesome</Button>
          <Button size="lg">Prepare</Button>
        </div>
      </section>

      <h3 className="font-primary-bold text-lg text-font-subtle">
        Recent Breakdowns
      </h3>
    </div>
  );
};
