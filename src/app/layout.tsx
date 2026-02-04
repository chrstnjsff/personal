import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Josef Aquino | Cloud & DevOps Engineer",
  description: "Cloud & DevOps Engineer specializing in Kubernetes, AWS, Platform Engineering, and Infrastructure as Code.",
  keywords: ["Cloud Engineer", "DevOps", "Kubernetes", "AWS", "Terraform", "Platform Engineering"],
  authors: [{ name: "Christian Josef Aquino" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="antialiased bg-[#FAFAFA] dark:bg-[#121212] text-gray-900 dark:text-gray-100 min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
