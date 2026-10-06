import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const fields = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col bg-[#1c1c1c] p-6 font-primary text-[#d7d7d7]"
    >
      <div className="flex items-center justify-between">
        <span className="text-lg">UI magician Agent</span>
        <MdSettings size={24} aria-hidden />
      </div>

      <div className="mt-6 flex items-center gap-3 text-[#9b9b9b]">
        <MdKeyboardArrowUp size={22} aria-hidden />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <MdKeyboardArrowUp size={24} aria-hidden />
          <span className="text-xl">Add New Design</span>
        </div>

        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <label htmlFor={field.id} className="text-base">
                {field.label}
              </label>
              <MdInfoOutline size={18} aria-hidden />
            </div>
            <input
              id={field.id}
              type="text"
              placeholder={field.placeholder}
              className="w-full rounded border border-[#8a8a8a] bg-transparent px-4 py-3 font-primary-light text-base placeholder:text-[#8a8a8a]"
            />
          </div>
        ))}

        <div className="flex gap-4">
          {actions.map((action) => (
            <button
              key={action}
              type="button"
              className="rounded bg-[#a04a1e] px-8 py-3 text-base hover:bg-[#8a3f1a]"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
