function Nosotros(props) {
    return (
        <div className="text-start">
            <p>Reserva con nosotros para tener el placer de antenderte. No te arrepentirás !!!</p>
            <dl>
                <div>
                    <dt className="">Dirección</dt>
                    <dd>
                        <p>{props.direccion} - {props.titulo}</p>
                    </dd>
                </div>
                <div className="mt-20">
                    <dt className="">Número</dt>
                    <dd className="flex">
                        <p>{props.numero}</p>
                    </dd>
                </div>
            </dl>
        </div>
    );
}

export default Nosotros;