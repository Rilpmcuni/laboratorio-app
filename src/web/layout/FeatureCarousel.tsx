import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Curse_mobile from "@/assets/web/curse_mobile.png";
import Doc_mobile from "@/assets/web/doc_mobile.png";
import Plataform_mobile from "@/assets/web/plataform_mobile.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
// import './styles.css';

import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

export default function FeatureCarousel() {
    const JobsImage = [
        {
            ico: <DescriptionOutlinedIcon color="primary" fontSize="large" />,
            title: "Fórmulas, Informes",
            img: Curse_mobile,
            parraph:
                "Ofrecemos una amplia variedad de herramientas para laboratoristas, incluyendo fórmulas, seguimiento de ensayos, generación de informes, etc. Características esenciales para la realización de ensayos precisos, rápidos y eficientes.",
        },
        {
            ico: <SchoolOutlinedIcon color="primary" fontSize="large" />,
            title: "Cursos E-learning",
            img: Doc_mobile,
            parraph:
                "La solución tecnológica para laboratoristas que buscan prepararse para los examenes tipo A, B y C. Con características como material de estudio, apoyo, e-learning y más. La plataforma fácil de usar que hace que sea accesible desde cualquier dispositivo.",
        },
        {
            ico: <DevicesRoundedIcon color="primary" fontSize="large" />,
            title: "Multiplataforma",
            img: Plataform_mobile,
            parraph:
                "Una aplicación multiplataforma, lo que significa que está disponible en diferentes sistemas operativos y dispositivos, como PC, tabletas y teléfonos móviles. Esto permite que los usuarios accedan a la aplicación en cualquier momento y lugar, lo que los hace más eficientes en su trabajo.",
        },
    ];
    return (
        <>
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                // navigation={true}
                centeredSlides={false}
                slidesPerView={1}
                // slidesPerGroup={1}
                // spaceBetween={20}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                style={{
                    borderRadius: "3.5rem",
                    background: "none",
                }}
            >
                {JobsImage.map(({ img, parraph,title, ico }, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                position: "relative",
                            }}
                        >
                            <Image
                                alt="trabajos"
                                sizes="100vw"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    pointerEvents: "none",
                                    borderRadius: "3.5rem",
                                }}
                                src={img}
                            />

                            <Box
                                sx={{
                                    backgroundColor: "#262626",
                                    position: "absolute",
                                    bottom: 0,
                                    width: "100%",
                                    paddingX: "1.5rem",
                                    paddingY: "3.5rem",
                                    // backdropFilter: "blur(12px)",
                                }}
                            >
                                {ico}
                                <Typography
                                    variant="h6"
                                    component="div"
                                    fontWeight={600}
                                    color="secondary.contrastText"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    paragraph
                                    variant="body2"
                                    sx={{
                                        backgroundcolor: "primary.main",
                                        backgroundImage: `linear-gradient(45deg, #606060 0%, #d9d9d9 100%)`,
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontWeight: "bold",
                                        width: "90%",
                                    }}
                                >
                                    {parraph}
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
