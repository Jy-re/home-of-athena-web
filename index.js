document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow-container');
    let currentSlide = 0;    

    function showSlide(n) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    document.querySelector('.slide-prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.slide-next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Show the first slide
    showSlide(currentSlide);

// ============================== FOR REVIEWS ========================================================

    const showMoreBtn = document.getElementById("showMoreBtn");
    const hiddenReviews = document.querySelectorAll(".hidden");

    showMoreBtn.addEventListener("click", function() {
        hiddenReviews.forEach(review => {
            review.classList.toggle("hidden");
        });

        if (showMoreBtn.textContent === "Show More Reviews") {
            showMoreBtn.textContent = "Show Less Reviews";
        } else {
            showMoreBtn.textContent = "Show More Reviews";
        }
    });
});
