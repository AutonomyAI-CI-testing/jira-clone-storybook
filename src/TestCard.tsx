
const fieldClassName =
  "w-full rounded border border-[#404040] bg-[#262626] px-4 py-3 text-sm text-[#a6a6a6]";
const iconClassName =
  "ml-2 flex h-4 w-4 items-center justify-center rounded-full border border-[#a6a6a6] text-[10px]";
const buttonClassName =
  "rounded bg-[#9b4522] py-3 text-sm font-medium text-[#d9d9d9] transition-colors hover:bg-[#b04f27]";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="mx-auto max-w-sm rounded-lg bg-[#1a1a1a] p-6 font-sans text-[#f2f2f2] shadow-2xl"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-medium">UI magician Agent</h2>
        <span aria-hidden="true" className="text-xl opacity-80">
          ⚙️
        </span>
      </div>

      <div className="mb-6 flex items-center text-sm text-[#a6a6a6]">
        <span aria-hidden="true" className="mr-3 text-xs">
          ^
        </span>
        <p className="truncate">From entire frame to a singl...</p>
      </div>

      <div className="mb-8 flex items-center text-lg font-medium text-[#d9d9d9]">
        <span aria-hidden="true" className="mr-3 text-xs">
          ^
        </span>
        <h3>Add New Design</h3>
      </div>

      <div className="mb-6">
        <label
          htmlFor="pat"
          className="mb-2 flex items-center text-sm font-medium text-[#a6a6a6]"
        >
          Personal Access Token
          <span aria-hidden="true" className={iconClassName}>
            i
          </span>
        </label>
        <input
          id="pat"
          type="text"
          readOnly
          value="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
          className={fieldClassName}
        />
      </div>

      <div className="mb-8">
        <label
          htmlFor="designUrl"
          className="mb-2 flex items-center text-sm font-medium text-[#a6a6a6]"
        >
          Design URL
          <span aria-hidden="true" className={iconClassName}>
            i
          </span>
        </label>
        <input
          id="designUrl"
          type="text"
          readOnly
          value="https://www.figma.com/file/"
          className={fieldClassName}
        />
      </div>

      <div className="mb-10 grid grid-cols-2 gap-4">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <div className="mt-6 border-t border-[#404040] pt-6">
        <h3 className="text-lg font-medium text-[#d9d9d9]">Recent Breakdowns</h3>
      </div>
    </div>
  );
}
