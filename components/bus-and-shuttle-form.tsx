"use client";

/**
 * Node modules
 */
import { Form } from "antd";

/**
 * Constants
 */
import { locations } from "@/constants/locations";

/**
 * Components
 */
import { Select } from "@/components/ui/select";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export const BusAndShuttleForm = () => {
  return (
    <Form size="large" layout="vertical" className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Form.Item label="FROM">
            <Select
              showSearch
              prefix={<Icon name="bus" size={20} className="mr-2 ml-1" />}
              suffixIcon={null}
              // options={locations}
              placeholder="Enter city, terminal,..."
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
            />
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};
