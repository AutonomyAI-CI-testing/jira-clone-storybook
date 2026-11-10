import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

/**
 * TestCard
 *
 * A self-contained recreation of the "UI magician Agent" Figma frame.
 * Smoke test only: it accepts no props, holds no state and is inert — the
 * chevrons and the buttons are decorative. The Figma palette has no
 * counterpart in this repo's semantic tokens, so the values are written as
 * arbitrary values, which is the sanctioned escape hatch here.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[440px] bg-[#1c1a18] px-8 py-8 font-primary text-[#cfcbc7]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-[22px] leading-snug text-[#d6d3d1]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="shrink-0 rounded p-1 text-[#d6d3d1]"
      >
        <LuSettings aria-hidden="true" size={22} />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <LuChevronUp
        aria-hidden="true"
        size={22}
        className="shrink-0 text-[#a8a29e]"
      />
      <span className="truncate text-[15px] text-[#a8a29e]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16">
      <div className="flex items-center gap-3">
        <LuChevronUp
          aria-hidden="true"
          size={22}
          className="shrink-0 text-[#d6d3d1]"
        />
        <h2 className="font-primary-bold text-[21px] leading-snug text-[#d6d3d1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-9 flex flex-col gap-6">
        <Field
          id="testcard-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testcard-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-8">
        <button
          type="button"
          className="h-12 rounded-lg bg-[#a03d16] px-9 text-[17px] text-[#e7e2de]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-12 rounded-lg bg-[#a03d16] px-9 text-[17px] text-[#e7e2de]"
        >
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-20 font-primary-bold text-[21px] leading-snug text-[#d6d3d1]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="text-[16px] text-[#cfcbc7]">
        {label}
      </label>
      <LuInfo aria-hidden="true" size={19} className="shrink-0 text-[#cfcbc7]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 h-11 w-full rounded border-2 border-[#57534e] bg-[#242220] px-4 text-[16px] text-[#cfcbc7] placeholder:text-[#8a857f]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
