import { InputNumber as AntInputNumber, InputNumberProps } from "antd";
import { cn } from "@/libs/cn";
import "./style.css";

export const InputNumber = (props: InputNumberProps) => {
  return (
    <AntInputNumber
      {...props}
      className={cn("custom-input-number", props.className)}
      style={{ ...props.style }}
    />
  );
};
