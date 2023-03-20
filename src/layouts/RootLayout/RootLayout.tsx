import { ReactNode } from "react";

import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <div
      className={inter.className}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
