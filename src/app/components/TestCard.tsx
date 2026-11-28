import { HiChevronUp, HiOutlineCog, HiOutlineInformationCircle } from "react-icons/hi";
import { Button } from "@app/components/button/button";

// Standalone panel reproducing the "UI magician Agent" Figma frame.
// Smoke-test component: self-contained, no props, no state, no data.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-elevation-surface-sunken px-5 pt-5 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xs">UI magician Agent</h1>
      <HiOutlineCog aria-hidden className="shrink-0 text-icon" size={16} />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <HiChevronUp aria-hidden className="shrink-0 text-icon-subtle" size={12} />
      <span className="truncate font-primary-light text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[74px] flex items-center gap-2">
      <HiChevronUp aria-hidden className="shrink-0 text-icon-subtle" size={14} />
      <h2 className="font-primary-bold text-xs">Add New Design</h2>
    </div>

    <label
      htmlFor="test-elem-token"
      className="mt-7 flex items-center gap-1.5 font-primary-light text-2xs text-font-subtle"
    >
      Personal Access Token
      <HiOutlineInformationCircle
        aria-hidden
        className="shrink-0 text-icon-subtle"
        size={15}
      />
    </label>
    <input
      id="test-elem-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded border border-border-bold bg-background-input px-3 font-primary-light text-2xs text-font placeholder:text-font-subtlest"
    />

    <label
      htmlFor="test-elem-url"
      className="mt-3 flex items-center gap-1.5 font-primary-light text-2xs text-font-subtle"
    >
      Design URL
      <HiOutlineInformationCircle
        aria-hidden
        className="shrink-0 text-icon-subtle"
        size={15}
      />
    </label>
    <input
      id="test-elem-url"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full rounded border-2 border-border-bold bg-background-input px-3 font-primary-light text-2xs text-font placeholder:text-font-subtlest"
    />

    <div className="mt-[22px] flex gap-4">
      <Button type="button" className="w-[85px]">
        Awesome
      </Button>
      <Button type="button" className="w-[85px]">
        Prepare
      </Button>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h2>
  </div>
);
