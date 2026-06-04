import React from "react";
import { IoSettings } from "react-icons/io5";
import { MdInfo } from "react-icons/md";
import { LiaChevronUpSolid as LiChevronUp } from "react-icons/lia";

const INPUT_FIELD_CLASS =
  "w-full border border-neutral-600 bg-neutral-800 px-4 py-3 text-neutral-400 placeholder-neutral-600";

const BUTTON_CLASS =
  "flex-1 rounded bg-orange-700 px-6 py-3 text-lg font-medium text-orange-200 hover:bg-orange-600 active:bg-orange-800";

const ICON_WITH_LABEL = "flex items-center gap-2";

interface FormFieldProps {
  label: string;
  inputType: string;
  placeholder: string;
}

/**
 * FormField component for rendering labeled input fields with info icon.
 * Used in the TestCard form to maintain consistent styling and structure.
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  inputType,
  placeholder,
}) => (
  <div className="space-y-2">
    <div className={ICON_WITH_LABEL}>
      <label className="text-neutral-300 text-base">{label}</label>
      <MdInfo className="text-neutral-500 text-lg" />
    </div>
    <input
      type={inputType}
      placeholder={placeholder}
      className={INPUT_FIELD_CLASS}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-neutral-900 text-neutral-300 min-h-screen p-8"
    >
      <div className="mx-auto max-w-2xl">
        {/* Main header with settings icon */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-neutral-100 text-3xl font-semibold">
            UI magician Agent
          </h1>
          <IoSettings className="text-neutral-400 text-2xl" />
        </div>

        {/* Section status indicator */}
        <div className="text-neutral-500 mb-8 flex items-center gap-2">
          <LiChevronUp className="text-xl" />
          <span className="text-base">From entire frame to a singl...</span>
        </div>

        {/* Add design section header */}
        <div className="text-neutral-400 mb-8 flex items-center gap-2 text-lg">
          <LiChevronUp className="text-xl" />
          <span className="font-medium">Add New Design</span>
        </div>

        {/* Design configuration form */}
        <div className="space-y-6">
          <FormField
            label="Personal Access Token"
            inputType="password"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          />

          <FormField
            label="Design URL"
            inputType="text"
            placeholder="https://www.figma.com/file/:"
          />

          {/* Action buttons for form submission */}
          <div className="flex gap-4 pt-4">
            <button className={BUTTON_CLASS}>Awesome</button>
            <button className={BUTTON_CLASS}>Prepare</button>
          </div>
        </div>

        {/* Section showing recent activity */}
        <div className="text-neutral-300 mt-12 text-xl font-medium">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
