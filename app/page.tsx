import HeroBanner from '../components/HeroBanner'
import FilmRow from '../components/FilmRow'

const filmsFr = [
  { id: '1', titre: 'Le Chemin de la Grâce', pays: "Côte d'Ivoire", annee: 2023, tags: 'Drame', badge: 'NOUVEAU' },
  { id: '2', titre: 'Lumière dans les Ténèbres', pays: 'RDC', annee: 2022, tags: 'Foi' },
  { id: '3', titre: 'Rédemption', pays: 'Cameroun', annee: 2024, tags: 'Drame', badge: 'POPULAIRE' },
  { id: '4', titre: 'La Promesse du Père', pays: 'Sénégal', annee: 2023, tags: 'Famille' },
  { id: '5', titre: 'Délivrance', pays: 'Bénin', annee: 2022, tags: 'Évangile' },
]

const filmsEn = [
  { id: '6', titre: 'High Calling', pays: 'Nigeria', annee: 2024, tags: 'Nollywood', badge: 'TOP' },
  { id: '7', titre: "God's Calling", pays: 'Ghana', annee: 2023, tags: 'Drame', badge: 'NOUVEAU' },
  { id: '8', titre: 'Under Siege', pays: 'Kenya', annee: 2024, tags: 'Spirituel' },
  { id: '9', titre: 'Abejoye', pays: 'Nigeria', annee: 2022, tags: 'Mount Zion' },
  { id: '10', titre: 'The Promise', pays: 'Afrique du Sud', annee: 2023, tags: 'Famille' },
]

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FilmRow titre="Films en Français" emoji="🇫🇷" films={filmsFr} />
      <div style={{ height: '0.5px', background: 'var(--color-border)', margin: '0 24px' }} />
      <FilmRow titre="Films en Anglais" emoji="🇬🇧" films={filmsEn} />
    </>
  )
}