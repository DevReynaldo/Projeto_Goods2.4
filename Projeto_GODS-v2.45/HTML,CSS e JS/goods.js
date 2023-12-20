
 // Use JavaScript para ocultar um dos carrosséis com base no tamanho da tela
 function toggleCarousel() {
    if (window.innerWidth < 768) {
      document.getElementById("carouselExampleIndicators").style.display = "none";
      document.getElementById("carouselMobile").style.display = "block";
    } else {
      document.getElementById("carouselExampleIndicators").style.display = "block";
      document.getElementById("carouselMobile").style.display = "none";
    }
  }

  // Execute a função ao carregar a página e redimensionar a janela
  window.addEventListener("load", toggleCarousel);
  window.addEventListener("resize", toggleCarousel);

  //Navbar "Barra de navegação" mobile,full

  window.addEventListener("load", function() {
    const navbarFull = document.querySelector(".navbar-full");
    const navbarMobile = document.querySelector(".navbar-mobile");

    function toggleNavbar() {
        if (window.innerWidth >= 768) {
            navbarFull.style.display = "block";
            navbarMobile.style.display = "none";
        } else {
            navbarFull.style.display = "none";
            navbarMobile.style.display = "block";
        }
    }

    // Chame a função para definir a barra de navegação inicial com base na largura da tela
    toggleNavbar();

    // Adicione um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", toggleNavbar);
});


window.addEventListener('resize', function() {
  if (window.innerWidth < 768) {
    // Visualização "celular" em tela menor Rodapé
    document.querySelectorAll('.boxs').forEach(function(box) {
      box.style.display = 'block';
      box.style.width = '100%';
      box.style.marginBottom = '20px';
    });
  } else {
    // Visualização "computador" em tela cheia Rodapé
    document.querySelectorAll('.boxs').forEach(function(box) {
      box.style.display = 'inline-block';
      box.style.width = '25%';
      box.style.marginBottom = '0px';
    });
  }
});


window.addEventListener("resize", resizeH1);


