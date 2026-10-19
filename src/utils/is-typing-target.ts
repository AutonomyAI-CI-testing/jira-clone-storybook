// Whether a keydown event came from a field the user is typing into.
//
// The panels listen for global shortcuts on the window ("Shift + S" to accept
// an issue or a project), so without this check the shortcut also fires on the
// letters the user is writing: a capital "S" in the title, the description or a
// comment would submit the form mid-word instead of being typed.
export const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false;

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  );
};
