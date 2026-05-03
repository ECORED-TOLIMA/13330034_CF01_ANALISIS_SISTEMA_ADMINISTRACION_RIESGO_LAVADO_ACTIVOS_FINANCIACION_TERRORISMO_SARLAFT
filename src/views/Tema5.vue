<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Riesgos del lavado de activos y financiación del terrorismo
    p.mb-4 Las organizaciones que desarrollan actividades financieras, comerciales o de manejo de recursos se encuentran expuestas a diferentes riesgos asociados al lavado de activos y la financiación del terrorismo. Estos riesgos surgen cuando las entidades pueden ser utilizadas, de manera directa o indirecta, para ocultar el origen de recursos ilícitos o para canalizar fondos destinados a actividades relacionadas con el terrorismo. Por esta razón, es fundamental que las organizaciones implementen mecanismos de control que les permitan identificar y gestionar estos riesgos de manera oportuna.
    .bloque-texto-gg.tarjeta.bt01.mb-4
      .bloque-texto-gg__texto.p-4
        p.mb-0 En este contexto, los riesgos asociados al lavado de activos y la financiación del terrorismo pueden afectar diferentes aspectos del funcionamiento de una organización. Entre ellos se encuentran el cumplimiento de las normas legales, la estabilidad de los procesos internos, la confianza de los clientes y la reputación institucional. Cuando una organización se ve involucrada en este tipo de situaciones, puede enfrentar sanciones legales, pérdidas económicas y un deterioro en su imagen ante el mercado y las autoridades de control.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
      )
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p Por esta razón, los sistemas de administración del riesgo como el SARLAFT tienen como objetivo principal identificar, evaluar y monitorear los riesgos relacionados con estas actividades ilícitas. A través de la implementación de políticas, procedimientos y herramientas de control, las organizaciones pueden reducir la probabilidad de ser utilizadas para el lavado de activos o la financiación del terrorismo, fortaleciendo así la transparencia y seguridad de sus operaciones.
        .row.justify-content-center.align-items-center.tarjeta.bt01.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema5/img2.svg', alt='Texto que describa la imagen', style="width:120px")
          .col-lg-10
            p.mb-0 Para comprender los efectos que el lavado de activos y la financiación del terrorismo pueden generar en las organizaciones, es necesario identificar los diferentes tipos de riesgos que se presentan cuando no existen controles adecuados en los procesos institucionales. En la siguiente tabla se resume el impacto que cada uno de estos riesgos puede ocasionar sobre la estabilidad, la legalidad y la transparencia de las organizaciones.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema5/img3.png', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Impacto de los riesgos asociados al lavado de activos y la financiación del terrorismo en las organizaciones
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de riesgo
                  th Descripción
              tbody
                tr
                  th Riesgo reputacional
                  td Pérdida de confianza de clientes, inversionistas y autoridades regulatorias, con consecuencias difíciles de revertir una vez materializadas.
                tr    
                  th Riesgo legal
                  td Exposición a sanciones administrativas, multas y procesos judiciales contra la entidad o sus directivos por incumplimiento normativo.
                tr
                  th Riesgo operativo
                  td Fallas en los procesos internos que permiten la realización de operaciones ilícitas sin que sean detectadas oportunamente por la organización.
                tr
                  th Riesgo financiero
                  td Pérdidas económicas derivadas de sanciones, bloqueo de cuentas, restricción de crédito y costos jurídicos que afectan la sostenibilidad institucional.
                tr
                  th Riesgo de contagio
                  td Afectación indirecta por vínculos comerciales o financieros con terceros involucrados en actividades ilícitas, con impacto reputacional y operativo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg',  style="width:120px", alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 La tabla anterior evidencia que los riesgos asociados al lavado de activos y la financiación del terrorismo no afectan una sola dimensión de las organizaciones, sino que comprometen de manera simultánea su integridad legal, operativa, financiera y reputacional. Con el propósito de profundizar en cada uno de ellos, a continuación, se presenta la definición de cada riesgo acompañada de un caso ilustrativo que facilita su comprensión y aplicación en el contexto organizacional:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Riesgo reputacional")
        .col-lg-8.order-2.order-lg-1
          p El riesgo reputacional surge cuando la imagen de una organización se deteriora por su vinculación con actividades de lavado de activos o financiación del terrorismo. La pérdida de confianza de clientes, inversionistas y autoridades regulatorias puede comprometer la viabilidad institucional de forma irreversible, con consecuencias que se extienden mucho más allá del ámbito financiero.
          p.mb-0 #[b Ejemplo:] un banco investigado por permitir transferencias vinculadas al narcotráfico enfrenta el retiro masivo de depósitos, la salida de inversionistas y el incremento de la supervisión regulatoria, incluso antes de que exista una sentencia judicial en firme contra la institución.
        .col-lg-4.col-10.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema5/img4.png', alt='Texto que describa la imagen')
      .row(titulo="Riesgo legal")
        .col-lg-8.order-2.order-lg-1
          p El riesgo legal se origina cuando una organización incumple la normativa de prevención del lavado de activos y la financiación del terrorismo, exponiéndose a sanciones administrativas, multas económicas y procesos judiciales que comprometen su capacidad operativa y la continuidad de sus actividades dentro del sistema financiero.
          p #[b Ejemplo:] una entidad financiera que omite el reporte de operaciones sospechosas ante la UIAF puede recibir una sanción de la Superintendencia Financiera que incluya suspensión temporal de actividades y la obligación de reestructurar sus sistemas de control interno bajo vigilancia institucional.
        .col-lg-4.col-10.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema5/img5.png', alt='Texto que describa la imagen')
      .row(titulo="Riesgo operativo")
        .col-lg-8.order-2.order-lg-1
          p El riesgo operativo surge cuando fallas en los procesos internos, errores humanos o deficiencias tecnológicas facilitan operaciones ilícitas sin que sean detectadas oportunamente. La ausencia de controles adecuados y la falta de capacitación del personal incrementan la vulnerabilidad de la organización frente al lavado de activos y la financiación del terrorismo.
          p #[b Ejemplo:] una cooperativa sin monitoreo automatizado puede procesar, sin advertirlo, múltiples depósitos de pequeñas sumas realizados por un mismo cliente en diferentes sucursales, práctica conocida como pitufeo o fraccionamiento, mediante la cual se evaden los controles de reporte.
        .col-lg-4.col-10.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema5/img6.png', alt='Texto que describa la imagen')
      .row(titulo="Riesgo financiero")
        .col-lg-8.order-2.order-lg-1
          p El riesgo financiero comprende las pérdidas económicas derivadas de sanciones, multas o restricciones operativas por incumplimiento del sistema SARLAFT. Sus efectos pueden comprometer el acceso a mercados internacionales, la disponibilidad de líneas de crédito y la sostenibilidad institucional de la organización a mediano y largo plazo.
          p #[b Ejemplo:] una empresa sancionada por la Unidad de Información y Análisis Financiero (UIAF), entidad del Estado colombiano responsable de detectar operaciones vinculadas al lavado de activos, puede ver bloqueadas sus cuentas en corresponsales bancarios internacionales, perder líneas de crédito aprobadas y asumir costos jurídicos que afectan su flujo de caja durante el proceso sancionatorio.
        .col-lg-4.col-10.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema5/img7.png', alt='Texto que describa la imagen')
      .row(titulo="Riesgo de contagio")
        .col-lg-8.order-2.order-lg-1
          p El riesgo de contagio ocurre cuando una organización resulta afectada por su relación con terceros vinculados a actividades ilícitas. Aunque no haya participado directamente, la proximidad con actores involucrados en el lavado de activos puede generar consecuencias legales, reputacionales y económicas de considerable magnitud para la entidad.
          p #[b Ejemplo:] una empresa de logística que presta servicios a un proveedor investigado por narcotráfico puede ver suspendidos sus contratos internacionales y quedar sujeta a auditorías extraordinarias, aunque no tuviera conocimiento previo de las actividades ilícitas desarrolladas por su socio comercial.
        .col-lg-4.col-10.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema5/img8.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-4 El análisis de los riesgos estudiados a lo largo de esta sección como el reputacional, el legal, el operativo, el financiero y el de contagio, permite dimensionar la complejidad de los efectos que el lavado de activos y la financiación del terrorismo pueden generar en las organizaciones cuando no existen controles adecuados. Cada uno de estos riesgos presenta características particulares que determinan la forma en que afectan a las instituciones y la manera específica en que deben ser gestionados dentro de los procesos internos.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img9.svg', alt='AvatarTop')
          .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 Los riesgos asociados al lavado de activos y la financiación del terrorismo están interconectados. Cuando uno se materializa, puede desencadenar los demás. Su gestión eficaz exige un sistema estructurado que actúe de forma articulada y permanente.
    .bloque-texto-gg.bloque-texto-gg--inverso.tarjeta.bt02
      .bloque-texto-gg__texto.p-4
        p.mb-0 Frente a esta realidad, la respuesta institucional no puede limitarse al reconocimiento teórico de los riesgos, sino que exige la implementación de un sistema estructurado que los prevenga, detecte y controle de manera oportuna. Es precisamente esta estructura la que se desarrolla en el siguiente numeral, donde se presentan los elementos fundamentales que permiten a las organizaciones gestionar el riesgo del lavado de activos y la financiación del terrorismo de forma integral y sostenida.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img10.svg')})`}"
      )
</template>

<script>
export default {
  name: 'Tema5',
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
