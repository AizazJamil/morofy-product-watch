// Animation GSAP

//header
const header = document.querySelector("#header-navbar");

//banner
const home = document.querySelector("#homeBg");
const homeAddition = document.querySelector("#homeBgAddition");

//footer
const footerBg = document.querySelector("#footerBg");
const footerAddition = document.querySelector("#footerBgAddition");
const footerText = document.querySelectorAll(".copyright p");

// home text
const h2Line = document.querySelectorAll(".line span");
const contentP = document.querySelector(".caption-text p");
const contentButton = document.querySelector(".caption-text .button-home");

//image
const watchImg = document.querySelector(".caption-img .home-image");

// feature
const featuresContentTitle = document.querySelector(".feature-caption h2");
const featuresContentP = document.querySelector(".feature-caption p");
const featuresContentLink = document.querySelector(".feature-caption a");
const featuresList = document.querySelectorAll(".feature-list div");

// about
const aboutCaptionSubHead = document.querySelectorAll(".about-caption h5");
const aboutCaptionHead = document.querySelectorAll(".about-caption h2");
const aboutCaptionP = document.querySelector(".about-caption p");
const aboutCaptionList = document.querySelectorAll(".about-caption .list-point .items");
const aboutCaptionImage = document.querySelectorAll(".about-image img");
const aboutCaptionA = document.querySelectorAll(".about-image a");

// demo video
const videoHeading = document.querySelectorAll(".video-area .heading");
const videoButton = document.querySelectorAll(".video-area .video-play-button");

// product items
const productHead = document.querySelectorAll(".product-area .heading");
const productItems = document.querySelectorAll(".product-items .pro-box");

// slider reviews
const reviewsHeadH2 = document.querySelectorAll(".review-client .heading h2");
const reviewsHeadP = document.querySelectorAll(".review-client .heading p");
const reviewsSlider = document.querySelectorAll(".review-slider .swiper-slide");

// faq
const faqHeadH2 = document.querySelectorAll(".faq-area .heading h2");
const faqHeadP = document.querySelectorAll(".faq-area .heading p");
const faqAccordion = document.querySelectorAll(".myaccordion .card");
const faqImage = document.querySelectorAll(".faq-image img");

// contact
const contactHeadH2 = document.querySelectorAll(".contact-area .heading h2");
const contactHeadP = document.querySelectorAll(".contact-area .heading p");
const contactForm = document.querySelectorAll(".form-inner .form-group");

const bannerTL = gsap.timeline();

bannerTL
  .from([homeAddition, home], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }
  })
  .from(header, {
    delay: -0.2,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut"
  })
  .from(h2Line, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })
  .from([contentP, contentButton], {
    delay: -0.6,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })

gsap.from(watchImg, {
  delay: 2.2,
  x: -100,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});


const featuresTl = gsap.timeline();

featuresTl
.from([featuresContentTitle, featuresContentP, featuresContentLink], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  })
  .from(featuresList, {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4
    }
  });

const aboutTl = gsap.timeline();

aboutTl
.from([aboutCaptionHead, aboutCaptionP, aboutCaptionSubHead], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  })
  .from(aboutCaptionList, {
    delay: -0.4,
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
    stagger: {
      amount: 0.4
    }
  })
  .from(aboutCaptionImage, {
    delay: -0.8,
    x: -100,
    skewX: 2,
    duration: 1,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.6
    }
  })
  .from(aboutCaptionA, {
    delay: -1,
    y: 100,
    skewX: 2,
    duration: 1.2,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.8
    }
  });

const videoTl = gsap.timeline();

videoTl
.from([videoHeading, videoButton], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  })

const productTl = gsap.timeline();

productTl
.from([productHead, productItems], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  })

const reviewTl = gsap.timeline();

reviewTl
.from([reviewsHeadH2, reviewsHeadP, reviewsSlider], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  })


const faqTl = gsap.timeline();

faqTl
.from([faqHeadH2, faqHeadP, faqAccordion, faqImage], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  })

const contactTl = gsap.timeline();

contactTl
.from([contactHeadH2, contactHeadP, contactForm], {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "powe3.out",
    stagger: {
      amount: 0.2
    }
  })

const footerTL = gsap.timeline();

footerTL
  .from([footerAddition, footerBg], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2
    }
  })
  .from(footerText, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: "#featureBannerGreen",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(featuresTl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#aboutBannerGreen",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(aboutTl)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#videoBannerGreen",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(videoTl)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#productBannerGreen",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(productTl)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#reviewBannerGreen",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(reviewTl)
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#faqGreenBanner",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(faqTl)
  .addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement: "#contactGreenBanner",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(contactTl)
  .addTo(controller);

const scene8 = new ScrollMagic.Scene({
  triggerElement: "#footerBannerGreen",
  triggerHook: 0,
  reverse: false
})
  // .addIndicators()
  .setTween(footerTL)
  .addTo(controller);


// Swiper Slider
var swiper = new Swiper('.review-container', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.review-pagination',
    clickable: true,
  },
 //  navigation: {
 //   nextEl: '.swiper-button-next',
 //   prevEl: '.swiper-button-prev',
 // },
 breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

var swiper = new Swiper('.swiper-header', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.header-pagination',
    clickable: true,
  },
 //  navigation: {
 //   nextEl: '.swiper-button-next',
 //   prevEl: '.swiper-button-prev',
 // },
 breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  }
});



// Accordion Frequently Answer
$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target).
  prev().
  find("i:last-child").
  toggleClass("fa-minus fa-plus");
});


// Scroll navbar fixed
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  });
});

// Active change scroll navbar
const makeNavLinksSmooth = ( ) => {
  const navLinks = document.querySelectorAll( '.nav-link' );

  for ( let n in navLinks ) {
    if ( navLinks.hasOwnProperty( n ) ) {
      navLinks[ n ].addEventListener( 'click', e => {
        e.preventDefault( );
        document.querySelector( navLinks[ n ].hash )
          .scrollIntoView( {
            behavior: "smooth"
          } );
      } );
    }
  }
}

const spyScrolling = ( ) => {
  const sections = document.querySelectorAll( '.hero-bg' );

  window.onscroll = ( ) => {
    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    for ( let s in sections )
      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
        const id = sections[ s ].id;
        document.querySelector( '.active' ).classList.remove( 'active' );
        document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
      }
  }
}

makeNavLinksSmooth( );
spyScrolling( );


// Hamburger menu Responsive
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});
