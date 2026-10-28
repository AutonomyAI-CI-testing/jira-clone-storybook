import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button/button";

const FIELD_INPUT_CLASSES =
  "mt-3 w-full rounded bg-background-input px-4 py-4 text-lg text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <FiSettings aria-hidden className="mt-1 shrink-0 text-2xl" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden className="shrink-0 text-xl" />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-20">
      <div className="flex items-center gap-3">
        <FiChevronUp aria-hidden className="shrink-0 text-xl" />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />

      <div className="mt-8 flex gap-8">
        <Button type="button" color="danger" size="lg">
          Awesome
        </Button>
        <Button type="button" color="danger" size="lg">
          Prepare
        </Button>
      </div>
    </div>

    <h2 className="mt-20 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <span className="font-primary-bold text-lg">{label}</span>
      <FiInfo aria-hidden className="shrink-0 text-xl" />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={FIELD_INPUT_CLASSES}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
