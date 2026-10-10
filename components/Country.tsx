'use client'

import { countryEn } from '../lib/seo'
import { useLang } from './LangProvider'

// Nom du pays dans la langue de l'interface (« Côte d'Ivoire » / « Ivory Coast »)
export default function Country({ pays }: { pays: string }) {
  const { lang } = useLang()
  return <>{lang === 'en' ? countryEn(pays) : pays}</>
}
