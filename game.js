const data = localStorage.getItem('players')
let palabra = ""
let players = []
let index = -1
let pass_button = document.getElementById('pass')

if (data) {
    players = JSON.parse(data);
}


fetch("sustantivos.json")
  .then(res => res.json())
  .then(lista => {
    palabra = lista[Math.floor(Math.random() * lista.length)];
  });

console.log(players)
let impostor = Math.floor(Math.random() * (players.length))
console.log(impostor)

let card = document.getElementById('card');
change()

function change()
{
    pass_button.style.opacity = 0
    pointerEvents = 'none';
    card.classList.remove('show');
    index += 1
    const player_name = document.getElementById('player_name')
    player_name.textContent = players[index]
    if (index == players.length)
    {
        back()
    }

    
}

function show(){
    pass_button.style.opacity = 1 
    pointerEvents = 'auto';
    if (index == impostor) {
        card.textContent = "#SinContexto"
    }
    else {
        card.textContent = palabra.toUpperCase()
    }
    card.classList.add('show');
}

function back()
{
    localStorage.setItem('players',JSON.stringify(players));
    window.location.href = `index.html`;
}