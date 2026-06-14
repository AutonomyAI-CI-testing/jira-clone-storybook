export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" style={{ backgroundColor: '#2a2a2a' }} className="p-6 rounded-lg text-white font-sans w-80">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        {/* Gear Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Collapsible Row */}
      <div className="flex items-center text-gray-400 mb-6">
        {/* Chevron Up Icon */}
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center text-white font-bold mb-4">
        {/* Chevron Up Icon */}
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        <h3>Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label className="flex items-center text-sm text-gray-300 mb-2">
          Personal Access Token
          {/* Info Icon */}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded text-white placeholder-gray-400" style={{ backgroundColor: '#3a3a3a', borderColor: '#555', color: 'white' }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label className="flex items-center text-sm text-gray-300 mb-2">
          Design URL
          {/* Info Icon */}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded text-white placeholder-gray-400" style={{ backgroundColor: '#3a3a3a', borderColor: '#555', color: 'white' }}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between space-x-4 mb-6">
        <button className="flex-1 py-2 rounded font-semibold" style={{ backgroundColor: '#b5541b' }}>Awesome</button>
        <button className="flex-1 py-2 rounded font-semibold" style={{ backgroundColor: '#b5541b' }}>Prepare</button>
      </div>

      {/* Recent Breakdowns Header */}
      <h3 className="text-white font-bold">Recent Breakdowns</h3>
    </div>
  );
};