

import Card from "../components/Card";
import Social from '../assets/Social.JPG';
import Jungle from '../assets/The jungle.JPG'

const sedesToca={
    direccion: "Transversal 7A # 18 - 78",
    sede:"Social Center Container Rojo",
    ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.8283949826764!2d-73.90963162411799!3d4.968174839278891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40730dc150140d%3A0x8727561d36c529c0!2sSocial%20Center%20Plazoleta%3B%20food%2C%20Grill%20and%20Drink!5e0!3m2!1ses-419!2sco!4v1692432742186!5m2!1ses-419!2sco",
    numero: "+57 313 802 64 14",
    titulo: "Tocancipa",
    descripcion:"El mejor lugar, aquí encontrarás gran variedad de platos. Todo nuestro menú se encuentra dispobnible para que disfrutes con tu familia."
}

const sedesZipa={
    direccion: "Carrera 16 # 7C - 89",
    sede:"The Jungle Plazoleta Container Amarillo",
    ubicacion: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4908167773588!2d-73.99836132411797!3d5.023841338769666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40715bc64b6615%3A0xfdc0bccfb723e97!2sTHE%20JUNGLE%20PLAZOLETA%20DE%20COMIDAS!5e0!3m2!1ses-419!2sco!4v1692432819322!5m2!1ses-419!2sco",
    numero: "+57 323 247 29 55",
    titulo: "Zipaquira",
    descripcion:"Una escapada de la ruidosa ciudad te espera para que compartas con tu familia la gran variedad de comidas que te ofrecemos."
}


function Home() {
    return (
        <>
            <h3 className="text-center p-2 my-2 mx-5 ">Conoce nuestras sedes</h3>
            <div className="container text-center flex align-middle justify-center p-2 mb-5">
                <Card imagen={Social} titulo={sedesToca.titulo} descripcion={sedesToca.descripcion} sede={sedesToca.sede}/>
                <Card imagen={Jungle} titulo={sedesZipa.titulo} descripcion={sedesZipa.descripcion} sede={sedesZipa.sede}/>
            </div>
        </>
    )
}

export default Home;