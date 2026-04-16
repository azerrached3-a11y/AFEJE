export interface Dimension {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  afejeModule: string;
}

export interface QuestionOption {
  text: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  title: string;
  scenario: string;
  options: QuestionOption[];
}

export const dimensions: Dimension[] = [
  {
    id: "lucidite",
    label: "Lucidité cognitive",
    shortLabel: "Lucidité",
    description:
      "Ta capacité à voir au-delà des apparences, des biais et des récits séduisants.",
    afejeModule:
      "Le Module 1 (Reprogrammation mentale) t'apprend à déjouer les pièges cognitifs qui sabotent tes décisions sans que tu le saches.",
  },
  {
    id: "resilience",
    label: "Résilience dopaminergique",
    shortLabel: "Résilience",
    description:
      "Ta capacité à fonctionner, construire et décider quand le système de récompense est à zéro.",
    afejeModule:
      "Le Module 5 (Décision sous pression) entraîne ton cerveau à performer quand tout te pousse à lâcher.",
  },
  {
    id: "controle",
    label: "Contrôle des démons",
    shortLabel: "Contrôle",
    description:
      "Ta capacité à reconnaître le raccourci, le regarder en face, et choisir le chemin dur.",
    afejeModule:
      "Le Code AFEJE et le collectif construisent la discipline que personne ne peut t'installer de l'extérieur.",
  },
  {
    id: "metacognition",
    label: "Métacognition",
    shortLabel: "Métacognition",
    description:
      "Ta connaissance viscérale de ton propre fonctionnement mental — pas théorique, opérationnelle.",
    afejeModule:
      "Le Module 2 (Intelligence émotionnelle) développe ta conscience de toi-même comme outil de performance.",
  },
  {
    id: "vision",
    label: "Vision systémique",
    shortLabel: "Vision",
    description:
      "Ta capacité à voir les connexions entre les domaines, les niveaux d'analyse et les patterns cachés.",
    afejeModule:
      "Le Module 6 (Construction de projet) connecte ta pensée à la réalité du marché, du terrain et de l'exécution.",
  },
];

