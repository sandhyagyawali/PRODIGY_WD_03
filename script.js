let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winContainer = document.querySelector(".win-container");
let msg = document.querySelector("#msg");

let turn = true; //player1 , player2
let count = 0; //To Track Draw

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 7],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("Box was Clicked.");
        if(turn){//player1
            box.innerText ="X";
            turn = false;
        }
        else{
            box.innerText ="O";
            turn = true;
        }
        box.disabled = true;
        count ++;
        console.log(count);

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});
const gameDraw =()=>{
    msg.innerText ='Match is Draw..';
    winContainer.classList.remove('hide');
    disableBoxes();
}
const resetGame =()=>{
    turn =true;
    enableBoxes();
    winContainer.classList.add("hide");
    count = 0;
}
const enableBoxes =()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}
const disableBoxes =()=>{
    for (let box of boxes) {
        box.disabled = true;
        
    }
}
const showWinnner = (winner)=>{
    msg.innerText =`Congratulations Winner is ${winner}`;
    winContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3 ){
                //console.log("winner" ,pos1);
                showWinnner(pos1);
                return true;
            }
        }
    }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame)