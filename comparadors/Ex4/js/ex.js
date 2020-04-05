var a = "Hola";
var b = "Hola";

// Proveu a canviar els valors de les variables per comprovar que funciona
// Proveu a diferenciar majúscules i minúscules, i veure què passa

document.write("<h1>Exemple 4</h1>");

document.write("<h2>Comparar dos variables de text</h2>");

// L'etiqueta <code></code> ens serveix per destacar el text que
// representa un llenguatge de programació
// La resta de text és per mostrar el codi que estem executant
// IMPORTANT: les lletres 'a' i 'b' entre els símbols de suma,
// mostren el valor de les variables 'a' i 'b'
document.write("<code>var a = " + a + ";<br/>");
document.write("<code>var b = " + b + ";<br/>");
document.write("if (a == b) { ... }</code>");

document.write("<br/><br/><br/>");

if (a == b) {
  //Si la comparació és certa, mostrarà aquest text
  document.write("<strong>És cert!!!</strong>");
} else {
  //Si la comparació NO és certa, mostrarà aquest text
  document.write("<strong>És fals!!!</strong>");
}
