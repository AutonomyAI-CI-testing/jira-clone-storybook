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

  // Calculate minimum height based on minRows: ~28px per row + 6px padding
  const minHeight = Math.max(40, minRows * 28 + 6);
  const [textareaHeight, setTextareaHeight] = useState<number>(minHeight);
  // Ref to the hidden paragraph that mirrors textarea height for accurate auto-sizing
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

  // Check if value contains any non-space characters
  const valueIsNotOnlySpaces = (): boolean => {
    return !/^( )\1*$/.test(value);
  };

  // Sync textarea height with content: measure the hidden paragraph's scroll height
  useLayoutEffect(() => {
    if (!textareaRef.current) return;

    const scrollHeight = textareaRef.current.scrollHeight;
    setTextareaHeight(Math.max(minHeight, scrollHeight));
  }, [value, minHeight]);

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
      {/* Hidden paragraph with same styling as textarea to measure content height */}
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
  textareaClassName?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  minRows?: number;
}
