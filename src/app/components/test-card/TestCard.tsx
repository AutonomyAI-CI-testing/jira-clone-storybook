import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoChevronUpOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

import { Button } from "@app/components/button";

const CHEVRON_SIZE = 22;
const INFO_ICON_SIZE = 22;
const SETTINGS_ICON_SIZE = 28;

const inputClassName =
  "mt-3 w-full rounded-md border-none bg-background-input p-4 font-primary outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken px-8 py-8 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <MdOutlineSettings size={SETTINGS_ICON_SIZE} aria-hidden="true" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <IoChevronUpOutline
        size={CHEVRON_SIZE}
        className="shrink-0 text-font-subtle"
        aria-hidden="true"
      />
      <span className="truncate font-primary-light text-font-subtle">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-16">
      <div className="flex items-center gap-3">
        <IoChevronUpOutline
          size={CHEVRON_SIZE}
          className="shrink-0"
          aria-hidden="true"
        />
        <h3 className="font-primary-black text-xl">Add New Design</h3>
      </div>

      <div className="mt-8 space-y-6">
        <Field
          id="testElem-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-6">
        <Button
          color="warning"
          variant="contained"
          size="lg"
          className="flex-1"
        >
          Awesome
        </Button>
        <Button
          color="warning"
          variant="contained"
          size="lg"
          className="flex-1"
        >
          Prepare
        </Button>
      </div>
    </div>

    <h3 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-bold">
        {label}
      </label>
      <HiOutlineInformationCircle size={INFO_ICON_SIZE} aria-hidden="true" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
