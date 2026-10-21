import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface-raised px-10 py-8 text-font shadow-md"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-3xl">UI magician Agent</h2>
      <span aria-hidden="true" className="flex text-icon-subtle">
        <HiOutlineCog size={26} />
      </span>
    </div>

    <div className="mt-5 flex items-center gap-2 text-font-subtle">
      <HiChevronUp aria-hidden="true" size={20} className="shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-12">
      <div className="flex items-center gap-3">
        <HiChevronUp aria-hidden="true" size={24} className="shrink-0" />
        <h3 className="font-primary-black text-2xl">Add New Design</h3>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex gap-4">
        <Button
          color="neutral"
          variant="subtlest"
          className="flex-1 py-3 font-primary-bold"
        >
          Awesome
        </Button>
        <Button className="flex-1 py-3 font-primary-bold">Prepare</Button>
      </div>
    </section>

    <h3 className="mt-12 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-3 font-primary-bold text-base">
      {label}
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={20}
        className="text-icon-subtle"
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="rounded border-none bg-background-input p-3 font-primary-light text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus-visible:outline-border-brand"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
