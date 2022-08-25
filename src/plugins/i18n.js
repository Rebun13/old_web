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
        language: 'Language'
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
        language: 'Idioma'
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


