import { FiInfo } from "react-icons/fi";
import { HiChevronUp } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const buttonClassName =
  "h-12 w-[170px] rounded-lg bg-[#b0521f] text-lg text-[#d8d8d8]";

const FormField = ({ id, label, placeholder, help }: Props): JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-xl text-[#b0b0b0]">
          {label}
        </label>
        <FiInfo aria-label={help} size={24} className="text-[#b0b0b0]" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-4 h-14 w-full rounded-[2px] border-2 border-[#8a8a8a] bg-[#2a2a2a] px-6 text-base text-[#d0d0d0] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1c1c1c] p-10 font-primary text-[#d0d0d0]"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold">UI magician Agent</span>
        <IoSettingsOutline
          aria-label="Settings"
          size={26}
          className="text-[#d0d0d0]"
        />
      </div>

      <div className="mt-6 flex min-w-0 items-center gap-3">
        <HiChevronUp size={20} className="shrink-0 text-[#8a8a8a]" />
        <span className="truncate text-[17px] text-[#8a8a8a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-[150px]" />

      <div className="flex items-center gap-3">
        <HiChevronUp size={22} className="shrink-0 text-[#9a9a9a]" />
        <span className="text-[22px] text-[#9a9a9a]">Add New Design</span>
      </div>

      <div className="mt-10 flex flex-col gap-9">
        <FormField
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          help="Personal access token help"
        />
        <FormField
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          help="Design URL help"
        />
      </div>

      <div className="mt-12 flex items-center gap-8 pl-12">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <span className="mt-24 text-[22px] text-[#9a9a9a]">
        Recent Breakdowns
      </span>
    </div>
  );
};

interface Props {
  id: string;
  label: string;
  placeholder: string;
  help: string;
}
