<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Concepto de lavado de activos
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema2/img1.svg', width='180', alt='Texto que describa la imagen')
        .col-lg-8
          p El lavado de activos es el proceso mediante el cual se busca dar apariencia de legalidad a recursos que han sido obtenidos a través de actividades ilícitas. Este proceso implica la realización de diferentes operaciones financieras, comerciales o económicas con el objetivo de ocultar el origen real de los recursos y permitir que estos ingresen al sistema económico formal como si provinieran de actividades legítimas.
          .bt06.p-4
            p.mb-0 Este fenómeno representa una amenaza real para la estabilidad económica e institucional de los países, pues su impacto no se limita al ámbito financiero, sino que afecta también la competencia entre organizaciones, debilita la confianza en las instituciones y facilita el fortalecimiento de estructuras criminales. Por ello, su identificación oportuna y la implementación de controles efectivos resultan indispensables para preservar la transparencia del sistema financiero y proteger la integridad de las organizaciones que en él participan.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 El lavado de activos opera mediante mecanismos específicos que, de forma encadenada, permiten ocultar el origen ilícito de los recursos e integrarlos a la economía formal. En el siguiente recurso se presentan los cinco mecanismos principales que caracterizan este proceso, los cuales pueden explorarse de manera interactiva seleccionando cada elemento.
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img2.svg', alt='Infografía de matriz RACI')
            .tarjeta.tarjeta.bt01.p-3(x="12%" y="66%" numero="+")
              p Dinero obtenido de actividades delictivas que se busca introducir al sistema financiero con apariencia legal. 

            .tarjeta.tarjeta.bt01.p-3(x="31%" y="66%" numero="+")
              p Movimiento de recursos a través de múltiples cuentas bancarias para fragmentar las operaciones y evitar controles. 
            
            .tarjeta.tarjeta.bt01.p-3(x="50%" y="66%" numero="+")
              p Adquisición de inmuebles, vehículos o bienes de alto valor para transformar el efectivo ilícito en activos. 

            .tarjeta.tarjeta.bt01.p-3(x="69%" y="66%" numero="+")
              p Inyección de recursos ilegales en negocios legítimos para mezclarlos con ingresos lícitos. 
            
            .tarjeta.tarjeta.bt01.p-3(x="89%" y="66%" numero="+")
              p Personas o empresas pantalla que realizan operaciones ocultando la identidad del verdadero beneficiario. 
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img2_1.svg', alt='Matriz RACI para dispositivos móviles')
    .row.mb-4
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Este fenómeno compromete la estabilidad económica de los países y debilita la transparencia de los mercados, al facilitar el fortalecimiento de organizaciones criminales que se benefician del ingreso de recursos ilegales a la economía formal. Ante este escenario, los gobiernos y las autoridades de control han desarrollado sistemas especializados de prevención y supervisión orientados a detectar y controlar las operaciones relacionadas con el lavado de activos dentro de las organizaciones y del sistema financiero.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img4.svg', alt='AvatarTop')
          .tarjeta.color-primario.rounded-0.p-4
            p.text-center.mb-0 El lavado de activos no solo perjudica al sistema financiero, compromete la estabilidad de toda la economía y debilita las instituciones encargadas de garantizar la legalidad en las actividades comerciales.
    .bloque-texto-gg.tarjeta.bt02.mb-5
      .bloque-texto-gg__texto.p-4
        .row
            .col-lg-auto.d-none.d-lg-block.mb-2
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 Para comprender mejor el concepto de lavado de activos, es importante identificar algunos de los elementos que caracterizan este proceso dentro del sistema económico y financiero. El lavado de activos no solo implica la ocultación del origen ilegal de los recursos, sino también la utilización de diferentes mecanismos y operaciones que buscan integrarlos a la economía formal. En la siguiente tabla se presentan algunos aspectos clave que permiten entender las características principales del lavado de activos.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img5.png')})`}"
      )
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Características del lavado de activos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Aspecto
                  th Descripción
              tbody
                tr
                  th Origen de los recursos
                  td Los recursos provienen de actividades ilícitas como narcotráfico, corrupción, contrabando, extorsión o fraude.
                tr
                  th Proceso de ocultamiento
                  td Se realizan diversas operaciones financieras o comerciales para ocultar el origen ilegal del dinero.
                tr
                  th Uso del sistema financiero
                  td Las entidades financieras pueden ser utilizadas para movilizar o transformar los recursos ilícitos.
                tr
                  th Apariencia de legalidad
                  td El objetivo final es que los recursos parezcan provenientes de actividades legales.
                tr
                  th Impacto económico
                  td Genera distorsiones en los mercados y afecta la transparencia del sistema financiero.
                tr
                  th Riesgo para las organizaciones
                  td Las empresas pueden verse involucradas directa o indirectamente si no cuentan con controles adecuados.
    p.mb-0 Los aspectos señalados en la tabla permiten dimensionar el alcance del lavado de activos como fenómeno que trasciende el ámbito financiero y compromete la estabilidad económica en su conjunto. A continuación, se presenta la definición formal de este concepto y los delitos con los que se asocia.                


    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Definición de lavado de activos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p El lavado de activos se define como el conjunto de operaciones realizadas con el propósito de ocultar o encubrir el origen ilícito de determinados recursos económicos, de manera que puedan ser incorporados al sistema financiero o a la economía formal como si provinieran de actividades legales. Este proceso busca transformar dinero o bienes obtenidos mediante actividades ilegales en recursos aparentemente legítimos, dificultando su identificación por parte de las autoridades encargadas del control y supervisión.
        .bt01.p-4
          p.mb-0 En términos generales, el lavado de activos implica la realización de diversas transacciones financieras o comerciales que permiten disimular la procedencia real de los recursos. Para lograrlo, quienes participan en estas prácticas suelen utilizar múltiples mecanismos como transferencias bancarias, compra de bienes, inversiones en negocios o el uso de intermediarios, con el objetivo de fragmentar las operaciones y dificultar el seguimiento del dinero.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
            img(src='@/assets/curso/temas/tema2/img8.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        .row.mb-4
          .col-lg-10
            p.mb-0 Asimismo, el lavado de activos suele estar relacionado con diferentes actividades delictivas que generan grandes cantidades de recursos ilegales. Entre estas actividades se encuentran el narcotráfico, la corrupción, el contrabando, la extorsión, el tráfico de armas, el fraude financiero y otros delitos que buscan obtener beneficios económicos de manera ilícita.
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
        .row
          .col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img9.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-9
            p.mb-0 El proceso del lavado de activos no ocurre de manera espontánea, sino que sigue una secuencia de etapas orientadas a garantizar que los recursos ilícitos queden incorporados a la economía formal sin ser detectados. En la siguiente figura se ilustran las cuatro etapas que caracterizan este proceso, desde la realización de las primeras transacciones financieras hasta la dificultad deliberada del seguimiento del dinero por parte de las autoridades.
    .BGINTRO03.px-5.mb-4
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 1.
            span Proceso de lavado de activos
      .row.justify-content-center
        .col-lg-10.d-block.d-lg-none
          figure
              img(src='@/assets/curso/temas/tema2/img10_1.svg', alt='Diagrama secuencial con cuatro etapas que ilustra el proceso del lavado de activos: la realización de transacciones financieras para encubrir la procedencia ilícita de los recursos, el empleo de mecanismos de ocultamiento mediante transferencias bancarias, adquisición de bienes e intermediarios, la fragmentación de operaciones en montos menores para evitar su detección y la dificultad deliberada del seguimiento del dinero por parte de las entidades de supervisión financiera. ')
        .col-lg-10.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/img10.svg', alt='Diagrama secuencial con cuatro etapas que ilustra el proceso del lavado de activos: la realización de transacciones financieras para encubrir la procedencia ilícita de los recursos, el empleo de mecanismos de ocultamiento mediante transferencias bancarias, adquisición de bienes e intermediarios, la fragmentación de operaciones en montos menores para evitar su detección y la dificultad deliberada del seguimiento del dinero por parte de las entidades de supervisión financiera. ')
    .row.justify-content-center.align-items-center
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Las etapas descritas evidencian que el lavado de activos es un proceso sistemático y deliberado, cuyo éxito depende de la capacidad de quienes lo ejecutan para fragmentar, transformar y ocultar el origen de los recursos. El conocimiento de estas etapas resulta fundamental para que las organizaciones puedan identificar señales de alerta en sus operaciones y activar oportunamente los mecanismos de control establecidos por el sistema SARLAFT.
    
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Delitos asociados al lavado de activos
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img11.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El lavado de activos suele estar vinculado a diferentes actividades delictivas que generan recursos económicos de origen ilegal. Estas actividades buscan obtener beneficios financieros mediante prácticas ilícitas que posteriormente requieren ser ocultadas o encubiertas para poder introducir el dinero en la economía formal. En este sentido, el lavado de activos funciona como un mecanismo que permite a las organizaciones criminales dar apariencia de legalidad a los recursos obtenidos a través de diversos delitos.
    p En muchos casos, los recursos procedentes de actividades ilícitas se movilizan mediante operaciones financieras complejas que dificultan su seguimiento por parte de las autoridades. Estas operaciones pueden involucrar el uso de múltiples cuentas bancarias, transferencias internacionales, inversiones en bienes o negocios, así como la participación de intermediarios que facilitan la circulación del dinero.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Asimismo, el lavado de activos no se limita a un solo tipo de delito, sino que puede estar asociado a una amplia variedad de actividades criminales que generan ganancias ilícitas. Estas actividades afectan no solo la estabilidad económica de los países, sino también la seguridad y el orden social, ya que muchas de ellas están relacionadas con organizaciones criminales que operan a nivel nacional e internacional. 
        p.mb-0 Entre los principales delitos asociados al lavado de activos se encuentran los siguientes:
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', width='180', alt='Texto que describa la imagen')
          
    .bt06.p-4.mb-4
      ul.lista-ul
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Narcotráfico:] producción, distribución y comercialización ilegal de sustancias estupefacientes, actividad que genera grandes cantidades de dinero que posteriormente requieren ser ocultadas en el sistema financiero.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Corrupción y soborno:] uso indebido del poder público o privado para obtener beneficios económicos ilícitos mediante el pago de dádivas, favores o recompensas a funcionarios o particulares con capacidad de decisión.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Contrabando de mercancías:] importación o exportación de bienes sin cumplir los requisitos legales y sin el pago de los tributos correspondientes, con el fin de obtener ganancias ilícitas que deben ser integradas a la economía formal.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Extorsión y secuestro:] obtención de recursos económicos mediante amenazas, coacción o privación ilegal de la libertad de personas, generando ingresos de origen ilícito que deben ser ocultados.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Tráfico de armas:] comercio ilegal de armas, municiones o material bélico al margen de los controles estatales, actividad que produce recursos que requieren ser incorporados a la economía a través de mecanismos de lavado.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Trata de personas:] captación, traslado o explotación de personas mediante engaño, coacción o abuso con fines de explotación laboral o sexual, delito que genera ganancias ilícitas de alto valor.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Fraude financiero y estafas:] obtención de recursos de manera fraudulenta mediante engaño, manipulación de información financiera o uso indebido de instrumentos de crédito, en perjuicio de personas o entidades.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Evasión fiscal:] ocultamiento de ingresos, bienes o actividades económicas ante las autoridades tributarias con el fin de evitar el pago de impuestos, generando recursos no declarados que se integran ilegalmente al sistema financiero.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Minería ilegal:] explotación de recursos mineros sin la autorización legal correspondiente y sin cumplir las normas ambientales.
        li
          i.fas.fa-lock(style="color: #CFDE90;")
          p.mb-0 #[b Delitos relacionados con el terrorismo:] acciones violentas o amenazas planificadas para generar terror, desestabilizar instituciones o ejercer presión política, que requieren financiación mediante recursos de origen lícito o ilícito.
    .row.justify-content-center
      .col-lg-10
        p La diversidad de delitos enumerados pone de manifiesto que el lavado de activos no responde a un fenómeno aislado, sino que actúa como mecanismo transversal que articula múltiples formas de criminalidad organizada. Esta vinculación con distintas actividades ilícitas amplía considerablemente el espectro de riesgo al que se exponen las organizaciones e instituciones financieras, y justifica la necesidad de contar con sistemas de control robustos como el SARLAFT. En el siguiente apartado se analiza el impacto concreto que el lavado de activos genera sobre la economía de los países.    

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Impacto del lavado de activos en la economía
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
            img(src='@/assets/curso/temas/tema2/img14.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p El lavado de activos tiene efectos negativos significativos sobre la economía de los países, ya que permite la circulación de recursos provenientes de actividades ilícitas dentro del sistema económico formal. Cuando estos recursos ingresan a la economía legal, generan distorsiones en los mercados, afectan la competencia entre empresas y debilitan la transparencia en las actividades financieras y comerciales.
        .row
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 El ingreso de capitales de origen ilícito altera el funcionamiento normal de los mercados financieros y productivos. Las organizaciones criminales destinan cuantiosos recursos a diferentes sectores de la economía con el fin de legitimar sus ganancias, lo que genera distorsiones que afectan la competencia e impactan a las empresas que operan dentro del marco de la legalidad. Entre los sectores más vulnerables a esta infiltración se destacan los siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Sector inmobiliario y construcción")
            p Las organizaciones criminales adquieren inmuebles, financian obras o constituyen empresas constructoras para introducir grandes sumas de dinero ilícito disfrazadas de inversión legal en propiedad raíz.
          .row(numero="2" titulo="Comercio y negocios de fachada")
            p Se crean o adquieren empresas comerciales, restaurantes, tiendas, lavaderos de vehículos, que mezclan ingresos ilegales con ventas reales, haciendo que el dinero ilícito aparezca como utilidad legítima del negocio.
          .row(numero="3" titulo="Mercados financieros y de valores")
            p Los recursos ilícitos se canalizan hacia la compra de acciones, bonos o instrumentos financieros, aprovechando la velocidad y el volumen de las transacciones para diluir el rastro del dinero entre operaciones legítimas.
          .row(numero="4" titulo="Sector minero y recursos naturales")
            p La minería ilegal y la comercialización irregular de recursos naturales permiten generar ingresos en efectivo que se mezclan con la producción legal, dificultando la identificación del origen real de los recursos.
          .row(numero="5" titulo="Industria automotriz y de bienes de lujo")
            p La compra de vehículos de alto valor, joyas, obras de arte o bienes suntuarios permite transformar el efectivo ilícito en activos cuya procedencia resulta más difícil de rastrear por las autoridades de control.
          .row(numero="6" titulo="Sector agropecuario y rural")
            p La adquisición de tierras, fincas o empresas agroindustriales con recursos de origen ilícito permite a las organizaciones criminales influir en economías regionales y ocultar ingresos bajo la figura de actividades productivas legales.
      .col-lg-3.col-6.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img15.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.tarjeta.bt02.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img16.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 La presencia de capitales ilícitos en estos sectores genera una competencia desleal que perjudica a las organizaciones que operan dentro del marco de la legalidad, al tiempo que distorsiona los precios, debilita la transparencia de los mercados y facilita el fortalecimiento de las estructuras criminales que los utilizan.
    .row.mb-4
      .col-lg-11
        p.mb-0 Por otra parte, este fenómeno también impacta el desarrollo económico y social de los países, debido a que los recursos provenientes de actividades ilícitas suelen estar asociados con delitos que afectan la seguridad, la institucionalidad y el bienestar de la sociedad. Por esta razón, los gobiernos y organismos internacionales han establecido diferentes mecanismos de control y supervisión orientados a prevenir y combatir el lavado de activos dentro de las organizaciones y del sistema financiero.
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
    p.mb-4 Entre los principales impactos del lavado de activos en la economía se destacan los siguientes:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bt06.p-4
          .row.justify-content-center.align-items-center
            .col-lg-7.order-2.order-lg-1
                ul.lista-ul
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Distorsión de los mercados y de la competencia económica.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Afectación de la estabilidad del sistema financiero.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Incremento del riesgo reputacional para las instituciones financieras.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Pérdida de confianza en las instituciones económicas.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Facilitación del crecimiento de organizaciones criminales.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Reducción de la transparencia en las actividades económicas.
                  li
                    i.fas.fa-lock(style="color: #CFDE90;")
                    | Afectación del desarrollo económico y social de los países.
            .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img17.png', width='180', alt='Texto que describa la imagen')   
    .row
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img18.svg', width='180', alt='Texto que describa la imagen')                
      .col-lg-9
        p Los impactos señalados evidencian que el lavado de activos no constituye un delito de consecuencias exclusivamente financieras, sino que compromete la estabilidad institucional, social y económica de los países en su conjunto. Ante la magnitud de estos efectos, resulta indispensable que las organizaciones adopten mecanismos efectivos de prevención y control que permitan detectar y mitigar oportunamente los riesgos asociados a este fenómeno. Con este propósito, el siguiente apartado aborda la financiación del terrorismo, actividad ilícita estrechamente vinculada al lavado de activos y que, junto con este, constituye el eje central del sistema de administración del riesgo en las organizaciones.

</template>

<script>
export default {
  name: 'Tema2',
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
