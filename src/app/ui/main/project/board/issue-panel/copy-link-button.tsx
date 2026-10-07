import { toast } from "react-toastify";
import { MdLink } from "react-icons/md";
import { Button } from "@app/components/button";

export const CopyLinkButton = (): JSX.Element => {
  const handleCopyClick = (): void => {
    if (!("clipboard" in navigator)) {
      toast.error("Your browser doesn't allow copying here");
      return;
    }

    // The board's sort/filter live in the query string, so drop it: the path
    // alone is the issue's own URL.
    const issueUrl = new URL(window.location.href);
    issueUrl.search = "";
    issueUrl.hash = "";

    navigator.clipboard
      .writeText(issueUrl.href)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Could not copy the link"));
  };

  return (
    <Button
      type="button"
      color="neutral"
      variant="text"
      onClick={handleCopyClick}
      className="mt-2 shrink-0 text-sm"
      aria-label="Copy link to this issue"
    >
      <MdLink size={18} />
      Copy link
    </Button>
  );
};
