export function Contenedor({ contenedorTitle, contenedorImg, contenedorText })
{
    const dscContenedor = `Icono del contenedor ${contenedorTitle}`
    return(
        <article className="cuerpoPagina-contenedor">
            <h4 className="cuerpoPagina-contenedor-titulo">{contenedorTitle}</h4>
            <img className="cuerpoPagina-contenedor-img" src={contenedorImg} alt={dscContenedor} />
            <p className="cuerpoPagina-contenedor-text">{contenedorText}</p>
        </article>
    )
}