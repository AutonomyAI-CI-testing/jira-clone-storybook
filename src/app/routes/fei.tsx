import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

/**
 * Standalone full-page route: a plain white canvas with a single large
 * black word centred in the viewport.
 */
export function FeiPage() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-[120px] leading-none text-black">
        Fei
      </h1>
    </main>
  );
}

export default FeiPage;
