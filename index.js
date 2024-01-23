

const contPadre = document.querySelector(".conte-padre")
const puntero = document.querySelector(".foco")
const puntero2 = document.querySelector(".foco2")
const elementos = document.querySelectorAll('[id="btn"]');
let btnG = false

const ladoPuntero = 60
const ladoPunteroGrande = 100

puntero.style.width = ladoPuntero + "px"
puntero.style.height = ladoPuntero + "px"
puntero.style.borderRadius = ladoPuntero + "px"
puntero2.style.borderRadius = ladoPuntero + "px"

contPadre.addEventListener("mousemove", (e) =>  {
 const lado = btnG ? ladoPunteroGrande : ladoPuntero
 puntero.style.top = (e.pageY - (lado / 2)) +  "px"
 puntero.style.left = (e.pageX - (lado /2)) + "px"
  });
  
elementos.forEach(elemento => {
    elemento.addEventListener("mouseover", () => {
        puntero.style.width = ladoPunteroGrande + "px"
        puntero.style.height = ladoPunteroGrande + "px"
        btnG = true
    });
  })



  elementos.forEach(elemento => {
    elemento.addEventListener("mouseout", () => {
        puntero.style.width = ladoPuntero + "px"
        puntero.style.height = ladoPuntero + "px"
        btnG = false
    });
  })


  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }



  function copyPhoneNumber() {
    var phoneNumber = "+54 3437 516370";
    navigator.clipboard.writeText(phoneNumber)
      .then(function() {
        alert("¡Número de teléfono copiado :D!");
      })
      .catch(function() {
        alert("No se pudo copiar el número de teléfono.");
      });
  }



  // Resto de tu código JavaScript

window.addEventListener("scroll", function() {
  var scrollBtn = document.getElementById("scroll-top-btn");
  if (window.pageYOffset > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}



