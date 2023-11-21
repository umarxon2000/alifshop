import React from 'react'
import CardItem1 from '../../components/cards/card_item1/CardItem1'
import Footer from '../../components/footer/Footer'
import MYswiper from '../../components/swiper/Swiper'
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from '../../static/bannerDataElektronik'
import Header from '../../components/header/Header';
import KichikSwiper from '../../components/swiper/kichikswiper/KichikSwiper';
import FooterTop from '../../components/footer/footerTom/FooterTop';

function Home() {
    let electronic = data.filter(i => i.type === "Elektronika")
    let kiyim = data.filter(i => i.type === "Kiyim")
    return (
        <div className="home container">
            <ToastContainer />
            <Header />

            <MYswiper />
            <KichikSwiper />
            <CardItem1 componentName={"elektronika"} data={electronic} />
            <CardItem1 componentName={"kiyimlar"} data={kiyim} />
            <FooterTop />
            <Footer />
        </div>
    );
}

export default Home
