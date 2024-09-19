const texts = document.querySelectorAll(".animation-text");
const blockLeft = document.querySelectorAll(".block-left");
const blockRight = document.querySelectorAll(".block-right");
const blockBottom = document.querySelectorAll(".block-bottom");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("text__animated");
      observer.unobserve(entry.target);
    }
  });
};

const callbackLeft = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("block-left__animated");
      observer.unobserve(entry.target);
    }
  });
};

const callbackRight = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry);

      entry.target.classList.add("block-right__animated");
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  rootMargin: "10px 0px 0px 0px",
  threshold: 0.3,
};

const options2 = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.3,
};

const observer = new IntersectionObserver(callback, options);
const observerLeft = new IntersectionObserver(callbackLeft, options);
const observerRight = new IntersectionObserver(callbackRight, options2);

texts.forEach((image) => observer.observe(image));
blockLeft.forEach((block) => observerLeft.observe(block));
blockRight.forEach((block) => observerRight.observe(block));
blockBottom.forEach((block) => observer.observe(block));
