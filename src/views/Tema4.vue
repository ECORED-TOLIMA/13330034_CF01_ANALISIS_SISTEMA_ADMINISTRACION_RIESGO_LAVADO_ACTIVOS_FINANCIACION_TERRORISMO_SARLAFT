<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Normatividad del sistema
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-2.order-lg-1
          p.mb-4 Comprender el marco normativo que regula la prevención del lavado de activos y la financiación del terrorismo es fundamental para que las organizaciones cumplan sus obligaciones legales. Este conjunto de disposiciones, establecidas a nivel nacional e internacional, orienta la implementación de controles que permiten identificar, evaluar y monitorear los riesgos asociados a estas actividades dentro de los procesos institucionales.
          .bt01.p-4
            p.mb-0 En el contexto colombiano, diferentes leyes y regulaciones han sido establecidas para fortalecer la prevención y control de estos delitos dentro del sistema financiero y en otros sectores económicos. Estas disposiciones asignan responsabilidades a las entidades vigiladas y establecen procedimientos para la identificación de operaciones inusuales o sospechosas, así como la obligación de reportar dichas operaciones a las autoridades competentes. De esta manera, se busca garantizar que las organizaciones adopten medidas efectivas para prevenir el uso indebido de sus servicios y productos financieros.
        .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/tema4/img1.png', width='180', alt='Texto que describa la imagen')
    .bloque-texto-gg.tarjeta.bt02.mb-3
      .bloque-texto-gg__texto.p-4
        .row
          .col-lg-auto.d-none.d-lg-block.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-12
            p.mb-0 Adicionalmente, este marco normativo se complementa con lineamientos y recomendaciones emitidas por organismos internacionales que promueven la cooperación entre países en la lucha contra el lavado de activos y la financiación del terrorismo. La adopción de estos estándares permite fortalecer los sistemas de control, mejorar los mecanismos de supervisión y contribuir al desarrollo de prácticas financieras transparentes y seguras.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img2.png')})`}"
      )
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Entre los principales organismos internacionales que orientan la prevención del lavado de activos y la financiación del terrorismo se encuentran el Grupo de Acción Financiera Internacional (GAFI), las Naciones Unidas, el Grupo Egmont, el Fondo Monetario Internacional (FMI) y el Grupo de Acción Financiera de Latinoamérica (GAFILAT), cuya articulación promueve estándares globales de supervisión y control (GAFI, 2012).
    p.mb-3 A continuación, se describe el papel que cada uno desempeña en la lucha contra estas actividades ilícitas:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Grupo de Acción Financiera Internacional (GAFI)")
            p Organismo intergubernamental que establece los estándares internacionales para combatir el lavado de activos y la financiación del terrorismo. Sus 40 recomendaciones constituyen el referente global en materia de prevención y son adoptadas por los países como base de sus marcos regulatorios internos.
          .row(numero="2" titulo="Naciones Unidas (ONU)")
            p A través de diferentes convenciones internacionales, establece los compromisos que los Estados deben adoptar para combatir el lavado de activos y la financiación del terrorismo, promoviendo la cooperación entre países y el fortalecimiento de los sistemas de supervisión financiera a nivel global.
          .row(numero="3" titulo="Grupo Egmont")
            p Red internacional de Unidades de Inteligencia Financiera que facilita el intercambio de información entre países para identificar y prevenir operaciones relacionadas con el lavado de activos y la financiación del terrorismo.
          .row(numero="4" titulo="Fondo Monetario Internacional (FMI) y Banco Mundial")
            p Apoyan los países en la implementación de sistemas de prevención del lavado de activos mediante asistencia técnica, evaluaciones y recomendaciones orientadas a fortalecer los marcos regulatorios nacionales.
          .row(numero="5" titulo="Grupo de Acción Financiera de Latinoamérica (GAFILAT)")
            p Organismo regional que adapta los estándares del GAFI al contexto latinoamericano y evalúa el cumplimiento de sus miembros, entre ellos Colombia, en materia de prevención del lavado de activos y financiación del terrorismo.
      .col-lg-3.col-6.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img4.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
              img(src='@/assets/curso/temas/tema4/img5.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Las recomendaciones emitidas por estos organismos constituyen el soporte técnico sobre el cual los países construyen sus marcos normativos internos. Su adopción fortalece los sistemas de supervisión y promueve una cultura de cooperación internacional indispensable para enfrentar fenómenos cuya naturaleza trasciende las fronteras de cualquier Estado.
        .bt02.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img6.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En coherencia con estos compromisos internacionales, Colombia ha desarrollado un conjunto de normas internas que traducen dichos estándares en obligaciones concretas para las organizaciones y entidades vigiladas. En la siguiente tabla se presentan las principales disposiciones que conforman este marco regulatorio.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 3.
              span Principales normas relacionadas con el sistema SARLAFT
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .tabla-a.color-acento-contenido 
              .tabla-a   
                table
                  thead
                    tr
                      th Norma
                      th Descripción
                  tbody
                    tr
                      th Constitución Política de Colombia (1991)
                      td Establece los principios fundamentales del orden jurídico y las bases para la regulación de las actividades económicas y financieras.
                    tr   
                      th Ley 526 de 1999
                      td Crea la Unidad de Información y Análisis Financiero (UIAF), encargada de prevenir y detectar operaciones relacionadas con el lavado de activos.
                    tr
                      th Ley 1121 de 2006
                      td Establece medidas para la prevención, detección e investigación de la financiación del terrorismo.
                    tr
                      th Ley 1266 de 2008
                      td Regula el manejo de la información financiera y crediticia, fortaleciendo los mecanismos de control y supervisión.
                    tr
                      th Circular básica jurídica de la superintendencia financiera
                      td Contiene los lineamientos para la implementación del sistema SARLAFT en las entidades vigiladas.
                    tr
                      th Recomendaciones del GAFI
                      td Estándares internacionales orientados a la prevención del lavado de activos y la financiación del terrorismo.
    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p Las normas relacionadas en la tabla anterior configuran el soporte jurídico sobre el cual se sustenta la implementación del sistema de administración del riesgo en las organizaciones colombianas. Su articulación coherente permite establecer un marco de actuación claro que orienta a las entidades en el cumplimiento de sus obligaciones de prevención, detección y reporte frente al lavado de activos y la financiación del terrorismo.
        .tarjeta.bt02.p-4
          p.mb-0 Dado que estos fenómenos trascienden las fronteras nacionales, la normatividad que los regula no se limita al ámbito interno de cada país, sino que se nutre de acuerdos, convenios y estándares desarrollados en el plano internacional. Reconocer estos referentes normativos resulta fundamental para comprender el alcance global del sistema y la responsabilidad que tienen los Estados en la articulación de estrategias conjuntas de prevención y control.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
              img(src='@/assets/curso/temas/tema4/img7.png', width='180', alt='Texto que describa la imagen')

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Normatividad internacional

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img8.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p La lucha contra el lavado de activos y la financiación del terrorismo no es una tarea exclusiva de los Estados de manera individual, sino que requiere la cooperación y coordinación entre diferentes países y organismos internacionales. Por esta razón, a lo largo de las últimas décadas se han desarrollado diversos acuerdos, convenios y estándares internacionales orientados a establecer lineamientos comunes que permitan prevenir, detectar y sancionar estas actividades ilícitas a nivel global.
        .row.tarjeta.bt01.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img9.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p En este contexto, diferentes organismos internacionales han promovido la adopción de políticas y recomendaciones que fortalecen los sistemas de control financiero y fomentan la transparencia en las operaciones económicas. Estas normas buscan establecer marcos regulatorios que permitan a los países implementar mecanismos eficaces de supervisión, intercambio de información y cooperación internacional en la lucha contra el lavado de activos y la financiación del terrorismo.
    p.mb-5 El marco normativo internacional en materia de prevención del lavado de activos y la financiación del terrorismo está conformado por un conjunto de instrumentos jurídicos que establecen compromisos concretos para los Estados. Entre los principales se destacan los siguientes:
    .BGINTRO03.px-5.p-4
      LineaTiempoE.color-acento-contenido
        .row(titulo="1988")
          .col-lg-2.col-8.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img10.svg', alt='Texto que describa la imagen')
          .col-lg-9.mb-4.mb-lg-0
            h4  Convención de Viena
            p Primer instrumento internacional que tipificó el lavado de activos como delito, estableciendo la obligación de los Estados de penalizar el tráfico ilícito de estupefacientes y las actividades financieras asociadas a este delito. 

        .row(titulo="2000")
          .col-lg-2.col-8.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img11.svg', alt='Texto que describa la imagen')
          .col-lg-9.mb-4.mb-lg-0
            h4 Convención de Palermo
            p Amplió el marco normativo internacional para incluir la delincuencia organizada transnacional, estableciendo mecanismos de cooperación entre países para investigar, prevenir y sancionar este tipo de actividades ilícitas. 
          
        .row(titulo="1999")
          .col-lg-2.col-8.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img12.svg', alt='Texto que describa la imagen')
          .col-lg-9.mb-4.mb-lg-0
            h4 Convenio internacional para la represión de la financiación del terrorismo
            p Instrumento jurídico de las Naciones Unidas que obliga a los Estados a tipificar como delito la financiación del terrorismo y a adoptar medidas para prevenir, detectar y sancionar este tipo de actividades dentro de sus sistemas financieros.
          
        .row(titulo="2012")
          .col-lg-2.col-8.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema4/img13.svg', alt='Texto que describa la imagen')
          .col-lg-9.mb-4.mb-lg-0
            h4 40 recomendaciones del GAFI
            p Estándares internacionales que orientan a los países en la implementación de sistemas de prevención del lavado de activos y la financiación del terrorismo, incluyendo disposiciones sobre identificación de clientes, monitoreo de operaciones y reporte de transacciones sospechosas.
    .row
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 En coherencia con estos compromisos internacionales, Colombia ha desarrollado un conjunto de normas internas que traducen dichos estándares en obligaciones concretas para las organizaciones y entidades vigiladas. Conocer este marco regulatorio nacional permite comprender las responsabilidades específicas que recaen sobre las instituciones colombianas en materia de prevención, detección y reporte frente al riesgo del lavado de activos y la financiación del terrorismo.
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Normatividad nacional

    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, la prevención y control del lavado de activos y la financiación del terrorismo se encuentra regulada por un conjunto de normas legales que establecen las responsabilidades de las organizaciones y de las entidades de supervisión. Estas disposiciones buscan fortalecer los mecanismos de control dentro del sistema financiero y en otros sectores económicos, con el fin de evitar que las actividades ilícitas afecten la estabilidad económica y el orden institucional del país.
    p.mb-4 Las normas establecidas por el Estado colombiano asignan a las entidades vigiladas cuatro obligaciones concretas que orientan la gestión del riesgo dentro de sus operaciones. Cada una de ellas cumple una función específica dentro del sistema de prevención y control, tal como se presenta a continuación:
    .bg_img_01.mb-4
      .row.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema4/img15.svg", alt="alt")
            h4.text-center Implementación de sistemas
            p.text-center.mb-0 Adopción de políticas y herramientas internas para prevenir y controlar los riesgos asociados al lavado de activos y la financiación del terrorismo.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema4/img16.svg", alt="alt")
            h4.text-center Administración del riesgo
            p.text-center.mb-0 Identificación y control de los riesgos que puedan exponer a la organización a situaciones relacionadas con actividades ilícitas.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema4/img17.svg", alt="alt")
            h4.text-center Monitoreo de operaciones
            p.text-center.mb-0 Seguimiento permanente de las transacciones de los clientes para detectar comportamientos inusuales o sospechosos.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema4/img18.svg", alt="alt")
            h4.text-center Reporte de transacciones
            p.text-center.mb-0 Obligación de informar a la UIAF las operaciones identificadas como sospechosas dentro de los procesos de la organización.
    p.mb-4 Las obligaciones descritas evidencian que el cumplimiento del marco normativo nacional no es una tarea opcional, sino una responsabilidad institucional que garantiza la transparencia de las operaciones y protege a las organizaciones frente a los riesgos asociados al lavado de activos y la financiación del terrorismo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .tarjeta.bt01.p-4
          p Asimismo, la normatividad nacional ha fortalecido el papel de las entidades encargadas de la supervisión y control, como la Superintendencia Financiera de Colombia y la Unidad de Información y Análisis Financiero (UIAF), que tienen la responsabilidad de monitorear el cumplimiento de las disposiciones legales y de analizar la información relacionada con posibles operaciones vinculadas a actividades ilícitas.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema4/img19.svg", alt="alt").img90.m-auto
    p.mb-0 El marco normativo nacional descrito establece las bases sobre las cuales las organizaciones colombianas estructuran sus sistemas de prevención y control; sin embargo, su efectividad depende en gran medida de la capacidad institucional del Estado para supervisar su cumplimiento. Esta supervisión recae sobre un conjunto de entidades especializadas que, de manera articulada, velan por la correcta aplicación de las disposiciones legales y garantizan que las organizaciones adopten medidas adecuadas frente al riesgo del lavado de activos y la financiación del terrorismo.
 

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Entidades responsables de la regulación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img20.svg',  alt='Texto que describa la imagen')
      .col-lg-8
        p La prevención y control del lavado de activos y la financiación del terrorismo requiere la participación de diversas entidades del Estado encargadas de establecer normas, supervisar su cumplimiento y coordinar acciones para detectar posibles actividades ilícitas. Estas instituciones desempeñan un papel fundamental en el fortalecimiento de los mecanismos de control dentro del sistema financiero y en otros sectores de la economía.
        .row
          .col-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En Colombia, el marco regulatorio del sistema SARLAFT es supervisado por diferentes organismos que tienen funciones específicas relacionadas con la regulación, vigilancia y análisis de la información financiera. Estas entidades trabajan de manera articulada para garantizar que las organizaciones cumplan con las normas establecidas y para identificar operaciones que puedan estar vinculadas con el lavado de activos o la financiación del terrorismo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img21.svg', alt='AvatarTop')
          .tarjeta.color-primario.p-4
            p.text-center.mb-0 La prevención del lavado de activos y la financiación del terrorismo es una responsabilidad compartida. Su efectividad depende de la actuación coordinada entre las entidades del Estado y las organizaciones del sistema financiero.
    p.mb-4 Cada entidad cumple funciones específicas que, en conjunto y de forma articulada, contribuyen a garantizar la transparencia del sistema financiero y la aplicación efectiva del marco normativo. Entre las principales se destacan las siguientes:
    .row.justify-content-center.fondo-slyder.mb-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/img22.png", alt="alt").img400.m-auto
      .col-lg-8
        p.mb-5
        SlyderF.custom.mb-5(columnas="col-lg-4 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema4/img23.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Superintendencia Financiera de Colombia, encargada de supervisar y regular las entidades del sistema financiero.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema4/img24.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Unidad de Información y Análisis Financiero (UIAF), responsable de analizar información financiera relacionada con posibles operaciones de lavado de activos.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema4/img24.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Fiscalía General de la Nación, encargada de investigar y judicializar los delitos relacionados con el lavado de activos y la financiación del terrorismo.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema4/img25.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Banco de la República, que participa en la regulación y estabilidad del sistema financiero.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema4/img26.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Superintendencia de Sociedades, responsable de supervisar a las empresas en materia de cumplimiento de normas relacionadas con el riesgo LA/FT.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-9
                img(src="@/assets/curso/temas/tema4/img27.svg", alt="alt").img100.m-auto
            p.text-center.mb-0 Dirección de Impuestos y Aduanas Nacionales (DIAN), encargada de controlar operaciones relacionadas con comercio exterior y posibles delitos financieros.
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La articulación de estas entidades configura un sistema de supervisión que actúa de manera coordinada para garantizar la integridad del sistema financiero y la transparencia de las actividades económicas en el país. No obstante, la efectividad de este marco regulatorio e institucional depende también de la capacidad de las propias organizaciones para reconocer e identificar los riesgos a los que se exponen cuando sus operaciones pueden ser utilizadas para actividades ilícitas. Es precisamente este reconocimiento el que sustenta el análisis de los riesgos asociados al lavado de activos y la financiación del terrorismo, que se desarrolla a continuación.

</template>

<script>
export default {
  name: 'Tema4',
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
