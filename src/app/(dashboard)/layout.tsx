import { AdminHeader } from "@/components";
import React from "react";
import "../(delivery)/globals.css";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminFooter from "@/components/admin/AdminFooter";

interface AdminProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <body>
          <div className="">
            <header className="w-[100%] h-[100px] flex flex-row justify-between items-center">
              <section className="w-[20%]">
                <AdminSidebar />
              </section>
              <section className="w-[80%] fixed top-0 right-0 z-10">
                <AdminHeader />
              </section>
            </header>
            <main className="ml-[20%] bg-[#f6f6f6] overflow-y-auto">
              {children}
            </main>
            <footer className="ml-[20%] w-[80%] min-h-[300px] bg-[#0F172A]">
              <AdminFooter />
            </footer>
          </div>
        </body>
      </head>
    </html>
  );
}
