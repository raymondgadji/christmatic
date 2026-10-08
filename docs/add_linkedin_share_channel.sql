-- Autorise le canal 'linkedin' dans le suivi des clics de partage (table share_clicks).
-- À exécuter une fois dans le SQL Editor Supabase.

ALTER TABLE share_clicks DROP CONSTRAINT IF EXISTS share_clicks_channel_check;

ALTER TABLE share_clicks
  ADD CONSTRAINT share_clicks_channel_check
  CHECK (channel IN ('whatsapp', 'facebook', 'linkedin', 'copy'));
