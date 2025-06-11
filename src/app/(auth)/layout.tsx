import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="w-full h-full">{children}</div>;
}

export default AuthLayout;
