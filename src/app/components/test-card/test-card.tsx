
import { BsGear, BsChevronUp, BsInfoCircle } from 'react-icons/bs';

/**
 * TestCard component provides a form for adding new designs with Figma integration.
 * It features a dark theme layout with custom color tokens for brand consistency.
 */
export const TestCard = (): JSX.Element => {
  // Brand color constants for documentation — used via CSS variables or style props
  // to ensure reliable rendering in Storybook environments.
  const COLORS = {
    BRAND_ORANGE: '#b5451b',
    BRAND_ORANGE_HOVER: '#a03d17',
  };

  return (
    <div
      id="testElem"
      className="p-4 bg-[#2c2c2c] text-white min-h-screen"
    >
      {/* Header with Title and Settings */}
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <BsGear className="text-lg" aria-hidden="true" />
      </header>

      {/* Subtitle / Breadcrumb */}
      <div className="flex items-center mb-6">
        <BsChevronUp className="mr-2 text-md" aria-hidden="true" />
        <p className="italic text-[#d97706]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Main Action Section: Add New Design */}
      <section className="mb-6">
        <div className="flex items-center mb-4">
          <BsChevronUp className="mr-2 text-md" aria-hidden="true" />
          <h3 className="text-lg font-bold">Add New Design</h3>
        </div>

        {/* Input form fields */}
        <div>
          {/* Personal Access Token Input */}
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <label htmlFor="pat" className="mr-2">
                Personal Access Token
              </label>
              <BsInfoCircle className="text-sm" aria-hidden="true" />
            </div>
            <input
              type="password"
              id="pat"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full p-2 rounded bg-[#3a3a3a] border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Design URL Input */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <label htmlFor="designUrl" className="mr-2">
                Design URL
              </label>
              <BsInfoCircle className="text-sm" aria-hidden="true" />
            </div>
            <input
              type="url"
              id="designUrl"
              placeholder="https://www.figma.com/file/:"
              className="w-full p-2 rounded bg-[#3a3a3a] border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex space-x-4">
          <button
            className="flex-1 py-2 rounded font-bold transition-colors"
            style={{ 
              backgroundColor: COLORS.BRAND_ORANGE,
              // Using inline style for hover to bypass Storybook Tailwind JIT limitations
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.BRAND_ORANGE_HOVER)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.BRAND_ORANGE)}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded font-bold transition-colors"
            style={{ 
              backgroundColor: COLORS.BRAND_ORANGE,
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.BRAND_ORANGE_HOVER)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.BRAND_ORANGE)}
          >
            Prepare
          </button>
        </div>
      </section>

      {/* Historical activity section */}
      <section>
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </section>
    </div>
  );
};
