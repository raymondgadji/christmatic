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

// Description automatique d'un film sans synopsis : français ET anglais ensemble (décision de Raymond, 10/10/2026)
export function autoDescription(pays: string) {
  return `Film chrétien de ${pays}, disponible gratuitement sur Christmatic. / Christian film from ${countryEn(pays)}, free to watch on Christmatic.`
}

// Décision de Raymond (10/10/2026) : le bilingue FR + EN ne s'applique qu'aux films ajoutés À PARTIR de cette date.
// Les films déjà en ligne gardent exactement leurs textes d'avant (rien ne change pour Google ni pour le partage).
export const BILINGUAL_FROM = '2026-10-10'

export function isBilingualFilm(createdAt?: string | null) {
  if (!createdAt) return false
  return new Date(createdAt).getTime() >= new Date(BILINGUAL_FROM + 'T00:00:00Z').getTime()
}
