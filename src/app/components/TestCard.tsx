import { Button } from "@app/components/button";
import {
  MdInfoOutline,
  MdKeyboardArrowUp,
  MdSettings,
} from "react-icons/md";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] max-w-full bg-elevation-surface-sunken p-4 font-primary text-font"
  >
    <div className="flex items-center justify-between gap-2">
      <h2 className="font-primary-black text-lg">UI magician Agent</h2>
      <MdSettings aria-hidden className="text-xl text-icon-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <MdKeyboardArrowUp aria-hidden className="shrink-0 text-lg" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-8 flex items-center gap-2">
      <MdKeyboardArrowUp aria-hidden className="shrink-0 text-lg" />
      <h3 className="font-primary-bold text-base">Add New Design</h3>
    </div>

    <label className="mt-4 block">
      <span className="flex items-center gap-2">
        <span className="text-sm text-font-subtle">Personal Access Token</span>
        <MdInfoOutline aria-hidden className="text-base text-icon-subtle" />
      </span>
      <input
        className="mt-2 w-full rounded-md border border-border-input bg-background-input px-3 py-2 text-sm text-font placeholder:text-font-subtlest"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </label>

    <label className="mt-4 block">
      <span className="flex items-center gap-2">
        <span className="text-sm text-font-subtle">Design URL</span>
        <MdInfoOutline aria-hidden className="text-base text-icon-subtle" />
      </span>
      <input
        className="mt-2 w-full rounded-md border border-border-input bg-background-input px-3 py-2 text-sm text-font placeholder:text-font-subtlest"
        placeholder="https://www.figma.com/file:"
      />
    </label>

    <div className="mt-6 flex gap-3">
      <Button type="button" color="warning" className="px-6 opacity-60">
        Awesome
      </Button>
      <Button type="button" color="warning" className="px-6 opacity-60">
        Prepare
      </Button>
    </div>

    <h3 className="mt-10 font-primary-bold text-base">Recent Breakdowns</h3>
  </div>
);
