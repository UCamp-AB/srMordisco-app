import React from 'react';


function Mapa(props) {
    return (
        <div className='map-responsive'>
            <iframe
                title='ubicacion'
                src={props.src}
                width={500} height={350}
                style={{ border: '-1' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

    );
}

export default Mapa;






