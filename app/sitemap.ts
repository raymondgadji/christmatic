import { MetadataRoute } from 'next'
import { supabase } from '../lib/supabase'
import { SITE_URL } from '../lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: films } = await supabase
    .from('films')
    .select('slug, created_at')
    .eq('is_published', true)

  const filmEntries: MetadataRoute.Sitemap = (films || []).map((film) => ({
    url: `${SITE_URL}/films/${film.slug}`,
    lastModified: film.created_at,
  }))

  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/francais`, lastModified: new Date() },
    { url: `${SITE_URL}/english`, lastModified: new Date() },
    { url: `${SITE_URL}/soutenir`, lastModified: new Date() },
    ...filmEntries,
  ]
}
