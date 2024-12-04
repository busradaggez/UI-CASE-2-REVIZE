'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const SwiperPage = () => {
    return (
        <div className="container mx-auto mt-16 mb-12 px-4 sm:px-8 lg:px-16">
            {/* Başlık ve Açıklama */}
            <div className="text-center">
                <h2 className="text-h4 font-h2 leading-h4 text-color4 mb-6">CHECKOUT OUR APP INTERFACE LOOK</h2>
                <p className="text-color3 text-h7 max-w-2xl mx-auto leading-h7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
            </div>

            {/* Swiper */}
            <Swiper
                className="swiper-container flex justify-center items-center mt-12"
                modules={[Navigation, Pagination, EffectCoverflow]}
                spaceBetween={30} // Slaytlar arasındaki boşluk
                slidesPerView={1} // Varsayılan slayt sayısı
                breakpoints={{
                    640: {
                        slidesPerView: 2, // Orta ekranlarda 2 slayt
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3, // Büyük ekranlarda 3 slayt
                        spaceBetween: 50,
                    },
                    1280: {
                        slidesPerView: 4, // Çok büyük ekranlarda 4 slayt
                        spaceBetween: 60,
                    },
                }}
                navigation={true} // Sağ-sol oklar
                pagination={{ clickable: true }}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 30,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                }}
            >
                {/* Slaytlar */}
                <SwiperSlide className="mb-16">
                    <Image
                        src="/phone7.png"
                        alt="Phone 7"
                        width={245}
                        height={532}
                        className="mx-auto"
                    />
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                    <Image
                        src="/phone3.png"
                        alt="Phone 3"
                        width={245}
                        height={532}
                        className="mx-auto"
                    />
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                    <Image
                        src="/phone4.png"
                        alt="Phone 4"
                        width={245}
                        height={532}
                        className="mx-auto"
                    />
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                    <Image
                        src="/phone5.png"
                        alt="Phone 5"
                        width={245}
                        height={532}
                        className="mx-auto"
                    />
                </SwiperSlide>
                <SwiperSlide className="mb-16">
                    <Image
                        src="/phone6.png"
                        alt="Phone 6"
                        width={245}
                        height={532}
                        className="mx-auto"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperPage;
