import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    let logobrend = [
        {
            img:"https://alifshop.uz/_ipx/s_80x80/images/media/instagram.webp"
        },
        {
            img:"https://alifshop.uz/_ipx/s_80x80/images/media/facebook.svg"
        },
        {
            img:"https://alifshop.uz/_ipx/s_80x80/images/media/telegram.svg"
        },
        {
            img:"https://alifshop.uz/_ipx/s_80x80/images/media/ok.svg"
        },
        {
            img:"https://alifshop.uz/_ipx/s_80x80/images/media/tiktok.svg"
        },
        
    ]

  return (
    <div className='foter'>
      <div className='footer'>
        <div className="footer__container">
          <div className='footer_box'>
            <div className="footer_item">
              <h4>Hujjatlar</h4>
              <Link to={"https://alifshop.uz/uz/terms/actual"}>Sotish uchun umumiy shartlar</Link>
              <Link to={"https://alifshop.uz/uz/terms"}>Ofertalar arxivi</Link>
              <Link>Nizom</Link>
              <Link>Guvohnoma</Link>
            </div>
            <div className="footer_item">
              <h4>Servis</h4>
              <Link>Muddatli to'lov islomda</Link>
              <Link>alif shopda soting!</Link>
              <Link>Qaytarish</Link>
            </div>
            <div className="footer_item">
              <h4>Tovarlar katalogi</h4>
              <Link>Smartfonlar va telefonlar</Link>
              <Link>Gadjetlar</Link>
              <Link>Smartfonlar uchun aksessuarlar</Link>
              <Link>Tegishli tovarlar</Link>
              <Link>Soat va aksessuarlar</Link>
            </div>
            <div className="footer_item">
              <h4>Biz ijtimoiy axborot vositalarida</h4>
              <div className="footer_logo">
                {
                    logobrend.map(x => 
                        <img src={x.img} alt="" />
                        
                        )
                }
              
              

              </div>
              <h4>Axborot xizmati</h4>
              <Link>@alifshop_uz</Link>
              <Link>+998 xx xxx xx xx</Link>
            </div>

          </div>
          <div className="footer_box_bottom">
            <p>2023 © alifshop.uz</p>
            <img src="https://yandex.ru/cycounter?https://alifshop.uz&theme=dark&lang=ru" alt="" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Footer