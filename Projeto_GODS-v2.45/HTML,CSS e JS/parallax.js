window.addEventListener("scroll",function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
  })
  
 /* Aumenta o tamanho dos cards no modo mobile */
const cards = document.querySelectorAll('.card');
for (const card of cards) {
  if (window.innerWidth <= 768) {
    card.style.width = '25rem';
    card.style.height = '25rem';
  }
}
