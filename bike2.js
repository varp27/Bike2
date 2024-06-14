
document.addEventListener("mousemove", function(dets){
    cursor.style.left= dets.x +"px";
    cursor.style.top = dets.y +"px"; 
    cursorblur.style.left = dets.x -200+"px";
    cursorblur.style.top = dets.y -200+"px";
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });

var swiper = new Swiper(".swiper", {
    grabCursor: true,
    initialSlide: 4,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 1000,
    freeMode: false,
    mousewheel: {
      thresholdDelta: 30,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      },
    },
  });
  
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 180,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 4,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.4,
        direction: "right",
        random: true,
        straight: false,
        out_mode: "none",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  });

  
  
  let nextButton = document.getElementById('next');
  let prevButton = document.getElementById('prev');
  let carousel = document.querySelector('.carousel');
  let listHTML = document.querySelector('.carousel .list');
  let seeMoreButtons = document.querySelectorAll('.seeMore');
  let backButton = document.getElementById('back');
  
  nextButton.onclick = function(){
      showSlider('next');
  }
  prevButton.onclick = function(){
      showSlider('prev');
  }
  let unAcceppClick;
  const showSlider = (type) => {
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';
  
      carousel.classList.remove('next', 'prev');
      let items = document.querySelectorAll('.carousel .list .item');
      if(type === 'next'){
          listHTML.appendChild(items[0]);
          carousel.classList.add('next');
      }else{
          listHTML.prepend(items[items.length - 1]);
          carousel.classList.add('prev');
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(()=>{
          nextButton.style.pointerEvents = 'auto';
          prevButton.style.pointerEvents = 'auto';
      }, 2000)
  }
  seeMoreButtons.forEach((button) => {
      button.onclick = function(){
          carousel.classList.remove('next', 'prev');
          carousel.classList.add('showDetail');
      }
  });
  backButton.onclick = function(){
      carousel.classList.remove('showDetail');
  }


gsap.from("#top1", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#top2", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#top3", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#bottom1", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#bottom2", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#bottom3", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#bottom3", {
  
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

var tl = gsap.timeline()
tl.from("#nav h4" ,{
    y : -100,
    delay : 0.8,
    
    duration : 0.6,
})

tl.from("#nav #img" ,{
    y : 10,
    delay : 2,
    duration : 0.8,
  
})

tl.from("nav i" ,{
    y : -100,
    
    duration : 0.6,
  
})

gsap.from("#page1 H1",{
  y:200,
  duration:0.9,
  rotatev:30,
})

gsap.from("#page1 H2",{
  y:200,
  duration:0.9,
  rotatev:30,
})

gsap.from("#page1 p",{
  y:200,
  duration:0.9,
  rotatev:30,
})

gsap.from(".container h1",{
  y:200,
  duration:0.9,
  rotatev:30,
})


document.addEventListener('DOMContentLoaded', function () {
  const bikeImage = document.getElementById('bike');
  const redButton = document.getElementById('red');
  const blueButton = document.getElementById('blue');
  const blackButton = document.getElementById('black');

  redButton.addEventListener('click', function () {
      bikeImage.src = 'https://www.hondabigwing.in/Content/images/cb300f/colors/SPORTS_Red5.png';
  });

  blueButton.addEventListener('click', function () {
      bikeImage.src = 'https://www.hondabigwing.in/Content/images/cb300f/colors/Mat_Marvel_Blue_Metallic5.png';
  });

  blackButton.addEventListener('click', function () {
      bikeImage.src = 'https://www.hondabigwing.in/Content/images/cb300f/colors/Mat_Axis_Grey_Metallic5.png';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.swiper-slide');
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.classList.add('active');
          } else {
              slide.classList.remove('active');
          }
      });

      const containerWidth = document.querySelector('.swiper-container').offsetWidth;
      const slideWidth = slides[index].offsetWidth;
      const offset = (containerWidth - slideWidth) / 2;

      document.querySelector('.swiper-wrapper').style.transform = `translateX(${-index * slideWidth + offset}px)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  }

  setInterval(nextSlide, 2000);

  showSlide(currentIndex);
});

gsap.from(".page1 h1,.page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7
})
var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".page1 h1",
      scroller: ".main",
      // markers:true,
      start: "top 27%",
      end: "top 0",
      scrub: 3
  }
})
tl.to(".page1 h1", {
  x: -100,
}, "anim")
tl.to(".page1 h2", {
  x: 100
}, "anim")
tl.to(".page1 video", {
  width: "90%"
}, "anim")


