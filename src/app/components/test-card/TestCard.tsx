import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

const SectionHeading = ({ label }: { label: string }): JSX.Element => (
  <div className="flex items-center gap-3">
    <HiChevronUp size={20} />
    <span className="font-primary-bold text-lg">{label}</span>
  </div>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center justify-between text-sm">
      {label}
      <HiInformationCircle size={18} className="text-[#a8a29e]" />
    </span>
    <input
      readOnly
      placeholder={placeholder}
      className="w-full rounded border border-[#57534e] bg-transparent px-3 py-3 text-sm placeholder:text-[#78716c]"
    />
  </label>
);

const CardButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="rounded-md bg-[#a03c14] px-8 py-3 font-primary-bold text-sm text-[#f5f5f4]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[420px] flex-col gap-10 bg-[#1c1917] p-8 font-primary text-[#d6d3d1]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-[#a8a29e]">
        <HiCog size={26} />
      </button>
    </div>

    <div className="flex items-center gap-3 text-[#a8a29e]">
      <HiChevronUp size={20} />
      <span className="text-base">From entire frame to a singl...</span>
    </div>

    <div className="flex flex-col gap-6">
      <SectionHeading label="Add New Design" />

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-4">
        <CardButton label="Awesome" />
        <CardButton label="Prepare" />
      </div>
    </div>

    <SectionHeading label="Recent Breakdowns" />
  </div>
);
