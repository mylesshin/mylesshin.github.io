//for the special circle cursor. allows it to replace and follow user's mouse
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

//mouse circle grows when hovering over a clickable link to give visual feedback
let links = Array.from(document.querySelectorAll("li"));

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });

});

//mouse circle grows when hovering over a clickable buttons to give
//visual feedback
let links1 = Array.from(document.querySelectorAll("button"));

links1.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });

});

//mouse circle grows when hovering over a blue text to give
//visual feedback
let links2 = Array.from(document.querySelectorAll("a"));

links2.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });

});


//for the menu button in the nav bar. runs animation when clicking the button
const menuIcon = document.querySelector('.hamburgerMenu');


const navBar = document.querySelector('.navBar');


menuIcon.addEventListener('click', () => {
  navBar.classList.toggle('change');
});






//slide-in transitions. checks to see if user is on that part of the screen and
//will run the animation if they are (will disappear once the user is no longer
//looking at it)
const slides = document.querySelectorAll('.slide-in');

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slide1 2s ${entry.target.dataset.delay} forwards ease-out`;
    } else {
      entry.target.style.animation = 'none';
    }
  })

})

slides.forEach(slides => {
  observer.observe(slides)
})



//flip-in transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const flips = document.querySelectorAll('.flip-in');
var flipNum = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `flip1 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      flipNum = entry.intersectionRatio;
    } else if (flipNum > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

flips.forEach(flips => {
  observer.observe(flips)
})


//typing transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const types = document.querySelectorAll('.typing');
var typeNum = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `type1 1.5s ${entry.target.dataset.delay}
      forwards ease-out`;
      typeNum = entry.intersectionRatio;
    } else if (typeNum > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

types.forEach(types => {
  observer.observe(types)
})


//fade-in transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const fades = document.querySelectorAll('.fade-in');
var fadeNum = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `fade1 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      fadeNum = entry.intersectionRatio;
    } else if (fadeNum > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

fades.forEach(fades => {
  observer.observe(fades)
})

//fade-in2 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const fades2 = document.querySelectorAll('.fade-in2');
var fadeNum2 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `fade2 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      fadeNum2 = entry.intersectionRatio;
    } else if (fadeNum2 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

fades2.forEach(fades2 => {
  observer.observe(fades2)
})
