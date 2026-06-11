import { ErrorBase } from "../error-base";

/**
 * Error404 component displays a 404 error page with a robot illustration.
 * This is a specialized wrapper around ErrorBase configured for 404 errors.
 */
export const Error404 = ({
  message = "Error 404: Not Found",
  href,
  isLoading,
  disabled,
  errorMessage,
}: Props) => {
  return (
    <ErrorBase
      variant="404"
      message={message}
      href={href}
      isLoading={isLoading}
      disabled={disabled}
      errorMessage={errorMessage}
    />
  );
};

interface Props {
  message?: string;
  href?: string;
  isLoading?: boolean;
  disabled?: boolean;
  errorMessage?: string;
}
