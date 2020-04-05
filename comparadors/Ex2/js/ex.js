var a = 2;
var b = 1;

document.write("<h1>Exemple 2</h1>");

document.write("<h2>Comparar una variable amb un valor</h2>");

// L'etiqueta <code></code> ens serveix per destacar el text que
// representa un llenguatge de programació
// La resta de text és per mostrar el codi que estem executant
// IMPORTANT: la lletra 'a' entre els símbols de suma,
// mostra el valor de la variable 'a'
document.write("<code>var a = " + a + ";<br/>");
document.write("if (a == 1) { ... }</code>");

document.write("<br/><br/><br/>");

if (a == 1) {
  document.write("És cert!!!");
} else {
  document.write("És fals!!!");
}
