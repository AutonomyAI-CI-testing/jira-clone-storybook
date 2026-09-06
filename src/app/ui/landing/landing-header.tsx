import { Button } from "@app/components/button";

export const LandingHeader = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-between px-10 py-4">
      <a
        href="#"
        className="flex items-center gap-2"
        aria-label="SuddenlySpaces home"
      >
        <img
          src="/images/suddenly-spaces-logo.svg"
          width={20}
          height={20}
          alt="SuddenlySpaces logo"
        />
        <span className="font-primary-bold text-sm uppercase tracking-widest text-black">
          SuddenlySpaces
        </span>
      </a>
      <nav className="flex items-center gap-6">
        <a href="#" className="font-primary text-sm text-black hover:underline">
          Switch to Tenant
        </a>
        <Button
          color="neutral"
          variant="contained"
          className="rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-black active:bg-black"
        >
          List Your Space
        </Button>
        <button
          className="font-primary text-sm text-black hover:underline"
          aria-label="Select language"
        >
          EN
        </button>
        <a href="#" className="font-primary text-sm text-black hover:underline">
          Sign Up
        </a>
        <a href="#" className="font-primary text-sm text-black hover:underline">
          Login
        </a>
      </nav>
    </header>
  );
};
