import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "San Francisco Creative Marketing Agency | Born & Bred",
  description:
    "Adweek's #1 Fastest-Growing Brand Agency. Born & Bred specializes in launching, evolving, and growing category disrupters and builders.",
  icons: {
    icon: "https://ext.same-assets.com/3468861848/219441743.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
