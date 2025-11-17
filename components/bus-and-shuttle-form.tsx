"use client";

/**
 * Node modules
 */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, message } from "antd";
import type { Dayjs } from "dayjs";

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
  const router = useRouter();
  const [form] = Form.useForm();
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [loading, setLoading] = useState(false);

  const locationOptions = locations.map((location) => ({
    value: `${location.short_code} - ${location.english_name}`,
    label: (
      <div className="flex flex-col">
        <span className="font-medium">
          {location.short_code} - {location.english_name}
        </span>
        <span className="text-foreground-secondary text-xs">
          {location.code_state}
        </span>
      </div>
    ),
  }));

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const values = await form.validateFields();

      const { from, to, departureDate, returnDate, passengers } = values;

      if (!from || !to) {
        message.error("Please select both From and To locations");
        return;
      }

      if (!departureDate) {
        message.error("Please select departure date");
        return;
      }

      if (isRoundTrip && !returnDate) {
        message.error("Please select return date for round trip");
        return;
      }

      if (
        isRoundTrip &&
        returnDate &&
        (returnDate as Dayjs).isBefore(departureDate as Dayjs)
      ) {
        message.error("Return date must be after or equal to departure date");
        return;
      }

      if (!passengers || passengers < 1) {
        message.error("Number of passengers must be at least 1");
        return;
      }

      const params = new URLSearchParams({
        mode: "bus",
        from: from,
        to: to,
        dep: (departureDate as Dayjs).format("YYYY-MM-DD"),
        ...(isRoundTrip &&
          returnDate && {
            ret: (returnDate as Dayjs).format("YYYY-MM-DD"),
          }),
        pax: String(passengers),
      });

      router.push(`/search?${params.toString()}`);
    } catch (error) {
      message.error("Please fill in all required fields correctly");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} size="large" layout="vertical">
      <div className="flex items-center justify-between gap-2">
        <Form.Item
          label="FROM"
          name="from"
          rules={[
            { required: true, message: "Please select departure location" },
          ]}
        >
          <Select
            showSearch
            prefix={<Icon name="bus" size={20} className="mr-2 ml-1" />}
            suffixIcon={null}
            options={locationOptions}
            placeholder="Enter city, terminal,..."
            className="min-w-52!"
            filterOption={(input, option) =>
              (option?.value?.toString() ?? "")
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          />
        </Form.Item>

        <Button
          shape="circle"
          icon={
            <Icon name="transfer" size={20} className="text-primary! mt-1" />
          }
          className="shadow-level-2! border-none!"
          onClick={() => {
            const from = form.getFieldValue("from");
            const to = form.getFieldValue("to");
            form.setFieldsValue({ from: to, to: from });
          }}
        />

        <Form.Item
          label="TO"
          name="to"
          rules={[{ required: true, message: "Please select destination" }]}
        >
          <Select
            showSearch
            prefix={<Icon name="bus" size={20} className="mr-2 ml-1" />}
            suffixIcon={null}
            options={locationOptions}
            placeholder="Enter city, terminal,..."
            className="min-w-52!"
            filterOption={(input, option) =>
              (option?.value?.toString() ?? "")
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          />
        </Form.Item>

        <Form.Item
          label="DEPARTURE DATE"
          name="departureDate"
          rules={[{ required: true, message: "Please select departure date" }]}
        >
          <DatePicker
            suffixIcon={null}
            prefix={<Icon name="calendar" size={18} className="mr-2 ml-1" />}
            placeholder="YYYY - MM - DD"
            className="min-w-52!"
          />
        </Form.Item>

        <Form.Item
          label={
            <Checkbox
              checked={isRoundTrip}
              onChange={(e) => {
                setIsRoundTrip(e.target.checked);
                if (!e.target.checked) {
                  form.setFieldValue("returnDate", null);
                }
              }}
            >
              ROUND TRIP?
            </Checkbox>
          }
          name="returnDate"
          rules={[
            {
              required: isRoundTrip,
              message: "Please select return date",
            },
          ]}
        >
          <DatePicker
            disabled={!isRoundTrip}
            suffixIcon={null}
            prefix={<Icon name="calendar" size={18} className="mr-2 ml-1" />}
            placeholder="YYYY - MM - DD"
            className="min-w-52!"
          />
        </Form.Item>

        <Form.Item
          label="NO. OF PASSENGER"
          name="passengers"
          initialValue={1}
          rules={[
            { required: true, message: "Please enter number of passengers" },
            {
              type: "number",
              min: 1,
              message: "At least 1 passenger required",
            },
          ]}
          className="w-full"
        >
          <InputNumber
            min={1}
            prefix={<Icon name="user" size={20} className="mx-1" />}
            className="w-full!"
          />
        </Form.Item>
      </div>

      <div className="flex justify-center">
        <Button
          type="primary"
          className="w-64"
          onClick={handleSubmit}
          loading={loading}
        >
          <Icon name="search" size={20} />
          SEARCH
        </Button>
      </div>
    </Form>
  );
};
