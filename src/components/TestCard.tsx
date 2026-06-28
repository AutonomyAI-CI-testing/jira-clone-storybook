import React from 'react';

/**
 * Icons extracted as small sub-components for readability.
 * These are based on the Figma design requirements.
 */

const GearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0007 2.91504C10.7497 2.91504 9.71573 3.94903 9.71573 5.20004C9.71573 6.45104 10.7497 7.48504 12.0007 7.48504C13.2517 7.48504 14.2857 6.45104 14.2857 5.20004C14.2857 3.94903 13.2517 2.91504 12.0007 2.91504ZM18.7303 10.5186L18.0673 11.7586C17.7783 12.3086 17.1593 12.6326 16.4863 12.5936L15.4263 12.5356C15.2893 12.5276 15.1503 12.5536 15.0293 12.6136L14.0743 13.0906C13.4353 13.4076 12.6843 13.3156 12.1383 12.9236L11.7243 12.6236C11.5943 12.5286 11.4393 12.4836 11.2783 12.4936L10.2223 12.5366C9.5483 12.5766 8.9293 12.2536 8.6403 11.7036L7.9723 10.4576C7.6833 9.90761 7.0643 9.58461 6.3913 9.62361L5.3343 9.68261C5.1973 9.69061 5.0583 9.66461 4.9373 9.60461L3.9823 9.12761C3.3423 8.81061 2.5923 8.90261 2.0463 9.29461L1.6323 9.59461C1.5023 9.68961 1.3473 9.73461 1.1863 9.72461L0.129302 9.68161C0.0573019 9.67761 0 9.73261 0 9.80561V14.1956C0 14.2676 0.0573019 14.3226 0.129302 14.3186L1.1863 14.2766C1.3473 14.2666 1.5023 14.3126 1.6323 14.4076L2.0463 14.7076C2.5923 15.0996 3.3423 15.1916 3.9823 14.8746L4.9373 14.3976C5.0583 14.3386 5.1973 14.3126 5.3343 14.3206L6.3913 14.3796C7.0643 14.4186 7.6833 14.7416 7.9723 15.2926L8.6403 16.5326C8.9293 17.0826 9.5483 17.4056 10.2223 17.3666L11.2783 17.3236C11.4393 17.3136 11.5943 17.3586 11.7243 17.4536L12.1383 17.7536C12.6843 18.1456 13.4353 18.2376 14.0743 17.9206L15.0293 17.4436C15.1503 17.3846 15.2893 17.3586 15.4263 17.3666L16.4863 17.4246C17.1593 17.4646 17.7783 17.1416 18.0673 16.5916L18.7303 15.3516C19.0193 14.8016 19.6383 14.4786 20.3113 14.5186L21.3693 14.5766C21.5063 14.5846 21.6453 14.5586 21.7663 14.4986L22.7213 14.0216C23.3603 13.7046 24.1103 13.7966 24.6563 13.1956L24.6563 9.80561C24.6563 9.73261 24.5993 9.67761 24.5273 9.68161L23.4723 9.72461C23.3113 9.73461 23.1563 9.68961 23.0263 9.59461L22.6123 9.29461C22.0663 8.90261 21.3153 8.81061 20.6763 9.12761L19.7213 9.60461C19.6003 9.66461 19.4613 9.69061 19.3243 9.68261L18.2673 9.62361C17.5943 9.58361 16.9753 9.90761 16.6863 10.4576L16.0193 11.7036L15.3563 12.9436L15.2533 13.1406L14.7353 12.9246L14.0743 12.5356C13.4353 12.2186 12.6843 12.1266 12.1383 12.5186L11.7243 12.8186C11.5943 12.9136 11.4393 12.9586 11.2783 12.9486L10.2223 12.9056C9.5493 12.8656 8.9303 13.1886 8.6413 13.7386L7.9733 14.9846L7.3063 16.2306L7.2033 16.4276L6.6853 16.2116L6.0243 15.8226C5.4783 15.4306 4.7273 15.3386 4.0883 15.6556L3.1333 16.1326C3.0123 16.1916 2.8733 16.2176 2.7363 16.2096L1.6793 16.1506C1.0063 16.1116 0.387302 15.7886 0.0983019 15.2376L0.201302 16.5166H24.4553L24.5273 14.5186L24.5273 9.80561L22.6123 9.29461L23.0263 9.59461L23.4723 9.72461L23.0263 9.29461L23.4723 9.72461L24.5273 9.68161Z"
      fill="#b5b5b5"
    />
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8L6 14H18L12 8Z" fill={color} />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
      fill={color}
    />
  </svg>
);

