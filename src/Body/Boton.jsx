export function Boton({ children, onClick }) {
    return (
        <button className='boton' onClick={onClick}>
            <span>{children}</span>
        </button>
    );
}