export const questions: Question[] = [
  {
    id: 1,
    title: "Le piège du récit",
    scenario:
      "Deux personnes te présentent leur méthode pour réussir. La première te raconte comment elle a transformé sa vie en 6 mois — émotion, détails, c'est puissant. La deuxième te montre des données froides sur 10 000 parcours analysés. Tu dois choisir une seule approche à suivre.",
    options: [
      {
        text: "Le témoignage. Si ça a marché pour elle, c'est concret.",
        scores: { lucidite: 20, resilience: 15, controle: 15, metacognition: 10, vision: 10 },
      },
      {
        text: "Les données. Un cas ne prouve rien, 10 000 commencent à parler.",
        scores: { lucidite: 80, resilience: 15, controle: 15, metacognition: 15, vision: 20 },
      },
      {
        text: "Je prends les deux et je cherche où ils se recoupent.",
        scores: { lucidite: 65, resilience: 10, controle: 10, metacognition: 70, vision: 80 },
      },
      {
        text: "Ni l'un ni l'autre — j'applique et je juge par moi-même.",
        scores: { lucidite: 50, resilience: 80, controle: 70, metacognition: 40, vision: 20 },
      },
    ],
  },
  {
    id: 2,
    title: "La belle histoire",
    scenario:
      "Un entrepreneur te pitch son projet. Tout s'enchaîne logiquement : le problème, la solution, le marché, le business model. C'est fluide, élégant, convaincant. Ton instinct dit « oui ».",
    options: [
      {
        text: "J'investis mon temps. Quand tout colle, c'est bon signe.",
        scores: { lucidite: 15, resilience: 10, controle: 15, metacognition: 10, vision: 15 },
      },
      {
        text: "Je cherche ce qui manque. Une histoire trop propre cache souvent un angle mort.",
        scores: { lucidite: 85, resilience: 20, controle: 20, metacognition: 60, vision: 60 },
      },
      {
        text: "Je demande les chiffres réels — clients payants, rétention, coût d'acquisition.",
        scores: { lucidite: 70, resilience: 15, controle: 15, metacognition: 40, vision: 40 },
      },
      {
        text: "Je fais confiance à mon instinct — il m'a rarement trompé.",
        scores: { lucidite: 25, resilience: 40, controle: 30, metacognition: 20, vision: 20 },
      },
    ],
  },
  {
    id: 3,
    title: "Le lundi du vide",
    scenario:
      "Tu bosses sur ton projet depuis 3 mois. Zéro résultat visible. Zéro feedback positif. Zéro like, zéro vente, zéro réponse. Tu te réveilles un lundi matin.",
    options: [
      {
        text: "Je continue exactement comme prévu. Les résultats viendront.",
        scores: { lucidite: 30, resilience: 80, controle: 60, metacognition: 20, vision: 15 },
      },
      {
        text: "Je pivote. 3 mois sans signal, c'est un signal en soi.",
        scores: { lucidite: 60, resilience: 40, controle: 30, metacognition: 50, vision: 55 },
      },
      {
        text: "J'appelle quelqu'un. Impossible d'évaluer seul quand t'es dedans.",
        scores: { lucidite: 50, resilience: 50, controle: 30, metacognition: 80, vision: 50 },
      },
      {
        text: "Je prends un jour off pour voir si ça décante.",
        scores: { lucidite: 35, resilience: 25, controle: 40, metacognition: 55, vision: 30 },
      },
    ],
  },
  {
    id: 4,
    title: "La comparaison",
    scenario:
      "Tout le monde autour de toi affiche des résultats. Tes potes postent des victoires. Toi, t'en es encore à poser les fondations. Personne ne voit ce que tu construis.",
    options: [
      {
        text: "Ça ne me touche pas — je sais ce que je fais et pourquoi.",
        scores: { lucidite: 40, resilience: 90, controle: 70, metacognition: 30, vision: 20 },
      },
      {
        text: "Ça me frustre mais je continue — la frustration c'est de l'énergie mal canalisée.",
        scores: { lucidite: 50, resilience: 70, controle: 50, metacognition: 70, vision: 30 },
      },
      {
        text: "Je réévalue — peut-être que je me mens à moi-même.",
        scores: { lucidite: 70, resilience: 40, controle: 30, metacognition: 80, vision: 40 },
      },
      {
        text: "J'accélère — leur succès me motive à aller plus vite.",
        scores: { lucidite: 25, resilience: 30, controle: 20, metacognition: 15, vision: 15 },
      },
    ],
  },
  {
    id: 5,
    title: "Le raccourci",
    scenario:
      "Un contact te propose un deal : un gros contrat si tu fermes les yeux sur un détail qui te met mal à l'aise. C'est 100% légal. Mais quelque chose coince.",
    options: [
      {
        text: "Je prends. Le business c'est le business. Si c'est légal, c'est clean.",
        scores: { lucidite: 15, resilience: 30, controle: 10, metacognition: 10, vision: 15 },
      },
      {
        text: "Je refuse. Mon intégrité vaut plus qu'un contrat.",
        scores: { lucidite: 40, resilience: 50, controle: 85, metacognition: 40, vision: 20 },
      },
      {
        text: "J'analyse pourquoi ça me met mal à l'aise avant de décider.",
        scores: { lucidite: 70, resilience: 30, controle: 60, metacognition: 90, vision: 50 },
      },
      {
        text: "Je négocie — je prends le contact mais je fais les choses à ma façon.",
        scores: { lucidite: 40, resilience: 40, controle: 45, metacognition: 30, vision: 40 },
      },
    ],
  },
  {
    id: 6,
    title: "L'ennemi intérieur",
    scenario:
      "Tu sais exactement ce que tu dois faire aujourd'hui. Mais ton cerveau te pousse ailleurs — scroller, procrastiner, chercher de la stimulation. Le démon est là, et il connaît tes failles.",
    options: [
      {
        text: "Je cède. Si mon cerveau résiste, c'est qu'il a besoin de pause.",
        scores: { lucidite: 20, resilience: 10, controle: 10, metacognition: 30, vision: 10 },
      },
      {
        text: "Je me force. La discipline, c'est faire ce qu'il faut quand rien ne te pousse.",
        scores: { lucidite: 30, resilience: 80, controle: 80, metacognition: 30, vision: 15 },
      },
      {
        text: "Je négocie — 30 min de focus, puis 10 min de libre. Je connais mes limites.",
        scores: { lucidite: 40, resilience: 50, controle: 60, metacognition: 80, vision: 20 },
      },
      {
        text: "Je change d'environnement. Le problème c'est le contexte, pas juste moi.",
        scores: { lucidite: 55, resilience: 40, controle: 50, metacognition: 60, vision: 45 },
      },
    ],
  },
  {
    id: 7,
    title: "Le miroir",
    scenario:
      "Après une grosse erreur, quelqu'un te dit : « T'as pris cette décision parce que t'avais peur, pas parce que c'était la bonne. » Tu sais qu'il a raison.",
    options: [
      {
        text: "Je rejette. Personne ne sait mieux que moi pourquoi j'ai fait ce que j'ai fait.",
        scores: { lucidite: 15, resilience: 30, controle: 20, metacognition: 10, vision: 10 },
      },
      {
        text: "J'accepte et je corrige. Si c'est vrai, autant le voir maintenant.",
        scores: { lucidite: 50, resilience: 40, controle: 50, metacognition: 75, vision: 30 },
      },
      {
        text: "Je creuse. Pourquoi la peur a pris le dessus à ce moment-là exactement ?",
        scores: { lucidite: 70, resilience: 30, controle: 40, metacognition: 90, vision: 50 },
      },
      {
        text: "J'avance. L'erreur est faite, analyser ne change pas le résultat.",
        scores: { lucidite: 25, resilience: 60, controle: 40, metacognition: 20, vision: 15 },
      },
    ],
  },
  {
    id: 8,
    title: "Le pattern",
    scenario:
      "Tu réalises que tes 3 derniers échecs ont un point commun : à chaque fois, tu as pris la décision sous émotion forte. Colère, excitation, peur — le résultat est toujours le même.",
    options: [
      {
        text: "Coïncidence. Les contextes étaient complètement différents.",
        scores: { lucidite: 15, resilience: 20, controle: 15, metacognition: 10, vision: 10 },
      },
      {
        text: "J'installe une règle : plus de décision importante dans les 24h après une émotion forte.",
        scores: { lucidite: 50, resilience: 50, controle: 70, metacognition: 80, vision: 40 },
      },
      {
        text: "Je creuse plus loin : quel type d'émotion, quel déclencheur, quel biais cognitif exactement.",
        scores: { lucidite: 80, resilience: 30, controle: 40, metacognition: 95, vision: 70 },
      },
      {
        text: "J'en prends note mais les émotions font partie du jeu. Impossible de les supprimer.",
        scores: { lucidite: 35, resilience: 40, controle: 30, metacognition: 45, vision: 25 },
      },
    ],
  },
  {
    id: 9,
    title: "Le puzzle",
    scenario:
      "Tu lis un article sur l'effondrement d'une startup tech. En même temps, tu penses à un blocage dans ton propre projet. Les deux n'ont aucun rapport apparent.",
    options: [
      {
        text: "Je finis l'article et je reviens à mon problème. Deux sujets différents.",
        scores: { lucidite: 20, resilience: 15, controle: 15, metacognition: 20, vision: 10 },
      },
      {
        text: "Je cherche la connexion — les patterns se répètent entre domaines.",
        scores: { lucidite: 60, resilience: 20, controle: 15, metacognition: 50, vision: 90 },
      },
      {
        text: "J'extrais le principe derrière leur échec et je le teste sur ma situation.",
        scores: { lucidite: 70, resilience: 30, controle: 20, metacognition: 60, vision: 85 },
      },
      {
        text: "Je note l'idée pour plus tard et je me concentre sur l'urgent.",
        scores: { lucidite: 30, resilience: 50, controle: 40, metacognition: 30, vision: 25 },
      },
    ],
  },
  {
    id: 10,
    title: "Le tout",
    scenario:
      "On te demande de pitcher ta vision en une phrase. Tu sais que la réponse qui tue connecte ton projet, ton marché, ton histoire personnelle et l'impact sur le monde. Mais c'est une seule phrase.",
    options: [
      {
        text: "Je commence par le produit — c'est le plus concret.",
        scores: { lucidite: 25, resilience: 25, controle: 20, metacognition: 20, vision: 20 },
      },
      {
        text: "Je commence par le problème — c'est ce qui résonne avec les gens.",
        scores: { lucidite: 50, resilience: 30, controle: 25, metacognition: 40, vision: 50 },
      },
      {
        text: "Je commence par mon histoire — c'est non copiable.",
        scores: { lucidite: 40, resilience: 45, controle: 35, metacognition: 55, vision: 60 },
      },
      {
        text: "Je connecte les quatre en une phrase — chaque mot porte plusieurs niveaux.",
        scores: { lucidite: 60, resilience: 35, controle: 30, metacognition: 70, vision: 95 },
      },
    ],
  },
];

