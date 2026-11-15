import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button";

const FIELD_CLASSES =
  "rounded-md border border-border-input bg-background-input px-4 py-3 font-primary-light text-font placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-10 bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <IoSettingsOutline className="shrink-0 text-icon-subtle" size={22} />
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <IoChevronUp className="shrink-0" size={18} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <IoChevronUp className="shrink-0" size={20} />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="personal-access-token" className="text-font-subtle">
            Personal Access Token
          </label>
          <IoInformationCircleOutline
            className="shrink-0 text-icon-subtle"
            size={18}
          />
        </div>
        <input
          id="personal-access-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="text-font-subtle">
            Design URL
          </label>
          <IoInformationCircleOutline
            className="shrink-0 text-icon-subtle"
            size={18}
          />
        </div>
        <input
          id="design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex gap-8">
        <Button variant="contained" className="w-[170px]">
          Awesome
        </Button>
        <Button variant="contained" className="w-[170px]">
          Prepare
        </Button>
      </div>
    </div>

    <h2 className="font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
