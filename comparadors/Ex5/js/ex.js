var a = 1;
var b = 2;
var c = 3;

// Proveu a canviar els valors de les variables per comprovar que funciona
// Proveu a diferenciar majúscules i minúscules, i veure què passa

document.write("<h1>Exemple 5</h1>");

document.write("<h2>Imbricar comparadors</h2>");

// L'etiqueta <code></code> ens serveix per destacar el text que
// representa un llenguatge de programació
// La resta de text és per mostrar el codi que estem executant
// IMPORTANT: les lletres 'a' i 'b' entre els símbols de suma,
// mostren el valor de les variables 'a' i 'b'
document.write("<code>var a = " + a + ";<br/>");
document.write("      var b = " + b + ";<br/>");
document.write("      if (a == b) { ... }</code>");

document.write("<br/><br/><br/>");

if (a == b) {
  //Si la comparació és certa, mostrarà aquest text
  document.write("<strong><em>a</em> és igual a <em>b</em></strong><br/>");
  document.write("<strong>És cert!!!</strong><br/>");
  // Després de mostrar el text, surt de l'estructura dels comparadors
} else {
  //Si la comparació NO és certa, avalua la segona condició
  if (b == c) {
    //Si la comparació és certa, mostrarà aquest text
    document.write("<strong><em>b</em> és igual a <em>c</em></strong><br/>");
    document.write("<strong>És cert!!!</strong><br/>");
    // Després de mostrar el text, surt de l'estructura dels comparadors
  } else {
    //Si la comparació NO és certa, mostrarà aquest text
    document.write("<strong><em>b</em> NO és igual a <em>c</em></strong><br/>");
    document.write("<strong>És fals!!!</strong><br/>");
    // Després de mostrar el text, surt de l'estructura dels comparadors
  }

// Quan es compleix alguna de les condicions, el programa surt dels comparadors
// i segueix amb el codi que tingui a continuació
document.write("Comandes que s'executen després dels comparadors<br/>");

ellipse(200, 200, 200, 200);

}
