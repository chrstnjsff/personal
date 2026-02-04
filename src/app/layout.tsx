import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
