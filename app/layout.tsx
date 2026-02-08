import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { LocaleProvider } from "@/lib/locale-context";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "אדם אריאל | כדורסלן | Adam Ariel",
  description:
    "האתר הרשמי של אדם אריאל, קפטן מכבי עירוני רמת גן. The official website of Adam Ariel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning className={`${heebo.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
