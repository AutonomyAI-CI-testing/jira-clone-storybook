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

  const lineHeight = 20;
  const initialHeight = minRows * lineHeight + 16; // 16px for padding (p-3 = 12px + 4px)
  const [textareaHeight, setTextareaHeight] = useState<number>(initialHeight);
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
      <p
        ref={textareaRef}
        className={cx(
          "absolute left-0 top-0 -z-10 box-border overflow-y-hidden p-3 opacity-0 whitespace-pre-wrap",
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
