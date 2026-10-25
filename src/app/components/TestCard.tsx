import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Standalone reproduction of the "UI magician Agent" frame: a dark settings
 * panel with a title row, a collapsed section summary, two labelled fields and
 * a pair of action buttons.
 *
 * Self-contained on purpose — no props, no state, no data, and no route or
 * screen renders it. The frame's palette is written as literal values because
 * it is an external design whose colours have no counterpart in this app's
 * semantic token layer.
 */

const FIELD_CLASSES =
  "h-[68px] w-full rounded-sm border border-[#808080] bg-[#141414] px-9 font-mono text-[19px] text-[#e6e6e6] placeholder:text-[#9a9a9a]";

const BUTTON_CLASSES =
  "h-[72px] w-[168px] rounded-lg bg-[#ab4a1e] font-primary text-[20px] text-[#ded0c7] hover:bg-[#bd5524] active:bg-[#8f3d18]";

const IconButton = ({ label, children }: IconButtonProps): JSX.Element => (
  <button
    type="button"
    aria-label={label}
    className="flex items-center justify-center rounded p-1 text-[#dedede] hover:bg-[#ffffff1a] active:bg-[#ffffff2e]"
  >
    {children}
  </button>
);

const SectionHeading = ({ title }: SectionHeadingProps): JSX.Element => (
  <div className="flex items-center gap-4">
    <FiChevronUp aria-hidden className="shrink-0 text-[#f2f2f2]" size={28} />
    <h2 className="font-primary-black text-[26px] leading-8 text-[#f2f2f2]">
      {title}
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="mb-5 flex items-center gap-9">
      <span className="font-primary text-[19px] leading-6 text-[#c9c9c9]">
        {label}
      </span>
      <IconButton label={`More information about ${label}`}>
        <FiInfo aria-hidden size={26} />
      </IconButton>
    </div>
    <input
      aria-label={label}
      className={FIELD_CLASSES}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="flex w-[508px] flex-col bg-[#1a1a1a] p-10">
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[26px] leading-8 text-[#f2f2f2]">
        UI magician Agent
      </h1>
      <IconButton label="Open settings">
        <FiSettings aria-hidden size={28} />
      </IconButton>
    </div>

    <div className="mt-9 flex items-center gap-3 pl-2">
      <FiChevronUp aria-hidden className="shrink-0 text-[#b9b9b9]" size={26} />
      <span className="truncate font-primary text-[19px] leading-6 text-[#b9b9b9]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14">
      <SectionHeading title="Add New Design" />
      <div className="mt-14 flex flex-col gap-7">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>
    </div>

    <div className="mt-12 flex justify-center gap-9">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <div className="mt-12">
      <SectionHeading title="Recent Breakdowns" />
    </div>
  </div>
);

interface IconButtonProps {
  label: string;
  children: JSX.Element;
}

interface SectionHeadingProps {
  title: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}
