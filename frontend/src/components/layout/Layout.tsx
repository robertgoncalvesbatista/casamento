import React from "react";

import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export default function Layout({ children, hideFooter = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>

      {!hideFooter && <Footer />}
    </div>
  );
}
