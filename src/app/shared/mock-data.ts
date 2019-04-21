import { Institution } from './models/study.model';
import {DocumentType, User} from './models/user.model';

export class MockData {


  public static readonly VOCATIONAL_INSTITUTION: Institution[] = [
    { uid: 1, name: 'IES Belén' },
    { uid: 2, name: 'IES Politécnico Jesús Marín' },
    { uid: 3, name: 'IES Rosaleda' }
  ];
  public static readonly VOCATIONAL_CATEGORY = [
    { uid: 1, name: 'Artes Gráficas' },
    { uid: 2, name: 'Informática y comunicaciones' },
    { uid: 3, name: 'Imagen y sonido' },
    { uid: 4, name: 'Comercio y Marketing' },
    { uid: 5, name: 'Administración y Gestión' }
  ];
  public static readonly VOCATIONAL_TITLE = [
    { uid: 1, name: 'Desarrollo de Aplicaciones Web' },
    { uid: 2, name: 'Administración de Sistemas Informáticos y Redes ' },
    { uid: 3, name: 'VideoDJ' },
    { uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' },
    { uid: 5, name: 'Gestión Comercial y Empresarial' },
    { uid: 6, name: 'Empresariales' }
  ];
  public static readonly VOCATIONAL_GRADES = [
    { uid: 1, name: 'FP Básica' },
    { uid: 2, name: 'Ciclo Formativo de Grado Medio' },
    { uid: 3, name: 'Ciclo Formativo de Grado Superior' }
  ];
  public static readonly TYPE_STUDIES = [
    { uid: 1, name: 'Ciclo formativo' },
    { uid: 2, name: 'Título Universitario' },
    { uid: 3, name: 'Otro título' }
  ];
  public static readonly LANGUAGES_LEVEL = [
    { uid: 1, name: 'A1' },
    { uid: 2, name: 'A2' },
    { uid: 3, name: 'B1' },
    { uid: 4, name: 'B2' },
    { uid: 5, name: 'C1' },
    { uid: 6, name: 'C2' }
  ];
  public static readonly LANGUAGES_NAME = [
    { uid: 1, name: 'Inglés' },
    { uid: 2, name: 'Francés' },
    { uid: 3, name: 'Alemán' },
    { uid: 4, name: 'Espaol' }
  ];


  public static readonly DOCUMENTS_TYPE: DocumentType[] = [
    { uid: 1, name: 'NIF' },
    { uid: 2, name: 'Pasaporte' },
    { uid: 3, name: 'Otro' }
  ];
  public static readonly MUNICIPES = [
    { uid: 1, name: 'Málaga' },
    { uid: 2, name: 'Fuengirola' },
    { uid: 3, name: 'Rincón de la victoria' },
    { uid: 4, name: 'Dos hermanas' },
    { uid: 5, name: 'Sevilla' },
    { uid: 6, name: 'Chiclana de la Frontera' },
    { uid: 7, name: 'Estepona' },
    { uid: 8, name: 'Campanillas (PTA)' },
    { uid: 9, name: 'Motril' },
    { uid: 10, name: 'Osuna' }
  ];
  public static readonly PROVINCES = [
    { uid: 1, name: 'Málaga' },
    { uid: 2, name: 'Sevilla' },
    { uid: 3, name: 'Huelva' },
    { uid: 4, name: 'Cádiz' },
    { uid: 5, name: 'Granada' }
  ];

  public static readonly USER: User =
      {
            id: 1,
            username: 'carloscg',
            name: 'Carlos',
            surname: 'Caballero',
            birthdate: '19/11/1984',
            phone: '644039911',
            phone2: '690940321',
            email: 'carlos.caballero@gmail.com',
            password: '1234',
            roles: ['student'],
            documentType: { uid: 1, name: 'NIF' },
            documentNumber: '26808956H',
            license: 'B1',
            aboutMe: 'LOREM IPSUM',
            otherCompetences: 'LOREM IPSUM',
            address: {
                street: 'Urbanización las Areanas - 45',
                province: { uid: 4, name: 'Cádiz' },
                municipe: { uid: 6, name: 'Chiclana de la Frontera' }
            },
            avatar_hash: 'assets/img/perfil.png',
            studies: [
                {
                    uid: 1,
                    level: { uid: 1, name: 'Ciclo Formativo' },
                    category: { uid: 2, name: 'Informática y comunicaciones' },
                    institution: {
                        uid: 2,
                        name: 'IES Politécnico Jesús Marin'
                    },
                    title: {
                        uid: 2,
                        name: 'Administracion de sistemas informaticos y redes'
                    },
                    grade: {
                        uid: 3,
                        name: 'Ciclo Formativo de Grado Superior'
                    },
                    date: '30/06/2005',
                    dual: false,
                    bilingue: true,
                    certificate: true
                },
                {
                    uid: 2,
                    institution: {
                        uid: 2,
                        name: 'IES Politécnico Jesús Marin'
                    },
                    category: { uid: 2, name: 'Informática y comunicaciones' },
                    level: { uid: 1, name: 'Ciclo Formativo' },
                    title: {
                        uid: 1,
                        name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
                    },
                    grade: { uid: 3, name: 'Ciclo Formativo de Grado Superior' },
                    date: '30/06/2007',
                    dual: true,
                    bilingue: false,
                    certificate: false
                }
            ],
            experiencies: [],
            languages: [
                {
                    uid: 1,
                    level: { uid: 5, name: 'C1' },
                    name: { uid: 1, name: 'Inglés' },
                    date: '30/06/2005'
                },
                {
                    uid: 2,
                    level: { uid: 4, name: 'B2' },
                    name: { uid: 2, name: 'Francés' },
                    date: '30/06/1998'
                }
            ],
            offers: []
            /*         experiences: [
              {
                id: 0,
                eid: 0,
                empresa: 'Suma',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Junior',
                tareas: 'Desarrollador front-end'
              },
              {
                id: 0,
                eid: 1,
                empresa: 'Indra',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Ingeniero',
                tareas: 'Desarrollador back-end'
              }
            ],
            languages: [
              { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
              {
                id: 0,
                lid: 1,
                idioma: 'Portugués',
                nivel: 'A2',
                date: '30/06/2013'
              }
            ]
         */
        };


    public static readonly USERS: User[] =
        [{
            id: 1,
            username: 'carloscg',
            name: 'Carlos',
            surname: 'Caballero',
            birthdate: '19/11/1984',
            phone: '644039911',
            phone2: '690940321',
            email: 'carlos.caballero@gmail.com',
            password: '1234',
            roles: ['student'],
            documentType: { uid: 1, name: 'NIF' },
            documentNumber: '26808956H',
            license: 'B1',
            aboutMe: 'LOREM IPSUM',
            otherCompetences: 'LOREM IPSUM',
            address: {
                street: 'Urbanización las Areanas - 45',
                province: { uid: 4, name: 'Cádiz' },
                municipe: { uid: 6, name: 'Chiclana de la Frontera' }
            },
            avatar_hash: 'assets/img/perfil.png',
            studies: [
                {
                    uid: 1,
                    level: { uid: 1, name: 'Ciclo Formativo' },
                    category: { uid: 2, name: 'Informática y comunicaciones' },
                    institution: {
                        uid: 2,
                        name: 'IES Politécnico Jesús Marin'
                    },
                    title: {
                        uid: 2,
                        name: 'Administracion de sistemas informaticos y redes'
                    },
                    grade: {
                        uid: 3,
                        name: 'Ciclo Formativo de Grado Superior'
                    },
                    date: '30/06/2005',
                    dual: false,
                    bilingue: true,
                    certificate: true
                },
                {
                    uid: 2,
                    institution: {
                        uid: 2,
                        name: 'IES Politécnico Jesús Marin'
                    },
                    category: { uid: 2, name: 'Informática y comunicaciones' },
                    level: { uid: 1, name: 'Ciclo Formativo' },
                    title: {
                        uid: 1,
                        name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
                    },
                    grade: { uid: 3, name: 'Ciclo Formativo de Grado Superior' },
                    date: '30/06/2007',
                    dual: true,
                    bilingue: false,
                    certificate: false
                }
            ],
            experiencies: [],
            languages: [
                {
                    uid: 1,
                    level: { uid: 5, name: 'C1' },
                    name: { uid: 1, name: 'Inglés' },
                    date: '30/06/2005'
                },
                {
                    uid: 2,
                    level: { uid: 4, name: 'B2' },
                    name: { uid: 2, name: 'Francés' },
                    date: '30/06/1998'
                }
            ],
            offers: []
            /*         experiences: [
              {
                id: 0,
                eid: 0,
                empresa: 'Suma',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Junior',
                tareas: 'Desarrollador front-end'
              },
              {
                id: 0,
                eid: 1,
                empresa: 'Indra',
                date_incio: '1548320228',
                date_fin: '1548320228',
                puesto: 'Ingeniero',
                tareas: 'Desarrollador back-end'
              }
            ],
            languages: [
              { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
              {
                id: 0,
                lid: 1,
                idioma: 'Portugués',
                nivel: 'A2',
                date: '30/06/2013'
              }
            ]
         */
        },
        {
        id: 2,
        username: 'carloscgAAAA',
        name: 'CarlosBBBBB',
        surname: 'CaballeroCCCC',
        birthdate: '19/11/1984',
        phone: '644039911',
        phone2: '690940321',
        email: 'carlos.caballero@gmail.com',
        password: '1234',
        roles: ['student'],
        documentType: { uid: 1, name: 'NIF' },
        documentNumber: '26808956H',
        license: 'B1',
        aboutMe: 'LOREM IPSUM',
        otherCompetences: 'LOREM IPSUM',
        address: {
            street: 'Urbanización las Areanas - 45',
            province: { uid: 4, name: 'Cádiz' },
            municipe: { uid: 6, name: 'Chiclana de la Frontera' }
        },
        avatar_hash: 'assets/img/perfil.png',
        studies: [
            {
                uid: 1,
                level: { uid: 1, name: 'Ciclo Formativo' },
                category: { uid: 2, name: 'Informática y comunicaciones' },
                institution: {
                    uid: 2,
                    name: 'IES Politécnico Jesús Marin'
                },
                title: {
                    uid: 2,
                    name: 'Administracion de sistemas informaticos y redes'
                },
                grade: {
                    uid: 3,
                    name: 'Ciclo Formativo de Grado Superior'
                },
                date: '30/06/2005',
                dual: false,
                bilingue: true,
                certificate: true
            },
            {
                uid: 2,
                institution: {
                    uid: 2,
                    name: 'IES Politécnico Jesús Marin'
                },
                category: { uid: 2, name: 'Informática y comunicaciones' },
                level: { uid: 1, name: 'Ciclo Formativo' },
                title: {
                    uid: 1,
                    name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
                },
                grade: { uid: 3, name: 'Ciclo Formativo de Grado Superior' },
                date: '30/06/2007',
                dual: true,
                bilingue: false,
                certificate: false
            }
        ],
        experiencies: [],
        languages: [
            {
                uid: 1,
                level: { uid: 5, name: 'C1' },
                name: { uid: 1, name: 'Inglés' },
                date: '30/06/2005'
            },
            {
                uid: 2,
                level: { uid: 4, name: 'B2' },
                name: { uid: 2, name: 'Francés' },
                date: '30/06/1998'
            }
        ],
        offers: []
        /*         experiences: [
          {
            id: 0,
            eid: 0,
            empresa: 'Suma',
            date_incio: '1548320228',
            date_fin: '1548320228',
            puesto: 'Junior',
            tareas: 'Desarrollador front-end'
          },
          {
            id: 0,
            eid: 1,
            empresa: 'Indra',
            date_incio: '1548320228',
            date_fin: '1548320228',
            puesto: 'Ingeniero',
            tareas: 'Desarrollador back-end'
          }
        ],
        languages: [
          { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
          {
            id: 0,
            lid: 1,
            idioma: 'Portugués',
            nivel: 'A2',
            date: '30/06/2013'
          }
        ]
     */
    }];


  public static fakeIncreaseID<T>(collection, object: T): T {
    const _object = { ...object };
    const uid = collection[collection.length - 1].uid + 1;
    _object['uid'] = uid;
    return _object;
  }
}
