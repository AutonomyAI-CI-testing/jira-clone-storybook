import { LuSettings } from 'react-icons/lu';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Layout and spacing
const CONTAINER_CLASSES = 'bg-[#1e1e1e] p-5 w-[260px] flex flex-col gap-4 font-sans';
const ROW_CLASSES = 'flex items-center justify-between';
const ROW_WITH_GAP_1 = 'flex items-center gap-1';
const ROW_WITH_GAP_2 = 'flex items-center gap-2';

// Header colors
const HEADER_TEXT_COLOR = 'text-[#b5b5b5]';
const HEADER_ICON_COLOR = 'text-[#b5b5b5]';

// Subtitle colors
const SUBTITLE_ICON_COLOR = 'text-[#8b9291]';
const SUBTITLE_TEXT_COLOR = 'text-[#8b9291]';

// Section heading colors
const SECTION_ICON_COLOR = 'text-[#b2b2b1]';
const SECTION_TEXT_COLOR = 'text-[#b2b2b1]';

// Label colors
const LABEL_TEXT_COLOR = 'text-[#a4a4a3]';
const LABEL_ICON_COLOR = 'text-[#a4a4a3]';

// Input styles
const INPUT_BASE_CLASSES = 'w-full bg-[#2a2a2a] rounded px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] outline-none';
const PAT_INPUT_CLASSES = `${INPUT_BASE_CLASSES} border border-[#3a3a3a]`;
const URL_INPUT_CLASSES = `${INPUT_BASE_CLASSES} border border-[#5a5a5a]`;

// Button styles
const BUTTON_CLASSES = 'bg-[#b5572a] text-white text-xs font-semibold px-5 py-2 rounded-lg flex-1';
const BUTTONS_ROW_CLASSES = 'flex gap-3';

// Text content
const AGENT_NAME = 'UI magician Agent';
const SUBTITLE_TEXT = 'From entire frame to a singl...';
const SECTION_HEADING = 'Add New Design';
const PAT_LABEL = 'Personal Access Token';
const PAT_PLACEHOLDER = 'figd_xxxxxxxxxxxxxxxxxx';
const URL_LABEL = 'Design URL';
const URL_PLACEHOLDER = 'https://www.figma.com/file/';
const BUTTON_PRIMARY_LABEL = 'Awesome';
const BUTTON_SECONDARY_LABEL = 'Prepare';
const RECENT_BREAKDOWNS_LABEL = 'Recent Breakdowns';

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={CONTAINER_CLASSES}>
    {/* Header with agent name and settings icon */}
    <div className={ROW_CLASSES}>
      <span className={`${HEADER_TEXT_COLOR} font-semibold text-sm`}>{AGENT_NAME}</span>
      <LuSettings className={HEADER_ICON_COLOR} />
    </div>

    {/* Subtitle with description text */}
    <div className={ROW_WITH_GAP_1}>
      <FiChevronUp className={SUBTITLE_ICON_COLOR} />
      <span className={`${SUBTITLE_TEXT_COLOR} text-xs font-semibold`}>{SUBTITLE_TEXT}</span>
    </div>

    {/* Section heading for form inputs */}
    <div className={ROW_WITH_GAP_2}>
      <FiChevronUp className={SECTION_ICON_COLOR} />
      <span className={`${SECTION_TEXT_COLOR} font-semibold text-sm`}>{SECTION_HEADING}</span>
    </div>

    {/* Personal Access Token label with info icon */}
    <div className={ROW_WITH_GAP_1}>
      <span className={`${LABEL_TEXT_COLOR} text-xs font-semibold`}>{PAT_LABEL}</span>
      <AiOutlineInfoCircle className={LABEL_ICON_COLOR} />
    </div>

    {/* Personal Access Token input field */}
    <input type="text" placeholder={PAT_PLACEHOLDER} className={PAT_INPUT_CLASSES} />

    {/* Design URL label with info icon */}
    <div className={ROW_WITH_GAP_1}>
      <span className={`${LABEL_TEXT_COLOR} text-xs font-semibold`}>{URL_LABEL}</span>
      <AiOutlineInfoCircle className={LABEL_ICON_COLOR} />
    </div>

    {/* Design URL input field */}
    <input type="text" placeholder={URL_PLACEHOLDER} className={URL_INPUT_CLASSES} />

    {/* Action buttons */}
    <div className={BUTTONS_ROW_CLASSES}>
      <button className={BUTTON_CLASSES}>{BUTTON_PRIMARY_LABEL}</button>
      <button className={BUTTON_CLASSES}>{BUTTON_SECONDARY_LABEL}</button>
    </div>

    {/* Recent breakdowns section heading */}
    <span className="text-[#b0b0b0] font-semibold text-sm mt-2">{RECENT_BREAKDOWNS_LABEL}</span>
  </div>
);