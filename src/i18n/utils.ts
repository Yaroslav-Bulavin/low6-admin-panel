import { enabledLanguages } from '@/i18n/resourses';

export const appLangFormat = (lang: string | undefined) =>
  lang?.split('-')?.[0] || 'en';

export const isLangExistsInEnabledLanguages = (lng: string | undefined) =>
  lng ? enabledLanguages.includes(lng) : false;

export const languagesDependOnUserLang = (lng: string | undefined) => {
  if (lng) {
    return [lng, ...enabledLanguages.filter((x) => x !== lng)];
  }
  return enabledLanguages;
};

export const langNameByAbbr: Record<string, string> = {
  en: 'English',
};
