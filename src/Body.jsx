import { Banner } from "./Body/Banner"
import { SobreNosotros } from "./Body/SobreNosotros"
import { Pilares } from "./Body/Pilares"
import { Servicios } from "./Body/Servicios"
import { Contacto } from "./Body/Contacto"
import { Boton } from './Body/Boton.jsx'

import { useState } from 'react';

const Expositor = () => {
    const [seccion, setSeccion] = useState('pilares');

    const renderContenido = () => {
        if (seccion === 'pilares') return <p><Pilares/></p>;
        if (seccion === 'servicios') return <p><Servicios/></p>;
        if (seccion === 'contacto') return <p><Contacto/></p>;
        return null;
    };

    return (
        <div className="cuerpoPagina-expositor">
            <section className="cuerpoPagina-expositor-header">
                <nav className="cuerpoPagina-expositor-header-nav">
                    <Boton onClick={() => setSeccion('pilares')}>Pilares</Boton>
                    <Boton onClick={() => setSeccion('servicios')}>Servicios</Boton>
                    <Boton onClick={() => setSeccion('contacto')}>Contacto</Boton>
                </nav>
            </section>

            <section className="cuerpoPagina-expositor-contenido">
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