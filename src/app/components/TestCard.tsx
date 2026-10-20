import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings4Line,
} from "react-icons/ri";
import { Button } from "@app/components/button/button";

const SOURCE_LABEL = "From entire frame to a single component";
const ACCESS_TOKEN_PLACEHOLDER = "figd_xxxxxxxxxxxxxxxxx";
const DESIGN_URL_PLACEHOLDER = "https://www.figma.com/file/";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col gap-6 rounded bg-elevation-surface-raised p-6 font-primary text-font shadow-sm"
    >
      <header className="flex items-center justify-between gap-4">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="flex shrink-0 cursor-pointer items-center justify-center rounded p-1 text-icon hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
        >
          <RiSettings4Line size={24} />
        </button>
      </header>

      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-3 rounded text-left"
      >
        <RiArrowUpSLine size={20} className="shrink-0" />
        <span className="truncate text-base text-font-subtle">
          {SOURCE_LABEL}
        </span>
      </button>

      <section className="flex flex-col gap-3">
        <SectionHeading title="Add New Design" />
        <LabelledField
          label="Personal Access Token"
          placeholder={ACCESS_TOKEN_PLACEHOLDER}
        />
        <LabelledField
          label="Design URL"
          placeholder={DESIGN_URL_PLACEHOLDER}
        />
        <div className="flex gap-4">
          <Button type="button" className="flex-1">
            Awesome
          </Button>
          <Button type="button" className="flex-1">
            Prepare
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="font-primary-black text-xl">Recent Breakdowns</h2>
      </section>
    </div>
  );
};

const SectionHeading = ({ title }: SectionHeadingProps): JSX.Element => (
  <div className="flex items-center gap-3">
    <RiArrowUpSLine size={20} className="shrink-0" />
    <h2 className="font-primary-black text-xl">{title}</h2>
  </div>
);

const LabelledField = ({
  label,
  placeholder,
}: LabelledFieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <span className="flex items-center gap-3">
      <span className="text-sm">{label}</span>
      <RiInformationLine size={18} className="text-icon-subtle" aria-hidden />
    </span>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="w-full rounded-md bg-background-input p-3 font-primary text-font outline outline-2 outline-transparent placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed focus-visible:outline-border-focused"
    />
  </div>
);

interface SectionHeadingProps {
  title: string;
}

interface LabelledFieldProps {
  label: string;
  placeholder: string;
}
