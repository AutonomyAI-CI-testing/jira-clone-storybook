import { BiChevronUp } from "react-icons/bi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";

import { Button } from "./button";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-elevation-surface-sunken p-8 font-primary text-font"
  >
    <div className="flex items-center justify-between gap-4">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 rounded p-1 text-font-subtle hover:bg-background-neutral"
      >
        <MdOutlineSettings size={24} />
      </button>
    </div>

    <div className="flex items-center gap-3 border-b border-border pb-4">
      <BiChevronUp size={22} className="shrink-0" />
      <span className="truncate font-primary-light text-base text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-10 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <BiChevronUp size={22} className="shrink-0" />
        <h3 className="font-primary-bold text-lg">Add New Design</h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-token" className="text-base text-font-subtle">
            Personal Access Token
          </label>
          <HiOutlineInformationCircle size={20} aria-hidden="true" />
        </div>
        <input
          id="test-card-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="rounded border border-border bg-background-input p-3 font-primary-light text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-url" className="text-base text-font-subtle">
            Design URL
          </label>
          <HiOutlineInformationCircle size={20} aria-hidden="true" />
        </div>
        <input
          id="test-card-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="rounded border border-border bg-background-input p-3 font-primary-light text-base text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="flex gap-6 pt-4">
        <Button color="danger" className="w-[168px] py-4">
          Awesome
        </Button>
        <Button color="danger" className="w-[168px] py-4">
          Prepare
        </Button>
      </div>
    </div>

    <h2 className="mt-10 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
