import styles from './main.module.css'
import { Link } from 'react-router-dom';
import EsteticaDental from '../../assets/icons/estetica-dental-icon.png'
import Ortodoncia from '../../assets/icons/ortodoncia-icon.png'
import BlanqueamientoDental from '../../assets/icons/blanqueamiento-dental-icon.png'
import Ortodonpediatria from '../../assets/icons/ortodonpediatria-icon.png'
import ImplanteDental from '../../assets/icons/implantes-dentales-icon.png'
import LimpiezaDental from '../../assets/icons/limpieza-dental-icon.png'
import Specialists from './specialists';


function Main(){



    const Services = ({icon, service}) => {
        return(
        <Link className={styles.card_service}>
                <img src={icon} alt="Icono" className={styles.icon} />
                <h3 className={styles.h3}>{service}</h3>
        </Link>
        );
    }

    return(
    <main>
        <Specialists />

        <section className={styles.section_services}>
                <div className={styles.div_services}>
                    <h2 className={styles.h2}>Nuestros servicios mas solicitados!</h2>
                    <div className={styles.div_contain_service}>
                        <Services icon={EsteticaDental} service={'Estetica Dental'} />
                        <Services icon={Ortodoncia} service={'Ortodoncia'} />
                        <Services icon={BlanqueamientoDental} service={'Blanqueamiento Dental'} />
                        <Services icon={Ortodonpediatria} service={'Ortodonpediatría'} />
                        <Services icon={ImplanteDental} service={'Implantes Dentales'} />
                        <Services icon={LimpiezaDental} service={'Limpieza Dental'} />
                    </div>
                </div>
        </section>
    </main>
    );
}

export default Main