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
    maxRows,
    textareaClassName,
    onFocus,
    onBlur,
  } = props;

  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  // Hidden paragraph ref used to measure content height for auto-sizing
  const textareaRef = useRef<HTMLParagraphElement>(null);

  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    const length = target.value.length;
    // Place cursor at end on focus (improves UX when clicking to edit)
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

  // Dynamically adjust textarea height based on content
  useLayoutEffect(() => {
    if (!textareaRef.current) return;

    const scrollHeight = textareaRef.current.scrollHeight;

    // Limit height when maxRows is specified (for multi-line constrained inputs)
    if (maxRows) {
      const computedStyle = window.getComputedStyle(textareaRef.current);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);

      const maxHeight = lineHeight * maxRows + paddingTop + paddingBottom;

      // Cap at maxHeight to prevent growing beyond maxRows, enable scrolling if content exceeds
      setTextareaHeight(Math.min(scrollHeight, maxHeight));
    } else {
      // No row limit: grow to fit all content
      setTextareaHeight(scrollHeight);
    }
  }, [value, maxRows]);

  return (
    <div className="relative">
      <textarea
        name={name}
        className={cx(
          "box-border w-full resize-none rounded-md border-none bg-background-input p-3 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed",
          maxRows ? "overflow-y-auto" : "overflow-y-hidden",
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

interface TitleProps {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  autofocus?: boolean;
  readOnly?: boolean;
  maxRows?: number;
  textareaClassName?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}
