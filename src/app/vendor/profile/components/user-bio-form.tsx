"use client";

import React from "react";
import NiceDobSplitter from "@/app/vendor/profile/components/nice-dob-splitter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "lucide-react";
import { toast } from "sonner";

function UserInformation() {
  const [uploading, setUploading] = React.useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setUploading(true);
    const allData = Object.fromEntries(data);

    const updateData = {
      firstName: allData.fullName,
      email: allData.email,
      nic: allData.nic,
      date: allData.date,
      month: allData.month,
      year: allData.year,
    };

    console.log(updateData);
    setTimeout(() => {
      setUploading(false);
      toast.success("Personal information updated successfully", {
        position: "top-right",
        classNames: {
          icon: "text-green-500",
          title: "font-semibold text-slate-500",
        },
      });
    }, 5000);
  };
  return (
    <>
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Full Name
          </Label>
          <div className="md:col-span-2 space-y-2">
            <Input
              name="fullName"
              id="name"
              placeholder="Enter full name"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Email
          </Label>
          <div className="md:col-span-2 space-y-2">
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full"
            />
          </div>
        </div>

        <NiceDobSplitter />
        <div className="mt-3">
          <Button className="max-w-sm" type="submit" formAction={onSubmit}>
            {uploading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                <span className="ml-1">Saving...</span>
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </form>
    </>
  );
}

export default UserInformation;
