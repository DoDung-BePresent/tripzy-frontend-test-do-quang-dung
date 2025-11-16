import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";

const nuntioSans = Nunito_Sans({
  variable: "--font-nuntio-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripzy - Travel Smarter, Not Harder",
  description:
    "Make every trip effortless. Tripzy lets you book rides and plan journeys with ease",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nuntioSans.variable} antialiased`}>
        <ConfigProvider
          theme={{
            token: {
              controlHeightLG: 52,
              fontFamily: "var(--font-nuntio-sans)",
            },
            components: {
              Form: {
                inlineItemMarginBottom: 10,
                labelHeight: "10px !important",
                labelColor: "var(--foreground-muted)",
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
