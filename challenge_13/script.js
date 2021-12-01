'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//EXO1

const players1 = game.players[0];
const players2 = game.players[1];

const gk = players1[0];
console.log("gardien :", gk);

const fieldPlayers = players1.slice(1);
console.log("autres joueurs :", fieldPlayers);

const allPlayers = [ ...game.players[0], ...game.players[1]];
console.log("all players :", allPlayers);

const players1Final = [...players1,'Thiago','Coutinho', 'Perisic'];
console.log("players1Final :", players1Final);

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
console.log(team2);

// printGoals A FAIRE

function winner() {
if (game.odds.team1 < game.odds.team2) {
  console.log(
    `L'équipe ayant le plus de chance de gagner est l'équipe ${game.team1}.`
  );
} else if (game.odds.team1 > game.odds.team2) {
  console.log(
    `L'équipe ayant le plus de chance de gagner est l'équipe ${game.team2}.`
  );
} else {
  console.log(
    `Egalité entre l'équipe ${game.team1} et l'équipe ${game.team2}.`
  );
}}

winner();

//EXO2

  let but = 0;
  for (let i = 0; i < game.scored.length; i++) {
    but ++;
    console.log(`But ${but} : ${game.scored[i]}`);
  }

  let odds = Object.values(game.odds);
  console.log(odds);

  for (let i = 0; i < odds.length; i++) {
    let averageOdds = odds.reduce((acc, curr) => acc + curr) / odds.length;
    console.log(averageOdds);
  }

console.log(`Probalité de victoire pour ${game.team1} : ${odds[0]}`);
console.log(`Probalité d'égalité : ${odds[1]}`);
console.log(`Probalité de victoire pour ${game.team2} : ${odds[2]}`);

let scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}

//EX03

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

// delete gameEvents[4];
// console.log(gameEvents);

let eventsAverage = 92 / gameEvents.length;
console.log(`Un évènement est apparu en moyenne toutes les ${eventsAverage.toFixed()} minutes.`);

for (let i = 0; i < gameEvents.length; i++) {
  if (gameEvents[i][0] <= 45) {
      console.log(`[PREMIÈRE MOITIÉ]${gameEvents[i]}`);
  }
  else {
      console.log(`[DEUXIÈME MOITIÉ]${gameEvents[i]}`);
  }
}