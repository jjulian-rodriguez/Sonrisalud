import { Link } from "react-router-dom";
import styles from "./navbar.module.css"


function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navbar_ul}> 
                <li className={styles.navbar_li}>
                    <Link className={styles.navbar_link} to="/about">¿Quienes Somos?</Link>
                </li >
                <li className={styles.navbar_li}>
                    <Link className={styles.navbar_link} to="">Agendá tu cita</Link>
                </li>
                <li className={styles.navbar_li}>
                    <Link className={styles.navbar_link} to="">Contáctanos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar