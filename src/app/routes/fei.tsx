import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

// Standalone page: intentionally outside the __main layout, so it renders
// without the header or sidebar. Its canvas is a fixed white surface, so it
// scopes itself to the light theme tokens instead of following the app theme.
export default function FeiRoute() {
  return (
    <main className="light flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl leading-none text-font-danger">
        Fei
      </h1>
    </main>
  );
}
