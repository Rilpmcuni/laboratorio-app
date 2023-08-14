import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionFaQ() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: "66%", flexShrink: 0 }} fontWeight={"bold"}>
                        ¿Cuando planean cerrar la beta?
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Pronto
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Una vez que nos sintamos preparados para el mundo real.
                        ¡Nos encantaría recibir sus comentarios sobre lo que
                        hemos estado construyendo!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: "66%", flexShrink: 0 }} fontWeight={"bold"}>
                        ¿La aplicación Tamíz.LA requiere una conexión constante
                        a Internet?
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        No necesariamente
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sí, para acceder a todas las funcionalidades de la
                        aplicación y tener sincronización de datos en tiempo
                        real, es necesario tener una conexión a Internet activa.
                        Sin embargo, es posible acceder a algunas funciones sin
                        conexión a Internet, como la visualización de algunos
                        documentos guardados previamente en la aplicación.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: "66%", flexShrink: 0 }} fontWeight={"bold"}>
                        ¿Puedo utilizar Tamíz.LA en múltiples dispositivos y
                        plataformas?
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                        Sí
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Sí, Tamiz LA es una aplicación multiplataforma que se
                        puede utilizar en diferentes dispositivos, incluyendo
                        computadoras de escritorio, laptops, tablets y teléfonos
                        móviles. Además, al utilizar una cuenta de Tamiz LA,
                        puedes acceder a tu información y trabajos en cualquier
                        dispositivo en el que hayas iniciado sesión. La
                        aplicación también se sincroniza automáticamente para
                        que todos los datos estén actualizados en todos los
                        dispositivos.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
