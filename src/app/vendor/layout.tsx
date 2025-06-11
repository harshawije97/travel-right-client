import React from "react";

interface VendorLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function VendorLayout({ children }: VendorLayoutProps) {
  return <div className="w-full h-full">{children}</div>;
}

export default VendorLayout;
