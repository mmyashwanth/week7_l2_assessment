document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("testimonial-comment-slider");
  const sliderOptions = slider.dataset.options;
  const parsedSliderOptions = JSON.parse(sliderOptions);
  console.log(parsedSliderOptions);

  let testimonialCommentSlider = new Splide("#testimonial-comment-slider", {
    type: parsedSliderOptions.type,
    perPage: parsedSliderOptions.perPage,
    autoplay: parsedSliderOptions.autoplay,
    interval: parsedSliderOptions.interval,
    arrows: parsedSliderOptions.arrows,
    pagination: parsedSliderOptions.pagination,
  });

  testimonialCommentSlider.on("move", function (newIndex) {
    let testimonialImages = document.querySelectorAll(".testimonial-image");
    let activeImage = testimonialImages[newIndex];

    testimonialImages.forEach(function (image) {
      image.classList.add("hidden");
    });
    activeImage.classList.remove("hidden");
  });

  testimonialCommentSlider.mount();
});
