import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

import { Button } from "./button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface p-8 text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
      <HiOutlineCog
        size={26}
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
      />
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <HiOutlineChevronUp size={20} aria-hidden="true" className="shrink-0" />
      <span className="min-w-0 flex-1 truncate font-primary-light">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <HiOutlineChevronUp size={22} aria-hidden="true" className="shrink-0" />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <Field label="Personal Acces Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-10 flex justify-center gap-10">
      <Button color="neutral" variant="subtlest" size="lg">
        Awesome
      </Button>
      <Button color="neutral" variant="subtlest" size="lg">
        Prepare
      </Button>
    </div>

    <h3 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <span className="font-primary-bold">{label}</span>
      <HiOutlineInformationCircle
        size={20}
        aria-hidden="true"
        className="shrink-0 text-icon-subtle"
      />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 w-full rounded-sm border border-border bg-transparent px-4 py-3 text-center font-primary-bold placeholder:text-font-subtle"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
