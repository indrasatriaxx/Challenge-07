import "../css/DetailCar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailCar = () => {
  const { idCar } = useParams();
  const [dataDetailCar, setDataDetailCar] = useState({});

  const getData = async () => {
    const { data } = await axios(
      `https://rent-car-appx.herokuapp.com/admin/car/${idCar}`
    );
    setDataDetailCar(data);
  };

  useEffect(() => {
    getData();
  });


  return (
    <>
      <div className="detailCar position-absolute start-50 translate-middle">
        <div className="cardDetail">
          <h1>Tentang Paket</h1>
          <p>Include</p>
          <div className="textDetail1">
            <ul>
              <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </div>
          <p>Exclude</p>
          <div className="textDetail2">
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
          <h1>Refund, Reschedule, Overtime</h1>
          <div className="textDetail3">
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
              20.000/jam</li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>
        <div className="cardDetail">
          <div className="cardImage">
            <img src={dataDetailCar.image} alt="car" />
          </div>
          <div className="cardTitle">
            <h1>{dataDetailCar.name}</h1>
            <div className="cardIcon">
              <div className="iconTitle">
                <img src="/img/users.svg" alt="jumlah orang" />
                <p>4 orang</p>
              </div>
              <div className="iconTitle">
                <img src="/img/settings.svg" alt="tipe mobil" />
                <p>Manual</p>
              </div>
              <div className="iconTitle">
                <img src="/img/calendar.svg" alt="calendar" />
                <p>Tahun 2020</p>
              </div>
            </div>
            <div className="cardText">
              <p>Total</p>
              <h1>Rp {dataDetailCar.price}</h1>
            </div>
            <Link style={{ textDecoration: 'none' }} to={`/payment`}>
            <button className="buttonCard">Lanjutkan Pembayaran</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="buttonPosition position-absolute start-50 translate-middle">
      <Link style={{ textDecoration: 'none' }} to={`/payment`}>
        <button className="buttonCard">Lanjutkan Pembayaran</button>
        </Link>
      </div>
      
    </>
  );
};

export default DetailCar;
