import { LandingHeader } from "./landing-header";
import { SearchPanel } from "./search-panel";
import { LandingFooter } from "./landing-footer";

export const LandingView = (): JSX.Element => {
  return (
    <div className="flex min-h-full w-full flex-col bg-elevation-surface">
      <LandingHeader />
      <main className="flex flex-1 flex-col items-center justify-center gap-6 px-10 py-16">
        <h1 className="text-center font-primary-black text-6xl text-black">
          Let&apos;s Find Your Ideal{" "}
          <span style={{ color: "#E02424" }}>Space</span>
        </h1>
        <p className="text-center font-primary-light text-lg text-black">
          Discover residential and commercial properties tailored to your needs
        </p>
        <SearchPanel />
      </main>
      <LandingFooter />
    </div>
  );
};
