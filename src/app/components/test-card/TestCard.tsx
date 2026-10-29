import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button";

/**
 * Static recreation of the "UI magician Agent" panel from the Figma frame.
 * Smoke test: self-contained, no props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface-sunken px-6 py-8 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <FiSettings size={26} className="shrink-0 text-icon-subtle" aria-hidden />
    </header>

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={18} className="shrink-0 text-icon-subtle" aria-hidden />
      <span className="truncate font-primary-light text-sm text-font-subtle">
        From entire frame to a single screen
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <FiChevronUp size={22} className="shrink-0" aria-hidden />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-9">
      <Button color="warning" className="w-[168px] py-4">
        Awesome
      </Button>
      <Button color="warning" className="w-[168px] py-4">
        Prepare
      </Button>
    </div>

    <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-3">
      <span className="font-primary text-base text-font-subtle">{label}</span>
      <FiInfo size={22} className="shrink-0 text-icon-subtle" aria-hidden />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="box-border w-full rounded border-none bg-background-input px-4 py-4 font-primary-light text-base text-font outline outline-2 outline-border-input hover:bg-background-input-hovered placeholder:font-primary-light placeholder:text-base placeholder:text-font-subtlest focus-visible:bg-background-input-pressed"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
