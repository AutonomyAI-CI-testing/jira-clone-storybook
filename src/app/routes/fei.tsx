import type { MetaFunction } from "react-router";
import cx from "classix";
import { Theme } from "@app/store/theme.store";

export const meta: MetaFunction = () => [{ title: "Fei" }];

// The page is deliberately theme-independent: a white surface with a red
// wordmark, identical in every theme. Pinning the light theme keeps the
// semantic tokens below resolving to their light values.
export default function FeiRoute() {
  return (
    <div
      className={cx(
        Theme.LIGHT,
        "grid h-full place-items-center bg-elevation-surface"
      )}
    >
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
