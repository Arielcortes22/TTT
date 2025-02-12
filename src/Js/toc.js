const Reiniciar = document.getElementById("Reiniciar");

let isplayerOne = true;
let Cats = document.getElementsByClassName("Cat");

for (let index = 0; index < Cats.length; index++) {
Cats[index].addEventListener("click",function () {
    console.log(Cats[index]);
    Cats[index].innerHTML = "x"
    selector()
    
});
  
}
function selector() {
    let Bot = Math.floor((Math.random() * 9));
    console.log(Bot);
    Cats[Bot].innerHTML = "o"
               
        checkline(0, 1, 2);
        checkline(3, 4, 5);
        checkline(6, 7, 8);
        checkline(0, 3, 6);
        checkline(1, 4, 7);
        checkline(2, 5, 8);
        checkline(0, 4, 8);
        checkline(6, 4, 2);
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
    document.getElementById("Resultado").innerHTML = player + "WIN"
} 

    Reiniciar.addEventListener("click", function() {

    for (let index = 0; index < Cats.length; index++) {
        Cats[index].textContent = "";
        console.log(Reiniciar);
    }  
    })

    

   
   