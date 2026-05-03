<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Financiación del terrorismo
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los impactos señalados evidencian que el lavado de activos no constituye un delito de consecuencias exclusivamente financieras, sino que compromete la estabilidad institucional, social y económica de los países en su conjunto. Ante la magnitud de estos efectos, resulta indispensable que las organizaciones adopten mecanismos efectivos de prevención y control que permitan detectar y mitigar oportunamente los riesgos asociados a este fenómeno. Con este propósito, el siguiente apartado aborda la financiación del terrorismo, actividad ilícita estrechamente vinculada al lavado de activos y que, junto con este, constituye el eje central del sistema de administración del riesgo en las organizaciones.
    p.mb-4 Las organizaciones terroristas recurren a diferentes mecanismos financieros para obtener y movilizar recursos, con el propósito de ocultar su destino final y eludir los controles de las autoridades de supervisión financiera. A continuación, se presentan los principales mecanismos utilizados con este fin:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Donaciones")
            p recursos entregados voluntariamente bajo apariencia de actos benéficos o religiosos, que encubren la transferencia de fondos hacia organizaciones o individuos vinculados con actividades terroristas.
          .row(numero="2" titulo="Transferencias internacionales")
            p movimientos de dinero a través de sistemas bancarios o canales alternativos entre diferentes países, que permiten movilizar recursos de forma rápida y dificultando su rastreo por parte de las autoridades.
          .row(numero="3" titulo="Actividades comerciales")
            p negocios aparentemente legítimos utilizados para generar ingresos que financian operaciones terroristas, mezclando recursos ilícitos con ganancias reales para otorgarles apariencia de legalidad.
          .row(numero="4" titulo="Organizaciones ficticias")
            p entidades creadas sin actividad real cuyo único propósito es canalizar y movilizar recursos hacia grupos terroristas, aprovechando vacíos en los sistemas de supervisión y registro.
          .row(numero="5" titulo="Uso indebido de instituciones financieras")
            p aprovechamiento de debilidades en los controles internos de entidades financieras para realizar transacciones que permiten mover o transformar fondos destinados a actividades terroristas.
      .col-lg-3.col-6.mb-4.mb-lg-0.order-1.order-2
        figure
          img(src='@/assets/curso/temas/tema3/img2.png', alt='')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Todos estos mecanismos tienen en común la intención de ocultar el destino real de los recursos y eludir los sistemas de supervisión financiera. Su identificación oportuna por parte de las organizaciones constituye una responsabilidad central del sistema SARLAFT, orientada a prevenir que las entidades sean utilizadas como canal para financiar actividades terroristas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img3.svg', alt='AvatarTop')
          .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 La financiación del terrorismo es considerada un delito de gran impacto a nivel internacional. Por ello, los gobiernos y organismos internacionales han desarrollado mecanismos de control y cooperación orientados a identificar, prevenir y sancionar este tipo de actividades, fortaleciendo los sistemas de supervisión financiera.
    .bloque-texto-gg.bt06.mb-4
      .bloque-texto-gg__texto.p-4
        p.mb-0 Para comprender mejor el concepto de financiación del terrorismo, es importante identificar algunos elementos que permiten reconocer cómo se desarrollan estas actividades y cuáles son sus principales características dentro del sistema financiero y económico. A diferencia de otras actividades ilícitas orientadas únicamente a obtener beneficios económicos, la financiación del terrorismo tiene como objetivo principal apoyar o facilitar la realización de actos que buscan generar miedo, desestabilización social o presión política. En la siguiente tabla se presentan algunos aspectos relevantes que permiten comprender las características de este fenómeno.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img4.png')})`}"
      )    

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Características de la financiación del terrorismo
    .row.justify-content-center.align-items-center.mb-5
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
                  td Los recursos pueden provenir de actividades ilícitas o de fuentes aparentemente legales como donaciones, negocios o transferencias.
                tr
                  th Finalidad de los recursos
                  td Financiar actividades relacionadas con actos terroristas, adquisición de materiales o apoyo a organizaciones terroristas.
                tr
                  th Mecanismos utilizados
                  td Uso de transferencias financieras, intermediarios, organizaciones ficticias o movimientos de dinero entre diferentes países.
                tr
                  th Dificultad de detección
                  td Las operaciones pueden mezclarse con transacciones legítimas, lo que dificulta su identificación.
                tr
                  th Impacto en la seguridad
                  td Representa una amenaza directa para la estabilidad social, política y económica de los países.
                tr
                  th Necesidad de control
                  td Requiere sistemas de prevención y supervisión como el SARLAFT para detectar y prevenir estas operaciones.
    
    .row.justify-content-center.align-items-center.mb-4.fondo-1
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img5.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        .row
            .col-lg-auto.d-none.d-lg-block.mb-2
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 Los aspectos recogidos en la tabla anterior permiten comprender que la financiación del terrorismo presenta características propias que la distinguen de otras actividades ilícitas, tanto por la procedencia de sus recursos como por la finalidad a la que estos se destinan. Su capacidad para mezclarse con transacciones aparentemente legítimas la convierte en uno de los fenómenos de mayor dificultad de detección dentro del sistema financiero, lo que exige la implementación de mecanismos especializados de supervisión y control. 
    p.mb-4 La comprensión del concepto de financiación del terrorismo constituye el punto de partida para reconocer las situaciones de riesgo a las que se exponen las organizaciones. En el siguiente recurso interactivo, se presentan los elementos que hacen indispensable contar con una definición precisa de este fenómeno:
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='Infografía de matriz RACI')
            .tarjeta.tarjeta.bt01.p-3(x="22.6%" y="50%" numero="+")
              p Comprender este fenómeno permite identificar las situaciones de riesgo a las que se exponen las organizaciones en sus actividades. 

            .tarjeta.tarjeta.bt01.p-3(x="40.7%" y="50%" numero="+")
              p Identificarla correctamente permite aplicar controles específicos, pues su objetivo no es obtener beneficios económicos sino financiar acciones que generan terror o violencia. 
            
            .tarjeta.tarjeta.bt01.p-3(x="59.2%" y="50%" numero="+")
              p El conocimiento del fenómeno orienta la aplicación pertinente de los mecanismos de control establecidos por el sistema SARLAFT. 

            .tarjeta.tarjeta.bt01.p-3(x="77.5%" y="50%" numero="+")
              p Conocer este fenómeno permite tomar decisiones sustentadas en criterios técnicos y normativos para reducir la exposición al riesgo. 
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img7_1.svg', alt='Matriz RACI para dispositivos móviles')
    .row.justify-content-center.align-items-center.tarjeta.bt02.p-4.mb-4
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img8.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p Los cuatro elementos presentados evidencian que comprender la financiación del terrorismo va más allá del conocimiento teórico, implica desarrollar la capacidad de reconocer situaciones de riesgo, aplicar controles pertinentes y actuar con criterio institucional frente a este fenómeno.
    p.mb-0 En el siguiente apartado se presenta la definición formal de la financiación del terrorismo, con el propósito de establecer las bases conceptuales necesarias para su adecuada identificación y gestión dentro de las organizaciones.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Naturaleza y alcance del delito
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 La financiación del terrorismo se define como el conjunto de acciones orientadas a proporcionar, recolectar, administrar o movilizar recursos económicos con el propósito de apoyar o facilitar la realización de actividades terroristas. Estos recursos pueden ser utilizados para planificar, organizar o ejecutar actos que buscan generar temor en la población, desestabilizar instituciones o afectar el orden social y político de un país.
        .bt01.p-4
          p.mb-0 Identificar las señales de alerta asociadas a cada fuente de financiación del terrorismo es fundamental para que las organizaciones activen sus mecanismos de control de manera oportuna. A continuación, se presentan las principales señales que permiten reconocer, dentro de las operaciones cotidianas, posibles situaciones vinculadas a este delito:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img9.png', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Donaciones sin respaldo documental")
            p Señal de alerta: aportes o donaciones recibidas sin documentación que justifique su origen, sin identificación clara del donante o provenientes de entidades sin actividad verificable. Esta situación exige que la organización aplique procedimientos de conocimiento del cliente y verificación de la fuente de los recursos.
          .row(titulo="Transferencias sin justificación económica")
            p Señal de alerta: movimientos de dinero hacia países de alto riesgo, realizados con frecuencia inusual o por montos que no corresponden al perfil financiero del cliente. Su detección oportuna requiere el monitoreo permanente de las transacciones y el análisis del comportamiento histórico del cliente.
          .row(titulo="Negocios con ingresos injustificados")
            p Señal de alerta: empresas que reportan ingresos significativamente superiores a su actividad económica real, o que mezclan recursos en efectivo con transacciones electrónicas sin una justificación comercial coherente. Este patrón puede indicar el uso del negocio como fachada para movilizar fondos ilícitos.
          .row(titulo="Entidades sin actividad real verificable")
            p Señal de alerta: organizaciones registradas legalmente, pero sin empleados, instalaciones físicas, contratos ni actividad productiva comprobable. Su vinculación como cliente o proveedor sin soporte económico real constituye una señal que debe activar los procedimientos de verificación y reporte de la organización.
          .row(titulo="Operaciones que evaden controles internos")
            p Señal de alerta: transacciones realizadas de forma repetida por debajo de los umbrales de reporte, o que involucran a múltiples intermediarios sin una justificación comercial clara. Este comportamiento puede indicar el aprovechamiento deliberado de debilidades en los sistemas de supervisión de la entidad financiera.
          .row(titulo="Clientes con perfil financiero inconsistente")
            p Señal de alerta: personas o entidades cuyas operaciones no corresponden con su actividad económica declarada, su nivel de ingresos o su historial financiero. La inconsistencia entre el perfil del cliente y sus transacciones constituye una de las señales de alerta más relevantes dentro del sistema SARLAFT.
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema3/img10.png', width='180', alt='Texto que describa la imagen')
        .col-lg-8
          .tarjeta.bt02.p-4.mb-4
            p.mb-0 Las señales descritas evidencian que la identificación de posibles operaciones vinculadas a la financiación del terrorismo no depende de un único indicador, sino de la capacidad de las organizaciones para analizar el comportamiento de sus operaciones de manera integral y permanente. Reconocer estos patrones constituye el primer paso para activar los controles del sistema SARLAFT y contribuir a la prevención de este delito dentro del sistema financiero colombiano.
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Con el propósito de profundizar en la comprensión de la naturaleza y el alcance del delito de financiación del terrorismo, se presenta a continuación un recurso de audio que desarrolla de manera clara y estructurada su definición, las fuentes de las que provienen los recursos y las implicaciones de este delito para la seguridad y la estabilidad del sistema financiero.
    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/IMG11.svg', alt='')
        .tarjeta.p-4(style="background-color:#FAF2DF; border-radius: 0 0 20px 20px;")
          .tarjeta.bg-white.p-4.custom-audio-card
            TarjetaAudio.color-acento-botones(
              texto="Naturaleza y alcance de la financiación del terrorismo"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    p.mb-0 En consecuencia, la prevención y control de la financiación del terrorismo se ha convertido en una prioridad para los gobiernos y organismos internacionales. Por esta razón, se han establecido marcos normativos y sistemas de supervisión que obligan a las organizaciones, especialmente a las entidades financieras, a implementar mecanismos de control como el SARLAFT, con el fin de identificar, monitorear y reportar operaciones que puedan estar relacionadas con este tipo de actividades ilícitas.
  

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Diferencias entre lavado de activos y financiación del terrorismo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p El lavado de activos y la financiación del terrorismo son dos fenómenos que afectan la estabilidad del sistema financiero y la seguridad de los países. Aunque ambos están relacionados con el manejo indebido de recursos financieros y suelen ser abordados conjuntamente en los sistemas de prevención como el SARLAFT, presentan diferencias importantes en cuanto a su origen, propósito y funcionamiento dentro de las actividades ilícitas.
        .row.align-items-center.tarjeta.bt02.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img12.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 En el caso del lavado de activos, el objetivo principal es ocultar o disimular el origen ilegal de recursos obtenidos a través de diferentes delitos, con el fin de introducirlos en la economía formal y darles apariencia de legalidad. Por el contrario, la financiación del terrorismo se centra en la obtención o movilización de recursos que serán utilizados para apoyar o ejecutar actividades terroristas, independientemente de si el origen de esos recursos es legal o ilegal.
      .col-lg-3
        figure
              img(src='@/assets/curso/temas/tema3/img13.png', width='180', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
              img(src='@/assets/curso/temas/tema3/img14.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Asimismo, mientras el lavado de activos busca principalmente obtener beneficios económicos y legitimar recursos provenientes de actividades criminales, la financiación del terrorismo tiene un propósito distinto, relacionado con el apoyo a organizaciones o acciones que buscan generar terror, desestabilizar gobiernos o influir en decisiones políticas mediante el uso de la violencia.
        .row.justify-content-center.align-items-center
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img15.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Por esta razón, los sistemas de prevención y control como el SARLAFT deben contemplar mecanismos que permitan identificar y gestionar ambos riesgos, ya que, aunque comparten ciertos mecanismos financieros, sus objetivos y características presentan diferencias relevantes que deben ser consideradas por las organizaciones en sus procesos de gestión del riesgo.
    p.mb-4 Entre las principales diferencias entre el lavado de activos y la financiación del terrorismo se destacan las siguientes:
    .BGINTRO03.px-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          .tarjeta.bt06.p-4
            ul.lista-ul
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | El lavado de activos busca ocultar el origen ilegal del dinero, mientras que la financiación del terrorismo busca apoyar o facilitar actividades terroristas.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | En el lavado de activos los recursos provienen de actividades ilícitas, mientras que en la financiación del terrorismo los recursos pueden provenir tanto de actividades legales como ilegales.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | El lavado de activos tiene como finalidad dar apariencia de legalidad a recursos ilícitos, mientras que la financiación del terrorismo busca financiar acciones terroristas.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | El lavado de activos se orienta principalmente a obtener beneficios económicos, mientras que la financiación del terrorismo persigue objetivos ideológicos, políticos o religiosos.
              li
                i.fas.fa-lock(style="color: #CFDE90;")
                | En ambos casos se utilizan mecanismos financieros que pueden involucrar transferencias, intermediarios o movimientos internacionales de dinero.
    .row.align-items-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Las diferencias señaladas evidencian que, aunque el lavado de activos y la financiación del terrorismo comparten ciertos canales financieros, sus motivaciones y objetivos son esencialmente distintos. Esta distinción no es un asunto meramente conceptual, sino que tiene implicaciones prácticas directas sobre la forma en que las organizaciones deben estructurar sus sistemas de control y prevención, pues cada fenómeno exige respuestas específicas adaptadas a su naturaleza y finalidad.
    .tarjeta-avatar.mb-4
      img(src='@/assets/curso/temas/tema3/img16.svg', alt='AvatarTop')
      .tarjeta.color-primario.rounded-0.p-4
        p.text-center.mb-0 Comprender las consecuencias de la financiación del terrorismo permite a las organizaciones actuar con mayor criterio, aplicar controles más efectivos y proteger la estabilidad del sistema financiero.
    .bt07.px-4
      .row.justify-content-center.align-items-center
        .col-lg-8
          p.mb-0 Más allá de los efectos inmediatos sobre la seguridad, sus repercusiones se extienden al ámbito económico y social de los países, afectando de manera estructural la estabilidad de las instituciones y el bienestar de la población.  A continuación, se analizan dichas consecuencias con el propósito de reconocer la magnitud del impacto que este fenómeno puede generar cuando no existen mecanismos adecuados de control.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img17.svg', width='180', alt='Texto que describa la imagen')

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Consecuencias económicas y sociales

    .bloque-texto-g.bloque-texto-g--inverso.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La financiación del terrorismo no solo representa una amenaza para la seguridad de los países, sino que genera consecuencias de amplio alcance que afectan de manera simultánea el funcionamiento de la economía, la estabilidad de las instituciones y la calidad de vida de la población. Estas repercusiones se extienden más allá de los actos terroristas en sí mismos, pues el solo hecho de que recursos económicos sean destinados a financiar este tipo de actividades genera distorsiones que comprometen la transparencia del sistema financiero y el desarrollo sostenible de los países afectados.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
         figure
          img(src='@/assets/curso/temas/tema3/img19.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-4 Asimismo, las consecuencias de este fenómeno no se limitan a los países donde se ejecutan los actos terroristas, sino que se proyectan hacia el entorno internacional, afectando las relaciones comerciales, la cooperación entre Estados y la estabilidad de los mercados globales. Por esta razón, los gobiernos, las organizaciones y los organismos internacionales han desarrollado sistemas de prevención y control orientados a detectar, prevenir y sancionar las actividades relacionadas con la financiación del terrorismo, con el propósito de proteger la economía y el bienestar de la sociedad.
        p.mb-0 Tanto las consecuencias económicas como las sociales se manifiestan de formas específicas que es necesario identificar para comprender el verdadero alcance de este fenómeno, tal como se presenta a continuación:
    .BGINTRO03.px-5.p-4
      TabsC.color-acento-botones.mb-4
        .py-3.p-4.py-md-4(titulo="Consecuencias económicas:")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.mb-0 La financiación del terrorismo altera los mercados financieros y productivos, desincentiva la inversión extranjera y genera restricciones en el comercio internacional, especialmente en los territorios identificados como de alto riesgo. Estas situaciones comprometen la estabilidad económica y afectan el desarrollo de diferentes sectores productivos del país.
        .py-3.p-4.py-md-4(titulo="Consecuencias sociales:")
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.mb-0 Las consecuencias sociales son igualmente relevantes y afectan de manera directa la vida cotidiana de la población. Las actividades terroristas generan temor, violencia e inestabilidad que debilitan las instituciones, erosionan la confianza de los ciudadanos en el Estado y comprometen la infraestructura pública y el bienestar general de las naciones.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img22.svg', alt='AvatarTop')
          .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 La financiación del terrorismo afecta a toda la sociedad. Sus consecuencias económicas y sociales son interdependientes y se agravan cuando no existen controles efectivos.
    p.mb-4 Las consecuencias descritas reafirman que la financiación del terrorismo trasciende el plano de la seguridad y se convierte en un factor de desestabilización económica e institucional que compromete el desarrollo sostenible de los países. Frente a esta realidad, su prevención exige la actuación articulada de múltiples actores, tal como se ilustra en la siguiente figura.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 2.
          span Actores en la prevención del terrorismo
    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img23.svg', alt='Diagrama que ilustra cómo la colaboración conjunta previene este delito. En el proceso, los gobiernos establecen políticas, las organizaciones implementan medidas, los organismos internacionales coordinan esfuerzos globales y el sistema SARLAFT aporta herramientas de control. Toda esta red colaborativa tiene como propósito final asegurar la protección económica, salvaguardando la estabilidad financiera, y promover el bienestar social, garantizando la seguridad de la sociedad. ')
        .d-block.d-lg-none
          p Diagrama secuencial con cuatro etapas que ilustra el proceso del lavado de activos: la realización de transacciones financieras para encubrir la procedencia ilícita de los recursos, el empleo de mecanismos de ocultamiento mediante transferencias bancarias, adquisición de bienes e intermediarios, la fragmentación de operaciones en montos menores para evitar su detección y la dificultad deliberada del seguimiento del dinero por parte de las entidades de supervisión financiera. 
          figure
            img(src='@/assets/curso/temas/tema3/img23_1.svg', alt='Matriz RACI para dispositivos móviles')
    .row.align-items-center.mb-4
      .col-lg-10
        p.mb-0 En este contexto, la prevención de la financiación del terrorismo se convierte en una responsabilidad compartida entre los gobiernos, las organizaciones y los organismos internacionales. La implementación de mecanismos de control y supervisión, como el sistema SARLAFT, permite fortalecer las estrategias de prevención, reducir los riesgos asociados a estas actividades y contribuir a la protección de la economía y del bienestar de la sociedad.
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema3',
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
