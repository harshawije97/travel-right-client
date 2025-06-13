/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { ImageIcon, Loader, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FileUploadButton from "./file-upload-button";
import { toast } from "sonner";

function AvatarUpload() {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState("");
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [uploading, setUploading] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [uploaded, setUploaded] = React.useState(false);

  const fileUpload = async () => {
    setUploading(true);

    setTimeout(() => {
      setUploading(false);
      toast.success("Profile photo uploaded successfully", {
        position: "top-right",
        classNames: {
          icon: "text-green-500",
          title: "font-semibold text-slate-500",
        },
      });
      setUploaded(true);
    }, 5000);
  };

  const handleFileChange = (event: any) => {
    const userFile = event.target.files[0];
    if (!userFile) {
      return;
    } else {
      setFile(userFile);
    }

    setError("");

    const url = URL.createObjectURL(userFile);
    setPreviewUrl(url);
  };

  const onFileSelect = () => {
    fileInputRef.current?.click();
  };

  const onFileRemove = () => {
    setFile(null);
    setPreviewUrl(null);

    // reload the page
    window.location.reload();
  };

  const onFileRemoveServer = () => {
    console.log("File removed from server:");
  };
  return (
    <>
      <div className="space-y-4 flex w-full gap-x-10 items-center pb-6 pt-3">
        <h2 className="text-base font-medium">Avatar</h2>
        <div className="flex flex-1 items-center justify-center gap-4">
          {/* Avatar placeholder */}
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
            {previewUrl ? (
              <Image
                src={previewUrl || "/placeholder.png"}
                alt="avatar"
                width={35}
                height={35}
                className="w-full h-full object-cover rounded-full p-1"
                loading="lazy"
              />
            ) : (
              <ImageIcon className="w-8 h-8 text-gray-400" />
            )}
          </div>

          {/* Uploader */}
          <div className="flex flex-col gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="invisible"
            />
            <span className="flex items-center gap-x-2">
              {previewUrl ? (
                <FileUploadButton
                  onFileUpload={fileUpload}
                  title={uploading ? "Uploading" : "Upload photo"}
                  icon={
                    uploading ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      <Upload className="w-4 h-4" />
                    )
                  }
                  disabled={uploading || uploaded}
                />
              ) : (
                <FileUploadButton
                  onFileUpload={onFileSelect}
                  title="Choose a photo"
                  icon={<Plus className="w-4 h-4" />}
                />
              )}
              {previewUrl && (
                <Button
                  type="button"
                  variant="ghost"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={uploaded ? onFileRemoveServer : onFileRemove}
                >
                  {uploaded ? "Remove uploaded" : "Remove photo"}
                </Button>
              )}
            </span>
            <p className="text-sm text-gray-500">Pick a photo up to 1MB.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvatarUpload;
