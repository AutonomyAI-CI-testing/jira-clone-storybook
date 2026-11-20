import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// Standalone page: deliberately outside the __main layout so it renders
// without the app chrome. The white surface and the text colour are fixed
// here, independent of the selected theme, so the raw palette red the
// semantic danger tokens are built from is used instead of --color-font-danger.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-[color:var(--Red700)]">Fei</h1>
    </div>
  );
}
