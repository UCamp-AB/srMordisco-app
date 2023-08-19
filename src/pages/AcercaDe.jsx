import React, { useRef, useEffect } from 'react';

import logo from "../assets/logo2.jpg";

function AcercaDe() {
    const videoRef = useRef(null);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0.2; // Establecer el volumen al 20%
        }
    }, []);

    return (
        <div className='justify-content-center align-items-center mb-5'>
            <h3 className="text-center p-2 my-2 mx-5">Acerca de Nosotros</h3>
            <div className='text-bg-dark opacity-75 p-2 my-2 mx-5'>
                <p className='text-justify'>En Sr Mordisco somos un grupo de emprendedores que nos dedicamos a la fabricación de momentos inolvidables con tu familia y amigos, donde podrás celebrar tus acontecimientos más especiales disfrutando de los mejores antojos para tu paladar.
                    Además de nuestra carta muy variada, que se destaca por sus productos frescos y de gran calidad, en el que encontraras una gran variedad de arroces, platos típicos, comidas rápidas y además una forma de divertirse y pasar un rato muy agradable con nuestros cocteles moleculares.</p>
                <div id="video-img" className='d-flex justify-content-center align-items-center'>
                    <video ref={videoRef} autoPlay width="640" height="360" volume="0.25">
                        <source src="/videos/video.mp4" type="video/mp4" />
                    </video>
                    <img className='Logo rounded-circle' src={logo} alt="Logo" />
                </div>
                <h4 className='pt-5 text-center'>Encuéntranos de Martes a Domingo de 11 am a 11 pm</h4>
            </div>
        </div>
    );
}

export default AcercaDe;
