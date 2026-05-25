import { useState } from "react";
import cx from "classix";
import { TextareaAutosize } from "@app/components/textarea-autosize";
import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

const DEFAULT_MAX_LENGTH = 80;

interface TitleField {
  value: string;
  placeholder: string;
  textareaClassName?: string;
  name: string;
  autofocus?: boolean;
}

interface TitleProps {
  initTitle?: string;
  initSubtitle?: string;
  readOnly?: boolean;
  maxLength?: number;
  error?: string;
  placeholder?: string;
  subtitlePlaceholder?: string;
}

/**
 * Internal component for a single textarea field with character count.
 * Reused for both title and subtitle fields to avoid code duplication.
 * Only shows the character count when the field has focus.
 */
const TitleTextField = ({
  field,
  readOnly,
  maxLength,
  isFocus,
  error,
  value,
  onChange,
  onFocus,
  onBlur,
  showError,
}: {
  field: TitleField;
  readOnly?: boolean;
  maxLength: number;
  isFocus: boolean;
  error?: string;
  value: string;
  onChange: (newValue: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  showError?: boolean;
}): JSX.Element => {
  const isMaxLength = value.length >= maxLength;

  return (
    <div className="relative">
      <TextareaAutosize
        name={field.name}
        value={value}
        setValue={onChange}
        placeholder={field.placeholder}
        readOnly={readOnly}
        onFocus={onFocus}
        onBlur={onBlur}
        textareaClassName={cx(
          field.textareaClassName,
          showError &&
            "focus-visible:outline-border-danger outline outline-2 outline-border-danger"
        )}
        autofocus={field.autofocus}
      />
      {isFocus && (
        <span
          className={cx(
            "absolute right-0 top-full font-primary-light text-sm",
            isMaxLength ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {value.length} / {maxLength}
        </span>
      )}
    </div>
  );
};

export const Title = ({
  initTitle = "",
  initSubtitle = "",
  readOnly,
  maxLength = DEFAULT_MAX_LENGTH,
  error,
  placeholder = "Write the title",
  subtitlePlaceholder = "Add a subtitle",
}: TitleProps): JSX.Element => {
  const [title, setTitle] = useState<string>(initTitle);
  const [subtitle, setSubtitle] = useState<string>(initSubtitle);
  const [isFocus, setIsFocus] = useState<boolean>(true);

  // Only show error if an error message was provided AND the title is empty or only spaces
  const requireError = !!(
    error &&
    (title.length === 0 || textAreOnlySpaces(title))
  );

  // Track focus state to show/hide character count and validation styling
  const onFocus = () => {
    if (!readOnly) setIsFocus(true);
  };
  const onBlur = () => {
    setIsFocus(false);
  };

  // Prevent input beyond maxLength by ignoring updates that exceed the limit
  const updateTitle = (newTitle: string) => {
    if (newTitle.length > maxLength) return;
    setTitle(newTitle);
  };

  const updateSubtitle = (newSubtitle: string) => {
    if (newSubtitle.length > maxLength) return;
    setSubtitle(newSubtitle);
  };

  return (
    <div className="space-y-2">
      <div className="relative">
        <TitleTextField
          field={{
            value: title,
            placeholder,
            textareaClassName: "font-primary-black text-2xl",
            name: "title",
            autofocus: true,
          }}
          readOnly={readOnly}
          maxLength={maxLength}
          isFocus={isFocus}
          error={error}
          value={title}
          onChange={updateTitle}
          onFocus={onFocus}
          onBlur={onBlur}
          showError={requireError}
        />
        {requireError && (
          <span className="ml-3 font-primary-light text-sm text-font-danger">
            {error}
          </span>
        )}
      </div>
      <TitleTextField
        field={{
          value: subtitle,
          placeholder: subtitlePlaceholder,
          textareaClassName: "font-primary text-sm",
          name: "subtitle",
        }}
        readOnly={readOnly}
        maxLength={maxLength}
        isFocus={isFocus}
        value={subtitle}
        onChange={updateSubtitle}
        onFocus={onFocus}
        onBlur={onBlur}
        showError={false}
      />
    </div>
  );
};
