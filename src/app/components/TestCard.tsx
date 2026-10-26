import type { ReactNode } from "react";
import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button";

const ICON_SIZE = 20;

const CollapsibleRow = ({
  children,
  className,
}: CollapsibleRowProps): JSX.Element => (
  <div className={cx("flex items-center gap-2", className)}>
    <FiChevronUp size={ICON_SIZE} aria-hidden="true" className="shrink-0" />
    {children}
  </div>
);

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <label className={cx("block", className)}>
    <span className="flex items-center gap-2 text-sm text-font">
      {label}
      <FiInfo size={16} aria-hidden="true" className="text-font-subtle" />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded-md border-2 border-border-bold bg-background-input px-4 py-3 text-font placeholder:text-font-subtlest"
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <header className="flex items-start justify-between">
      <h2 className="font-primary-bold text-lg text-font">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <FiSettings size={22} aria-hidden="true" />
      </button>
    </header>

    <CollapsibleRow className="mt-8 text-font-subtle">
      <span className="truncate">From entire frame to a singl...</span>
    </CollapsibleRow>

    <CollapsibleRow className="mt-32">
      <h3 className="font-primary-bold text-xl text-font">Add New Design</h3>
    </CollapsibleRow>

    <Field
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-7"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-11 flex gap-9 pl-12">
      <Button type="button" className="h-16 w-[168px] text-lg">
        Awesome
      </Button>
      <Button type="button" className="h-16 w-[168px] text-lg">
        Prepare
      </Button>
    </div>

    <h3 className="mt-16 font-primary-bold text-xl text-font">
      Recent Breakdowns
    </h3>
  </div>
);

interface CollapsibleRowProps {
  children: ReactNode;
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
