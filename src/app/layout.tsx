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
  description: "Cloud & DevOps Engineer specializing in Kubernetes, AWS, Platform Engineering, and Infrastructure as Code. Building scalable, automated solutions.",
  keywords: ["Cloud Engineer", "DevOps", "Kubernetes", "AWS", "Terraform", "Platform Engineering"],
  authors: [{ name: "Christian Josef Aquino" }],
  openGraph: {
    title: "Christian Josef Aquino | Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in Kubernetes, AWS, and Platform Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="antialiased bg-[#FAF9F6] dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
