function changeImage(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute("src", fileName);
  }
  let slideIndex = 0;
  let slides = document.querySelector('.slides');
  let images = document.querySelectorAll('.slides img');
  let dots = document.querySelectorAll('.dot');
  let totalSlides = images.length;
  
  // Next/previous controls
  document.querySelector('.next').addEventListener('click', () => {
      showSlides(++slideIndex);
  });
  
  document.querySelector('.prev').addEventListener('click', () => {
      showSlides(--slideIndex);
  });
  
  // Thumbnail image controls
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          showSlides(slideIndex = index);
      });
  });
  
  // Function to show slides
  function showSlides(index) {
      if (index >= totalSlides) slideIndex = 0;
      if (index < 0) slideIndex = totalSlides - 1;
  
      slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
  }
  
  // Auto slide
  setInterval(() => {
      showSlides(++slideIndex);
  }, 5000); // Change image every 3 seconds
  
  // Initial slide setup
  showSlides(slideIndex);
  
  document.getElementById("year").textContent = new Date().getFullYear();