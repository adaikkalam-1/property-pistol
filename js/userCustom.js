// ===================Video  Modal =================================
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("openModalButton1");
var closeModalButton = document.getElementById("closeModalButton1");
btn1.onclick = function () {
  modal1.style.display = "block";
  modalVideo.play();
  document.body.classList.add("no-scroll");
};
closeModalButton.onclick = function () {
  modal1.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
  document.body.classList.remove("no-scroll");
};
modal1.onclick = function () {
    modal1.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    document.body.classList.remove("no-scroll");
};


var videomodal= document.getElementById("video_modal");
var videobtn = document.getElementById("videomodalbutton");
var closeModalButton = document.getElementById("closeModalButton1");
var modalVideo = document.getElementById("modalVideo");
videobtn.onclick = function () {
  videomodal.style.display = "block";
  modalVideo.play();
  document.body.classList.add("no-scroll");
};
closeModalButton.onclick = function () {
  videomodal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
  document.body.classList.remove("no-scroll");
};
videomodal.onclick = function () {
  videomodal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
    document.body.classList.remove("no-scroll");
};



// ================== brigade modal ========================

function closeModalContent(event) {
  // Close modal when clicking outside content area or on close button
    document.getElementById("brigade_getintouch").classList.remove("open")
    document.body.style.overflow = '';
    const imageElement = document.querySelector('.e-form-img');
    const titleElement = document.querySelector('.e-logo-title');
    
    // Update the image source
    imageElement.src = '';
    
    // Update the title text
    titleElement.textContent = '';
    document.body.classList.remove("no-scroll");
}
function openModalContent(imageSrc, titleText) {
  // Select the image and title elements
  const imageElement = document.querySelector('.e-form-img');
  const titleElement = document.querySelector('.e-logo-title');
  
  // Update the image source
  imageElement.src = imageSrc;
  
  // Update the title text
  titleElement.textContent = titleText;
  document.getElementById("brigade_getintouch").classList.add("open");
  document.body.style.overflow = 'hidden';
  document.body.classList.add("no-scroll");
}

// Example usage
/* updateModalContent('./images/new-image.png', 'New Project - New Developer'); */



// ================= range filter ==============

