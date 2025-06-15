"use client";

import React from "react";
import AvatarUpload from "./avatar-upload";
import CoverPhotoUpload from "./cover-photo-upload";

function UserProfileSection() {
  return (
    <section className="flex flex-col w-full">
      <AvatarUpload />
      {/* Cover Photo Section */}
      <div className="space-y-4 flex w-full gap-x-10 items-center">
        <h2 className="text-base font-medium">Cover photo</h2>
        <div className="flex flex-1 items-center justify-end gap-4">
          {/* Cover photo uploader */}
          <CoverPhotoUpload />
        </div>
      </div>
    </section>
  );
}

export default UserProfileSection;
