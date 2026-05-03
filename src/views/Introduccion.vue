<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .BGINTRO01.px-5.mb-4
      p.mb-4 El lavado de activos y la financiación del terrorismo constituyen dos de las principales amenazas para la estabilidad del sistema financiero y la transparencia de las actividades económicas, tanto a nivel nacional como internacional. Estas prácticas ilícitas facilitan el ingreso de recursos de origen criminal a la economía formal, con consecuencias que se extienden desde la distorsión de los mercados hasta el fortalecimiento de organizaciones delictivas. En respuesta a esta realidad, los Estados y las organizaciones han desarrollado mecanismos especializados de prevención y control orientados a mitigar los riesgos que estas actividades representan.
      .row.justify-content-center.align-items-center
        .col-lg-3.col-10.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='')
        .col-lg-9
          p En este contexto surge el Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo - SARLAFT, el cual constituye un conjunto de políticas, procedimientos, herramientas y controles diseñados para prevenir que las organizaciones sean utilizadas para ocultar recursos de origen ilícito o para canalizar fondos destinados a actividades terroristas. La implementación de este sistema permite a las entidades identificar, evaluar, controlar y monitorear los riesgos asociados a estas actividades, fortaleciendo los procesos internos de supervisión y promoviendo una cultura organizacional basada en la transparencia y el cumplimiento normativo.
          .tarjeta.tarjeta.bt01.p-3
            .row.justify-content-center.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/intro/img2.svg', width='180', alt='')
              .col-lg-10
                p.mb-0 Este componente formativo tiene como propósito brindar al aprendiz una comprensión clara de los fundamentos del sistema SARLAFT, abordando los conceptos relacionados con el lavado de activos, la financiación del terrorismo, la normatividad que regula estas actividades y los riesgos a los que se exponen las organizaciones cuando no se implementan mecanismos adecuados de control. El estudio de estos contenidos busca fortalecer el conocimiento en materia de prevención del riesgo LA/FT dentro del contexto empresarial y financiero.

    p.mb-4 Para ampliar la comprensión de los conceptos abordados y contextualizar su aplicación en la gestión de proyectos, se recomienda acceder al recurso audiovisual que acompaña esta sección.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: VIDEO DE MUESTRA

</template>

<script>
export default {
  name: 'Introduccion',
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
