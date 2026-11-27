import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

import { Button } from "@app/components/button";

const inputClassName = cx(
  "w-full rounded-md border-none bg-background-input p-3 text-sm text-font outline-2 outline-border-input",
  "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
  "hover:bg-background-input-hovered focus-visible:bg-background-input-pressed focus-visible:outline-border-brand"
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-sm">
        {label}
      </label>
      <IoInformationCircleOutline
        size={16}
        aria-hidden
        className="shrink-0 text-font-subtlest"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={cx(
      "flex min-h-[600px] w-full max-w-[508px] flex-col gap-6 p-6",
      "bg-elevation-surface-sunken text-font"
    )}
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className={cx(
          "flex cursor-pointer items-center justify-center rounded-full p-1",
          "text-icon-subtle hover:bg-background-neutral hover:text-icon"
        )}
      >
        <IoSettingsOutline size={22} />
      </button>
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <IoChevronUpOutline size={18} className="shrink-0" />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a singl...
      </span>
    </div>

    <div className="flex flex-col gap-5">
      <h2 className="flex items-center gap-2 font-primary-black text-lg">
        <IoChevronUpOutline size={20} className="shrink-0" />
        Add New Design
      </h2>

      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex items-center gap-4 pt-1">
        <Button size="lg" type="button">
          Awesome
        </Button>
        <Button size="lg" type="button">
          Prepare
        </Button>
      </div>
    </div>

    <h2 className="font-primary-black text-lg">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
