import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

import { Button } from "@app/components/button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface-raised px-6 py-6 text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded-full p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
      >
        <FaCog aria-hidden className="text-2xl" />
      </button>
    </header>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp aria-hidden className="shrink-0 text-xs text-icon-subtle" />
      <span className="truncate font-primary-light text-base text-font-subtle">
        From entire frame to a single…
      </span>
    </div>

    <section className="mt-16 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <FaChevronUp aria-hidden className="text-base" />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <label className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-primary text-base text-font-subtle">
          Personal Access Token
          <FaInfoCircle aria-hidden className="text-base" />
        </span>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="rounded-md border border-border-bold bg-background-input p-3 font-primary-light text-base outline-none placeholder:text-font-subtlest"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="flex items-center gap-2 font-primary text-base text-font-subtle">
          Design URL
          <FaInfoCircle aria-hidden className="text-base" />
        </span>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="rounded-md border border-border-bold bg-background-input p-3 font-primary-light text-base outline-none placeholder:text-font-subtlest"
        />
      </label>

      <div className="flex gap-4">
        <Button color="warning" className="flex-1 text-base">
          Awesome
        </Button>
        <Button color="warning" className="flex-1 text-base">
          Prepare
        </Button>
      </div>
    </section>

    <h2 className="mt-12 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
