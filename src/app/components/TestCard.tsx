import { MdExpandLess, MdInfoOutline, MdSettings } from "react-icons/md";

const FIELDS = [
  {
    id: "test-card-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="mx-auto w-full max-w-sm space-y-6 bg-[#1e1e1e] px-5 py-6 font-primary text-[#e8e8e8]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <MdSettings size={22} className="shrink-0 text-[#8a8a8a]" />
    </div>

    <div className="flex items-center gap-2 text-sm text-[#8a8a8a]">
      <MdExpandLess size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="pt-8">
      <div className="flex items-center gap-2">
        <MdExpandLess size={20} className="shrink-0" />
        <h2 className="font-primary-bold">Add New Design</h2>
      </div>

      <div className="mt-5 space-y-5">
        {FIELDS.map((field) => (
          <div key={field.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor={field.id} className="text-sm">
                {field.label}
              </label>
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#8a8a8a]">
                <MdInfoOutline size={11} />
              </span>
            </div>
            <input
              id={field.id}
              readOnly
              placeholder={field.placeholder}
              className="w-full rounded border border-[#555] bg-[#2b2b2b] px-3 py-2 text-sm placeholder:text-[#9a9a9a]"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="flex-1 rounded bg-[#8f3d1a] py-2 font-primary-bold text-[#d98a5a]"
          >
            {action}
          </button>
        ))}
      </div>
    </div>

    <h2 className="pt-4 font-primary-bold">Recent Breakdowns</h2>
  </div>
);
