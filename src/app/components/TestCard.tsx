import React from "react";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] p-5 rounded-lg w-full max-w-sm font-sans"
    >
      <Header />
      <Subtitle />

      {/* Spacer */}
      <div className="mb-6" />

      <SectionHeading title="Add New Design" />

      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mb-6"
      />

      <div className="flex gap-3 mb-6">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <div className="mt-2 text-white font-bold text-md">Recent Breakdowns</div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between mb-2">
      <span className="font-bold text-white text-md">UI magician Agent</span>
      <GearIcon className="w-5 h-5 text-gray-400" />
    </div>
  );
}

function Subtitle() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <ChevronUpIcon className="w-4 h-4 text-[#c1633a]" />
      <span className="text-[#c1633a] text-sm">
        From entire frame to a singl...
      </span>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <ChevronUpIcon className="w-4 h-4 text-white" />
      <span className="font-bold text-white text-md">{title}</span>
    </div>
  );
}

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

function InputField({
  id,
  label,
  placeholder,
  className = "mb-4",
}: InputFieldProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-1 mb-1">
        <label htmlFor={id} className="text-white text-sm">
          {label}
        </label>
        <InfoCircleIcon className="w-4 h-4 text-gray-400" />
      </div>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="w-full bg-[#1e1e1e] border border-[#555] rounded px-3 py-2 text-gray-300 text-sm focus:outline-none focus:border-[#c1633a]"
      />
    </div>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex-1 bg-[#9b4423] hover:bg-[#a0522d] transition-colors text-white rounded-lg py-3 font-semibold text-sm">
      {children}
    </button>
  );
}

/**
 * Icons
 */

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.049a.75.75 0 00.92 0l.07-.049a3.75 3.75 0 00.418-.325l1.115-.991a.75.75 0 01.65-.182 8.507 8.507 0 004.727-2.477.75.75 0 01.65-.182l1.115.991c.17.152.357.284.557.398.47.27.995.067 1.258-.465l.07-.16a11.246 11.246 0 00.322-1.353 3.75 3.75 0 00-.325-.418l-.991-1.115a.75.75 0 01-.182-.65 8.507 8.507 0 002.477-4.727.75.75 0 01.182-.65l.991-1.115c.152-.17.284-.357.398-.557a.75.75 0 00-.465-1.258l-.16-.07a11.246 11.246 0 00-1.353-.322 3.75 3.75 0 00-.418.325l-.991 1.115a.75.75 0 01-.65.182 8.507 8.507 0 00-4.727-2.477.75.75 0 01-.65-.182l-.991-1.115a3.75 3.75 0 00-.325-.418l-.07-.049a.75.75 0 00-.92 0l-.07.049a3.75 3.75 0 00-.418.325l-1.115.991a.75.75 0 01-.65.182 8.507 8.507 0 00-4.727-2.477.75.75 0 01-.65-.182l-1.115-.991a3.75 3.75 0 00-.325-.418l-.07-.049a.75.75 0 00-.92 0l-.07.049a3.75 3.75 0 00-.418.325l-.991 1.115a.75.75 0 01-.182.65 8.507 8.507 0 002.477 4.727.75.75 0 01.182.65l-.991 1.115a3.75 3.75 0 00-.325-.418l-.07.049a.75.75 0 00-.92 0l-.07-.049a3.75 3.75 0 00-.418.325l-1.115.991a.75.75 0 01-.65.182 8.507 8.507 0 00-4.727-2.477.75.75 0 01-.65-.182l-1.115-.991a.75.75 0 00-.557-.398.75.75 0 00-.258.465l-.07.16c-.092.203-.17.411-.237.625a11.246 11.246 0 00-.322 1.353c-.059.359.007.724.16.924l.07.16a.75.75 0 00.465.258c.201.092.409.17.625.237a11.246 11.246 0 001.353.322c.359.059.724-.007.924-.16l.16-.07a.75.75 0 00.258-.465c.036-.201.063-.409.081-.625a11.246 11.246 0 00.322-1.353c.059-.359-.007-.724-.16-.924l-.07-.16a.75.75 0 00-.465-.258c-.201-.092-.409-.17-.625-.237a11.246 11.246 0 00-1.353-.322c-.359-.059-.724.007-.924.16l-.16.07a.75.75 0 00-.258.465c-.036.201-.063.409-.081.625a11.246 11.246 0 00-.322 1.353c-.059.359.007.724.16.924l.07.16a.75.75 0 00.465.258c.201.092.409.17.625.237a11.246 11.246 0 001.353.322zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function InfoCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

