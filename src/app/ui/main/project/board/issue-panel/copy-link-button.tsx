import { toast } from "react-toastify";
import { MdLink } from "react-icons/md";
import { Button } from "@app/components/button";

export const CopyLinkButton = (): JSX.Element => {
  const handleCopyClick = (): void => {
    if (!("clipboard" in navigator)) {
      toast.error("Could not copy the link");
      return;
    }

    navigator.clipboard
      .writeText(window.location.href)
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
    >
      <MdLink size={18} />
      Copy link
    </Button>
  );
};
