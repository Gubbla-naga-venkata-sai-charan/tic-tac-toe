

function openPlayerConfig(event){
    editedPlayer= +event.target.dataset.playerid;
    PlayerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';

}

function closePlayerConfig(){
    PlayerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value='';
}

function savePlayerconfig(event){
    event.preventDefault();
    const formData=new FormData(event.target);
    const enteredPlayername=formData.get('username').trim();

    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error')
        errorOutputElement.textContent='please enter a avalid name!';
        return;
    }

    const updatedplayerDataElement=document.getElementById('player-' + editedPlayer + '-data');
    updatedplayerDataElement.children[1].textContent=enteredPlayername;

    players[editedPlayer-1].name=enteredPlayername;
    
    closePlayerConfig();
}