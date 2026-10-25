import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-4 rounded bg-elevation-surface-raised p-6 text-font shadow-sm"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer text-icon"
      >
        <FiSettings size={22} />
      </button>
    </div>

    <div className="flex items-center gap-2">
      <FiChevronUp size={18} className="shrink-0 text-icon" aria-hidden="true" />
      <span className="min-w-0 truncate font-primary text-base">
        From entire frame to a single frame
      </span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={20} className="shrink-0 text-icon" aria-hidden="true" />
      <span className="font-primary-bold text-xl">Add New Design</span>
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-personal-access-token"
          className="font-primary text-base"
        >
          Personal Access Token
        </label>
        <FiInfo size={18} className="shrink-0 text-icon" aria-hidden="true" />
      </div>
      <input
        id="test-card-personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="w-full rounded-md border-none bg-background-input p-3 font-primary text-base placeholder:text-font-subtle"
      />
    </div>

    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-design-url" className="font-primary text-base">
          Design URL
        </label>
        <FiInfo size={18} className="shrink-0 text-icon" aria-hidden="true" />
      </div>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="w-full rounded-md border-none bg-background-input p-3 font-primary text-base placeholder:text-font-subtle"
      />
    </div>

    <div className="mt-2 flex gap-4">
      <Button
        type="button"
        color="warning"
        variant="contained"
        className="px-8 py-3"
      >
        Awesome
      </Button>
      <Button
        type="button"
        color="warning"
        variant="contained"
        className="px-8 py-3"
      >
        Prepare
      </Button>
    </div>

    <span className="mt-6 font-primary-bold text-xl">Recent Breakdowns</span>
  </div>
);
