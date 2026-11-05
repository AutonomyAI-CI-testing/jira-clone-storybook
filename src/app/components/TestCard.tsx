import type { ReactNode } from "react";
import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

const GEAR_SIZE = 16;
const CHEVRON_SIZE = 12;
const INFO_SIZE = 14;

function ChevronUp() {
  return <HiChevronUp aria-hidden="true" size={CHEVRON_SIZE} />;
}

function InfoIcon() {
  return <HiInformationCircle aria-hidden="true" size={INFO_SIZE} />;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

function Field({ id, label, placeholder }: FieldProps) {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <label className="text-2xs text-font-subtle" htmlFor={id}>
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        className="rounded border border-[var(--DarkNeutral800)] bg-elevation-surface-raised px-3 py-2 text-2xs text-[var(--DarkNeutral600)]"
        id={id}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

function ActionButton({ children }: { children: ReactNode }) {
  return (
    <button
      className="flex-1 rounded bg-[var(--Orange800)] py-2.5 font-primary-bold text-2xs text-font-subtlest"
      type="button"
    >
      {children}
    </button>
  );
}

export function TestCard() {
  return (
    <div
      className="dark flex w-[254px] flex-col bg-elevation-surface p-5 font-primary text-font"
      id="testElem"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-sm">UI magician Agent</h1>
        <HiCog aria-hidden="true" className="text-font-subtle" size={GEAR_SIZE} />
      </div>

      <div className="mt-4 flex items-center gap-2 text-font-subtlest">
        <ChevronUp />
        <span className="text-2xs">From entire frame to a singl...</span>
      </div>

      <section className="mt-20 flex flex-col">
        <div className="flex items-center gap-2">
          <ChevronUp />
          <h2 className="font-primary-bold text-sm">Add New Design</h2>
        </div>

        <Field
          id="test-card-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />

        <div className="mt-6 flex gap-4">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </section>

      <h2 className="mt-12 font-primary-bold text-sm">Recent Breakdowns</h2>
    </div>
  );
}
