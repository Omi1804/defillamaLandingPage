import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starportal",
  description: "Start your DeFi journey today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
