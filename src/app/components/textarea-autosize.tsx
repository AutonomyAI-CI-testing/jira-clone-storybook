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
    minRows = 1,
  } = props;

  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  const textareaRef = useRef<HTMLParagraphElement>(null);
  const minHeightRef = useRef<number>(0);

  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const length = target.value.length;
    // Move cursor to end of text for more natural editing flow
    target.setSelectionRange(length, length);
    onFocus?.();
  };

  const handleTextChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  /**
   * Checks if value contains non-whitespace characters.
   * Used to determine whether to show actual content or placeholder in the hidden measurement element.
   */
  const hasVisibleContent = (): boolean => {
    return !/^( )\1*$/.test(value);
  };

  useLayoutEffect(() => {
    if (!textareaRef.current) return;

    // Calculate minimum height based on minRows on first render
    // Stored in ref to avoid recalculating on every render
    if (minHeightRef.current === 0) {
      const style = getComputedStyle(textareaRef.current);
      const lineHeight = parseFloat(style.lineHeight);
      const paddingTop = parseFloat(style.paddingTop);
      const paddingBottom = parseFloat(style.paddingBottom);
      minHeightRef.current = lineHeight * minRows + paddingTop + paddingBottom;
    }

    // Use hidden element's scrollHeight to measure natural content height
    const contentHeight = textareaRef.current.scrollHeight;
    setTextareaHeight(Math.max(contentHeight, minHeightRef.current));
  }, [value, minRows]);

  return (
    <div className="relative">
      <textarea
        name={name}
        className={cx(
          "box-border w-full resize-none overflow-y-hidden rounded-md border-none bg-background-input p-3 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed",
          textareaClassName
        )}
        value={value}
        onChange={handleTextChange}
        placeholder={placeholder}
        readOnly={readOnly}
        onFocus={handleOnFocus}
        onBlur={onBlur}
        style={{ height: `${textareaHeight}px` }}
        autoFocus={autofocus}
      />
      {/* Hidden element with identical styling to measure natural content height */}
      <p
        ref={textareaRef}
        className={cx(
          "absolute left-0 top-0 -z-10 box-border overflow-y-hidden p-3 opacity-0",
          textareaClassName
        )}
      >
        {(hasVisibleContent() && value) || placeholder}
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
  minRows?: number;
}
