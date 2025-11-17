import { Select as AntSelect, SelectProps } from "antd";
import { cn } from "@/libs/cn";
import "./style.css";

export const Select = (props: SelectProps) => {
  return (
    <AntSelect
      {...props}
      className={cn("custom-select", props.className)}
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
