import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import id from './locales/id.json';

i18n.use(initReactI18next).init({
    lng: 'id',
    fallbackLng: 'id',
    debug: true,
    resources: {
        en: {
            translation: en
        },
        id: {
            translation: id
        }
    }
});

export default i18n;