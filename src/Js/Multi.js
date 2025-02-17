const Reiniciar = document.getElementById("Reiniciar");
const isEmpate = document.getElementById("EMPATE"); 

let isplayerOne = true;
let Cats = document.getElementsByClassName("Cat");

for (let index = 0; index < Cats.length; index++) {
Cats[index].addEventListener("click",function () {
        if (Cats[index].textContent!="") {
                console.log("No puedes");
                alert ("No puedes");
                
        } else{
            console.log(Cats[index]);
            Cats[index].textContent = "x"
            selector()
        }
     
});
function obtenerMejorJugada(casillasDisponibles) {
    let mejorPuntaje = -Infinity;
    let mejorJugada = null;
    for (let i = 0; i < casillasDisponibles.length; i++) {
        let jugada = casillasDisponibles[i];
        jugada.textContent = 'O'; /*  Probar la jugada de el oponente */
        let puntaje = minimax(lista, false); /*  Evaluar el puntaje con Minimax */
        jugada.textContent = ''; /*  Revertir la jugada */
        if (puntaje > mejorPuntaje) {
            mejorPuntaje = puntaje;
            mejorJugada = jugada;
        }
    }
    return mejorJugada;
}
function minimax(tablero, esMaximizando) {
    let ganador = verificarGanador('O');
    if (ganador) return 1;
    ganador = verificarGanador('X');
    if (ganador) return -1;
    let casillasDisponibles = tablero.filter(caja => !caja.textContent);
    if (casillasDisponibles.length === 0) return 0;
    if (esMaximizando) {
        let mejorPuntaje = -Infinity;
        for (let i = 0; i < casillasDisponibles.length; i++) {
            let jugada = casillasDisponibles[i];
            jugada.textContent = 'O'; /*  Simula la jugada del rival */
            let puntaje = minimax(tablero, false);
            jugada.textContent = ''; /*  Revierte la jugada */
            mejorPuntaje = Math.max(puntaje, mejorPuntaje);
        }
        return mejorPuntaje;
    } else {
        let mejorPuntaje = Infinity;
        for (let i = 0; i < casillasDisponibles.length; i++) {
            let jugada = casillasDisponibles[i];
            jugada.textContent = 'X'; /*  Simula la jugada */
            let puntaje = minimax(tablero, true);
            jugada.textContent = ''; /* Revierte la jugada */
            mejorPuntaje = Math.min(puntaje, mejorPuntaje);
        }
        return mejorPuntaje;
    }
}


function selector() {

    let CatsVacias=[];
    for(let index=0; index<Cats.length; index++) {
        if(Cats[index].textContent == "" ){
            CatsVacias.push(index);
        }
    }

    if (CatsVacias.length > 0) {
        const Catscons =
        CatsVacias[ Math.floor(Math.random()* CatsVacias.length)];
        Cats[Catscons].innerHTML = "o"
    
    }     
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
    document.getElementById("Resultado").innerHTML = player + "WIN"

    localStorage.setItem("winner", player);

  



  //  return null; // no hay resultado
} 
function EMPATE(player) {
    // Verifica si no hay ganador y no hay más casillas vacías
    for (let index = 0; index < Cats.length; index++) {
        if (Cats[index].textContent === "") {
            return false; // Si hay una casilla vacía, no es empate
        }

        document.getElementById("Resultado").innerHTML = "EMPATE";

        localStorage.selector("isEmpate",player);
    }

    // Si no hay casillas vacías y no hay ganador, es empate
    return true;
}
   

    window.onload = function() {
        const winner = localStorage.getItem("winner");
        if (winner) {
            document.getElementById("Resultado").innerHTML = winner + " WIN";
        
        }
        const isEmpate = localStorage.getItem("isEmpate");
        if (isEmpate) {
            document.getElementById("Resultado").innerHTML = "EMPATE";
    
    }
}   
Reiniciar.addEventListener("click", function() {

    for (let index = 0; index < Cats.length; index++) {
        Cats[index].textContent = "";
        document.getElementById("Resultado").innerHTML = "";
        console.log(Reiniciar);
    }  
 
    })
