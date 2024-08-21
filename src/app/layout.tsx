import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Olive",
  description: "A video call platform developed by Edward Bob-Kamara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
