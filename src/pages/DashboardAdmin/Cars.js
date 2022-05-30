import React from 'react'
import "./Cars.css";
import ContentAdmin from './ContentAdmin';
import { ContentCars } from './ContentCars';
import NavbarAdmin from './NavbarAdmin';
import SidebarAdmin from './SidebarAdmin';

export const Cars = ({ page }) => {

  const pageCars = () => {
    if (page == "list cars") {
      return <ContentCars />
    }




  }

  return (
    <div className="d-flex box-cars">
      <div className="sidebar-cars">
        <SidebarAdmin />
      </div>
      <div className="content-cars">
        <div>
          <div className="col-md-12">
            <NavbarAdmin />
          </div>
          <div className="col-md-12">
            <div className="d-flex">
              <div className="col-md-2 sub-menu-cars">
                <ContentAdmin page={"cars"} />
              </div>
              <div className="col-md-10 p-4">
                {pageCars()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
