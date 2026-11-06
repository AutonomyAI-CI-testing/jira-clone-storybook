import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

// A standalone splash page: white surface, one centred word, no app chrome.
export default function FeiRoute() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white text-[var(--Red600)]">
      <h1 className="translate-y-[0.06em] font-primary-black text-[clamp(6rem,18vw,20rem)] leading-none">
        Fei
      </h1>
    </div>
  );
}
