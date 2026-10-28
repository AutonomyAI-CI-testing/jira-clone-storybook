import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import { Button } from "@app/components/button";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Self-contained: no props, no state, no data. It renders on its own dark
 * surface so it looks the same wherever it is dropped.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex min-h-[508px] w-[254px] flex-col bg-elevation-surface px-5 py-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <FaCog aria-hidden size={16} className="text-icon-subtle" />
    </div>

    <div className="mt-3 flex items-center gap-1.5 text-font-subtle">
      <FaChevronUp aria-hidden size={8} />
      <span className="truncate text-2xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-1.5">
      <FaChevronUp aria-hidden size={10} />
      <h3 className="font-primary-bold text-xs text-font-subtle">
        Add New Design
      </h3>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" value="https://www.figma.com/file/:" />

    <div className="mt-6 flex gap-4">
      <Button
        color="warning"
        variant="contained"
        className="h-[37px] w-[85px] text-2xs"
      >
        Awesome
      </Button>
      <Button
        color="warning"
        variant="contained"
        className="h-[37px] w-[85px] text-2xs"
      >
        Prepare
      </Button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({
  label,
  value,
  className,
}: FieldProps): JSX.Element => (
  <div className={cx("mt-3", className)}>
    <div className="flex items-center gap-1.5 text-font-subtle">
      <span className="text-2xs">{label}</span>
      <FaInfoCircle aria-hidden size={11} />
    </div>
    <div className="mt-3 flex h-9 items-center rounded bg-background-input px-3 text-2xs text-font-subtlest outline outline-2 outline-border-input">
      {value}
    </div>
  </div>
);

interface FieldProps {
  label: string;
  value: string;
  className?: string;
}
