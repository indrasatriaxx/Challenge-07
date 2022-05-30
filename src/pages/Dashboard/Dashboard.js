import React from "react";
import "./Dashboard.css";
import { Sidebar } from "../../Assets/Components/Sidebar/Sidebar";
import { NavbarDefault } from "../../Assets/Components/Navbar/NavbarDefault";
import { SubMenu } from "../../Assets/Components/SubMenu/SubMenu";
import { ContentDashboard } from "../Content/ContentDashboard";

export const Dashboard = () => {
  return (
    <div className="d-flex box-dashboard">
      <div className="sidebar-dashboard">
        <Sidebar />
      </div>
      <div className="content-dashboard">
        <div>
          <div className="col-md-12">
            <NavbarDefault />
          </div>
          <div className="col-md-12">
            <div className="d-flex">
              <div className="col-md-2 sub-menu-dashboard">
                <SubMenu page={"dashboard"} />
              </div>
              <div className="col-md-10 p-4">
                <ContentDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
