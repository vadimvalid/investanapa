new Splide("#image-carousel", {
  type: "loop",
  interval: 4000,
  // autoplay: true,
  speed: 2000,
  perMove: 1,
  rewind: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  arrows: false,
}).mount();
