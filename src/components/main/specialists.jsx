import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './specialists.module.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Specialists(){

    const SpecialistCard = ({name, specialty, bg, visible}) => {
        return(
            <div 
              className={`${styles.specialist_card} ${visible ? styles.index : ''}`} 
              style={{backgroundImage: `url(${bg})`}}
            >
                <h3>{name}</h3>
                <p>{specialty}</p>
            </div>
        )
    }

    const SpecialistData = [
        { id: 1, name: 'Dr. Juan Perez', specialty: 'Ortodoncia', bg: '' },
        { id: 2, name: 'Dra. Maria Lopez', specialty: 'Implantes Dentales', bg: '' },
        { id: 3, name: 'Dr. Carlos Gomez', specialty: 'Estetica Dental', bg: '' },
        { id: 4, name: 'Dra. Ana Torres', specialty: 'Ortodonpediatría', bg: '' },
        { id: 5, name: 'Dr. Luis Martinez', specialty: 'Limpieza Dental', bg: '' }
    ];

    // índice actual
    const [current, setCurrent] = useState(0);

    function handleArrowLeftClick() {
        setCurrent(prev => prev === 0 ? SpecialistData.length - 1 : prev - 1);
    }

    function handleArrowRightClick() {
        setCurrent(prev => (prev + 1) % SpecialistData.length);
    }

    return(
        <section className={styles.section_specialists}>
            <h2 className={styles.h2}>Nuestros Especialistas</h2>
            <div className={styles.specialist_container}>
                <button onClick={handleArrowLeftClick}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>

                {SpecialistData.map((specialist, index) => (
                    <SpecialistCard 
                        key={specialist.id}
                        name={specialist.name}
                        specialty={specialist.specialty}
                        bg={specialist.bg}
                        visible={index === current} // 🔑 solo el actual tiene visible=true
                    />
                ))}

                <button onClick={handleArrowRightClick}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
        </section>
    )
}

export default Specialists;
