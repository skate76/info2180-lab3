//button = document.getElementsByClassName('btn');

//Xturn = 1;

//const state = {num: textContent};


document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById('board');
    const button = document.querySelector(".btn");
    const sqCount = 9;
    let Oturn = true;
    let countX = 0;
    let countO= 0;
    let isXTurn = Math.random() < 0.5;
    let Xturn = true;
    let gameState = Array(9).fill(null);

    const winningCombos = [[0,1,2], [3,4,5],[6,7,8], [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    function checkWinner(){
        for (let combo of winningCombos){
            const [a,b,c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
                const winner = gameState[a];
                document.getElementById("status").textContent = `Congratulations!${winner} is the Winner!`;
                document.getElementById("status").classList.add("you-won");
                return true;
            }
        }
            return false;
        }
    
    
   
    for (let i = 0; i < sqCount; i++){
        const sq = document.createElement("div");
        sq.classList.add("square");
        //board.appendChild(sq);


    sq.addEventListener("mouseover", () => {
        if (!sq.textContent) sq.classList.add("hover");
    });

    sq.addEventListener("mouseout", () => {
        sq.classList.remove("hover");
    })
    //onmouseover = (event) => {};

    
    //const sq = document.getElementById('board');
    //sq.setAttribute("class", "square");

    sq.addEventListener("click", () => {
        

        if (!sq.textContent && !checkWinner()){
            //num = Math.floor(Math.random() * 2);
            if (isXTurn ){
                //Xturn = Xturn;
                //if(Xturn){
                    sq.textContent = "X";
                    sq.classList.add("X");
                    gameState[i] = "X";
                    countX +=1;
                
                } else{
                    sq.textContent = "O";
                    sq.classList.add("O");
                    gameState[i] = "O";
                    countO +=1;
                    

                }
                    //else {
                       // sq.textContent = "O";
                       // sq.classList.add("O");
                    //}
                    isXTurn = !isXTurn;

                   checkWinner();
                
            
                    

           // if(num == 0){
                //Oturn = Oturn;
                //if(Oturn){
                    //sq.textContent = "O";
                    //sq.classList.add("O");
                //}
                    //else {
                    //    sq.textContent = "X";
                     //   sq.classList.add("X");
                    //}
                   // Oturn = !Oturn;

            //}
    }});
    

            //} else {
            //    Xturn = !Xturn;
            //}



           // if(Xturn){
            //    sq.textContent = "X";
            //    sq.classList.add("X");

            //} else {
               // sq.textContent ="O";
              //  sq.classList.add("O");
           // }
           // Xturn = !Xturn;
        //}

        //for (let i = 0; i <sqCount; i++){
           // if (i%2==0){
              //  sq.textContent ="X";
               // sq.classList.add("X");
           // } 

        //}

        //sq.textContent ="X";
        ////sq.classList.add(textContent);
        //const sq= document.createElement("div");
        //sq.classList.add(".square.X");
        //board.appendChild(sq);
        //console.log("Button was clicked!");
        
    //});
        board.appendChild(sq);
    }      
    //const button = document.getElementById("btn");
    button.addEventListener("click", () => {
        gameState.fill(null);
        const squares = document.querySelectorAll(".square");
        squares.forEach(sq => {
            sq.textContent = "";
            sq.classList.remove("X");
            sq.classList.remove("O");
        });

        document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O";
        document.getElementById("status").classList.remove("you-won");
        


    })

    //for (i = 0;i < sizeof(gameState); i++){
        //if (gameState[i] == winningCombo[i]){


      //  }
   // }
    console.log("DOM fully loaded and parsed.");
    
});

