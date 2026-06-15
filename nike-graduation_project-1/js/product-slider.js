export const productSlider = () => {
  const sliderElement = document.querySelector(".sports-product__slider");

  if (!sliderElement || typeof Swiper === "undefined") {
    return null;
  }

  return new Swiper(".sports-product__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true
    },
    navigation: {
      prevEl: ".sports-product__slider-button--prev",
      nextEl: ".sports-product__slider-button--next"
    }
  });
};
