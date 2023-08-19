import arroces from "../assets/Arroces.jpg";
import paella from "../assets/Paella.jpg";
import mazorcada from "../assets/Mazorcada.jpg";
import picada from "../assets/Picada.jpg";
import salchipapa from "../assets/Salchipapa.jpg";

function Menu() {
    return (
        <div className="carrusel">
            <div id="carouselExampleInterval" className="carousel slide mt-2" data-bs-ride="corousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={3} aria-label="Slide 4" />
                    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to={4} aria-label="Slide 5" />
                </div>
                <h3 className="text-center p-2 my-2 mx-5">Conoce nuestro espectacular menú</h3>
                <div className="text-light carousel-inner">
                    <div className="carousel-item active" data-bs-interval={3000}>
                        <img src={arroces} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className=" text-bg-dark opacity-75 p-1 carousel-caption d-md-block">
                            <h4 className="fw-bold">ARROCES</h4>
                            <p>Diferente variedad de arroces</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={paella} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className=" text-bg-dark opacity-75 p-1 carousel-caption d-md-block">
                            <h4 className="fw-bold">PAELLA</h4>
                            <p>Deliciosa Paella con ingredientes auténticos</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={salchipapa} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className="text-bg-dark opacity-75 p-1 carousel-caption d-md-block">
                            <h4 className="fw-bold">SALCHIPAPAS</h4>
                            <p>Preparadas a la perfección con la mejor papa y salchicha ranchera</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={mazorcada} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className="text-bg-dark opacity-75 p-1 carousel-caption d-md-block">
                            <h4 className="fw-bold">MAZORCADAS</h4>
                            <p>Preparadas con un maiz tierno ideal para acompañar sus diferentes combinaciones</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={picada} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className="text-bg-dark opacity-75 p-1 carousel-caption d-md-block">
                            <h4 className="fw-bold">PICADAS</h4>
                            <p>Para compartir en familia, con el mejor sabor</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Menu;