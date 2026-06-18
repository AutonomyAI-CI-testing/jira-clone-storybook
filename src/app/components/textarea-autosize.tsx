import { useLayoutEffect, useState, useRef } from "react";
import cx from "classix";

export interface TextareaAutosizeProps extends Omit<
  React.ComponentPropsWithoutRef<"textarea">,
  "value" | "onBlur" | "onFocus" | "name"
> {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  autofocus?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  textareaClassName?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const TextareaAutosize = ({
  name,
  value,
  setValue,
  placeholder,
  readOnly,
  autofocus,
  textareaClassName,
  onFocus,
  onBlur,
  disabled,
}: TextareaAutosizeProps): JSX.Element => {
  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  const textareaRef = useRef<HTMLParagraphElement>(null);

  /**
   * Handles focus events to ensure the cursor is placed at the end of the text.
   */
  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const length = target.value.length;
    // Place cursor at the end of the current text to improve UX when clicking into existing text
    target.setSelectionRange(length, length);
    if (onFocus) onFocus();
  };

  const handleTitleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  /**
   * Prevents the auto-sizing logic from collapsing when the input is empty or only whitespace.
   */
  const valueIsNotOnlySpaces = (): boolean => {
    return !/^( )\1*$/.test(value);
  };

  // Sync the height of the textarea with the height of the hidden shadow paragraph
  useLayoutEffect(() => {
    if (!textareaRef.current) return;

    setTextareaHeight(textareaRef.current.scrollHeight);
  }, [value]);

  return (
    <div className="relative">
      <textarea
        name={name}
        className={cx(
          "box-border w-full resize-none overflow-y-hidden rounded-md border-none bg-background-input p-3 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed",
          textareaClassName
        )}
        value={value}
        onChange={handleTitleChange}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={handleOnFocus}
        onBlur={onBlur}
        style={{ height: `${textareaHeight}px` }}
        autoFocus={autofocus}
        disabled={disabled}
      />
      <p
        ref={textareaRef}
        className={cx(
          "absolute left-0 top-0 -z-10 box-border overflow-y-hidden p-3 opacity-0",
          textareaClassName
        )}
      >
        {(valueIsNotOnlySpaces() && value) || placeholder}
      </p>
    </div>
  );
};