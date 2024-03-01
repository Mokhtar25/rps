function play()
    {  
        let answer;
        while (true){
        answer = prompt("Choose (rock, paper, scissors): ").toLowerCase();
        answer = ["rock", "paper", "scissors"].indexOf(answer);
        if (answer > -1){
            break;
        }
        alert("Please Chose a correct item");
        }
        let guess = Math.floor(Math.random() * 3);
        if (guess == answer){
            console.log("Draw!")
            return;
        }
        console.log(winner(answer, guess))
    }
    function cap(string){
        return string.at(0).toUpperCase() + string.slice(1);
    }

    function winner(answer, guess){
        array = [[0, 0, 1], [1, 0, 0], [0, 1, 0]];
        items = ["rock", "paper", "scissors"]
        if (array[answer][guess] > array[guess][answer]){
            return "You win!!";
        }
        else{
            return `You lost!, ${cap(items[guess])} beats ${cap(items[answer])}`
        }
    }
    let i = 0;
    while (i < 5)
    {
        i++;    
        play(); 
        console.log(`Round ${i} out of 5`)
    }