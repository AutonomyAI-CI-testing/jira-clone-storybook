import React from 'react';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-8 rounded-lg shadow-lg w-full max-w-md mx-auto" style={{ backgroundColor: "#272822" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold" style={{ color: "#d1d5db" }}>UI magician Agent</h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
          <path d="M12 21.0001C11.5178 21.0001 11.0543 20.8953 10.6358 20.6974C10.2173 20.4994 9.85199 20.2148 9.56064 19.8601L8.34997 18.3301C7.94097 17.5191 7.21897 16.8906 6.40297 16.5161L5.34097 16.0351C4.54997 15.6941 3.86497 15.1111 3.36097 14.3641C2.85697 13.6161 2.55997 12.7211 2.49297 11.8001V11.1991C2.55997 10.2781 2.85697 9.38314 3.36097 8.63514C3.86497 7.88814 4.54997 7.30514 5.34097 6.96414L6.40297 6.48314C7.21897 6.10814 7.94097 5.47914 8.34997 4.66814L9.56064 3.13814C9.85199 2.78345 10.2173 2.49887 10.6358 2.3009C11.0543 2.10294 11.5178 1.99814 12 1.99814C12.4822 1.99814 12.9457 2.10294 13.3642 2.3009C13.7827 2.49887 14.148 2.78345 14.4393 3.13814L15.65 4.66814C16.059 5.47914 16.781 6.10814 17.597 6.48314L18.659 6.96414C19.45 7.30514 20.135 7.88814 20.639 8.63514C21.143 9.38314 21.44 10.2781 21.507 11.1991V11.8001C21.44 12.7211 21.143 13.6161 20.639 14.3641C20.135 15.1111 19.45 15.6941 18.659 16.0351L17.597 16.5161C16.781 16.8906 16.059 17.5191 15.65 18.3301L14.4393 19.8601C14.148 20.2148 13.7827 20.4994 13.3642 20.6974C12.9457 20.8953 12.4822 21.0001 12 21.0001V21.0001ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center mb-6">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 mr-2 flex-shrink-0">
          <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="text-sm" style={{ color: "#9ca3af" }}>From entire frame to a single element.</p>
      </div>

      {/* Spacer */}
      <div className="h-px bg-gray-700 my-6"></div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-6">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 mr-2 flex-shrink-0">
          <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h3 className="text-lg font-semibold" style={{ color: "#d1d5db" }}>Add New Design</h3>
      </div>

      {/* Form Section - Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat" className="block text-sm font-medium mr-2" style={{ color: "#d1d5db" }}>Personal Access Token</label>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="block w-full p-2 rounded-md focus:outline-none placeholder:text-gray-500"
          style={{ backgroundColor: "#272822", border: "1px solid #4b5563", color: "#f3f4f6" }}
        />
      </div>

      {/* Form Section - Design URL */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="designUrl" className="block text-sm font-medium mr-2" style={{ color: "#d1d5db" }}>Design URL</label>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="block w-full p-2 rounded-md focus:outline-none placeholder:text-gray-500"
          style={{ backgroundColor: "#272822", border: "1px solid #4b5563", color: "#f3f4f6" }}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mb-6">
        <button
          className="w-full py-2 px-4 rounded-lg font-semibold text-white"
          style={{ backgroundColor: "#ca8a04" }}
        >
          Awesome
        </button>
        <button
          className="w-full py-2 px-4 rounded-lg font-semibold text-white"
          style={{ backgroundColor: "#ca8a04" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h3 className="text-lg font-semibold" style={{ color: "#d1d5db" }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};
