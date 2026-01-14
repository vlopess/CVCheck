import { pt } from './locales/pt'
import { en } from './locales/en'
import type {Locale} from "./types.ts";

export const dictionaries: Record<Locale, typeof pt> = {
    pt,
    en,
}

export const DEFAULT_LOCALE: Locale = 'pt'
