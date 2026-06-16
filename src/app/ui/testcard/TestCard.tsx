export function TestCard() {
  return (
    <div style={{ width: '300px' }}>
    <div id="testElem" className="p-4 rounded-lg shadow-lg bg-[#2c2c2c] text-neutral-100 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="w-5 h-5 text-neutral-400">
          <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.872a.75.75 0 0 1-.58-.19L7.47 3.732A1.848 1.848 0 0 0 5.16 3.99a.75.75 0 0 1-.3.045 9.778 9.778 0 0 0-1.741.564.75.75 0 0 1-.326-.372l-.394-1.182A1.848 1.848 0 0 0 1.5 3.227v1.077a.75.75 0 0 1-.309.618l-1.182.393A1.848 1.848 0 0 0 0 6.634V7.71a.75.75 0 0 1 .19.58l-1.145 1.41a1.848 1.848 0 0 0 .258 2.378.75.75 0 0 1 .045.3l-.564 1.74a.75.75 0 0 1-.372.326l-1.182.394A1.848 1.848 0 0 0 3.227 1.5h1.077c.237 0 .47.054.618.19l.393 1.182a.75.75 0 0 1 .19.58l1.41-1.145a1.848 1.848 0 0 0 2.378.258.75.75 0 0 1 .3.045l1.74-.564a.75.75 0 0 1 .326-.372l1.182-.394A1.848 1.848 0 0 0 1.5 3.227v1.077c0 .237.054.47.19.618l1.182.393a.75.75 0 0 1 .58.19l1.41-1.145a1.848 1.848 0 0 0 2.378.258.75.75 0 0 1 .3.045l1.74-.564a.75.75 0 0 1 .326-.372l.394-1.182A2.25 2.25 0 0 0 1.5 3.227v1.077c0 .212.036.417.098.618l.247.741a.75.75 0 0 1-.018.825l-.741.247A1.848 1.848 0 0 0 3.227 1.5h1.077c.212 0 .417.036.618.098l.741.247a.75.75 0 0 1 .825-.018l.247-.741A1.848 1.848 0 0 0 11.078 2.25ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Collapsed Row */}
      <div className="flex items-center gap-2 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="w-4 h-4">
          <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 0 1-1.06-.02L10 8.832 6.29 12.77a.75.75 0 1 1-1.08-1.04l4.25-4.5a.75.75 0 0 1 1.08 0l4.25 4.5a.75.75 0 0 1-.02 1.06Z" clipRule="evenodd" />
        </svg>
        <span className="text-[#c1622f] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="w-4 h-4">
          <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 0 1-1.06-.02L10 8.832 6.29 12.77a.75.75 0 1 1-1.08-1.04l4.25-4.5a.75.75 0 0 1 1.08 0l4.25 4.5a.75.75 0 0 1-.02 1.06Z" clipRule="evenodd" />
        </svg>
        <h2 className="text-md font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-3">
        <label htmlFor="pat" className="text-sm mb-1 flex items-center gap-2">
          Personal Access Token
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="w-4 h-4">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.946 6.832a.75.75 0 1 0-1.392-.734 8.246 8.246 0 0 1 3.553-3.553.75.75 0 0 0-.734-1.392 9.773 9.773 0 0 0-4.66.758 9.773 9.773 0 0 0-4.66.758.75.75 0 1 0-.734 1.392A8.246 8.246 0 0 1 3.21 8.947V6.832ZM13.8 6.47a.75.75 0 0 1 .373-1.043 8.242 8.242 0 0 1 4.793 4.793.75.75 0 0 1-1.043.373L13.8 6.47ZM4.8 13.53a.75.75 0 0 1 .373 1.043 8.242 8.242 0 0 1-4.793 4.793.75.75 0 0 1-1.043-.373L4.8 13.53ZM13.53 4.8a8.242 8.242 0 0 1 4.793 4.793.75.75 0 0 0 .373 1.043.75.75 0 0 0 1.043-.373 9.773 9.773 0 0 0-.758-4.66 9.773 9.773 0 0 0-.758-4.66.75.75 0 0 0-1.392.734Zm-1.802 8.528A.75.75 0 0 0 11.448 14.5a3 3 0 1 0-3 3 .75.75 0 0 0 0 1.5 4.5 4.5 0 1 1 4.5-4.5.75.75 0 0 0-1.048-1.048ZM3.53 14.8a.75.75 0 0 1-1.043-.373 8.242 8.242 0 0 1-4.793-4.793.75.75 0 0 1 .373-1.043L3.53 14.8ZM13.262 7.228A.75.75 0 0 1 10.5 7.5a3 3 0 1 0-3-3 .75.75 0 0 1-.75-1.392 4.5 4.5 0 0 1 4.5 4.5.75.75 0 0 1-.75.22Z" clipRule="evenodd" />
          </svg>
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 bg-[#3a3a3a] border border-[#555] rounded focus:outline-none focus:border-neutral-400 text-sm placeholder-neutral-500"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="text-sm mb-1 flex items-center gap-2">
          Design URL
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" className="w-4 h-4">
            <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.946 6.832a.75.75 0 1 0-1.392-.734 8.246 8.246 0 0 1 3.553-3.553.75.75 0 0 0-.734-1.392 9.773 9.773 0 0 0-4.66.758 9.773 9.773 0 0 0-4.66.758.75.75 0 1 0-.734 1.392A8.246 8.246 0 0 1 3.21 8.947V6.832ZM13.8 6.47a.75.75 0 0 1 .373-1.043 8.242 8.242 0 0 1 4.793 4.793.75.75 0 0 1-1.043.373L13.8 6.47ZM4.8 13.53a.75.75 0 0 1 .373 1.043 8.242 8.242 0 0 1-4.793 4.793.75.75 0 0 1-1.043-.373L4.8 13.53ZM13.53 4.8a8.242 8.242 0 0 1 4.793 4.793.75.75 0 0 0 .373 1.043.75.75 0 0 0 1.043-.373 9.773 9.773 0 0 0-.758-4.66 9.773 9.773 0 0 0-.758-4.66.75.75 0 0 0-1.392.734Zm-1.802 8.528A.75.75 0 0 0 11.448 14.5a3 3 0 1 0-3 3 .75.75 0 0 0 0 1.5 4.5 4.5 0 1 1 4.5-4.5.75.75 0 0 0-1.048-1.048ZM3.53 14.8a.75.75 0 0 1-1.043-.373 8.242 8.242 0 0 1-4.793-4.793.75.75 0 0 1 .373-1.043L3.53 14.8ZM13.262 7.228A.75.75 0 0 1 10.5 7.5a3 3 0 1 0-3-3 .75.75 0 0 1-.75-1.392 4.5 4.5 0 0 1 4.5 4.5.75.75 0 0 1-.75.22Z" clipRule="evenodd" />
          </svg>
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 bg-[#3a3a3a] border border-[#555] rounded focus:outline-none focus:border-neutral-400 text-sm placeholder-neutral-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 py-2 px-4 bg-[#c1622f] rounded text-white font-semibold hover:bg-[#a9552b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c1622f]">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 bg-[#c1622f] rounded text-white font-semibold hover:bg-[#a9552b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c1622f]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-md font-bold">Recent Breakdowns</h2>
    </div>
    </div>
  );
}
