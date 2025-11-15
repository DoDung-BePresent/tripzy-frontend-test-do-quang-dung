"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Icon } from "@/components/ui/icon";
import { locations, Location } from "@/constants/locations";

export const BusAndShuttleForm = () => {
  const [from, setFrom] = useState<Location | null>(null);

  return (
    <form className="grid grid-cols-1 gap-4 px-4 md:grid-cols-5">
      <div className="md:col-span-2">
        <label
          htmlFor="from"
          className="text-foreground-muted mb-1 block text-sm font-medium"
        >
          FROM
        </label>
        <Select onValueChange={setFrom} defaultValue={from}>
          <SelectTrigger
            placeholder={
              <div className="flex items-center gap-2">
                <Icon name="bus" size={18} className="text-foreground" />
                <span className="text-foreground-muted/70">
                  Enter city, terminal,...
                </span>
              </div>
            }
          >
            {(value) => (
              <div className="flex items-center gap-2">
                <Icon name="bus" size={20} className="text-foreground" />
                <span>
                  {value.short_code} - {value.english_name}
                </span>
              </div>
            )}
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location.short_code} value={location}>
                <div className="flex flex-col">
                  <span className="font-bold">
                    {location.short_code} - {location.english_name}
                  </span>
                  <span className="text-foreground-secondary text-xs">
                    {location.code_state}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </form>
  );
};
