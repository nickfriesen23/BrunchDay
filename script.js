$(document).ready(function() {
    // Smooth scrolling for recipe photos
    $('.recipe-photo').click(function() {
        const recipeId = $(this).data('recipe');
        const targetSection = $('#' + recipeId);
        
        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top - 20
            }, 800, 'swing');
        }
    });

    // Intersection Observer for recipe sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all recipe sections
    document.querySelectorAll('.recipe').forEach(recipe => {
        observer.observe(recipe);
    });

    // Add hover animation class to recipe photos
    $('.recipe-photo').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.1)');
            $(this).find('.recipe-label').addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
            $(this).find('.recipe-label').removeClass('animate__animated animate__pulse');
        }
    );

    // Initialize with animation
    $('.recipe-photo').each(function(index) {
        $(this).css('animation-delay', `${index * 0.1}s`);
    });
});