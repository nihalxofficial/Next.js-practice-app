// app/(dashboard)/layout.js
// import Sidebar from "@/components/Sidebar";

// import { useContext } from "react";
import Sidebar from "./dashboard/page";
// import { postContext } from "../context/postContext";

export default function DashboardLayout({ children }) {
  
  
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}