import { supabase } from '../lib/supabase'
import HeroBanner from '../components/HeroBanner'
import FilmRow from '../components/FilmRow'

export const revalidate = 3600

export default async function Home() {
  const { data: filmsFr } = await supabase
    .from('films')
    .select('*')
    .eq('langue', 'fr')
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  const { data: filmsEn } = await supabase
    .from('films')
    .select('*')
    .eq('langue', 'en')
    .eq('is_published', true)
    .order('created_at', { ascending: false })

  const formatFilms = (films: {
    id: string
    titre: string
    pays: string
    annee: number
    tags: string[]
    thumbnail_url: string
    slug: string
  }[]) => films.map((f) => ({
    id: f.id,
    titre: f.titre,
    pays: f.pays,
    annee: f.annee,
    tags: f.tags || [],
    thumbnail_url: f.thumbnail_url || '',
    slug: f.slug,
  }))

  return (
    <>
      <HeroBanner />
      <FilmRow
        titre="Films en Français"
        emoji="🇫🇷"
        films={formatFilms(filmsFr || [])}
      />
      <div style={{ height: '0.5px', background: 'var(--color-border)', margin: '0 24px' }} />
      <FilmRow
        titre="Films in English"
        emoji="🇬🇧"
        films={formatFilms(filmsEn || [])}
      />
    </>
  )
}