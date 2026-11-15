import { HiChevronUp, HiInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { Button } from "@app/components/button";
import { Tooltip } from "@app/components/tooltip/tooltip";

const iconButtonClass =
  "flex h-[24px] w-[24px] items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand";

const sectionHeadingClass = "font-primary-black text-2xl";

const fieldLabelClass = "text-base text-font";

const fieldInputClass =
  "mt-3 w-full rounded-md border-none bg-background-input p-3 text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface-overlay p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className={sectionHeadingClass}>UI magician Agent</h1>
      <Tooltip title="Settings">
        <button aria-label="Settings" className={iconButtonClass}>
          <MdSettings size={24} />
        </button>
      </Tooltip>
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <HiChevronUp size={20} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <HiChevronUp size={24} className="shrink-0" />
      <h2 className={sectionHeadingClass}>Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="personal-access-token" className={fieldLabelClass}>
          Personal Access Token
        </label>
        <Tooltip title="Your Figma personal access token">
          <HiInformationCircle size={18} className="text-icon-subtle" />
        </Tooltip>
      </div>
      <input
        id="personal-access-token"
        name="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="design-url" className={fieldLabelClass}>
          Design URL
        </label>
        <Tooltip title="The Figma file URL">
          <HiInformationCircle size={18} className="text-icon-subtle" />
        </Tooltip>
      </div>
      <input
        id="design-url"
        name="design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-8 flex gap-4">
      <Button size="lg" className="flex-1">
        Awesome
      </Button>
      <Button size="lg" className="flex-1">
        Prepare
      </Button>
    </div>

    <h2 className={`mt-12 ${sectionHeadingClass}`}>Recent Breakdowns</h2>
  </div>
);
