<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 En este componente formativo se han construido las bases conceptuales y metodológicas necesarias para que el aprendiz comprenda, diseñe y ejecute procesos de gestión del desarrollo del talento humano en las organizaciones. A través de dos grandes resultados de aprendizaje, el recorrido integró fundamentos teóricos, herramientas prácticas y tendencias actuales del campo:

    .row.justify-content-center.mb-4.recurso-capacitacion
      .col-lg-6.col-12.mb-4.mb-lg-0
        .recurso-capacitacion__tarjeta
          .recurso-capacitacion__imagen
            img(
              src='@/assets/curso/img-01.png'
              alt='Identificación de necesidades'
            )

          .recurso-capacitacion__icono
            img(
              src='@/assets/curso/img-01v.svg'
              alt='Icono identificación de necesidades'
            )

          .recurso-capacitacion__contenido
            h4 Identificación de necesidades

            p.mb-0 Se abordaron el concepto, las acciones y los tipos de capacitación; las técnicas para el DNC; la clasificación de competencias; los ritmos y estilos de aprendizaje; y el marco normativo en Seguridad y Salud en el Trabajo (SST).

      .col-lg-6.col-12
        .recurso-capacitacion__tarjeta
          .recurso-capacitacion__imagen
            img(
              src='@/assets/curso/img-02.png'
              alt='Programación de actividades'
            )

          .recurso-capacitacion__icono
            img(
              src='@/assets/curso/img-02v.svg'
              alt='Icono programación de actividades'
            )

          .recurso-capacitacion__contenido
            h4 Programación de actividades

            p.mb-0 Se desarrollaron las etapas del proceso de capacitación; las nuevas tendencias formativas; la comunicación en los procesos de aprendizaje; la gamificación; la didáctica y sus estrategias; así como la metodología, el presupuesto, el cronograma, los recursos y la estructuración del plan de capacitación.

    p.mb-4 Los saberes relacionados con conceptos y principios desarrollados en este componente se articulan directamente con los conocimientos de proceso. Comprender qué es la capacitación constituye el punto de partida; saber cómo diagnosticar, planear y ejecutar un plan formativo representa la competencia que marca la diferencia en la gestión del talento humano.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza los principales temas relacionados con la gestión del desarrollo del talento humano y la planificación de los procesos de capacitación en las organizaciones. Inicia con la identificación de necesidades, abordando la capacitación, el Diagnóstico de Necesidades de Capacitación (DNC), las competencias, el aprendizaje y la normativa de Seguridad y Salud en el Trabajo (SST). Posteriormente, integra la programación de actividades, que comprende las etapas del proceso de capacitación, las nuevas tendencias formativas, la comunicación, la gamificación y la didáctica. Finalmente, incorpora los elementos necesarios para estructurar el plan de capacitación, como la metodología, el presupuesto, el cronograma y los recursos, orientados al diseño e implementación de procesos formativos pertinentes y alineados con las necesidades organizacionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
