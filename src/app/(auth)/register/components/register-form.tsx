"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

function RegisterForm() {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    React.useState<boolean>(false);

  return (
    <div className="max-w-lg w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Set up your Vendor account
        </h1>
        <p className="text-gray-600">
          Gain more leads with Travel Right Vendor.
        </p>
      </div>

      <div className="space-y-4">
        {/* Social Sign Up Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with Apple
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">OR</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="fullname"
              className="text-sm font-medium text-gray-700"
            >
              Full name
            </Label>
            <Input id="fullname" type="text" className="mt-1" />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </Label>
            <Input id="email" type="email" className="mt-1" />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </Label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <div className="relative mt-1">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <Label
              htmlFor="company"
              className="text-sm font-medium text-gray-700"
            >
              Company name
            </Label>
            <Input id="company" type="text" className="mt-1" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm text-gray-600">
              I accept the{" "}
              <a href="/terms" className="text-blue-600 hover:text-blue-500">
                Terms and Conditions
              </a>
            </Label>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Sign up
          </Button>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              Have an account?{" "}
              <a href="/sign-in" className="text-blue-600 hover:text-blue-500">
                Sign in
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
