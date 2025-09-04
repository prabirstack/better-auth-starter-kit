import { ReactNode } from "react";
import { Header } from "@/components/layout/header";

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Header />
      {children}
    </div>
  );
}
