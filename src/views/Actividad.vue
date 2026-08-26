<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío sobre indicadores de gestión y fundamentos de la administración.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el grado de apropiación de los conceptos clave sobre fundamentos de la administración, planeación estratégica e indicadores de gestión, teniendo en cuenta la gestión del talento humano.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la capacitación dentro de una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una actividad aislada de integración laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un proceso planificado para desarrollar competencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un mecanismo exclusivo de evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una estrategia para seleccionar personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La capacitación es un proceso planificado que fortalece las competencias de los colaboradores y contribuye al logro de los objetivos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito principal del Diagnóstico de Necesidades de Capacitación (DNC)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir los salarios de los colaboradores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionar nuevos proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar el presupuesto anual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Identificar brechas de competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El DNC identifica las brechas entre las competencias actuales y las requeridas para desempeñar eficazmente un cargo. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica de DNC resulta útil cuando se requiere obtener información cualitativa profunda sobre el desempeño individual?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entrevista.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Encuesta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Grupo focal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Análisis documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La entrevista permite profundizar cualitativamente en el desempeño individual y en sus posibles brechas de competencia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica de DNC permite analizar el puesto de trabajo en tiempo real?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Entrevista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Grupo focal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Observación directa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Análisis documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La observación directa permite identificar brechas mientras se analiza el desempeño en el puesto de trabajo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué documento consolida y prioriza las brechas de competencia identificadas mediante el DNC?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cronograma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El Inventario de Necesidades de Capacitación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El presupuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El plan de inducción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El INC consolida y prioriza las necesidades identificadas y permite responder qué, quién, cuándo y cómo capacitar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál de las siguientes es una competencia organizacional?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Manejo de un <em>software</em> específico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uso de equipos especializados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Liderazgo técnico de un proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trabajo en equipo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El trabajo en equipo hace parte de las competencias organizacionales que deben estar presentes en los colaboradores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué caracteriza al enfoque por competencias?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se centra únicamente en conocimientos teóricos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evalúa solo la experiencia laboral.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alinea capacidades con los objetivos organizacionales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se aplica exclusivamente a cargos directivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El enfoque por competencias busca desarrollar y evaluar conocimientos, habilidades y actitudes alineados con los objetivos de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Según el modelo VARK, ¿qué estilo de aprendizaje se relaciona con el uso de imágenes, gráficos y mapas conceptuales?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visual.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Auditivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Kinestésico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lector/escritor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El aprendiz visual procesa mejor la información mediante imágenes, gráficos, mapas conceptuales y otros recursos visuales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica corresponde al aprendizaje de los adultos según la andragogía?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evitar relacionar los contenidos con experiencias previas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Depender siempre de la orientación del instructor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Priorizar únicamente la memorización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Percibir una aplicación práctica de lo aprendido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Los adultos aprenden mejor cuando encuentran utilidad y aplicación práctica a lo aprendido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué norma establece la obligatoriedad de un programa de capacitación en Seguridad y Salud en el Trabajo para los trabajadores?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ley 1562 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 1072 de 2015.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ley 9 de 1979.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'ISO 45001:2018.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El Decreto 1072 de 2015 establece la obligatoriedad de la formación en SST dentro de la gestión organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es la primera etapa del proceso de capacitación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecución.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evaluación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diagnóstico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Retroalimentación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El proceso inicia con el diagnóstico de necesidades de capacitación, que permite identificar las brechas existentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué se realiza durante la etapa de evaluación de la capacitación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se mide su impacto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se seleccionan los participantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se establecen los cargos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se identifican los proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La evaluación permite medir el impacto de la capacitación considerando reacción, aprendizaje, comportamiento y resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de las siguientes es una tendencia actual de capacitación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Archivo físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Memorandos impresos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aprendizaje adaptativo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evaluación manual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El aprendizaje adaptativo utiliza tecnologías para personalizar el contenido y el ritmo de formación según el desempeño y las preferencias del aprendiz.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza al <em>microlearning</em>?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cursos extensos de formación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contenidos breves y focalizados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Formación exclusivamente presencial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programas sin objetivos definidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El <em>microlearning</em> utiliza contenidos breves, generalmente de 3 a 7 minutos, centrados en un concepto o habilidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es uno de los propósitos de la gamificación en la capacitación?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la motivación y el compromiso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar las actividades prácticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir todos los procesos de evaluación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación de los aprendices.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La gamificación incorpora elementos de los juegos para favorecer la motivación, el compromiso y el aprendizaje.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué característica debe tener un objetivo dentro de la metodología de un plan de capacitación?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser general y difícil de medir.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carecer de un plazo definido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser específico y medible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depender únicamente del presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los objetivos deben ser claros y medibles, siguiendo características SMART: específicos, medibles, alcanzables, relevantes y definidos en el tiempo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la función principal del presupuesto de capacitación?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar únicamente los salarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Traducir el plan en términos monetarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir los estilos de aprendizaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar las competencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El presupuesto permite planificar, controlar y evaluar los recursos financieros destinados a la formación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué información organiza principalmente el cronograma de capacitación?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo los costos de formación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las competencias individuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las evaluaciones de desempeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fechas, responsables y recursos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El cronograma organiza temporalmente las actividades y asigna fechas, responsables y recursos para cada acción formativa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de los siguientes elementos hace parte de un plan de capacitación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indicadores de seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registro de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inventario de productos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Balance financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los indicadores permiten realizar seguimiento al avance y al impacto del plan de capacitación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Una empresa identifica que sus colaboradores presentan una brecha en el manejo de herramientas digitales. ¿Qué debería hacer inicialmente?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar inmediatamente un curso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprar nuevos equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar un diagnóstico de necesidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modificar el cronograma anual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Antes de diseñar y ejecutar una capacitación es necesario diagnosticar las necesidades y determinar las brechas existentes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
