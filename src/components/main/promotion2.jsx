import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './promotion2.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Promotion2(){
    return(
        <section className={styles.promotion}>
            <h2 className={styles.h2}>Cada vez somos una comunidad mas grande!</h2>
            <div className={styles.div_contain_div}>

            
                <div className={styles.div}>
                    <h3 className={styles.h3}>5</h3>
                    <h4 className={styles.h4}>Especialistas</h4>
                    <p className={styles.p}>Profesionales altamente calificados</p>
                </div>

                <div className={styles.div}>
                    <h3 className={styles.h3}>+100</h3>
                    <h4 className={styles.h4}>Pacientes</h4>
                    <p className={styles.p}>Personas que confían en nosotros</p>
                </div>

                <div className={styles.div}>
                    <h3 className={styles.h3}>+1500</h3>
                    <h4 className={styles.h4}>Persona Ayudadas</h4>
                    <p className={styles.p}>Impacto positivo en la comunidad</p>
                </div >

                <div className={styles.div}>
                    <h3 className={styles.h3}>4.8 <FontAwesomeIcon className={styles.star} icon={faStar}></FontAwesomeIcon></h3>
                    <h4 className={styles.h4}>Calificación</h4>
                    <p className={styles.p}>Basada en 127 opiniones</p>
                </div>
            </div>
        </section>
    );
}

export default Promotion2;


