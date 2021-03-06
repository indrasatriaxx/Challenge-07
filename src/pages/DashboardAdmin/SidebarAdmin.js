import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import './SidebarAdmin.css'
import NavbarAdmin from './NavbarAdmin';
import IconHome from '../../Assets/assets/icon_home.svg';
import IconTruck from '../../Assets/assets/icon_truck.svg';
import TableAdmin from './TableAdmin';
import PaginationTable from './PaginationTable';
import ContentAdmin from './ContentAdmin';

const SidebarAdmin = () => {
    return(
        <>
        <div className="divide-side d-flex w-100">
            <div className="left-side d-flex">
                <div className="nav-icon d-flex flex-column">
                    <div className="sidebar-logo d-flex justify-content-center">
                        <p className="icon-sidebar"></p>
                    </div>	
                    <Link to="#" className="items-sidebar-menu-active">
                        <Image src={IconHome} alt="icon home" className="icon-sidebar-menu"/> 
                        <p className="text-icon-dashboard">Dashboard</p>
                    </Link>
                    <Link to="/cars" className="items-sidebar-menu">
                        <Image src={IconTruck} alt="icon cars" className="icon-sidebar-menu"/>
                        <p className="text-icon-cars">Cars</p>
                    </Link>
                </div>
                
                <div className="white-sidebar">
                    <div className="top-sidebar">
                        <p className="longer-logo"></p>
                    </div>
                    <div className="bottom-sidebar">
                        <div className="title-main-menu">
                            <p>DASHBOARD</p>
                        </div>
                        <div className="title-main-sec">
                            <p>Dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-side w-100">
                <NavbarAdmin/>
                <div className="container-fluid">
                    <ContentAdmin/>
                    <TableAdmin/>
                    <PaginationTable/>
                </div>
            </div>
        </div>
        </>
    )
}

export default SidebarAdmin;