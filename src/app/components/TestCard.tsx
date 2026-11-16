import type { ReactNode } from "react";

const buttonClassName =
  "h-[72px] w-[170px] rounded-md bg-[#b04a22] text-[19px] text-[#9e9e9e]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary text-[#c9c9c9]"
    >
      <header>
        <div className="flex items-start justify-between">
          <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
          <GearIcon className="h-5 w-5 shrink-0" />
        </div>
        <div className="mt-10 flex items-center gap-3 text-[#8f8f8f]">
          <ChevronUpIcon className="h-4 w-4 shrink-0" />
          <span className="text-[17px]">
            From entire frame to a singl...
          </span>
        </div>
      </header>

      <section className="mt-40">
        <div className="flex items-center gap-2">
          <ChevronUpIcon className="h-4 w-4 shrink-0" />
          <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
        </div>

        <div className="mt-14">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="mt-8">
          <Field
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-14 flex gap-8 pl-12">
          <button type="button" className={buttonClassName}>
            Awesome
          </button>
          <button type="button" className={buttonClassName}>
            Prepare
          </button>
        </div>
      </section>

      <p className="mt-24 text-xl text-[#8f8f8f]">Recent Breakdowns</p>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-[19px]">{label}</span>
        <InfoIcon className="h-[18px] w-[18px] shrink-0" />
      </div>
      <input
        readOnly
        placeholder={placeholder}
        className="mt-6 h-[70px] w-full rounded border border-[#5c5c5c] bg-[#2b2b2b] px-6 text-[19px] text-[#c9c9c9] placeholder:text-[#6f6f6f]"
      />
    </div>
  );
};

const Icon = ({ className, children }: IconProps): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
};

const GearIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <Icon className={className}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </Icon>
  );
};

const InfoIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </Icon>
  );
};

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => {
  return (
    <Icon className={className}>
      <path d="m18 15-6-6-6 6" />
    </Icon>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

interface IconProps {
  className?: string;
  children?: ReactNode;
}
