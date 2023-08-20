// components/OpenAppButton.js
import React from "react";

const OpenAppButton = () => {
    const handleOpenAppClick = () => {
        if (
            window.matchMedia("(display-mode: standalone)").matches ||
            window.matchMedia("(display-mode: fullscreen)").matches
        ) {
            // Abrir la PWA si está instalada
            window.open(window.location.href, "_blank");
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
