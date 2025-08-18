import { useEffect, useState } from 'react';
import styles from './date.module.css'
import { Link } from 'react-router-dom';

function Dates(){
    
    //Generar fechas disponibles para los próximos 14 días
    const generateDates = () => {
    const days = [];
    
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() + i);
      days.push(newDate.toISOString().split("T")[0]); 
    }
    return days;
  };

  const availableDates = generateDates();

  const Days = ()=>{
    return availableDates.map((day, index) => (
        <option value={day} key={index}>{day}</option>
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

    //Constantes para almacenar los datos del formulario
    //y las validaciones de los campos
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

    //Validacion del nombre
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

    //Validacion del email
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

    //Validacion del telefono
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

    //Constante para deshabilitar el botón de enviar
    const [disabled, setDisabled] = useState(true)

    //Constantes para almacenar la fecha, hora y servicio seleccionadas
    const [dayDate, setDayDate] = useState('')
    const [hourDate, setHourDate] = useState('')
    const [serviceDate, setServiceDate] = useState('')

    //Efecto para habilitar o deshabilitar el botón de enviar
    useEffect(()=> {
        setDisabled(
            (isValid.Name && isValid.Mail && isValid.Tel) 
            && (dayDate !== '' && hourDate !== '' && serviceDate !== '')
            ? false : true)
    },[isValid, dayDate, hourDate, serviceDate])

    //Servicios disponibles
    const ServicesAvailable = [
        'Estética Dental',
        'Ortodoncia',
        'Implantes Dentales',
        'Blanqueamiento Dental',
        'Endodoncia',
        'Periodoncia',
        'Odontopediatría',
        'Limpieza Dental',
        'Cirugía Oral',
        'Prostodoncia',
        'Radiografías Dentales',
        'Consulta General',
        'Tratamiento de Caries',
        'Tratamiento de Encías',
        'Tratamiento de Sensibilidad Dental',
        'Tratamiento de Bruxismo',
        'Tratamiento de Halitosis',
        'Tratamiento de Dientes Desgastados',
        'Tratamiento de Dientes Astillados',
        'Tratamiento de Dientes Torcidos'
    ]

    


    //Componente para mostrar los servicios disponibles
    const Services = () => {
        return ServicesAvailable.map((service, index) => (
            <option key={index} value={service}>
                {service}
            </option>
        ))
    }

    const [ConfirmDate, setConfirmDate] = useState(false)
    
    function handleCancel() {
        setName("");
        setMail("");
        setTel("");
        setConfirmDate(false);
        setDayDate("");
        setHourDate("");
        setServiceDate("");
    }

    //Función para manejar el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        setName("");
        setMail("");
        setTel("");
        setConfirmDate(false);
        setDayDate("");
        setHourDate("");
        setServiceDate("");
        alert('Formulario enviado correctamente');
    }
    


    return(
        <section className={styles.section}>
            <div className={styles.div}>
                <h1 className={styles.h1}>Programe su cita</h1>
                <p className={styles.p}>Crear tu cita desde nuestra página te ayuda a poder elegir el dia y la hora en la que puedes visitarnos.</p>

            </div>
            <form action="" onSubmit={handleSubmit} className={styles.form}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Datos personales</legend>
                    
                    <div className={styles.div_contain_input}>
                        <label className={styles.label} htmlFor="dateName">Nombre Completo <sup>*</sup></label>
                        <input className={styles.input} onBlur={ValidationName} value={name} onChange={(e) => setName(e.target.value)} type="text" />
                        <small className={styles.small}>{alertText.Name}</small>
                    </div>
                    
                    <div className={styles.div_contain_input}>
                        <label className={styles.label} htmlFor="dateMail">Correo Electrónico <sup>*</sup></label>
                        <input className={styles.input} value={mail} onBlur={ValidationMail} onChange={(e)=> setMail(e.target.value)} type="email" />
                        <small className={styles.small}>{alertText.Mail}</small>
                    </div>
                    

                    <div className={styles.div_contain_input}>
                        <label className={styles.label} htmlFor="dateTel">Número de teléfono <sup>*</sup></label>
                        <input className={styles.input} id='dateTel' name='dateTel' type="tel" value={tel} onBlur={ValidationTel} onChange={(e)=> setTel(e.target.value)} />
                        <small className={styles.small}>{alertText.Tel}</small>
                    </div>
                    

                </fieldset>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Fecha y servicio</legend>
                    <label className={styles.label} htmlFor="day">Día <sup>*</sup></label>
                    <select className={styles.select} value={dayDate} onChange={(e)=> setDayDate(e.target.value)} name="day" id="day">
                        <option value="" disabled>--Selecciona un día--</option>
                        <Days></Days>
                    </select>

                    <label className={styles.label} htmlFor="hour">Hora <sup>*</sup></label>
                    <select className={styles.select} value={hourDate} onChange={(e)=> setHourDate(e.target.value)} name="hour" id="hour">
                        <option value="" disabled>--Selecciona una hora--</option>
                        <Hour/>
                    </select>

                    <label className={styles.label} htmlFor="serviceAvailable">Servicio <sup>*</sup></label>
                    <select className={styles.select} value={serviceDate}  name="serviceAvailable" id="serviceAvailable" onChange={(e) => setServiceDate(e.target.value)}>
                        <option value="" disabled>--Selecciona un servicio--</option>
                        <Services/>
                    </select>
                     <button type='button' className={styles.btn} onClick={(e) => setConfirmDate(true)} disabled={disabled} >Enviar</button>
                </fieldset>
                <div className={`${ConfirmDate ? styles.overlay : styles.displaynone}`}>
                    <div className={`${styles.confirmDate} ${ConfirmDate ? styles.displayblock : styles.displaynone}`}>
                        <h2 className={styles.h2}>Importante!</h2>
                        <p className={styles.p}>¿{name} estás seguro que quieres ir el día {dayDate} a la hora {hourDate} para recibir el servicio de  {serviceDate}</p>
                        <div className={styles.divBtn}>
                            <button className={styles.btnCancel} onClick={handleCancel} type='button'>Cancelar</button>
                            <button className={styles.btnConfirm} type='submit'>Confirmar y enviar</button>
                        </div>
                    </div>
                </div>
            </form>

            <Link>Ver registro de citas</Link>

            

            <div>
                <p className={styles.p}>*Recuerda que puedes modificar o cancelar tu cita en cualquier momento*</p>
            </div>
        </section>
    );  
}

export default Dates