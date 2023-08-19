import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className=''>
            <h6 className='text-center'>Sr. Mordisco - Haz de un mordisco el inicio de una nueva aventura</h6>
            <div className="redes-sociales">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/srmordisco" ><FontAwesomeIcon className="fab" icon={faFacebook} size="lg" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/sr_mordisco/" ><FontAwesomeIcon className="fab" icon={faInstagram} size="lg" /></a>
                    </li>
                    <li>
                        <a href="https://wa.me/+573232472955?text=Hola,%20quisiera%20solicitar%20un%20domicilio" ><FontAwesomeIcon className="fab" icon={faWhatsapp} size="lg" /></a>
                    </li>
                    ---
                    <li>
                        <a href="https://github.com/AndresB1013" ><FontAwesomeIcon className="fab" icon={faGithub} size="lg" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;