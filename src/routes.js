import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CariMobil from './pages/CariMobil';
import HasilPencarian from './pages/HasilPencarian';
import DetailMobil from './pages/DetailMobil';
import Payment from './pages/Payment';
import SidebarAdmin from './pages/DashboardAdmin/SidebarAdmin';
import AddNewCar from './components/AddNewCar';


const RouteApp = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/carimobil" element={<CariMobil />} />
            <Route path="/hasilpencarian" element={<HasilPencarian />} />
            <Route path="/detailmobil/:idCar" element={<DetailMobil />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin" element={<SidebarAdmin />} />
            <Route path="/addnew" element={<AddNewCar />} />

        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RouteApp;