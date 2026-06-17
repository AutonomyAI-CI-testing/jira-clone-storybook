import { ErrorBase } from "../error-base";

export const Error500 = ({
  message = "Error 500: Server error",
  href,
}: Props) => {
  // Force red text color for 500 errors to emphasize criticality
  return (
    <ErrorBase
      variant="500"
      message={message}
      href={href}
      messageClassName="!text-[color:var(--Red600)]"
    />
  );
};

interface Props {
  message: string;
  href: string;
}
