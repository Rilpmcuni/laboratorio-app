"use client";
import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    Image,
    Font,
    StyleSheet,
} from "@react-pdf/renderer";

interface Props {
    Ncarta: any;
    residente: any;
    inspector: any;
    empresa: any;
    fecha: any;
    selectedDate: any;
    image: any;
    nombreContrato: string;
    numeroInforme: number;
}
const InformePdfTest: React.FC<Props> = ({
    Ncarta,
    residente,
    inspector,
    empresa,
    fecha,
    selectedDate,
    image,
    nombreContrato,
    numeroInforme,
}) => {
    const styles = StyleSheet.create({
        emphasis: { fontFamily: "Helvetica-Bold",width:"60vw", alignSelf:"flex-end" },
        emphasisItalic: { fontFamily: "Helvetica-Bold", fontStyle: "italic" },
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 55,
        },
        title: {
            fontSize: 24,
            textAlign: "center",
        },
        author: {
            fontSize: 12,
            textAlign: "center",
            marginBottom: 40,
        },
        subtitle: {
            fontSize: 18,
            margin: 12,
        },
        text: {
            margin: 12,
            fontSize: 14,
            textAlign: "justify",
            fontFamily: "Times-Roman",width:"60vw", alignSelf:"flex-end"
        },
        image: {
            marginVertical: 15,
            marginHorizontal: 100,
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "center",
            color: "grey",
            fontFamily: "Helvetica-Bold",
        },
        pageNumber: {
            position: "absolute",
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "grey",
        },
    });

    return (
        <Document>
            <Page dpi={172} style={styles.body} size="A4">
                <Text style={styles.header} fixed>
                    ~ Versión Beta ~
                </Text>
                {image ? (
                    <Image
                        fixed
                        style={{
                            width: "100px",
                            position: "absolute",
                            left: 40,
                            top: 40,
                        }}
                        src={image}
                    />
                ) : (
                    <Text
                        fixed
                        style={{
                            width: "100px",
                            position: "absolute",
                            left: 40,
                            top: 40,
                        }}
                    >
                        [Insertar Logo]
                    </Text>
                )}

                <Text style={styles.emphasis}>Ord.: 69 Carta/2023</Text>
                <Text style={styles.text}>
                    Obra, Camino Básico por Conservación, Ruta C-486, Cruce Ruta
                    5 (El Olivar) - Cruce C-500 (Punta El Viento), Km. 13.700 al
                    Km 34.720, Provincia de Huasco, Región de Atacama (Plan de
                    Recuperación).
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.emphasis}>Mat.:</Text> Informe Quincenal
                    Laboratorio
                </Text>
                <Text style={styles.text}>
                    Vallenar, <Text style={styles.emphasis}>28 ago 2023</Text>
                </Text>
            </Page>
        </Document>
    );
};

export default InformePdfTest;
