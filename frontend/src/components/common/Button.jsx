import React from "react";
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const classes = `button button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
