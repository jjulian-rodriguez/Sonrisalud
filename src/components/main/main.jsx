import styles from './main.module.css'
import { Link } from 'react-router-dom';


function Main(){

    const Services = ({service, description}) => {
        return(
        <Link className={styles.card_service}>
            <h3 className={styles.h3}>{service}</h3>
            <p>{description}</p>
        </Link>
        );
    }

    return(
    <main>
        <section className={styles.section_services}>
                <div className={styles.div_services}>
                    <h2 className={styles.h2}>Nuestros servicios mas solicitados!</h2>
                    <div className={styles.div_contain_service}>
                        <Services service={'Estetica Dental'} description={'.'}/>
                        <Services service={'Ortodoncia'} description={'.'}/>
                        <Services service={'Blanqueamiento Dental'} description={'.'}/>
                        <Services service={'Ortodonpediatría'} description={'.'}/>
                        <Services service={'Implantes Dentales'} description={'.'}/>
                        <Services service={'Limpieza Dental'} description={'.'}/>
                    </div>
                </div>
        </section>
    </main>
    );
}

export default Main