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
        studiesIntro: 'I have studied many things along my career.',
        secondarySchool: 'Secondary school',
        mechanicalEngineering: 'Mechanical Engineering',
        telecomEngineering: 'Telecom Engineering',
        softwareEngineering: 'Software Engineering',
        cloudDeveloper: "Cloud developer",
        workIntro: 'I have worked as Cloud Developer for the last year.',
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
        studiesIntro: 'He estudiado muchas cosas a lo largo de mi carrera.',
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


