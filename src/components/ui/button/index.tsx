import { Button as AntButton, ButtonProps } from "antd";
import { cn } from "@/libs/cn";
import "./style.css";

export const Button = (props: ButtonProps) => {
  return (
    <AntButton
      {...props}
      className={cn("custom-button", props.className)}
      style={{ ...props.style }}
    />
  );
};
