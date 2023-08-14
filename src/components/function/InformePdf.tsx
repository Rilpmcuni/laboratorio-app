"use client";
import React from "react";
import { Document, Page, Text, View, Image, Font } from "@react-pdf/renderer";

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
    return (
        <Document>
            <Page size="A4" wrap>
                <View
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
                    <Text
                        style={{
                            position: "absolute",
                            top: 10,
                            color: "#808080",
                        }}
                    >
                        Versión Beta
                    </Text>
                    <View
                        style={{ width: "45%", alignSelf: "flex-end", gap: 10 }}
                    >
                        <Text>
                            Ord.: C-{Ncarta ? Ncarta : "[Insertar Carta]"}/2023
                        </Text>
                        <Text style={{ textAlign: "left" }}>
                            <Text style={{ fontWeight: 600 }}>REF.:</Text>{" "}
                            {nombreContrato}
                        </Text>
                        <Text>Mat.: Informe Quincenal Laboratorio</Text>
                        <Text style={{ fontWeight: 1000 }}>
                            Vallenar,{" "}
                            {selectedDate ? selectedDate : "[Insertar Fecha]"}
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
                            A: Inspectora Fiscal Srta.{" "}
                            {inspector ? inspector : "[Insertar nombre]"}{" "}
                            Dirección Regional de Vialidad,
                        </Text>
                        <Text
                            break={false}
                            wrap={false}
                            style={{ flexWrap: "nowrap", overflow: "hidden" }}
                        >
                            Leonel Ortiz Laboratorio Regional Vialidad Región
                            Atacama
                        </Text>
                        <Text>De: {empresa}</Text>
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
                            laboratorio Autocontrol hace entrega de informe N°
                            {numeroInforme} del{" "}
                            {fecha ? fecha : "[Insertar fecha]"}.
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
                                paddingTop: "0px",
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
                        <Text>Distribución</Text>
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
