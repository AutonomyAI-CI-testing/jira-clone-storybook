import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

import { Button } from "../button/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[420px] rounded-md bg-elevation-surface p-6 text-font"
  >
    <header className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <IoSettingsOutline aria-hidden className="text-icon" size={22} />
    </header>

    <p className="mt-5 flex items-center gap-2 font-primary-light text-sm text-font-subtle">
      <FiChevronUp aria-hidden size={18} />
      <span className="truncate">From entire frame to a singl…</span>
    </p>

    <h3 className="mt-10 flex items-center gap-2 font-primary-black text-lg">
      <FiChevronUp aria-hidden size={18} />
      Add New Design
    </h3>

    <LabeledField
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <LabeledField label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-6 flex gap-5">
      <Button size="lg">Awesome</Button>
      <Button size="lg">Prepare</Button>
    </div>

    <h3 className="mt-10 font-primary-black text-lg">Recent Breakdowns</h3>
  </div>
);

const LabeledField = ({
  label,
  placeholder,
}: LabeledFieldProps): JSX.Element => (
  <div className="mt-5">
    <div className="flex items-center gap-2">
      <span className="font-primary-light text-sm">{label}</span>
      <FiInfo aria-hidden className="text-icon-subtle" size={15} />
    </div>
    <div className="mt-2 flex h-11 items-center rounded-md border border-border-bold bg-background-input px-3">
      <span className="truncate font-primary-light text-sm text-font-subtlest">
        {placeholder}
      </span>
    </div>
  </div>
);

interface LabeledFieldProps {
  label: string;
  placeholder: string;
}
