import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

/**
 * Renders a TextareaAutosize component with consistent styling and error handling.
 * Avoids code duplication between title and subtitle fields.
 */
function TitleField({
  name,
  value,
  setValue,
  placeholder,
  readOnly,
  onFocus,
  onBlur,
  requireError,
  autofocus = false,
}: {
  name: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  readOnly: boolean | undefined;
  onFocus: () => void;
  onBlur: () => void;
  requireError: boolean;
  autofocus?: boolean;
}) {
  return (
    <TextareaAutosize
      name={name}
      value={value}
      setValue={setValue}
      placeholder={placeholder}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      textareaClassName={cx(
        "font-primary-black text-2xl",
        requireError &&
          "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
      )}
      autofocus={autofocus}
    />
  );
}

export const Title = ({
  initTitle = "",
  initTitle2 = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  placeholder2 = "Write the subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [title2, setTitle2] = useState<string>(initTitle2);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  const isMaxLength = title.length >= maxLength;
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

  const updateTitle2 = (newTitle: string) => {
    if (newTitle.length > maxLength) return;

    setTitle2(newTitle);
  };

  return (
    <div className="relative">
      <div className="space-y-1">
        <TitleField
          name="title"
          value={title}
          setValue={updateTitle}
          placeholder={placeholder}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          requireError={requireError}
          autofocus
        />
        <TitleField
          name="title2"
          value={title2}
          setValue={updateTitle2}
          placeholder={placeholder2}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          requireError={requireError}
        />
      </div>
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
