import { FaChevronUp, FaCog } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

import { Button } from "./button/button";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-elevation-surface p-6 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer rounded-full p-1 text-font-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
        >
          <FaCog size={22} />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2 text-font-subtle">
        <FaChevronUp size={14} className="shrink-0" />
        <span className="truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-24">
        <div className="flex items-center gap-2">
          <FaChevronUp size={18} className="shrink-0" />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="test-card-access-token" className="text-base">
              Personal Access Token
            </label>
            <HiOutlineInformationCircle
              size={16}
              className="text-font-subtle"
              aria-hidden
            />
          </div>
          <input
            id="test-card-access-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className="w-full rounded-md border-none bg-background-input p-4 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed placeholder:text-font-subtle"
          />
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="test-card-design-url" className="text-base">
              Design URL
            </label>
            <HiOutlineInformationCircle
              size={16}
              className="text-font-subtle"
              aria-hidden
            />
          </div>
          <input
            id="test-card-design-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className="w-full rounded-md border-none bg-background-input p-4 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed placeholder:text-font-subtle"
          />
        </div>

        <div className="mt-8 flex gap-4">
          <Button color="warning" size="lg" className="flex-1">
            Awesome
          </Button>
          <Button color="warning" size="lg" className="flex-1">
            Prepare
          </Button>
        </div>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