/**
 * TestCard component
 * A self-contained component replicating the "UI magician Agent" panel.
 * Uses inline colors to ensure consistency with the Figma design.
 */
export const TestCard = (): JSX.Element => {
  // Design system colors from requirements
  const COLORS = {
    BACKGROUND_OUTER: '#1a1a18',
    BACKGROUND_CARD: '#272822',
    TEXT_TITLE: '#b5b5b5',
    TEXT_SUBTITLE: '#8b9291',
    TEXT_HEADING: '#b2b2b1',
    TEXT_LABEL_TOKEN: '#a4a4a3',
    TEXT_LABEL_URL: '#a3a3a2',
    TEXT_BUTTON: '#8c8078',
    TEXT_BREAKDOWNS: '#b0b0b0',
    BUTTON_FILL: '#843a17',
    BORDER_TOKEN: '#a5adad',
    BORDER_URL: '#929291',
    DIVIDER: 'rgba(255, 255, 255, 0.1)',
  };

  return (
    <div
      id="testElem"
      className="p-4 min-h-screen"
      style={{ backgroundColor: COLORS.BACKGROUND_OUTER }}
    >
      <div
        className="rounded-lg shadow-lg p-6 flex flex-col space-y-4"
        style={{ backgroundColor: COLORS.BACKGROUND_CARD }}
      >
        {/* Header Section: Title and Settings affordance */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold" style={{ color: COLORS.TEXT_TITLE }}>
            UI magician Agent
          </h2>
          <GearIcon />
        </div>

        {/* Subtitle Section: Context/Status information */}
        <div className="flex items-center space-x-2">
          <ChevronUpIcon color={COLORS.TEXT_SUBTITLE} />
          <p className="text-sm" style={{ color: COLORS.TEXT_SUBTITLE }}>
            From entire frame to a singl...
          </p>
        </div>

        {/* Visual divider matching design layout */}
        <div className="h-px" style={{ backgroundColor: COLORS.DIVIDER }}></div>

        {/* Add New Design Section */}
        <div className="flex items-center space-x-2">
          <ChevronUpIcon color={COLORS.TEXT_HEADING} />
          <h3 className="text-md font-bold" style={{ color: COLORS.TEXT_HEADING }}>
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Field: Requirement component for Figma API auth */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <label
              htmlFor="personalAccessToken"
              className="text-sm"
              style={{ color: COLORS.TEXT_LABEL_TOKEN }}
            >
              Personal Access Token
            </label>
            <InfoIcon color={COLORS.TEXT_LABEL_TOKEN} />
          </div>
          <input
            type="text"
            id="personalAccessToken"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="p-2 rounded-md focus:outline-none text-sm border"
            style={{
              backgroundColor: COLORS.BACKGROUND_CARD,
              color: COLORS.TEXT_LABEL_TOKEN,
              borderColor: COLORS.BORDER_TOKEN,
            }}
          />
        </div>

        {/* Design URL Field: Target resource for the magician agent */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <label htmlFor="designURL" className="text-sm" style={{ color: COLORS.TEXT_LABEL_URL }}>
              Design URL
            </label>
            <InfoIcon color={COLORS.TEXT_LABEL_URL} />
          </div>
          <input
            type="text"
            id="designURL"
            placeholder="https://www.figma.com/file/:"
            className="p-2 rounded-md focus:outline-none text-sm border-2"
            style={{
              backgroundColor: COLORS.BACKGROUND_CARD,
              color: COLORS.TEXT_LABEL_URL,
              borderColor: COLORS.BORDER_URL,
            }}
          />
        </div>

        {/* Action Buttons: Primary interactions for the agent state */}
        <div className="flex space-x-4 pt-2">
          <button
            className="flex-1 py-2 px-4 rounded-md font-semibold text-center"
            style={{ backgroundColor: COLORS.BUTTON_FILL, color: COLORS.TEXT_BUTTON }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 px-4 rounded-md font-semibold text-center"
            style={{ backgroundColor: COLORS.BUTTON_FILL, color: COLORS.TEXT_BUTTON }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section: History/Summary area */}
        <div className="pt-4">
          <h3 className="text-md font-bold" style={{ color: COLORS.TEXT_BREAKDOWNS }}>
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};

