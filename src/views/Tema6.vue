<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Elementos fundamentales del sistema SARLAFT
    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo, se fundamenta en un conjunto de elementos organizacionales que permiten a las entidades identificar, evaluar, controlar y monitorear los riesgos asociados a estas actividades ilícitas. Estos elementos constituyen la base para la implementación de un sistema de prevención efectivo, orientado a proteger a las organizaciones y al sistema financiero frente a posibles operaciones relacionadas con el lavado de activos y la financiación del terrorismo.
    p.mb-4 En este contexto, los elementos del SARLAFT están diseñados para fortalecer los mecanismos de control interno dentro de las organizaciones, promoviendo la adopción de políticas, procedimientos y herramientas que permitan gestionar adecuadamente los riesgos. La integración de estos componentes facilita la identificación de situaciones que puedan representar amenazas para la organización y permite establecer medidas preventivas que contribuyan a garantizar la transparencia en las operaciones.
    .row.align-items-center.tarjeta.bt02.p-4.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img2.svg', style="width:100px", alt='Texto que describa la imagen')
      .col-lg-11
        p.mb-0 El análisis de los riesgos desarrollado en el apartado anterior pone de manifiesto la necesidad de una estructura interna que permita a las organizaciones actuar de manera ordenada y efectiva frente a estas amenazas. Esa estructura está conformada por seis elementos cuyas funciones se articulan para garantizar la solidez del sistema, tal como se presenta a continuación.
    .BGINTRO04.px-5.p-4
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 5.
            span Descripción de los elementos del sistema
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tabla-a.color-acento-contenido 
            .tabla-a   
              table
                thead
                  tr
                    th Elemento
                    th Descripción
                tbody
                  tr
                    th Políticas
                    td Lineamientos establecidos por la organización para orientar la prevención y el control del riesgo de lavado de activos y financiación del terrorismo.
                  tr  
                    th Procedimientos
                    td Conjunto de procesos y actividades que permiten identificar, evaluar y controlar las operaciones relacionadas con el riesgo LA/FT.
                  tr
                    th Infraestructura tecnológica
                    td Herramientas tecnológicas utilizadas para el monitoreo, registro y análisis de las operaciones financieras.
                  tr 
                    th Estructura organizacional
                    td Definición de roles y responsabilidades dentro de la organización para la administración del riesgo.
                  tr
                    th Divulgación de la información
                    td Estrategias de comunicación interna que permiten difundir las políticas y procedimientos del sistema.
                  tr
                    th Capacitación
                    td Programas de formación dirigidos al personal para fortalecer el conocimiento y la aplicación de las medidas de prevención del LA/FT.
    .row.justify-content-center.align-items-center
      .col-lg-9  
        p Los elementos relacionados en la tabla anterior conforman una estructura integral cuya efectividad depende de la implementación coordinada de cada uno de sus componentes dentro de las organizaciones. Aunque todos ellos resultan indispensables para el adecuado funcionamiento del sistema, las políticas de administración del riesgo constituyen el punto de partida sobre el cual se sustentan los demás elementos, pues son estas las que establecen el marco de actuación institucional y definen los criterios que orientan las decisiones y los procedimientos de control en todos los niveles de la organización.
      .col-lg-3  
        figure
          img(src='@/assets/curso/temas/tema6/img3.png', width='180', alt='Texto que describa la imagen')
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Políticas de administración del riesgo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
              img(src='@/assets/curso/temas/tema6/img4.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Las políticas de administración del riesgo establecen los lineamientos y principios que orientan a las organizaciones en la prevención del lavado de activos y la financiación del terrorismo. Su diseño corresponde a la alta dirección y debe estar alineado con la normativa vigente y con los objetivos estratégicos de la entidad, con el propósito de garantizar que todos los procesos institucionales se desarrollen dentro de un marco de legalidad y transparencia.
        .row.align-items-center.tarjeta.bt06.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img5.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Estas políticas permiten orientar el comportamiento de los colaboradores frente a situaciones que puedan representar riesgos para la organización, fortaleciendo la cultura de cumplimiento en todos los niveles. Para mantener su efectividad, las organizaciones deben revisarlas y actualizarlas periódicamente, adaptándolas a los cambios en el entorno económico, normativo y tecnológico.
    p.mb-5 Las políticas de administración del riesgo se materializan en acciones concretas que las organizaciones implementan de manera sistemática. Entre las principales se destacan las siguientes:
    .bg_img_01.mb-5
      .row.justify-content-center
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img6.svg", alt="alt").img90.m-auto
            
            p.text-center.mb-0 Definición de los criterios institucionales para la identificación, evaluación, control y monitoreo de los riesgos asociados al lavado de activos y la financiación del terrorismo.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img7.svg", alt="alt").img90.m-auto
            
            p.text-center.mb-0 Establecimiento del marco general de actuación que orienta las decisiones y los procedimientos de control en todos los niveles de la organización.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img8.svg", alt="alt").img90.m-auto

            p.text-center.mb-0 Determinación de los roles y responsabilidades del personal frente al cumplimiento de las disposiciones internas del sistema.
        .col-lg-3.mb-4.mb-lg-0
          .crd.crd--grayGrad(data-aos="flip-left")
            .bottomCircle.mb-5
              figure
                img(src="@/assets/curso/temas/tema6/img9.svg", alt="alt").img90.m-auto
            
            p.text-center.mb-0 Actualización periódica de los lineamientos institucionales en respuesta a cambios en la normativa vigente o en el entorno operativo de la entidad.
    .row.justify-content-center.align-items-center
      .col-lg-7
        p Las acciones descritas evidencian que las políticas de administración del riesgo no constituyen un documento estático, sino un instrumento de gestión que orienta de manera permanente la actuación de la organización. Su correcta implementación fortalece los sistemas de control interno y reduce la probabilidad de que las entidades sean utilizadas para actividades relacionadas con el lavado de activos y la financiación del terrorismo, aspectos que se traducen operativamente en los procedimientos de control desarrollados en el siguiente apartado.
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema6/img14.svg", alt="alt").img90.m-auto

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Procedimientos de control
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img15.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p Los procedimientos de control dentro del sistema SARLAFT corresponden al conjunto de acciones y procesos establecidos por las organizaciones para prevenir, detectar y gestionar posibles operaciones relacionadas con el lavado de activos y la financiación del terrorismo. Estos procedimientos permiten aplicar de manera práctica las políticas de administración del riesgo, estableciendo pasos claros para la identificación de clientes, el monitoreo de transacciones y el análisis de situaciones que puedan representar riesgos para la entidad.
        .bt02.p-4
          p.mb-0 De igual manera, los procedimientos de control facilitan la supervisión de las actividades que se desarrollan dentro de la organización, permitiendo identificar operaciones inusuales o comportamientos que se aparten de los patrones normales de las transacciones financieras o comerciales. A través de estos mecanismos, las entidades pueden aplicar medidas preventivas, realizar verificaciones adicionales y, cuando sea necesario, reportar operaciones sospechosas a las autoridades competentes.
    .row.align-items-center.mb-4
      .col-lg-10
        p.mb-0 En este sentido, los procedimientos de control deben estar claramente documentados y ser conocidos por todos los colaboradores que participan en los procesos operativos de la organización. La correcta aplicación de estos procedimientos fortalece los sistemas de control interno, mejora la capacidad de detección de riesgos y contribuye a garantizar que las operaciones de la entidad se desarrollen dentro de un marco de legalidad, transparencia y cumplimiento normativo.
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', style="width:120px", alt='Texto que describa la imagen')
    p.mb-4 Entre los principales procedimientos de control que las organizaciones implementan dentro del sistema se destacan los siguientes:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Identificación del cliente")
            p.mb-0 Proceso mediante el cual la organización verifica la identidad de sus clientes y analiza el origen de sus recursos para determinar el nivel de riesgo asociado a cada relación comercial.
          .row(numero="2" titulo="Monitoreo de operaciones")
            p.mb-0 Seguimiento continuo de las transacciones realizadas por los clientes con el fin de detectar comportamientos que se aparten de sus patrones habituales o que no correspondan a su actividad económica declarada.
          .row(numero="3" titulo="Detección de operaciones atípicas")
            p.mb-0 Análisis sistemático que permite identificar transacciones que, por su monto, frecuencia o naturaleza, resultan inconsistentes con el perfil financiero del cliente y pueden constituir señales de alerta.
          .row(numero="4" titulo="Evaluación de operaciones sospechosas")
            p.mb-0 Examen detallado de las operaciones previamente identificadas como atípicas, orientado a determinar si existe fundamento suficiente para proceder con su reporte ante las autoridades competentes.
          .row(numero="5" titulo="Reporte a las autoridades")
            p.mb-0 Obligación institucional de informar oportunamente a los organismos de control las operaciones que, tras su evaluación, presenten indicios de estar relacionadas con actividades ilícitas.
          .row(numero="6" titulo="Conservación de la información")
            p.mb-0 Registro y archivo sistemático de la documentación relacionada con las transacciones realizadas, conforme a los plazos y condiciones establecidos por la normativa vigente.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img16.png', alt='')
    .row.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img17.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        .row.tarjeta.bt04.p-4
            .col-lg-auto.d-none.d-lg-block.mb-2
              figure
                img(src='@/assets/curso/temas/tema6/img18.svg',style="width:100px", alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 Los procedimientos enumerados constituyen el conjunto de acciones concretas mediante las cuales las organizaciones traducen sus políticas de riesgo en prácticas operativas verificables y documentadas. Sin embargo, su correcta ejecución no depende únicamente de la voluntad institucional o de la capacitación del personal, sino también de la disponibilidad de herramientas tecnológicas que permitan procesarlos, registrarlos y supervisarlos de manera eficiente. La infraestructura tecnológica se convierte así en el soporte indispensable para garantizar la efectividad de los controles establecidos dentro del sistema de administración del riesgo.
    
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.3 Infraestructura tecnológica
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p La infraestructura tecnológica constituye un elemento fundamental dentro del sistema SARLAFT, ya que permite a las organizaciones contar con herramientas que faciliten el monitoreo, análisis y control de las operaciones financieras o comerciales. A través del uso de sistemas informáticos especializados, las entidades pueden registrar información, analizar transacciones y detectar comportamientos que puedan estar relacionados con actividades de lavado de activos o financiación del terrorismo.
        .bt02.p-4
          p.mb-0 Además, las herramientas tecnológicas permiten automatizar procesos de supervisión y control, lo que facilita la identificación de operaciones inusuales o sospechosas dentro de grandes volúmenes de información. Estos sistemas pueden generar alertas, reportes y análisis de datos que ayudan a las organizaciones a tomar decisiones oportunas frente a posibles riesgos asociados al manejo de recursos financieros.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img19.png', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', style="width:180px", alt='Texto que describa la imagen')
      .col-lg-11
        p.mb-0 Por otra parte, la implementación de una infraestructura tecnológica adecuada contribuye a fortalecer los procesos de control interno y a mejorar la eficiencia en la gestión del riesgo. El uso de plataformas tecnológicas permite consolidar información, mantener registros de las operaciones y facilitar el cumplimiento de las obligaciones de reporte establecidas por las autoridades de supervisión y control.
    p.mb-4 Entre algunas de las herramientas tecnológicas que pueden apoyar la implementación del sistema SARLAFT se encuentran:
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta.bt06.p-4
            .row.justify-content-center.align-items-center
              .col-lg-8.order-2.order-lg-1
                ol.lista-ol--cuadro
                  li
                  .lista-ol--cuadro__vineta
                    span A
                  |  Sistemas de monitoreo de transacciones financieras.
                  li
                  .lista-ol--cuadro__vineta
                    span B
                  |  Plataformas de análisis de datos y gestión de riesgos.
                  li
                  .lista-ol--cuadro__vineta
                    span C
                  |  Sistemas de registro y almacenamiento de información de clientes.
                  li
                  .lista-ol--cuadro__vineta
                    span D
                  |  Herramientas para la generación de alertas sobre operaciones inusuales.
                  li
                  .lista-ol--cuadro__vineta
                    span E
                  |  Sistemas de reporte de operaciones sospechosas a las autoridades competentes.
                  li
                  .lista-ol--cuadro__vineta
                    span F
                  |  Plataformas de gestión documental y conservación de información.
              .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/tema6/img20.svg', alt='Texto que describa la imagen')
          
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-0 Las herramientas descritas evidencian que la infraestructura tecnológica no constituye un elemento accesorio dentro del sistema de administración del riesgo, sino un componente estratégico que potencia la capacidad de las organizaciones para actuar con oportunidad y precisión frente a situaciones de riesgo. No obstante, su efectividad depende en gran medida de que exista una estructura organizacional clara que defina quiénes son los responsables de operar dichas herramientas, interpretar sus resultados y tomar las decisiones pertinentes en cada nivel de la organización.


    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.4 Estructura organizacional

    .bloque-texto-g.tarjeta.bt04.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La estructura organizacional es un componente esencial dentro del sistema SARLAFT, ya que define la forma en que la organización distribuye las responsabilidades y funciones relacionadas con la prevención del lavado de activos y la financiación del terrorismo. A través de una estructura organizacional clara, las entidades pueden establecer roles específicos para la gestión del riesgo, garantizando que cada área conozca sus responsabilidades en el cumplimiento de las políticas y procedimientos del sistema.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img22.svg', style="width:120px", alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Asimismo, una adecuada estructura organizacional permite fortalecer los procesos de supervisión y control dentro de la organización. La asignación de responsabilidades a diferentes niveles jerárquicos facilita el seguimiento de las operaciones y la toma de decisiones oportunas frente a posibles situaciones de riesgo. Su implementación coordinada promueve una gestión más eficiente del riesgo y refuerza el compromiso institucional con la prevención de actividades ilícitas.
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', style="width:120px", alt='Texto que describa la imagen')
    p.mb-4 La efectividad de la estructura organizacional se expresa en cinco funciones esenciales que, aplicadas de manera articulada, determinan la capacidad de la organización para gestionar el riesgo de forma ordenada y sostenida. En la siguiente figura se presentan estas funciones de manera jerárquica, desde la definición de roles como punto de partida hasta el refuerzo del compromiso institucional como resultado de su aplicación conjunta.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Estructura organizacional 

    .row.justify-content-center.mb-4
      .col-lg-10
        .d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema6/img23.svg', alt='Figura de faro con cinco niveles jerárquicos que representan las funciones de la estructura organizacional: definir roles, asignar responsabilidades, fortalecer la supervisión, promover la eficiencia y reforzar el compromiso institucional.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema6/img23_1.svg', alt='Figura de faro con cinco niveles jerárquicos que representan las funciones de la estructura organizacional: definir roles, asignar responsabilidades, fortalecer la supervisión, promover la eficiencia y reforzar el compromiso institucional.')
    p Las cinco funciones presentadas evidencian que la estructura organizacional no se limita a la distribución formal de cargos, sino que constituye el mecanismo que articula la actuación de cada área frente a la gestión del riesgo. Su efectividad depende de que la información relacionada con el sistema circule de manera oportuna entre todos los niveles de la organización, lo que introduce la importancia de la divulgación de la información como elemento complementario e indispensable del sistema.
    p.mb-5 Entre los principales actores que conforman esta estructura se encuentran:
    .BGINTRO01.px-5.mb-4
      SlyderF(columnas="col-lg-6 col-xl-4").mb-4
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema6/img24.svg' alt='AvatarTop')
          h5.text-center Alta dirección
          p.text-center Define los lineamientos estratégicos del sistema y asume la responsabilidad máxima frente al cumplimiento normativo de la organización.

        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema6/img25.svg' alt='AvatarTop')
          h5.text-center Oficial de cumplimiento
          p.text-center Gestiona y coordina la operación del sistema, supervisa su correcta aplicación y sirve de enlace entre la organización y las autoridades de control.
        
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema6/img26.svg' alt='AvatarTop')
          h5.text-center Control interno y auditoría
          p.text-center Verifica de manera independiente que los procesos y controles del sistema se apliquen conforme a las políticas y la normativa vigente.
        
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema6/img27.svg' alt='AvatarTop')
          h5.text-center Áreas operativas
          p.text-center Ejecutan los procedimientos de control en el día a día, identifican operaciones inusuales y aplican los protocolos establecidos por el sistema.
        
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema6/img28.svg' alt='AvatarTop')
          h5.text-center Áreas de tecnología
          p.text-center Administran y mantienen los sistemas informáticos que soportan el monitoreo, el registro y el análisis de las operaciones de la organización.
        
        .tarjeta.fondo-1.p-4
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/temas/tema6/img29.svg' alt='AvatarTop')
          h5.text-center Colaboradores
          p.text-center Aplican las políticas y procedimientos del sistema en el ejercicio de sus funciones cotidianas, constituyendo la primera línea de prevención de la organización.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-center.tarjeta.bt06.p-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img30.svg', style="width:100px", alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 La articulación de estos actores garantiza que el sistema funcione con eficiencia en todos los niveles de la organización y que la responsabilidad frente al cumplimiento normativo sea visible y verificable en cada área. Con esta base estructural, la divulgación de la información se convierte en el mecanismo que asegura que cada actor cuente con el conocimiento necesario para ejercer su función dentro del sistema.
    

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.5 Divulgación de la información
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9  
        p La divulgación de la información es un elemento clave dentro del sistema SARLAFT, ya que permite que todos los miembros de la organización conozcan las políticas, procedimientos y responsabilidades relacionadas con la prevención del lavado de activos y la financiación del terrorismo. A través de procesos adecuados de comunicación interna, las entidades pueden garantizar que los colaboradores comprendan la importancia del cumplimiento normativo y de la aplicación de los mecanismos de control establecidos por la organización.
      .col-lg-3  
        figure
          img(src='@/assets/curso/temas/tema6/img31.png', width='180', alt='Texto que describa la imagen')
    .BGINTRO04.px-5.mb-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/temas/tema6/img32.svg', alt='AvatarTop')
            .tarjeta.color-primario.rounded-0.p-4
              p.text-center.mb-0 La divulgación de la información no es un acto comunicativo puntual, es un proceso continuo que convierte el conocimiento institucional en la primera barrera de prevención frente al riesgo.
          p Asimismo, la divulgación de la información contribuye a fortalecer la cultura de cumplimiento dentro de la organización, promoviendo la transparencia en las operaciones y el compromiso de los colaboradores con la prevención de actividades ilícitas. Cuando los empleados conocen los riesgos asociados al lavado de activos y la financiación del terrorismo, pueden identificar con mayor facilidad situaciones que puedan representar amenazas para la entidad y actuar de acuerdo con los procedimientos establecidos.
    .row.justify-content-center.align-items-center.mb-3
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img33.svg',style="width:100px", alt='Texto que describa la imagen')
      .col-lg-10
        p De igual forma, una adecuada estrategia de divulgación permite mantener informados a los diferentes niveles de la organización sobre cambios en la normativa, actualizaciones en los procedimientos internos o nuevas herramientas de control implementadas por la entidad. Esto facilita la correcta aplicación del sistema SARLAFT y fortalece los procesos de supervisión y control dentro de la organización.
      .col-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg',style="width:100px", alt='Texto que describa la imagen')
    p.mb-5 Entre algunos mecanismos utilizados por las organizaciones para la divulgación de la información se encuentran:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-2
        LineaTiempoD.color-acento-botones
          .row(numero="A" titulo="Publicación interna")
            p.mb-0 Difusión de políticas y procedimientos a través de los canales institucionales de la organización, garantizando que todos los colaboradores tengan acceso oportuno a la información que regula el sistema.
          .row(numero="B" titulo="Jornadas de sensibilización")
            p.mb-0 Espacios de formación y reflexión orientados a fortalecer la conciencia de los colaboradores frente a los riesgos asociados al lavado de activos y la financiación del terrorismo, promoviendo una cultura activa de prevención.
          .row(numero="C" titulo="Manuales y guías")
            p.mb-0 Documentos de referencia que consolidan los lineamientos, procedimientos y responsabilidades del sistema, facilitando su consulta y aplicación por parte del personal en el ejercicio de sus funciones.
          .row(numero="D" titulo="Plataformas digitales")
            p.mb-0 Herramientas tecnológicas e intranet institucional utilizadas para compartir información, comunicar actualizaciones normativas y mantener accesibles los recursos del sistema para todos los niveles de la organización.
          .row(numero="E" titulo="Comunicaciones internas")
            p.mb-0 Mensajes y circulares dirigidos al personal para informar sobre cambios en la normativa, modificaciones en los procedimientos o nuevas disposiciones que afecten la operación del sistema
          .row(numero="F" titulo="Campañas de concientización")
            p.mb-0 Iniciativas institucionales periódicas orientadas a reforzar en los colaboradores la importancia del cumplimiento normativo y la responsabilidad individual frente a la prevención de actividades ilícitas.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-2.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img34.png', alt='')
    .row.justify-content-center.align-items-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema6/img35.svg", alt="alt").img90.m-auto|   
      .col-lg-9
        .tarjeta.bt02.p-4
          p.mb-0 Los mecanismos descritos demuestran que la divulgación de la información no se limita a un acto comunicativo puntual, sino que constituye un proceso continuo que requiere planificación, actualización permanente y compromiso institucional en todos los niveles de la organización. No obstante, la sola circulación de la información resulta insuficiente si no va acompañada de procesos formativos que permitan a los colaboradores comprender, interiorizar y aplicar adecuadamente los conocimientos adquiridos, lo que pone de relieve la importancia de la capacitación del personal como elemento complementario e indispensable dentro del sistema.


    separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.6 Capacitación del personal
    p.mb-4 La capacitación del personal es un elemento fundamental dentro del sistema SARLAFT, ya que permite fortalecer los conocimientos y habilidades de los colaboradores en relación con la prevención del lavado de activos y la financiación del terrorismo. A través de procesos de formación adecuados, las organizaciones pueden garantizar que su personal conozca las políticas, procedimientos y responsabilidades que deben aplicar en el desarrollo de sus funciones.
    .row.justify-content-center.align-items-center.mb-4.fondo-1
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema6/img36.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        .row
            .col-lg-auto.d-none.d-lg-block.mb-4
              figure
                img(src='@/assets/curso/temas/tema6/img37.svg', style="width:80px", alt='Texto que describa la imagen')
            .col-lg-12
              p.mb-0 Además, la capacitación contribuye a que los colaboradores puedan identificar de manera oportuna situaciones que representen riesgos para la organización. Cuando el personal cuenta con una formación adecuada en temas relacionados con el lavado de activos y la financiación del terrorismo, puede reconocer operaciones inusuales, aplicar los procedimientos de control establecidos y reportar oportunamente cualquier situación que pueda generar una alerta dentro de la entidad.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p Del mismo modo, los programas de capacitación deben desarrollarse de forma periódica y adaptarse a las necesidades de cada organización, considerando aspectos como cambios en la normativa, la revisión de procedimientos o la incorporación de nuevas herramientas tecnológicas. Esto permite mantener al personal al día y fortalecer continuamente los mecanismos de prevención y control frente a los riesgos asociados al lavado de activos y la financiación del terrorismo.
        p Entre algunos temas que pueden abordarse en los programas de capacitación del sistema SARLAFT se encuentran:
      .col-lg-3
        figure
          img(src="@/assets/curso/temas/tema6/img38.svg", alt="alt").img90.m-auto|   
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img39.png', alt='')
      .col-lg-7
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Conceptos fundamentales")
            p.mb-0 Conocimiento básico sobre el origen, las características y las consecuencias del lavado de activos y la financiación del terrorismo dentro del sistema financiero y económico.
          .row(numero="2" titulo="Marco normativo")
            p.mb-0 Conjunto de disposiciones nacionales e internacionales que regulan la prevención de estas actividades ilícitas y que orientan la actuación de las organizaciones frente al riesgo.
          .row(numero="3" titulo="Políticas internas")
            p.mb-0 Lineamientos y procedimientos propios de la organización que establecen cómo debe gestionarse el riesgo y cuáles son las responsabilidades de cada área frente al sistema.
          .row(numero="4" titulo="Señales de alerta")
            p.mb-0 Criterios y patrones que permiten a los colaboradores reconocer operaciones inusuales o sospechosas que puedan representar un riesgo para la organización.
          .row(numero="5" titulo="Reporte oportuno")
            p.mb-0 Procedimientos institucionales para informar a las autoridades competentes las operaciones identificadas como sospechosas, dentro de los plazos establecidos por la normativa vigente
          .row(numero="6" titulo="Herramientas tecnológicas")
            p.mb-0 Sistemas y plataformas digitales utilizados para el monitoreo, registro y análisis de las operaciones, cuyo manejo adecuado fortalece la capacidad de detección del riesgo.
          .row(numero="7" titulo="Responsabilidad individual")
            p.mb-0 Compromisos específicos que cada colaborador asume frente a la prevención del lavado de activos y la financiación del terrorismo en el ejercicio de sus funciones cotidianas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img4.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Los temas enunciados evidencian que la capacitación del personal no se agota en la transmisión de información, sino que implica un proceso formativo continuo, orientado a desarrollar competencias que permitan a los colaboradores actuar con criterio y responsabilidad frente a las situaciones de riesgo que puedan presentarse en el ejercicio de sus funciones. 
    .BGINTRO05.px-5.p-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          .tarjeta-avatar.mb-4
            img(src='@/assets/curso/temas/tema6/img40.svg', alt='AvatarTop')
            .tarjeta.color-primario.rounded-0.p-4
                p.text-center.mb-0 Sin el conocimiento y el compromiso del talento humano, ningún control, procedimiento ni herramienta tecnológica puede garantizar por sí solo la efectividad del sistema.
          p.mb-0 La capacitación se convierte así en el elemento que articula y da sentido a todos los componentes del sistema, pues sin el conocimiento y el compromiso del talento humano, ninguna política, procedimiento, herramienta tecnológica ni estructura organizacional puede garantizar por sí sola la efectividad de los mecanismos de prevención del lavado de activos y la financiación del terrorismo.
    

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
