        let arg = ['Rock','Paper','Scissors'];

        let computerWins = 0;
        let playerWins = 0;

        const player = document.querySelector("#player-score");
        player.textContent = `Player Score: ${playerWins}`;
        
        const computer = document.querySelector("#comp-score");
        computer.textContent = `Computer Score: ${computerWins}`;

        let message = document.querySelector(".message");
        message.textContent = "May the Best Win!";

        const buttons = document.querySelectorAll('.button');

        buttons.forEach((button)=>{button.addEventListener('click',()=>{
            playRound(button.id, getComputerChoce());
            })
        })

        function getComputerChoce()
        {
            return arg[Math.floor(Math.random()*arg.length)];
        }

        function playRound(playerSelection, computerSelection)
        {
            if(playerSelection == computerSelection 
                && (playerWins != 0))
            {
                message.textContent ='Draw! Try again.';
            }
            else if((playerSelection == 'Rock' && computerSelection == 'Scissors')
            ||(playerSelection == 'Paper' && computerSelection == 'Rock')
            ||(playerSelection == 'Scissors' && computerSelection == 'Paper'))
            {
                playerWins += 1;
                player.textContent = `Player Score: ${playerWins}`;
                computer.textContent = `Computer Score: ${computerWins}`;
                message.textContent = 'You Win!'+' '+ playerSelection +' '+ 'beats' +' '+ computerSelection;
            }
            else
            {
                computerWins += 1;
                player.textContent = `Player Score: ${playerWins}`;
                computer.textContent = `Computer Score: ${computerWins}`;
                message.textContent = 'You Lose!'+' '+ computerSelection +' '+ 'beats' +' '+ playerSelection;
            }

            
            if(playerWins == 5)
            {
                message.textContent = 'Congratulations! Make a choice to restart the game';
                playerWins = 0;
                computerWins = 0;
            }
            if(computerWins == 5)
            {
                message.textContent = 'Sorry, try again! Make a choice to restart the game';
                playerWins = 0;
                computerWins = 0;
            }
        }