import { createI18n } from 'vue-i18n';

const messages = {
    'en': {
        myName: 'Rubén',
        mySurname: 'Gómez Dopazo',
        myTitle: 'Software Engineer',
        myDescription: 'I\'m a <strong>Software Engineer</strong>, currently working as <strong>Cloud Developer</strong> in CTAG (Centro Tecnológico de Automoción de Galicia).',
        headerStudies: 'Studies',
        headerWork: 'Work experience',
        headerProjects: 'Projects',
        headerStudies: 'Studies',
        language: 'Language',
        studiesIntro: 'After finishing Secondary School, i was quite unsure about my vocation. I have always been interested in Computer Science, but I didn\'t feel confident enough to go ' + 
        'for it, so I decided to study the <strong>Mechanical Engineering</strong> degree because it looked quite more familiar to me. After three years of feeling out of place, I decided ' +
        'to take a break and think about my future.<br/>I studied <strong>English</strong> and and got the <strong>B2 level</strong>, but also started to read and learn a lot about computers, ' +
        'especially software.<br/><br/>After a long year, I decided to enter the <strong>Telecomunications Engineering</strong> degree, because I couldn\'t afford to enroll the Software ' +
        'Engineering at the time. That year I realized that my vocation was to be a software developer (with a high interest on videogame development).<br/><br/>During that year I saved enough ' +
        'money to move to other town and to start the <strong>Software Engineering</strong> degree. Next year, I went to Finland on an Erasmus schoolarship, where I learned the some "hands on" ' +
        'computer skills. After four years I got the degree, but at that time I already was working in CTAG as Cloud Developer.<br/><br/>Now that I have finished, I\'m studying on my own, learning ' +
        'in order to be a videogame developer in the future, starting with <strong>Unity</strong> and <strong>C#</strong>. I\'m also learning Web Development, through <strong>Vue JS</strong> ' +
        'and <strong>Tailwind CSS</strong>, being my first project this website.',
        secondarySchool: 'Secondary school',
        mechanicalEngineering: 'Mechanical Engineering',
        telecomEngineering: 'Telecom Engineering',
        softwareEngineering: 'Software Engineering',
        cloudDeveloper: "Cloud developer",
        workIntro: 'My job in CTAG is to develop the backend for a road event manager, giving real ' +
        'time support to the drivers, using tools as Python, Django or MQTT, among others.',
        projectsIntro: 'To see my projects, click the following links.'
    },
    'es': {
        myName: 'Rubén',
        mySurname: 'Gómez Dopazo',
        myTitle: 'Ingeniero de Software',
        myDescription: 'Soy un <strong>Ingeniero de Software</strong>, actualmente trabajando como <strong>desarrollador Cloud</strong> en CTAG (Centro Tecnológico de Automoción de Galicia).',
        headerStudies: 'Estudios',
        headerWork: 'Experiencia laboral',
        headerProjects: 'Proyectos',
        headerStudies: 'Estudios',
        language: 'Idioma',
        studiesIntro: 'Tras terminar la Escuela Secundaria, no tenía muy clara cuál era mi vocación. Siempre me ha interesado la informática, pero no me veía capaz como para estudiarla, ' + 
        'de modo que decidí estudiar el grado en <strong>Ingeniería Mecánica</strong>, al cual me sentía más afín. Tras tres años sintiéndome fuera de lugar, decidí tomarme un año sabático' +
        'para pensar y decidir sobre mi futuro.<br/>Durante ese año, estudié <strong>Inglés</strong> y obtuve el <strong>nivel B2</strong>, pero también comencé a leer y aprender acerca de la ' +
        'informática, en partidula, el software.<br/><br/>Tras un larg año, decidí entrar en el grado de <strong>Ingeniería de Telecomunicaciones</strong>, ya que no me podía permitir la matrícula ' +
        'en el grado en Ingeniería Informática en aquel momento. Ese año comprendí que mi vocación es el desarrollo software (con un gran interés en el desarrollo de videojuegos).<br/><br/>Durante ' +
        'ese año ahorré el dinero suficiente para mudarme a otra ciudad y comenzar el grado en <strong>Ingeniería Informática</strong>. Al año siguiente, me fui a Finlandia con una beca Erasmus, donde ' +
        'aprendí muchas habilidades prrácticas sobre informática. Tras cuatro años conseguí el título, pero para entonces ya estaba trabajando como desarrollador Cloud en CTAG.<br/><br/>Ahora ' +
        'que he terminado, estoy estudiando por mi cuenta para llegar a ser un desarrollador de videojuegos, comenzando con <strong>Unity</strong> y <strong>C#</strong>. También me he interesado por ' +
        'el desarrollo Web, utilizando <strong>Vue JS</strong> y <strong>Tailwind CSS</strong>, siendo esta Web mi primer proyecto.',
        secondarySchool: 'Educación Secundaria',
        mechanicalEngineering: 'Ingeniería Mecánica',
        telecomEngineering: 'Ingeniería de Telecomunicaciones',
        softwareEngineering: 'Ingeniería Informática',
        cloudDeveloper: "Desarrollador Cloud",
        workIntro: 'He trabajado como desarrollador cloud durante el último año.',
        projectsIntro: 'Para ver mis proyectos, selecciona uno de los siguientes enlaces.'
    }
}

export const i18n = createI18n({
    warnHtmlInMessage: false,
    locale: 'en',
    fallbackLocale: 'es',
    messages,
    setup() {
        const { t, locale } = useI18n({ useScope: 'global' })
        locale.value = 'en'
        return { t, locale }
    }      
})


