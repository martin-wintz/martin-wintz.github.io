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

    // Event listener for thumbnail clicks
    $('.thumbnail-gallery img').on('click', function() {
        // Get the number from the ID of the clicked thumbnail
        var num = this.id.split('_')[1];

        // Remove "current" class from all gallery images
        $('.gallery-display img').removeClass('current');

        // Add "current" class to the corresponding gallery image
        $('#sample_' + num).addClass('current');
    });

    // Check the scroll position and toggle button visibility
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) { // Shows the button after 200px of scroll
            $('#returnToTop').fadeIn();
        } else {
            $('#returnToTop').fadeOut();
        }
    });

    // Smooth scroll to top on click
    $('#returnToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow'); // Smooth scroll to the top of the document
        return false;
    });
});