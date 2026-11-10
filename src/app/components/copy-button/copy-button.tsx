import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { MdCheck, MdContentCopy } from "react-icons/md";
import { Tooltip } from "@app/components/tooltip/tooltip";

const COPIED_LABEL = "Copied";
const COPY_ERROR_TOAST_MESSAGE = "Could not copy to the clipboard";
const CONFIRMATION_DURATION = 1500;

export const CopyButton = ({ value, label }: CopyButtonProps): JSX.Element => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const confirmationTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => () => clearTimeout(confirmationTimer.current), []);

  const copyToClipboard = async (text: string): Promise<void> => {
    if (!("clipboard" in navigator)) {
      throw new Error("The clipboard is not available");
    }

    await navigator.clipboard.writeText(text);
  };

  const handleClick = (): void => {
    copyToClipboard(value)
      .then(() => {
        setIsCopied(true);
        clearTimeout(confirmationTimer.current);
        confirmationTimer.current = setTimeout(() => {
          setIsCopied(false);
        }, CONFIRMATION_DURATION);
      })
      .catch(() => {
        toast.error(COPY_ERROR_TOAST_MESSAGE);
      });
  };

  const currentLabel = isCopied ? COPIED_LABEL : label;

  return (
    <Tooltip title={currentLabel}>
      <button
        type="button"
        aria-label={currentLabel}
        onClick={handleClick}
        className="flex rounded border-none p-1.5 text-icon flex-center hover:bg-background-neutral"
      >
        {isCopied ? <MdCheck size={22} /> : <MdContentCopy size={22} />}
      </button>
    </Tooltip>
  );
};

interface CopyButtonProps {
  value: string;
  label: string;
}
