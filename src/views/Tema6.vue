<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Elementos fundamentales del sistema SARLAFT

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Políticas de administración del riesgo


    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Procedimientos de control


    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Infraestructura tecnológica


    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Estructura organizacional


    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.5 Divulgación de la información


    separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.6 Capacitación del personal


</template>

<script>
export default {
  name: 'Tema6',
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
