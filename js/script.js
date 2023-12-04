// Creazione di un array per la rappresentazione dei membri del team
let team = [
    {name: "Wayne Barnett", role: "Founder & CEO", image: "img/wayne-barnett-founder-ceo.jpg"},

    {name: "Angela Caroll", role: "Chief Editor", image: "img/angela-caroll-chief-editor.jpg"},

    {name: "Walter Gordon", role: "Office Manager", image: "img/walter-gordon-office-manager.jpg"},

    {name: "Angela Lopez", role: "Social Media Manager", image: "img/angela-lopez-social-media-manager.jpg"},

    {name: "Scott Estrada", role: "Developer", image: "img/scott-estrada-developer.jpg"},

    {name: "Barbara Ramos", role: "Graphic Designer", image: "img/barbara-ramos-graphic-designer.jpg"}
];

console.log(team);

// Stampa delle informazioni dei membri del team in console e in DOM
for(let i = 0; i < team.length; i++){
    for(let key in team[i]){
        // document.getElementById('user-card').innerHTML += `<div>${team[i][key]}</div>`;
        console.log(team[i][key]);
    }
}

// BONUS 1-2: Organizzare i singoli membri in card
let user_card = document.getElementById('user-card');

for(let i = 0; i < team.length; i++){
    let div = document.createElement('div');
    div.classList.add('col-4');

    let card = document.createElement('div');
    card.classList.add('card');

    let employee = `<img src="${team[i].image}" alt="${team[i].name}">
                    <h4>${team[i].name}</h4>
                    <h6>${team[i].role}</h6>`;

    card.innerHTML = employee;

    div.appendChild(card);

    user_card.appendChild(div);

}