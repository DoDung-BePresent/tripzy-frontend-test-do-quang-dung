/**
 * Node modules
 */
import { InputNumber as AntInputNumber, InputNumberProps } from "antd";

/**
 * Libs
 */
import { cn } from "@/libs/cn";

/**
 * Styles
 */
import styles from "./style.module.css";

export const InputNumber = (props: InputNumberProps) => {
  return (
    <AntInputNumber
      {...props}
      className={cn(styles["custom-input-number"], props.className)}
      style={{ ...props.style }}
    />
  );
};
