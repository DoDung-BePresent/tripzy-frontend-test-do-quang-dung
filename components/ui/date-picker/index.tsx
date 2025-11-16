import { DatePicker as AntDatePicker, DatePickerProps } from "antd";
import { cn } from "@/libs/cn";
import "./style.css";

export const DatePicker = (props: DatePickerProps) => {
  return (
    <AntDatePicker
      {...props}
      className={cn("custom-datepicker", props.className)}
      style={{ ...props.style }}
    />
  );
};
