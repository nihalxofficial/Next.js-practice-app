// app/(dashboard)/layout.js
// import Sidebar from "@/components/Sidebar";

// import { useContext } from "react";
import Sidebar from "./dashboard/page";
// import { postContext } from "../context/postContext";
export const metadata = {
  title: "Dashboard",
  description: "This is Dashboard",
};
export default function DashboardLayout({ children }) {
  
  
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}