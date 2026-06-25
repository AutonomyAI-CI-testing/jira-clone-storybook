
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full p-4 font-sans" style={{ backgroundColor: "#272822", color: "#b5b5b5" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold" style={{ color: "#b5b5b5" }}>UI magician Agent</h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0007 6C13.6576 6 15.2494 6.63214 16.4149 7.79766C17.5804 8.96319 18.2126 10.555 18.2126 12.2119C18.2126 13.8688 17.5804 15.4607 16.4149 16.6262C15.2494 17.7917 13.6576 18.4239 12.0007 18.4239C10.3438 18.4239 8.75195 17.7917 7.58643 16.6262C6.4209 15.4607 5.78877 13.8688 5.78877 12.2119C5.78877 10.555 6.4209 8.96319 7.58643 7.79766C8.75195 6.63214 10.3438 6 12.0007 6ZM12.0007 2.05286C11.5303 2.05286 11.0772 2.12644 10.6508 2.26619L8.03841 2.29633C7.57567 2.30229 7.12658 2.4542 6.74415 2.73017C6.36173 3.00615 6.06198 3.39276 5.88219 3.8441L4.47161 6.84883C4.24072 7.32759 3.83733 7.69614 3.32831 7.90098C2.81928 8.10582 2.22744 8.13404 1.70519 7.97905L1.44222 7.90098C0.979482 7.82397 0.529285 7.97588 0.147983 8.25281C-0.233319 8.52973 -0.533516 8.91529 -0.713303 9.36662L-2.12389 12.3714C-2.35478 12.8501 -2.35478 13.4077 -2.12389 13.8865L-0.713303 16.8912C-0.533516 17.3426 -0.233319 17.7292 0.147983 18.0052C0.529285 18.2811 0.979482 18.433 1.44222 18.3767L1.70519 18.2987C2.22744 18.1437 2.81928 18.1719 3.32831 18.3767C3.83733 18.5816 4.24072 18.9501 4.47161 19.4289L5.88219 22.4336C6.06198 22.885 6.36173 23.2716 6.74415 23.5475C7.12658 23.8235 7.57567 23.9754 8.03841 23.9694L10.6508 23.9392C11.0772 23.7995 11.5303 23.7259 12.0007 23.7259C12.4711 23.7259 12.9242 23.7995 13.3506 23.9392L15.963 23.9694C16.4257 23.9754 16.8748 23.8235 17.2573 23.5475C17.6397 23.2716 17.9394 22.885 18.1192 22.4336L19.5298 19.4289C19.7607 18.9501 20.1641 18.5816 20.6731 18.3767C21.1822 18.1719 21.774 18.1437 22.2962 18.2987L22.5592 18.3767C23.0219 18.433 23.4721 18.2811 23.8534 18.0052C24.2347 17.7292 24.5349 17.3426 24.7147 16.8912L26.1253 13.8865C26.3562 13.4077 26.3562 12.8501 26.1253 12.3714L24.7147 9.36662C24.5349 8.91529 24.2347 8.52973 23.8534 8.25281C23.4721 7.97588 23.0219 7.82397 22.5592 7.90098L22.2962 7.97905C21.774 8.13404 21.1822 8.10582 20.6731 7.90098C20.1641 7.69614 19.7607 7.32759 19.5298 6.84883L18.1192 3.8441C17.9394 3.39276 17.6397 3.00615 17.2573 2.73017C16.8748 2.4542 16.4257 2.30229 15.963 2.29633L13.3506 2.26619C12.9242 2.12644 12.4711 2.05286 12.0007 2.05286Z" transform="translate(-.00067) rotate(22.5 12.0007 12.2384)" stroke="#a3a6a1" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center mb-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M8 5L12 9L8 13" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-90 8 8)"/>
        </svg>
        <p style={{ color: "#8b9291" }}>From entire frame to a singl...</p>
      </div>

      {/* Spacer/Divider */}
      <div className="h-px bg-gray-700/50 my-6"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-6">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path d="M8 5L12 9L8 13" stroke="#b2b2b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-90 8 8)"/>
        </svg>
        <h2 className="text-base font-bold" style={{ color: "#b2b2b1" }}>Add New Design</h2>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-6">
        {/* Personal Access Token */}
        <div>
          <label htmlFor="pat" className="flex items-center text-sm mb-2" style={{ color: "#a4a4a3" }}>
            Personal Access Token
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 11.5V8" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 4.5H8.0075" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ backgroundColor: '#272822', color: '#737470', border: '1px solid #a5adad' }}
          />
        </div>

        {/* Design URL */}
        <div>
          <label htmlFor="designUrl" className="flex items-center text-sm mb-2" style={{ color: "#a3a3a2" }}>
            Design URL
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 11.5V8" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 4.5H8.0075" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </label>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/::"
            className="w-full p-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            style={{ backgroundColor: '#272822', color: '#71726e', border: '2px solid #929291' }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          className="w-1/2 p-2 rounded-md font-bold text-[#8c8078]"
          style={{ backgroundColor: '#843a17' }}
        >
          Awesome
        </button>
        <button
          className="w-1/2 p-2 rounded-md font-bold text-[#8c8078]"
          style={{ backgroundColor: '#843a17' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-base font-bold" style={{ color: "#b0b0b0" }}>Recent Breakdowns</h2>
    </div>
  );
};