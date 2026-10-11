'use client'

import { useLang } from '../../components/LangProvider'

// Politique de confidentialité (validée par Raymond le 11/10/2026 : éditeur, contact et prestataires confirmés).
// Contenu strictement limité à ce que le site fait réellement (voir CLAUDE_CHRISTMATIC.md, section 13).
const CONTACT = 'gadjiraymond7@gmail.com'
const UPDATED_FR = '11 octobre 2026'
const UPDATED_EN = 'October 11, 2026'

type Section = { title: string; body: string[] }

const FR: Section[] = [
  {
    title: 'Qui sommes-nous ?',
    body: [
      "Christmatic (christmatic.tv) est une plateforme gratuite de films chrétiens d'Afrique noire. Le site est édité par Raymond GADJI (AI Tech). Contact : " + CONTACT + '.',
    ],
  },
  {
    title: 'Regarder les films : aucun compte nécessaire',
    body: [
      "Vous pouvez regarder tous les films sans créer de compte et sans nous donner aucune information personnelle.",
      "Les films sont lus par le lecteur de YouTube intégré au site. YouTube (Google) peut déposer des cookies et collecter des données selon sa propre politique de confidentialité : https://policies.google.com/privacy.",
      "Nous mesurons la fréquentation du site avec Vercel Analytics, un outil qui compte les visites de façon agrégée, sans cookie publicitaire et sans vous identifier. Nous comptons aussi, de façon anonyme, les clics sur les boutons de partage (WhatsApp, Facebook, LinkedIn, copier le lien).",
    ],
  },
  {
    title: 'Compte facultatif et « Ma liste »',
    body: [
      "Si vous le souhaitez, vous pouvez vous connecter pour garder vos films favoris (« Ma liste ») et les retrouver sur vos appareils. La connexion se fait avec votre adresse e-mail (nous vous envoyons un code) ou avec votre compte Google.",
      "Données conservées : votre adresse e-mail (et, si vous utilisez Google, le nom et l'adresse e-mail de votre compte Google que Google nous transmet), ainsi que la liste des films que vous avez ajoutés à « Ma liste ».",
      "Finalités : vous connecter, afficher votre liste, et vous envoyer le code de connexion. Nous n'utilisons pas ces données pour de la publicité, nous ne les vendons pas et nous ne les partageons avec personne d'autre que les prestataires techniques ci-dessous.",
      "L'utilisation par Christmatic des informations reçues des API Google respecte la politique « Google API Services User Data Policy », y compris ses exigences d'utilisation limitée.",
    ],
  },
  {
    title: 'Nos prestataires techniques',
    body: [
      "Supabase (base de données et connexion, serveurs en Irlande, Union européenne) ; Resend (envoi du code de connexion par e-mail, serveurs en Irlande) ; Vercel (hébergement du site et mesure d'audience) ; Google (connexion avec Google, si vous la choisissez, et lecteur YouTube).",
    ],
  },
  {
    title: 'Stockage sur votre appareil',
    body: [
      "Le site enregistre sur votre appareil uniquement : votre choix de langue (français ou anglais), votre session de connexion si vous êtes connecté, et temporairement le film que vous veniez d'ajouter à « Ma liste » pendant la connexion. Ce ne sont pas des traceurs publicitaires.",
    ],
  },
  {
    title: 'Durée de conservation et vos droits',
    body: [
      "Vos données de compte sont conservées tant que votre compte existe. Vous pouvez demander à tout moment l'accès à vos données, leur correction ou la suppression de votre compte et de votre liste en écrivant à " + CONTACT + '. Nous répondons dans un délai d’un mois.',
      "Conformément au RGPD, vous pouvez aussi introduire une réclamation auprès de la CNIL (www.cnil.fr).",
    ],
  },
  {
    title: 'Modifications',
    body: ["Cette page peut être mise à jour ; la date de dernière mise à jour figure en haut de la page."],
  },
]

const EN: Section[] = [
  {
    title: 'Who we are',
    body: [
      'Christmatic (christmatic.tv) is a free platform for Christian films from Black Africa. The site is published by Raymond GADJI (AI Tech). Contact: ' + CONTACT + '.',
    ],
  },
  {
    title: 'Watching films: no account needed',
    body: [
      'You can watch every film without creating an account and without giving us any personal information.',
      "Films are played by the YouTube player embedded in the site. YouTube (Google) may set cookies and collect data under its own privacy policy: https://policies.google.com/privacy.",
      'We measure site traffic with Vercel Analytics, a tool that counts visits in aggregate, without advertising cookies and without identifying you. We also count, anonymously, clicks on the share buttons (WhatsApp, Facebook, LinkedIn, copy link).',
    ],
  },
  {
    title: 'Optional account and “My list”',
    body: [
      'If you wish, you can log in to keep your favorite films (“My list”) and find them on all your devices. Login uses your email address (we send you a code) or your Google account.',
      'Data we keep: your email address (and, if you use Google, the name and email address of your Google account that Google sends us), and the list of films you added to “My list”.',
      'Purposes: to log you in, to show your list, and to send you the login code. We do not use this data for advertising, we do not sell it, and we share it with no one other than the technical providers below.',
      "Christmatic's use of information received from Google APIs complies with the Google API Services User Data Policy, including its Limited Use requirements.",
    ],
  },
  {
    title: 'Our technical providers',
    body: [
      'Supabase (database and login, servers in Ireland, European Union); Resend (sending the login code by email, servers in Ireland); Vercel (site hosting and traffic measurement); Google (Google sign-in, if you choose it, and the YouTube player).',
    ],
  },
  {
    title: 'Storage on your device',
    body: [
      'The site stores on your device only: your language choice (French or English), your login session if you are logged in, and, temporarily, the film you had just added to “My list” while logging in. These are not advertising trackers.',
    ],
  },
  {
    title: 'Retention and your rights',
    body: [
      'Your account data is kept as long as your account exists. You can ask at any time for access to your data, its correction, or the deletion of your account and list by writing to ' + CONTACT + '. We reply within one month.',
      'Under the GDPR you may also lodge a complaint with the CNIL (www.cnil.fr).',
    ],
  },
  {
    title: 'Changes',
    body: ['This page may be updated; the date of the last update is shown at the top of the page.'],
  },
]

export default function ConfidentialitePage() {
  const { lang } = useLang()
  const en = lang === 'en'
  const sections = en ? EN : FR

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-titre)', fontSize: '30px', fontWeight: 500, marginBottom: '8px' }}>
        {en ? 'Privacy policy' : 'Politique de confidentialité'}
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--color-text-hint)', marginBottom: '32px' }}>
        {en ? `Last updated: ${UPDATED_EN}` : `Dernière mise à jour : ${UPDATED_FR}`}
      </p>
      {sections.map((s) => (
        <section key={s.title} style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '16px', color: 'var(--color-gold)', marginBottom: '10px' }}>{s.title}</h2>
          {s.body.map((p, i) => (
            <p key={i} style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '10px' }}>
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  )
}
