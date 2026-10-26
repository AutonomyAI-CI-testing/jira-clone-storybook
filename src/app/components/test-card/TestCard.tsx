import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";
import { Button } from "@app/components/button/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col bg-elevation-surface px-10 py-8 text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline aria-hidden className="text-2xl text-font-subtle" />
      </div>

      <div className="mt-4 flex items-center gap-3 text-font-subtle">
        <RiArrowUpSLine aria-hidden className="shrink-0 text-2xl" />
        <span className="truncate font-primary-light text-base">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <RiArrowUpSLine aria-hidden className="shrink-0 text-3xl" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        <Field
          id="design-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-10 flex gap-6">
        <Button className="px-7 py-3 font-primary-bold">Awesome</Button>
        <Button className="px-7 py-3 font-primary-bold">Prepare</Button>
      </div>

      <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label
          htmlFor={id}
          className="font-primary-light text-base text-font-subtle"
        >
          {label}
        </label>
        <HiOutlineInformationCircle
          aria-hidden
          className="text-xl text-font-subtlest"
        />
      </div>
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        className="rounded-md border-none bg-background-input p-3 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
      />
    </div>
  );
};
