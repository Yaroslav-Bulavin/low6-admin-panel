import en from './locales/en';

export const resources = {
  en: { translation: en },
};

export const enabledLanguages = Object.keys(resources);

export const DEFAULT_LANGUAGE = en;

export type TFunc = (key: string) => string;
export type tKeysUnion = keyof typeof DEFAULT_LANGUAGE;
export type tKeysType = { [key in tKeysUnion]: tKeysUnion };
export const tKeys = Object.fromEntries(
  Object.keys(DEFAULT_LANGUAGE).map((key) => [key, key]),
) as tKeysType;
