import React from 'react';

/**
 * TestCard is a smoke test component that visually replicates a "UI magician Agent" panel.
 * It is primarily used to verify visual rendering capabilities and theme application.
 * 
 * Note: Values are hardcoded as per requirements for this smoke test.
 */
export function TestCard() {
  return (
    <div 
      id="testElem" 
      className="bg-elevation-surface-overlay p-6 rounded-lg max-w-sm mx-auto shadow-overlay"
    >
      {/* Header Row: Title and Settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-font font-bold text-lg">UI magician Agent</h2>
        <span className="text-font text-xl" aria-hidden="true">⚙</span>
      </div>

      {/* Accordion Row: Informational label with expand/collapse indicator */}
      <div className="flex items-center gap-2 mb-6 text-font-subtle">
        <span className="text-lg" aria-hidden="true">▲</span>
        <p className="text-sm">From entire frame to a singl...</p>
      </div>

      {/* Spacer to match design proportions */}
      <div className="h-6" aria-hidden="true" />

      {/* Section Header: Form section label */}
      <div className="flex items-center gap-2 mb-4 text-font-subtle">
        <span className="text-lg" aria-hidden="true">▲</span>
        <h3 className="font-bold text-md">Add New Design</h3>
      </div>

      {/* Form Fields Section */}
      <div className="space-y-4 mb-6">
        <FormField 
          id="pat" 
          label="Personal Access Token" 
          placeholder="figd_xxxxxxxxxxxxxxxxxx" 
        />
        <FormField 
          id="designUrl" 
          label="Design URL" 
          placeholder="https://www.figma.com/file/:/" 
        />
      </div>

      {/* Actions Row: Primary CTAs */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 py-2 rounded-md bg-background-danger-bold text-font-inverse font-semibold hover:opacity-90 transition-opacity">
          Awesome
        </button>
        <button className="flex-1 py-2 rounded-md bg-background-danger-bold text-font-inverse font-semibold hover:opacity-90 transition-opacity">
          Prepare
        </button>
      </div>

      {/* Footer: Recent activity label */}
      <div>
        <p className="text-font font-bold text-md">Recent Breakdowns</p>
      </div>
    </div>
  );
}

/**
 * Reusable form field component to maintain consistent styling and accessibility.
 */
function FormField({ id, label, placeholder }: { id: string; label: string; placeholder: string }) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1 text-font-subtle">
        <label htmlFor={id} className="text-sm">{label}</label>
        <span className="text-xs" aria-hidden="true">ⓘ</span>
      </div>
      <input
        id={id}
        type="text"
        className="w-full p-2 rounded-md bg-background-input text-font placeholder-font-disabled border border-border-input focus:outline-none focus:border-border-focused transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
}
