import desarrolloWeb from '../img/web.jpg'
import appMoviles  from '../img/movil.jpg'
import softwareMedida  from '../img/custom.jpg'
import { Seccion } from './Seccion'

// Servicios.jsx
export function Servicios() {
    const items = [
        { titulo: "Desarrollo Web", img: desarrolloWeb, texto: "Creación de plataformas digitales..." },
        { titulo: "Aplicaciones Móviles", img: appMoviles, texto: "Diseño y desarrollo de apps nativas..." },
        { titulo: "Software a Medida", img: softwareMedida, texto: "Soluciones personalizadas..." },
    ];

    return <Seccion titulo="Nuestros Servicios" items={items} />
}
