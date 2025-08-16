import handshake from '../img/handshake.png'
import notebook  from '../img/notebook.jpg'
import billetes  from '../img/billetes.jpg'
import { Contenedor } from './Contenedor'

export function Pilares()
{
    return(
        <>
            <article className="cuerpoPagina-nuestrosPilares">
                <h2>Nuestros pilares</h2>
                <article className="cuerpoPagina-pilares">
                    <Contenedor 
                        contenedorTitle="Servicios de desarrollo a medida" 
                        contenedorImg={handshake}
                        contenedorText="Confia en desarrolladores que te ofrecen calidad y transparencia."
                    />
                    <Contenedor 
                        contenedorTitle="Tecnología de punta" 
                        contenedorImg={notebook}
                        contenedorText="Trabajamos con herramientas de última generación para garantizar soluciones modernas y eficientes."
                    />
                    <Contenedor 
                        contenedorTitle="Transparencia y confianza" 
                        contenedorImg={billetes}
                        contenedorText="Solo pagas cuando el trabajo esté terminado y aprobado. Precios accesibles con factura y respaldo legal."
                    />
                </article>
            </article>
            <br />
        </>

    )
}