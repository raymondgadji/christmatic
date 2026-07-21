import { supabase } from '../lib/supabase'
import HeroBanner from '../components/HeroBanner'
import FilmRow from '../components/FilmRow'

export const dynamic = 'force-dynamic'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que Christmatic ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Christmatic est une plateforme de streaming gratuite dédiée aux films et séries chrétiens produits en Afrique noire (Nollywood chrétien, cinéma francophone chrétien), en français et en anglais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Christmatic est-il gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Christmatic est actuellement 100% gratuit. La plateforme est soutenue par les dons libres des utilisateurs via le bouton "Soutenir le ministère".',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels pays sont représentés sur Christmatic ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Christmatic diffuse des films chrétiens d\'Afrique subsaharienne : Nigeria, Cameroun, Côte d\'Ivoire, Gabon, Togo, Ghana, RDC et d\'autres pays d\'Afrique de l\'Ouest, de l\'Est, Centrale et Australe. Les films arabes et occidentaux ne sont pas inclus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment regarder les films sur Christmatic ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les films sont accessibles directement sur christmatic.tv, en streaming via lecteur intégré, sans inscription requise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Christmatic propose-t-il du contenu en anglais et en français ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Christmatic propose deux catalogues distincts : Films en Français et Films in English, avec des productions du Nigeria, du Ghana, du Cameroun, de la Côte d\'Ivoire et d\'autres pays d\'Afrique noire.',
      },
    },
  ],
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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