export function getScoreLevel(score: number): { label: string; color: string } {
  if (score >= 80) return { label: "Affûté", color: "#00FFFF" };
  if (score >= 60) return { label: "Solide", color: "#00FFCC" };
  if (score >= 40) return { label: "En éveil", color: "#FFAA00" };
  return { label: "En construction", color: "#FF5555" };
}

export function computeScores(answers: number[]): Record<string, number> {
  const totals: Record<string, number> = {};
  const maxTotals: Record<string, number> = {};
  dimensions.forEach((d) => {
    totals[d.id] = 0;
    maxTotals[d.id] = 0;
  });

  questions.forEach((q, questionIndex) => {
    const optionIndex = answers[questionIndex];
    // Accumulate max possible per dimension
    dimensions.forEach((d) => {
      const best = Math.max(...q.options.map((o) => o.scores[d.id] || 0));
      maxTotals[d.id] += best;
    });
    // Accumulate user's score
    if (optionIndex >= 0) {
      const scores = q.options[optionIndex].scores;
      Object.entries(scores).forEach(([dim, val]) => {
        totals[dim] += val;
      });
    }
  });

  const result: Record<string, number> = {};
  dimensions.forEach((d) => {
    const raw = maxTotals[d.id] > 0 ? totals[d.id] / maxTotals[d.id] : 0;
    // Apply a gentle curve: sqrt pushes mid-range scores higher
    result[d.id] = Math.round(Math.sqrt(raw) * 100);
  });

  return result;
}

