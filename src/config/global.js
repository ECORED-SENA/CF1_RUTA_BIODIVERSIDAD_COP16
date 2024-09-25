export default {
  global: {
    componenteFormativo: 'Introducción a la COP16 y la biodiversidad',
    descripcionCurso:
      'La COP16, centrada en la biodiversidad, reunirá a 196 países en Colombia para abordar delitos ambientales, gestión territorial y transformación productiva. Se destacarán compromisos, el Marco Mundial de Biodiversidad, y la importancia de la tecnología e innovación. Colombia asumirá un rol clave en la protección ambiental, promoviendo acciones locales, ciudadanas y globales para mitigar la crisis climática.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
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
        titulo: '¿Qué es la COP de Biodiversidad?',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La biodiversidad y sus niveles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Retos y oportunidades en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Reto 1. Reducir las amenazas a la biodiversidad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reto 2. Satisfacer las necesidades de las personas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Reto 3. Herramientas y soluciones para la implementación y la integridad',
            hash: 't_3_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '¿Qué es la COP de Biodiversidad?',
      referencia: 'COP16. (2024). Paz con la naturaleza. ',
      tipo: 'Documento ',
      link:
        'https://acmineria.com.co/wp-content/uploads/2024/05/COP16-Paz-con-la-naturaleza-1.pdf',
    },
    {
      tema: '¿Qué es la COP de Biodiversidad?',
      referencia:
        'Foro Nacional Ambiental. (2024). FORO 1 | Biodiversidad y la COP 16: origen, evolución del concepto ¿Qué se espera de la COP16?',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=9iLS78WX36A&ab_channel=ForoNacionalAmbiental',
    },
    {
      tema: 'COP16',
      referencia:
        'WWF. (2024). Siete términos clave que te permitirán entender mejor la COP16.',
      tipo: 'Artículo web',
      link:
        'https://www.wwf.org.co/?389912/que-es-la-cop16-biodiversidad-siglas-terminos',
    },
    {
      tema: 'Biodiversidad',
      referencia: 'UNESCO. (2017). Kit pedagógico sobre biodiversidad. ',
      tipo: 'Libro ',
      link:
        'https://www.google.com.br/books/edition/Kit_pedag%C3%B3gico_sobre_biodiversidad/fJMnDwAAQBAJ?hl=es&gbpv=1&dq=COP+16+biodiversidad&printsec=frontcover',
    },
    {
      tema: 'Retos y oportunidades en Colombia',
      referencia:
        'UNDP. (2024). COP 16, oportunidad única para que Colombia avance hacia la construcción de la Paz con la Naturaleza. ',
      tipo: 'Artículo web',
      link:
        'https://www.undp.org/es/colombia/noticias/cop-16-oportunidad-unica-colombia-avance-construccion-paz-naturaleza',
    },
    {
      tema: 'Retos y oportunidades en Colombia',
      referencia:
        'WWF. (2024). ABC DEL MARCO GLOBAL DE BIODIVERSIDAD Kunming-Montreal: Agenda global, retos y oportunidades en Colombia. ',
      tipo: 'Documento',
      link:
        'https://wwflac.awsassets.panda.org/downloads/abc-del-marco-global-de-biodiversidad-kunming-montreal-cop16.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acción ciudadana',
      significado:
        'participación activa de individuos y comunidades en la protección y conservación de los recursos naturales.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'conjunto de todos los seres vivos que forman parte de los distintos ecosistemas en el planeta, incluyendo su variabilidad genética y relaciones.',
    },
    {
      termino: 'Conservación',
      significado:
        'acciones dirigidas a mantener y restaurar la biodiversidad, los ecosistemas y los recursos naturales.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'modelo de desarrollo que satisface las necesidades presentes sin comprometer las futuras generaciones.',
    },
    {
      termino: 'Ecosistemas',
      significado:
        'unidades compuestas por organismos vivos que interactúan entre sí y con su entorno no vivo (suelo, agua y aire).',
    },
    {
      termino: 'Innovación tecnológica',
      significado:
        'aplicación de nuevas tecnologías para resolver problemas relacionados con la conservación de la biodiversidad.',
    },
    {
      termino: 'Mitigación',
      significado:
        'medidas para reducir o controlar los impactos adversos de las actividades humanas en el medio ambiente.',
    },
    {
      termino: 'Recursos genéticos',
      significado:
        'material hereditario presente en los organismos que tiene un valor actual o potencial para la humanidad.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de mantener un equilibrio entre las necesidades humanas y los recursos naturales a largo plazo.',
    },
    {
      termino: 'Transformación productiva',
      significado:
        'producción económica que integra la conservación de los recursos naturales y la biodiversidad.',
    },
  ],
  referencias: [
    {
      referencia: 'COP16. (2024). ABC COP16. ',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/08/ABC_COP16_AGO.pdf',
    },
    {
      referencia:
        'COP16. (2024). Cómo se toman las decisiones en la COP de Biodiversidad.',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/07/Como-se-toman-las-decisiones-en-la-COP-de-Biodiversidad.pdf ',
    },
    {
      referencia:
        'COP16. (2024). Los regalos que nos da la naturaleza para vivir.',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/07/Los-regalos-que-nos-da-la-naturaleza-para-vivir.pdf ',
    },
    {
      referencia: 'COP16. (2024). Niveles de la biodiversidad.',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/07/Niveles-de-la-biodiversidad.pdf ',
    },
    {
      referencia:
        'COP16. (2024). Notas didácticas ensena a tus amigos y familia sobre COP16.',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/07/NOTAS_DIDACTICAS_ENSENA_A_TUS_AMIGOS_Y_FAMILIA_SOBRE_COP16.pdf ',
    },
    {
      referencia:
        'COP16. (2024). Retos y oportunidades en Colombia en el Marco Global de Biodiversidad Kumming-Montreal.',
      link:
        'https://www.cop16colombia.com/es/wp-content/uploads/2024/08/Retos-y-oportunidades-en-Colombia.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jose Eduardo Solano Rivero',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Adolfo Contreras Barranco',
          cargo: 'Guionista validador',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
