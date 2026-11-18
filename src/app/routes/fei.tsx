import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

const FeiRoute = (): JSX.Element => {
  // The page is a fixed white sheet, so its colours are fixed too: the theme's
  // danger token turns pale on the dark themes and would not read on white.
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <p className="font-primary-black text-5xl text-[var(--Red700)]">Fei</p>
    </div>
  );
};

export default FeiRoute;
