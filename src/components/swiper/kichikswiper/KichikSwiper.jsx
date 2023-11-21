import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../../static/bannerDataElektronik'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './KichikSwiper.css';


import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function KichikSwiper() {
  

 

 

  return (
    <div >
        <div className="kichik__swiper">

      <Swiper 
        slidesPerView={7}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
            type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        {
            data?.slice(0, 30)?.map((item, index) =>
            <SwiperSlide key={index}> <Link className='imagessss' to={`/single-page/${item.id}`}>
            
              <img src={item.images[0]} alt="" />

          </Link>
          <p className='description'>{item.description}</p>
          </SwiperSlide>
            )

        }
       
      </Swiper>
        </div>

      
    </div>
  );
}


export default   KichikSwiper