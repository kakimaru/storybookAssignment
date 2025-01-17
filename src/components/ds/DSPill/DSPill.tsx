import { ButtonHTMLAttributes } from "react";
import "./DSPill.scss"

export const size = ["xs", "sm", "md", "lg", "xl"] as const;

type Variant = (typeof size)[number];

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: Variant;
  icon?: string;
};

const BASE_CLASS = "ds-pill";

export default function DSPill({
  size = "md",
  icon = "x",
  children,
  ...rest
}: Props) {
  const classes = [BASE_CLASS, `${BASE_CLASS}--${size}`]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
      <span> {icon}</span>
    </button>
  );
}
