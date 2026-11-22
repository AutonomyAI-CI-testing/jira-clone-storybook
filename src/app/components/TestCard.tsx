import { useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import {
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button/button";

/**
 * Static reproduction of the "UI magician Agent" Figma frame. Self-contained:
 * it takes no props and holds its own field state.
 */
export const TestCard = (): JSX.Element => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [designUrl, setDesignUrl] = useState<string>("");

  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-5 rounded-md bg-elevation-surface-raised p-6 font-primary text-font shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-black text-3xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="shrink-0 rounded-full p-1 text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
        >
          <IoSettingsOutline size={26} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <HiChevronUp size={20} className="shrink-0 text-icon-subtle" />
        <p className="min-w-0 flex-1 truncate text-lg text-font-subtle">
          From entire frame to a singl…
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <HiChevronUp size={22} className="shrink-0" />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              htmlFor="test-card-access-token"
              className="text-lg text-font-subtle"
            >
              Personal Access Token
            </label>
            <IoInformationCircleOutline
              size={22}
              className="shrink-0 text-icon-subtle"
              aria-hidden="true"
            />
          </div>
          <input
            id="test-card-access-token"
            name="accessToken"
            type="text"
            value={accessToken}
            onChange={(event) => setAccessToken(event.target.value)}
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-border bg-background-input px-3 py-3 text-font outline-2 outline-transparent placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              htmlFor="test-card-design-url"
              className="text-lg text-font-subtle"
            >
              Design URL
            </label>
            <IoInformationCircleOutline
              size={22}
              className="shrink-0 text-icon-subtle"
              aria-hidden="true"
            />
          </div>
          <input
            id="test-card-design-url"
            name="designUrl"
            type="text"
            value={designUrl}
            onChange={(event) => setDesignUrl(event.target.value)}
            placeholder="https://www.figma.com/file/"
            className="w-full rounded border border-border bg-background-input px-3 py-3 text-font outline-2 outline-transparent placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            color="warning"
            variant="subtlest"
            className="w-full rounded-md py-3 text-lg"
          >
            Awesome
          </Button>
          <Button
            color="warning"
            variant="subtlest"
            className="w-full rounded-md py-3 text-lg"
          >
            Prepare
          </Button>
        </div>
      </div>

      <h2 className="mt-2 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
