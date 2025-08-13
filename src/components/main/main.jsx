import styles from './main.module.css'
import { Link } from 'react-router-dom';


function Main(){
    return(
    <main>
        <section className={styles.section_services}>
                <div className={styles.div_services}>
                    <h2 className={styles.h2}>Nuestros servicios mas solicitados!</h2>
                    <div className={styles.div_contain_service}>
                        <Link className={styles.card_service}>
                            <h3 className={styles.h3}>Estética Dental</h3>
                        </Link>

                        <Link className={styles.card_service}>
                            <h3 className={styles.h3}>Ortodoncia</h3>
                        </Link>

                        <Link className={styles.card_service}>
                            <h3 className={styles.h3}>Blanqueamiento Dental</h3>
                        </Link>

                        <Link className={styles.card_service}>
                            <h3 className={styles.h3}>Ortodonpediatría</h3>
                        </Link>

                        <Link className={styles.card_service}>
                            <h3 className={styles.h3}>Implantes Dentales</h3>
                        </Link>

                        <Link className={styles.card_service}>
                            <h3 className={styles.h3}>Limpieza Dental</h3>
                        </Link>
                    </div>
                </div>
        </section>
    </main>
    );
}

export default Main