"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Grid } from "@mui/material";
import VerDescargarInforme from "@/components/function/VerDescargarInforme";
import TabsComponent from "@/components/test/Test";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroAppCard from "@/components/ui/HeroAppCard";
import ContactoCard from "@/components/ui/ContactoCard";
import NoAuth from "@/components/feedback/NoAuth";
import ListInformes from "@/components/function/ListInformes";



export default function Laboratorio() {


    return (
        <>
            <>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8}>
                        <HeroAppCard />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactoCard />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ListInformes/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <span>xs=12 md=8</span>
                    </Grid>
                </Grid>
                <NoAuth />
            </>
         
        </>
    );
}


/*  */
/*  */
/*  */
