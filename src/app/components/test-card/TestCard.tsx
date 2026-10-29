import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Button } from "@app/components/button";

const SUMMARY = "From entire frame to a singl...";
const ACCESS_TOKEN_PLACEHOLDER = "figd_xxxxxxxxxxxxxxxxxxxx";
const DESIGN_URL_PLACEHOLDER = "https://www.figma.com/file/";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken p-9 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-2xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
      >
        <IoSettingsOutline size={28} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3 text-font-subtlest">
      <IoChevronUpOutline size={22} className="shrink-0" />
      <span className="truncate text-base">{SUMMARY}</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <IoChevronUpOutline size={26} className="shrink-0" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-10">
      <div className="flex items-center justify-between">
        <label htmlFor="test-card-token" className="font-primary-bold text-base">
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          size={22}
          aria-hidden
          className="text-icon-subtle"
        />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder={ACCESS_TOKEN_PLACEHOLDER}
        className="mt-4 w-full rounded-md bg-background-input px-6 py-4 font-primary-light text-base text-font-subtlest outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center justify-between">
        <label htmlFor="test-card-url" className="font-primary-bold text-base">
          Design URL
        </label>
        <IoInformationCircleOutline
          size={22}
          aria-hidden
          className="text-icon-subtle"
        />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder={DESIGN_URL_PLACEHOLDER}
        className="mt-4 w-full rounded-md bg-background-input px-6 py-4 font-primary-light text-base text-font-subtlest outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-10 flex gap-9">
      <Button color="warning" className="flex-1 px-8 py-4 text-lg">
        Awesome
      </Button>
      <Button color="warning" className="flex-1 px-8 py-4 text-lg">
        Prepare
      </Button>
    </div>

    <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);
