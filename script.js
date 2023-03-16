        let arg = ['Rock','Paper','Scissors'];

        let compScore = 0;
        let playerScore = 0;

        const player = document.querySelector("#player-score");
        player.textContent = `Player Score: ${playerScore} `;
        
        const computer = document.querySelector("#comp-score");
        computer.textContent = `Computer Score: ${compScore}`;

        const result = document.querySelector("#result");
        result.textContent = `LET'S HANDLE THIS LIKE ADULTS!`;

        const note = document.querySelector("#note");
        note.textContent = `Make a choice to start`;

        const buttons = document.querySelectorAll('.button');

        buttons.forEach((button)=>{button.addEventListener('click',()=>{
            playRound(button.id, getComputerChoce());
            })
        })
        
        function getComputerChoce()
        {
            return arg[Math.floor(Math.random()*arg.length)];
        }

        function playRound(playerChoice, compChoice)
        {
            if(playerChoice == compChoice)
            {
                result.textContent ='Draw!';
                note.textContent = 'Try again.';
            }
            else if((playerChoice == 'Rock' && compChoice == 'Scissors')
            ||(playerChoice == 'Paper' && compChoice == 'Rock')
            ||(playerChoice == 'Scissors' && compChoice == 'Paper'))
            {
                playerScore += 1;
                player.textContent = `Player Score: ${playerScore} `;
                computer.textContent = `Computer Score: ${compScore}`;
                result.textContent = 'You Win!';
                note.textContent = playerChoice +' '+ 'beats' +' '+ compChoice;
            }
            else
            {
                compScore += 1;
                player.textContent = `Player Score: ${playerScore} `;
                computer.textContent = `Computer Score: ${compScore}`;
                result.textContent = 'You Lose!';
                note.textContent = compChoice +' '+ 'beats' +' '+ playerChoice;
            }

            
            if(playerScore == 5)
            {
                result.textContent = 'Congratulations!';
                note.textContent = 'Make a choice to restart the game';
                playerScore = 0;
                compScore = 0;
            }
            if(compScore == 5)
            {
                result.textContent = 'Sorry, try again!';
                note.textContent = 'Make a choice to restart the game';
                playerScore = 0;
                compScore = 0;
            }
        }