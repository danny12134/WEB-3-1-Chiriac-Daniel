// ===== Exercițiul 1 — Creează prima listă =====
let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("--- Exercițiul 1 ---");
console.log("Lista:", fructe);
console.log("Primul element:", fructe[0]);
console.log("Ultimul element:", fructe[fructe.length - 1]);
console.log("Număr de elemente:", fructe.length);

// ===== Exercițiul 2 — Adaugă și elimină =====
let orase = ["Chișinău", "Bălți", "Cahul"];

orase.push("Orhei");      // la sfârșit
orase.unshift("Soroca");  // la început
orase.pop();              // elimină ultimul (Orhei)
orase.shift();            // elimină primul (Soroca)

console.log("--- Exercițiul 2 ---");
console.log("Lista finală de orașe:", orase);

// ===== Exercițiul 3 și 4 — Lista de cumpărături =====
let produse = ["Pâine", "Lapte", "Ouă"];

const inputProdus = document.getElementById("input-produs");
const listaProduse = document.getElementById("lista-produse");
const mesajProduse = document.getElementById("mesaj-produse");

// Afișează lista de produse pe pagină
function afiseazaProduse() {
  listaProduse.innerHTML = "";

  if (produse.length === 0) {
    mesajProduse.textContent = "Lista este goală!";
    mesajProduse.classList.remove("eroare");
    return;
  }

  produse.forEach(produs => {
    const li = document.createElement("li");
    li.textContent = produs;
    listaProduse.appendChild(li);
  });

  mesajProduse.textContent = "Produse: " + produse.join(", ");
  mesajProduse.classList.remove("eroare");
}

// Citește produsul introdus; returnează null dacă e gol
function citesteProdus() {
  const valoare = inputProdus.value.trim();
  if (valoare === "") {
    mesajProduse.textContent = "Introdu un produs!";
    mesajProduse.classList.add("eroare");
    return null;
  }
  inputProdus.value = "";
  return valoare;
}

function adaugaLaSfarsit() {
  const produs = citesteProdus();
  if (produs === null) return;
  produse.push(produs);
  afiseazaProduse();
}

function adaugaLaInceput() {
  const produs = citesteProdus();
  if (produs === null) return;
  produse.unshift(produs);
  afiseazaProduse();
}

function stergePrimul() {
  if (produse.length === 0) {
    mesajProduse.textContent = "Lista este goală!";
    return;
  }
  produse.shift();
  afiseazaProduse();
}

function stergeUltimul() {
  if (produse.length === 0) {
    mesajProduse.textContent = "Lista este goală!";
    return;
  }
  produse.pop();
  afiseazaProduse();
}

document.getElementById("btn-adauga-sfarsit").addEventListener("click", adaugaLaSfarsit);
document.getElementById("btn-adauga-inceput").addEventListener("click", adaugaLaInceput);
document.getElementById("btn-sterge-primul").addEventListener("click", stergePrimul);
document.getElementById("btn-sterge-ultimul").addEventListener("click", stergeUltimul);

// ===== Exercițiul 5 — Catalog electronic al elevilor =====
let elevi = [
  { nume: "Popescu Ana", varsta: 17, nota: 9 },
  { nume: "Rusu Mihai", varsta: 18, nota: 8 },
  { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

const catalog = document.getElementById("catalog");
const numarElevi = document.getElementById("numar-elevi");

// 1. Afișarea catalogului (forEach)
function afiseazaElevi() {
  catalog.innerHTML = "";

  elevi.forEach((elev, index) => {
    const div = document.createElement("div");
    div.className = "elev";
    div.innerHTML = `
      <p><strong>${index + 1}. ${elev.nume}</strong></p>
      <p>Vârsta: ${elev.varsta}</p>
      <p>Nota: ${elev.nota}</p>
    `;
    catalog.appendChild(div);
  });

  // 5. Numărul de elevi (length)
  numarElevi.textContent = elevi.length;
}

// 2. Adăugarea unui elev (push)
function adaugaElev() {
  const nume = document.getElementById("input-nume").value.trim();
  const varsta = Number(document.getElementById("input-varsta").value);
  const nota = Number(document.getElementById("input-nota").value);
  const mesaj = document.getElementById("mesaj-adaugare");

  if (nume === "" || varsta <= 0 || nota < 1 || nota > 10) {
    mesaj.textContent = "Completează corect toate câmpurile (nota între 1 și 10)!";
    mesaj.classList.add("eroare");
    return;
  }

  const elevNou = {
    nume: nume,
    varsta: varsta,
    nota: nota
  };

  elevi.push(elevNou);

  document.getElementById("input-nume").value = "";
  document.getElementById("input-varsta").value = "";
  document.getElementById("input-nota").value = "";

  mesaj.textContent = `Elevul ${nume} a fost adăugat.`;
  mesaj.classList.remove("eroare");
  afiseazaElevi();
}

// 3. Ștergerea unui elev (splice)
function stergeElev() {
  const nume = document.getElementById("input-sterge").value.trim().toLowerCase();
  const mesaj = document.getElementById("mesaj-stergere");

  const index = elevi.findIndex(elev => elev.nume.toLowerCase() === nume);

  if (nume === "" || index === -1) {
    mesaj.textContent = "Elevul nu a fost găsit!";
    mesaj.classList.add("eroare");
    return;
  }

  const sters = elevi[index].nume;
  elevi.splice(index, 1);

  document.getElementById("input-sterge").value = "";
  mesaj.textContent = `Elevul ${sters} a fost șters.`;
  mesaj.classList.remove("eroare");
  afiseazaElevi();
}

// 4. Căutarea unui elev (find)
function cautaElev() {
  const nume = document.getElementById("input-cauta").value.trim().toLowerCase();
  const mesaj = document.getElementById("mesaj-cautare");

  const elevGasit = elevi.find(elev => elev.nume.toLowerCase() === nume);

  if (elevGasit) {
    mesaj.innerHTML = `Elev găsit!<br>Nume: ${elevGasit.nume}<br>Vârsta: ${elevGasit.varsta}<br>Nota: ${elevGasit.nota}`;
    mesaj.classList.remove("eroare");
  } else {
    mesaj.textContent = "Elevul nu a fost găsit!";
    mesaj.classList.add("eroare");
  }
}

document.getElementById("btn-adauga-elev").addEventListener("click", adaugaElev);
document.getElementById("btn-sterge-elev").addEventListener("click", stergeElev);
document.getElementById("btn-cauta-elev").addEventListener("click", cautaElev);

// Afișăm catalogul la încărcarea paginii
afiseazaElevi();
afiseazaProduse();
