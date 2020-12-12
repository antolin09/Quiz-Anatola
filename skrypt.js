// naglowek pierwszej i drugiej wersji programu 
// document.getElementById("naglowek").innerHTML = "Na jakiej pozycji lubisz grać najbardziej?";

// pierwsza wersja programu
/*document.getElementById("odpowiedzi").innerHTML += '<button class="odpowiedz">Bramkarz</button>';
document.getElementById("odpowiedzi").innerHTML += '<button class="odpowiedz">Obrońca</button>';
document.getElementById("odpowiedzi").innerHTML += '<button class="odpowiedz">Pomocnik</button>';
document.getElementById("odpowiedzi").innerHTML += '<button class="odpowiedz">Napastnik</button>';*/

// druga wersja programu
/*odpowiedzi  = [
    "Bramkarz",
    "Obrońca",
    "Pomocnik",
    "Napastnik"
];
odpowiedzi.forEach(odpowiedz => {
    document.getElementById("odpowiedzi").innerHTML += `<button class="odpowiedz">${odpowiedz}</button>`;
    
});*/

pytania = [
{
    tresc: "Na jakiej pozycji lubisz grać najbardziej?",
    odpowiedzi: [
        "Bramkarz",
        "Obrońca",
        "Pomocnik",
        "Napastnik"
    ]
},
{

    tresc: "Co jest dla ciebie ważne w piłce?",
    odpowiedzi: [
        "Zabawa",
        "Zwycięstwo",
        "Być w centrum uwagi"
    ]
},
{
    tresc: "Jaka jest twoja ulubiona liga?",
    odpowiedzi: [
        "Bundesliga",
        "Premier League",
        "Ekstraklasa",
        "La Liga Santander",
        "Serie A"
      ]
   }
];
document.getElementById("naglowek").innerHTML =
    pytania[0].tresc;
pytania[0].odpowiedzi.forEach(odpowiedz =>  {
    document.getElementById("odpowiedzi").innerHTML +=
        `<button class="odpowiedz">${odpowiedz}</button>`;                                     
});
    