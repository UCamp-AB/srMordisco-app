import arroces from "../assets/Arroces.jpg";
import paella from "../assets/Paella.jpg";
import mazorcada from "../assets/Mazorcada.jpg";
import picada from "../assets/Picada.jpg";
import salchipapa from "../assets/Salchipapa.jpg";

function Menu() {
    return (
        <div className="carrusel">
            <div id="carouselExampleCaptions" className="carousel slide mt-2">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <h3 className="text-center p-2">Conoce nuestro espectacular menú</h3>
                <div className="text-light carousel-inner">
                    <div className="carousel-item active" data-bs-interval={3000}>
                        <img src={arroces} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className=" text-bg-dark p-1 carousel-caption d-md-block">
                            <h5>ARROCES</h5>
                            <p>Diferente variedad de arroces </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={paella} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className=" text-bg-dark p-1 carousel-caption d-md-block">
                            <h5>PAELLA</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={3000}>
                        <img src={salchipapa} className="img-thumbnail mx-auto d-block" alt="..." />
                        <div className="text-bg-dark p-1 carousel-caption d-md-block">
                            <h5>SALCHIPAPA</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Menu;