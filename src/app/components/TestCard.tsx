import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button";

/**
 * Static reproduction of the "UI magician Agent" panel from the referenced
 * Figma frame. Self-contained by design: no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col rounded-md bg-elevation-surface-raised px-5 pb-16 pt-5 text-font shadow-sm"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <FiSettings aria-hidden size={16} className="text-icon" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden size={14} className="shrink-0" />
      <span className="truncate font-primary-bold text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp aria-hidden size={14} className="shrink-0 text-icon" />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-5 flex gap-4">
      <Button color="warning" className="w-[85px] text-2xs">
        Awesome
      </Button>
      <Button color="warning" className="w-[85px] text-2xs">
        Prepare
      </Button>
    </div>

    <h2 className="mt-11 font-primary-bold text-xs">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col", className)}>
    <span className="mb-3 flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-font-subtle">
        {label}
      </span>
      <FiInfo aria-hidden size={14} className="shrink-0 text-icon-subtle" />
    </span>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full rounded-md border border-border-bold bg-background-input px-4 py-2 font-primary-light text-2xs placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
