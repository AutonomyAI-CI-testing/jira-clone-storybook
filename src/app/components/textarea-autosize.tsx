import { useLayoutEffect, useState, useRef } from "react";
import cx from "classix";

interface TitleProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  autofocus?: boolean;
  readOnly?: boolean;
  textareaClassName?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  minRows?: number;
}

// Auto-sizing textarea that grows/shrinks based on content
// Uses a hidden mirror element to calculate the required height
export const TextareaAutosize = (props: TitleProps): JSX.Element => {
  const {
    name,
    value,
    setValue,
    placeholder,
    readOnly,
    autofocus,
    textareaClassName,
    onFocus,
    onBlur,
    minRows,
  } = props;

  // Initial height: 28px per row + 6px padding adjustment
  const initialHeight = (minRows ?? 1) * 28 + 6;
  const [textareaHeight, setTextareaHeight] = useState<number>(initialHeight);
  const textareaRef = useRef<HTMLParagraphElement>(null);

  // On focus: move cursor to end of text (better UX) and call parent's onFocus handler
  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const length = target.value.length;
    target.setSelectionRange(length, length);
    if (onFocus) onFocus();
  };

  // Handle textarea value changes by calling parent's setValue callback
  const handleTitleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  // Check if value contains actual content beyond whitespace
  const valueIsNotOnlySpaces = (): boolean => {
    return !/^( )\1*$/.test(value);
  };

  // Update textarea height whenever value changes to maintain auto-resize behavior
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
      />
      {/* Hidden mirror element: calculates height needed for current content */}
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
