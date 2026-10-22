import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

import { Button } from "../button/button";

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2 text-font-subtle">
      <span className="font-primary text-sm">{label}</span>
      <HiOutlineInformationCircle aria-hidden size={18} />
    </div>

    <input
      readOnly
      placeholder={placeholder}
      className="rounded-md bg-background-input p-3 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="flex items-center gap-2 font-primary-bold text-lg">
    <HiChevronUp aria-hidden size={18} />
    {children}
  </h2>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-8 rounded bg-elevation-surface p-5 text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <HiOutlineCog aria-hidden className="text-icon" size={24} />
    </header>

    <div className="flex items-center gap-2 text-font-subtle">
      <HiChevronUp aria-hidden size={18} />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a single component
      </span>
    </div>

    <section className="flex flex-col gap-5">
      <SectionHeading>Add New Design</SectionHeading>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-6 pt-2">
        <Button color="danger" className="w-[140px]">
          Awesome
        </Button>
        <Button color="danger" className="w-[140px]">
          Prepare
        </Button>
      </div>
    </section>

    <section>
      <h2 className="font-primary-bold text-lg">Recent Breakdowns</h2>
    </section>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
