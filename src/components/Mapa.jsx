import React from 'react';


function Mapa(props) {
    return (
        <iframe
            title='Ubicaciones'
            src={props.src}
            width={500} height={350}
            style={{ border: '-1' }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>

    );
}

export default Mapa;






