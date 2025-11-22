import { Button as AntButton, ButtonProps } from "antd";
import { cn } from "@/libs/cn";
import styles from "./style.module.css";

export const Button = (props: ButtonProps) => {
  return (
    <AntButton
      {...props}
      className={cn(styles["custom-button"], props.className)}
      style={{ ...props.style }}
    />
  );
};
