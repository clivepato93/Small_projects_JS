'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
*/
let score = 20;
let guessingNumber = Math.trunc(Math.random() * 20)+1;
let highScore = 0;

const displayMessage = function(adjustment){
    document.querySelector('.message').textContent=`${adjustment}`
}

document.querySelector('.again').addEventListener
('click',function(){
    
    score = 20;
    guessingNumber = Math.trunc(Math.random() * 20)+1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

    
});

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // when player doesnt enter a number
    if(!guess){
        displayMessage('No number!');
        
        //When player wins 
    } else if(guessingNumber===guess){

        displayMessage('Correct!');
        document.querySelector('.number').textContent = guessingNumber;

        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score>highScore){
            highScore=score
            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is too high
    } else if(guess!==guessingNumber){
        if(score>1){
            displayMessage(guess>guessingNumber 
            ?'Too High!':'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
    
        } else {
            displayMessage('You have lost the game!');
            document.querySelector('.score').textContent = 0;


        };
       
        // when guess is too low
    }

    }




);
