const text = "Portfolio"; // Texto a ser digitado
let index = 0;

function typeWriter() {
  document.getElementById("portfolio-name").innerHTML += text.charAt(index);
  index++;
  if (index < text.length) {
    setTimeout(typeWriter, 100); // Define a velocidade de digitação (100ms)
  }
}

// Chama a função typeWriter assim que a página é carregada
window.onload = function() {
  typeWriter();
};