import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { MdLink } from "react-icons/md";

export const CopyIssueLinkButton = (): JSX.Element => {
  const location = useLocation();

  const handleCopyLink = (): void => {
    const issueUrl = `${window.location.origin}${location.pathname}`;

    copyTextToClipboard(issueUrl)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Could not copy the link"));
  };

  return (
    <button
      type="button"
      onClick={handleCopyLink}
      className="ml-2 flex cursor-pointer items-center gap-1 rounded border-none p-1 text-2xs text-font-subtlest hover:bg-background-neutral hover:text-font"
      aria-label="Copy link"
      title="Copy link"
    >
      <MdLink size={14} />
      Copy link
    </button>
  );
};

const copyTextToClipboard = async (text: string): Promise<void> => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to the legacy path when the Clipboard API is blocked,
      // for example inside a sandboxed iframe.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) throw new Error("Copy to clipboard was rejected");
};
