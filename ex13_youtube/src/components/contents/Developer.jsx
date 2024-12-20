import React, { useEffect, useState } from 'react'
// import { developerText } from '../../data/developer';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

//Home.js에서 props로 데이터를 전달받아야 한다.
const Developer = ({ videos, title, id }) => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const developerClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <section id={id} className={developerClass}>
      <h2>{title}</h2>
      <div className="developer__inner overflow">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20
            },
            1240: {
              slidesPerView: 8,
              spaceBetween: 20
            },
            1640: {
              slidesPerView: 9,
              spaceBetween: 20
            },
            2000: {
              slidesPerView: 0,
              spaceBetween: 20
            },
          }}
          modules={[Navigation, Autoplay]}
          className='mySwiper'
        >
          {videos.map((developer, key) => (
            <SwiperSlide key={key}>
              <div className="developer">
                <div className="developer__img play__icon">
                  <Link to={`/channel/${developer.channelId}`}>
                    <img src={developer.img} alt={developer.name} />
                  </Link>
                </div>
                <div className="developer__info">
                  <Link to={`/channel/${developer.channelId}`}>
                    {developer.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Developer