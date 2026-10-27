import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { Button } from "@app/components/button/button";
import { Tooltip } from "@app/components/tooltip/tooltip";

const labelClass =
  "flex items-center gap-2 font-primary-light text-sm text-font";
const inputClass =
  "mt-2 w-full rounded border border-border-bold bg-background-input p-3 font-primary text-sm text-font placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[508px] bg-elevation-surface px-8 py-6">
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl text-font">
          UI magician Agent
        </h1>
        <Tooltip title="Settings">
          <button
            type="button"
            aria-label="Settings"
            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
          >
            <HiOutlineCog className="h-5 w-5" />
          </button>
        </Tooltip>
      </div>

      <div className="mt-4 flex items-center gap-3 text-font-subtle">
        <HiChevronUp className="h-4 w-4 shrink-0" />
        <span className="truncate font-primary text-sm">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-16">
        <h2 className="flex items-center gap-3 font-primary-bold text-xl text-font">
          <HiChevronUp className="h-5 w-5" />
          Add New Design
        </h2>

        <div className="mt-8">
          <label className={labelClass} htmlFor="test-card-access-token">
            Personal Access Token
            <HiOutlineInformationCircle className="h-4 w-4 text-icon-subtle" />
          </label>
          <input
            id="test-card-access-token"
            name="test-card-access-token"
            className={inputClass}
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-5">
          <label className={labelClass} htmlFor="test-card-design-url">
            Design URL
            <HiOutlineInformationCircle className="h-4 w-4 text-icon-subtle" />
          </label>
          <input
            id="test-card-design-url"
            name="test-card-design-url"
            className={inputClass}
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Button color="danger" variant="contained" size="lg">
            Awesome
          </Button>
          <Button color="danger" variant="contained" size="lg">
            Prepare
          </Button>
        </div>
      </section>

      <h2 className="mt-16 font-primary-bold text-xl text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};
