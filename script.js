$(document).ready(function () {
  // Smooth scroll
  $('a.nav-link').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 800);
  });

  // Back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
  });

  // Form validation
  $('#contactForm').on('submit', function (e) {
    const email = $(this).find('input[type="email"]').val();
    if (!email.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
});
