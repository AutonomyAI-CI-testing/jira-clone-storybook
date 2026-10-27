import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";
import { Button } from "@app/components/button/button";
import { Tooltip } from "@app/components/tooltip/tooltip";

const inputClassName =
  "h-14 w-full rounded-md border border-border bg-background-input px-4 font-primary-light text-font outline-none placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-12 bg-elevation-surface p-6 text-font"
  >
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-font-subtle hover:bg-background-neutral-hovered hover:text-font"
        >
          <MdSettings size={22} />
        </button>
      </div>

      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-2 text-left text-sm text-font-subtle hover:text-font"
      >
        <MdKeyboardArrowUp size={18} className="shrink-0" />
        <span className="truncate">From entire frame to a singl…</span>
      </button>
    </div>

    <div className="flex flex-col gap-6">
      <h2 className="flex items-center gap-2 font-primary-bold text-2xl">
        <MdKeyboardArrowUp size={24} className="shrink-0" />
        Add New Design
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-access-token"
            className="text-sm text-font-subtle"
          >
            Personal Access Token
          </label>
          <Tooltip title="Your Figma personal access token">
            <MdInfoOutline size={18} className="text-font-subtle" />
          </Tooltip>
        </div>
        <input
          id="test-card-access-token"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-design-url" className="text-sm text-font-subtle">
            Design URL
          </label>
          <Tooltip title="The Figma file or frame to break down">
            <MdInfoOutline size={18} className="text-font-subtle" />
          </Tooltip>
        </div>
        <input
          id="test-card-design-url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={inputClassName}
        />
      </div>

      <div className="flex items-center gap-6">
        <Button
          type="button"
          color="warning"
          variant="contained"
          size="lg"
          className="h-14 w-[170px]"
        >
          Awesome
        </Button>
        <Button
          type="button"
          color="warning"
          variant="contained"
          size="lg"
          className="h-14 w-[170px]"
        >
          Prepare
        </Button>
      </div>
    </div>

    <h2 className="font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
