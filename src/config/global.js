export default {
  global: {
    Name: 'Fundamentos del SARLAFT',
    Description:
      'Este componente formativo presenta los fundamentos del Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo - SARLAFT, abordando los conceptos básicos relacionados con el lavado de activos, la financiación del terrorismo, la normatividad aplicable y los principales riesgos asociados a estas actividades. Asimismo, se analizan los elementos fundamentales del sistema y su importancia para fortalecer los mecanismos de prevención, control y cumplimiento dentro de las organizaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto del sistema SARLAFT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición del sistema de administración del riesgo LA/FT',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia del SARLAFT en el sistema financiero',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Objetivos del sistema SARLAFT en las organizaciones',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Concepto de lavado de activos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición de lavado de activos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Delitos asociados al lavado de activos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Impacto del lavado de activos en la economía',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Financiación del terrorismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Naturaleza y alcance del delito',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Diferencias entre lavado de activos y financiación del terrorismo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Consecuencias económicas y sociales',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normatividad del sistema',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normatividad internacional',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Normatividad nacional',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Entidades responsables de la regulación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Riesgos del lavado de activos y financiación del terrorismo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elementos fundamentales del sistema SARLAFT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Políticas de administración del riesgo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Procedimientos de control',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Infraestructura tecnológica',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Estructura organizacional',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Divulgación de la información',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Capacitación del personal',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Debida diligencia',
      significado:
        'conjunto de procedimientos para la identificación y conocimiento del cliente, orientados a evaluar y mitigar riesgos en las relaciones comerciales.',
    },
    {
      termino: 'Financiación del terrorismo',
      significado:
        'acto de proveer o recolectar fondos, de origen lícito o ilícito, con la intención de financiar actividades, individuos o grupos terroristas.',
    },
    {
      termino: 'GAFI',
      significado:
        'Grupo de Acción Financiera Internacional; organismo encargado de fijar estándares globales para combatir el lavado de activos y la financiación del terrorismo.',
    },
    {
      termino: 'Lavado de activos',
      significado:
        'delito que consiste en dar apariencia de legalidad a bienes o dinero provenientes de actividades ilícitas para introducirlos en la economía formal.',
    },
    {
      termino: 'Oficial de cumplimiento',
      significado:
        'persona responsable de supervisar los sistemas de prevención y de coordinar el reporte de operaciones ante las autoridades competentes.',
    },
    {
      termino: 'Operación inusual',
      significado:
        'transacción que, por su cuantía o características, no guarda relación con la actividad económica del cliente ni con su comportamiento financiero habitual.',
    },
    {
      termino: 'Riesgo de contagio',
      significado:
        'posibilidad de afectación negativa de una organización por su relación comercial o contractual con terceros involucrados en delitos.',
    },
    {
      termino: 'Riesgo reputacional',
      significado:
        'posibilidad de pérdida económica debido al desprestigio o mala imagen de una entidad por su vinculación con actividades ilícitas.',
    },
    {
      termino: 'UIAF',
      significado:
        'Unidad de Información y Análisis Financiero; entidad estatal encargada de centralizar y analizar información para detectar el lavado de activos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1999). Ley 526 de 1999. Por medio de la cual se crea la Unidad de Información y Análisis Financiero (UIAF) y se dictan otras disposiciones relacionadas con la prevención del lavado de activos.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2006). Ley 1121 de 2006. Por la cual se dictan normas para la prevención, detección, investigación y sanción de la financiación del terrorismo y otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2008). Ley 1266 de 2008. Disposiciones generales del habeas data y manejo de la información financiera y crediticia.',
      link: '',
    },
    {
      referencia:
        'Fondo Monetario Internacional. (2022). Marco para la evaluación de los sistemas de lucha contra el lavado de activos y el financiamiento del terrorismo. FMI.',
      link: '',
    },
    {
      referencia:
        'Grupo de Acción Financiera de Latinoamérica. (2023). Informe de evaluación mutua de Colombia. GAFILAT.',
      link: '',
    },
    {
      referencia:
        'Grupo de Acción Financiera Internacional. (2012). Las recomendaciones del GAFI: Estándares internacionales sobre la lucha contra el lavado de activos y el financiamiento del terrorismo y la proliferación.',
      link: '',
    },
    {
      referencia:
        'Grupo de Acción Financiera Internacional. (2012). Recomendaciones del GAFI para la lucha contra el lavado de activos y la financiación del terrorismo.',
      link: '',
    },
    {
      referencia:
        'Grupo Egmont. (2023). Principios para el intercambio de información entre unidades de inteligencia financiera. Grupo Egmont.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (1988). Convención de las Naciones Unidas contra el tráfico ilícito de estupefacientes y sustancias sicotrópicas. Oficina de las Naciones Unidas contra la Droga y el Delito.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (1999). Convenio internacional para la represión de la financiación del terrorismo. Asamblea General de las Naciones Unidas.',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2000). Convención de las Naciones Unidas contra la delincuencia organizada transnacional. Oficina de las Naciones Unidas contra la Droga y el Delito.',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2020). Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo (SARLAFT).',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2022). Circular Básica Jurídica. Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo (SARLAFT).',
      link: '',
    },
    {
      referencia:
        'Unidad de Información y Análisis Financiero. (2023). Lineamientos para la prevención y detección del lavado de activos y financiación del terrorismo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
