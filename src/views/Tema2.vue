<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Programación de actividades de capacitación

      .row.justify-content-center
        .col.col-lg-12.col-12
          figure.mb-4
            img(src='@/assets/curso/temas/t2/img-01.png', alt='')

      p Una vez realizado el Diagnóstico de Necesidades de Capacitación, el área de gestión del talento humano debe traducir esos hallazgos en un plan de acción concreto, estructurado y financieramente viable. Esta segunda unidad temática aborda los elementos metodológicos y operativos que permiten diseñar, presupuestar y ejecutar un plan de capacitación pertinente, creativo y alineado con las metas de la organización.

      Separador

      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Proceso de capacitación: etapas, técnicas y nuevas tendencias

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #F3F298 !important")
        .bloque-texto-g__img.img-bg-02
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El proceso de capacitación es un ciclo continuo de cinco etapas interrelacionadas que garantizan que la formación responda a necesidades reales y genere impactos medibles en el desempeño. Ignorar alguna de estas etapas es uno de los errores más frecuentes en la gestión de la formación: muchas organizaciones diseñan e implementan programas sin haber realizado un diagnóstico previo, o ejecutan actividades formativas sin evaluarlas posteriormente.

      p.mb-4 Basado en el modelo de Kirkpatrick (1994) y Siliceo (2010) dichas etapas del proceso de capacitación son:

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-03.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            LineaTiempoD.color-acento-botones.especial.mb-4
              .row(numero="1" titulo="Etapa 1. Diagnóstico (DNC)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Identifica brechas de competencia mediante entrevistas, encuestas, observación y análisis del desempeño.
              .row(numero="2" titulo="Etapa 2. Diseño y planeación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Define objetivos de aprendizaje, seleccionar metodologías, asignar responsables, fijar cronograma y presupuesto.
              .row(numero="3" titulo="Etapa 3. Ejecución")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Implementa las actividades formativas conforme al plan: talleres, cursos, #[em e-learning], #[em mentoring], entre otras.
              .row(numero="4" titulo="Etapa 4. Evaluación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Mide el impacto de la capacitación con el modelo Kirkpatrick: reacción, aprendizaje, comportamiento y resultados.
              .row(numero="5" titulo="Etapa 5. Retroalimentación y mejora")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Analiza los resultados, identifica oportunidades de mejora y ajusta el plan para el siguiente ciclo.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Nuevas tendencias en capacitación organizacional

      p.mb-4 El entorno laboral del siglo XXI ha transformado profundamente la manera en que las organizaciones conciben y ejecutan sus procesos de formación. Varias tendencias emergentes están redefiniendo el campo de la capacitación y demandan que los profesionales de talento humano se mantengan actualizados, encontrando:

      .row.justify-content-center.align-items-center(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-04.svg' alt='')
            h4.text-center Aprendizaje adaptativo
            p.text-center Sistemas impulsados por inteligencia artificial que personalizan el contenido y el ritmo del aprendizaje según el desempeño y las preferencias de cada aprendiz.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-05.svg' alt='')
            h4.text-center #[em Mobile learning (m-learning)]
            p.text-center Formación diseñada para dispositivos móviles, que permite al colaborador aprender en cualquier momento y lugar a través de su #[em smartphone] o #[em tablet].
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-06.svg' alt='')
            h4.text-center Realidad virtual y aumentada
            p.text-center Tecnologías inmersivas que permiten simular entornos laborales de alto riesgo o complejos (quirófanos, plantas industriales, pisos de ventas) para entrenar a los colaboradores de forma segura.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-07.svg' alt='')
            h4.text-center #[em Social learning]
            p.text-center Aprendizaje entre pares a través de redes sociales corporativas, foros de discusión y comunidades de práctica digitales.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-08.svg' alt='')
            h4.text-center #[em Microlearning]
            p.text-center Contenidos breves (entre 3 y 7 minutos) focalizados en un único concepto o habilidad, diseñados para ser consumidos en los espacios muertos de la jornada laboral.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-09.svg' alt='')
            h4.text-center #[em Upskilling] y #[em reskilling]
            p.text-center Estrategias para actualizar (#[em upskilling]) o reorientar (#[em reskilling]) las competencias de los colaboradores frente a los cambios tecnológicos y del mercado.

      Separador

      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.2 Comunicación en los procesos de capacitación: definición y clases

      p.mb-4 La comunicación es el tejido conectivo de todo proceso de capacitación. Sin una comunicación efectiva, el conocimiento más valioso puede perderse en la transmisión, generar malentendidos o simplemente no llegar a quienes más lo necesitan. El área de gestión del talento humano debe gestionar la comunicación en tres dimensiones clave en la capacitación:

      .row.mb-4.recurso-caracteristicas-cortas
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t2/img-10.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Antes
                p.text-center.mb-0 Para convocar, motivar e informar.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t2/img-11.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Durante
                p.text-center.mb-0 Para facilitar el aprendizaje y resolver dudas.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t2/img-12.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Después
                p.text-center.mb-0 Para retroalimentar y reforzar los aprendizajes.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Clases de comunicación relevantes para la formación

      p.mb-4 La comunicación en los procesos de formación puede manifestarse de diferentes maneras, según el medio utilizado, el propósito del mensaje y el contexto en el que se desarrolla. Entre las clases más relevantes para la capacitación se encuentran:

      .row.justify-content-center.mb-4
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Comunicación asertiva")
              .col-12.mb-4.mb-md-0
                p.mb-0 Capacidad de expresar ideas, necesidades y opiniones de manera clara, directa y respetuosa, sin agresividad ni pasividad. Es fundamental en la facilitación de talleres y en la retroalimentación del desempeño.
            .row(numero="2" titulo="Comunicación verbal y no verbal")
              .col-12.mb-4.mb-md-0
                p.mb-0 El facilitador que domina su lenguaje corporal, mantiene contacto visual y usa una entonación adecuada genera mayor credibilidad y conexión con el grupo.
            .row(numero="3" titulo="Comunicación escrita")
              .col-12.mb-4.mb-md-0
                p.mb-0 Fundamental para la elaboración de materiales didácticos, correos de convocatoria, manuales y reportes de gestión de la formación.
            .row(numero="4" titulo="Comunicación digital")
              .col-12.mb-4.mb-md-0
                p.mb-0 Gestión de mensajes a través de plataformas LMS, videoconferencias, #[em chats] corporativos y redes sociales internas para mantener la conectividad del aprendiz con el proceso formativo.
            .row(numero="5" titulo="Comunicación organizacional")
              .col-12.mb-4.mb-md-0
                p.mb-0 Flujos de información entre niveles jerárquicos (ascendente, descendente y horizontal) que garantizan que los programas de capacitación sean conocidos, comprendidos y apoyados por toda la organización.
        .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-13.png', alt='')

      p.mb-4 Una estrategia de comunicación bien diseñada para el plan de capacitación debe definir los mensajes clave, los canales más apropiados para cada audiencia, los responsables de la comunicación y los momentos en que se emitirán los mensajes. 

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0 Esta planeación comunicativa aumenta significativamente la tasa de participación y el compromiso de los colaboradores con los programas de formación.

      Separador

      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 Gamificación: concepto y estrategias

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-14.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p.mb-4 La gamificación es la aplicación de elementos, mecánicas y dinámicas propias de los juegos en contextos que no son lúdicos, con el propósito de incrementar la motivación, el compromiso y el aprendizaje de las personas. En el ámbito de la capacitación organizacional, la gamificación ha demostrado ser una estrategia poderosa para aumentar la participación, reducir la deserción y hacer que el proceso de aprendizaje resulte más atractivo, memorable y efectivo.
            .cajon.cajon.C02.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Kapp (2012) definió la gamificación como el uso de la mecánica, la estética y el pensamiento de juego para involucrar a las personas, motivar la acción, promover el aprendizaje y resolver problemas. Esta definición resalta que la gamificación no se limita a añadir puntos o insignias a un curso: implica diseñar toda una experiencia que activa la motivación intrínseca del aprendiz.

      p.mb-4 Con base en lo anterior, la siguiente tabla resume los principales elementos de la gamificación y su aplicación en los procesos de capacitación organizacional:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 5.
            span Elementos de gamificación y su aplicación en programas de capacitación
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Elemento de gamificación
                  th(style="width: 16%; background-color: #8FED42;") Descripción
                  th(style="width: 16%; background-color: #8FED42;") Aplicación en capacitación
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Puntos.]
                  td(style="background-color: #FBF7F1;") Sistema de acumulación de puntos por completar actividades, superar retos o responder correctamente.
                  td(style="background-color: #FBF7F1;") El aprendiz acumula puntos por entregar evidencias a tiempo y obtener buenas calificaciones.
                tr(data-aos="fade-right")
                  td #[b Insignias / #[em badges].]
                  td Reconocimientos digitales que certifican el logro de una competencia o habilidad específica.
                  td Insignia “Experto en DNC” al aprobar el módulo de diagnóstico de necesidades.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Tablas de clasificación.]
                  td(style="background-color: #FBF7F1;") Ranqueo de participantes según su desempeño, fomentando la competencia sana.
                  td(style="background-color: #FBF7F1;") Tabla de los diez mejores aprendices del mes visible en el LMS.
                tr(data-aos="fade-right")
                  td #[b Retos y misiones]
                  td Actividades con un nivel de dificultad progresivo que mantienen la motivación del aprendiz.
                  td Misión: diseñar una DNC real para una empresa del entorno antes del viernes.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Narrativa / #[em storytelling].]
                  td(style="background-color: #FBF7F1;") Integración de una historia o contexto motivador que da sentido a las actividades formativas.
                  td(style="background-color: #FBF7F1;") El aprendiz asume el rol de consultor de RRHH que debe salvar a una empresa en crisis.
            figcaption Nota. Basado en Kapp (2012) y Werbach y Hunter (2012).

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Estrategias de gamificación en la formación organizacional

      p.mb-4 Para implementar la gamificación de manera efectiva en un programa de capacitación, se recomienda seguir una estrategia estructurada que incluya los siguientes pasos:

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-15.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            LineaTiempoD.color-acento-botones.especial.mb-4
              .row(numero="1" titulo="Definir los objetivos de aprendizaje")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Establecer con claridad los resultados de aprendizaje que se desean alcanzar mediante la estrategia gamificada, asegurando que las dinámicas de juego estén alineadas con las competencias y contenidos que se pretenden desarrollar.
              .row(numero="2" titulo="Identificar el perfil de los participantes")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Analizar las características y motivaciones de los participantes para determinar qué elementos generan mayor interés, como el reconocimiento, la competencia, la exploración, la colaboración o la superación de retos.
              .row(numero="3" titulo="Seleccionar los elementos de gamificación")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Elegir las mecánicas, dinámicas y recursos de juego más adecuados, como puntos, niveles, insignias, retos o narrativas, de acuerdo con los objetivos de aprendizaje y el perfil de los participantes.
              .row(numero="4" titulo="Diseñar la experiencia de aprendizaje")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Integrar los contenidos formativos con las mecánicas de juego de manera coherente, de modo que cada actividad favorezca la participación, el compromiso y el logro de los resultados de aprendizaje.
              .row(numero="5" titulo="Implementar y realizar pruebas piloto")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Desplegar la estrategia en el LMS o en la plataforma disponible, realizando previamente una prueba piloto que permita identificar oportunidades de mejora antes de su aplicación general.
              .row(numero="6" titulo="Evaluar y mejorar la estrategia")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Medir el impacto de la gamificación en aspectos como la participación, el desempeño, el aprendizaje y la satisfacción de los participantes, utilizando los resultados para realizar ajustes y fortalecer futuras implementaciones.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0 La gamificación debe enriquecer la experiencia de aprendizaje, no reemplazar la calidad del contenido formativo. Un programa mal diseñado, pero gamificado no se vuelve efectivo solo por tener puntos e insignias.

      Separador

      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4 Didáctica: concepto y tipos

      p.mb-4 La didáctica es la ciencia que estudia los procesos de enseñanza-aprendizaje y desarrolla los métodos, estrategias y técnicas que permiten que el conocimiento sea transmitido y apropiado de manera efectiva. Para el área de gestión del talento humano, la didáctica aporta los fundamentos teórico-prácticos que orientan el diseño de las actividades formativas y la selección de los recursos pedagógicos más pertinentes.

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #F3F298 !important")
        .bloque-texto-g__img.img-bg-16
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") Una didáctica bien fundamentada parte del principio de que el facilitador no es el único portador del conocimiento: su rol es crear las condiciones para que el aprendiz construya su propio saber a partir de la interacción con los contenidos, con sus pares y con el entorno laboral. Este enfoque constructivista es especialmente relevante en la formación de adultos, donde la experiencia previa es un recurso pedagógico de primer orden.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Tipos de estrategias didácticas

      p.mb-4 Para favorecer el logro de los resultados de aprendizaje, es posible emplear diferentes estrategias didácticas que promueven la participación, la construcción del conocimiento y la aplicación práctica de los contenidos. Entre las principales se encuentran:

      .row.justify-content-center.align-items-center(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-17.svg' alt='')
            h4.text-center Exposición magistra
            p.text-center Presentación estructurada del facilitador sobre un tema específico. Es eficiente para transmitir conceptos de manera rápida, pero debe complementarse con actividades participativas para garantizar el aprendizaje.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-18.svg' alt='')
            h4.text-center Aprendizaje basado en problemas
            p.text-center Los participantes analizan y resuelven situaciones problemáticas reales o simuladas que requieren la aplicación de los conceptos aprendidos. Fortalece el pensamiento crítico y la transferencia del aprendizaje.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-19.svg' alt='')
            h4.text-center Estudio de caso
            p.text-center Análisis detallado de una situación organizacional real o ficticia para identificar causas, consecuencias y posibles soluciones. Permite contextualizar los conceptos en situaciones próximas al entorno del participante.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-20.svg' alt='')
            h4.text-center #[em Role-playing] o simulación
            p.text-center Los participantes asumen roles y desarrollan situaciones laborales en un entorno controlado. Muy efectivo para desarrollar habilidades comunicativas, de negociación y liderazgo.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-21.svg' alt='')
            h4.text-center Trabajo colaborativo
            p.text-center Actividades diseñadas para que los participantes resuelvan retos, construyan conocimiento o creen productos en equipo, fomentando la cooperación y el aprendizaje entre pares.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-22.svg' alt='')
            h4.text-center Aprendizaje basado en proyectos
            p.text-center Los participantes diseñan y ejecutan un proyecto real que aplica los aprendizajes del programa. Genera evidencias concretas de las competencias desarrolladas.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-23.svg' alt='')
            h4.text-center #[em Flipped classroom] (aula invertida)
            p.text-center Los contenidos teóricos se estudian de manera autónoma antes de la sesión y el tiempo de clase se destina a la práctica, la discusión y la resolución de problemas.

      Separador

      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.5 Metodología del plan de capacitación

      p.mb-4 La metodología es el conjunto de principios, enfoques, etapas y herramientas que orientan el diseño e implementación del plan de capacitación. Una metodología bien definida garantiza coherencia entre el diagnóstico de necesidades, los objetivos de aprendizaje, las estrategias formativas y los mecanismos de evaluación.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Componentes de la metodología
      
      p.mb-4 Los componentes de la metodología permiten estructurar y orientar el plan de capacitación de manera organizada, definiendo los elementos necesarios para su diseño, implementación, seguimiento y evaluación. Estos componentes son:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-10
          LineaTiempoD.color-acento-botones.especial.mb-4
            .row(numero="1" titulo="Objetivos")
              .col-12.mb-4.mb-md-0
                p.mb-0 Enunciados claros y medibles que describen lo que el participante será capaz de hacer al finalizar el proceso formativo. Los objetivos deben ser SMART: específicos, medibles, alcanzables, relevantes y con tiempo definido.
            .row(numero="2" titulo="Metas")
              .col-12.mb-4.mb-md-0
                p.mb-0 Resultados cuantificables a alcanzar dentro de un período definido. Ejemplo: capacitar al 90 % del personal operativo en normas de SST antes del 30 de junio.
            .row(numero="3" titulo="Alcance")
              .col-12.mb-4.mb-md-0
                p.mb-0 Definición del grupo poblacional beneficiado por el plan, las áreas funcionales involucradas y los temas que serán abordados.
            .row(numero="4" titulo="Etapas del plan")
              .col-12.mb-4.mb-md-0
                p.mb-0 Secuencia ordenada de fases que van desde el diagnóstico hasta la evaluación del impacto, pasando por el diseño, la ejecución y el seguimiento.
            .row(numero="5" titulo="Instalación del comité de capacitación")
              .col-12.mb-4.mb-md-0
                p.mb-0 Grupo responsable de liderar, coordinar y hacer seguimiento al plan. Generalmente incluye representantes del área de GTH, los jefes de área y la alta dirección.
            .row(numero="6" titulo="Marco estratégico institucional")
              .col-12.mb-4.mb-md-0
                p.mb-0 Alineación del plan de capacitación con la misión, visión, valores y objetivos estratégicos de la organización.
            .row(numero="7" titulo="Competencias necesarias")
              .col-12.mb-4.mb-md-0
                p.mb-0 Identificación de las competencias que el plan busca desarrollar, con base en el perfil de cargo y el DNC realizado.
            .row(numero="8" titulo="Financiamiento")
              .col-12.mb-4.mb-md-0
                p.mb-0 Fuentes de recursos para el plan (presupuesto propio de la empresa, SENA, cajas de compensación, cooperación internacional, aportes parafiscales).

      Separador

      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.6 Presupuesto para el plan de capacitación

      p.mb-4 El presupuesto es la herramienta financiera que traduce el plan de capacitación en términos monetarios, permitiendo planificar, controlar y evaluar el uso de los recursos destinados a la formación. Un presupuesto bien elaborado no solo facilita la ejecución del plan, sino que también le da legitimidad ante la dirección de la organización al demostrar que la inversión en formación es racional, transparente y coherente con las necesidades identificadas.

      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t2/img-25.svg', alt='')
              .col-lg-10.col-12
                p La elaboración del presupuesto de capacitación debe seguir un proceso estructurado que incluya la identificación de todos los rubros de gasto, la cotización de los costos reales, la definición de prioridades y la asignación de responsables por cada ítem. Es recomendable incluir un porcentaje de imprevistos (generalmente entre el 5 % y el 10 % del total) para cubrir eventualidades no previstas.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-24.png', alt='')

      p.mb-4 A continuación, se presentan los principales rubros que deben considerarse en la elaboración del presupuesto de un plan de capacitación, indicando el tipo de gasto, su descripción y un ejemplo de aplicación. Esta clasificación facilita la identificación y organización de los recursos financieros necesarios para garantizar una adecuada ejecución del plan:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 6.
            span Rubros del presupuesto de un plan de capacitación
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Rubro
                  th(style="width: 16%; background-color: #8FED42;") Tipo de gasto
                  th(style="width: 16%; background-color: #8FED42;") Descripción
                  th(style="width: 16%; background-color: #8FED42;") Ejemplo
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Honorarios docentes.]
                  td(style="background-color: #FBF7F1;") Gasto directo.
                  td(style="background-color: #FBF7F1;") Pago a instructores externos o internos que imparten la formación.
                  td(style="background-color: #FBF7F1;") Contrato por hora cátedra a experto en liderazgo.
                tr(data-aos="fade-right")
                  td #[b Materiales y logística.]
                  td Gasto directo.
                  td Impresión de material didáctico, alquiler de espacios, equipos audiovisuales.
                  td Videobeam, carteleras, libretas.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Plataformas tecnológicas]
                  td(style="background-color: #FBF7F1;") Gasto directo.
                  td(style="background-color: #FBF7F1;") Licencias de LMS, herramientas de videoconferencia, #[em software] de gamificación.
                  td(style="background-color: #FBF7F1;") Suscripción mensual a plataforma de e-learning.
                tr(data-aos="fade-right")
                  td #[b Viáticos y transporte.]
                  td Gasto indirecto.
                  td Desplazamiento de participantes o facilitadores a sedes fuera del lugar habitual.
                  td Transporte y hospedaje para formación regional.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Imprevistos (10 %).]
                  td(style="background-color: #FBF7F1;") Reserva.
                  td(style="background-color: #FBF7F1;") Porcentaje del presupuesto total destinado a cubrir contingencias no previstas.
                  td(style="background-color: #FBF7F1;") Ajuste por incremento de tarifas o asistentes adicionales.
            figcaption Nota. Basado en Siliceo (2010) y Dessler y Varela (2017)

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Fuentes de financiamiento

      p.mb-4 En Colombia, las organizaciones cuentan con diversas fuentes para financiar sus programas de capacitación, entre ellas:

      .row.justify-content-center.align-items-center(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-26.svg' alt='')
            h4.text-center SENA
            p.text-center A través de sus programas de formación complementaria, el SENA ofrece capacitación gratuita para trabajadores de empresas vinculadas. Las cuotas de aporte parafiscal (0,5 % de la nómina) financian parcialmente estos servicios.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-27.svg' alt='')
            h4.text-center Cajas de compensación familiar
            p.text-center Ofrecen programas de formación con tarifas subsidiadas para los trabajadores afiliados y sus familias. Además, pueden brindar cursos y talleres orientados al desarrollo de competencias laborales y personales.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-28.svg' alt='')
            h4.text-center Presupuesto propio de la empresa
            p.text-center Son los recursos que la organización destina directamente a la capacitación de sus colaboradores. Permiten financiar cursos, talleres, seminarios, materiales y otras actividades previstas en el plan de capacitación.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-29.svg' alt='')
            h4.text-center Cooperación internacional
            p.text-center Algunas empresas acceden a programas de formación financiados por organismos internacionales como el BID, el Banco Mundial o agencias de cooperación bilateral.
          .tarjeta.tarjeta--C02.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t2/img-30.svg' alt='')
            h4.text-center Fondos de bienestar y cofinanciación
            p.text-center Son recursos destinados a apoyar actividades de capacitación mediante acuerdos entre la empresa y los trabajadores. Pueden utilizarse para financiar cursos, certificaciones y otras actividades de desarrollo profesional.

      Separador

      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.7 Cronograma del plan de capacitación: definición, tipos y elaboración

      p.mb-4 El cronograma es la herramienta de planeación temporal que organiza las actividades del plan de capacitación en el tiempo, asignando fechas, responsables y recursos para cada acción formativa. Sin un cronograma bien estructurado, el plan de capacitación corre el riesgo de quedarse en el papel o de ejecutarse de manera desorganizada, generando conflictos con la operación normal de la empresa.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Tipos de cronograma
      
      p.mb-4 Los cronogramas permiten organizar y visualizar de manera clara las actividades, responsables y tiempos establecidos para la ejecución del plan de capacitación. Dependiendo de las necesidades de la organización y del nivel de detalle requerido, se pueden utilizar diferentes tipos de cronogramas:

      .tarjeta--container.row.mb-4
        .col-md.tarjeta.color-secundario.mostaza.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t2/img-31.svg', alt='')          
          h3.text-center Cronograma de Gantt
          p.mb-0 Representación gráfica de barras horizontales que muestra la duración de cada actividad en el tiempo. Es el tipo más utilizado en la gestión de proyectos de capacitación por su claridad visual.

        .col-md.tarjeta.color-acento-botones.naranja.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t2/img-32.svg', alt='')          
          h3.text-center.parrafo Cronograma por fases
          p.mb-0.parrafo Organiza las actividades en grandes bloques (diagnóstico, diseño, ejecución, evaluación), cada uno con sus propias acciones y plazos.

        .col-md.tarjeta.color-acento-contenido.verde.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t2/img-33.svg', alt='')          
          h3.text-center Cronograma mensual o anual
          p.mb-0 Distribuye todas las actividades formativas del año o del semestre en un calendario, facilitando la coordinación con las demás áreas de la empresa.

      p.mb-4 Igualmente, los elementos que se deben tener en cuenta para que un cronograma sea efectivo son:

      .row.justify-content-center.figura-flujo-ajuste(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Elementos de un cronograma de capacitación
        .col-10
          figure.desktop.mb-0
            img(src='@/assets/curso/temas/t2/figura-1-1.svg', alt='Figura 2 que presenta los principales elementos que deben considerarse en un cronograma de capacitación, incluyendo el nombre de la actividad formativa, las fechas de inicio y finalización, la duración, la modalidad, el responsable de la ejecución, el grupo o área beneficiada y el indicador de cumplimiento.')
        .col-12 
          figure.movil.mb-0
            img(src='@/assets/curso/temas/t2/figura-1-2.svg', alt='Figura 2 que presenta los principales elementos que deben considerarse en un cronograma de capacitación, incluyendo el nombre de la actividad formativa, las fechas de inicio y finalización, la duración, la modalidad, el responsable de la ejecución, el grupo o área beneficiada y el indicador de cumplimiento.')

      Separador

      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.8 Recursos empresariales para la capacitación

      p.mb-4 La ejecución exitosa de un plan de capacitación requiere de una gestión eficiente de los recursos disponibles en la organización. Estos recursos pueden clasificarse en cuatro grandes categorías:

      .row.mb-4
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b Recursos humanos
            p.text-center Facilitadores internos y externos, coordinadores del programa, jefes de área como coformadores y mentores.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b Recursos físicos
            p.text-center Espacios físicos adecuados (salas de capacitación, auditorios, laboratorios), equipos audiovisuales, computadores e impresoras.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b Recursos tecnológicos
            p.text-center Plataformas LMS, herramientas de videoconferencia (Zoom, Teams, Meet), software de diseño instruccional (Articulate, Canva, Genially) y repositorios digitales.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b Recursos financieros
            p.text-center Presupuesto asignado para la formación, mecanismos de control del gasto y herramientas para la rendición de cuentas ante la dirección.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C02.color-primario.px-4.py-3
            p.mb-0 La gestión inteligente de los recursos disponibles es una competencia clave del área de talento humano. En muchas organizaciones, especialmente en las pymes, los recursos son limitados, lo que exige creatividad y eficiencia: aprovechar los conocimientos internos, utilizar herramientas gratuitas de alta calidad y explorar alianzas con el SENA, las cajas de compensación o las universidades son estrategias que permiten maximizar el impacto de la formación con presupuestos ajustados.
      
      Separador

      #t_2_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.9 El plan de capacitación: definición, tipos, herramientas y estructuración

      p.mb-4 El plan de capacitación es el documento maestro que integra todos los elementos del proceso de formación: el diagnóstico de necesidades, los objetivos de aprendizaje, las actividades formativas, los recursos necesarios, el cronograma y los mecanismos de evaluación. Es el instrumento que operacionaliza la política de desarrollo humano de la organización y sirve de hoja de ruta para todos los actores involucrados en la formación.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Tipos de planes de capacitación

      .row.justify-content-center.mb-4
        .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-34.svg', alt='')
        .col.col-lg-11.col-12.order-lg-2.order-2
          p.mb-0(data-aos="fade-down") Los planes de capacitación pueden estructurarse de acuerdo con las necesidades de formación de la organización, el perfil de los colaboradores y los objetivos que se buscan alcanzar. Cada tipo de plan responde a un propósito específico y permite orientar las actividades de capacitación de manera organizada y se destacan los siguientes:
      
      .row.justify-content-center.mb-4
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
            .row(titulo="Plan anual de capacitación")
              .col-12.mb-0.mb-md-0
                p.mb-0 Consolida todas las actividades formativas programadas para el año calendario, priorizadas según el DNC y el presupuesto disponible. Permite organizar fechas, responsables, recursos y objetivos de las diferentes acciones de capacitación.
            .row(titulo="Plan de inducción")
              .col-12.mb-0.mb-md-0
                p.mb-0 Programa específico para los nuevos colaboradores, diseñado para garantizar una integración efectiva a la organización. Incluye información sobre la cultura institucional, funciones del cargo, normas, políticas y procedimientos básicos.
            .row(titulo="Plan de formación por competencias")
              .col-12.mb-0.mb-md-0
                p.mb-0 Diseñado a partir de las brechas de competencia identificadas en la evaluación del desempeño, con objetivos formativos específicos para cada cargo o grupo. Busca fortalecer los conocimientos, habilidades y actitudes requeridos para mejorar el desempeño laboral.
            .row(titulo="Plan de entrenamiento técnico")
              .col-12.mb-0.mb-md-0
                p.mb-0 Orientado al desarrollo de habilidades operativas específicas para roles técnicos o especializados. Incluye prácticas y actividades relacionadas con el uso de herramientas, equipos, procedimientos y tecnologías necesarias para desempeñar correctamente las funciones del cargo.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-35.png', alt='')

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-36.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            .row.align-items-center.mb-4(data-aos="zoom-in")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-1
                  h3.mb-0.ms-3 Estructura básica del plan de capacitación
            p Un plan de capacitación bien estructurado incluye los siguientes componentes:
            ul.lista-ul--color.mb-0
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Presentación y justificación: contexto organizacional y razones que sustentan el plan.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Objetivos del plan: general y específicos.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Diagnóstico de necesidades: resumen del DNC que origina el plan.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Poblaciones beneficiadas: áreas, cargos y número de colaboradores.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Actividades formativas: descripción, modalidad, duración y metodología de cada acción.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Cronograma: distribución temporal de todas las actividades.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Presupuesto: rubros, costos y fuentes de financiamiento.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Indicadores de seguimiento: métricas para medir el avance y el impacto del plan.
              li 
                <i class="fa-solid fa-circle-user"></i>
                | Responsables: equipo encargado de la ejecución y el seguimiento.

      p.mb-4 La siguiente tabla presenta un ejemplo de cómo pueden organizarse los principales elementos de un plan de capacitación, relacionando cada actividad formativa con las competencias que se busca desarrollar, la modalidad, la duración y el responsable de su ejecución. Esta estructura facilita la planificación, asignación de responsabilidades y seguimiento de las acciones formativas:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 7.
            span Ejemplo de estructura de un plan de capacitación organizacional
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Actividad formativa
                  th(style="width: 16%; background-color: #8FED42;") Competencia a desarrollar
                  th(style="width: 16%; background-color: #8FED42;") Modalidad
                  th(style="width: 16%; background-color: #8FED42;") Horas
                  th(style="width: 16%; background-color: #8FED42;") Responsable
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Inducción corporativa.]
                  td(style="background-color: #FBF7F1;") Conocimiento institucional, cultura organizacional.
                  td(style="background-color: #FBF7F1;") Virtual (LMS)
                  td(style="background-color: #FBF7F1;") 8
                  td(style="background-color: #FBF7F1;") GTH
                tr(data-aos="fade-right")
                  td #[b DNC y análisis de cargos.]
                  td Diagnóstico, análisis crítico, toma de decisiones.
                  td #[em Blended]
                  td 12
                  td GTH / jefes
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Liderazgo y comunicación.]
                  td(style="background-color: #FBF7F1;") Comunicación asertiva, liderazgo situacional.
                  td(style="background-color: #FBF7F1;") Presencial
                  td(style="background-color: #FBF7F1;") 16
                  td(style="background-color: #FBF7F1;") Consultor externo
                tr(data-aos="fade-right")
                  td #[b Seguridad y salud en el trabajo.]
                  td Prevención de riesgos, uso de EPP, protocolos.
                  td Virtual / práctica
                  td 8
                  td COPASST
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Herramientas digitales.]
                  td(style="background-color: #FBF7F1;") Alfabetización digital, manejo de plataformas.
                  td(style="background-color: #FBF7F1;") Virtual (LMS)
                  td(style="background-color: #FBF7F1;") 10
                  td(style="background-color: #FBF7F1;") GTH / TI

      .row.justify-content-center
        .col-lg-8.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          .row.mb-0
            .col-lg-auto.d-none.d-lg-block.svg-podcast-console
              figure
                img(src='@/assets/curso/temas/t2/img-38.svg', alt='')
            .col-lg-10.col-12
              p.mb-4 Con el propósito de integrar y aplicar los conceptos abordados en este componente formativo, se presenta un pódcast en el que se desarrolla un caso práctico relacionado con la gestión del desarrollo del talento humano. De esta manera, el caso permitirá relacionar los fundamentos estudiados con una situación propia del contexto organizacional:
            .bg-color-8.tarjeta
              .p-4.p-md-3
                .row.justify-content-center.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0.d-none.d-lg-block
                    figure
                      img(src="@/assets/curso/temas/t2/img-39.svg", data-aos="zoom-in")
                  .col-lg.mb-3.mb-lg-0
                    h4.titulo-podcast-audio.mb-3 Pódcast

                    TarjetaAudio.audio-custom.color-secundario.bg-color-white.mb-3(
                      texto="Del diagnóstico a la acción: una capacitación que transforma el desempeño"
                      tiempo
                      :audio="require_src('@/assets/componentes/audios/podcast_diagnostico_accion.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t2/img-37.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',

  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    intervaloAudioNaranja: null,
  }),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
      this.actualizarBarraAudioNaranja()

      this.intervaloAudioNaranja = setInterval(() => {
        this.actualizarBarraAudioNaranja()
      }, 200)
    })
  },

  updated() {
    this.$aosRefresh()
    this.actualizarBarraAudioNaranja()
  },

  beforeUnmount() {
    clearInterval(this.intervaloAudioNaranja)
  },

  methods: {
    actualizarBarraAudioNaranja() {
      this.$nextTick(() => {
        const rangos = document.querySelectorAll(
          '.audio-custom input[type="range"]',
        )

        rangos.forEach((range) => {
          const min = Number(range.min || 0)
          const max = Number(range.max || 100)
          const value = Number(range.value || 0)

          if (max === min) return

          const porcentaje = ((value - min) / (max - min)) * 100

          range.style.setProperty('--progreso-audio', `${porcentaje}%`)
        })
      })
    },
  },
}
</script>

<style lang="sass"></style>
