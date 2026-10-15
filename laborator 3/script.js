// ===== Exercițiul 1 — Funcție de calcul =====
function calculateSum(a, b) {
  return a + b;
}

console.log("--- Exercițiul 1 ---");
console.log("5 + 3 =", calculateSum(5, 3));
console.log("10 + 22 =", calculateSum(10, 22));

// ===== Exercițiul 2 — Obiect cu metodă =====
const student = {
  name: "Maria",
  age: 17,
  grade: 9,
  introduce() {
    console.log(`Sunt ${this.name} și am ${this.age} ani.`);
  }
};

console.log("--- Exercițiul 2 ---");
student.introduce();
student.grade = 10;
console.log("Nota nouă:", student.grade);

// ===== Exercițiul 3 — Joc Piatra, Hârtia, Foarfeca =====
const OPTIUNI = ["piatra", "hartia", "foarfeca"];
const ETICHETE = { piatra: "Piatra", hartia: "Hârtia", foarfeca: "Foarfeca" };
const VICTORII_PENTRU_FINAL = 5;

// Obiectul care păstrează scorul jocului
const gameScore = {
  player: 0,
  computer: 0,
  draws: 0,
  rounds: 0,

  // Metoda obiectului: afișează scorul curent într-un alert
  displayScore() {
    let mesaj = `Scor: Tu ${this.player} - Calculator ${this.computer}\n`;
    mesaj += `Egalități: ${this.draws}\nRunde jucate: ${this.rounds}\n`;

    if (this.player > this.computer) {
      mesaj += "Tu conduci!";
    } else if (this.computer > this.player) {
      mesaj += "Calculatorul conduce!";
    } else {
      mesaj += "Scorul este egal!";
    }
    alert(mesaj);
  },

  reset() {
    this.player = 0;
    this.computer = 0;
    this.draws = 0;
    this.rounds = 0;
  }
};

// Elementele paginii
const butoane = document.querySelectorAll(".btn-alegere");
const elAlegereJucator = document.getElementById("alegere-jucator");
const elAlegereCalculator = document.getElementById("alegere-calculator");
const elRezultat = document.getElementById("rezultat");
const elScor = document.getElementById("scor");
const elRunde = document.getElementById("runde");
const elFinal = document.getElementById("final");
const butonJocNou = document.getElementById("joc-nou");

let jocTerminat = false;

// Calculatorul alege aleatoriu una dintre cele trei variante
function alegeCalculatorul() {
  return OPTIUNI[Math.floor(Math.random() * OPTIUNI.length)];
}

// Stabilește câștigătorul: "player", "computer" sau "draw"
function determineWinner(jucator, calculator) {
  if (jucator === calculator) {
    return "draw";
  }
  const bate = { piatra: "foarfeca", foarfeca: "hartia", hartia: "piatra" };
  return bate[jucator] === calculator ? "player" : "computer";
}

// Verifică dacă unul dintre jucători a ajuns la numărul de victorii necesar
function verificaCastigatorFinal() {
  if (gameScore.player === VICTORII_PENTRU_FINAL) {
    elFinal.textContent = "Ai câștigat jocul!";
    return true;
  }
  if (gameScore.computer === VICTORII_PENTRU_FINAL) {
    elFinal.textContent = "Calculatorul a câștigat jocul!";
    return true;
  }
  return false;
}

// Desfășoară o rundă, când utilizatorul apasă un buton
function playRound(alegereJucator) {
  if (jocTerminat) return;

  const alegereCalc = alegeCalculatorul();
  const castigator = determineWinner(alegereJucator, alegereCalc);

  let mesaj;
  if (castigator === "player") {
    gameScore.player++;
    mesaj = "Ai câștigat!";
  } else if (castigator === "computer") {
    gameScore.computer++;
    mesaj = "Calculatorul a câștigat!";
  } else {
    gameScore.draws++;
    mesaj = "Egalitate!";
  }
  gameScore.rounds++;

  // Actualizăm pagina
  elAlegereJucator.textContent = `Alegerea ta: ${ETICHETE[alegereJucator]}`;
  elAlegereCalculator.textContent = `Alegerea calculatorului: ${ETICHETE[alegereCalc]}`;
  elRezultat.textContent = mesaj;
  elScor.textContent = `Scor: Tu ${gameScore.player} - Calculator ${gameScore.computer} (egalități: ${gameScore.draws})`;
  elRunde.textContent = `Runde jucate: ${gameScore.rounds}`;

  console.log(`Runda ${gameScore.rounds}: ${alegereJucator} vs ${alegereCalc} -> ${mesaj}`);

  // Verificăm dacă jocul s-a terminat
  if (verificaCastigatorFinal()) {
    jocTerminat = true;
    butoane.forEach(b => b.disabled = true);
  }

  // Metoda obiectului, apelată după fiecare rundă
  gameScore.displayScore();
}

// Joc nou: resetează scorul și pagina
function jocNou() {
  gameScore.reset();
  jocTerminat = false;
  butoane.forEach(b => b.disabled = false);
  elAlegereJucator.textContent = "Alegerea ta: -";
  elAlegereCalculator.textContent = "Alegerea calculatorului: -";
  elRezultat.textContent = "";
  elFinal.textContent = "";
  elScor.textContent = "Scor: Tu 0 - Calculator 0 (egalități: 0)";
  elRunde.textContent = "Runde jucate: 0";
}

// Legăm butoanele de funcționalitate
butoane.forEach(buton => {
  buton.addEventListener("click", () => playRound(buton.dataset.alegere));
});

butonJocNou.addEventListener("click", jocNou);
