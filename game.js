function resetGameStatus(){
    activeplayer=0;
    currentRound=1;
    gameOver=false;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>';
    gameOverElement.style.display='none';

    let gameIndex=0;
    for (let i=0; i<3; i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameBoardIntemElement=gameBoardElement.children[gameIndex];
            gameBoardIntemElement.textContent='';
            gameBoardIntemElement.classList.remove('disabled');
            gameIndex++;
        }
    }
}


function startNewGame(){
    if(players[0].name==='' || players[1].name===''){
        alert('please set custom player names for both players');
        return
    }
    resetGameStatus();

    activeplayerNameElement.textContent=players[activeplayer].name;
    gameAreaElement.style.display='block';
}
function switchPlayer(){
    activeplayer = activeplayer === 0 ? 1 : 0;
    activeplayerNameElement.textContent=players[activeplayer].name;
}
function selectGameField(event){
    if(event.target.tagName !== 'LI' || gameOver){
        return;
    }

    const selectorField=event.target;
    const selectorColumn = selectorField.dataset.col-1;
    const selectorRow = selectorField.dataset.row-1;

    if(gameData[selectorRow][selectorColumn]){
        alert('please select an empty field!')
    }

    selectorField.textContent= players[activeplayer].symbol;
    selectorField.classList.add('disabled');

    gameData[selectorRow][selectorColumn]=activeplayer+1;
    const winnerId=checkGameOver();
    if(winnerId!==0){
        endGame(winnerId)
    }

    currentRound++;
    switchPlayer();
}

function checkGameOver(){
    for(let i=0;i<3;i++){
        if(gameData[i][0]>0 && gameData[i][0] === gameData[i][1] &&  gameData[i][1] === gameData[i][2]){
            return gameData[i][0];
        }
    }
    for(let i=0;i<3;i++){
        if(gameData[0][i]>0 && gameData[0][i] === gameData[1][i] &&  gameData[1][i] === gameData[2][i]){
            return gameData[0][i];
        }
    }
    if(gameData[0][0]>0 && gameData[0][0]===gameData[1][1] && gameData[1][1] ===gameData[2][2]){
        return gameData[0][0];
    }
    if(gameData[2][0]>0 && gameData[2][0]===gameData[1][1] && gameData[1][1] ===gameData[0][2]){
        return gameData[2][0];
    }
    if(currentRound === 9){
        return -1;
    }
    return 0;
}

function endGame(winnerId){
    gameOver=true;
    gameOverElement.style.display='block';
    if(winnerId>0){
        const winnerName=players[winnerId-1].name
        gameOverElement.firstElementChild.firstElementChild.textContent=winnerName;
    }
    else{
        gameOverElement.firstElementChild.textContent="It's a draw!";
    }
}