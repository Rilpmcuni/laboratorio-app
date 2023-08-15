import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Curse_laptop from "@/assets/web/curse_laptop.png";
import Doc_laptop from "@/assets/web/doc_laptop.png";
import Plataform_laptop from "@/assets/web/plataform_laptop.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// import './styles.css';

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { Box } from "@mui/material";

export default function Carousel() {
    const JobsImage = [Curse_laptop, Doc_laptop, Plataform_laptop];

    return (
        <>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
                centeredSlides={false}
                slidesPerView={1}
                // slidesPerGroup={1}
                // spaceBetween={20}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                style={{
                    borderRadius: "1.5rem",
                }}
            >
                {JobsImage.map((image: any, index: any) => (
                    <SwiperSlide key={index}>
                        <Image
                            alt="trabajos"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                pointerEvents: "none",
                                borderRadius: "1.5rem",
                            }}
                            src={image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
