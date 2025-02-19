let gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer=0;
let activeplayer=0;
let currentRound=1;
let gameOver=false;

const players=[
    {
        name:'',
        symbol:'X',
    },
    { 
        name:'',
        symbol:'O',
    },
];
const PlayerConfigOverlayElement=document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop');
const formElement=document.querySelector('form');
const errorOutputElement=document.getElementById('config-errors');
const gameAreaElement=document.getElementById('active-game');
const activeplayerNameElement=document.getElementById('active-player-name');
const gameOverElement=document.getElementById('game-over');

const editplayer1BtnElement=document.getElementById("edit-player-1-btn");
const editplayer2BtnElement=document.getElementById("edit-player-2-btn");
const cancelConfigElement=document.getElementById('cancel-config-btn');
const startNewGameBtn=document.getElementById('start-game-btn');
//const gamefieldElements=document.querySelectorAll('#game-board li');
const gameBoardElement=document.getElementById('game-board');


editplayer1BtnElement.addEventListener('click',openPlayerConfig);
editplayer2BtnElement.addEventListener('click',openPlayerConfig);
cancelConfigElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerconfig);
startNewGameBtn.addEventListener('click',startNewGame);

//for (const gamefieldElement of gamefieldElements ){
   // gamefieldElement.addEventListener('click',selectGameField);
//}
gameBoardElement.addEventListener('click',selectGameField);