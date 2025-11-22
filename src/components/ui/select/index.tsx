/**
 * Node modules
 */
import { Select as AntSelect, SelectProps } from "antd";

/**
 * Libs
 */
import { cn } from "@/libs/cn";

/**
 * Styles
 */
import styles from "./style.module.css";

export const Select = (props: SelectProps) => {
  return (
    <AntSelect
      {...props}
      className={cn(styles["custom-select"], props.className)}
      style={{ ...props.style }}
      styles={{
        popup: {
          root: {
            minWidth: 300,
            padding: 10,
          },
        },
      }}
    />
  );
};
