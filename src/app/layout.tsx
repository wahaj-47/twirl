import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { LogsContextProvider } from "@/components/console/LogContext";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Unreal Engine clone using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LogsContextProvider>
      <html lang="en" className="w-full h-full overflow-hidden">
        <body className="w-full h-screen flex flex-col antialiased p-1">
          <Header></Header>
          <div className="flex grow bg-gray-301">{children}</div>
          <Footer></Footer>
        </body>
      </html>
    </LogsContextProvider>
  );
}
