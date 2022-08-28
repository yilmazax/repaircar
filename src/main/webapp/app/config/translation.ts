import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  cs: { name: 'Český' },
  en: { name: 'English' },
  et: { name: 'Eesti' },
  de: { name: 'Deutsch' },
  ko: { name: '한국어' },
  ro: { name: 'Română' },
  ru: { name: 'Русский' },
  es: { name: 'Español' },
  sv: { name: 'Svenska' },
  tr: { name: 'Türkçe' },
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
