import cx from "classix";
import { Theme } from "@app/store/theme.store";

export const FeiView = () => {
  return (
    // The page pins the light theme because its white background is pinned too:
    // the semantic text colours (e.g. text-font-danger) then resolve to their
    // light-surface values, which stay legible on white in every app theme.
    <div
      className={cx(
        "flex h-screen w-full items-center justify-center bg-white",
        Theme.LIGHT
      )}
    >
      <h1 className="font-primary-black text-5xl text-font-danger">Fei</h1>
    </div>
  );
};
