function stat(stats) {
  // trie dans l'ordre decroissant
  // utilisation de ...rest pour ne pas tier le tab d'origine
  const statsDec = [...stats].sort((a, b) => b.score - a.score);

  //top1 à 3, recup les trois meilleurs score. les 3 ... les reste du tab (statsDec)
  const [top1, top2, top3, ...moyenneDesAutres] = statsDec;

  // moyenne des autres
  const moyenne =
    moyenneDesAutres.reduce((sum, m) => sum + m.score, 0) /
    moyenneDesAutres.length;

  const tops = [top1, top2, top3];

  return {
    Top3: [top1, top2, top3],
    moyenneDesAutres: moyenne,
    message: `${tops
      .map((t) => t.name)
      .join(", ")} - Moyenne dea autre: ${moyenne}`,
  };
}

const stats = [
  { name: "Alice", score: 92, city: "Lyon" },
  { name: "Bob", score: 75, city: "Paris" },
  { name: "Eve", score: 88, city: "Lille" },
  { name: "Dan", score: 50, city: "Nice" },
  { name: "Cara", score: 81, city: "Bordeaux" },
];

console.log(stat(stats));
