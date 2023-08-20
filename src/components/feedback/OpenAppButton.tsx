import { isStandalone } from "@/helpers/pwaDetection";
import React from "react";

function MiComponente() {
    const abrirPWA = () => {
        if (isStandalone()) {
            // Puedes manejar la apertura de la PWA aquí
            // Por ejemplo, redirigir a una URL específica de la PWA
            window.location.href = "/ruta-de-tu-pwa";
        }
    };

    if (isStandalone()) {
        return <button onClick={abrirPWA}>Abrir la aplicación</button>;
    } else {
        return;

        <>
            <p>Por favor, instala la aplicación para acceder.</p>;
            <button onClick={abrirPWA}>Abrir la aplicación</button>
        </>;
    }
}

export default MiComponente;
