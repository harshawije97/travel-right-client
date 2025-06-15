import { Separator } from "@/components/ui/separator";
import React from "react";
import UserProfileSection from "./components/user-profile-section";
import UserInformation from "./components/user-bio-form";
import BusinessDetailsSection from "./components/business-details-section";

function EditVendorProfile() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto">
        <div className="w-full h-ful flex flex-col gap-y-28 px-16">
          <section className="max-w-4xl border flex flex-col gap-4 rounded-lg">
            <header className="bg-accent py-2.5 px-4 rounded-t-lg">
              <h1 className="text-xl font-medium">Edit Profile</h1>
            </header>
            <div className="w-full h-full flex flex-col gap-4 px-6 py-4">
              <section className="w-full">
                {/* User Personal information */}
                <UserInformation />
              </section>
            </div>
          </section>

          <section className="max-w-4xl border flex flex-col gap-4 rounded-lg">
            <header className="bg-accent py-2.5 px-4 rounded-t-lg">
              <h1 className="text-xl font-medium">Business Information</h1>
            </header>
            <div className="w-full h-full flex flex-col gap-4 px-6 py-4">
              <UserProfileSection />
              <Separator />
              <BusinessDetailsSection />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EditVendorProfile;
