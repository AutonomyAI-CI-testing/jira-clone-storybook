import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_LABEL_CLASS = "text-base text-[#c8c8c8]";
const FIELD_INPUT_CLASS =
  "mt-2 w-full rounded-md border border-[#8a8a8a] bg-[#2a2a2a] px-4 py-3 text-base text-[#c8c8c8] placeholder:text-[#8a8a8a] focus:outline-none";
const ACTION_BUTTON_CLASS =
  "rounded-md bg-[#9c3d1c] px-8 py-4 text-base text-[#8a8a8a]";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[508px] bg-[#1e1e1e] px-6 py-6 text-[#c8c8c8]">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
        <FiSettings size={24} aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#8a8a8a]">
        <FiChevronUp size={20} aria-hidden />
        <span className="text-base">From entire frame to a singl...</span>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <FiChevronUp size={22} aria-hidden />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-token" className={FIELD_LABEL_CLASS}>
            Personal Access Token
          </label>
          <FiInfo size={18} aria-hidden />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={FIELD_INPUT_CLASS}
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <label htmlFor="test-card-url" className={FIELD_LABEL_CLASS}>
            Design URL
          </label>
          <FiInfo size={18} aria-hidden />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={FIELD_INPUT_CLASS}
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h3 className="mt-12 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};
