const createSlideshow = (element, durationPerSlide) => {
    let slideIndex = 0;
    let timeoutId = null; // Holds the current timeout ID
    const slides = $(element).find('.slides');

    const cycleSlides = () => {
        if (timeoutId) clearTimeout(timeoutId); // Clear the existing timeout if there is one
        const currentSlide = slides.eq(slideIndex);
        slides.not(currentSlide).removeClass('current').css('opacity', 0);
        currentSlide.addClass('current');
        currentSlide.css('opacity', 1);
        slideIndex = (slideIndex + 1) % slides.length; // Increment or loop around
        timeoutId = setTimeout(cycleSlides, durationPerSlide); // Reset the timeout
    };

    $(element).on('click', () => {
        cycleSlides(); // Advance to the next slide on click
    });

    cycleSlides(); // Initialize the slideshow
};

$(document).ready(() => {
    createSlideshow("#comicSlideshow", 3000);
    createSlideshow("#colonyShow", 3500);
    createSlideshow("#dailyShow", 2500);
});