import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "@app/components/button";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Deliberately self-contained: no props, no state, nothing wired up.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-8 bg-elevation-surface px-10 py-10 font-primary text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <IoSettingsOutline size={26} className="text-icon" aria-hidden />
      </div>

      <div className="flex items-center gap-2">
        <BiChevronUp size={22} className="text-icon" aria-hidden />
        <span className="truncate text-lg text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <BiChevronUp size={26} className="text-icon" aria-hidden />
          <h2 className="font-primary-bold text-2xl">Add New Design</h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-4 flex justify-center gap-8">
        <Button color="warning" size="lg" className="w-[170px]">
          Awesome
        </Button>
        <Button color="warning" size="lg" className="w-[170px]">
          Prepare
        </Button>
      </div>

      <h2 className="mt-12 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps) => {
  const id = `test-card-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label htmlFor={id} className="text-lg text-font-subtle">
          {label}
        </label>
        <AiOutlineInfoCircle size={18} className="text-icon" aria-hidden />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="rounded border border-border-bold bg-transparent px-3 py-3 text-font placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
