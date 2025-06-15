"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Loader, Lock } from "lucide-react";
import React from "react";
import SocialLinks from "./social-links";
import PackagesDescription from "./package-description";
import CategoryList from "./category-list";
import TypesList from "./types-list";
import BusinessDescription from "./business-description";
import BusinessMainServices from "./business-main-services";
import OtherActivities from "./other-activities";

function BusinessDetailsSection() {
  const [uploading, setUploading] = React.useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setUploading(true);
    const allData = Object.fromEntries(data);
    console.log(allData);
  };

  return (
    <>
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Business Name
          </Label>
          <div className="md:col-span-2 space-y-2">
            <Input
              name="businessName"
              id="businessName"
              placeholder="Enter business name"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="category"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Category
          </Label>
          <div className="md:col-span-2 space-y-2">
            <CategoryList />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="type"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Type
          </Label>
          <div className="md:col-span-2 space-y-2">
            <TypesList />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="whyChooseUs"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Why Choose Us (About us)
          </Label>
          <div className="md:col-span-2 space-y-2">
            <BusinessDescription />
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="services"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Services
          </Label>
          <div className="md:col-span-2 space-y-2">
            <BusinessMainServices />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="otherActivities"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Other Activities (Optional)
          </Label>
          <div className="md:col-span-2 space-y-2">
            <OtherActivities />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="otherActivities"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Packages & Prices
            <Tooltip>
              <TooltipTrigger>
                <Lock className="w-4 h-4" strokeWidth={1} />
              </TooltipTrigger>
              <TooltipContent>
                <p>This information is not shared publicly</p>
              </TooltipContent>
            </Tooltip>
          </Label>
          <div className="md:col-span-2 space-y-2">
            <PackagesDescription />
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="socialLinks"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Social Links
          </Label>
          <div className="md:col-span-2 space-y-2">
            <SocialLinks />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="contactDetails"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Contact Details
          </Label>
          <div className="md:col-span-2 space-y-2">
            <Input
              name="contactDetails"
              id="contactDetails"
              placeholder="Enter contact number"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <Label
            htmlFor="contactDetails"
            className="text-sm font-medium text-gray-700 md:pt-2"
          >
            Address Details
          </Label>
          <div className="md:col-span-2 space-y-2">
            <div className="space-y-2">
              <Label htmlFor="street" className="sr-only">
                Street
              </Label>
              <Input
                id="street"
                type="text"
                placeholder="Street"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="street-line-2" className="sr-only">
                Street line 2
              </Label>
              <Input
                id="street-line-2"
                type="text"
                placeholder="Street line 2 (Optional)"
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="sr-only">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postal-code" className="sr-only">
                  Zip/Postal code
                </Label>
                <Input
                  id="postal-code"
                  type="text"
                  placeholder="Zip/Postal code"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

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

export default BusinessDetailsSection;
