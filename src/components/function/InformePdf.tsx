"use client";
import React, { Fragment } from "react";
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
    residente: any;
    inspector: any;
    empresa: any;
    fecha: any;
    selectedDate: any;
    image: any;
    nombreContrato: string;
    numeroInforme: number;
    ensayos: any;
}
const InformePdf: React.FC<Props> = ({
    residente,
    inspector,
    empresa,
    fecha,
    selectedDate,
    image,
    nombreContrato,
    numeroInforme,
    ensayos,
}) => {
    // const InformePdf = () => {
    const borderColor = "#90e5fc";
    const tableRowsCount = 12;
    const styles = StyleSheet.create({
        page: {
            fontFamily: "Helvetica",
            fontSize: 11,
            paddingTop: 30,
            paddingLeft: 60,
            paddingRight: 60,
            lineHeight: 1.5,
            flexDirection: "column",
        },
        logo: {
            width: 74,
            height: 66,
            marginLeft: "auto",
            marginRight: "auto",
        },
        tableContainer: {
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 24,
            borderWidth: 1,
            borderColor: "#bff0fd",
            fontSize: 9,
        },
        container: {
            flexDirection: "row",
            borderBottomColor: "#bff0fd",
            backgroundColor: "#bff0fd",
            borderBottomWidth: 1,
            alignItems: "center",
            height: 24,
            textAlign: "center",
            fontStyle: "bold",
            flexGrow: 1,
            fontFamily: "Helvetica-Bold",
            /*  */
            // paddingTop: 4,
        },
        titleHeader: {
            width: "30%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            backgroundColor: "#bff0fd",
            height: "100%",
            fontFamily: "Helvetica-Bold",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 4,
        },

        descripcionHeader: {
            width: "70%",
            paddingLeft: 4,
        },
        /*  */
        /*  */
        /*  */
        headerContent1: {
            width: "20%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            // backgroundColor: "#bff0fd",
            height: "100%",
            textAlign: "center",
            padding: 4,
        },
        headerContent2: {
            width: "40%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: "center",
            paddingRight: 8,
        },
        headerContent3: {
            width: "20%",
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: "center",
            paddingRight: 8,
        },
        headerContent4: {
            width: "40%",
            textAlign: "center",
            padding: 4,
        },

        row: {
            flexDirection: "row",
            borderBottomColor: "#bff0fd",
            borderBottomWidth: 1,
            alignItems: "center",
            height: 24,
            fontStyle: "bold",
        },
    });
    /*  */
    /*  */
    /*  */
    const InvoiceTableBlankSpace = ({ rowsCount }: { rowsCount: any }) => {
        const blankRows = Array(rowsCount).fill(0);
        const rows = blankRows.map((x, i) => (
            <View
                style={
                    (styles.row,
                    {
                        flexDirection: "row",
                        borderBottomColor: "#bff0fd",
                        borderBottomWidth: 1,
                        alignItems: "center",
                        height: 24,
                        fontStyle: "bold",
                        color: "white",
                    })
                }
            >
                <Text style={styles.headerContent1}>-</Text>
                <Text style={styles.headerContent2}>-</Text>
                <Text style={styles.headerContent3}>-</Text>
                <Text style={styles.headerContent4}>-</Text>
            </View>
        ));
        return <Fragment>{rows}</Fragment>;
    };

    return (
        <Document>
            <Page size="A4" style={styles.page}>
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
                    fixed
                    style={{
                        width: "100px",
                        position: "absolute",
                        right: 20,
                        top: 20,
                    }}
                >
                    ~ Versión Beta ~
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        marginBottom: 6,
                        textAlign: "center",
                        fontFamily: "Helvetica-Bold",
                    }}
                >
                    INFORME QUINCENAL N°{numeroInforme}
                </Text>
                <View style={styles.tableContainer}>
                    <View
                        style={
                            (styles.row,
                            {
                                height: 46,
                                flexDirection: "row",
                                borderBottomColor: "#bff0fd",
                                borderBottomWidth: 1,
                            })
                        }
                    >
                        <Text style={styles.titleHeader}>OBRA:</Text>
                        <Text style={styles.descripcionHeader}>
                            {nombreContrato}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.titleHeader}>CONTRATISTA:</Text>
                        <Text style={styles.descripcionHeader}>{empresa}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.titleHeader}>PERIODO DEL:</Text>
                        <Text style={styles.descripcionHeader}>itettemat</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.titleHeader}>SAFI:</Text>
                        <Text style={styles.descripcionHeader}>3560</Text>
                    </View>
                </View>
                {/*  */}
                {/*  */}
                {/*  */}
                <View style={styles.tableContainer}>
                    <View style={styles.container}>
                        <Text style={styles.headerContent1}>ITEM</Text>
                        <Text style={styles.headerContent2}>DESIGNACIÓN</Text>
                        <Text style={styles.headerContent3}>CERT N°</Text>
                        <Text style={styles.headerContent4}>CONTENIDO</Text>
                    </View>
                    {/* <InvoiceTableRow items={invoice.items} /> */}
                    {ensayos.length === 0 && (
                        <View style={styles.row}>
                            <Text style={styles.headerContent1}>-</Text>
                            <Text style={styles.headerContent2}>
                                sin movimiento
                            </Text>
                            <Text style={styles.headerContent3}>-</Text>
                            <Text style={styles.headerContent4}>
                                sin movimiento
                            </Text>
                        </View>
                    )}
                    {ensayos.map((ensayo:any, index:any) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.headerContent1}>{ensayo.dataArray.item}</Text>
                            <Text style={styles.headerContent2}>{ensayo.dataArray.designacion}</Text>
                            <Text style={styles.headerContent3}>trabajando</Text>
                            <Text style={styles.headerContent4}>{ensayo.dataArray.contenido}</Text>
                        </View>
                    ))}
                    <InvoiceTableBlankSpace
                        rowsCount={tableRowsCount - ensayos.length}
                    />
                </View>
            </Page>
        </Document>
    );
};

export default InformePdf;
//
//
//
//
//
