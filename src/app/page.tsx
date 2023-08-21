"use client";
import Features from "@/web/layout/Features";
import FeaturesTwo from "@/web/layout/FeaturesTwo";
import GetIt from "@/web/layout/GetIt";
import Header from "@/web/layout/Header";
import Hero from "@/web/layout/Hero";
import Prices from "@/web/layout/Prices";
import Rewies from "@/web/layout/Rewies";
import Image from "next/image";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import FaQ from "@/web/layout/FaQ";
import Footer from "@/web/layout/Footer";
import Carousel from "@/web/layout/HeroCarousel";
import { Box } from "@mui/material";
import InstallButton from "@/components/feedback/handleInstallClick";
import AuthForm from "@/components/ui/AuthForm";
export default function Home() {
    return (
        <main className={""}>
            <div
                style={{
                    borderRadius: "1.5rem",
                    // border: "solid 1px black",
                    position: "fixed",
                    top: 60,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    width: "100%",
                    // boxShadow: "0px 0px 0px 15px black",
                    boxShadow: "0px 0px 0px 15px white",
                    zIndex: 40,
                    pointerEvents: "none",
                }}
            ></div>
            <Header />
            <Hero />
            <InstallButton/>
            <Features />
            <FeaturesTwo />
            <GetIt />
            <Rewies />
            <Divider variant="middle" />
            <Prices />
            <FaQ />
            <Footer />
        </main>
    );
}
