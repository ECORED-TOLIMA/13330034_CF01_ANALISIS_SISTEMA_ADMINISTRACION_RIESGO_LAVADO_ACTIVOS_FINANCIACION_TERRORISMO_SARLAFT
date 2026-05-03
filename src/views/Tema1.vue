<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Concepto del sistema SARLAFT
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-2.order-lg-1
          p El Sistema de Administración del Riesgo de Lavado de Activos y de la Financiación del Terrorismo – SARLAFT, es un conjunto de políticas, procedimientos, herramientas y mecanismos adoptados por las organizaciones para prevenir que sus operaciones sean utilizadas para ocultar o movilizar recursos provenientes de actividades ilícitas o para financiar actos terroristas. Este sistema permite a las entidades identificar, medir, controlar y monitorear los riesgos asociados al lavado de activos y a la financiación del terrorismo, garantizando así el cumplimiento de la normativa vigente y la protección de la integridad del sistema financiero.
          .bt01.p-4
            p.mb-0 Su implementación constituye un instrumento fundamental dentro de la gestión integral del riesgo en las organizaciones, especialmente en aquellas que desarrollan actividades financieras, comerciales o de manejo de recursos. A través de sus mecanismos de control, las entidades identifican operaciones inusuales o sospechosas, fortalecen el conocimiento del cliente y promueven una cultura organizacional basada en la transparencia y la legalidad, contribuyendo así a evitar que sus operaciones sean utilizadas como medios para la realización de actividades ilícitas.
        .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema1/img1.png', width='180', alt='Texto que describa la imagen')
    .bloque-texto-gg.tarjeta.bt02.mb-4
      .bloque-texto-gg__texto.p-4
        .row
            .col-lg-auto.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', style="width:100px", alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 En el contexto colombiano, su supervisión recae en la Superintendencia Financiera de Colombia, organismo que verifica que las organizaciones cuenten con controles efectivos para prevenir estas actividades ilícitas y que aplica medidas correctivas cuando se detectan deficiencias. Su implementación se fundamenta en un doble soporte normativo con leyes y circulares nacionales, complementadas con estándares internacionales que garantizan la coherencia del sistema frente a los compromisos del país ante la comunidad global. Más allá del cumplimiento legal, las organizaciones que aplican el sistema con rigor reducen su exposición a sanciones e investigaciones, y proyectan ante clientes, usuarios e inversionistas una imagen de solidez y transparencia que se traduce en relaciones comerciales estables y en un posicionamiento favorable ante las autoridades regulatorias.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
      )
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img4.svg', style="width:100px", alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 El sistema opera dentro de un entramado institucional que define cómo se supervisa, bajo qué normas se rige y qué efectos genera su correcta aplicación en las organizaciones. A continuación, se presentan cuatro dimensiones clave para comprender el alcance del sistema en el contexto colombiano:

    .BG02.p-5.mb-4
      .tarjeta.slider-custom-bg.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Supervisión institucional
              p La Superintendencia Financiera de Colombia inspecciona y controla que las organizaciones del sistema financiero cuenten con mecanismos efectivos de prevención, y aplica medidas correctivas cuando se detectan deficiencias en su implementación.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Soporte normativo
              p El sistema se sustenta en leyes y circulares nacionales complementadas con estándares internacionales, garantizando que las organizaciones respondan tanto al marco legal colombiano como a los compromisos del país ante la comunidad global.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Alcance del cumplimiento
              p Implementar el sistema satisface las obligaciones legales vigentes y, al mismo tiempo, reduce la exposición de las organizaciones a sanciones, investigaciones y pérdidas económicas derivadas de su vinculación con actividades ilícitas.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Confianza institucional
              p Las organizaciones que aplican el sistema con rigor proyectan ante clientes, usuarios e inversionistas una imagen de solidez y transparencia, lo que se traduce en relaciones comerciales estables y un posicionamiento favorable ante las autoridades regulatorias.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/img8.png', alt='Gráfico ilustrativo de uso de programa')
    p.mb-0 Estas cuatro dimensiones evidencian que el sistema trasciende el cumplimiento normativo y se convierte en una herramienta de gestión que fortalece la transparencia, protege la integridad institucional y contribuye al desarrollo sostenible del sistema económico.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Definición del sistema de administración del riesgo LA/FT
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El sistema de administración del riesgo de lavado de activos y financiación del terrorismo (LA/FT) se define como un conjunto organizado de políticas, procedimientos, controles y herramientas que permiten a las organizaciones prevenir que sus operaciones sean utilizadas para dar apariencia de legalidad a recursos provenientes de actividades ilícitas o para financiar actividades relacionadas con el terrorismo. Este sistema se fundamenta en la identificación y gestión de riesgos asociados a este tipo de delitos, con el propósito de proteger la integridad de las organizaciones y del sistema financiero.
    p La administración del riesgo LA/FT implica la aplicación de un proceso continuo mediante el cual las organizaciones identifican las posibles amenazas relacionadas con el lavado de activos y la financiación del terrorismo, evalúan su impacto y probabilidad de ocurrencia, y establecen mecanismos de control que permitan mitigarlas. Este proceso permite fortalecer los sistemas internos de control y garantizar que las actividades desarrolladas por la organización se realicen en cumplimiento de las normas legales y regulatorias vigentes.
    .BGINTRO02.px-5
      .row.mb-4
        .col-lg-9.order-2.order-lg-1
          p.mb-4 El sistema también promueve la adopción de buenas prácticas orientadas a fortalecer la transparencia en las operaciones financieras y comerciales. Entre estas prácticas se destacan cuatro acciones fundamentales que las organizaciones deben implementar para prevenir y detectar actividades relacionadas con el lavado de activos y la financiación del terrorismo:
          .tarjeta.bt02.p-4
            ul.lista-ul.mb-0
              li 
                i.lista-ul__vineta
                p.mb-0 #[b Conocimiento adecuado del cliente:] proceso mediante el cual la organización identifica y verifica la identidad de sus clientes, evalúa el origen de sus recursos y determina el nivel de riesgo asociado a cada relación comercial.
              li
                i.lista-ul__vineta
                p.mb-0 #[b Monitoreo permanente de las transacciones:] seguimiento continuo de las operaciones realizadas por los clientes con el fin de detectar comportamientos que se aparten de sus patrones habituales o que resulten injustificados en relación con su actividad económica.
              li
                i.lista-ul__vineta
                p.mb-0 #[b Identificación de operaciones inusuales o sospechosas:] proceso de análisis que permite reconocer transacciones que, por su monto, frecuencia o características, no corresponden al perfil financiero habitual del cliente y pueden estar relacionadas con actividades ilícitas.
              li
                i.lista-ul__vineta
                p.mb-0 #[b Reporte oportuno:] obligación de informar a las autoridades competentes, en los plazos establecidos por la normativa vigente, las operaciones que hayan sido identificadas como inusuales o sospechosas dentro de la organización.
        .col-lg-3.col-8.mb-4.mb-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema1/img10.png', alt='Gráfico ilustrativo de uso de programa')
    p.mb-4 De esta manera, las organizaciones contribuyen activamente en la prevención y detección de actividades relacionadas con el lavado de activos y la financiación del terrorismo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img11.svg', alt='AvatarTop')
          .tarjeta.color-primario.rounded-0.p-4
            p.text-center.mb-0 El cumplimiento del sistema SARLAFT no es solo una obligación normativa: es una responsabilidad que protege a la organización, a sus clientes y a la integridad del sistema financiero.
    .bloque-texto-gg.tarjeta.bt02
      .bloque-texto-gg__texto.p-4
        p.mb-0 La implementación del sistema de administración del riesgo LA/FT no se agota en el conocimiento de sus definiciones. Su verdadera eficacia depende de que las organizaciones adopten prácticas concretas de prevención, entre las cuales el conocimiento del cliente, el monitoreo de operaciones y el reporte oportuno constituyen los pilares fundamentales de la gestión diaria del riesgo.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img12.svg')})`}"
      )

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Importancia del SARLAFT en el sistema financiero
    p.mb-4 En el contexto del sistema financiero, la implementación del Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo – SARLAFT, es fundamental para proteger la integridad de las instituciones y garantizar la transparencia en las operaciones económicas. Este sistema permite establecer mecanismos de control que previenen el ingreso de recursos provenientes de actividades ilícitas al sistema financiero, evitando que las entidades sean utilizadas como medios para ocultar o movilizar capitales de origen ilegal.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
              img(src='@/assets/curso/temas/tema1/img13.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 De igual manera, el SARLAFT contribuye al fortalecimiento de la confianza en las instituciones financieras. Cuando las organizaciones aplican controles adecuados para la prevención del lavado de activos y la financiación del terrorismo, generan mayor seguridad para clientes, inversionistas y autoridades regulatorias. 
        p Por otra parte, la aplicación del SARLAFT permite a las entidades financieras gestionar de manera adecuada los riesgos asociados a sus operaciones. A través de procesos de identificación, evaluación y monitoreo de transacciones, las organizaciones pueden detectar comportamientos inusuales o sospechosos que puedan estar relacionados con actividades ilícitas. Esto facilita la adopción de medidas oportunas que reduzcan el impacto de dichos riesgos en la organización.
        .row.align-items-center.tarjeta.bt01.p-4
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img14.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Finalmente, la implementación del SARLAFT también fortalece el cumplimiento de las normas establecidas por las autoridades de supervisión y control. Las entidades que adoptan este sistema cumplen con los lineamientos regulatorios y contribuyen a la lucha contra el crimen financiero a nivel nacional e internacional. De esta forma, el SARLAFT se convierte en una herramienta clave para preservar la estabilidad, la transparencia y la credibilidad del sistema financiero.
    p En este sentido, la importancia del SARLAFT dentro del sistema financiero se refleja en diferentes aspectos relacionados con la gestión del riesgo y el cumplimiento normativo. Entre los principales beneficios de su implementación se destacan los siguientes:
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.bt06.p-4.rounded-0.mb-4
          ul.lista-ul.mb-0
            li
              i.fas.fa-lock(style="color: #CFDE90;")
              | Previene que las entidades financieras sean utilizadas para el lavado de activos o la financiación del terrorismo.
            li
              i.fas.fa-lock(style="color: #CFDE90;")
              | Fortalece los mecanismos de control y supervisión dentro de las organizaciones.
            li
              i.fas.fa-lock(style="color: #CFDE90;")
              | Promueve la transparencia en las operaciones financieras y comerciales.
            li
              i.fas.fa-lock(style="color: #CFDE90;")
              | Protege la reputación y credibilidad de las instituciones financieras.
            li
              i.fas.fa-lock(style="color: #CFDE90;")
              | Facilita la detección de operaciones inusuales o sospechosas.
            li
              i.fas.fa-lock(style="color: #CFDE90;")
              | Contribuye al cumplimiento de las normas establecidas por las autoridades regulatorias.
            li
              i.fas.fa-lock(style="color: #CFDE90;")
              | Apoya la estabilidad y seguridad del sistema financiero a nivel nacional e internacional.
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2.order-lg-1
            p La importancia del SARLAFT en el sistema financiero, descrita anteriormente, se materializa en el conjunto de propósitos concretos que orientan su implementación en las organizaciones. Comprender estos objetivos permite dimensionar el alcance del sistema y la responsabilidad que recae sobre cada entidad en la prevención del lavado de activos y la financiación del terrorismo, aspectos que se desarrollan en el siguiente apartado.             
          .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/tema1/img15.svg', width='180', alt='Texto que describa la imagen')
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Objetivos del sistema SARLAFT en las organizaciones
    
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El sistema de administración del riesgo de lavado de activos y financiación del terrorismo tiene como propósito principal establecer mecanismos que permitan a las organizaciones prevenir, detectar y controlar posibles situaciones relacionadas con el uso indebido de sus operaciones para actividades ilícitas. A través de este sistema, las entidades implementan políticas y procedimientos orientados a proteger la integridad de sus procesos y a garantizar que las actividades desarrolladas se realicen dentro del marco legal y regulatorio.
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p Asimismo, el SARLAFT busca fortalecer la gestión del riesgo dentro de las organizaciones mediante la identificación, evaluación y monitoreo de las operaciones que puedan representar un riesgo asociado al lavado de activos o a la financiación del terrorismo. Este enfoque permite a las entidades adoptar medidas preventivas que reduzcan la posibilidad de que sus servicios o productos sean utilizados para ocultar recursos de origen ilegal o para financiar actividades delictivas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .tarjeta.bt02.rounded-0.p-3.mb-4
          p.mb-0 Por otra parte, el sistema promueve la adopción de una cultura organizacional basada en la transparencia, el cumplimiento normativo y la responsabilidad institucional. En este sentido, el SARLAFT impulsa la capacitación del personal, la divulgación de las políticas internas y la implementación de controles que permitan fortalecer los procesos internos de supervisión y control dentro de las organizaciones.
        .row
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p En consecuencia, los objetivos del sistema SARLAFT en las organizaciones se orientan a garantizar una adecuada administración del riesgo y a contribuir en la lucha contra el lavado de activos y la financiación del terrorismo. Entre los principales objetivos se destacan los siguientes:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
              img(src='@/assets/curso/temas/tema1/img18.png', width='180', alt='Texto que describa la imagen')
    .fondo-slyder.px-5.p-5.mb-2
      .row.justify-content-center
        .col-lg-4.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img19.png", alt="alt").img400.m-auto
        .col-lg-8
          SlyderF.custom.mb-5(columnas="col-lg-4 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt").img100.m-auto
              h5.text-center Identificar los riesgos
              p.text-center.mb-0  Reconocer y evaluar los riesgos asociados al lavado de activos y la financiación del terrorismo dentro de las operaciones de la organización.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img21.svg", alt="alt").img100.m-auto
              h5.text-center Implementar controles
              p.text-center.mb-0  Establecer procedimientos que prevengan el uso indebido de las operaciones institucionales para actividades relacionadas con el LA/FT.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img22.svg", alt="alt").img100.m-auto
              h5.text-center Detectar operaciones sospechosas
              p.text-center.mb-0  Identificar transacciones inusuales que puedan estar relacionadas con actividades ilícitas dentro del sistema financiero.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img23.svg", alt="alt").img100.m-auto
              h5.text-center Reportar oportunamente
              p.text-center.mb-0  Informar a las autoridades competentes las operaciones que representen riesgos de lavado de activos o financiación del terrorismo.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img24.svg", alt="alt").img100.m-auto
              h5.text-center Fortalecer el control
              p.text-center.mb-0  Mejorar los sistemas internos de supervisión para garantizar la transparencia y seguridad de las operaciones institucionales.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-7
                  img(src="@/assets/curso/temas/tema1/img25.svg", alt="alt").img100.m-auto
              h5.text-center Cumplir la normativa
              p.text-center.mb-0  Asegurar el cumplimiento de las disposiciones legales vigentes en materia de prevención del LA/FT dentro de la organización.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bt01.p-4
          p El conjunto de objetivos descritos evidencia que el SARLAFT no se limita a una función sancionatoria, sino que constituye una herramienta de gestión proactiva que fortalece la cultura de cumplimiento dentro de las organizaciones y contribuye a la protección del sistema financiero. Comprender el alcance de estos objetivos resulta indispensable para dimensionar la importancia del sistema; por ello, el siguiente apartado profundiza en el concepto de lavado de activos, fenómeno que origina la necesidad de implementar mecanismos de control como el SARLAFT en el ámbito organizacional.
      .col-lg-3    
        img(src="@/assets/curso/temas/tema1/img26.png", alt="alt").img100.m-auto  

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
