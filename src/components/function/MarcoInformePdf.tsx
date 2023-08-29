import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import {
    BlobProvider,
    PDFDownloadLink,
    PDFViewer,
    usePDF,
} from "@react-pdf/renderer";
import InformePdf from "@/components/function/InformePdf";
import { Link as LinkMui, Stack } from "@mui/material";
import Link from "next/link";
import InformePdfTest from "./InformePdfTest";

interface DataInforme {
    numeroCarta: number;
    nombreResidente: string;
    nombreInspector: string;
    nombreEmpresa: string;
    renderInforme: string | null;
    logoEmpresa: string | null;
    nombreContrato: string;
}

interface Props {
    row: any;
    numeroInforme: number;
    selectedDate: any;
    numeroCarta: number;
}

const MarcoInformePdf: React.FC<Props> = ({
    row,
    numeroInforme,
    selectedDate,
    numeroCarta,
}) => {
    const [nombreResidente, setNombreResidente] = useState("");
    const [nombreInspector, setNombreInspector] = useState("");
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [logoEmpresa, setLogoEmpresa] = useState<string | null>(null);
    const [nombreContrato, setNombreContrato] = useState("");
    const [generate, setGenerate] = useState(false);
    const [pdfViewerVisible, setPdfViewerVisible] = useState(false);

    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem("laboratorioData");
        if (dataFromLocalStorage) {
            const parsedData: DataInforme = JSON.parse(dataFromLocalStorage);
            setNombreResidente(parsedData.nombreResidente);
            setNombreInspector(parsedData.nombreInspector);
            setNombreEmpresa(parsedData.nombreEmpresa);
            setSelectedImage(null);
            setLogoEmpresa(parsedData.logoEmpresa);
            setNombreContrato(parsedData.nombreContrato);
        }
    }, []);

    const handleOpenPdfViewer = () => {
        setPdfViewerVisible(true);
    };

    const handleClosePdfViewer = () => {
        setPdfViewerVisible(false);
    };

    const MyDoc = (
        <InformePdf
            Ncarta={numeroCarta}
            residente={nombreResidente}
            inspector={nombreInspector}
            empresa={nombreEmpresa}
            selectedDate={selectedDate}
            image={logoEmpresa}
            nombreContrato={nombreContrato}
            numeroInforme={numeroInforme}
            fecha={row.fechaLocal}
        />
    );

    const [instance, updateInstance] = usePDF({
        document: MyDoc,
    });

    if (instance.loading) return <div>Loading ...</div>;

    return (
        <div>
            <div>
                <Button variant="contained" onClick={handleOpenPdfViewer}>
                    Vista previa
                </Button>
                <PDFDownloadLink
                    document={MyDoc}
                    fileName={`Carta N°${numeroCarta} informe N°${numeroInforme} ${row.quincena} ${row.fechaLocal}.pdf`}
                >
                    {({ blob, url, loading, error }) =>
                        url && (
                            <Button
                                LinkComponent={Link}
                                href={url}
                                target="_blank"
                                variant="contained"
                                disabled={loading}
                            >
                                Vista previa mobil
                            </Button>
                        )
                    }
                </PDFDownloadLink>
                <PDFDownloadLink
                    document={MyDoc}
                    fileName={`Carta N°${numeroCarta} informe N°${numeroInforme} ${row.quincena} ${row.fechaLocal}.pdf`}
                >
                    {({ blob, url, loading, error }) =>
                        url && (
                            <Button
                                LinkComponent={Link}
                                href={url}
                                download={`Carta N°${numeroCarta} informe N°${numeroInforme} ${row.quincena} ${row.fechaLocal}.pdf`}
                                target="_blank"
                                variant="contained"
                                disabled={loading}
                            >
                                Descargar
                            </Button>
                        )
                    }
                </PDFDownloadLink>
            </div>
            {pdfViewerVisible && (
                <div>
                    <PDFViewer style={{ width: "100%", height: "70vh" }}>
                        {MyDoc}
                    </PDFViewer>
                    <Button variant="contained" onClick={handleClosePdfViewer}>
                        Cerrar vista previa
                    </Button>
                </div>
            )}
        </div>
    );
};

export default MarcoInformePdf;
