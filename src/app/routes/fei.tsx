import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: it sits outside the `__main` layout on purpose, so it renders
// without the header or sidebar. The colors are literal values rather than theme
// tokens, because this page is fixed to white with red text in every theme: the
// semantic tokens resolve per theme, and the dark themes' light red on a white
// page would not hold contrast. #ae2a19 is the repo's danger text red (--Red800),
// the value `text-font-danger` resolves to in the default theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[#ae2a19]">Fei</h1>
    </div>
  );
}
