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
