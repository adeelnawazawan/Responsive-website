// SHOW MENU

let line  = document.querySelector('.navbar .ri-menu-line');
let menu = document.querySelector('.navbar ul');

line .addEventListener('click',()=>{
menu.classList .toggle('showmenu');
});

window.addEventListener('scroll',()=>{
let nav = document.querySelector('.navbar');
if(scrollY>50)
{
nav.classList.add('navbarSticky')
}
else{
    nav.classList.remove('navbarSticky')
}; 
});
// SERVICE SLIDER


var  swiper = new Swiper('.ServiceSwiper',{
    loop:true,
    autoplay:{
        delay:3000,
    }, 
    breakpoints:{
      0:{
        slidesPerView:1,
        spaceBetween:10,
      },
      640:{
        slidesPerView:2,
        spaceBetween:10,
      },
    1024:{
        slidesPerView:2,
        spaceBetween:10,
      },
      1400:{
        slidesPerView:4,
        spaceBetween:10,
      },
    },
});
// PROJECTS SLIDER
var swiper = new Swiper('.projectSwiper',{
  slidesPerView:3,
  spaceBetween:10,
  loop:true,
  autoplay:{
    delay:2000,
  },
  breakpoints:{
    144:{
      slidesPerView:3,
    },
    1100:{
      slidesPerView:2,
    },
    900:{
      slidesPerView:2,
    },
    786:{
      slidesPerView:2,
    },
    500:{
      slidesPerView:1,
    },
  },
});
// TESTIMONIALS SLIDER
 var swiper = new Swiper('.testimonialSwaper',{
slidesPerView: 2,
spaceBetween:30, 
loop:true,
autoplay:{
  delay:2000,
},

 });

//  BRANDS SLIDER
var swiper = new Swiper('.brandSwiper',{
  slidesPerView: 5,
  spaceBetween:10, 
  loop:true,
  autoplay:{
    delay:2000,
  },
  breakpoints:{
    1400:{
       slidesPerView: 5,
    },
    1100:{
      slidesPerView: 4,
   },
   900:{
    slidesPerView: 2,
 },
 500:{
  slidesPerView: 1,
},
  }
  
   });
// TEAM SLIDER
var swiper = new Swiper('.teamSwiper',{
  slidesPerView: 3,
  spaceBetween:40, 
  loop:true,
  autoplay: true,
  breakpoints:{
    1400: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView:1,
    },
  },
  
   });