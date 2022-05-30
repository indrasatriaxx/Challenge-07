// import { Component } from "react";
import Header from "../components/Layout/Header";
import Pembayaran from "../components/Pembayaran/Pembayaran";
import { useEffect } from "react";
import Footer from "../components/Layout/Footer";

const HasilPencarian = () => {
    useEffect(() => {
        document.getElementsByClassName("hero")[0].style.display="none";
        document.getElementsByClassName("btn-hero")[0].style.display = "none";
        document.getElementById("header").style.height = "266px";
        console.log('mount it!');
    }, []);

    return (
        <>
        <Header />
        <Pembayaran/>
        <Footer/>

        </>
    ) 
}

export default HasilPencarian;
