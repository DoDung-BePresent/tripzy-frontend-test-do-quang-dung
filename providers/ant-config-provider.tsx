import { ConfigProvider } from "antd";

export const AntConfigProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeightLG: 52,
          fontFamily: "var(--font-nuntio-sans)",
          colorBgContainerDisabled: "var(--bg-disabled)",
        },
        components: {
          Form: {
            inlineItemMarginBottom: 10,
            labelHeight: "10px !important",
            labelColor: "var(--foreground-muted)",
          },
          DatePicker: {
            cellActiveWithRangeBg: "transparent",
            colorPrimary: "var(--primary)",
          },
          Select: {
            colorPrimary: "var(--primary)",
          },
          Checkbox: {
            // FIXME: colorPrimary repeat too muchhhh! Ahhhh
            colorPrimary: "var(--primary)",
            colorPrimaryBg: "var(--primary)",
          },
          InputNumber: {
            colorPrimary: "var(--primary)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
