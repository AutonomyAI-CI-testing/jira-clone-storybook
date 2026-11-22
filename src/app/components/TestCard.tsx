import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const INPUT_CLASSES =
  "w-full rounded-[2px] border border-[#8a8a8a] bg-[#242424] px-3 py-3 font-primary text-[15px] text-[#e8e8e8] placeholder:text-[#9a9a9a] focus:outline-none";

const LABEL_CLASSES = "font-primary-bold text-[16px] text-[#d0d0d0]";

const BUTTON_CLASSES =
  "w-[168px] rounded-[8px] bg-[#8f3d18] px-4 py-4 font-primary text-[18px] text-[#a3a3a3]";

const HEADING_CLASSES = "font-primary-bold text-[20px] text-[#e8e8e8]";

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className={LABEL_CLASSES}>
        {label}
      </label>
      <FaInfoCircle aria-hidden="true" className="text-[18px] text-[#d0d0d0]" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className={INPUT_CLASSES}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-screen w-full bg-[#191919] px-6 py-10 font-primary text-[#e8e8e8]"
  >
    <div className="mx-auto flex w-full max-w-[508px] flex-col">
      <header className="flex items-center justify-between">
        <h1 className={HEADING_CLASSES}>UI magician Agent</h1>
        <FaCog aria-hidden="true" className="text-[22px] text-[#d0d0d0]" />
      </header>

      <div className="mt-9 flex items-center gap-3 text-[15px] text-[#9a9a9a]">
        <FaChevronUp aria-hidden="true" className="shrink-0 text-[14px]" />
        <span className="min-w-0 truncate">
          From entire frame to a single component
        </span>
      </div>

      <section className="mt-10 flex flex-col gap-10">
        <div className="flex items-center gap-3">
          <FaChevronUp
            aria-hidden="true"
            className="text-[16px] text-[#e8e8e8]"
          />
          <h2 className={HEADING_CLASSES}>Add New Design</h2>
        </div>

        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </section>

      <div className="mt-12 flex items-center gap-4">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      <h2 className={`mt-24 ${HEADING_CLASSES}`}>Recent Breakdowns</h2>
    </div>
  </div>
);
