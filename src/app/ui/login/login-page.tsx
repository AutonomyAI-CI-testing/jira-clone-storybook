import { useState } from "react";
import { BrandPanel } from "./brand-panel";
import { FormPanel } from "./form-panel";

interface LoginPageProps {
  isLoading?: boolean;
  onSubmit?: (e: React.FormEvent) => void;
}

/**
 * LoginPage - AutonomyAI branded login with split-screen responsive layout
 *
 * Desktop (≥920px): Grid with 55% brand panel (left) + 45% form panel (right)
 * Mobile (<920px): Stacked layout, form full-width, brand panel hidden
 *
 * Brand panel shows: wordmark, hero headline, description, incident response timeline
 * Form panel shows: email/password login, SSO buttons, remember me checkbox, links
 */
export const LoginPage = ({ isLoading = false, onSubmit }: LoginPageProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    onSubmit?.(e);
    // In real usage, this would be handled by form submission to server
  };

  return (
    <div className="flex min-h-screen bg-elevation-surface-sunken">
      {/* Brand Panel - Hidden on mobile, 55% on desktop */}
      <div className="hidden min-h-screen w-[55%] lg:flex">
        <BrandPanel />
      </div>

      {/* Form Panel - Full width on mobile, 45% on desktop */}
      <div className="w-full lg:w-[45%]">
        <FormPanel isLoading={isSubmitting} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};
