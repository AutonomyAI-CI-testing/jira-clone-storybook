import { HiChevronUp } from "react-icons/hi";
import { MdInfoOutline, MdSettings } from "react-icons/md";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[380px] min-h-screen bg-[#0d0d0d] px-6 py-5 font-primary text-[#c7c7c7]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-xl text-[#f2f2f2]">
          UI magician Agent
        </h1>
        <MdSettings className="shrink-0 text-2xl text-[#cfcfcf]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-5 flex items-center gap-2">
        <HiChevronUp className="shrink-0 text-xl text-[#9a9a9a]" />
        <span className="truncate font-primary-light text-base text-[#b3b3b3]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-16">
        <div className="flex items-center gap-2">
          <HiChevronUp className="shrink-0 text-xl text-[#e0e0e0]" />
          <h2 className="font-primary-black text-lg text-[#f2f2f2]">
            Add New Design
          </h2>
        </div>

        <div className="mt-6 space-y-5">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <Field label="Design URL" placeholder="https://www.figma.com/file/" />
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-5">
          <button
            type="button"
            className="rounded-md bg-[#a8491f] px-7 py-2.5 font-primary text-base text-[#f2c9b0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a8491f] px-7 py-2.5 font-primary text-base text-[#f2c9b0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-16 font-primary-black text-lg text-[#f2f2f2]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label className="font-primary text-base text-[#d6d6d6]">{label}</label>
        <MdInfoOutline className="text-xl text-[#d6d6d6]" />
      </div>
      <input
        readOnly
        type="text"
        placeholder={placeholder}
        className="w-full rounded border border-[#3d3d3d] bg-[#1b1b1b] px-3 py-2.5 font-primary text-base text-[#c7c7c7] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

export default TestCard;
