import {
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Calendar,
  ChartColumnIcon,
  Container,
  Home,
  Search,
  Settings,
  User,
} from "lucide-react";
import React from "react";

// menu items
const items = [
  {
    title: "Home",
    url: "/vendor/dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    url: "/vendor/analytics",
    icon: ChartColumnIcon,
  },
  {
    title: "Reservations",
    url: "/vendor/reservations",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "/vendor/global-search",
    icon: Search,
  },
  {
    title: "Gallery",
    url: "/vendor/gallery",
    icon: Container,
  },
  {
    title: "Profile",
    url: "/vendor/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/vendor/settings",
    icon: Settings,
  },
];

function VendorSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <div className="w-full flex flex-col items-start justify-start">
          <h2 className="text-lg font-semibold text-blue-500">Travel Right</h2>
          <p className="text-sm text-slate-400">Vendor Portal.</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default VendorSidebar;
