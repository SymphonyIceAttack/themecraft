import { Analytics } from "@vercel/analytics/react";
import type React from "react";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { metadata, viewport } from "@/components/seo/metadata-config";
import { StructuredData } from "@/components/seo/structured-data";
import { ThemeProvider } from "@/components/theme-provider";

// Re-export viewport and metadata for Next.js
export { viewport, metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