export function getOverallScore(scores: Record<string, number>): number {
  const values = Object.values(scores);
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

export function getProfileName(overall: number): string {
  if (overall >= 85) return "Architecte cognitif";
  if (overall >= 70) return "Stratège en éveil";
  if (overall >= 55) return "Bâtisseur brut";
  return "Potentiel dormant";
}

export function getProfileDescription(overall: number): string {
  if (overall >= 85)
    return "Tu vois les systèmes. Tu connais tes biais. Tu contrôles tes impulsions. Tu es rare — et tu le sais. La question n'est pas si tu vas réussir, mais à quelle échelle.";
  if (overall >= 70)
    return "Les fondations sont là. Tu as de la lucidité, du contrôle, de la vision. Mais il y a des angles morts que tu ne vois pas encore — et c'est exactement là que le programme AFEJE change la donne.";
  if (overall >= 55)
    return "Tu as le feu. L'énergie est là, l'ambition aussi. Mais ton cerveau te piège encore sur certains réflexes. Le programme AFEJE est conçu pour des profils comme le tien — du potentiel brut qui a besoin de structure.";
  return "Tout est encore possible — mais il faut commencer par le cerveau. Le programme AFEJE existe pour ça : transformer le potentiel en puissance. 12 mois pour recâbler ta façon de penser.";
}
