"use client";
import Image from "next/image";
import Link from "next/link";
import { Typography, TextField, Button } from "@mui/material";
import InformePdf from "@/components/function/InformePdf";
import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ConfigLab from "@/components/function/ConfigLab";

export default function Laboratorio() {
    return (
        <main>
            <ConfigLab />
        </main>
    );
}
