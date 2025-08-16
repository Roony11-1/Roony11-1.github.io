export function Contacto() {
    return (
        <section id="contact" className="section">
            <h2>Contacto</h2>
            <div className="contact-form">
                <form id="contactForm">
                    <input type="text" name="nombre" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="Correo Electrónico" required />
                    <textarea name="mensaje" placeholder="Mensaje" rows="5" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
                <div id="mensaje" style={{ display: 'none', color: 'green', marginTop: '10px' }}></div>
            </div>
        </section>
    )
}
