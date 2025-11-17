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
          fontSizeLG: 14,
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
            colorText: "var(--foreground-muted)",
          },
          InputNumber: {
            colorPrimary: "var(--primary)",
          },
          Button: {
            colorPrimary: "var(--primary)",
            borderRadiusLG: 99,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
