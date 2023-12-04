// Creazione di un array per la rappresentazione dei membri del team
let user = [
    {name: "Wayne Barnett", role: "Founder & CEO", image: "img/wayne-barnett-founder-ceo.jpg"},

    {name: "Angela Caroll", role: "Chief Editor", image: "img/angela-caroll-chief-editor.jpg"},

    {name: "Walter Gordon", role: "Office Manager", image: "img/walter-gordon-office-manager.jpg"},

    {name: "Angela Lopez", role: "Social Media Manager", image: "img/angela-lopez-social-media-manager.jpg"},

    {name: "Scott Estrada", role: "Developer", image: "img/scott-estrada-developer.jpg"},

    {name: "Barbara Ramos", role: "Graphic Designer", image: "img/barbara-ramos-graphic-designer.jpg"}
];

console.log(user);

// Stampa delle informazioni dei membri del team in console e in DOM
for(let i = 0; i < user.length; i++){
    for(let key in user[i]){
        document.getElementById('user').innerHTML += `<li class="list-group-item">${user[i][key]}</li>`;
        console.log(user[i][key]);
    }
}