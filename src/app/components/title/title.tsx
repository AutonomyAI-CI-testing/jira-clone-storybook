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
  lines = [""],
}: TitleProps): JSX.Element => {
  // Initialize with lines prop if provided, otherwise fall back to initTitle for backwards compatibility
  const [titleLines, setTitleLines] = useState<string[]>(
    lines.length > 0 ? lines : initTitle ? [initTitle] : [""]
  );
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  const updateTitleLine = (index: number, newValue: string) => {
    // Prevent input beyond maxLength to maintain validation consistency
    if (newValue.length > maxLength) return;

    const newLines = [...titleLines];
    newLines[index] = newValue;
    setTitleLines(newLines);
  };

  return (
    <div className="space-y-2">
      {titleLines.map((line, index) => {
        const isLineMaxLength = line.length >= maxLength;
        // Show error if provided and line is empty or only whitespace
        const requireLineError =
          error && (line.length === 0 || textAreOnlySpaces(line));

        return (
          <div key={index} className="relative">
            <TextareaAutosize
              name={`title-${index}`}
              value={line}
              setValue={(newValue) => updateTitleLine(index, newValue)}
              placeholder={`${placeholder} ${index + 1}`}
              readOnly={readOnly}
              onFocus={onFocus}
              onBlur={onBlur}
              textareaClassName={cx(
                "font-primary-black text-2xl",
                requireLineError &&
                  "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
              )}
              autofocus={index === 0}
            />
            {requireLineError && (
              <span className="ml-3 font-primary-light text-sm text-font-danger">
                {error}
              </span>
            )}
            {isFocus && (
              <span
                className={cx(
                  "absolute right-0 top-full font-primary-light text-sm",
                  isLineMaxLength ? "text-font-danger" : "text-font-subtlest"
                )}
              >
                {line.length} / {maxLength}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  lines?: string[];
}
