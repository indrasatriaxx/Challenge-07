import React from "react";
import "./Pembayaran.css";
import arrow_left from "../../Assets/Img/fi_arrow-left.png";
import satu_isi from "../../Assets/Img/satu-isi.png";
import dua_kosong from "../../Assets/Img/dua-kosong.png";
import tiga_kososng from "../../Assets/Img/tiga-kosong.png";
import garis from "../../Assets/Img/garis.png";
import success from "../../Assets/Img/success.png";
import { HandlePdf } from "../Pembayaran/HandlePdf";


const Pembayaran = () => {
  return (
    <div>
    <div id="parrent-hero4">
      <div className="container-xl container-pembayaran">
        <div className="menu-pembayaran">
          <div className="menu-pembayaran-kiri">
            <img src={arrow_left} alt="" />
            <div className="tiket-pembayaran">
              <h6>Tiket</h6>
              <p>Order ID: xxxxxxxx</p>
            </div>
          </div>
          <div className="menu-pembayaran-kanan">
            <img src={satu_isi} alt="" />
            <p>Pilih Metode</p>
            <img src={garis} alt="" />
            <img src={dua_kosong} alt="" />
            <p>Bayar</p>
            <img src={garis} alt="" />
            <img src={tiga_kososng} alt="" />
            <p>Tiket</p>
          </div>
        </div>
      </div>
    </div>
    <div id="section-04">
      <div className="container-xl"></div>
    </div>
    <div id="section-04">
      <div className="container-xl container-pembayaran">
        <div className="invoice">
          <img src={success} alt="" />
          <h6>Pembayaran Berhasil!</h6>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
          <HandlePdf />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Pembayaran

