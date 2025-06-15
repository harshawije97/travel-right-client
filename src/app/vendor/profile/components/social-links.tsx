"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import React from "react";

function SocialLinks() {
  const [socialLinks, setSocialLinks] = React.useState([
    { id: 1, url: "" },
    { id: 2, url: "" },
    { id: 3, url: "" },
  ]);

  const addLink = () => {
    const newId = Math.max(...socialLinks.map((link) => link.id)) + 1;
    setSocialLinks([...socialLinks, { id: newId, url: "" }]);
  };

  const removeLink = (id: number) => {
    if (socialLinks.length > 1) {
      setSocialLinks(socialLinks.filter((link) => link.id !== id));
    }
  };

  const updateLink = (id: number, url: string) => {
    setSocialLinks(
      socialLinks.map((link) => (link.id === id ? { ...link, url } : link))
    );
  };
  return (
    <>
      <div className="max-w-2xl mx-auto mb-6">
        <div className="space-y-4">
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <div key={link.id} className="flex items-center gap-2">
                <Input
                  id={index === 0 ? "social-links" : undefined}
                  type="url"
                  placeholder="Link to social profile"
                  value={link.url}
                  onChange={(e) => updateLink(link.id, e.target.value)}
                  className="flex-1 border-gray-200 focus:border-gray-300 focus:ring-gray-300"
                />
                {socialLinks.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeLink(link.id)}
                    className="text-gray-400 hover:text-gray-600 p-1 h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button
            type="button"
            variant="ghost"
            onClick={addLink}
            className="text-sm text-gray-600 hover:text-gray-800 h-auto font-normal justify-start"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add link
          </Button>
        </div>
      </div>
    </>
  );
}

export default SocialLinks;
