import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    // Force chaque requête à contourner le Data Cache de Next.js — `dynamic = 'force-dynamic'`
    // sur les pages ne suffit pas à lui seul si le fetch interne de supabase-js n'est pas
    // explicitement marqué no-store.
    fetch: (input, init) => fetch(input, { ...init, cache: 'no-store' }),
  },
})