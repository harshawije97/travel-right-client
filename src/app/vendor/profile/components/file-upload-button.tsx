"use client";

import { Button } from "@/components/ui/button";
import React from "react";
interface FileUploadButtonProps {
  onFileUpload: () => void;
  title: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

function FileUploadButton({
  onFileUpload,
  title,
  icon,
  disabled,
}: FileUploadButtonProps) {
  return (
    <Button
      type="button"
      onClick={onFileUpload}
      className="gap-x-2"
      disabled={disabled}
    >
      {icon}
      {title}
    </Button>
  );
}

export default FileUploadButton;
