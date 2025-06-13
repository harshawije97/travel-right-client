/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function NicDobSplitter() {
  const dayRef = React.useRef(null);
  const monthRef = React.useRef(null);
  const yearRef = React.useRef(null);

  const autoTab = (e: any, nextRef: any, maxLength: number) => {
    const value = e.target.value;
    if (value.length >= maxLength && nextRef?.current) {
      nextRef.current.focus();
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <Label
          htmlFor="nic"
          className="text-sm font-medium text-gray-700 md:pt-2"
        >
          NIC Number
        </Label>
        <div className="md:col-span-2 space-y-2">
          <Input
            type="text"
            id="nic"
            name="nic"
            placeholder="Enter NIC number"
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start my-3">
        <Label
          htmlFor="dob"
          className="text-sm font-medium text-gray-700 md:pt-2"
        >
          Date of Birth
        </Label>
        <div className="flex gap-4 w-full">
          <div className="w-1/3">
            <Input
              ref={dayRef}
              type="text"
              name="date"
              id="date"
              placeholder="DD"
              className="text-center text-gray-400 placeholder:text-gray-400 border-2 border-gray-300 rounded-md h-12"
              maxLength={2}
              onChange={(e) => autoTab(e, monthRef, 2)}
            />
          </div>
          <div className="w-1/3">
            <Input
              ref={monthRef}
              type="text"
              name="month"
              id="month"
              placeholder="MM"
              className="text-center text-gray-400 placeholder:text-gray-400 border-2 border-gray-300 rounded-md h-12"
              maxLength={2}
              onChange={(e) => autoTab(e, yearRef, 2)}
            />
          </div>
          <div className="w-1/3">
            <Input
              ref={yearRef}
              type="text"
              id="year"
              name="year"
              placeholder="YYYY"
              className="text-center text-gray-400 placeholder:text-gray-400 border-2 border-gray-300 rounded-md h-12"
              maxLength={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NicDobSplitter;
