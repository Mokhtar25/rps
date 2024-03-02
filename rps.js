let score_cs = 0;
let score_hu = 0;    
function play(choice)
    {  
        let answer = choice;
        let guess = Math.floor(Math.random() * 3);
        if (guess == answer){
            print("Draw!")
            return;
        }
        print(winner(answer, guess))
    }
    function cap(string){
        return string.at(0).toUpperCase() + string.slice(1);
    }

    function winner(answer, guess){
        array = [[0, 0, 1], [1, 0, 0], [0, 1, 0]];
        items = ["rock", "paper", "scissors"]
        if (array[answer][guess] > array[guess][answer]){
            score_hu++;
            return "You win!!";

        }
        else{
            score_cs++;
            return `You lost!, ${cap(items[guess])} beats ${cap(items[answer])}`
            
        }
    }

    function run(type){


        if (score_cs < 5  && score_hu < 5){
            play(type);
            update();
        }
        else{
        if (score_cs >= 5){
            print("You lost The Game!, Better luck next time!, Click any button to restart")
        
        }  
        if (score_hu >= 5){
        print("You Won The Game!, Click any button to restart")
        
        }
        
        score_cs =0;
        score_hu= 0;

    }

       
        
    }
    
    const rock = document.querySelector('.rock');
    rock.addEventListener("click", (e)=>{
        run(rock.value);
    }    )

    const paper = document.querySelector('.paper');
    paper.addEventListener("click", (e)=>{
        run(paper.value);
    }    )

    const scissors = document.querySelector('.scissors');
    scissors.addEventListener("click", (e)=>{
        run(scissors.value);
    }    )

        function update(){
        document.querySelector(".human").textContent = `Your Score is ${score_hu}`;
        document.querySelector(".comp").textContent = `Computer's score is ${score_cs}`;
        }
        update()

        function print(text){
            document.querySelector('h2').textContent = text;
        }
        










