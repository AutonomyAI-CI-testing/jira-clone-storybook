import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] p-10 font-primary text-[#d0d0d0]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <RiSettings3Line size={28} aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#8a8a8a]">
      <RiArrowUpSLine size={24} aria-hidden />
      <span className="truncate text-lg">From entire frame to a singl…</span>
    </div>

    <div className="h-40" />

    <SectionHeading label="Add New Design" />

    <div className="mt-6 flex flex-col gap-6">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-6 flex gap-10">
      <button
        type="button"
        className="rounded-lg bg-[#8c3b1b] px-10 py-4 text-lg text-[#d0d0d0]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-lg bg-[#8c3b1b] px-10 py-4 text-lg text-[#d0d0d0]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

const SectionHeading = ({ label }: { label: string }) => (
  <h2 className="flex items-center gap-2 font-primary-bold text-2xl">
    <RiArrowUpSLine size={24} aria-hidden />
    {label}
  </h2>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <RiInformationLine size={20} aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className="w-full rounded-md border border-[#6b6b6b] bg-[#2b2b2b] px-4 py-4 text-lg placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
