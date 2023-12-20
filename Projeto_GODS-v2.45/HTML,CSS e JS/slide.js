var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 5000)

function  proximaImg(){
  cont++

  if(cont > 3){
    cont = 1
  }
  document.getElementById('radio'+cont).checked = true
}


/*arrastar slide*/ 

// Função que detecta eventos de toque e mouse para deslizar horizontalmente
function handleTouchOrMousemove(event) {
    // Obtém o elemento do slide que está sendo tocado/arrastado
    var slide = event.target.closest(".carousel-item-slide");
  
    // Obtém a largura do slide
    var slideWidth = slide.offsetWidth;
  
    // Obtém a posição do cursor em relação ao slide
    var cursorX = event.pageX - slide.offsetLeft;
  
    // Calcula a diferença entre a posição do cursor e a posição do slide
    var deltaX = cursorX - slide.scrollLeft;
  
    // Aplica a diferença à posição do slide, respeitando os limites do slide
    var newScrollLeft = Math.min(Math.max(0, slide.scrollLeft + deltaX), slideWidth - slide.clientWidth);
  
    // Atualiza a posição do slide
    slide.scrollLeft = newScrollLeft;
  
    // Verifica se a posição do slide mudou
    if (newScrollLeft !== slide.scrollLeft) {
      // Aciona o evento de mudança de slide
      document.querySelector("#carouselExampleIndicators").dispatchEvent(new CustomEvent("slide.change", { detail: { slideIndex: Math.floor(slide.scrollLeft / slideWidth) } }));
    }
  }
  
  // Adiciona um manipulador de eventos ao wrapper do carrossel
  document.querySelector("#carouselExampleIndicators").addEventListener("touchstart", handleTouchOrMousemove);
  document.querySelector("#carouselExampleIndicators").addEventListener("mousemove", handleTouchOrMousemove);
  