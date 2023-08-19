import { useParams } from "react-router-dom";
import Nosotros from '../components/Nosotros';
import Formulario from '../components/Formulario';
import Mapa from '../components/Mapa'

function Reserva() {
    const { sede } = useParams();

    // Utiliza el valor de "sede" para determinar qué información mostrar
    const sedeInfo = sede === "Tocancipa" ? {
        direccion: "Transversal 7A # 18 - 78",
        titulo: "Tocancipa",
        descripcion: "El mejor lugar aquí encontrarás gran variedad de platos. Todo nuestro menú se encuentra disponible para que disfrutes con tu familia.",
        ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.8283949826764!2d-73.90963162411799!3d4.968174839278891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40730dc150140d%3A0x8727561d36c529c0!2sSocial%20Center%20Plazoleta%3B%20food%2C%20Grill%20and%20Drink!5e0!3m2!1ses-419!2sco!4v1692432742186!5m2!1ses-419!2sco",
        numero: "+57 313 802 64 14",
        sede:"Social Center Container Rojo"
    } : sede === "Zipaquira" ? {
        direccion: "Carrera 16 # 7C - 89",
        titulo: "Zipaquira",
        descripcion: "Una escapada de la ruidosa ciudad te espera para que compartas con tu familia la gran variedad de comidas que te ofrecemos.",
        ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4908167773588!2d-73.99836132411797!3d5.023841338769666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40715bc64b6615%3A0xfdc0bccfb723e97!2sTHE%20JUNGLE%20PLAZOLETA%20DE%20COMIDAS!5e0!3m2!1ses-419!2sco!4v1692432819322!5m2!1ses-419!2sco",
        numero: "+57 323 247 29 55",
        sede:"The Jungle Plazoleta Container Amarillo"
    } : {
        titulo: "Sede no encontrada",
        descripcion: "La información para esta sede no está disponible."
    };

    return (
        <div className="reservacion">
            <h3 className="text-center p-2 my-2 mx-5 ">Reserva con nosotros</h3>
            <div className='info text-center mx-5 my-2'>
                <div className='row align-items-center mx-5'>
                    <div className="col">
                        <Nosotros titulo={sedeInfo.titulo} direccion={sedeInfo.direccion} numero={sedeInfo.numero}/>
                        <Mapa className="Mapita" src={sedeInfo.ubicacion}/>
                    </div>
                    <div className='vr'></div>
                    <div className="col">
                        <Formulario sede={sedeInfo.titulo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reserva;
