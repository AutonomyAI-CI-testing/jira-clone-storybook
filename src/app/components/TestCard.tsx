import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button/button";

const fieldClassName =
  "mt-2 w-full rounded-md border border-border bg-elevation-surface-raised p-3 text-lg text-font placeholder:text-font-subtle";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pb-10 pt-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <FiSettings aria-hidden className="h-6 w-6" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
      <span className="min-w-0 truncate font-primary-bold text-lg">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-32 flex items-center gap-2">
      <FiChevronUp aria-hidden className="h-6 w-6 shrink-0" />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <label
      htmlFor="test-card-token"
      className="mt-12 flex items-center gap-4 text-lg"
    >
      Personal Access Token
      <FiInfo aria-hidden className="h-6 w-6" />
    </label>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={fieldClassName}
    />

    <label
      htmlFor="test-card-url"
      className="mt-6 flex items-center gap-4 text-lg"
    >
      Design URL
      <FiInfo aria-hidden className="h-6 w-6" />
    </label>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={fieldClassName}
    />

    <div className="mt-10 flex gap-8">
      <Button
        type="button"
        color="warning"
        variant="contained"
        className="h-16 w-[172px] text-lg"
      >
        Awesome
      </Button>
      <Button
        type="button"
        color="warning"
        variant="contained"
        className="h-16 w-[172px] text-lg"
      >
        Prepare
      </Button>
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
