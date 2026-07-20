import { forwardRef, memo, useId, useState } from "react";

const classNames = (...values) => values.filter(Boolean).join(" ");

export const Input = memo(
  forwardRef(function Input(
    {
      size = "lg",
      bg = "default",
      value = "",
      leftIcon,
      rightIcon,
      label,
      helperText,
      isError,
      errorMessage,
      rootClassName,
      containerClassName,
      className,
      id,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) {
    const generatedId = useId();
    const inputId = id || generatedId;
    const [focused, setFocused] = useState(false);

    return (
      <div className={classNames("ui-input", rootClassName)} data-focused={focused || undefined} data-error={isError || undefined}>
        {label ? <label htmlFor={inputId} className="ui-input__label">{label}</label> : null}
        <div className={classNames("ui-input__container", `ui-input__container--${size}`, `ui-input__container--${bg}`, containerClassName)}>
          {leftIcon ? <span className="ui-input__side">{leftIcon}</span> : null}
          <input
            {...props}
            id={inputId}
            ref={ref}
            value={value}
            className={classNames("ui-input__control", className)}
            aria-invalid={isError || undefined}
            onFocus={(event) => {
              setFocused(true);
              onFocus?.(event);
            }}
            onBlur={(event) => {
              setFocused(false);
              onBlur?.(event);
            }}
          />
          {rightIcon ? <span className="ui-input__side">{rightIcon}</span> : null}
        </div>
        {isError && errorMessage ? <p className="ui-input__message ui-input__message--error">{errorMessage}</p> : null}
        {!isError && helperText ? <p className="ui-input__message">{helperText}</p> : null}
      </div>
    );
  }),
);
