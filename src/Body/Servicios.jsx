import desarrolloWeb from '../img/web.jpg'
import appMoviles  from '../img/movil.jpg'
import softwareMedida  from '../img/custom.jpg'
import { Contenedor } from './Contenedor'

export function Servicios()
{
    return(
        <>
            <article className="cuerpoPagina-nuestrosServicios">
                <h2>Nuestros Servicios</h2>
                <article className="cuerpoPagina-servicios">
                    <Contenedor 
                        contenedorTitle="Desarrollo Web" 
                        contenedorImg={desarrolloWeb}
                        contenedorText="Creación de plataformas digitales intuitivas, responsivas y escalables que se adaptan a las necesidades de cada cliente."
                    />
                    <Contenedor 
                        contenedorTitle="Aplicaciones Móviles" 
                        contenedorImg={appMoviles}
                        contenedorText="Diseño y desarrollo de aplicaciones nativas e híbridas con un alto rendimiento y una excelente experiencia de usuario."
                    />
                    <Contenedor 
                        contenedorTitle="Software a Medida" 
                        contenedorImg={softwareMedida}
                        contenedorText="Soluciones personalizadas para cada empresa, optimizando procesos y mejorando la eficiencia operativa."
                    />
                </article>
            </article>
            <br />
        </>

    )
}