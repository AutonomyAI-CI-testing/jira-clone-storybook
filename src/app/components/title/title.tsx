import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Helper to create a max-length-constrained update function
 * Prevents updates that exceed the specified character limit
 */
const createMaxLengthUpdater = (maxLength: number, setter: (value: string) => void) => {
  return (newValue: string) => {
    if (newValue.length > maxLength) return;
    setter(newValue);
  };
};

/**
 * Helper to create focus/blur handlers that only activate in editable mode
 * Read-only fields should not show character counters on focus
 */
const createFocusHandlers = (readOnly: boolean | undefined, setFocused: (focused: boolean) => void) => {
  return {
    onFocus: () => {
      if (!readOnly) setFocused(true);
    },
    onBlur: () => {
      setFocused(false);
    },
  };
};

export const Title = ({
  initTitle = "",
  initSecondLine = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  secondLineMaxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  secondLinePlaceholder = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [secondLine, setSecondLine] = useState<string>(initSecondLine);
  // Title field starts focused to guide user to fill it first
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isSecondLineFocus, setIsSecondLineFocus] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isSecondLineMaxLength = secondLine.length >= secondLineMaxLength;
  // Error only shows when field is empty or contains only whitespace
  const requireError = error && (title.length === 0 || textAreOnlySpaces(title));

  const titleHandlers = createFocusHandlers(readOnly, setIsFocus);
  const secondLineHandlers = createFocusHandlers(readOnly, setIsSecondLineFocus);

  const updateTitle = createMaxLengthUpdater(maxLength, setTitle);
  const updateSecondLine = createMaxLengthUpdater(secondLineMaxLength, setSecondLine);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={titleHandlers.onFocus}
          onBlur={titleHandlers.onBlur}
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
          <CharacterCount
            current={title.length}
            max={maxLength}
            isAtMax={isMaxLength}
          />
        )}
      </div>
      <div className="relative">
        <TextareaAutosize
          name="secondLine"
          value={secondLine}
          setValue={updateSecondLine}
          placeholder={secondLinePlaceholder}
          readOnly={readOnly}
          onFocus={secondLineHandlers.onFocus}
          onBlur={secondLineHandlers.onBlur}
          textareaClassName="font-primary-medium text-lg"
        />
        {isSecondLineFocus && (
          <CharacterCount
            current={secondLine.length}
            max={secondLineMaxLength}
            isAtMax={isSecondLineMaxLength}
          />
        )}
      </div>
    </div>
  );
};

/**
 * Character count display component
 * Shows current/max character count, with danger styling when at limit
 */
const CharacterCount = ({ current, max, isAtMax }: { current: number; max: number; isAtMax: boolean }) => (
  <span
    className={cx(
      "absolute right-0 top-full font-primary-light text-sm",
      isAtMax ? "text-font-danger" : "text-font-subtlest"
    )}
  >
    {current} / {max}
  </span>
);

interface TitleProps {
  initTitle?: string;
  initSecondLine?: string;
  readOnly?: boolean;
  maxLength?: number;
  secondLineMaxLength?: number;
  error?: string;
  placeholder?: string;
  secondLinePlaceholder?: string;
}
