<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El Sistema de SARLAFT, constituye un conjunto de mecanismos orientados a prevenir que las organizaciones sean utilizadas para ocultar recursos de origen ilícito o para financiar actividades relacionadas con el terrorismo. A lo largo de los contenidos se analizan el concepto del sistema, el lavado de activos, la financiación del terrorismo y la normatividad aplicable, como elementos interrelacionados que permiten comprender los riesgos a los que se exponen las organizaciones cuando no cuentan con controles adecuados. El conocimiento y la aplicación de estos fundamentos contribuyen a fortalecer los sistemas de prevención, garantizar el cumplimiento normativo y proteger la integridad de las organizaciones dentro del sistema financiero. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
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
