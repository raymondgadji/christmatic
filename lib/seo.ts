export const SITE_URL = 'https://www.christmatic.tv'

// Pays (stockés en français) -> nom anglais, pour les textes bilingues
const COUNTRY_EN: Record<string, string> = {
  Cameroun: 'Cameroon',
  "Côte d'Ivoire": 'Ivory Coast',
  RDC: 'DR Congo',
  'Gabon/Cameroun': 'Gabon/Cameroon',
  'USA (diaspora noire)': 'USA (Black diaspora)',
  Bénin: 'Benin',
  Sénégal: 'Senegal',
  'Afrique du Sud': 'South Africa',
}

export function countryEn(pays: string) {
  return COUNTRY_EN[pays] || pays
}

// Décision de Raymond (10/10/2026, précisée le même jour) : le bilingue FR + EN concerne UNIQUEMENT les messages de PARTAGE
// (WhatsApp, Facebook, LinkedIn...) des films ajoutés à partir de cette date. Les textes du site (synopsis, descriptions) ne sont pas concernés.
export const BILINGUAL_FROM = '2026-10-10'

export function isBilingualFilm(createdAt?: string | null) {
  if (!createdAt) return false
  return new Date(createdAt).getTime() >= new Date(BILINGUAL_FROM + 'T00:00:00Z').getTime()
}
