"use strict";

//  ============= navbar carousel =======================
$(document).ready(function () {
  var carouselElements = $("[data-carousel]");
  var carousels = {};

  carouselElements.each(function (index) {
      var carousel = {
          element: $(this),
          leftArrow: $(this).find("[data-scroll-left]"),
          rightArrow: $(this).find("[data-scroll-right]"),
          scroller: $(this).find("[data-scroller]"),
      };

      carousels[index] = carousel;

      // Arrow click functionality
      carousel.leftArrow.click(function (e) {
          e.preventDefault();
          var scrollPosition = carousel.scroller.scrollLeft();
          var interestWidth = $(".interest").outerWidth() + 18; // Adjust based on your layout
          carousel.scroller.animate({ scrollLeft: scrollPosition - interestWidth }, 600, "swing");
      });

      carousel.rightArrow.click(function (e) {
          e.preventDefault();
          var scrollPosition = carousel.scroller.scrollLeft();
          var interestWidth = $(".interest").outerWidth() + 18; // Adjust based on your layout
          carousel.scroller.animate({ scrollLeft: scrollPosition + interestWidth }, 600, "swing");
      });
  });

  // Smooth scroll to section when a navbar item is clicked
  $(".interest").on("click", function (e) {
    e.preventDefault(); // Prevent the default anchor behavior

    // Get the target section's ID from the anchor tag's href
    var targetId = $(this).attr("href");
    var targetElement = $(targetId);

    if (targetElement.length) {
        // Calculate the position to scroll to (subtracting 30px for the offset)
        var scrollPosition = targetElement.offset().top - 170;

        // Scroll the page smoothly to the calculated position
        $("html, body").animate({
            scrollTop: scrollPosition
        }, 600, function () {
          // After scrolling, update the carousel scroll position
          updateCarouselScroll($(e.target)); // Use e.target for the clicked link
      }); // Adjust the duration (600ms) as needed
    }
});
  

  function updateCarouselScroll(activeLink) {
    var carousel = activeLink.closest("[data-carousel]").find("[data-scroller]");
    var scrollPosition = activeLink.position().left + carousel.scrollLeft() - (carousel.width() / 2) + (activeLink.outerWidth() / 2);

    // Animate the horizontal scrolling of the carousel
    carousel.animate({
        scrollLeft: scrollPosition
    }, 600);
  }

  // Update active link on scroll
  $(window).on("scroll", function () {
      var scrollPos = $(document).scrollTop();
      $(".interest").each(function () {
          var target = $(this).attr("href");
          var section = $(target);
          if (section.position().top-170 <= scrollPos && section.position().top+ section.height() > scrollPos) {
              $(".interest").removeClass("active");
              $(this).addClass("active");
          }
      });
    });

    function adjustCarouselScroll() {
      var navbarContentWrapper = $(".navbar_content");
  
      // Check if navbarContentWrapper is scrollable
      if (navbarContentWrapper.length) {
          // Total scrollable height of the content (not just the viewport)
          var totalHeight = navbarContentWrapper[0].scrollHeight;
  
          // Current scroll position (how much the user has scrolled)
          var currentScroll = navbarContentWrapper.scrollTop();
  
          // 50% of the total scrollable height
          var halfHeight = totalHeight / 2;
  
          // Log values for debugging
          console.log("Total scroll height:", totalHeight);
          console.log("Current scroll position:", currentScroll);
          console.log("50% of total height:", halfHeight);
  
          // If the user has scrolled past 50% of the content
          if (currentScroll > halfHeight) {
              var carouselScroller = $("[data-scroller]");
              var scrollPosition = carouselScroller.scrollLeft();
              var interestWidth = $(".interest").outerWidth(true); // width including margin
  
              // Trigger carousel scroll
              carouselScroller.animate({ scrollLeft: scrollPosition + interestWidth }, 600, "swing");
          }
      } else {
          console.log("No scrollable content found");
      }
  }
  
  // Listen for scroll events in the navbar_content_wrapper
  $(".navbar_content_wrapper").on("scroll", function () {
      adjustCarouselScroll();
  });
  
  // Initial check
  adjustCarouselScroll();
});



