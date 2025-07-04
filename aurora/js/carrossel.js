function carregarCarrossel(containerId, arquivo) {
  fetch(arquivo)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(containerId).innerHTML = html;
      iniciarSwiper(`#${containerId} .mySwiper`);
    })
    .catch((erro) => console.error("Erro ao carregar carrossel:", erro));
}

function iniciarSwiper(seletor) {
  new Swiper(seletor, {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: `${seletor} .swiper-pagination`,
      clickable: true
    },
    navigation: {
      nextEl: `${seletor} .swiper-button-next`,
      prevEl: `${seletor} .swiper-button-prev`
    }
  });
}
