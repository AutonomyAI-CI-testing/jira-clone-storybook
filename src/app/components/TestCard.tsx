import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-4 bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded p-1 text-icon hover:bg-background-neutral"
      >
        <HiOutlineCog size={24} />
      </button>
    </div>

    <div className="flex items-center gap-3 text-font-subtle">
      <HiChevronUp size={20} aria-hidden="true" />
      <span className="truncate text-sm">From entire frame to a singl…</span>
    </div>

    <section className="mt-28 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <HiChevronUp size={24} aria-hidden="true" />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <div className="mt-3 flex items-center gap-2 text-font-subtle">
        <span className="text-sm">Personal Access Token</span>
        <HiOutlineInformationCircle size={18} aria-hidden="true" />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="w-full rounded-md border border-border bg-background-input px-4 py-4 text-sm placeholder:text-font-subtlest"
      />

      <div className="flex items-center gap-2 text-font-subtle">
        <span className="text-sm">Design URL</span>
        <HiOutlineInformationCircle size={18} aria-hidden="true" />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="w-full rounded-md border border-border bg-background-input px-4 py-4 text-sm placeholder:text-font-subtlest"
      />

      <div className="mt-3 flex gap-10">
        <Button
          color="danger"
          variant="contained"
          size="lg"
          className="min-w-[150px]"
        >
          Awesome
        </Button>
        <Button
          color="danger"
          variant="contained"
          size="lg"
          className="min-w-[150px]"
        >
          Prepare
        </Button>
      </div>
    </section>

    <h2 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
