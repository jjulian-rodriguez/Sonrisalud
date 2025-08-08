import { Link } from "react-router-dom";
import styles from "./header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <div>
                <h1>UNA INCREIBLE <br /> OPCIÓN PARA <br />TUS DIENTES Y <br />SALUD</h1>
                <div className={styles.div_span}>
                    <Link className={styles.link} to="/">AGENDA YA</Link>
                    <Link className={styles.link}  to="/">SERVICIOS</Link>
                </div>
            </div>
        </header>
    );
}

export default Header