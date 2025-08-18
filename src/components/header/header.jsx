import { Link } from "react-router-dom";
import styles from "./header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.div}>
                <h1>UNA INCREIBLE <br /> OPCIÓN PARA <br />TUS DIENTES Y <br />SALUD</h1>
                <div className={styles.div_span}>
                    <Link className={styles.link} to="/date">AGENDA YA</Link>
                    <Link className={styles.link}  to="/services">SERVICIOS</Link>
                </div>
            </div>
        </header>
    );
}

export default Header