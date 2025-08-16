import handshake from '../img/handshake.png'
import notebook  from '../img/notebook.jpg'
import billetes  from '../img/billetes.jpg'
import { Seccion } from './Seccion'

// Pilares.jsx
export function Pilares() {
    const items = [
        { titulo: "Servicios de desarrollo a medida", img: handshake, texto: "Confía en desarrolladores que te ofrecen calidad y transparencia."},
        { titulo: "Tecnología de punta", img: notebook, texto: "Trabajamos con herramientas de última generación para garantizar soluciones modernas y eficientes."},
        { titulo: "Transparencia y confianza", img: billetes, texto: "Solo pagas cuando el trabajo esté terminado y aprobado. Precios accesibles con factura y respaldo legal."},
        { titulo: "Transparencia y confianza", img: billetes, texto: "Solo pagas cuando el trabajo esté terminado y aprobado. Precios accesibles con factura y respaldo legal."},
        { titulo: "Transparencia y confianza", img: billetes, texto: "Solo pagas cuando el trabajo esté terminado y aprobado. Precios accesibles con factura y respaldo legal."},
        { titulo: "Transparencia y confianza", img: billetes, texto: "Solo pagas cuando el trabajo esté terminado y aprobado. Precios accesibles con factura y respaldo legal."},
        { titulo: "Transparencia y confianza", img: billetes, texto: "Solo pagas cuando el trabajo esté terminado y aprobado. Precios accesibles con factura y respaldo legal."},
        { titulo: "Transparencia y confianza", img: billetes, texto: "Solo pagas cuando el trabajo esté terminado y aprobado. Precios accesibles con factura y respaldo legal."},
    ];

    return <Seccion titulo="Nuestros pilares" items={items} />
}
