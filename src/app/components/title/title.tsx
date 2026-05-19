import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholder2 = "Write the second line",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  // Primary title input starts focused for immediate editing
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Error applies only to the primary title field
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  // Helper to create focus handler that respects readOnly state
  const createFocusHandler = (setFocusState: (value: boolean) => void) => {
    return () => {
      if (!readOnly) setFocusState(true);
    };
  };

  // Helper to enforce maxLength constraint
  const createUpdateHandler = (setState: (value: string) => void) => {
    return (newValue: string) => {
      if (newValue.length > maxLength) return;
      setState(newValue);
    };
  };

  const onFocus = createFocusHandler(setIsFocus);
  const onFocus2 = createFocusHandler(setIsFocus2);
  const onBlur = () => setIsFocus(false);
  const onBlur2 = () => setIsFocus2(false);

  const updateTitle = createUpdateHandler(setTitle);
  const updateTitle2 = createUpdateHandler(setTitle2);

  return (
    // Two-line title input: primary title with error validation, optional secondary line
    <div className="space-y-2">
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
      <div className="relative">
        <TextareaAutosize
          name="title2"
          value={title2}
          setValue={updateTitle2}
          placeholder={placeholder2}
          readOnly={readOnly}
          onFocus={onFocus2}
          onBlur={onBlur2}
          textareaClassName="font-primary-black text-2xl"
        />
        {isFocus2 && (
          <span
            className={cx(
              "absolute right-0 top-full font-primary-light text-sm",
              isMaxLength2 ? "text-font-danger" : "text-font-subtlest"
            )}
          >
            {title2.length} / {maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

interface TitleProps {
  initTitle?: string;
  initTitle2?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  placeholder2?: string;
}
