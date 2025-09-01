import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Leo Sammarco - Engineering Manager",
  description: "Confident, motivated and passionate engineering manager with over 12 years of industry experience. Focused on delivering value to customers whilst fostering a high performing culture and promoting career development with a keen interest in best practices, ways of working and observability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
