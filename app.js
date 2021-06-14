const game = ()=>{

    let Pscr = 0 ;
    let Cscr = 0 ;

    const startGame = ()=>{
        const playbtn = document.querySelector('.top') ;
        const introScrn = document.querySelector('.container') ;
        const match = document.querySelector('.match') ;

        playbtn.addEventListener("click",()=>{
            introScrn.classList.add("fadeOut") ;
            match.classList.add("fadeIn") ;
        }) ;
    };

    const play = () => {

        const options = document.querySelectorAll(".options button") ;
        const UserHand = document.querySelector(".player-hand") ;
        const ComputerHand = document.querySelector(".computer-hand") ;

        const ArrayCompOptions = ["rock","paper","scissors"] ;
        // console.log(CompNumber) ;
        
        options.forEach((option)=>{
            option.addEventListener('click',function(){
                
                // console.log(this) ;
                
                const CompNumber = Math.floor(Math.random()*3)  ;
                const computerChoice = ArrayCompOptions[CompNumber] ;

                // console.log(computerChoice) ;

                Compare(this.textContent,computerChoice) ;
                

                UserHand.src = `./pics/${this.textContent}.png` ;
                ComputerHand.src = `./pics/${computerChoice}.png` ;


            }) ;
        }) ;

    };
    const Scores = () =>{
        const playerScore = document.querySelector('.player-score p') ;
        const ComputerScore = document.querySelector('.computer-score p') ;

        playerScore.textContent = Pscr ;
        ComputerScore.textContent = Cscr ;

    }
    const Compare = (playerChoice,computerChoice) => {

        const winner = document.querySelector('.winner');

        if(playerChoice===computerChoice){
            winner.textContent = 'Tie' ;
            return ;
        }

        if(playerChoice==='rock'){
            
            if(computerChoice==='scissor'){
                winner.textContent = 'You Win' ;
                Pscr++ ;
                Scores() ;
                return ;

            }
            
            else{
                winner.textContent = 'Computer Wins' ;
                Cscr++ ;
                Scores() ;
                return ;
            }
        }

        if(playerChoice==='paper'){
            
            if(computerChoice==='scissors'){
                winner.textContent = 'Computer Win' ;
                Cscr++ ;
                Scores() ;
                return ;
            }
            
            else{
                winner.textContent = 'You Win' ;
                Pscr++ ;
                Scores() ;
                return ;
            }
        }
        if(playerChoice==='scissors'){
            
            if(computerChoice==='rock'){
                winner.textContent = 'Computer Win' ;
                Cscr++ ;
                Scores() ;
                return ;
            }
            
            else{
                winner.textContent = 'You Win' ;
                Pscr++ ;
                Scores() ;
                return ;
            }
        }

    }

    startGame();
    play() ;
};

game();
