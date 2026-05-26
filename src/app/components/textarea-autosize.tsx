import { useLayoutEffect, useState, useRef } from "react";
import cx from "classix";

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
    lines,
  } = props;

  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  const textareaRef = useRef<HTMLParagraphElement>(null);

  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const length = target.value.length;
    // Place cursor at the end of the current text
    target.setSelectionRange(length, length);
    if (onFocus) onFocus();
  };

  const handleTitleChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const valueIsNotOnlySpaces = (): boolean => {
    return !/^( )\1*$/.test(value);
  };

  // Measure the height of the hidden paragraph element to size the textarea appropriately.
  // The paragraph mirrors the textarea content to calculate the required height for multi-line text.
  // When the paragraph is hidden (display:none, visibility:hidden), temporarily make it visible to measure.
  const calculateHeight = (): void => {
    if (!textareaRef.current) return;

    const scrollHeight = textareaRef.current.scrollHeight;

    if (scrollHeight === 0) {
      const p = textareaRef.current;
      const originalDisplay = p.style.display;
      const originalVisibility = p.style.visibility;
      const originalPosition = p.style.position;
      const originalZIndex = p.style.zIndex;

      p.style.display = "block";
      p.style.visibility = "visible";
      p.style.position = "relative";
      p.style.zIndex = "1";

      const measuredHeight = p.scrollHeight;

      p.style.display = originalDisplay;
      p.style.visibility = originalVisibility;
      p.style.position = originalPosition;
      p.style.zIndex = originalZIndex;

      setTextareaHeight(Math.max(40, measuredHeight));
    } else {
      setTextareaHeight(scrollHeight);
    }
  };

  useLayoutEffect(() => {
    calculateHeight();
  }, [value]);

  // Initial height calculation on mount to ensure multi-line content displays fully.
  // This is necessary for content that may already be populated (e.g., editing existing titles).
  useLayoutEffect(() => {
    calculateHeight();
  }, []);

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
        rows={lines}
      />
      <p
        ref={textareaRef}
        className={cx(
          "absolute left-0 top-0 -z-10 box-border w-full overflow-y-hidden whitespace-pre-wrap p-3 opacity-0",
          textareaClassName
        )}
      >
        {(valueIsNotOnlySpaces() && value) || placeholder}
      </p>
    </div>
  );
};

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
  lines?: number;
}
