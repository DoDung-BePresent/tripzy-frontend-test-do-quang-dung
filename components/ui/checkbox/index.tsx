import { Checkbox as AntCheckbox, CheckboxProps } from "antd";
import { cn } from "@/libs/cn";
import "./style.css";

export const Checkbox = (props: CheckboxProps) => {
  return (
    <AntCheckbox
      {...props}
      className={cn("custom-checkbox", props.className)}
      style={{ ...props.style }}
    />
  );
};
