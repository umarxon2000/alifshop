import React from 'react'
import './FooterTop.css'
const FooterTopimage = [
    {
        img:"https://alifshop.uz/images/play-market-icon.svg"
    },
    {
        img:"https://alifshop.uz/images/app-store-icon.svg"
    },
    {
        img:"https://alifshop.uz/images/app-gallery-icon.svg"
    }
]

function FooterTop() {
    return (
        <div className="footer_top">
            <div className="container6">
                <div className='footer_top_page'>
                    <img src="https://alifshop.uz/_ipx/_/images/illustrations/alifshop-app-uz.png" alt="img" />
                    <div className="footer_top_item">
                        <h1>Ajoyib takliflar har doim <br /> yoningizda</h1>
                        <h5>alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida hammadan tez biling</h5>
                        <div className="footer_top_item_brend">
                            {
                                FooterTopimage.map(x => 
                                    <img  src={x.img} alt="img" />
                                    )
                            }
                            
                        </div>
                        <button className='footer_top_item_brend_button'>ilovani o'chish</button>

                    </div>
                    <div className="footer_top_location">
                        <img src="https://alifshop.uz/_ipx/f_webp&s_208x208/images/alifshop-qr-code.webp" alt="img" />
                        <p>Yuklab olish uchun <br /> kamerangizni QR kodga <br /> qarating</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FooterTop