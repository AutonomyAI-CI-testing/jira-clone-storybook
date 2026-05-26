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
    lines = 1,
  } = props;

  const [textareaHeight, setTextareaHeight] = useState<number>(40);
  const textareaRef = useRef<HTMLParagraphElement>(null);

  // For multi-line textareas, calculate max height to prevent unbounded growth.
  // Allows scrolling when content exceeds the specified line count.
  const lineHeight = 24;
  const maxHeight = lines * lineHeight + 24; // 24px for padding + borders

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

  useLayoutEffect(() => {
    if (!textareaRef.current) return;

    // Measure hidden element's scroll height to determine actual content size
    const scrollHeight = textareaRef.current.scrollHeight;
    // Constrain to maxHeight to limit visible rows while enabling scroll overflow
    const finalHeight = Math.min(scrollHeight, maxHeight);
    setTextareaHeight(finalHeight);
  }, [value, maxHeight]);

  return (
    <div className="relative">
      <textarea
        name={name}
        // Enable scrolling only for multi-line textareas that exceed max height
        className={cx(
          "box-border w-full resize-none rounded-md border-none bg-background-input p-3 text-font outline-2 hover:bg-background-input-hovered focus-visible:bg-background-input-pressed",
          lines > 1 ? "overflow-y-auto" : "overflow-y-hidden",
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
  textareaClassName?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  lines?: number;
}
