<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .col.col-lg-12.col-12
        figure.mb-4
          img(src='@/assets/curso/temas/intro/img-01.png', alt='')

    p.mb-4 Las organizaciones del siglo XXI enfrentan un entorno marcado por la transformación digital, la globalización de los mercados y la creciente exigencia de los clientes. En ese contexto, el talento humano ha dejado de ser considerado un recurso más para convertirse en el principal activo estratégico de las empresas. No es el capital financiero ni la tecnología lo que diferencia a una organización competitiva, es la capacidad de sus personas para aprender, adaptarse y generar valor de manera sostenida.

    .row.BG01.justify-content-center.px-md-5.px-4.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img-02.png', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p La gestión del desarrollo del talento humano responde a esa realidad al crear las condiciones para que los colaboradores fortalezcan sus competencias, amplíen sus conocimientos y desarrollen las habilidades que les permiten responder con eficacia a los retos del entorno laboral. La capacitación, el entrenamiento y el aprendizaje organizacional no son gastos, son inversiones que se traducen en mayor productividad, mejor clima laboral, reducción de errores y retención del talento.
        p Este componente formativo introduce al aprendiz en los fundamentos conceptuales y metodológicos que sustentan la gestión del desarrollo humano en las organizaciones. A través de dos grandes ejes temáticos la identificación de necesidades de capacitación y la programación de actividades formativas, el aprendiz construirá los saberes y las herramientas necesarias para diseñar, implementar y evaluar planes de capacitación pertinentes, creativos y alineados con el direccionamiento estratégico de la empresa. 

    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C01.color-secundario.px-4.py-3
          p.mb-0 El recorrido formativo integra teoría y práctica, conceptos y aplicaciones, herramientas clásicas y tendencias emergentes como la gamificación y el aprendizaje digital. Al finalizar, el aprendiz estará en capacidad de realizar diagnósticos de necesidades de capacitación, diseñar planes de formación con presupuesto, cronograma y metodologías activas, así como reflexionar críticamente sobre el impacto que el desarrollo humano tiene en la competitividad organizacional.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cxAMnFUBKLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
