import React from "react";

/**
 * InfoIcon - Reusable info icon component used for form field labels
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    className={className}
  >
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7 6V10"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="7" cy="4.5" r="0.5" fill="currentColor" />
  </svg>
);

/**
 * ChevronUpIcon - Reusable chevron up icon in various sizes
 */
const ChevronUpIcon = ({
  width,
  height,
  viewBox,
  path,
  className,
}: {
  width: number;
  height: number;
  viewBox: string;
  path: string;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    className={className}
  >
    <path
      d={path}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * FormField - Reusable form field with label and info icon
 */
const FormField = ({
  label,
  labelColor,
  children,
}: {
  label: string;
  labelColor: string;
  children: React.ReactNode;
}) => (
  <>
    <div className="flex items-center gap-2">
      <span className={`text-[11.5px] font-semibold ${labelColor}`}>
        {label}
      </span>
      <InfoIcon className={labelColor} />
    </div>
    {children}
  </>
);

/**
 * TestCard - UI component for configuring design imports from Figma
 * Displays form fields for Personal Access Token and Design URL along with action buttons
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-64 flex-col gap-6 rounded bg-[#1e1e1a] p-5">
      {/* Header with agent title and settings icon */}
      <div className="flex items-center justify-between">
        <span className="text-[20px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#b5b5b5]"
        >
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.622 10.395L19.292 9.928C18.842 9.318 18.812 8.489 19.222 7.85L19.332 7.685C19.812 6.934 19.592 5.936 18.872 5.413L18.652 5.263C17.962 4.765 17.022 4.916 16.512 5.595L16.412 5.725C16.022 6.245 15.352 6.475 14.712 6.295L14.502 6.235C13.712 6.015 12.902 6.535 12.702 7.335L12.662 7.505C12.492 8.195 11.902 8.685 11.192 8.685C10.482 8.685 9.892 8.195 9.722 7.505L9.682 7.335C9.482 6.535 8.672 6.015 7.882 6.235L7.672 6.295C7.032 6.475 6.362 6.245 5.972 5.725L5.872 5.595C5.362 4.916 4.422 4.765 3.732 5.263L3.512 5.413C2.792 5.936 2.572 6.934 3.052 7.685L3.162 7.85C3.572 8.489 3.542 9.318 3.092 9.928L2.762 10.395C2.242 11.095 2.362 12.075 3.022 12.635L3.192 12.775C3.742 13.245 3.992 13.995 3.822 14.705L3.782 14.875C3.582 15.675 4.102 16.485 4.902 16.685L5.072 16.725C5.762 16.895 6.252 17.485 6.252 18.195C6.252 18.905 5.762 19.495 5.072 19.665L4.902 19.705C4.102 19.905 3.582 20.715 3.782 21.515L3.822 21.685C3.992 22.395 4.582 22.885 5.292 22.885C5.462 22.885 5.632 22.855 5.792 22.805L5.962 22.755C6.602 22.575 7.272 22.805 7.662 23.325L7.762 23.455C8.272 24.134 9.212 24.285 9.902 23.787L10.122 23.637C10.812 23.139 11.752 23.139 12.442 23.637L12.662 23.787C13.352 24.285 14.292 24.134 14.802 23.455L14.902 23.325C15.292 22.805 15.962 22.575 16.602 22.755L16.772 22.805C16.932 22.855 17.102 22.885 17.272 22.885C17.982 22.885 18.572 22.395 18.742 21.685L18.782 21.515C18.982 20.715 18.462 19.905 17.662 19.705L17.492 19.665C16.802 19.495 16.312 18.905 16.312 18.195C16.312 17.485 16.802 16.895 17.492 16.725L17.662 16.685C18.462 16.485 18.982 15.675 18.782 14.875L18.742 14.705C18.572 13.995 18.822 13.245 19.372 12.775L19.542 12.635C20.202 12.075 20.322 11.095 19.802 10.395L19.622 10.395Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Subtitle showing truncated description */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon
          width={16}
          height={16}
          viewBox="0 0 12 12"
          path="M9 7.5L6 4.5L3 7.5"
          className="text-[#8b9291]"
        />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Visual spacer for layout */}
      <div className="h-6" />

      {/* Collapsible section header */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon
          width={18}
          height={18}
          viewBox="0 0 16 16"
          path="M12 10L8 6L4 10"
          className="text-[#b2b2b1]"
        />
        <span className="text-[16px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input */}
      <FormField label="Personal Access Token" labelColor="text-[#a4a4a3]">
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-3">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </FormField>

      {/* Design URL input */}
      <FormField label="Design URL" labelColor="text-[#a3a3a2]">
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-3">
          <span className="text-[10.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </FormField>

      {/* Action buttons */}
      <div className="mt-2 flex gap-4">
        <div className="flex flex-1 cursor-pointer items-center justify-center rounded bg-[#843a17] px-4 py-4">
          <span className="text-[14px] font-semibold text-[#8c8078]">
            Awesome
          </span>
        </div>
        <div className="flex flex-1 cursor-pointer items-center justify-center rounded bg-[#843a17] px-4 py-4">
          <span className="text-[14px] font-semibold text-[#8c8078]">
            Prepare
          </span>
        </div>
      </div>

      {/* Section for displaying recent breakdowns */}
      <div className="mt-6">
        <span className="text-[16px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[12px] text-[#b5b5b5]">© AutonomyAI</span>
      </div>
    </div>
  );
};
