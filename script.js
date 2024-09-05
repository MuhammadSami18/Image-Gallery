// Get the modal
var modal = document.getElementById("myModal");

// Get the modal image and caption text
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images from the gallery
var images = document.querySelectorAll(".gallery img, .gallery2 img");

// Track the current image index
var currentIndex = 0;

// Loop through images and add click event
images.forEach((img, index) => {
  img.addEventListener("click", function () {
    currentIndex = index;
    openModal();
  });
});

// Function to open the modal and display the image
function openModal() {
  modal.style.display = "block";
  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when user clicks outside of the image
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Next/previous controls
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
  openModal();
});

prev.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image
  openModal();
});
