import { forwardRef } from "react";
import cx from "classix";

export const FormSection = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cx(
          "rounded-lg border border-slate-700 bg-slate-900 p-6",
          "shadow-lg",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

FormSection.displayName = "FormSection";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
