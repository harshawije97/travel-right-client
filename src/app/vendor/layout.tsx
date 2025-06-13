import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import VendorSidebar from "./components/vendor-sidebar";
import { cookies } from "next/headers";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster } from "sonner";

interface VendorLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

async function VendorLayout({ children }: VendorLayoutProps) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <VendorSidebar />
      <div className="w-full h-full flex flex-col gap-6">
        <section className="w-[calc(100%-16rem)] flex gap-x-4 items-center h-12 py-4 mx-auto px-6 fixed z-50 bg-white">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-[calc(100%-1.5rem)]" />
          <div className="w-fit">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/components">Components</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex flex-1 justify-end mr-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </section>
        <div className="w-full h-full mt-12 px-16">{children}</div>
        <Toaster />
      </div>
    </SidebarProvider>
  );
}

export default VendorLayout;
