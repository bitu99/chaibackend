var menuBtn = document.querySelector(".ri-menu-line");
var navpart3 = document.querySelector(".nav-part3");
var navpart2 = document.querySelector(".nav-part2");
var cancelBtn = document.querySelector(".ri-close-fill");
var intro = document.querySelector(".intro");
var sec1_img = document.querySelector(".sec1-img");
var icons = document.querySelector("#icons2");

var isMenuOpen = false; // Use a variable to track the menu's open/close state

menuBtn.addEventListener("click", toggle);
cancelBtn.addEventListener("click", toggleOff);

function toggle() {
  if (!isMenuOpen) { // If the menu is closed, open it
    menuBtn.style.display = "none";
    cancelBtn.style.display = "block";
    navpart2.style.display = "none";
    
    navpart3.style.width = "50vw";
    intro.style.opacity = "0.3";
    sec1_img.style.opacity = "0.3";
    icons.style.opacity = "0.3";

    isMenuOpen = true; // Update the state
  } else { // If the menu is open, close it
    menuBtn.style.display = "block";
  }
}

function toggleOff() {
  if (isMenuOpen) { // If the menu is open, close it
    cancelBtn.style.display = "none";
    menuBtn.style.display = "block";
    navpart3.style.width = "0";
    intro.style.opacity = "1";
    sec1_img.style.opacity = "1";
    icons.style.opacity = "1";
    navpart3.style.flexDirection = "column";

    isMenuOpen = false; // Update the state
  } else { // If the menu is closed, open it
    cancelBtn.style.display = "block";
  }
}


// Initialize Email.js with your User ID
emailjs.init("_KuqdigLOlM1Hj2zQ"); // Replace with your actual User ID

function showModal() {
  document.getElementById('custom-modal').style.display = 'block';

  // Automatically close the modal after 3 seconds (adjust as needed)
  setTimeout(function() {
      closeModal();
  }, 3000);
}
function closeModal() {
  document.getElementById('custom-modal').style.display = 'none';
}

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email using your Service ID and Template ID
    emailjs.send("service_4xaujkf", "template_gbk3vfh", {
        name: name,
        email: email,
        message: message
    }).then(function(response) {
      showModal();
    }, function(error) {
        alert("Email could not be sent. Please try again later.");
    });
});

document.getElementById('close-modal').addEventListener('click', function() {
  closeModal();
});
