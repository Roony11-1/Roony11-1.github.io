// Seccion.jsx
import { Contenedor } from "./Contenedor"

export function Seccion({ titulo, items }) {
    return (
        <>
            <section className="main-seccion">
                <h2 className="titulo-seccion">{titulo}</h2>
                <article className="body-seccion">
                    {items.map((item, index) => (
                        <Contenedor
                            key={index}
                            contenedorTitle={item.titulo}
                            contenedorImg={item.img}
                            contenedorText={item.texto}
                        />
                    ))}
                </article>
            </section>
            <br />
        </>
    );
}
