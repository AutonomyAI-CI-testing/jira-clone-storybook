function TestCard() {
  return (
    <div id="testElem" className="bg-neutral-900 text-neutral-300 p-6 max-w-sm mx-auto rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-white">UI magician Agent</h1>
        <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>

      <div className="flex items-center text-neutral-400 text-sm mb-6">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      <div className="flex items-center text-white text-lg font-semibold mb-4 mt-8">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <h3>Add New Design</h3>
      </div>

      <div className="mb-4">
        <label htmlFor="pat" className="block text-neutral-400 text-sm font-medium mb-2">
          Personal Access Token
          <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </label>
        <div className="bg-neutral-800 text-neutral-300 p-3 rounded-md border border-neutral-700">
          figd_xxxxxxxxxxxxxxxxxxxx
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="design-url" className="block text-neutral-400 text-sm font-medium mb-2">
          Design URL
          <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </label>
        <div className="bg-neutral-800 text-neutral-300 p-3 rounded-md border border-neutral-700">
          https://www.figma.com/file/:
        </div>
      </div>

      <div className="flex justify-between space-x-4 mb-8">
        <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-200">
          Awesome
        </button>
        <button className="flex-1 bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition duration-200">
          Prepare
        </button>
      </div>

      <div className="text-white text-lg font-semibold">
        Recent Breakdowns
      </div>

    </div>
  );
}

export default TestCard;
