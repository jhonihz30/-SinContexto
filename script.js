let players = []
const data = localStorage.getItem('players')
const input = document.getElementById('input_')
const start_button = document.getElementById('start')
const erase_button = document.getElementById('erase');
let list = document.getElementById('players_list')

if (data) {
    players = JSON.parse(data);
    if (players) {
        refresh_playerlist()
    }
}



function add_player(){
    let player_name = input.value
    input.value = ""
    if (!players.includes(player_name))
    {
        players.push(player_name)
        refresh_playerlist()
    }
}
function refresh_playerlist() {
    if (players.length > 0){
        erase_button.style.pointerEvents = 'auto';
        erase_button.style.display = 'inline-block'
    }

    if (players.length > 2){
        start_button.style.opacity = 1;
        start_button.style.pointerEvents = 'auto';
    }
    else
    {
        start_button.style.opacity = 0.2;
        start_button.style.pointerEvents = 'none';
    }

    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }

    players.forEach(player => {
        var para = document.createElement("p");
        para.textContent = player
        list.appendChild(para)
        para.classList.add('fade_in')
    });
}

function start()
{
    localStorage.setItem('players',JSON.stringify(players));
    window.location.href = `game.html`;
}

function erase()
{
    while (list.firstChild)
    {
       list.removeChild(list.firstChild)
    }

    erase_button.style.pointerEvents = 'none';
    erase_button.style.display = 'none'
    players = []

    localStorage.setItem('players',[]);
}