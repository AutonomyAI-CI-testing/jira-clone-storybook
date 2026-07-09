import { BrandSection } from "./brand-section";
import { LoginForm } from "./login-form";
import { FilmGrainOverlay } from "./film-grain-overlay";

export const LoginPanel = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 overflow-hidden">
      {/* Film grain overlay */}
      <FilmGrainOverlay />

      {/* Main content grid */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Panel - Brand Section (hidden on mobile) */}
        <div className="hidden lg:flex flex-col justify-center items-center px-12 py-12">
          <BrandSection />
        </div>

        {/* Right Panel - Login Form */}
        <div className="flex flex-col justify-center items-center px-6 py-12">
          <LoginForm />
        </div>
      </div>

      {/* Mobile Brand Section - shown above form on small screens */}
      <div className="lg:hidden fixed top-8 left-0 right-0 z-20">
        <div className="flex justify-center">
          <MobileWordmark />
        </div>
      </div>
    </div>
  );
};

const MobileWordmark = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Orange rounded square with logo glyph */}
      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
          fill="currentColor"
        >
          <path d="M12 2L15.09 8.26H22L17.27 12.5L19.36 18.74L12 14.49L4.64 18.74L6.73 12.5L2 8.26H8.91L12 2Z" />
        </svg>
      </div>
      <div className="text-white font-semibold">AutonomyAI</div>
    </div>
  );
};
