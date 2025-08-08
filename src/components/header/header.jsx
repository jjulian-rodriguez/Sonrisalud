import styles from "./header.module.css"

function Header(){
    return(
        <header className={styles.header}>
            <h1>UNA INCREIBLE <br /> OPCIÓN PARA <br />TUS DIENTES Y <br />SALUD</h1>
            <div className={styles.div_span}>
                <span>AGENDA YA</span>
                <span>SERVICIOS</span>
            </div>
        </header>
    );
}

export default Header