import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Button } from "@app/components/button";

const inputClass =
  "mt-7 h-[65px] w-full rounded bg-background-input px-4 font-primary text-lg outline outline-2 outline-border-input hover:bg-background-input-hovered focus:bg-background-input-pressed focus:outline-border-brand placeholder:font-primary-light placeholder:text-font-subtle";

const actionClass =
  "h-[74px] w-[170px] rounded-lg text-lg !bg-[var(--Orange700)] hover:!bg-[var(--Orange800)] active:!bg-[var(--Orange900)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 pb-32 pt-10 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-[24px] w-[24px] shrink-0 cursor-pointer items-center justify-center rounded-full text-icon-subtle hover:bg-background-brand-subtlest hover:text-icon-brand"
      >
        <IoSettingsOutline size={22} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <IoChevronUpOutline size={18} className="shrink-0" />
      <span className="max-w-[330px] truncate font-primary text-lg">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-36 flex items-center gap-2">
      <IoChevronUpOutline size={22} className="shrink-0 text-font-subtle" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-12">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="font-primary text-lg text-font-subtle"
        >
          Personal Access Token
        </label>
        <IoInformationCircleOutline size={20} className="text-icon-subtle" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />
    </div>

    <div className="mt-9">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="font-primary text-lg text-font-subtle"
        >
          Design URL
        </label>
        <IoInformationCircleOutline size={20} className="text-icon-subtle" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={inputClass}
      />
    </div>

    <div className="mt-14 flex justify-end gap-9">
      <Button className={actionClass}>Awesome</Button>
      <Button className={actionClass}>Prepare</Button>
    </div>

    <h3 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);