document.addEventListener('DOMContentLoaded', () => {
  const COLOR_TRACK = "#CBD5E1";
  const COLOR_RANGE = "#f58120";

  // Get the sliders and tooltips
  const fromSlider = document.querySelector('#fromSlider');
  const toSlider = document.querySelector('#toSlider');
  const fromTooltip = document.querySelector('#fromSliderTooltip');
  const toTooltip = document.querySelector('#toSliderTooltip');
  const scale = document.getElementById('scale');

  // Get min and max values from the fromSlider element
  const MIN = parseInt(fromSlider.getAttribute('min')); // scale will start from min value (first range slider)
  const MAX = parseInt(fromSlider.getAttribute('max')); // scale will end at max value (first range slider)
  const STEPS = parseInt(scale.dataset.steps); // update the data-steps attribute value to change the scale points

  function controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
      if (from > to) {
          fromSlider.value = to;
      }
      setTooltip(fromSlider, fromTooltip);
  }

  function controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
      setToggleAccessible(toSlider);
      if (from <= to) {
          toSlider.value = to;
      } else {
          toSlider.value = from;
      }
      setTooltip(toSlider, toTooltip);
  }

  function getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
      const rangeDistance = to.max - to.min;
      const fromPosition = from.value - to.min;
      const toPosition = to.value - to.min;
      controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
        ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
        ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
        ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
        ${sliderColor} 100%)`;
  }

  function setToggleAccessible(currentTarget) {
      const toSlider = document.querySelector('#toSlider');
      if (Number(currentTarget.value) <= 0) {
          toSlider.style.zIndex = 2;
      } else {
          toSlider.style.zIndex = 0;
      }
  }

  function setTooltip(slider, tooltip) {
      const value = slider.value;
      tooltip.textContent = ` ₹${value}`;
      const thumbPosition = (value - slider.min) / (slider.max - slider.min);
      const percent = thumbPosition * 100;
      const markerWidth = 20; // Width of the marker in pixels
      const offset = (((percent - 50) / 50) * markerWidth) / 2;
      tooltip.style.left = `calc(${percent}% - ${offset}px)`;
  }

  function createScale(min, max, step) {
     
      const range = max - min;
      const steps = range / step;
      for (let i = 0; i <= steps; i++) {
          const value = min + (i * step);
          const percent = (value - min) / range * 100;
          const marker = document.createElement('div');
          marker.style.left = `${percent}%`;
          marker.textContent = ` ₹${value}`;
          scale.appendChild(marker);
      }
  }

  // events
  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromTooltip, toTooltip);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, fromTooltip, toTooltip);

  // Initial load
  fillSlider(fromSlider, toSlider, COLOR_TRACK, COLOR_RANGE, toSlider);
  setToggleAccessible(toSlider);
  setTooltip(fromSlider, fromTooltip);
  setTooltip(toSlider, toTooltip);
  createScale(MIN, MAX, STEPS);
});



// ================== buy modal ==================
const buyModalOpenButton = document.getElementById('buyModalOpenButton');
const buyModalContainer = document.getElementById('buyModalContainer');
const buyModal = document.getElementById('buyModal');
const serviceButton = document.getElementById('openModalButton1')

buyModalOpenButton.addEventListener('mouseenter', () => {
    buyModalContainer.style.display = 'block';
    buyModal.style.display = 'block';
});

buyModal.addEventListener('mouseleave', () => {
    buyModalContainer.style.display = 'none';
    buyModal.style.display = 'none';
});
serviceButton.addEventListener('mouseenter',()=>{
    buyModalContainer.style.display = 'none';
    buyModal.style.display = 'none';
})

// Function to open the modal
function openModal() {
  const modal = document.getElementById("common-modal");
  document.getElementById("common-modal").classList.add("active");   
}

function closeModal(event) {
  // Close modal when clicking outside content area or on close button
  if (event.target.id === "common-modal" || event.target.classList.contains("location-close")) {
    document.getElementById("common-modal").classList.remove("active");
  }
}

// ================== contact seller modal ========================
function openContactSellerModal() {
  document.getElementById("contactseller_formcontainer").classList.add("open");
  document.body.style.overflow = 'hidden';
  document.body.classList.add("no-scroll");
}

function closeContactSellerModal(event) {
  // Close modal when clicking outside content area or on close button
    document.getElementById("contactseller_formcontainer").classList.remove("open");
    document.body.style.overflow = '';
    document.body.classList.remove("no-scroll");
}
// ================== brochure modal ========================
function openBrochureModal() {
  document.getElementById("brochure_formcontainer").classList.add("open");
  document.body.style.overflow = 'hidden';
  document.body.classList.add("no-scroll");
}

function closeBrochureModal(event) {
  // Close modal when clicking outside content area or on close button
    document.getElementById("brochure_formcontainer").classList.remove("open")
    document.body.style.overflow = '';
    document.body.classList.remove("no-scroll");
}

function toggleColor(button) {
  const path = button.querySelector('path');
  // Toggle color between red and the original color
  path.setAttribute('fill', path.getAttribute('fill') === 'red' ? '#d5d6d8' : 'red');
}
function toggleColorFooter(button) {
  const path = button.querySelector('path');
  // Toggle color between red and the original color
  path.setAttribute('fill', path.getAttribute('fill') === 'red' ? '#212529' : 'red');
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


// =========================Location =========================
const locations = {
  school: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509685!2d-122.41941528468255!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e4ba3b3fd5%3A0x1c40b65fffa0915b!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus",
    icon: "fas fa-school",
    icon: "fas fa-graduation-cap",
    content: [
      {
        name: "Sri Chaitanya Techno School",
        distance: "1.79 km",
        directionsLink: "#",
      },
    ],
  },
  hospital: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509685!2d-122.40941528468255!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e4ba3b3fd5%3A0x1c40b65fffa0915b!2sHospital!5e0!3m2!1sen!2sus",
    icon: "fa-solid fa-stethoscope",

    content: [
      { name: "Athreya Hospital", distance: "1.40 km", directionsLink: "#" },
      {
        name: " Athreya Hospital Chandpura ",
        distance: "1.40 km",
        directionsLink: "#",
      },
      {
        name: "Sri Swaranaamrutha Hospital",
        distance: "1.24 km",
        directionsLink: "#",
      },
    ],
  },
  shopping: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509685!2d-122.42941528468255!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e4ba3b3fd5%3A0x1c40b65fffa0915b!2sShopping%20Center!5e0!3m2!1sen!2sus",
    icon: "fa-solid fa-bag-shopping",

    content: [
      // { name: "Mega Mall", distance: "3.0 km", directionsLink: "#" },
    ],
  },
  park: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509685!2d-122.43941528468255!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e4ba3b3fd5%3A0x1c40b65fffa0915b!2sPark!5e0!3m2!1sen!2sus",
    icon: "fa-solid fa-tree",
    content: [
      { name: "Public Park ", distance: "1.29 km", directionsLink: "#" },
      { name: "pr walking park  ", distance: "1.11 km ", directionsLink: "#" },
    ],
  },
  restaurant: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509685!2d-122.44941528468255!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e4ba3b3fd5%3A0x1c40b65fffa0915b!2sRestaurant!5e0!3m2!1sen!2sus",
    icon: "fa-solid fa-utensils",
    content: [
      { name: "Hotel Food Zone", distance: "0.87 km", directionsLink: "#" },
      {
        name: "MBR Dum Biryani County ",
        distance: "0.59 km",
        directionsLink: "#",
      },
      { name: "Narayana Veg Treat ", distance: "0.69 km", directionsLink: "#" },
    ],
  },
  bank: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509685!2d-122.45941528468255!3d37.77492977975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581e4ba3b3fd5%3A0x1c40b65fffa0915b!2sBank!5e0!3m2!1sen!2sus",
    icon: "fas fa-university",
    content: [
      {
        name: "Federal Bank, Surya Nagar",
        distance: " 1.08 km",
        directionsLink: "#",
      },
      {
        name: "Bank of Baroda  ",
        distance: "0.16 km",
        directionsLink: "#",
      },
      { name: "Bank of Baroda ", distance: "0.53 km", directionsLink: "#" },
    ],
  },
};

const mapIframe = document.getElementById("mapIframe");
const categoryButtons = document.querySelectorAll(".btn_category");
const categoryList = document.getElementById("categoryList");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    document.querySelector(".btn_category.active").classList.remove("active");
    button.classList.add("active");

    // Get selected location data
    const locationKey = button.getAttribute("data-location");
    const locationData = locations[locationKey];

    // Update iframe source
    mapIframe.src = locationData.iframeSrc;

    // Update content list
    categoryList.innerHTML = locationData.content
      .map(
        (item) => `
          <li>
              <div class="category_detail">
                  <span class="category_name"><i class="${locationData.icon}"></i><a id="schoolLink">${item.name}</a><span class="category_distance">(${item.distance})</span></span>
                  • <span class="category_direction"><a href="${item.directionsLink}">Directions</a></span>
              </div>
              <div class="category_nearby"><a href="#">Nearby Properties</a></div>
          </li>
           <hr class="divider">
      `
      )
      .join("");
  });
});


// ====================== developer properties ====================


function showPage(pageId) {
  // Get all content sections and hide them
  const sections = document.querySelectorAll(".d_content");
  sections.forEach((section) => section.classList.remove("d_active"));

  // Show the selected page by setting it to 'active'
  const selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("d_active");

  // Get all buttons and remove the 'active' class
  const buttons = document.querySelectorAll(
    ".developer-button-container button"
  );
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // Add the 'active' class to the currently clicked button
  const activeButton = document.getElementById(pageId + "Btn");
  activeButton.classList.add("active");
}

// Set default active button and content on page load
document.addEventListener("DOMContentLoaded", function () {
  showPage("ongoing");
});
function PuneshowPage(page) {
  // Get all content divs
  const contents = document.querySelectorAll(".p_content");

  // Hide all content divs
  contents.forEach((content) => {
    content.classList.remove("p_active"); // Remove active class
  });

  // Remove the active class from all buttons
  const buttons = document.querySelectorAll(
    ".pune-developer-button-container button"
  );
  buttons.forEach((button) => {
    button.classList.remove("p_active");
  });

  // Show the selected content div
  document.getElementById(page).classList.add("p_active");

  // Add active class to the corresponding button
  document.getElementById(page + "Btn").classList.add("p_active");
}

// Set default view
document.addEventListener("DOMContentLoaded", function () {
  PuneshowPage("puneongoing"); // Show ongoing by default
});

// bengalure
function bengaloreshowPage(page) {
  // Get all content divs
  const contents = document.querySelectorAll(".b_content");

  // Hide all content divs
  contents.forEach((content) => {
    content.classList.remove("b_active"); // Remove active class
  });

  // Remove the active class from all buttons
  const buttons = document.querySelectorAll(
    ".bengalore-developer-button-container button"
  );
  buttons.forEach((button) => {
    button.classList.remove("b_active");
  });

  // Show the selected content div
  document.getElementById(page).classList.add("b_active");

  // Add active class to the corresponding button
  document.getElementById(page + "Btn").classList.add("b_active");
}

// Set default view
document.addEventListener("DOMContentLoaded", function () {
  PuneshowPage("bengaloreongoing"); // Show ongoing by default
});

// Gurugram
function gurugramshowPage(page) {
  // Get all content divs
  const contents = document.querySelectorAll(".gurugram_content");

  // Hide all content divs
  contents.forEach((content) => {
    content.classList.remove("gurugram_active"); // Remove active class
  });

  // Remove the active class from all buttons
  const buttons = document.querySelectorAll(
    ".gurugram-developer-button-container button"
  );
  buttons.forEach((button) => {
    button.classList.remove("gurugram_active");
  });

  // Show the selected content div
  document.getElementById(page).classList.add("gurugram_active");

  // Add active class to the corresponding button
  document.getElementById(page + "Btn").classList.add("gurugram_active");
}

// Set default view
document.addEventListener("DOMContentLoaded", function () {
  PuneshowPage("gurugramongoing"); // Show ongoing by default
});

// Noida
function noidashowPage(page) {
  // Get all content divs
  const contents = document.querySelectorAll(".noida_content");

  // Hide all content divs
  contents.forEach((content) => {
    content.classList.remove("noida_active"); // Remove active class
  });

  // Remove the active class from all buttons
  const buttons = document.querySelectorAll(
    ".noida-developer-button-container button"
  );
  buttons.forEach((button) => {
    button.classList.remove("noida_active");
  });

  // Show the selected content div
  document.getElementById(page).classList.add("noida_active");

  // Add active class to the corresponding button
  document.getElementById(page + "Btn").classList.add("noida_active");
}

// Set default view

document.addEventListener("DOMContentLoaded", function () {
  PuneshowPage("noidaongoing"); // Show ongoing by default
});

// Kolkata

function kolkatashowPage(page) {
  // Get all content divs
  const contents = document.querySelectorAll(".kolkata_content");

  // Hide all content divs
  contents.forEach((content) => {
    content.classList.remove("kolkata_active"); // Remove active class
  });

  // Remove the active class from all buttons
  const buttons = document.querySelectorAll(
    ".kolkata-developer-button-container button"
  );
  buttons.forEach((button) => {
    button.classList.remove("kolkata_active");
  });

  // Show the selected content div
  document.getElementById(page).classList.add("kolkata_active");

  // Add active class to the corresponding button
  document.getElementById(page + "Btn").classList.add("kolkata_active");
}

// Set default view
document.addEventListener("DOMContentLoaded", function () {
  PuneshowPage("kolkataongoing"); // Show ongoing by default
});

// Delhi
function delhishowPage(page) {
  // Get all content divs
  const contents = document.querySelectorAll(".delhi_content");

  // Hide all content divs
  contents.forEach((content) => {
    content.classList.remove("delhi_active"); // Remove active class
  });

  // Remove the active class from all buttons
  const buttons = document.querySelectorAll(
    ".delhi-developer-button-container button"
  );
  buttons.forEach((button) => {
    button.classList.remove("delhi_active");
  });

  // Show the selected content div
  document.getElementById(page).classList.add("delhi_active");

  // Add active class to the corresponding button
  document.getElementById(page + "Btn").classList.add("delhi_active");
}

// Set default view
document.addEventListener("DOMContentLoaded", function () {
  PuneshowPage("delhiongoing"); // Show ongoing by default
});

// modal contact
function openModalContact(title) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("contactModal").style.display = "block";
  document.body.classList.add("no-scroll");
}

function closeModalContact() {
  document.getElementById("contactModal").style.display = "none";
  document.body.classList.remove("no-scroll");
}

// Close modal if clicked outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};





