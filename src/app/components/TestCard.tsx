import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const inputClass =
  "h-[46px] w-full rounded border border-[#8c8c8c] bg-[#2b2b2b] px-4 text-[17px] text-[#d9d9d9] placeholder:text-[#9a9a9a]";

const buttonClass =
  "min-w-[168px] rounded bg-[#a94419] px-8 py-3 font-primary-bold text-[17px] text-[#e6e6e6]";

const buttonLabels = ["Awesome", "Prepare"];

function Field({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <label className="text-[17px]" htmlFor={id}>
          {label}
        </label>
        <FiInfo aria-hidden="true" className="h-4 w-4 shrink-0 text-[#c9c9c9]" />
      </div>
      <input
        className={inputClass}
        id={id}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      className="flex w-full max-w-[508px] flex-col gap-8 bg-[#1e1e1e] p-10 font-primary text-[#d9d9d9]"
      id="testElem"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[22px] text-white">
          UI magician Agent
        </h2>
        <button
          aria-label="Agent settings"
          className="text-[#b8b8b8]"
          type="button"
        >
          <FiSettings aria-hidden="true" className="h-[22px] w-[22px]" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-[#c9c9c9]">
        <FiChevronUp aria-hidden="true" className="h-4 w-4 shrink-0" />
        <span className="truncate text-[17px]">
          From entire frame to a singl...
        </span>
      </div>

      <section className="flex flex-col gap-6">
        <h3 className="flex items-center gap-2 font-primary-bold text-[22px] text-white">
          <FiChevronUp aria-hidden="true" className="h-5 w-5 shrink-0" />
          Add New Design
        </h3>

        <Field
          id="testElem-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="flex gap-10">
          {buttonLabels.map((label) => (
            <button className={buttonClass} key={label} type="button">
              {label}
            </button>
          ))}
        </div>
      </section>

      <h3 className="font-primary-bold text-[22px] text-white">
        Recent Breakdowns
      </h3>
    </div>
  );
}
