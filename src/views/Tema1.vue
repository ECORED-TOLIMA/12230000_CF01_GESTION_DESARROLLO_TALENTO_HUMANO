<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Identificación de necesidades de capacitación

      .row.justify-content-center
        .col.col-lg-12.col-12
          figure.mb-4
            img(src='@/assets/curso/temas/t1/img-01.png', alt='')

      p Antes de diseñar cualquier programa de formación, es indispensable comprender por qué se necesita capacitar, a quién se va a capacitar y qué competencias se busca desarrollar. Este primer gran eje temático aborda los conceptos fundamentales de la capacitación, el aprendizaje y el diagnóstico de necesidades, estableciendo las bases conceptuales y metodológicas que orientan todo proceso de desarrollo humano en una organización.
        
      Separador

      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1. Capacitación: concepto, acciones y tipos
      
      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img-03.svg', alt='')
              .col-lg-10.col-12
                p La capacitación es el proceso planificado e intencionado mediante el cual una organización provee a sus colaboradores los conocimientos, habilidades, actitudes y valores necesarios para desempeñar sus funciones con eficacia, adaptarse a los cambios del entorno y contribuir al logro de los objetivos estratégicos. 
                p No se trata simplemente de realizar cursos o talleres: la capacitación es un subsistema integrado a la gestión del talento humano que responde a necesidades diagnosticadas, sigue una metodología estructurada y se evalúa en función de su impacto.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-02.png', alt='')

      p.mb-4 Según Chiavenato (2017), la capacitación es un proceso educativo a corto plazo, aplicado de manera sistemática y organizada, por medio del cual las personas adquieren conocimientos, desarrollan habilidades y competencias en función de objetivos definidos. Esta definición resalta tres elementos esenciales:
      
      .row.mb-4.recurso-caracteristicas-cortas
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t1/img-04.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Sistemática
                p.text-center.mb-0 Corresponde a un proceso.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t1/img-05.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Organizada
                p.text-center.mb-0 Es coherente con una planeación.
        .col-lg-4.col-md-6.col-12.mb-4.mb-lg-0
          .tarjeta-avatar.recurso-caracteristicas-cortas__item
            img(src='@/assets/curso/temas/t1/img-06.svg' alt='')
            .tarjeta.color-primario
              .p-4
                h4.text-center Orientada a objetivos
                p.text-center.mb-0 Tiene un propósito claro y medible.
      
      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Acciones de capacitación

      p.mb-4 Las acciones de capacitación son el conjunto de actividades formativas concretas a través de las cuales se operacionaliza el proceso de aprendizaje. Estas acciones pueden ser muy diversas en su forma, duración y modalidad, pero todas comparten el propósito de fortalecer las competencias de los colaboradores. Entre las principales acciones de capacitación se encuentran:

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-07.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            LineaTiempoD.color-acento-botones.especial.mb-4
              .row(numero="1" titulo="Cursos y talleres")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Actividades estructuradas con un programa definido, facilitador, material didáctico y evaluación. Pueden ser presenciales, virtuales o mixtos.
              .row(numero="2" titulo="Entrenamiento en el puesto de trabajo (<em>on the job training</em>)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Aprendizaje que ocurre directamente en el lugar de trabajo, bajo la guía de un compañero experto o un jefe inmediato.
              .row(numero="3" titulo="<em>Mentoring</em> y <em>coaching</em>")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Procesos de acompañamiento personalizado en los que un mentor o <em>coach</em> con mayor experiencia guía el desarrollo profesional del colaborador.
              .row(numero="4" titulo="Rotación de puestos")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Estrategia en la que el colaborador ocupa temporalmente diferentes cargos o funciones para ampliar su visión organizacional y desarrollar nuevas competencias.
              .row(numero="5" titulo="Comunidades de práctica")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Grupos de colaboradores que comparten conocimiento, experiencias y buenas prácticas alrededor de un tema específico de interés común.
              .row(numero="6" titulo="<em>E-learning</em> y <em>microlearning</em>")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Modalidades de aprendizaje digital que aprovechan plataformas tecnológicas, videos cortos, infografías y recursos interactivos para facilitar el aprendizaje en cualquier momento y lugar.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Tipos de capacitación

      p.mb-4 La capacitación puede clasificarse de múltiples maneras según el criterio que se utilice. La siguiente tabla presenta los tipos más relevantes en el contexto de la gestión del talento humano:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 1.
            span Tipos de capacitación y su aplicación en las organizaciones
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Tipo de capacitación
                  th(style="width: 16%; background-color: #8FED42;") Descripción
                  th(style="width: 16%; background-color: #8FED42;") Ejemplo aplicado
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Inducción.]
                  td(style="background-color: #FBF7F1;") Proceso mediante el cual el nuevo colaborador conoce la organización, sus procesos, cultura, normas y el equipo de trabajo.
                  td(style="background-color: #FBF7F1;") Recorrido virtual por las instalaciones, presentación del equipo y lectura del reglamento interno.
                tr(data-aos="fade-right")
                  td #[b Capacitación técnica.]
                  td Formación orientada al desarrollo de habilidades específicas del cargo o del área funcional.
                  td Taller de manejo de <em>software</em> ERP para el área contable.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Formación gerencial.]
                  td(style="background-color: #FBF7F1;") Programas dirigidos a líderes de equipos para fortalecer competencias de dirección, planeación y toma de decisiones.
                  td(style="background-color: #FBF7F1;") Diplomado en liderazgo estratégico y gestión del cambio.
                tr(data-aos="fade-right")
                  td #[b Desarrollo de habilidades blandas.]
                  td Entrenamiento en competencias transversales como comunicación asertiva, trabajo en equipo, inteligencia emocional y resolución de conflictos.
                  td Taller de comunicación no violenta para equipos de ventas.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Capacitación en SST.]
                  td(style="background-color: #FBF7F1;") Formación en normas de seguridad y salud en el trabajo, uso de equipos de protección personal y protocolos de emergencia.
                  td(style="background-color: #FBF7F1;") Brigadas de primeros auxilios y simulacros de evacuación.
                tr(data-aos="fade-right")
                  td #[b #[em E-learning] y #[em microlearning.]]
                  td Modalidades de aprendizaje digital que aprovechan plataformas LMS, píldoras de conocimiento, videos y recursos interactivos.
                  td Módulos de 5 minutos sobre cumplimiento normativo en la app corporativa.
            figcaption Nota. Basado en Chiavenato (2017) y Dessler y Varela (2017).

      Separador

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2. Diagnóstico de Necesidades de Capacitación (DNC): concepto y técnicas

      p.mb-4 El Diagnóstico de Necesidades de Capacitación es el proceso sistemático mediante el cual se identifican las brechas existentes entre las competencias que los colaboradores poseen actualmente y las que requieren para desempeñar sus funciones con el nivel de eficacia esperado por la organización.

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #F3F298 !important")
        .bloque-texto-g__img.img-bg-08
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") El DNC es el punto de partida de todo proceso de capacitación bien fundamentado, un diagnóstico riguroso orienta los planes de formación evitando el riesgo de ser costosos, irrelevantes o desconectados de las necesidades reales de la empresa.

      p.mb-4 Además, puede realizarse en tres niveles de análisis complementarios que, en conjunto, ofrecen una visión integral de las necesidades formativas:

      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-09.png', alt='')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .row.mb-0
            AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C01")
              .row(titulo="Análisis organizacional")
                .col-12.mb-0.mb-md-0
                  p.mb-0 Evalúa el contexto de la empresa en su conjunto, considerando su misión, visión, objetivos estratégicos, cultura organizacional, recursos disponibles, procesos y clima laboral, con el propósito de identificar necesidades de formación a nivel macro que contribuyan al cumplimiento de las metas institucionales y al fortalecimiento del desempeño organizacional.
              .row(titulo="Análisis de tareas o puestos")
                .col-12.mb-0.mb-md-0
                  p.mb-0 Examina las funciones, responsabilidades, actividades y exigencias de cada cargo para determinar los conocimientos, habilidades, actitudes y competencias que requiere un colaborador para desempeñarse eficazmente. Este análisis permite establecer las brechas existentes entre los requisitos del puesto y el desempeño esperado, orientando las acciones de capacitación.
              .row(titulo="Análisis de personas")
                .col-12.mb-0.mb-md-0
                  p.mb-0 Evalúa el desempeño actual de cada colaborador en comparación con el desempeño esperado, identificando las brechas individuales de competencias, conocimientos, habilidades o actitudes que deben fortalecerse mediante la formación. Asimismo, considera aspectos como la experiencia, el potencial de desarrollo y los resultados de las evaluaciones de desempeño para definir necesidades de capacitación específicas.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Técnicas para el DNC

      p.mb-4 La selección de la técnica adecuada para realizar el DNC depende del tamaño de la organización, los recursos disponibles, el tiempo con que se cuenta y la naturaleza de las necesidades que se busca diagnosticar. La siguiente tabla presenta las principales técnicas utilizadas en la práctica:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 2.
            span Técnicas para la realización del DNC
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Técnica DNC
                  th(style="width: 16%; background-color: #8FED42;") Descripción
                  th(style="width: 16%; background-color: #8FED42;") Cuándo usarla
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Entrevista.]
                  td(style="background-color: #FBF7F1;") Conversación estructurada con el colaborador o su jefe inmediato para identificar brechas de competencia.
                  td(style="background-color: #FBF7F1;") Cuando se requiere profundidad cualitativa sobre el desempeño individual.
                tr(data-aos="fade-right")
                  td #[b Encuesta / cuestionario.]
                  td Instrumento escrito o digital que indaga de forma masiva sobre las necesidades formativas.
                  td Para diagnósticos de grandes grupos o cuando el tiempo es limitado.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Observación directa.]
                  td(style="background-color: #FBF7F1;") El evaluador analiza el puesto de trabajo en tiempo real para identificar brechas entre el desempeño actual y el esperado.
                  td(style="background-color: #FBF7F1;") En cargos operativos donde la acción es visible y medible.
                tr(data-aos="fade-right")
                  td #[b Análisis de evaluación de desempeño.]
                  td Revisión de los resultados de las evaluaciones periódicas para detectar áreas de mejora recurrentes.
                  td Cuando la empresa cuenta con un sistema formal de gestión del desempeño.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Análisis documental.]
                  td(style="background-color: #FBF7F1;") Revisión de informes, quejas, indicadores de calidad, auditorías e incidentes para detectar necesidades de formación.
                  td(style="background-color: #FBF7F1;") Útil para identificar necesidades emergentes o sistémicas.
                tr(data-aos="fade-right")
                  td #[b Grupo focal.]
                  td Reunión guiada con un grupo representativo de colaboradores para explorar necesidades comunes de manera participativa.
                  td Cuando se busca consenso o cuando las necesidades son compartidas por un área.
            figcaption Nota. Basado en Gómez, Balkin y Cardy (2016) y Siliceo (2010).

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Inventario de necesidades de capacitación

      p.mb-4 Una vez aplicadas las técnicas de diagnóstico, los datos recopilados deben organizarse en un Inventario de Necesidades de Capacitación (INC), que es el documento que consolida y prioriza las brechas de competencia identificadas en la organización. El INC permite responder de manera precisa a cuatro preguntas clave:

      .row.mb-4
        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-primario.p-5
            .tarjeta-numerada__numero
              .h2 1
            p.text-center 
              b ¿Qué se debe enseñar? 
            p.text-center Temáticas y contenidos que responden a las brechas identificadas.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.text-center 
              b ¿Quién debe aprender? 
            p.text-center Colaboradores o grupos que presentan las brechas de competencia.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-contenido.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.text-center 
              b ¿Cuándo se debe enseñar? 
            p.text-center Plazos y prioridades de la formación según la urgencia de cada necesidad.

        .col-md-6.col-xl.mb-4.mb-xl-0
          .tarjeta-numerada.color-acento-botones.especial.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.text-center 
              b ¿Cómo se debe enseñar? 
            p.text-center Metodologías y modalidades más pertinentes para cada necesidad.

      p La elaboración del INC no es un ejercicio burocrático, es una herramienta de gestión que orienta la toma de decisiones sobre la inversión en formación y permite demostrar a la alta dirección el fundamento técnico de los programas de capacitación propuestos.

      Separador

      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3. Competencias: definición y clases

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-10.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            p.mb-4 El concepto de competencia ocupa un lugar central en la gestión moderna del talento humano. Una competencia es la capacidad integrada de movilizar conocimientos, habilidades, actitudes y valores para desempeñar una función o resolver un problema con eficacia en un contexto determinado. La competencia no es sinónimo de conocimiento; implica saber hacer, saber ser y saber convivir en situaciones reales y cambiantes.
            .cajon.cajon.C02.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Spencer y Spencer (1993) definieron la competencia como una característica subyacente en el individuo que está causalmente relacionada con un estándar de efectividad y/o una performance superior en un trabajo o situación. Esta definición permite distinguir entre las competencias que producen un desempeño meramente adecuado y las que generan desempeño superior y diferenciado.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Clases de competencias

      p.mb-4 Las competencias pueden clasificarse de diversas maneras. A continuación, se presentan las clasificaciones más relevantes para la gestión del talento humano:

      AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Por su naturaleza")
          .col-md-6.mb-4.mb-md-0
            p Las competencias pueden clasificarse según el tipo de conocimientos, habilidades y capacidades que predominan en su desarrollo. Esta clasificación comprende:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                span #[b Competencias técnicas (#[em hard skills]):] conocimientos y habilidades específicas de una disciplina o función laboral. Ejemplo: dominio de #[em software] contable, gestión de inventarios, programación en Python.
              li 
                i.lista-ul__vineta
                span #[b Competencias blandas (#[em soft skills]):] capacidades interpersonales, comunicativas y de autorregulación que determinan la calidad de las relaciones laborales. Ejemplo: empatía, liderazgo, resolución de conflictos, adaptabilidad.
              li 
                i.lista-ul__vineta
                span #[b Competencias digitales:] habilidades para usar herramientas tecnológicas, gestionar información digital y colaborar en entornos virtuales. Son transversales a todos los cargos en la economía actual.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img-11.png', alt='Texto que describa la imagen')

        .row(titulo="Por su alcance")
          .col-md-6.mb-4.mb-md-0
            p Las competencias también pueden clasificarse de acuerdo con el nivel de aplicación dentro de la organización y las responsabilidades asociadas a cada cargo. Esta clasificación incluye:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                span #[b Competencias genéricas o transversales:] aplicables a todos los colaboradores con independencia del cargo o área. Ejemplo: trabajo en equipo, comunicación, orientación al resultado.
              li 
                i.lista-ul__vineta
                span #[b Competencias específicas o técnicas del cargo:] propias de una función o puesto particular. Ejemplo: elaboración de estados financieros para el contador, gestión de inventarios para el almacenista.
              li 
                i.lista-ul__vineta
                span #[b Competencias directivas o de liderazgo:] propias de quienes tienen responsabilidad de dirección. Ejemplo: visión estratégica, toma de decisiones, gestión del cambio, desarrollo de equipos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img-12.png', alt='Texto que describa la imagen')

        .row(titulo="Por su grado o nivel de desarrollo")
          .col-md-6.mb-4.mb-md-0
            p Las competencias pueden valorarse según el nivel de dominio alcanzado por el colaborador, lo que facilita identificar brechas de desempeño y orientar los procesos de formación. Esta clasificación contempla los siguientes niveles:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                span #[b Nivel 0:] ausencia de la competencia: el colaborador no evidencia comportamientos ni conocimientos asociados a la competencia y requiere formación desde lo básico.
              li 
                i.lista-ul__vineta
                span #[b Nivel 1:] desarrollo inicial: demuestra conocimientos o habilidades elementales y puede desempeñarlas con apoyo o supervisión frecuente.
              li 
                i.lista-ul__vineta
                span #[b Nivel 2:] desarrollo intermedio: aplica la competencia de manera adecuada en situaciones habituales, con un nivel aceptable de autonomía y desempeño.
              li 
                i.lista-ul__vineta
                span #[b Nivel 3:] desarrollo avanzado: utiliza la competencia de forma consistente, autónoma y eficaz, incluso ante situaciones complejas, sirviendo de referente para otros colaboradores.
              li 
                i.lista-ul__vineta
                span #[b Nivel 4:] dominio excepcional: evidencia un desempeño sobresaliente, innova, propone mejoras y contribuye al desarrollo de la competencia en otras personas y en la organización.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img-13.png', alt='Texto que describa la imagen')

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Enfoque por competencias

      .row.justify-content-center.mb-4.recurso-competencias
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure.mb-0.recurso-competencias__figure
            img(src='@/assets/curso/temas/t1/img-14.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .recurso-competencias__contenido
            p Es el modelo que se centra en identificar, desarrollar y evaluar las capacidades de los colaboradores, conocimientos, habilidades y actitudes para alinearlas con los objetivos estratégicos de la empresa, para potenciar el "saber hacer" en contextos específicos. 
            p.mb-5 Para implementar el enfoque por competencias se debe tener en cuenta los siguientes aspectos:
            .recurso-competencias__titulo.mb-4
              h4.mb-0 Objetivo
            p.mb-0 Su fin principal es optimizar el rendimiento del capital humano, asegurando que cada persona ocupe el puesto donde su potencial sea desarrollado y sus competencias sean optimizadas aportando más valor y facilitando el crecimiento tanto del empleado como de la organización.

      .row.justify-content-center.mb-4
        .col-lg-12.col-12
          .titulo-capsula-verde.mb-3
            h4.mb-0 Características

          p Las características del enfoque por competencias están orientadas en 4 ejes estratégicos:

      .tarjeta--container.row.mb-4
        .col-md.tarjeta.color-primario.amarillo.p-5
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/t1/img-15.svg', alt='')          
          h3.text-center Integral
          p.mb-0.text-center Evaluación del colaborador, tanto en conocimiento como en comportamiento.

        .col-md.tarjeta.color-acento-botones.rosa.p-5
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/t1/img-16.svg', alt='')          
          h3.text-center.parrafo Dinámico
          p.parrafo.mb-0.text-center Se identifica la capacidad de adaptación que posee el trabajador a los cambios del mercado y de la tecnología.

        .col-md.tarjeta.color-primario.amarillo.p-5
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/t1/img-17.svg', alt='')          
          h3.text-center Medible
          p.mb-0.text-center Este enfoque tiene una evaluación y avance progresivo lo que permite establecer indicadores claros de desempeño.

        .col-md.tarjeta.color-acento-botones.rosa.p-5
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/t1/img-18.svg', alt='')          
          h3.text-center.parrafo Estratégico
          p.parrafo.mb-0.text-center Identifica los talentos del colaborador directamente con la misión de la empresa lo que incide en la ubicación en el cargo.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Elementos o iceberg de la competencia

      p.mb-4 Mientras que los conocimientos y habilidades son necesarios para ser contratado, los elementos invisibles como la actitud y la motivación son los que determinan si una persona tendrá un desempeño excelente en su puesto. Estos elementos son:

      .cajon.cajon.C03.p-5.mb-4
        SlyderB(:datos="datosSlyder")

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Estrategias de aplicación

      p El enfoque por competencias se ha consolidado como un pilar fundamental en la gestión del talento humano, al permitir alinear las capacidades de las personas con las necesidades estratégicas de las organizaciones. Este tema aborda las principales estrategias para implementar el enfoque por competencias en el ámbito profesional.
      p.mb-4 Para implementar el enfoque por competencias de manera efectiva en las organizaciones, se pueden emplear las siguientes estrategias:

      .tarjeta--BG01.bg-fix-bleed.p-4.px-md-5.mb-4
        .tarjeta.tarjeta--FBG01.p-4.p-lg-5.slider-fix-bleed
          SlyderA(tipo="b" data-aos="zoom-in")
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Selección por competencias
                p(style="color:#000 !important") La selección por competencias se centra en identificar candidatos que además de cumplir con los requisitos técnicos del cargo, demuestren comportamientos alineados con las necesidades de la organización. Para ello, se utilizan herramientas como las entrevistas basadas en incidentes críticos, en las que el candidato describe situaciones reales del pasado, explicando cómo actuó, qué decisiones tomó y cuáles fueron los resultados. 
                p(style="color:#000 !important") Este enfoque permite predecir con mayor precisión el comportamiento futuro en el puesto de trabajo, ya que parte del principio de que las conductas pasadas son un buen indicador del desempeño futuro, además, puede complementarse con pruebas situacionales y evaluaciones psicométricas.
              .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
                figure
                  img(src='@/assets/curso/temas/t1/img-23.png', style="width: 500px" ,alt='').m-auto
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Planes de carrera
                p(style="color:#000 !important") Los planes de carrera son estrategias estructuradas que permiten proyectar el crecimiento profesional de los colaboradores dentro de la organización. En un enfoque por competencias, estas rutas de desarrollo se diseñan a partir de la identificación de brechas entre las competencias actuales del empleado y las requeridas para cargos superiores. De esta manera, se establecen itinerarios de formación, experiencia y evaluación que facilitan el ascenso progresivo. Esto incrementa la motivación y el compromiso del talento humano, sino que también asegura la disponibilidad de personal calificado para asumir nuevos retos organizacionales.
              .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4   
                figure
                  img(src='@/assets/curso/temas/t1/img-24.png', style="width: 500px" ,alt='').m-auto
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Capacitación dirigida
                p(style="color:#000 !important") La capacitación dirigida se enfoca en fortalecer áreas específicas donde el empleado presenta oportunidades de mejora, según su perfil de competencias y las exigencias del cargo. A diferencia de la formación general, este tipo de capacitación es personalizada y estratégica, ya que responde directamente a las brechas identificadas en evaluaciones de desempeño o diagnósticos organizacionales. Puede incluir talleres, cursos, <em>coaching</em>, <em>mentoring</em> o formación virtual, orientados tanto al desarrollo de competencias técnicas como blandas. Esto optimiza los recursos de la organización y mejora de manera directa el desempeño laboral.
              .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
                figure
                  img(src='@/assets/curso/temas/t1/img-25.png', style="width: 500px" ,alt='').m-auto
            .row.justify-content-center
              .col-lg-6.order-lg-1.order-2
                h4 Evaluación de 360°
                p(style="color:#000 !important") La evaluación de 360 grados es una herramienta integral que recopila retroalimentación sobre el desempeño de un colaborador desde múltiples perspectivas: jefes, compañeros de trabajo, subordinados e incluso clientes, cuando aplica. Este enfoque permite obtener una visión más completa y objetiva de las competencias del individuo, especialmente en aspectos relacionados con habilidades blandas como liderazgo, trabajo en equipo, comunicación y resolución de conflictos. Además, fomenta la cultura de retroalimentación continua y el desarrollo personal, ya que el evaluado puede identificar sus fortalezas y áreas de mejora desde diferentes puntos de vista, facilitando la construcción de planes de desarrollo más efectivos.
              .col-lg-6.col-12.order-lg-2.order-1.mb-lg-0.mb-4 
                figure
                  img(src='@/assets/curso/temas/t1/img-26.png', style="width: 500px" ,alt='').m-auto

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Impacto y resultados

      p.mb-4 El enfoque por competencias no solo transforma la manera en que se gestiona el talento humano, también genera efectos concretos en el desempeño organizacional. Su correcta implementación permite evidenciar resultados en términos de productividad, compromiso, clima laboral y capacidad de adaptación, destacando cómo el desarrollo y alineación de las competencias contribuyen al logro de objetivos estratégicos y al fortalecimiento de la competitividad empresarial. En este sentido, los principales beneficios que aporta a las organizaciones son:

      AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Mayor productividad")
          .col-md-6.mb-4.mb-md-0
            p La implementación del enfoque por competencias contribuye significativamente al incremento de la productividad organizacional. Esto se logra al ubicar a los colaboradores en cargos que se ajusten realmente a sus capacidades, conocimientos y habilidades, lo que reduce errores, optimiza tiempos y mejora la calidad de los resultados. 
            p Cuando una persona desempeña funciones acordes con su perfil, aumenta su eficiencia y autonomía, generando un mejor aprovechamiento de los recursos disponibles. Además, se facilita la toma de decisiones y la ejecución de tareas con mayor precisión, impactando positivamente en los indicadores de desempeño de la organización.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img-27.png', alt='Texto que describa la imagen')

        .row(titulo="Reducción de rotación")
          .col-md-6.mb-4.mb-md-0
            p Una adecuada gestión por competencias fortalece el compromiso de los empleados, ya que estos perciben oportunidades claras de desarrollo y crecimiento dentro de la empresa. Al sentirse valorados y ubicados en roles donde pueden aportar y desarrollarse, disminuye la intención de abandonar la organización. Asimismo, los procesos de selección más acertados reducen la probabilidad de contratar personal que no se adapte al cargo o a la cultura organizacional. Esto se traduce en menores costos asociados a la rotación, como reclutamiento, inducción y capacitación, y en una mayor estabilidad del talento humano.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img-28.png', alt='Texto que describa la imagen')

        .row(titulo="Mejor clima organizacional")
          .col-md-6.mb-4.mb-md-0
            p El enfoque por competencias favorece un entorno laboral más transparente y organizado, al definir claramente las expectativas, responsabilidades y comportamientos esperados de cada colaborador. Esto reduce ambigüedades y conflictos internos, ya que cada persona comprende su rol y el de los demás dentro de la organización. Además, herramientas como la evaluación de desempeño y la retroalimentación continua promueven una comunicación más abierta y constructiva, como resultado, se fortalece la confianza, el trabajo en equipo y la satisfacción laboral, elementos clave para un clima organizacional positivo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img-29.png', alt='Texto que describa la imagen')

        .row(titulo="Agilidad organizacional")
          .col-md-6.mb-4.mb-md-0
            p Las organizaciones que gestionan su talento humano por competencias desarrollan una mayor capacidad de adaptación frente a cambios del entorno, crisis o nuevas demandas del mercado. Esto se debe a que cuentan con colaboradores versátiles, con habilidades transferibles y disposición para asumir diferentes roles o aprender nuevas funciones. La formación continua y el desarrollo de competencias blandas, como la resiliencia y la innovación, permiten responder de manera más rápida y efectiva a situaciones imprevistas. En consecuencia, la organización mejora su competitividad y sostenibilidad en entornos dinámicos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t1/img-30.png', alt='Texto que describa la imagen')

      p Asimimo, es importante mencionar que desde IAP GROUP se construyó un diccionario por competencias que organiza las competencias en dos grandes categorías organizacionales y técnicas, y las evalúa mediante niveles de desarrollo que van desde un dominio mínimo hasta uno altamente estratégico. Esta estructura permite identificar brechas, orientar procesos como selección, capacitación y evaluación, y alinear el desempeño del talento humano con los objetivos organizacionales. 
      p.mb-4 A continuación, se establece su estructura basada en categorías y niveles de desarrollo, lo que facilita su comprensión y aplicación en la gestión del talento humano:

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Categorías de competencias

      p.mb-4 Las competencias pueden agruparse en diferentes categorías según su función y el papel que desempeñan dentro de la organización. Entre las principales se encuentran:

      .row.justify-content-center.mb-4.recurso-diagnostico-sin-svg-console
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-31.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            LineaTiempoD.color-acento-botones.especial.mb-4
              .row(numero="1" titulo="Competencias organizacionales (cardinales)")
                .col-12.mb-4.mb-md-0
                  p Son aquellas que deben estar presentes en todos los colaboradores, ya que reflejan la cultura y los valores de la organización:
                  ul.lista-ul.mb-0
                    li.mb-0 
                      i.lista-ul__vineta
                      span Integridad.
                    li.mb-0
                      i.lista-ul__vineta
                      span Proactividad.
                    li.mb-0
                      i.lista-ul__vineta
                      span Productividad.
                    li.mb-0
                      i.lista-ul__vineta
                      span Responsabilidad.
                    li.mb-0
                      i.lista-ul__vineta
                      span Trabajo en equipo.
              .row(numero="2" titulo="Competencias técnicas o específicas")
                .col-12.mb-4.mb-md-0
                  p Están relacionadas con funciones, roles o niveles específicos dentro de la organización, especialmente en cargos operativos, tácticos o estratégicos:
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      span Liderazgo.
                    li.mb-0
                      i.lista-ul__vineta
                      span Planificación y organización.
                    li.mb-0
                      i.lista-ul__vineta
                      span Orientación a resultados.
                    li.mb-0
                      i.lista-ul__vineta
                      span Iniciativa.
                    li.mb-0
                      i.lista-ul__vineta
                      span Empatía.
                    li.mb-0
                      i.lista-ul__vineta
                      span Actitud de servicio.
                    li.mb-0
                      i.lista-ul__vineta
                      span Aprendizaje continuo.
                    li.mb-0
                      i.lista-ul__vineta
                      span Comunicación asertiva.
                    li.mb-0
                      i.lista-ul__vineta
                      span Trabajo bajo presión.
                    li.mb-0 
                      i.lista-ul__vineta
                      span Adaptabilidad al cambio.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Niveles de desarrollo de las competencias

      p.mb-4 El modelo establece una escala progresiva que permite evaluar el grado de dominio de cada competencia. Por ello, la siguiente figura presenta los niveles de desarrollo de las competencias, organizados en una escala progresiva que facilita valorar el grado de dominio alcanzado por una persona, desde la ausencia de la competencia hasta un desempeño sobresaliente:

      .row.justify-content-center.figura-flujo-ajuste(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Niveles de desarrollo de las competencias
        .col-10
          figure.desktop.mb-0
            img(src='@/assets/curso/temas/t1/figura-1-1.svg', alt='Figura 1 que representa los niveles de desarrollo de las competencias mediante una escala de cinco categorías: Nivel A (Alto), Nivel B (Sobre el estándar), Nivel C (Bueno), Nivel D (Mínimo) y No desarrollada. La representación facilita comprender cómo se evalúa el grado de dominio de las competencias y su importancia para identificar fortalezas, brechas de desempeño y necesidades de formación en el contexto organizacional.')
        .col-12 
          figure.movil.mb-0
            img(src='@/assets/curso/temas/t1/figura-1-2.svg', alt='Figura 1 que representa los niveles de desarrollo de las competencias mediante una escala de cinco categorías: Nivel A (Alto), Nivel B (Sobre el estándar), Nivel C (Bueno), Nivel D (Mínimo) y No desarrollada. La representación facilita comprender cómo se evalúa el grado de dominio de las competencias y su importancia para identificar fortalezas, brechas de desempeño y necesidades de formación en el contexto organizacional.')

      Separador

      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4. Aprendizaje: concepto, ritmos y estilos

      p.mb-4 El aprendizaje es el proceso mediante el cual las personas adquieren, transforman y aplican conocimientos, habilidades y actitudes como resultado de su interacción con el entorno. En la gestión del talento humano, comprender cómo aprenden los adultos es fundamental para diseñar programas de capacitación efectivos que favorezcan el desarrollo de competencias y generen mejoras sostenibles en el desempeño laboral.

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #F3F298 !important")
        .bloque-texto-g__img.img-bg-32
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") En este contexto, la andragogía, disciplina que estudia el aprendizaje de las personas adultas, aporta principios que orientan el diseño de procesos de formación acordes con sus características y necesidades. Según Knowles (1984), los adultos aprenden mejor cuando comprenden el propósito de lo que estudian, relacionan los nuevos conocimientos con su experiencia previa, participan de manera autónoma en su proceso de aprendizaje y perciben que lo aprendido tiene una aplicación práctica e inmediata en su contexto personal o laboral.

      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Ritmos de aprendizaje

      p.mb-4 Los ritmos de aprendizaje hacen referencia a la velocidad y manera particular en que cada persona procesa, comprende y retiene la información. No todos los colaboradores aprenden al mismo ritmo y esta variabilidad es natural y esperada.

      .row.justify-content-center.align-items-stretch.mb-4.g-0.recurso-c10-ajuste
        .col-lg-7.col-12.order-lg-2.order-2
          .cajon.C10.c10-icono-arriba.p-4.h-100.w-100
            .row.mb-0
              .col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img-34.svg', alt='')
              .col-lg-10.col-12
                p En un programa de capacitación inclusivo y efectivo, el diseño instruccional debe contemplar estrategias que acojan la diversidad de ritmos, ofreciendo recursos de profundización para quienes avanzan más rápido y apoyos adicionales, para quienes requieren más tiempo.
                p Los ritmos de aprendizaje pueden verse influenciados por factores como la experiencia previa del colaborador en el tema, el nivel de motivación e interés, las condiciones del entorno laboral, el nivel de estrés o carga de trabajo y la disponibilidad de tiempo para el estudio autónomo.
        .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-33.png', alt='')
      
      .row.align-items-center.mb-4(data-aos="zoom-in")
        .col-auto.pe-0(style="z-index:2")
          figure
            img(src='@/assets/curso/temas/t1/icono.svg', style="width: 45px" ,alt='').m-auto
        .col-lg-auto.col-9.titulo01(style="z-index:1")
          .p-1
            h3.mb-0.ms-3 Estilos de aprendizaje

      p.mb-4 Los estilos de aprendizaje son las preferencias individuales en cuanto a la forma en que cada persona recibe, procesa e integra la información. El modelo VARK, uno de los más utilizados en formación organizacional, propone cuatro estilos:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 3.
            span Estilos de aprendizaje modelo VARK y estrategias formativas recomendadas
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Estilo de aprendizaje
                  th(style="width: 16%; background-color: #8FED42;") Características del aprendiz
                  th(style="width: 16%; background-color: #8FED42;") Estrategia formativa recomendada
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Visual.]
                  td(style="background-color: #FBF7F1;") Procesa mejor la información a través de imágenes, gráficos, mapas conceptuales y colores.
                  td(style="background-color: #FBF7F1;") Infografías, presentaciones visuales, videos explicativos, mapas mentales.
                tr(data-aos="fade-right")
                  td #[b Auditivo.]
                  td Aprende con mayor facilidad escuchando, participando en debates y oyendo explicaciones.
                  td Pódcast, videoconferencias, #[em role-playing], discusiones grupales.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Kinestésico.]
                  td(style="background-color: #FBF7F1;") Aprende haciendo, moviéndose, experimentando. Necesita práctica directa.
                  td(style="background-color: #FBF7F1;") Talleres, simulaciones, laboratorios, proyectos aplicados.
                tr(data-aos="fade-right")
                  td #[b Lector/escritor.]
                  td Prefiere leer textos y escribir notas, listas o resúmenes como estrategia de comprensión.
                  td Lectura de artículos, elaboración de informes, foros escritos.
            figcaption Nota. Basado en el modelo VARK de Fleming y Mills (1992).

      p.mb-4 Es importante aclarar que los estilos de aprendizaje no son compartimentos rígidos: la mayoría de las personas combinan varios estilos dependiendo del contexto y del tipo de contenido. Sin embargo, conocerlos permite al diseñador instruccional crear programas de capacitación más inclusivos, variados y efectivos.

      .row.justify-content-center
        .col.col-lg-10.col-12
          .cajon.cajon.C01.color-secundario.px-4.py-3
            p.mb-0 Un programa de capacitación que combina recursos visuales, audio, actividades prácticas y lecturas tiene mayor probabilidad de ser efectivo para grupos heterogéneos que uno que depende exclusivamente de un solo formato de presentación.

      Separador

      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5. Normativa legal ambiental, de salud y seguridad en el trabajo

      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")(style="background-color: #F3F298 !important")
        .bloque-texto-g__img.img-bg-35
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La gestión del desarrollo del talento humano no opera en un vacío normativo. En Colombia, existe un marco legal robusto que obliga a las organizaciones a garantizar condiciones seguras de trabajo y a incluir en sus planes de capacitación los contenidos relacionados con la Seguridad y Salud en el Trabajo (SST). El incumplimiento de esta normativa no solo genera sanciones económicas, sino que puede afectar gravemente el bienestar de los colaboradores y la reputación de la empresa.

      p.mb-4 Partiendo de lo anterior, la siguiente tabla presenta un resumen de la principal normatividad aplicable a la Seguridad y Salud en el Trabajo (SST) en Colombia, destacando su contenido y las implicaciones que tiene para la planeación y ejecución de los procesos de capacitación organizacional:

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 4.
            span Marco normativo de SST con implicaciones en la capacitación organizacional
          .tabla-a.color-acento-contenido.mb-4.tabla-plan-accion.tabla-softwares
            table
              thead
                tr(data-aos="fade-right")
                  th(style="width: 16%; background-color: #8FED42;") Norma / Decreto
                  th(style="width: 16%; background-color: #8FED42;") Contenido principal
                  th(style="width: 16%; background-color: #8FED42;") Relación con la capacitación
              tbody
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Ley 9 de 1979.]
                  td(style="background-color: #FBF7F1;") Código Sanitario Nacional. Regula condiciones mínimas de salud ocupacional en el trabajo.
                  td(style="background-color: #FBF7F1;") Obliga a las empresas a capacitar en higiene industrial y prevención de enfermedades.
                tr(data-aos="fade-right")
                  td #[b Decreto 1072 de 2015.]
                  td Decreto Único Reglamentario del Sector Trabajo. Compila toda la normativa laboral, incluido el SG-SST.
                  td Define la obligatoriedad de un programa de capacitación en SST para todos los trabajadores.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b Resolución 0312 de 2019.]
                  td(style="background-color: #FBF7F1;") Estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo.
                  td(style="background-color: #FBF7F1;") Establece los contenidos mínimos de formación en SST según el tamaño de la empresa.
                tr(data-aos="fade-right")
                  td #[b Ley 1562 de 2012.]
                  td Modifica el sistema de riesgos laborales en Colombia.
                  td Amplía la cobertura y fortalece los programas de prevención y capacitación en riesgos.
                tr(data-aos="fade-right")
                  td(style="background-color: #FBF7F1;") #[b ISO 45001:2018.]
                  td(style="background-color: #FBF7F1;") Norma internacional de sistemas de gestión de la SST.
                  td(style="background-color: #FBF7F1;") Exige planes de competencia y formación continua como parte del sistema de gestión.
            figcaption Nota. Basado en el marco normativo colombiano del Ministerio del Trabajo y la normativa ISO

      p.mb-4 La inclusión de la SST en el plan de capacitación no es opcional. El Decreto 1072 de 2015 es el Decreto Único Reglamentario del Sector Trabajo en Colombia que establece en su artículo 2.2.4.6.11 que el empleador debe definir los requisitos de conocimiento y habilidad en seguridad y salud en el trabajo necesarios para sus trabajadores y asegurarse de que estos sean competentes sobre la base de la educación, la formación o la experiencia. 

      .row.justify-content-center.mb-4
        .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img-36.png', alt='')
        .col.col-lg-7.col-12.order-lg-2.order-2
          .row.mb-0
            .cajon.cajon.C02.color-primario.px-4.py-3.mb-4
              p.mb-0(data-aos="fade-down") Esto significa que el área de gestión del talento humano tiene una responsabilidad legal directa en el diseño e implementación de programas de formación en SST.
            p.mb-4 Desde el enfoque ambiental, la normativa colombiana también exige que las organizaciones capaciten a sus colaboradores en gestión ambiental responsable, uso eficiente de recursos naturales y manejo adecuado de residuos. Este compromiso se articula con el Sistema de Gestión Ambiental (SGA) y con los Objetivos de Desarrollo Sostenible (ODS) que muchas empresas han adoptado como parte de su estrategia de responsabilidad social empresarial.

