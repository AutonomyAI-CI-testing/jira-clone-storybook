import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button";

const FIELD_CLASSES =
  "mt-3 w-full rounded border border-border bg-background-input p-2 font-primary text-2xs text-font outline-none placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-elevation-surface-overlay px-5 py-5 text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary text-xs">UI magician Agent</h2>
        <FiSettings aria-hidden size={16} className="shrink-0 text-icon" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp aria-hidden size={10} className="shrink-0 text-icon-subtle" />
        <span className="min-w-0 flex-1 truncate font-primary text-2xs text-font-subtle">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <FiChevronUp aria-hidden size={12} className="shrink-0 text-icon-subtle" />
        <h2 className="font-primary text-xs text-font-subtle">Add New Design</h2>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <label
          htmlFor="test-card-access-token"
          className="font-primary text-2xs text-font-subtle"
        >
          Personal Access Token
        </label>
        <FiInfo aria-hidden size={15} className="shrink-0 text-icon-subtle" />
      </div>
      <input
        id="test-card-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASSES}
      />

      <div className="mt-3 flex items-center gap-2">
        <label
          htmlFor="test-card-design-url"
          className="font-primary text-2xs text-font-subtle"
        >
          Design URL
        </label>
        <FiInfo aria-hidden size={15} className="shrink-0 text-icon-subtle" />
      </div>
      <input
        id="test-card-design-url"
        placeholder="https://www.figma.com/file/:"
        className={FIELD_CLASSES}
      />

      <div className="mt-5 flex gap-4">
        <Button className="flex-1">Awesome</Button>
        <Button className="flex-1">Prepare</Button>
      </div>

      <h2 className="mt-12 font-primary text-xs">Recent Breakdowns</h2>
    </div>
  );
};
