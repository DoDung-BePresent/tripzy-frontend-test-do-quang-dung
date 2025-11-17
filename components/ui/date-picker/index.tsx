import React, { useEffect, useState } from "react";
import { DatePicker as AntDatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { cn } from "@/libs/cn";
import "./style.css";

const RangePicker = (AntDatePicker as any).RangePicker;

export const DatePicker = (props: DatePickerProps) => {
  const { value, onChange, showTime, className, style, ...rest } = props as any;

  const [selected, setSelected] = useState<any>(value ?? null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setSelected(value ?? null);
  }, [value]);

  const handleCalendarChange = (dates: any) => {
    if (dates && dates[0]) {
      const picked = dates[0];
      setSelected(picked);

      try {
        onChange?.(
          picked,
          picked ? picked.format?.("YYYY-MM-DD") : "",
        );
      } catch {
        onChange?.(picked);
      }

      setTimeout(() => setOpen(false), 0);
    }
  };

  const handleChange = (dates: any) => {
    if (!dates || (Array.isArray(dates) && !dates[0])) {
      setSelected(null);
      try {
        onChange?.(null, "");
      } catch {
        onChange?.(null);
      }
    }
  };

  return (
    <div>
      <RangePicker
        {...(rest as any)}
        open={open}
        onOpenChange={(o: boolean) => setOpen(o)}
        allowEmpty={[true, true]}
        value={selected ? [selected, null] : [null, null]}
        onCalendarChange={handleCalendarChange}
        onChange={handleChange}
        showTime={showTime}
        className={cn("custom-datepicker", className)}
        style={{ ...(style as React.CSSProperties) }}
        picker="date"
      />
    </div>
  );
};