</template>

<script>
import imgSlyder19 from '@/assets/curso/temas/t1/img-19.png'
import imgSlyder20 from '@/assets/curso/temas/t1/img-20.png'
import imgSlyder21 from '@/assets/curso/temas/t1/img-21.png'
import imgSlyder22 from '@/assets/curso/temas/t1/img-22.png'

export default {
  name: 'Tema1',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaSlide: true,
    mostrarIndicadorTarjetaAudio: true,

    datosSlyder: [
      {
        titulo: 'Saber – conocimiento',
        texto:
          'Es un saber hacer integrado, que combina conceptos teóricos, habilidades prácticas y actitudes para resolver problemas en contextos reales. Este conocimiento debe ser significativo y funcional para ser aplicable en tareas cotidianas, integrales siendo dinámico y contextualizado.',
        imagen: imgSlyder19,
      },
      {
        titulo: 'Saber hacer – habilidades',
        texto:
          'Es la capacidad, experiencia técnica, destrezas y comportamientos adquiridos que facilitan el desempeño motriz y cognitivo en el mundo real lo que implica un enfoque práctico, contextual y adaptativo.',
        imagen: imgSlyder20,
      },
      {
        titulo: 'Saber ser – actitudes y valores',
        texto:
          'Implica la motivación, ética que son disposiciones persistentes y principios que direccionan el actuar y se hace más notoria en la empatía, trabajo colaborativo, responsabilidad ética, adaptabilidad y calidad de vida.',
        imagen: imgSlyder21,
      },
      {
        titulo: 'Saber estar – contexto',
        texto:
          'Capacidad de adaptarse a la cultura organizacional, interactuar adecuadamente con el entorno laboral y establecer relaciones positivas con los demás, actuando de forma coherente con las normas, los valores y las dinámicas de trabajo de la organización.',
        imagen: imgSlyder22,
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
