import { DesktopSidebar } from "@/components/menubar/desktop";
import { MobileHeader } from "@/components/menubar/mobile";

export default function AdminLayout({
  params,
  searchParams,
  children,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DesktopSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <MobileHeader />
        {children}
      </div>
      {/* <SiteFooter /> */}
    </div>
  );
}
