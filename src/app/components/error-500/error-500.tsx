import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ErrorBase } from "../error-base";

export const Error500 = ({
  message = "Error 500: Server error",
  href,
  isLoading = false,
}: Props) => {
  if (isLoading) {
    return (
      <div className="flex max-w-[500px] flex-col items-center gap-4 text-center">
        <AiOutlineLoading3Quarters
          className="h-16 w-16 animate-spin text-icon-brand"
          aria-hidden="true"
        />
        <span className="text-lg text-font">Checking connection...</span>
      </div>
    );
  }

  return <ErrorBase variant="500" message={message} href={href} />;
};

interface Props {
  message: string;
  href: string;
  isLoading?: boolean;
}
