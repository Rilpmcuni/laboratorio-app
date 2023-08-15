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
export default function Home() {
    return (
        <main className={""}>
            <Header />
            <Hero />
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
