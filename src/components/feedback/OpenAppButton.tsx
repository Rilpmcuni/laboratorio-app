// components/OpenAppButton.js
import React from "react";

const OpenAppButton = () => {
    const handleOpenAppClick = () => {
        if ('standalone' in window.navigator) {
            // Abrir la PWA si está instalada en iOS
            window.location.href = "ruta-de-tu-pwa";
        } else if (window.matchMedia("(display-mode: standalone)").matches) {
            // Abrir la PWA si está instalada en Android u otros navegadores
            window.open("ruta-de-tu-pwa", "_blank");
        } else {
            // La PWA no está instalada
            console.log("La PWA no está instalada.");
        }
    };

    return (
        <div>
            <button onClick={handleOpenAppClick}>Abrir la PWA</button>
        </div>
    );
};

export default OpenAppButton;
