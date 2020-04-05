var a = "Hola";
var b = 1;

document.write("<h1>Exemple 3</h1>");

document.write("<h2>Comparar una variable de text amb un text</h2>");

// L'etiqueta <code></code> ens serveix per destacar el text que
// representa un llenguatge de programació
// La resta de text és per mostrar el codi que estem executant
// IMPORTANT: la lletra 'a' entre els símbols de suma,
// mostra el valor de la variable 'a'
document.write("<code>var a = " + a + ";<br/>");
document.write("if (a == 1) { ... }</code>");

document.write("<br/><br/><br/>");

if (a == "Hola") {
  //Si la comparació és certa, mostrarà aquest text
  document.write("<strong>És cert!!!</strong>");
} else {
  //Si la comparació NO és certa, mostrarà aquest text
  document.write("<strong>És fals!!!</strong>");
}
