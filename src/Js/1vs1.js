let isplayerOne = true;
let Cats = document.getElementsByClassName("Cat");

for (let i = 0; i < Cats.length; i++) {
Cats[i].addEventListener("click",userMove);
  
}
function userMove(e) {
    let CatValue = e.target.innerHTML;
    if (!CatValue.length) {
        e.target.innerHTML =isplayerOne ? "x" :"o";
        isplayerOne =!isplayerOne;

        checkline(0, 1, 2);
        checkline(3, 4, 5);
        checkline(6, 7, 8);
        checkline(0, 3, 6);
        checkline(1, 4, 7);
        checkline(2, 5, 8);
        checkline(0, 4, 8);
        checkline(6, 4, 2);
    }
}
function checkline(c1, c2, c3) {
    if(
        Cats[c1].innerHTML.length &&
        Cats[c1].innerHTML === Cats[c2].innerHTML &&
        Cats[c2].innerHTML === Cats[c3].innerHTML 
      
    ){
        showWinner(Cats[c1].innerHTML);
    }
}

function showWinner(player) {
    document.querySelector("#Resultado").innerHTML = player + "win"
} 
    