// var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
//  === accordian ======

const accordionButtons = document.querySelectorAll(".acc-btn");
console.log("accordionButtons", accordionButtons);
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true" || false;
    console.log("expanded", expanded);
    // Toggle aria-expanded
    button.setAttribute("aria-expanded", !expanded);
    // Toggle the icon
    const icon = button.querySelector(".icon");
    console.log("icon", icon);
    if (!expanded) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});


var featuredProjects = new Swiper(".mySwiper", {
   /*  pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    }, */
    loop: false,
   /*  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }, */
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: ".mySwiper-next",
      prevEl: ".mySwiper-prev",
    },
  });
  
  var projectImages = new Swiper(".project_images", {
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
       },
    speed: 400,
    spaceBetween: 100,
    initialSlide: 0,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    autoplayStopOnLast: false,
    pagination: '.swiper-pagination',
    paginationType: "bullets",
    effect: 'fade',
    centeredSlides: true,
    slidesOffsetBefore: 0,
    grabCursor: true,
    navigation: {
        nextEl: ".projectimage-next",
        prevEl: ".projectimage-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var RecommendProperty = new Swiper(".recommend_property_swiper", {
      /*  pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
       }, */
       loop: false,
      /*  autoplay: {
         delay: 3000,
         disableOnInteraction: false,
       }, */
       spaceBetween: 10,
       breakpoints: {
        300:{
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
         992: {
           slidesPerView: 2,
         },
         1024: {
           slidesPerView: 3,
         },
       },
     });
     

    var recommendPropertyImages = new Swiper(".recommendproperty_images", {
      autoplay: {
        delay: 5000, // Set delay for autoplay
        stopOnLastSlide: false,
      },
      speed: 1000,
      spaceBetween: 100,
      initialSlide: 0,
      autoHeight: false,
      direction: 'horizontal',
      loop: true,
      autoplayStopOnLast: false,
      pagination: '.swiper-pagination',
      paginationType: "bullets",
      effect: 'fade',
      centeredSlides: true,
      slidesOffsetBefore: 0,
      grabCursor: true,
      navigation: {
          nextEl: ".recommendimage-next",
          prevEl: ".recommendimage-prev",
        },
      });

    var newProjectSwiper = new Swiper(".newprojects_swiper", {
       /* pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
       }, */
       loop: false,
       autoplay: {
         delay: 3000,
         disableOnInteraction: false,
       },
       spaceBetween: 10,
       breakpoints: {
        300:{
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
         992: {
           slidesPerView: 2,
         },
         1024: {
           slidesPerView: 3,
         },
       },
     });
     
     var newProjectImages = new Swiper(".newproject_images", {
      speed: 1000,
      spaceBetween: 100,
      initialSlide: 0,
      autoHeight: false,
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000, // Set delay for autoplay
        stopOnLastSlide: false,
      },
      autoplayStopOnLast: false,
      pagination: '.swiper-pagination',
      paginationType: "bullets",
      effect: 'fade',
      centeredSlides: true,
      slidesOffsetBefore: 0,
      grabCursor: true,
      navigation: {
          nextEl: ".newprojectimage-next",
          prevEl: ".newprojectimage-prev",
        },
      });

     var addedPropertySwiper = new Swiper(".added_property_swiper", {
      /*  pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
       }, */
       loop: false,
      /*  autoplay: {
         delay: 3000,
         disableOnInteraction: false,
       }, */
       spaceBetween: 10,
       breakpoints: {
        300:{
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
         992: {
           slidesPerView: 2,
         },
         1024: {
           slidesPerView: 3,
         },
       },
       navigation: {
         nextEl: ".addedProperty-next",
         prevEl: ".addedProperty-prev",
       },
     });

     var addedPropertyImages = new Swiper(".addedproperty_images", {
      speed: 1000,
      spaceBetween: 100,
      initialSlide: 0,
      autoHeight: false,
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000, // Set delay for autoplay
        stopOnLastSlide: false,
      },
      autoplayStopOnLast: false,
      pagination: '.swiper-pagination',
      paginationType: "bullets",
      effect: 'fade',
      centeredSlides: true,
      slidesOffsetBefore: 0,
      grabCursor: true,
      navigation: {
          nextEl: ".addedPropertyImage-next",
          prevEl: ".addedPropertyImage-prev",
        },
      });
     
      var toplocalitiesSwiper = new Swiper(".localities_swiper", {
        loop: false,
        spaceBetween: 10,
        breakpoints: {
          300:{
            slidesPerView: 1,
          },
          490:{
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
        navigation: {
          nextEl: ".toplocalities-next",
          prevEl: ".toplocalities-prev",
        },
      });

      var topdeveloperSwiper = new Swiper(".topdeveloper_swiper", {
        loop: false,
        spaceBetween: 10,
        breakpoints: {
          300:{
            slidesPerView: 1,
          },
          470:{
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        },
        navigation: {
          nextEl: ".topdeveloper-next",
          prevEl: ".topdeveloper-prev",
        },
      });

      var happyClientSwiper = new Swiper(".happyclient_swiper", {
        spaceBetween: 10,
        breakpoints: {
          300:{
            slidesPerView: 1,
          },
          791: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: ".happyclient-next",
          prevEl: ".happyclient-prev",
        },
      });
     






     /************************** project view *******************/ 

    
      /*************** bank offer  **********************/
     var bankOfferSwiper= new Swiper(".bank_offer_swiper", {
      /*  pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
       }, */
       loop: false,
       /* autoplay: {
         delay: 3000,
         disableOnInteraction: false,
       }, */
       slidesPerView: 3,
       spaceBetween: 30,
       breakpoints: {
        400:{
          slidesPerView: 2,
        },
         640: {
           slidesPerView: 3,
         },
         992: {
           slidesPerView: 3,
         },
         1024: {
           slidesPerView: 3,
         },
       },
       navigation: {
        nextEl: ".bankoffer-next",
        prevEl: ".bankoffer-prev",
      },
     });

            /************************* nearby project ****************/
 var nearbyProjectSwiper= new Swiper(".nearbyproject_swiper", {
  loop: false,
  spaceBetween: 10,
  breakpoints: {
    400:{
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  navigation: {
   nextEl: ".nearbyproject-next",
   prevEl: ".nearbyproject-prev",
 },
});  


var nearbyProjectImages = new Swiper(".nearbyproject_images", {
  speed: 1000,
  spaceBetween: 100,
  initialSlide: 0,
  autoHeight: false,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000, // Set delay for autoplay
    stopOnLastSlide: false,
  },
  autoplayStopOnLast: false,
  pagination: '.swiper-pagination',
  paginationType: "bullets",
  effect: 'fade',
  centeredSlides: true,
  slidesOffsetBefore: 0,
  grabCursor: true,
  navigation: {
      nextEl: ".nearbyproject_image-next",
      prevEl: ".nearbyproject_image-prev",
    },
  });




var similarProjectSwiper= new Swiper(".similarproject_swiper", {
  loop: false,
  spaceBetween: 10,
  breakpoints: {
    400:{
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  navigation: {
   nextEl: ".similarproject-next",
   prevEl: ".similarproject-prev",
 },
});  


var similarProjectImages = new Swiper(".similarproject_images", {
  speed: 1000,
  spaceBetween: 100,
  initialSlide: 0,
  autoHeight: false,
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000, // Set delay for autoplay
    stopOnLastSlide: false,
  },
  autoplayStopOnLast: false,
  pagination: '.swiper-pagination',
  paginationType: "bullets",
  effect: 'fade',
  centeredSlides: true,
  slidesOffsetBefore: 0,
  grabCursor: true,
  navigation: {
      nextEl: ".similarprojectimage-next",
      prevEl: ".similarprojectimage-prev",
    },
  });

  var nearbyPropertySwiper= new Swiper(".nearbyproperty_swiper", {
    loop: false,
    spaceBetween: 10,
    breakpoints: {
      400:{
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });  
  
     
  //  ================ properties ================
       
  // devloper page swiper
  var devloperSwiper = new Swiper(".developer_swiper", {
    /* pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    }, */
    loop: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var developerimage = new Swiper(".developer_swiper_image", {
    speed: 1000,
    spaceBetween: 100,
    initialSlide: 0,
    autoHeight: false,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000, // Set delay for autoplay
      stopOnLastSlide: false,
    },
    autoplayStopOnLast: false,
    pagination: '.swiper-pagination',
    paginationType: "bullets",
    effect: 'fade',
    centeredSlides: true,
    slidesOffsetBefore: 0,
    grabCursor: true,
    navigation: {
        nextEl: ".developer-next",
        prevEl: ".developer-prev",
      },
    });







     /************************* location button *****************/ 
     document.addEventListener("DOMContentLoaded", function() {
      const buttons = document.querySelectorAll('.btn_category');
    
      // Add 'active' to the first button initially
      buttons[0].classList.add('active');
    
      // Add event listener to each button
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove 'active' class from all buttons
          buttons.forEach(btn => btn.classList.remove('active'));
          
          // Add 'active' class to the clicked button
          this.classList.add('active');
        });
      });
    });


    // ===================Open City===================
function openCity(evt, cityName) {
  var buttons = document.querySelectorAll(".con-btn-container .con-btn");
  var contents = document.querySelectorAll(".tabcontent");

  buttons.forEach((button) => {
    button.classList.remove("activebtn");
    button.classList.add("inactivebtn");
  });

  // Add active class to the clicked button
  evt.currentTarget.classList.add("activebtn");
  evt.currentTarget.classList.remove("inactivebtn");

  // Hide all tab content
  contents.forEach((content) => {
    content.classList.remove("active-content");
    content.style.display = "none";
  });

  // Show the selected tab content
  var activeContent = document.getElementById(cityName);
  activeContent.classList.add("active-content");
  activeContent.style.display = "block";
}

// =====================openBHK======================
function openBHK(event, bhkName) {
  const bhkContents = document.querySelectorAll(".bhk-content");
  bhkContents.forEach((content) => {
    content.style.display = "none";
  });

  const tabLinks = document.querySelectorAll(".tablinks");
  tabLinks.forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(bhkName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// One BHK
function oneBHk(event, contentId) {
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  const selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }

  const buttons = document.querySelectorAll(".one-bhk-content");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}

// Set default active tabs when page loads
window.onload = function () {
  console.log("hi");
};



/******************* navbar *****************/
document.querySelectorAll('.button_nav').forEach(button => {
  button.addEventListener('click', function() {
    const direction = this.getAttribute('data-direction');
    const navbar = document.getElementById('scrollable-navbar');
    
    const scrollAmount = 200; // Adjust the scroll amount as needed
    
    if (direction === 'left') {
      navbar.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      navbar.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  });
});

console.log("hello world")


//  ========== city modal ===========
var citymodal = document.getElementById("cityModal");
var cityopenbtn = document.getElementById("cityOpenBtn");
var cityclose = document.getElementById("cityclosemodal");

// // Function to open the modal with transition
cityopenbtn.onclick = function () {
  citymodal.style.display = "block";
  document.body.classList.add('no-scroll')
};

// Function to close the modal with transition
cityclose.onclick = function () {
  citymodal.style.display = "none";
  document.body.classList.add('no-scroll')
};

// // Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == citymodal) {
    citymodal.style.display = "none";
  }
};

// ============== filter modal ======================
var filtermodal = document.getElementById("bannerfilter_modalcontainer");
var filterbtn = document.getElementById("bannerfilterbutton");
var filterclose = document.getElementById("filterclosemodal");
filterbtn.onclick = function () {
  filtermodal.style.display = "block";
  document.body.classList.add("no-scroll");
};
filterclose.onclick = function () {
  filtermodal.style.display = "none"; // Matches the duration of the CSS transition
  document.body.classList.remove("no-scroll");
};
window.onclick = function (event) {
  if (event.target == filtermodal) {
    filtermodal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
}


