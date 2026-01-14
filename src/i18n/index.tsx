import { useState, useContext, createContext } from 'react'
import { dictionaries, DEFAULT_LOCALE } from './config'
import type {Locale} from "./types.ts";

const I18nContext = createContext<{
    locale: Locale
    t: typeof dictionaries[Locale]
    setLocale: (l: Locale) => void
}>(null!)

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE)

    return (
        <I18nContext.Provider
            value={{
        locale,
            setLocale,
            t: dictionaries[locale],
    }}
>
    {children}
    </I18nContext.Provider>
)
}

export function useI18n() {
    return useContext(I18nContext)
}
