import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

function DashboardPage() {
  return (
    <div className="w-full min-h-screen py-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top metrics row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Users */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  Total Users
                </CardTitle>
                <HelpCircle className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">72,540</div>
                <div className="flex items-center text-green-600 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  1.7%
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sessions */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">29.4%</div>
            </CardContent>
          </Card>

          {/* Avg Click Rate */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Avg. Click Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">56.8%</div>
                <div className="flex items-center text-red-600 text-sm">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  1.7%
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pageviews */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Pageviews
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">92,913</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
