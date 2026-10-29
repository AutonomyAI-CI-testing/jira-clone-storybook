import type { MetaFunction } from "react-router";
import cx from "classix";
import { Theme } from "@app/store/theme.store";

export const meta: MetaFunction = () => [{ title: "Fei" }];

export default function FeiRoute() {
  return (
    <main
      className={cx(
        Theme.LIGHT,
        "flex min-h-screen items-center justify-center bg-white"
      )}
    >
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </main>
  );
}
