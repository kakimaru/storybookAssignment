import "./DSAlert.scss";
import { RiErrorWarningLine } from "react-icons/ri";

export const colors = ["primary", "warning", "danger"] as const;

type Colors = (typeof colors)[number];

export type Props = {
  colors?: Colors;
  title: string;
  description: string;
};

const BASE_CLASS = "ds-alert";

export default function DSAlert({
  colors = "primary",
  title,
  description,
  ...rest
}: Props) {
  const classes = [BASE_CLASS, `${BASE_CLASS}--${colors}`]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      <div className={`${BASE_CLASS}--header`}>
        <RiErrorWarningLine />
        <h1 className={`${BASE_CLASS}--title`}>{title}</h1>
      </div>
      <p className={`${BASE_CLASS}--description`}>{description}</p>
    </div>
  );
}
