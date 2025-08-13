import styles from './main.module.css'
import { Link } from 'react-router-dom';
import EsteticaDental from '../../assets/icons/estetica-dental-icon.png'
import Ortodoncia from '../../assets/icons/ortodoncia-icon.png'
import BlanqueamientoDental from '../../assets/icons/blanqueamiento-dental-icon.png'
import Ortodonpediatria from '../../assets/icons/ortodonpediatria-icon.png'
import ImplanteDental from '../../assets/icons/implantes-dentales-icon.png'
import LimpiezaDental from '../../assets/icons/limpieza-dental-icon.png'


function Main(){



    const Services = ({icon, service, description}) => {
        return(
        <Link className={styles.card_service}>
                <img src={icon} alt="Icono" className={styles.icon} />
                <h3 className={styles.h3}>{service}</h3>
                <p className={styles.p}>{description}</p>
                <button className={styles.btn_masinfo}>Más Información</button>
        </Link>
        );
    }

    return(
    <main>
        <section className={styles.section_info}>
        </section>

        <section className={styles.section_services}>
                <div className={styles.div_services}>
                    <h2 className={styles.h2}>Nuestros servicios mas solicitados!</h2>
                    <div className={styles.div_contain_service}>
                        <Services icon={EsteticaDental} service={'Estetica Dental'} description={'Tratamientos para una sonrisa perfecta y armoniosa.'}/>
                        <Services icon={Ortodoncia} service={'Ortodoncia'} description={'Corrige la posición de los dientes y mejora la mordida.'}/>
                        <Services icon={BlanqueamientoDental} service={'Blanqueamiento Dental'} description={'Elimina manchas y aclara el tono dental.'}/>
                        <Services icon={Ortodonpediatria} service={'Ortodonpediatría'} description={'Tratamiento de ortodoncia temprana para niños.'}/>
                        <Services icon={ImplanteDental} service={'Implantes Dentales'} description={'Solución fija y natural para dientes perdidos.'}/>
                        <Services icon={LimpiezaDental} service={'Limpieza Dental'} description={'Eliminación profesional de placa y sarro acumulado.'}/>
                    </div>
                </div>
        </section>
    </main>
    );
}

export default Main