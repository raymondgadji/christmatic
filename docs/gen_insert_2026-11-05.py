# Génère docs/insert_films_2026-11-05.sql (22 films de la playlist, 05/11/2026).
# Synopsis FR + EN (choix de Raymond) tiré UNIQUEMENT des textes YouTube ; sans texte -> NULL (description automatique bilingue).
# Usage : python docs/gen_insert_2026-11-05.py
import io, os

# (titre, slug, desc FR, desc EN, pays, langue, youtube_id, published_at)
F = [
 ("Church Brothers Are Fine But… (The Winlos)", "church-brothers-are-fine-but",
  "Une comédie chrétienne nigériane : être un bon chrétien ne veut pas dire oublier d'être romantique. On peut être pieux, respectueux et sincère tout en sachant exprimer son affection.",
  "A Nigerian Christian comedy skit: being a good Christian doesn't mean you have to forget how to be romantic. You can be godly, respectful and intentional while still knowing how to express affection.",
  "Nigeria", "en", "m_l1fdVC-0g", "2026-11-02T06:19:49-08:00"),
 ("NUEL — Beyond the Silence (GoodnewsTV)", "nuel-beyond-the-silence",
  "Que se passe-t-il quand la douleur éloigne de Dieu et que l'intelligence artificielle se met à offrir les réponses que la foi apportait ? Un film chrétien nigérian émouvant sur le deuil, l'abandon, la confiance mal placée dans la technologie, les combats spirituels, le pardon et le retour vers Dieu.",
  "What happens when pain pushes a person away from God, and artificial intelligence begins to offer the answers that faith once provided? An emotional Nigerian Christian movie that explores grief, abandonment, the dangers of misplaced trust in technology, spiritual struggles, forgiveness, and the journey back to God.",
  "Nigeria", "en", "mkZX96v4kpg", "2026-11-01T10:00:09-08:00"),
 ("Lost and Bound (The Only Laurel / The Winlos)", "lost-and-bound", None, None,
  "Nigeria", "en", "0n9kqUAQ_EM", "2026-11-01T09:00:15-08:00"),
 ("The Years I Gave — Part 2 (Ese Talks Studio)", "the-years-i-gave-part-2",
  "Neuf ans d'amour. D'innombrables sacrifices. Un avenir qu'ils s'étaient toujours promis. Sandra est restée aux côtés de Joseph quand il avait peu, a sacrifié ses propres rêves pour l'aider à poursuivre les siens, et croyait qu'un jour leur amour mènerait au mariage. Mais des années plus tard, l'homme avec qui elle avait bâti un avenir est revenu avec des attentes qu'elle n'aurait jamais imaginé devoir affronter. Deuxième partie.",
  "Nine years of love. Countless sacrifices. A future they had always promised each other. Sandra stood by Joseph when he had little, sacrificed her own dreams to help him pursue his, and believed that one day their love would lead to marriage. But years later, the man she helped build a future with returned with expectations she never imagined she would have to face. Part two.",
  "Nigeria", "en", "zK_1lVXHsIw", "2026-11-01T08:00:15-08:00"),
 ("Rebuild — New Wine Season 2 (Mount Zion)", "rebuild-new-wine-season-2", None, None,
  "Nigeria", "en", "cIxrbwlRHqM", "2026-11-01T03:00:08-08:00"),
 ("Un Passé qui nous hante 2 (Jésus Côte d'Ivoire)", "un-passe-qui-nous-hante-2", None, None,
  "Côte d'Ivoire", "fr", "b8ZIbZNZT-o", "2026-11-01T00:32:19-07:00"),
 ("The Walking Stick 2 (My Bishop TV)", "the-walking-stick-2",
  "Une famille. Un héritage. Un secret mortel. Dans une quête désespérée pour hériter de tout ce qui appartient à un homme, quelqu'un franchit une ligne dangereuse et élimine en secret des membres de sa propre famille. Mais tout mal a une conséquence, et la vérité finit par éclater.",
  "One family. One inheritance. One deadly secret. In a desperate quest to inherit everything belonging to a man, someone crosses a dangerous line and secretly begins eliminating members of his own family. But every evil has a consequence, and eventually the truth must come to light.",
  "Nigeria", "en", "aT7otTuXjls", "2026-10-31T16:00:07-07:00"),
 ("For This Cause (Mount Zion)", "for-this-cause",
  "Trois jeunes volontaires du service national. Une année de service. Trois chemins différents. Mais iront-ils tous au bout de leur appel ? Ewaoluwa est déterminée à servir Dieu. Chris entre dans une mission divine. Adams est prêt à profiter pleinement de son année de service.",
  "Three young corps members. One year of national service. Three different paths. But will they all fulfil the purpose of their calling? Ewaoluwa is determined to serve God. Chris is stepping into a divine assignment. Adams is ready to enjoy his NYSC year to the fullest.",
  "Nigeria", "en", "q7fLdWe5xy0", "2026-10-31T10:28:01-07:00"),
 ("When God Whispers (Aduragbemi Bankole Productions)", "when-god-whispers",
  "Que se passe-t-il quand Dieu vous conduit dans une direction à laquelle personne ne croit ? Quand l'attente est longue, les épreuves réelles et que tout semble à l'arrêt ? Un film chrétien nigérian sur la foi, l'obéissance, la persévérance, l'unité, la prière et la confiance dans le temps parfait de Dieu.",
  "What happens when God leads you in a direction nobody believes in? What happens when the waiting is long, the struggles are real, and everything seems to be standing still? A Nigerian Christian movie about faith, obedience, endurance, unity, prayer and trusting God's perfect timing.",
  "Nigeria", "en", "IhQGrjOdT2s", "2026-10-31T10:00:10-07:00"),
 ("The Waiting Season (HOVAM TV)", "the-waiting-season",
  "Combien de temps peut-on attendre Dieu avant que le désespoir ne commence à nous changer ? Après six ans de mariage sans enfant, Winifred et Thompson traversent une saison d'attente douloureuse. Entre la pression de la famille, les paroles blessantes, les prières sans réponse et le désir désespéré d'avoir un enfant.",
  "How long can you wait on God before desperation begins to change you? After six years of marriage without a child, Winifred and Thompson find themselves facing a painful season of waiting. Between family pressure, hurtful words, unanswered prayers, and the desperate desire for a child.",
  "Nigeria", "en", "Z4L-FQ2kCRE", "2026-10-30T10:00:10-07:00"),
 ("Jeunes de Lumière (Les chretiens4.0)", "jeunes-de-lumiere",
  "Ils sont jeunes, chrétiens et engagés dans l'Église. Mais derrière les apparences se cachent parfois des comportements bien éloignés de leur foi. Entre tentations, désobéissance, mauvaises fréquentations et compromis, Jeunes de Lumière nous plonge dans les réalités de la jeunesse chrétienne.",
  "They are young, Christian and involved in the church. But behind appearances, behaviors far from their faith sometimes hide. Between temptations, disobedience, bad company and compromise, Jeunes de Lumière plunges us into the realities of Christian youth.",
  "Côte d'Ivoire", "fr", "fVXWhj13vNQ", "2026-10-29T11:00:15-07:00"),
 ("The Wasted Evangelist (Calvary Movies TV)", "the-wasted-evangelist",
  "Que se passe-t-il quand un pasteur a trop faim pour entendre Dieu clairement ? Quand Lagos ouvre une porte qui ressemble à une percée… mais sent le danger ? Quand l'autel qui vous offre le pouvoir est le même qui attend de vous détruire ?",
  "What happens when a pastor becomes too hungry to hear God clearly? What happens when Lagos opens a door that looks like breakthrough… but smells like danger? What happens when the altar offering you power is the same altar waiting to destroy you?",
  "Nigeria", "en", "_IbjZW3cIWg", "2026-10-26T11:02:31-07:00"),
 ("Labels (Mount Zion)", "labels", None, None,
  "Nigeria", "en", "NLu_khJyva8", "2026-10-25T04:00:09-07:00"),
 ("Man of the House (The Winlos)", "man-of-the-house",
  "Un ami peut-il détruire un mariage avec de mauvais conseils ? Un homme découvre la mentalité destructrice de son ami, pour qui une femme ne devrait jamais réussir mieux que son mari. Il choisit l'honnêteté plutôt que le secret : il raconte tout à sa femme et, ensemble, ils confrontent l'ami.",
  "Can a friend destroy a marriage with toxic advice? A man whose friend believes that a woman should never succeed or rise above her husband discovers the destructive mindset behind his friend's advice. He chooses honesty over secrecy: he tells his wife everything, and together they confront the friend.",
  "Nigeria", "en", "I_AQ7vm3sC4", "2026-10-24T10:15:29-07:00"),
 ("Marié par Prophétie — Épisode 17 (7SELAH)", "marie-par-prophetie-ep17",
  "Peut-on tomber amoureux de son propre mari ? Parfois, ce que l'on cherche depuis longtemps se trouve juste devant nos yeux… Dans cet épisode 17, entre amour, mariage, foi et choix du cœur, une question demeure : est-il possible de recommencer une histoire que l'on croyait déjà écrite ?",
  "Can you fall in love with your own husband? Sometimes, what we have been looking for a long time is right in front of our eyes… In episode 17, between love, marriage, faith and choices of the heart, one question remains: is it possible to start over a story we thought was already written?",
  "Cameroun", "fr", "2UpLkeAHahg", "2026-10-23T09:45:21-07:00"),
 ("Desperate Bride (Ascension Studios)", "desperate-bride",
  "Comment savoir si Dieu parle vraiment ou si le désespoir trouble le jugement ? Dans ce sketch chrétien hilarant mais qui donne à réfléchir, une jeune femme affirme que Dieu lui a révélé plusieurs hommes de l'église comme futur mari. Mais sa dernière révélation va plus loin : l'homme est déjà marié et père de famille !",
  "How do you know if God is truly speaking or if desperation is clouding your judgment? In this hilarious but thought-provoking Christian skit, a lady repeatedly claims God has revealed different men in church as her future husband. But her latest revelation takes things to another level when she discovers that the man is already married with children!",
  "Nigeria", "en", "7eh2GBDtIVY", "2026-10-23T09:05:50-07:00"),
 ("Apostasy (TREMi Films)", "apostasy",
  "Quand la foi s'efface, que reste-t-il ? Un film chrétien de TREMi Films qui nous invite à examiner notre foi, nos choix et notre relation avec Dieu.",
  "When faith fades, what remains? A compelling Christian movie by TREMi Films that challenges us to examine our faith, choices, and relationship with God.",
  "Nigeria", "en", "nEyPiR1jvrE", "2026-10-18T13:00:10-07:00"),
 ("Wishlist (Mount Zion)", "wishlist", None, None,
  "Nigeria", "en", "ZCmfS93uw9c", "2026-10-18T10:30:11-07:00"),
 ("Holy and Broke (Ascension Studios)", "holy-and-broke",
  "Un homme de foi autoproclamé qui prie toujours, est toujours fauché et toujours prêt à transformer son irresponsabilité financière en discussion sur la soumission ! Quand sa copine remet en question sa décision d'emprunter de l'argent pour semer une graine auprès de son père spirituel.",
  "A self-proclaimed man of faith who is always praying, always broke, and always ready to turn his financial irresponsibility into a conversation about submission! When his girlfriend questions his decision to borrow money to sow a seed to his spiritual father.",
  "Nigeria", "en", "R3v3KxbLwLU", "2026-10-16T10:06:56-07:00"),
 ("The Price of His Words (Ese Talks Studio)", "the-price-of-his-words",
  "Eric avait promis de rester aux côtés de sa femme Amanda à chaque étape de sa grossesse. Mais quand la réalité de la grossesse est devenue pesante, sa patience s'est usée et ses paroles sont devenues des armes qui ont blessé la femme qu'il aimait le plus.",
  "Eric promised to stand by his wife, Amanda, through every stage of pregnancy. But when the reality of pregnancy became overwhelming, his patience wore thin, and his words became weapons that wounded the woman he loved most.",
  "Nigeria", "en", "fmZb335B68U", "2026-10-11T10:00:06-07:00"),
 ("Slaughter's Clinic (GACEM Films)", "slaughters-clinic",
  "Quand la guérison devient une condamnation à mort. Que se passe-t-il quand l'endroit où l'on cherche la guérison devient un lieu de danger ? Un film chrétien nigérian captivant, de délivrance prophétique, sur le combat spirituel et la puissance de la prière.",
  "When healing becomes a death sentence. What happens when the place you trust for healing becomes a place of danger? A gripping Nigerian Christian movie and prophetic deliverance film that explores spiritual warfare and the power of prayer.",
  "Nigeria", "en", "oKXfxp7NmRQ", "2026-10-09T11:00:10-07:00"),
 ("Marry Your Kind (Ascension Studios)", "marry-your-kind",
  "Que se passe-t-il quand un homme qui vient de donner sa vie au Christ décide d'épouser l'une des sœurs les plus engagées de l'église ? Mama Ascension n'est PAS d'accord ! Une comédie chrétienne nigériane hilarante.",
  "What happens when a guy who just gave his life to Christ suddenly decides he wants to marry one of the most committed sisters in church? Mama Ascension is NOT having it! A hilarious Nigerian Christian comedy.",
  "Nigeria", "en", "kd5i4C_VTGs", "2026-10-09T09:10:39-07:00"),
]

