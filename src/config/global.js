export default {
  global: {
    Name: 'Fundamentos y planificación de la gestión del talento humano',
    Description:
      'Este componente aborda los fundamentos conceptuales y metodológicos de la gestión del desarrollo humano en las organizaciones. Desarrolla los procesos de Diagnóstico de Necesidades de Capacitación DNC), clasificación de competencias, estilos de aprendizaje y normativa de SST, avanzando hacia el diseño de planes de capacitación con metodologías activas, gamificación, presupuesto y cronograma.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
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
        titulo: 'Identificación de necesidades de capacitación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Capacitación: concepto, acciones y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Diagnóstico de Necesidades de Capacitación (DNC): concepto y técnicas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Competencias: definición y clases',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aprendizaje: concepto, ritmos y estilos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Normativa legal, ambiental, de salud y seguridad en el trabajo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programación de actividades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Proceso de capacitación: etapas, técnicas y nuevas tendencias',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Comunicación en los procesos de capacitación: definición y clases',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gamificación: concepto y estrategias',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Didáctica: concepto y tipos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Metodología del plan de capacitación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Presupuesto para el plan de capacitación',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo:
              'Cronograma del plan de capacitación: definición, tipos y elaboración',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Recursos empresariales para la capacitación',
            hash: 't_2_8',
          },
          {
            numero: '2.9',
            titulo:
              'El plan de capacitación: definición, tipos, herramientas y estructuración',
            hash: 't_2_9',
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
  glosario: [
    {
      termino: 'Andragogía',
      significado:
        'ciencia que estudia el aprendizaje en personas adultas, identificando los principios y métodos más efectivos para la formación de colaboradores en contextos organizacionales.',
    },
    {
      termino: 'Brecha de competencia',
      significado:
        'diferencia entre el nivel de competencia que un colaborador posee actualmente y el nivel que se requiere para desempeñar su cargo con eficacia.',
    },
    {
      termino: 'Capacitación',
      significado:
        'proceso planificado mediante el cual una organización desarrolla las competencias de sus colaboradores para fortalecer su desempeño y contribuir al logro de los objetivos estratégicos.',
    },
    {
      termino: 'Competencia',
      significado:
        'capacidad integrada de movilizar conocimientos, habilidades, actitudes y valores para desempeñar una función o resolver un problema con eficacia en un contexto determinado.',
    },
    {
      termino: 'DNC (Diagnóstico de Necesidades de Capacitación)',
      significado:
        'proceso sistemático para identificar las brechas entre las competencias actuales de los colaboradores y las requeridas por los cargos, con el fin de orientar la planeación formativa.',
    },
    {
      termino: 'E-learning',
      significado:
        'modalidad de formación que utiliza medios digitales y plataformas tecnológicas para facilitar el aprendizaje a distancia o de manera autónoma.',
    },
    {
      termino: 'Gamificación',
      significado:
        'aplicación de elementos y mecánicas propias de los juegos en contextos de formación no lúdica, con el propósito de incrementar la motivación, el compromiso y el aprendizaje.',
    },
    {
      termino: 'INC (Inventario de Necesidades de Capacitación)',
      significado:
        'documento que consolida y prioriza las brechas de competencia identificadas en el DNC, respondiendo a las preguntas: ¿qué, quién, cuándo y cómo capacitar?',
    },
    {
      termino: 'Kirkpatrick (modelo)',
      significado:
        'modelo de evaluación de la capacitación en cuatro niveles: reacción, aprendizaje, comportamiento y resultados, desarrollado por Donald Kirkpatrick en 1994.',
    },
    {
      termino: 'Microlearning',
      significado:
        'estrategia formativa basada en contenidos breves y focalizados (3-7 minutos) diseñados para ser consumidos en momentos cortos de la jornada laboral.',
    },
    {
      termino: 'Plan de capacitación',
      significado:
        'documento que integra el diagnóstico de necesidades, los objetivos, las actividades formativas, el cronograma, el presupuesto y los indicadores de seguimiento del proceso de formación.',
    },
    {
      termino: 'Reskilling',
      significado:
        'proceso de adquisición de nuevas competencias que permiten al colaborador asumir funciones diferentes a las actuales, en respuesta a cambios en el mercado o la tecnología.',
    },
    {
      termino: 'SG-SST',
      significado:
        'Sistema de Gestión de Seguridad y Salud en el Trabajo. Marco normativo y operativo que obliga a las organizaciones colombianas a gestionar los riesgos laborales y garantizar condiciones seguras de trabajo.',
    },
    {
      termino: 'Upskilling',
      significado:
        'proceso de actualización y fortalecimiento de las competencias actuales del colaborador para responder a nuevas exigencias de su cargo o del mercado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2017). Administración de recursos humanos: el capital humano de las organizaciones (10.ª ed.). McGraw-Hill.',
    },
    {
      referencia:
        'Dessler, G. y Varela, R. (2017). Administración de recursos humanos: enfoque latinoamericano (6.ª ed.). Pearson.',
    },
    {
      referencia:
        'Fleming, N. y Mills, C. (1992). Not another inventory, rather a catalyst for reflection. To Improve the Academy, 11, 137-155.',
    },
    {
      referencia:
        'Gómez Mejía, L., Balkin, D. y Cardy, R. (2016). Gestión de recursos humanos (8.ª ed.). Pearson.',
    },
    {
      referencia:
        'Kapp, K. (2012). The gamification of learning and instruction: game-based methods and strategies for training and education. Pfeiffer.',
    },
    {
      referencia:
        'Kirkpatrick, D. (1994). Evaluating training programs: the four levels. Berrett-Koehler Publishers.',
    },
    {
      referencia:
        'Knowles, M. (1984). Andragogy in action: applying modern principles of adult learning. Jossey-Bass.',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (2015). Decreto 1072 de 2015 – Decreto Único Reglamentario del Sector Trabajo.',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (2019). Resolución 0312 de 2019 – Estándares mínimos del SG-SST.',
    },
    {
      referencia:
        'Siliceo, A. (2010). Capacitación y desarrollo de personal (4.ª ed.). Limusa.',
    },
    {
      referencia:
        'Spencer, L. y Spencer, S. (1993). Competence at work: models for superior performance. John Wiley & Sons.',
    },
    {
      referencia:
        'Werbach, K. y Hunter, D. (2012). For the win: how game thinking can revolutionize your business. Wharton Digital Press.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
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
