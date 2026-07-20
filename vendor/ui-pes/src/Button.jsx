import { forwardRef, memo } from "react";

const classNames = (...values) => values.filter(Boolean).join(" ");

export const Button = memo(
  forwardRef(function Button(
    {
      variant = "filled",
      color = "primary",
      size = "md",
      className,
      leftIcon,
      rightIcon,
      children,
      disabled,
      loading,
      element: Component = "button",
      ...props
    },
    ref,
  ) {
    return (
      <Component
        {...props}
        ref={ref}
        disabled={disabled || loading || undefined}
        aria-busy={loading || undefined}
        className={classNames(
          "ui-button",
          `ui-button--${variant}`,
          `ui-button--${color}`,
          `ui-button--${size}`,
          className,
        )}
      >
        {leftIcon ? <span className="ui-button__icon">{leftIcon}</span> : null}
        {children}
        {rightIcon ? <span className="ui-button__icon">{rightIcon}</span> : null}
      </Component>
    );
  }),
);
