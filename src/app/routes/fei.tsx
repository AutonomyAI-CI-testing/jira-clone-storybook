import type { MetaFunction } from "react-router";
import cx from "classix";
import { Theme } from "@app/store/theme.store";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    // The theme is pinned on this container because the page has to keep its
    // white surface no matter which theme the session is using. Inside the pin
    // the colour roles re-resolve to their light values, so `text-font` gives
    // the page its own ink instead of inheriting the dark one from `<body>`.
    <div
      className={cx(
        Theme.LIGHT,
        "flex h-full items-center justify-center bg-elevation-surface text-font"
      )}
    >
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
}
