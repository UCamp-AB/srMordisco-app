import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

function Card(props) {
    return (
        <div className="card mb-3" style={{ maxWidth: 1540 }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.imagen} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo} - {props.sede}</h5>
                        <p className="card-text">{props.descripcion}</p>
                        <Link className="icon-link" to={`/reserva/${props.titulo}`}>
                            <svg className="bi" aria-hidden="true">
                                <FontAwesomeIcon icon={faCalendarCheck} />
                            </svg>
                            Reservar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;