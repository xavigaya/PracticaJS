// recordeu que hem dit que ja no declarem les variables amb var, ho fem amb let
let missatge;
let i = 0;

function hola(missatgeEntrada) {
    // mostrem missatges per la consola
    console.log(missatgeEntrada);
    console.log(i);

    document.getElementById("paragraf").innerHTML = missatgeEntrada;
    // Cada cop que s'executa aquesta línia, SOBREESCRIU el contingut
    // de "paragraf"
    
    document.getElementById("paragraf2").innerHTML += missatgeEntrada;
    // Cada cop que s'executa aquesta línia, AFEGEIX al contingut
    // de "paragraf"

    i++;
}


missatge = "Hola món!";
hola(missatge); // ==> hola("Hola món!");

missatge = "Què tal?";
hola(missatge); // ==> hola("Què tal?");

missatge = "Com estàs?";
hola(missatge);