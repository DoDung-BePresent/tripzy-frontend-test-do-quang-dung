"use client";

/**
 * Node modules
 */
import { useState } from "react";
import { Form } from "antd";

/**
 * Constants
 */
import { locations } from "@/constants/locations";

/**
 * Components
 */
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { InputNumber } from "@/components/ui/input-number";

export const BusAndShuttleForm = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  return (
    <Form size="large" layout="vertical" className="">
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center gap-2">
          <Form.Item label="FROM">
            <Select
              showSearch
              prefix={<Icon name="bus" size={20} className="mr-2 ml-1" />}
              suffixIcon={null}
              // options={locations}
              placeholder="Enter city, terminal,..."
              className="min-w-52!"
            />
          </Form.Item>
          <Button
            shape="circle"
            icon={
              <Icon name="transfer" size={20} className="text-primary! mt-1" />
            }
            className="shadow-level-2! border-none!"
          />
          <Form.Item label="TO">
            <Select
              showSearch
              prefix={<Icon name="bus" size={20} className="mr-2 ml-1" />}
              suffixIcon={null}
              // options={locations}
              placeholder="Enter city, terminal,..."
              className="min-w-52!"
            />
          </Form.Item>
          <Form.Item label="DEPARTURE DATE">
            <DatePicker
              suffixIcon={null}
              prefix={<Icon name="calendar" size={18} className="mr-2 ml-1" />}
              placeholder="DD / MM / YYYY"
              className="min-w-52!"
            />
          </Form.Item>
          <Form.Item
            label={
              <Checkbox
                value={isRoundTrip}
                onClick={() => setIsRoundTrip(!isRoundTrip)}
              >
                ROUND TRIP?
              </Checkbox>
            }
          >
            <DatePicker
              disabled={!isRoundTrip}
              suffixIcon={null}
              prefix={<Icon name="calendar" size={18} className="mr-2 ml-1" />}
              placeholder="DD / MM / YYYY"
              className="min-w-52!"
            />
          </Form.Item>
          <Form.Item label="NO. OF PASSENGER" className="w-full">
            <InputNumber
              defaultValue={1}
              prefix={<Icon name="user" size={20} className="mx-1" />}
              className="w-full!"
            />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};
