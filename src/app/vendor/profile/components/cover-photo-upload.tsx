"use client";

import React from "react";
import { ImageIcon, Loader, Upload } from "lucide-react";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function CoverPhotoUpload() {
  const [file, setFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState("");
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [uploaded, setUploaded] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    const userFile = acceptedFiles[0];
    if (!userFile) {
      return;
    } else {
      setFile(userFile);
    }

    setError("");

    const url = URL.createObjectURL(userFile);
    setPreviewUrl(url);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onFileRemove = () => {
    setFile(null);
    setPreviewUrl(null);

    // reload the page
    window.location.reload();
  };

  const onFileRemoveServer = () => {
    console.log("File removed from server:");
  };

  // upload file
  const uploadCoverPhoto = async () => {
    setUploading(true);

    setTimeout(() => {
      setUploading(false);
      toast.success("Cover photo uploaded successfully", {
        position: "top-right",
        classNames: {
          icon: "text-green-500",
          title: "font-semibold text-slate-500",
        },
      });
      setUploaded(true);
    }, 5000);
  };

  return (
    <>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50/50 lg:min-w-[565px] w-max">
        <div
          className="flex flex-col items-center justify-center space-y-4"
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          <div
            className={cn(
              file ? "w-full h-36 p-1 border" : "w-16 h-16 border-dashed",
              "rounded-lg border-2 border-gray-300 flex items-center justify-center bg-white"
            )}
          >
            {file ? (
              <Image
                src={previewUrl!}
                alt="preview"
                width={100}
                height={100}
                className="w-full h-28 object-center"
              />
            ) : (
              <ImageIcon className="w-8 h-8 text-gray-400" />
            )}
          </div>
          <div className="space-y-2">
            {isDragActive ? (
              <p className="text-blue-600">Drop your files</p>
            ) : (
              <>
                <p className="text-gray-600">
                  Drop your file here or
                  <Button variant={"link"}>browse</Button>
                </p>
                <p className="text-sm text-gray-500">Pick a photo up to 2MB.</p>
              </>
            )}
          </div>
        </div>
        <span className="flex w-full justify-center">
          {file && (
            <span className="flex gap-x-4 items-center mt-6">
              <Button
                type="button"
                onClick={uploadCoverPhoto}
                disabled={uploading || uploaded}
              >
                {uploading ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )}
                {uploading ? "Uploading" : "Upload cover photo"}
              </Button>
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
          )}
        </span>
      </div>
    </>
  );
}

export default CoverPhotoUpload;
