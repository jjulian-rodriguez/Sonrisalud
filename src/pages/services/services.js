import { 
  faSmile, 
  faTeeth, 
  faTooth, 
  faStar, 
  faSyringe,
  faTeethOpen,
  faChild,
  faBroom,
  faXRay,
  faStethoscope,
  faTemperatureLow,
  faWind,
  faShieldAlt,
  faRandom
} from '@fortawesome/free-solid-svg-icons';

export const data = [
  {
    id: 1,
    icon: faSmile,
    name: "Estética Dental",
    type: "estetico",
    shortDescription: "Tratamientos enfocados en mejorar la apariencia de tu sonrisa mediante técnicas modernas y personalizadas.",
    longDescription:
      "La estética dental busca armonizar la sonrisa corrigiendo imperfecciones en el color, forma o tamaño de los dientes. Suele requerir entre 1 y 3 sesiones dependiendo de la complejidad. Los resultados son visibles de inmediato y con un buen mantenimiento, incluyendo higiene y revisiones semestrales, pueden durar varios años."
  },
  {
    id: 2,
    icon: faTeeth,
    name: "Ortodoncia",
    type: "correctivo",
    shortDescription: "Corrige la posición de los dientes y mandíbula mediante brackets o alineadores invisibles.",
    longDescription:
      "El tratamiento de ortodoncia se utiliza para alinear los dientes y mejorar la mordida, utilizando brackets metálicos, cerámicos o alineadores transparentes. La duración promedio es de 12 a 24 meses según la complejidad del caso. Los resultados son permanentes si se mantiene el uso de retenedores y revisiones periódicas."
  },
  {
    id: 3,
    icon: faTooth,
    name: "Implantes Dentales",
    type: "cirugia",
    shortDescription: "Reemplaza dientes perdidos mediante implantes de titanio que se integran con el hueso.",
    longDescription:
      "Los implantes dentales son una solución duradera para recuperar dientes ausentes, ofreciendo estética y funcionalidad. El procedimiento requiere entre 2 y 3 citas, incluyendo la colocación del implante y la corona definitiva. Con un adecuado cuidado y limpieza, los implantes pueden durar más de 15 años."
  },
  {
    id: 4,
    icon: faStar,
    name: "Blanqueamiento Dental",
    type: "estetico",
    shortDescription: "Devuelve a tus dientes un tono más blanco y brillante de forma segura y rápida.",
    longDescription:
      "El blanqueamiento dental utiliza agentes especializados para aclarar varios tonos el color de los dientes. Suele realizarse en 1 o 2 sesiones de aproximadamente 60 minutos cada una. Los resultados pueden durar entre 6 meses y 2 años, siempre que se mantenga una buena higiene y se eviten alimentos y bebidas que manchen."
  },
  {
    id: 5,
    icon: faSyringe,
    name: "Endodoncia",
    type: "correctivo",
    shortDescription: "Elimina infecciones internas de los dientes y preserva su funcionalidad natural.",
    longDescription:
      "La endodoncia, o tratamiento de conducto, consiste en limpiar y sellar el interior del diente afectado por caries profundas o infecciones. Generalmente se realiza en 1 o 2 sesiones, dependiendo de la complejidad del caso. Los resultados son permanentes si se mantiene una correcta higiene bucal y revisiones periódicas."
  },
  {
    id: 6,
    icon: faTeethOpen,
    name: "Periodoncia",
    type: "preventivo",
    shortDescription: "Previene, diagnostica y trata enfermedades de las encías y tejidos de soporte dental.",
    longDescription:
      "El tratamiento de periodoncia combate la gingivitis y la periodontitis para mantener las encías sanas y prevenir la pérdida dental. Suele requerir entre 1 y 3 sesiones, acompañadas de limpieza profunda y control de placa bacteriana. Con una buena higiene y visitas de control, se puede mantener la salud periodontal a largo plazo."
  },
  {
    id: 7,
    icon: faChild,
    name: "Odontopediatría",
    type: "preventivo",
    shortDescription: "Atención dental especializada para niños, enfocada en prevenir problemas futuros.",
    longDescription:
      "La odontopediatría se encarga del cuidado bucal de los niños desde la infancia hasta la adolescencia, previniendo caries y maloclusiones. Las citas son rápidas, interactivas y adaptadas a los pequeños. El mantenimiento incluye revisiones cada 6 meses y una adecuada educación sobre higiene dental."
  },
  {
    id: 8,
    icon: faBroom,
    name: "Limpieza Dental",
    type: "preventivo",
    shortDescription: "Elimina placa, sarro y manchas para mantener dientes y encías saludables.",
    longDescription:
      "La limpieza dental profesional es esencial para prevenir caries y enfermedades periodontales. El procedimiento dura entre 30 y 45 minutos y se recomienda realizarlo cada 6 meses. Los resultados son inmediatos, dejando la boca limpia y con sensación de frescura."
  },
  {
    id: 9,
    icon: faTeeth,
    name: "Cirugía Oral",
    type: "cirugia",
    shortDescription: "Procedimientos quirúrgicos para extraer piezas dentales y tratar problemas complejos.",
    longDescription:
      "La cirugía oral abarca extracciones, injertos óseos y otras intervenciones más avanzadas. Dependiendo del procedimiento, puede requerir anestesia local o sedación. La recuperación varía entre 3 días y 2 semanas, y se recomienda un seguimiento constante para asegurar una correcta cicatrización."
  },
  {
    id: 10,
    icon: faTeethOpen,
    name: "Prostodoncia",
    type: "correctivo",
    shortDescription: "Restaura dientes perdidos mediante prótesis fijas o removibles de alta calidad.",
    longDescription:
      "La prostodoncia se enfoca en reemplazar dientes mediante coronas, puentes o dentaduras. Dependiendo del caso, el tratamiento puede tomar de 2 a 5 sesiones. Los resultados devuelven funcionalidad y estética, y con el debido mantenimiento, las prótesis pueden durar varios años."
  },
  {
    id: 11,
    icon: faXRay,
    name: "Radiografías Dentales",
    type: "diagnostico",
    shortDescription: "Permiten evaluar la estructura interna de dientes y encías para un diagnóstico preciso.",
    longDescription:
      "Las radiografías dentales se utilizan para identificar caries ocultas, daños óseos y problemas de raíz. El procedimiento es rápido, indoloro y dura menos de 15 minutos. Se recomienda su uso únicamente cuando sea necesario para evitar exposiciones innecesarias a radiación."
  },
  {
    id: 12,
    icon: faStethoscope,
    name: "Consulta General",
    type: "diagnostico",
    shortDescription: "Evaluación completa de tu salud dental para detectar y prevenir problemas tempranos.",
    longDescription:
      "La consulta general permite identificar caries, problemas de encías y anomalías bucales. Suele durar entre 20 y 30 minutos y puede incluir radiografías si es necesario. Se recomienda realizar una consulta al menos una vez al año para mantener una buena salud oral."
  },
  {
    id: 13,
    icon: faTooth,
    name: "Tratamiento de Caries",
    type: "correctivo",
    shortDescription: "Elimina caries y restaura la estructura dental con resinas o empastes estéticos.",
    longDescription:
      "El tratamiento de caries consiste en retirar el tejido dañado y restaurar el diente con materiales resistentes y estéticos. El procedimiento suele durar entre 30 y 60 minutos, y si se mantiene una buena higiene, los resultados pueden prolongarse durante muchos años."
  },
  {
    id: 14,
    icon: faTeethOpen,
    name: "Tratamiento de Encías",
    type: "preventivo",
    shortDescription: "Trata inflamaciones, sangrados y retracciones de encías para evitar daños mayores.",
    longDescription:
      "Este tratamiento elimina bacterias y fortalece los tejidos periodontales. Puede requerir una o varias sesiones según la gravedad. Los resultados son visibles a las pocas semanas, y con revisiones periódicas, las encías pueden mantenerse sanas y firmes a largo plazo."
  },
  {
    id: 15,
    icon: faTemperatureLow,
    name: "Tratamiento de Sensibilidad Dental",
    type: "correctivo",
    shortDescription: "Reduce el dolor causado por dientes sensibles ante cambios de temperatura y alimentos.",
    longDescription:
      "Este procedimiento incluye la aplicación de agentes desensibilizantes y selladores. Normalmente se realiza en 1 o 2 sesiones, con resultados inmediatos y duraderos. Para mantener el efecto, es importante cuidar la dieta y evitar cepillados muy agresivos."
  },
  {
    id: 16,
    icon: faTeeth,
    name: "Tratamiento de Bruxismo",
    type: "correctivo",
    shortDescription: "Controla el rechinar de dientes y previene el desgaste dental mediante férulas personalizadas.",
    longDescription:
      "El tratamiento para el bruxismo incluye férulas de descarga y técnicas de relajación mandibular. Requiere una evaluación previa y la colocación de la férula en una cita única. Los resultados son visibles en pocas semanas, mejorando la calidad del sueño y reduciendo el daño dental."
  },
  {
    id: 17,
    icon: faWind,
    name: "Tratamiento de Halitosis",
    type: "preventivo",
    shortDescription: "Elimina el mal aliento mediante técnicas de limpieza y control bacteriano.",
    longDescription:
      "El tratamiento consiste en identificar la causa del mal aliento y eliminarla mediante limpiezas profundas, enjuagues y recomendaciones de higiene. Generalmente se resuelve en 1 o 2 consultas, con efectos duraderos si se mantiene una buena limpieza oral diaria."
  },
  {
    id: 18,
    icon: faTeeth,
    name: "Tratamiento de Dientes Desgastados",
    type: "correctivo",
    shortDescription: "Restaura el esmalte y la forma original de dientes afectados por el desgaste.",
    longDescription:
      "El tratamiento puede incluir reconstrucciones con resina, coronas o carillas según el nivel de daño. Usualmente se realizan entre 1 y 3 sesiones, logrando una sonrisa más uniforme y funcional. Los resultados son duraderos siempre que se eviten hábitos que provoquen desgaste adicional."
  },
  {
    id: 19,
    icon: faShieldAlt,
    name: "Tratamiento de Dientes Astillados",
    type: "correctivo",
    shortDescription: "Repara fracturas pequeñas con materiales estéticos para devolver la forma y función.",
    longDescription:
      "Dependiendo del tamaño del daño, se pueden utilizar resinas, coronas o carillas. El procedimiento se realiza generalmente en una única sesión y ofrece resultados inmediatos. Para conservar la reparación, se recomienda evitar morder objetos duros y asistir a controles regulares."
  },
  {
    id: 20,
    icon: faRandom,
    name: "Tratamiento de Dientes Torcidos",
    type: "correctivo",
    shortDescription: "Corrige dientes desalineados con tratamientos menos invasivos y personalizados.",
    longDescription:
      "Este tratamiento combina técnicas modernas como alineadores invisibles o pequeños ajustes con ortodoncia parcial. Puede durar entre 6 y 18 meses, dependiendo del caso. Los resultados se mantienen estables si se utilizan retenedores y se realizan controles periódicos."
  }
];
