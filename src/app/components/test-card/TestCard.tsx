
const COLORS = {
  bg: '#2a2a2a',
  inputBg: '#272822',
  inputBorder: '#a5adad',
  inputBorderFocus: '#929291',
  buttonBg: '#843a17',
  textTitle: '#b5b5b5',
  textMuted: '#8b9291',
  textSection: '#b2b2b1',
  textLabel: '#a3a3a2',
  textPlaceholder: '#737470',
} as const;

/**
 * TestCard component replicates a "UI magician Agent" panel design.
 * Primarily used for visual reference and Storybook testing.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 w-[320px]" style={{ backgroundColor: COLORS.bg }}>
      <Header />
      <Subtitle />
      <FormSection />
      <ActionButtons />
      <Footer />
    </div>
  );
};

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="font-semibold text-lg" style={{ color: COLORS.textTitle }}>
      UI magician Agent
    </h2>
    <GearIcon />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center mb-6">
    <ChevronIcon className="mr-2" />
    <span className="text-sm" style={{ color: COLORS.textMuted }}>
      From entire frame to a singl...
    </span>
  </div>
);

const FormSection = () => (
  <div className="mb-6">
    <div className="flex items-center mb-4">
      <ChevronIcon className="mr-2" />
      <h3 className="text-md font-semibold" style={{ color: COLORS.textSection }}>
        Add New Design
      </h3>
    </div>

    <InputField
      id="pat"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <InputField
      id="designUrl"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-4"
    />
  </div>
);

const InputField = ({
  id,
  label,
  placeholder,
  className = '',
}: {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={className}>
    <div className="flex items-center mb-2">
      <label htmlFor={id} className="text-sm mr-1" style={{ color: COLORS.textLabel }}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full p-2 rounded-md border focus:outline-none"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBorder,
        color: COLORS.textPlaceholder,
      }}
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex justify-between items-center mb-6">
    <button
      className="w-1/2 mr-2 py-2 px-4 text-white rounded-md font-semibold"
      style={{ backgroundColor: COLORS.buttonBg }}
    >
      Awesome
    </button>
    <button
      className="w-1/2 ml-2 py-2 px-4 text-white rounded-md font-semibold"
      style={{ backgroundColor: COLORS.buttonBg }}
    >
      Prepare
    </button>
  </div>
);

const Footer = () => (
  <div>
    <h3 className="text-md font-semibold" style={{ color: COLORS.textSection }}>
      Recent Breakdowns
    </h3>
  </div>
);

const GearIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0007 2.00007C12.4149 1.99619 12.8258 2.04944 13.2207 2.15C13.6156 2.25056 13.9902 2.4048 14.3307 2.60679L14.4707 2.69007C14.7303 2.8576 14.9381 3.06551 15.1107 3.28007L16.2907 4.54007C16.8837 5.17646 17.0657 5.25439 17.5807 5.48007C18.1106 5.71262 18.5714 6.01422 18.9407 6.37007L19.7807 7.21007C20.0894 7.5029 20.3541 7.82859 20.5707 8.18007L21.3207 9.42007C21.7825 10.1601 22.0007 11.0501 22.0007 12.0001C22.0007 12.4143 21.9968 12.8252 21.9507 13.2201C21.9046 13.615 21.8207 13.9901 21.7007 14.3301L21.7007 14.4701C21.5332 14.7301 21.3253 14.938 21.1107 15.1101L19.8507 16.2901C19.2144 16.8831 19.1365 17.0651 18.9107 17.5801C18.6781 18.1101 18.3765 18.5709 18.0207 18.9401L17.1807 19.7801C16.8879 20.0888 16.5622 20.3535 16.2107 20.5701L14.9707 21.3201C14.2307 21.7818 13.3407 22.0001 12.3907 22.0001C11.9765 22.0041 11.5656 21.9508 11.1707 21.9001C10.7758 21.8495 10.4007 21.6953 10.0607 21.4934L9.92072 21.4101C9.66107 21.2425 9.45316 21.0346 9.28072 20.8201L8.00072 19.5601C7.40772 18.9238 7.22572 18.8458 6.70072 18.6201C6.17072 18.3875 5.71072 18.0859 5.34072 17.7201L4.50072 16.8801C4.1919 16.5872 3.92721 16.2615 3.71072 15.9101L2.95072 14.6701C2.48901 13.9301 2.27072 13.0401 2.27072 12.0901C2.27072 11.6759 2.2746 11.265 2.32072 10.8701C2.36685 10.4752 2.45072 10.1001 2.57072 9.76007L2.57072 9.62007C2.73824 9.36042 2.94615 9.15251 3.16072 8.98007L4.42072 7.70007C5.05711 7.10707 5.13504 6.92507 5.36072 6.40007C5.59328 5.8701 5.89487 5.4101 6.25072 5.04007L7.09072 4.20007C7.38355 3.89131 7.70924 3.62662 8.06072 3.41007L9.30072 2.66007C10.0407 2.19836 10.9307 1.98007 11.8807 1.98007L12.0007 2.00007ZM12.0007 7.00007C9.23932 7.00007 7.00072 9.23867 7.00072 12.0001C7.00072 14.7615 9.23932 17.0001 12.0007 17.0001C14.7621 17.0001 17.0007 14.7615 17.0007 12.0001C17.0007 9.23867 14.7621 7.00007 12.0007 7.00007Z"
      fill="white"
    />
  </svg>
);

const ChevronIcon = ({ className = '' }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M8 12L2 6H14L8 12Z" fill="white" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 0C3.58163 0 0 3.58163 0 8C0 12.4184 3.58163 16 8 16C12.4184 16 16 12.4184 16 8C16 3.58163 12.4184 0 8 0ZM8.99971 12L8.99971 7.00029L7.00029 7.00029L7.00029 12L8.99971 12ZM8.00029 6C7.44771 6 7 5.55228 7 5C7 4.44772 7.44771 4 8.00029 4C8.55287 4 9 4.44772 9 5C9 5.55228 8.55287 6 8.00029 6Z"
      fill="white"
    />
  </svg>
);

