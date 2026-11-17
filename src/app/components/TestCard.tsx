import { IoChevronUpOutline, IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { Button } from "@app/components/button";

const SUMMARY_TEXT = "From entire frame to a single design";

const inputClassName =
  "mt-4 w-full rounded border border-border-bold bg-elevation-surface-raised px-6 py-3 text-lg placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface p-9 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-2xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center justify-center rounded p-1 text-icon hover:bg-background-neutral-hovered"
      >
        <IoSettingsOutline size={24} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <IoChevronUpOutline size={20} aria-hidden="true" className="shrink-0" />
      <span className="truncate text-lg">{SUMMARY_TEXT}</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <IoChevronUpOutline size={20} aria-hidden="true" className="shrink-0" />
      <span className="font-primary-black text-2xl">Add New Design</span>
    </div>

    <label className="mt-20 block">
      <span className="flex items-center gap-3 text-lg">
        Personal Access Token
        <IoInformationCircleOutline size={20} aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />
    </label>

    <label className="mt-8 block">
      <span className="flex items-center gap-3 text-lg">
        Design URL
        <IoInformationCircleOutline size={20} aria-hidden="true" />
      </span>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className={inputClassName}
      />
    </label>

    <div className="mt-8 flex gap-8">
      <Button color="danger" className="px-10 py-5 text-lg">
        Awesome
      </Button>
      <Button color="danger" className="px-10 py-5 text-lg">
        Prepare
      </Button>
    </div>

    <div className="mt-20 font-primary-black text-2xl">Recent Breakdowns</div>
  </div>
);
