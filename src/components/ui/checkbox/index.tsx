import { Checkbox as AntCheckbox, CheckboxProps } from "antd";
import { cn } from "@/libs/cn";
import styles from "./style.module.css";

export const Checkbox = (props: CheckboxProps) => {
  return (
    <AntCheckbox
      {...props}
      className={cn(styles["custom-checkbox"], props.className)}
      style={{ ...props.style }}
    />
  );
};
