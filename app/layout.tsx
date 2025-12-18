import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cell N Fix — Phones, Accessories & Repair",
  description: "Cell phone repair and accessories in Redding, California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
