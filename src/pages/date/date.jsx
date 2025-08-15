import { useEffect, useState } from 'react';
import styles from './date.module.css'

function Dates(){
    

    const generateDates = () => {
    const days = [];
    
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      days.push(newDate.toISOString().split("T")[0]); 
    }
    return days;
  };

  const availableDates = generateDates();

  const Days = ()=>{
    return availableDates.map((day, index) => (
        <option value="" key={index}>{day}</option>
    ))
  }

    const Times = [
        '8:00 A.M',
        '9:00 A.M',
        '10:00 A.M',
        '11:00 A.M',
        '1:30 P.M',
        '2:30 P.M',
        '3:30 P.M',
        '4:30 P.M',
        '5:30 P.M',
    ]
    
    const Hour = () => {
        return Times.map((time, index) => (
            <option key={index} value={time}>
            {time}
            </option>
        ));
};


    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [tel, setTel] = useState("")
    
    const [alertText, setAlertText] = useState({
        Name: "",
        Mail: "",
        Tel: ""
    })
      
    const [isValid, setIsValid] = useState({
        Name: false,
        Mail: false,
        Tel: false
    })

    function ValidationName(){
        if(!name.trim()){
            setAlertText(prev => ({...prev, Name: "El nombre es obligatorio*"}))
            setIsValid(prev => ({...prev, Name: false}))
        }
        else if(name.length < 2){
            setAlertText(prev => ({...prev, Name: "La longitud mínima es de 2 letras*"}))
            setIsValid(prev => ({...prev, Name: false}))
        }
        else{
            setAlertText(prev => ({...prev ,Name:""}))
            setIsValid(prev => ({...prev, Name: true}))
        }
    }

    function ValidationMail(){
        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
            setAlertText(prev => ({...prev, Mail: ""}))
            setIsValid(prev => ({...prev, Mail: true}))
        }
        else if(!mail.trim()){
            setAlertText(prev => ({...prev, Mail: "El email es obligatorio*"}))
            setIsValid(prev => ({...prev, Mail: false}))
        } else {
            setAlertText(prev => ({...prev, Mail: "Por favor utiliza el patron de email: @ y/o ."}))
            setIsValid(prev => ({...prev, Mail: false}))
        }
    }

        function ValidationTel(){
        if(!tel.trim()){
            setAlertText(prev => ({...prev, Tel: "El teléfono es obligatorio*"}))
            setIsValid(prev => ({...prev, Tel: false}))
        }
        else if(/^[A-Za-z]+$/.test(tel)){
            setAlertText(prev => ({...prev, Tel:"Por favor utiliza el patron de número de teléfono"}))
            setIsValid(prev => ({...prev, Tel: false}))
        }
        else {
            setAlertText(prev => ({...prev, Tel:""}))
            setIsValid(prev => ({...prev, Tel: true}))
        }
    }

    
    const [disabled, setDisabled] = useState(true)

    useEffect(()=> {
        setDisabled(isValid.Name && isValid.Mail && isValid.Tel ? false : true)
    },[isValid])
    
    return(
        <section className={styles.section}>
            <div className={styles.div}>
                <h1 className={styles.h1}>Programe su cita</h1>
                <p className={styles.p}>Crear tu cita desde nuestra página te ayuda a poder elegir el dia y la hora en la que puedes visitarnos.</p>
            </div>
            <form action="" className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Datos personales</legend>

                    <label className={styles.label} htmlFor="dateName">Nombre Completo <sup>*</sup></label>
                    <input className={styles.input} onBlur={ValidationName} value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    <small className={styles.small}>{alertText.Name}</small>

                    <label className={styles.label} htmlFor="dateMail">Correo Electrónico <sup>*</sup></label>
                    <input className={styles.input} value={mail} onBlur={ValidationMail} onChange={(e)=> setMail(e.target.value)} type="email" />
                    <small className={styles.small}>{alertText.Mail}</small>


                    <label className={styles.label} htmlFor="dateTel">Número de teléfono <sup>*</sup></label>
                    <input className={styles.input} id='dateTel' name='dateTel' type="tel" value={tel} onBlur={ValidationTel} onChange={(e)=> setTel(e.target.value)} />
                    <small className={styles.small}>{alertText.Tel}</small>

                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Fecha</legend>
                    <label className={styles.label} htmlFor="day">Día</label>
                    <select className={styles.select} name="day" id="day">
                        <Days></Days>
                    </select>

                    <label className={styles.label} htmlFor="hour">Hora</label>
                    <select className={styles.select} name="hour" id="hour">
                        <Hour/>
                    </select>
                     <button className={styles.btn} disabled={disabled} action="Submit">Enviar</button>
                </fieldset>
            </form>
        </section>
    );  
}

export default Dates