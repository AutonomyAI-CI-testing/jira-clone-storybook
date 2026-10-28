import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button/button";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-8 rounded-md bg-elevation-surface-raised p-10 font-primary text-font shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-primary-black text-2xl leading-none">
          UI magician Agent
        </h2>
        <IoSettingsOutline
          aria-hidden
          className="shrink-0 text-2xl text-icon-subtle"
        />
      </div>

      <div className="flex items-center gap-2 text-font-subtle">
        <IoChevronUp aria-hidden className="shrink-0 text-base" />
        <span className="min-w-0 truncate font-primary-light text-lg">
          From entire frame to a singl…
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <IoChevronUp aria-hidden className="shrink-0 text-base" />
          <h3 className="font-primary-black text-xl leading-none">
            Add New Design
          </h3>
        </div>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-primary text-base text-font-subtle">
            Personal Access Token
            <IoInformationCircleOutline aria-hidden className="text-lg" />
          </span>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className="rounded-md bg-background-input p-3 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-primary text-base text-font-subtle">
            Design URL
            <IoInformationCircleOutline aria-hidden className="text-lg" />
          </span>
          <input
            readOnly
            placeholder="https://www.figma.com/file/"
            className="rounded-md bg-background-input p-3 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
          />
        </label>

        <div className="flex gap-8 pt-2">
          <Button className="w-[172px] py-5 text-lg">Awesome</Button>
          <Button
            color="neutral"
            variant="subtlest"
            className="w-[172px] py-5 text-lg"
          >
            Prepare
          </Button>
        </div>
      </div>

      <h3 className="font-primary-black text-xl leading-none">
        Recent Breakdowns
      </h3>
    </div>
  );
};
