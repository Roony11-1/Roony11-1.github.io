import { Banner } from "./Body/Banner"
import { SobreNosotros } from "./Body/SobreNosotros"
import { Pilares } from "./Body/Pilares"
import { Servicios } from "./Body/Servicios"

export function Body()
{
    return(
        <section className='cuerpoPagina'>
            <Banner />
            <SobreNosotros />
            <Pilares />
            <Servicios />
        </section>
    )
}