import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-16 bg-elevation-surface-sunken p-8 font-primary-light text-font"
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-primary-black text-3xl">UI magician Agent</h2>
          <button
            type="button"
            aria-label="Open settings"
            className="flex shrink-0 cursor-pointer items-center justify-center rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
          >
            <FiSettings aria-hidden size={28} />
          </button>
        </div>

        <div className="flex items-center gap-3 text-font-subtle">
          <FiChevronUp aria-hidden size={22} />
          <span className="truncate text-lg">From entire frame to a singl…</span>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <FiChevronUp aria-hidden size={26} />
          <h3 className="font-primary-black text-3xl">Add New Design</h3>
        </div>

        <div className="flex flex-col gap-6">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <Field label="Design URL" placeholder="https://www.figma.com/file/" />
        </div>

        <div className="flex gap-4">
          <Button className="flex-1 py-4 text-lg">Awesome</Button>
          <Button className="flex-1 py-4 text-lg">Prepare</Button>
        </div>
      </div>

      <h3 className="font-primary-black text-2xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <span className="font-primary text-xl text-font-subtle">{label}</span>
      <FiInfo aria-hidden size={22} className="text-font-subtle" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="rounded-md bg-background-input p-4 text-lg text-font outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
