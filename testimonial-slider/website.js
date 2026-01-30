let userImageEl = document.querySelector('.user-image');
let userNameEl = document.querySelector('.user-name');
let testimonialTextEl = document.querySelector('.testimonial-text');

const testimonials = [
  {
    name: "-Temporibus",
    imgSrc: "images/user-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "-Emporibus",
    imgSrc: "images/user-2.jpg",
    text: "Ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    name: "-Mporibus",
    imgSrc: "images/user-3.jpg",
    text: "Dolor sit amet consectetur adipisicing elit."
  }
];

let i = 0;

function updateTestimonial() {
  const { name, imgSrc, text } = testimonials[i];

  userImageEl.src = imgSrc;
  userNameEl.innerText = name;
  testimonialTextEl.innerText = text;

  i++;
  if (i === testimonials.length) {
    i = 0;
  }

  setTimeout(()=>{
    updateTestimonial();
  }, 10000);
}

updateTestimonial();
