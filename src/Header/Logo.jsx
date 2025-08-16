import logo from '../img/logo2.png';

export function Logo()
{
    return(
        <section className="display-logo">
            <img className="display-logo-img" src={logo}/>
            <div className="display-logo-info">
                <strong className="display-logo-infoTitle">DevMate</strong>
                <span className="display-logo-infoSlogan">Tu Partner Digital</span>
            </div>
        </section>
    )
}