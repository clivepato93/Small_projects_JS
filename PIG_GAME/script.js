'use strict';

// selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const score1El = document.querySelector('#score--1');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing;
// Starting conditions of the game
const init = function(){
    scores=[0,0]
    score0El.textContent =0;
    current0El.textContent =0;
    score1El.textContent =0;
    current1El.textContent =0;
    currentScore = 0;

    diceEL.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');




    activePlayer = 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    playing = true;
}
init();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;

        activePlayer = activePlayer === 0 ? 1 : 0;
        console.log(activePlayer)

        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}
// Rolling dice functionality
rollDiceBtn.addEventListener('click',function(){
    if(playing){
    // 1. Generating the randim dice roll 
    const dice = Math.trunc(Math.random()*6)+1;
    
    // 2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    // console.log(dice);

    // 3. Check for rolled 1: if true , switch to next player
    if(dice!==1){
        currentScore+=dice

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // current0El.textContent = currentScore;

    } else {
        switchPlayer();

        // current0El.textContent = scorePlayer0;

    }
} 
})


holdBtn.addEventListener('click', function(){
    if(playing){
    // 1. add current score of the active players score
    scores[activePlayer]+=currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    // 2. check if players score is >=100
    if (scores[activePlayer]>=100){
        playing = false;
        diceEL.classList.add('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.toggle('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        



    }else{
        switchPlayer();

    }
}
})

newGameBtn.addEventListener('click',function(){
    init();

})
