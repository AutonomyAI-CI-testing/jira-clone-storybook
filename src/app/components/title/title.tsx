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
  // First input autofocused, so start with focus state true
  const [isFocus, setIsFocus] = useState<boolean>(true);
  const [isFocus2, setIsFocus2] = useState<boolean>(false);

  const isMaxLength = title.length >= maxLength;
  const isMaxLength2 = title2.length >= maxLength;
  // Validation only applies to the first title field
  const requireError =
    error && (title.length === 0 || textAreOnlySpaces(title));

  const createFocusHandler =
    (setFocusState: (value: boolean) => void) => () => {
      if (!readOnly) setFocusState(true);
    };

  const createBlurHandler = (setFocusState: (value: boolean) => void) => () => {
    setFocusState(false);
  };

  const createUpdateHandler =
    (setValue: (value: string) => void) => (newValue: string) => {
      // Prevent exceeding max length
      if (newValue.length > maxLength) return;
      setValue(newValue);
    };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <TextareaAutosize
          name="title"
          value={title}
          setValue={createUpdateHandler(setTitle)}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={createFocusHandler(setIsFocus)}
          onBlur={createBlurHandler(setIsFocus)}
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
          setValue={createUpdateHandler(setTitle2)}
          placeholder={placeholder2}
          readOnly={readOnly}
          onFocus={createFocusHandler(setIsFocus2)}
          onBlur={createBlurHandler(setIsFocus2)}
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
