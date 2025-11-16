import type { Metadata } from "next";
import "@ant-design/v5-patch-for-react-19";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

/**
 * Providers
 */
import { AntConfigProvider } from "@/providers/ant-config-provider";

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
        <AntdRegistry>
          <AntConfigProvider>{children}</AntConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
