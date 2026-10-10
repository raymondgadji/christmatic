'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

export type Lang = 'fr' | 'en'

const KEY = 'christmatic_lang'

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangContextValue>({ lang: 'fr', setLang: () => {} })

// Langue de l'interface (boutons, menus, libellés). Le contenu des films (titre, synopsis) ne change pas.
// Le serveur et le premier affichage sont TOUJOURS en français : Google voit exactement le même site qu'avant.
// L'anglais n'apparaît que si le visiteur le choisit (bouton EN), ou s'il arrive directement sur /english sans avoir déjà choisi.
export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY)
      if (stored === 'fr' || stored === 'en') {
        setLangState(stored)
        return
      }
      // Pas de choix mémorisé : arrivée directe sur /english (lien partagé, Google...) => anglais d'emblée.
      // Un clic interne (ex. « Voir tout » depuis l'accueil en français) ne change pas la langue.
      const cameFromSite = document.referrer.startsWith(window.location.origin)
      if (window.location.pathname.startsWith('/english') && !cameFromSite) {
        setLangState('en')
        localStorage.setItem(KEY, 'en')
      }
    } catch {
      // stockage indisponible (navigation privée...) : on reste en français
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(KEY, l)
    } catch {
      // le choix ne sera pas mémorisé, mais s'applique pour la visite
    }
  }, [])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

// Texte à deux langues, utilisable aussi dans les pages serveur : <T fr="Accueil" en="Home" />
export function T({ fr, en }: { fr: string; en: string }) {
  const { lang } = useLang()
  return <>{lang === 'en' ? en : fr}</>
}

// Pour les attributs et les chaînes calculées : const tr = useTr(); tr('Accueil', 'Home')
export function useTr() {
  const { lang } = useLang()
  return (fr: string, en: string) => (lang === 'en' ? en : fr)
}
