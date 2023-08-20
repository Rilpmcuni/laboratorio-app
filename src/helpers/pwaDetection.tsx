export function isStandalone() {
    // Verifica si es una PWA standalone en el navegador
    if (typeof window !== "undefined" && "navigator" in window) {
        if ("standalone" in window.navigator) {
            return window.navigator["standalone"];
        }
        return false;
    }
    return false;
}
