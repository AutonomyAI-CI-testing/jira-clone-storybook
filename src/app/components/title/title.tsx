import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  initSecondLine = "",
  secondLineMaxLength,
  secondLinePlaceholder = "Add a second line",
  showSecondLine = false,
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  // Show error only if an error message is provided AND the title is empty or whitespace-only
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  
  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle(newTitle);
  };

  const updateSecondLine = (newSecondLine: string) => {
    // Default to the same maxLength as title if not explicitly specified
    const effectiveMaxLength = secondLineMaxLength || maxLength;
    if (newSecondLine.length > effectiveMaxLength) return;

    setSecondLine(newSecondLine);
  };

  const onSecondLineFocus = () => {
    if (!readOnly) setIsSecondLineFocus(true);
  };

  const onSecondLineBlur = () => {
    setIsSecondLineFocus(false);
  };

  // Compute this once to share between validation and display
  const effectiveSecondLineMaxLength = secondLineMaxLength || maxLength;
  const isSecondLineMaxLength = secondLine.length >= effectiveSecondLineMaxLength;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          textareaClassName={cx(
            "font-primary-black text-2xl",
            requireError &&
              "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
          )}
          autofocus
        />
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
        {isFocus && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLength ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title.length} / {maxLength}
          </span>
        )}
      </div>
      {showSecondLine && (
        <div className="relative">
          <TextareaAutosize
            name="secondLine"
            value={secondLine}
            setValue={updateSecondLine}
            placeholder={secondLinePlaceholder}
            readOnly={readOnly}
            onFocus={onSecondLineFocus}
            onBlur={onSecondLineBlur}
            textareaClassName="font-primary text-base text-font-subtle"
          />
          {isSecondLineFocus && (
            <span
              className={cx(
                "absolute right-0 top-full font-primary-light text-sm",
                isSecondLineMaxLength ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {secondLine.length} / {effectiveSecondLineMaxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  initSecondLine?: string;
  secondLineMaxLength?: number;
  secondLinePlaceholder?: string;
  showSecondLine?: boolean;
}
