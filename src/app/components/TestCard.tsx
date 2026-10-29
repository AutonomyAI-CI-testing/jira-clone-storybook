import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" Figma
 * frame. Self-contained — it takes no props, holds no state and is not wired
 * into the app.
 *
 * The frame's palette (near-black panel, burnt-orange buttons) has no matching
 * semantic token in this app, so the colours are written as literal values on
 * purpose: the card reproduces the design rather than following the app theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 py-8 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded text-[#cfcfcf]"
      >
        <FiSettings className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp
        className="h-5 w-5 shrink-0 text-[#8f8f8f]"
        aria-hidden="true"
      />
      <span className="font-primary-light text-base text-[#8f8f8f]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16">
      <SectionHeading>Add New Design</SectionHeading>
    </div>

    <div className="mt-8 flex flex-col gap-10">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <div className="mt-16">
      <SectionHeading>Recent Breakdowns</SectionHeading>
    </div>
  </div>
);

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-3">
    <FiChevronUp className="h-5 w-5 shrink-0" aria-hidden="true" />
    <h2 className="font-primary-black text-2xl">{children}</h2>
  </div>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-4">
      <span className="text-base text-[#cfcfcf]">{label}</span>
      <FiInfo className="h-5 w-5 shrink-0 text-[#cfcfcf]" aria-hidden="true" />
    </div>
    <div className="border border-[#6f6f6f] bg-[#262626] px-10 py-6">
      <span className="font-primary-light text-base text-[#8f8f8f]">
        {placeholder}
      </span>
    </div>
  </div>
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="w-[170px] rounded-md bg-[#933f14] py-5 text-lg text-[#d99a6c]"
  >
    {children}
  </button>
);
