AOS.init();

AOS.init({

  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//counter name
document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name-counter");
  const name = "Arnab Ghosh";
  let index = 0;

  function writeName() {
    if (index < name.length) {
      nameElement.textContent += name.charAt(index);
      index++;
      setTimeout(writeName, 200); // Adjust speed here (200ms per character)
    }
  }

  writeName();
});

 