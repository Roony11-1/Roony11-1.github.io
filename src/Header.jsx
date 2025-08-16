import {Logo} from './Header/Logo.jsx'
import {Boton} from './Header/Boton.jsx'

export function Header()
{
    return(
        <header className="barraArriba">
            <Logo className="barraArriba-logo"></Logo>
            <nav>
                <Boton>Nosotros</Boton>
                <Boton>Servicios</Boton>
                <Boton>Contacto</Boton>
            </nav>
        </header>
    )
}