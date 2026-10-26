import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex min-h-[1016px] w-[508px] flex-col gap-12 bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-3xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer rounded-full p-1 hover:bg-background-neutral hover:text-icon-brand"
        >
          <IoSettingsOutline size={28} />
        </button>
      </div>
      <div className="flex items-center gap-3 text-font-subtlest">
        <IoChevronUp size={20} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <IoChevronUp size={24} />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-6 pt-2">
        <Button color="danger" className="h-[60px] flex-1 rounded-lg font-primary-bold">
          Awesome
        </Button>
        <Button color="danger" className="h-[60px] flex-1 rounded-lg font-primary-bold">
          Prepare
        </Button>
      </div>
    </div>

    <h2 className="mt-auto font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <button
        type="button"
        aria-label={`More information about ${label}`}
        className="cursor-pointer rounded-full hover:text-icon-brand"
      >
        <IoInformationCircleOutline size={18} />
      </button>
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="h-[70px] w-full rounded-lg border-none bg-background-input px-6 text-lg text-font outline outline-2 outline-transparent placeholder:font-primary-light placeholder:text-font-subtlest hover:outline-border-input focus-visible:outline-border-brand"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
