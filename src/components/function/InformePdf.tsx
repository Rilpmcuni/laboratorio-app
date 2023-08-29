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
const InformePdf: React.FC<Props> = ({
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
    // const InformePdf = () => {
    const styles = StyleSheet.create({
        body: {
            fontFamily: "Helvetica",
            fontSize: 11,
            // lineHeight: 1.5,
        },
        title: { marginTop: "90%" },
        emphasis: { fontFamily: "Helvetica-Bold" },
        emphasisItalic: { fontFamily: "Helvetica-BoldOblique"},
        breakable: { width: "100%", height: 400, backgroundColor: "tomato" },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: "center",
            color: "grey",
            fontFamily: "Helvetica-Bold",
        },
        page: {
            fontFamily: "Helvetica",
            fontSize: 11,
            paddingTop: 30,
            paddingLeft: 60,
            paddingRight: 60,
            lineHeight: 1.5,
            flexDirection: "column",
        },
    });
    return (
        <Document>
            <Page style={styles.body} size="A4" wrap={false}>
                <View
                    wrap={false}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        //
                        margin: 30,
                        padding: 30,
                        flexGrow: 1,
                        fontSize: "13px",
                        gap: 16,
                    }}
                >
                    {image ? (
                        <Image
                            fixed
                            style={{
                                width: "100px",
                                position: "absolute",
                                left: 20,
                                top: 20,
                            }}
                            src={image}
                        />
                    ) : (
                        <Text
                            fixed
                            style={{
                                width: "100px",
                                position: "absolute",
                                left: 20,
                                top: 20,
                            }}
                        >
                            [Insertar Logo]
                        </Text>
                    )}
                    <Text style={styles.header} fixed>
                        ~ Versión Beta ~
                    </Text>
                    <View
                        style={{ width: "45%", alignSelf: "flex-end", gap: 10 }}
                    >
                        <Text style={styles.emphasis}>
                            Ord.: C-{Ncarta ? Ncarta : "[Insertar Carta]"}/2023
                        </Text>
                        <Text
                            style={{
                                // textAlign: "left",
                                width: "100%", // Ajusta el ancho para evitar la división

                                // overflow: "hidden", // Evita que el contenido desborde
                                // position: "absolute", // Posición absoluta para controlar el ajuste
                                // left: 0, // Alinea a la izquierda
                                // top: 0, // Alinea en la parte superior
                            }}
                        >
                            <Text style={styles.emphasis}>REF.:</Text>{" "}
                            {nombreContrato}
                        </Text>
                        <Text>
                            <Text style={styles.emphasis}>Mat.:</Text> Informe
                            Quincenal Laboratorio
                        </Text>
                        <Text>
                            Vallenar,{" "}
                            <Text style={styles.emphasisItalic}>
                                {selectedDate
                                    ? selectedDate
                                    : "[Insertar Fecha]"}
                            </Text>
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "45%",
                            alignSelf: "flex-start",
                            gap: 10,
                        }}
                        break={false}
                        wrap={false}
                    >
                        <Text break={false} wrap={false}>
                            <Text style={styles.emphasis}>A:</Text> Inspectora
                            Fiscal Srta.{" "}
                            {inspector ? inspector : "[Insertar nombre]"}{" "}
                            Dirección Regional de Vialidad,
                        </Text>
                        <Text break={false} wrap={false}>
                            Leonel Ortiz Laboratorio Regional Vialidad Región
                            Atacama
                        </Text>
                        <Text>
                            <Text style={styles.emphasis}>De:</Text> {empresa}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <Text
                            style={{ textAlign: "right", textIndent: "100px" }}
                        >
                            De nuestra consideración y junto con saludar,
                            laboratorio Autocontrol hace entrega de informe{" "}
                            <Text style={styles.emphasis}>
                                N°
                                {numeroInforme}
                            </Text>{" "}
                            del{" "}
                            <Text style={styles.emphasis}>
                                {fecha ? fecha : "[Insertar fecha]"}.
                            </Text>
                        </Text>
                    </View>
                    <View
                        style={{
                            textAlign: "right",
                            width: "100%",
                            marginTop: 8,
                            paddingTop: 8,
                            marginBottom: 60,
                            paddingBottom: 60,
                        }}
                    >
                        <Text>Sin otro particular, saluda atentamente.</Text>
                    </View>

                    <View
                        style={{
                            width: "45%",
                            alignSelf: "flex-end",
                            marginBottom: 100,
                        }}
                    >
                        <Text
                            style={{
                                borderTop: "1px solid black",
                                textAlign: "center",
                                textTransform: "uppercase",
                                padding: "8px",
                                fontFamily: "Helvetica-Bold",
                            }}
                        >
                            PROFESIONAL RESIDENTE{" "}
                            {residente ? residente : "[Insertar nombre]"}
                        </Text>
                        <Text
                            style={{
                                textAlign: "center",
                                textTransform: "uppercase",
                                paddingHorizontal: "8px",
                                paddingBottom: "8px",
                                paddingTop: "-8px",
                                fontFamily: "Helvetica-Bold",
                            }}
                        >
                            EMPRESA {empresa ? empresa : "[Insertar empresa]"}
                        </Text>
                    </View>
                    <View
                        fixed
                        style={{
                            width: "20%",
                            alignSelf: "flex-start",
                            position: "absolute",
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <Text style={styles.emphasis}>Distribución</Text>
                        <Text wrap={false} break={false}>
                            Inspector Fiscal L.R.V. Arch. Obra
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default InformePdf;
