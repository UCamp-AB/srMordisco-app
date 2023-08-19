import React from 'react';


function Mapa(props) {
    return (
        <iframe src={props.src}
        width="500"
        height="350"
        style={{border:-1}}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    );
}

export default Mapa;