def q(s):
    return "NULL" if s is None else "'" + s.replace("'", "''") + "'"

rows = []
for titre, slug, fr, en, pays, langue, yid, pub in F:
    desc = None if fr is None else fr + " / " + en
    rows.append("(%s, %s, %s, 2026, %s, %s, %s, %s, %s, true, false)" % (
        q(titre), q(slug), q(desc), q(pays), q(langue), q(yid),
        q("https://img.youtube.com/vi/%s/hqdefault.jpg" % yid), q(pub)))

sql = ("-- 05/11/2026 : 22 nouveaux films de la playlist (145 vidéos), ajoutés par Raymond depuis le 26/10.\n"
       "-- Les 7 films plus anciens (After Amen, Fearless, The Game, Four Days Late, The God Who Speaks, Hope Against Hope, The Corridor) ne sont PAS ajoutés (choix de Raymond).\n"
       "-- Synopsis FR + EN tiré des seuls textes YouTube ; NULL quand YouTube n'en donne pas (description automatique bilingue).\n"
       "-- Généré par docs/gen_insert_2026-11-05.py\n\n"
       "INSERT INTO films (titre, slug, description, annee, pays, langue, youtube_id, thumbnail_url, published_at, is_published, is_featured) VALUES\n"
       + ",\n".join(rows) + ";\n")

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), "insert_films_2026-11-05.sql")
with io.open(out, "w", encoding="utf-8", newline="\n") as f:
    f.write(sql)
print(len(F), "films ->", out, len(sql), "caractères")
