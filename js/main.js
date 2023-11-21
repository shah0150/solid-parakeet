document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });

  var loadingBar = document.getElementById('loading-bar');
  let currentTheme = localStorage.getItem('theme');
  var scrollToTopButton = document.getElementById('scroll-to-top');

    // Apply the saved theme or default to light theme
    document.body.classList.toggle(currentTheme || 'light-theme');
    document.getElementById('theme-toggle').innerText = currentTheme === 'dark-theme' ? 'Light Theme' : 'Dark Theme';


  // Increment the width of the loading bar as the page loads
  var incrementWidth = function () {
      loadingBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 + '%';

      // Show the "Scroll to Top" button when scrolling down
      if (window.scrollY > 300) {
          scrollToTopButton.style.display = 'block';
      } else {
          scrollToTopButton.style.display = 'none';
      }
  };

  // Add an event listener to update the loading bar on scroll
  document.addEventListener('scroll', incrementWidth);

  // Delay the loading bar for 20 seconds
  setTimeout(function () {
      // Hide the loading bar when the page is fully loaded
      window.addEventListener('load', function () {
          loadingBar.style.width = '100%';
          setTimeout(function () {
              loadingBar.style.display = 'none';
          }, 300);
      });
  }, 20000);

  // Scroll to top functionality
  scrollToTopButton.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

function initMap() {
  // Replace latitude and longitude with your location
  var myLatLng = { lat: 45.3499, lng: -75.7549 };

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: myLatLng
  });

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Your Location'
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// Toggle between light and dark themes
function toggleTheme() {
    let currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    let newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    // Update the class on the body element
    document.body.classList.replace(currentTheme, newTheme);

    // Save the user's theme preference in local storage
    localStorage.setItem('theme', newTheme);

    // Update the theme toggle button text
    document.getElementById('theme-toggle').innerText = newTheme === 'dark-theme' ? 'Light Theme' : 'Dark Theme';
}

// Animate progress bars and blog posts on scroll
// document.addEventListener('scroll', function () {
//   animateProgressBar();
//   animateBlogPosts();
// });

// function animateProgressBar() {
//   var skillsTop = document.getElementById('skills').offsetTop - window.innerHeight + 200;

//   if (window.scrollY > skillsTop) {
//       document.querySelectorAll('.progress-bar').forEach(function (progressBar) {
//           progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
//       });
//   }
// }

// function animateBlogPosts() {
//   var blogTop = document.getElementById('blog').offsetTop - window.innerHeight + 200;

//   if (window.scrollY > blogTop) {
//       document.querySelectorAll('.blog-post').forEach(function (blogPost, index) {
//           setTimeout(function () {
//               blogPost.style.opacity = '1';
//           }, 200 * index);
//       });
//   }
// }

// const form = document.querySelector("form")
// const submitButton = document.querySelector("#submit")
// const scriptURL = 'https://script.google.com/macros/s/AKfycbypQzCCGdq3Ii0SHm_YI_s-REBYmFYTResfm1w2AGUJKlhIGHr6onz3s4qbig5rhlYm/exec'

window.addEventListener("load", function() {

  });
  