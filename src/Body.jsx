import { Banner } from "./Body/Banner"
import { SobreNosotros } from "./Body/SobreNosotros"
import { Pilares } from "./Body/Pilares"
import { Servicios } from "./Body/Servicios"
import { Contacto } from "./Body/Contacto"
import { Boton } from './Body/Boton.jsx'

import { useState, useRef } from 'react';

const Expositor = () => {
    const [seccion, setSeccion] = useState('pilares');
    const contenidoRef = useRef(null); // referencia a la sección de contenido

    const handleClick = (seccion) => {
        setSeccion(seccion);
        contenidoRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const renderContenido = () => {
        if (seccion === 'pilares') return <Pilares />;
        if (seccion === 'servicios') return <Servicios />;
        if (seccion === 'contacto') return <Contacto />;
        return null;
    };

    return (
        <div className="cuerpoPagina-expositor">
            <section className="cuerpoPagina-expositor-header">
                <nav className="cuerpoPagina-expositor-header-nav">
                    <Boton onClick={() => handleClick('pilares')}>Pilares</Boton>
                    <Boton onClick={() => handleClick('servicios')}>Servicios</Boton>
                    <Boton onClick={() => handleClick('contacto')}>Contacto</Boton>
                </nav>
            </section>

            <section
                className="cuerpoPagina-expositor-contenido"
                ref={contenidoRef} // asignamos la referencia
            >
                {renderContenido()}
            </section>
        </div>
    );
};

export function Body()
{
    return(
        <section className='cuerpoPagina'>
            <Banner />
            <SobreNosotros />
            <Expositor/>
        </section>
    )
}