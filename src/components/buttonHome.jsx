import { Link } from 'react-router-dom';
import styles from './buttonHome.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ButtonHome() {
    return (
        <Link to="/" className={styles.buttonHome}>
          <FontAwesomeIcon icon={faArrowLeft}/>  Regresar
        </Link>
    );
}

export default ButtonHome;