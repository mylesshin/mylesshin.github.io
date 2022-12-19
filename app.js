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

//mouse circle grows when hovering over a clickable link, giving visual feedback
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


const navBar = document.querySelector('.nav-bar');


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

//flip-in2 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const flips2 = document.querySelectorAll('.flip-in2');
var flipNum2 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `flip2 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      flipNum2 = entry.intersectionRatio;
    } else if (flipNum2 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

flips2.forEach(flips2 => {
  observer.observe(flips2)
})

//flip-in3 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const flips3 = document.querySelectorAll('.flip-in3');
var flipNum3 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `flip3 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      flipNum3 = entry.intersectionRatio;
    } else if (flipNum3 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

flips3.forEach(flips3 => {
  observer.observe(flips3)
})

//flip-in4 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const flips4 = document.querySelectorAll('.flip-in4');
var flipNum4 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `flip4 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      flipNum4 = entry.intersectionRatio;
    } else if (flipNum4 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

flips4.forEach(flips4 => {
  observer.observe(flips4)
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

//fade-in3 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const fades3 = document.querySelectorAll('.fade-in3');
var fadeNum3 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `fade3 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      fadeNum3 = entry.intersectionRatio;
    } else if (fadeNum3 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

fades3.forEach(fades3 => {
  observer.observe(fades3)
})

//fade-in3 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const fades4 = document.querySelectorAll('.fade-in4');
var fadeNum4 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `fade4 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      fadeNum4 = entry.intersectionRatio;
    } else if (fadeNum4 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

fades4.forEach(fades4 => {
  observer.observe(fades4)
})


//slide-up transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const slideUp = document.querySelectorAll('.slide-up');
var slideUpNum = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideUp 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      slideUpNum = entry.intersectionRatio;
    } else if (slideUpNum > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

slideUp.forEach(slideUp => {
  observer.observe(slideUp)
})


//slide-up2 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const slideUp2 = document.querySelectorAll('.slide-up2');
var slideUpNum2 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideUp2 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      slideUpNum2 = entry.intersectionRatio;
    } else if (slideUpNum2 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

slideUp2.forEach(slideUp2 => {
  observer.observe(slideUp2)
})

//slide-up3 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const slideUp3 = document.querySelectorAll('.slide-up3');
var slideUpNum3 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideUp3 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      slideUpNum3 = entry.intersectionRatio;
    } else if (slideUpNum3 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

slideUp3.forEach(slideUp3 => {
  observer.observe(slideUp3)
})

//slide-up4 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const slideUp4 = document.querySelectorAll('.slide-up4');
var slideUpNum4 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideUp4 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      slideUpNum4 = entry.intersectionRatio;
    } else if (slideUpNum4 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

slideUp4.forEach(slideUp4 => {
  observer.observe(slideUp4)
})


//slide-up5 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const slideUp5 = document.querySelectorAll('.slide-up5');
var slideUpNum5 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideUp5 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      slideUpNum5 = entry.intersectionRatio;
    } else if (slideUpNum5 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

slideUp5.forEach(slideUp5 => {
  observer.observe(slideUp5)
})

//slide-up6 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const slideUp6 = document.querySelectorAll('.slide-up6');
var slideUpNum6 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideUp6 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      slideUpNum6 = entry.intersectionRatio;
    } else if (slideUpNum6 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

slideUp6.forEach(slideUp6 => {
  observer.observe(slideUp6)
})

//slide-up6 transitions. checks to see if user is on that part of the screen and
//will run the animation if they are and animation will stay they after
const slideUp7 = document.querySelectorAll('.slide-up7');
var slideUpNum7 = -1;

observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slideUp7 1s ${entry.target.dataset.delay}
      forwards ease-out`;
      slideUpNum7 = entry.intersectionRatio;
    } else if (slideUpNum7 > 0) {} else {
      entry.target.style.animation = 'none';
    }
  })
})

slideUp7.forEach(slideUp7 => {
  observer.observe(slideUp7)
})