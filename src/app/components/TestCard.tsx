export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-zinc-900 text-white p-4 rounded-lg w-[280px] flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <div className="text-zinc-400">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M11.072 2.247a.75.75 0 0 0-.256 1.48L11.072 2.247ZM9.742 7.915a.75.75 0 0 0-.156 1.49l.156-1.49ZM6.965 14.86a.75.75 0 0 0 1.056 1.096l-1.056-1.096ZM12 21.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75ZM20.753 11.072a.75.75 0 0 0-1.48-.256l1.48.256ZM16.085 9.742a.75.75 0 0 0-1.49-.156l1.49.156ZM9.14 6.965a.75.75 0 0 0-1.095 1.056l1.096-1.056ZM22.5 12c0-.33-.042-.656-.122-.975l.122.975ZM3.75 12a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0ZM4.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 0 0-15 0Zm8.297-7.234a.75.75 0 1 1-1.026-.816l1.026.816Zm-4.998 1.48a.75.75 0 0 1 1.49-.155l-1.49.155Zm3.013 1.408a.75.75 0 0 1 .59-1.393l-.59 1.393ZM10.5 4.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1-.75.75h-1.5Zm-1.879.31a.75.75 0 0 0-1.095 1.056l1.096-1.056Zm-.31 1.88a.75.75 0 0 0-1.48.255l1.48-.255Zm.95 2.11a.75.75 0 1 1-.815 1.027l.816-1.026Zm2.427-.03a.75.75 0 1 1 1.027.816l-1.027-.816ZM14.773 4.795a.75.75 0 0 0-1.49-.155l1.49.155Zm1.889 2.155a.75.75 0 0 0-.256-1.48l.256 1.48Zm-2.148 1.042a.75.75 0 0 1-.59 1.393l.59-1.393Zm.141 4.54a.75.75 0 0 1-.155 1.49l.155-1.49ZM13.072 2.247a.75.75 0 0 1 .256 1.48l-.256-1.48ZM14.86 17.035a.75.75 0 0 0 1.096-1.056l-1.096 1.056Zm3.013 1.408a.75.75 0 0 0 .59-1.393l-.59 1.393ZM19.5 12.75a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0-.75-.75h-1.5ZM5.334 14.773a.75.75 0 0 0-.155 1.49l.155-1.49Zm-1.996-3.704a.75.75 0 0 0-1.48.256l1.48-.256Zm.95-2.11a.75.75 0 1 0-.816 1.027l.816-1.027Zm2.426.03a.75.75 0 1 0 1.027.816l-1.027-.816ZM17.035 14.86a.75.75 0 0 0-1.056 1.096l1.056-1.096Zm-.2-2.36a.75.75 0 0 0-.156 1.49l.156-1.49ZM12 22.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75v1.5Zm-1.879-.31a.75.75 0 0 1-1.056-1.095l1.056 1.096ZM4.795 9.227a.75.75 0 0 0-1.49.156l1.49-.156Zm1.408 3.013a.75.75 0 0 0-1.393.59l1.393-.59Zm1.042 2.148a.75.75 0 0 0-1.48.256l1.48-.256Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 text-orange-400 text-sm">
        <span>▲</span> <span className="text-zinc-400">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <h3 className="font-bold">▲ Add New Design</h3>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor="pat" className="text-sm flex items-center gap-1 mb-1">
            Personal Access Token
            <span className="text-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.941 6.01L9.75 7.143V7.5a.75.75 0 0 0 1.5 0V7.143l.809-1.133L12.5 6.47a.75.75 0 0 0 0 1.06L11.47 8.5h1.78a.75.75 0 0 0 0-1.5h-1.78l1.03-1.03a.75.75 0 0 0 0-1.06l-1.03-1.03a.75.75 0 0 0-1.06 0L8.5 6.47l-1.03-1.03a.75.75 0 0 0-1.06 0L5.47 6.47a.75.75 0 0 0 0 1.06l1.03 1.03H5.25a.75.75 0 0 0 0 1.5h1.78l-1.03 1.03a.75.75 0 0 0 0 1.06l1.03 1.03a.75.75 0 0 0 1.06 0L10.5 11.5v.357a.75.75 0 0 0 1.5 0v-.357l-.809-1.133a.75.75 0 0 0-.256-.256l1.133-.809Z" clipRule="evenodd" />
              </svg>
            </span>
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-lg bg-zinc-800 border border-zinc-600 text-zinc-400"
          />
        </div>

        <div>
          <label htmlFor="design-url" className="text-sm flex items-center gap-1 mb-1">
            Design URL
            <span className="text-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.941 6.01L9.75 7.143V7.5a.75.75 0 0 0 1.5 0V7.143l.809-1.133L12.5 6.47a.75.75 0 0 0 0 1.06L11.47 8.5h1.78a.75.75 0 0 0 0-1.5h-1.78l1.03-1.03a.75.75 0 0 0 0-1.06l-1.03-1.03a.75.75 0 0 0-1.06 0L8.5 6.47l-1.03-1.03a.75.75 0 0 0-1.06 0L5.47 6.47a.75.75 0 0 0 0 1.06l1.03 1.03H5.25a.75.75 0 0 0 0 1.5h1.78l-1.03 1.03a.75.75 0 0 0 0 1.06l1.03 1.03a.75.75 0 0 0 1.06 0L10.5 11.5v.357a.75.75 0 0 0 1.5 0v-.357l-.809-1.133a.75.75 0 0 0-.256-.256l1.133-.809Z" clipRule="evenodd" />
              </svg>
            </span>
          </label>
          <input
            type="url"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-lg bg-zinc-800 border border-zinc-600 text-zinc-400"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-orange-700 rounded-lg px-4 py-2 text-white">
          Awesome
        </button>
        <button className="flex-1 bg-orange-700 rounded-lg px-4 py-2 text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h3 className="font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};