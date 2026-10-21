import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

import { Button } from "@app/components/button/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[420px] flex-col gap-8 bg-elevation-surface-sunken px-6 py-8 text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer rounded-full p-1 text-icon-subtle hover:bg-background-neutral"
        >
          <HiOutlineCog size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-3 text-font-subtle">
        <HiChevronUp size={18} aria-hidden="true" />
        <span className="truncate font-primary-light text-sm">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <HiChevronUp size={24} aria-hidden="true" />
          <h2 className="font-primary-black text-2xl">Add New Design</h2>
        </div>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 text-font-subtle">
            <span className="font-primary-light text-sm">
              Personal Access Token
            </span>
            <HiOutlineInformationCircle size={16} aria-hidden="true" />
          </span>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-border bg-transparent p-3 font-primary-light text-sm text-font placeholder:text-font-subtlest"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 text-font-subtle">
            <span className="font-primary-light text-sm">Design URL</span>
            <HiOutlineInformationCircle size={16} aria-hidden="true" />
          </span>
          <input
            type="text"
            placeholder="https://www.figma.com/file/"
            className="w-full rounded border border-border bg-transparent p-3 font-primary-light text-sm text-font placeholder:text-font-subtlest"
          />
        </label>

        <div className="mt-2 flex items-center gap-6">
          <Button color="danger" variant="contained" size="lg" className="flex-1">
            Awesome
          </Button>
          <Button color="danger" variant="contained" size="lg" className="flex-1">
            Prepare
          </Button>
        </div>
      </div>

      <h2 className="font-primary-black text-xl text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};
