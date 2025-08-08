import { Link } from "react-router-dom";
import styles from "./navbar.module.css"
import {useState } from 'react'


function Navbar(){
    const [open, setOpen] = useState(false)

    function openNB(){
        setOpen(!open)
    }

    return(
        <nav className={styles.navbar}>
        <button className={styles.hamburger} onClick={openNB}> {open ? "✕" : "☰"}</button>
            <ul className={styles.navbar_ul}> 
                <li className={`${styles.navbar_li} ${open ? styles.displayblock : styles.displaynone}`}>
                    <Link className={`${styles.navbar_link} ${open ? styles.event : styles.nonevent}`} to="/about">¿Quienes Somos?</Link>
                </li >
                <li className={`${styles.navbar_li} ${open ? styles.displayblock : styles.displaynone}`}>
                    <Link className={styles.navbar_link} to="">Agendá tu cita</Link>
                </li>
                <li className={`${styles.navbar_li} ${open ? styles.displayblock : styles.displaynone}`}>
                    <Link className={styles.navbar_link} to="">Contáctanos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar