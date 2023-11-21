document.addEventListener('DOMContentLoaded', function () {
  var loadingBar = document.getElementById('loading-bar');
  var scrollToTopButton = document.getElementById('scroll-to-top');

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

// Animate progress bars and blog posts on scroll
document.addEventListener('scroll', function () {
  animateProgressBar();
  animateBlogPosts();
});

function animateProgressBar() {
  var skillsTop = document.getElementById('skills').offsetTop - window.innerHeight + 200;

  if (window.scrollY > skillsTop) {
      document.querySelectorAll('.progress-bar').forEach(function (progressBar) {
          progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
      });
  }
}

function animateBlogPosts() {
  var blogTop = document.getElementById('blog').offsetTop - window.innerHeight + 200;

  if (window.scrollY > blogTop) {
      document.querySelectorAll('.blog-post').forEach(function (blogPost, index) {
          setTimeout(function () {
              blogPost.style.opacity = '1';
          }, 200 * index);
      });
  }
}
