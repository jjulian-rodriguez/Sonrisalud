import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { data } from './specialistlist.js';
import styles from './specialists.module.css';

function Specialists() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className={styles.section_specialists}>

            <div className={styles.div_title}>
                <h1 className={styles.h1}>¡Conoce nuestro equipo!</h1>
            </div>

            <div className={styles.carousel_container}>
                <button className={styles.arrow_btn} onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <div className={styles.slide}>
                    <div className={styles.image_container}>
                        <img
                            src={data[currentIndex].img}
                            alt={data[currentIndex].name}
                            className={styles.image}
                            width={50}
                        />
                    </div>
                    <div className={styles.info_container}>
                        <h2 className={styles.name}>{data[currentIndex].name}</h2>
                    </div>
                </div>

                <button className={styles.arrow_btn} onClick={nextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            <div className={styles.indicators}>
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${
                            currentIndex === index ? styles.active_dot : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
            <div className={styles.bg}>
            
            </div>
        </section>
    );
}

export default Specialists;

