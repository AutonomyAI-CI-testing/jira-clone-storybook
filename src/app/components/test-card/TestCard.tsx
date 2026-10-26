import type { ReactNode } from "react";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 *
 * The panel is a fixed dark surface rather than one of the app's themed
 * surfaces, so its colours are written as literal values instead of the
 * theme-scoped semantic tokens, which would flip with the app theme.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-10 bg-[#1c1c1c] p-6 font-primary-light text-white"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-[#e0e0e0] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9f2ff]"
      >
        <IoSettingsOutline aria-hidden className="text-2xl" />
      </button>
    </div>

    <div className="flex items-center gap-2 text-[#9e9e9e]">
      <IoChevronUp aria-hidden className="shrink-0 text-xl" />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="flex flex-col gap-6 pt-8">
      <SectionHeading label="Add New Design" />

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />

      <div className="flex justify-center gap-8 pt-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </div>

    <div className="pt-12">
      <SectionHeading label="Recent Breakdowns" />
    </div>
  </div>
);

const SectionHeading = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2">
    <IoChevronUp aria-hidden className="text-2xl" />
    <span className="font-primary-bold text-xl">{label}</span>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="font-primary text-base">{label}</span>
      <IoInformationCircleOutline
        aria-hidden
        className="text-lg text-[#9e9e9e]"
      />
    </div>

    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-3 text-base text-white outline-none placeholder:text-[#9e9e9e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#e9f2ff]"
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="rounded bg-[#8b3d0f] px-8 py-3 font-primary text-lg text-white hover:bg-[#a1470f] active:bg-[#74330c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9f2ff]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
