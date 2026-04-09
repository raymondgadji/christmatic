export interface Film {
  id: string
  titre: string
  titre_en: string | null
  slug: string
  description: string | null
  annee: number
  pays: string
  langue: string        // 'fr' ou 'en'
  youtube_id: string | null
  thumbnail_url: string | null
  duree_min: number | null
  tags: string[]
  is_featured: boolean
  is_published: boolean
  created_at: string
}