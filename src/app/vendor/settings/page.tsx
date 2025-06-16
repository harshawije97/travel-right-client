import { Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";

function SettingsPage() {
  return (
    <div className="w-full h-screen py-28">
      <div className="container mx-auto">
        <div className="flex px-16 w-full h-full">
          <div className="max-w-md text-center space-y-6">
            <div className="flex justify-center">
              <Wrench className="w-16 h-16 text-gray-400" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                Page Under Construction
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Analytics page is down for planned maintenance. We&apos;ll be
                back with the latest update in upcoming weeks. Follow us on{" "}
                <Link
                  href="https://twitter.com"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Twitter
                </Link>
                or our
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Facebook Page
                </Link>{" "}
                for latest updates.
              </p>
            </div>
          </div>
          <div className="max-w-sm text-center space-y-6"></div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
