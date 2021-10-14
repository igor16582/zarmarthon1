///0

const player1 = {
    name:'СОНЯ',
    hp: 99,
    img:'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon:['sword', 'kunai', 'sai'],
    attack: function() {
        console.log(this.name + 'Fight!')
    }

}

const player2 = {
    name:'КИТАНА',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon:['sword', 'kunai', 'sai'],
    attack: function() {
        console.log(this.name + 'Fight!')
    }

}



///1

function createPlayer(player, name, hp, img) {
    const $player1 = document.createElement('div');
    $player1.classList.add(player)
    

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar')

    const $character = document.createElement('div');
    $character.classList.add('character')

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width =  hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    const $img = document.createElement('img');
    $img.src = img;
    
    $player1.appendChild($progressbar);
    $player1.appendChild($character);
    
    $progressbar.appendChild($name);
    $progressbar.appendChild($life)
    
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1)

}

createPlayer('player1',player1.name, player1.hp, player1.img);
createPlayer('player2',player2.name, player2.hp, player2.img);





