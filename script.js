$(document).ready(function () {

  // =============================
  // Smooth scroll
  // =============================
  $('a.nav-link').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 800);
  });

  // =============================
  // Back to top button
  // =============================
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

  // =============================
  // EMAILJS INITIALIZATION
  // =============================
  (function () {
    emailjs.init("WEm4jFFGVyUem7_OD
"); // <-- replace
  })();

  // =============================
  // Contact Form Submit
  // =============================
  $('#contactForm').on('submit', function (e) {

    e.preventDefault();

    const email = $(this).find('input[type="email"]').val();

    // Simple validation
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    const status = $('#formStatus');
    status.text("Sending message...");

    emailjs.sendForm(
      "service_8c6sypt",   // <-- replace
      "template_avcvlac",  // <-- replace
      this
    ).then(function () {

      status.text("✅ Message sent successfully! I'll get back to you soon.");
      $('#contactForm')[0].reset();

    }, function (error) {

      status.text("❌ Failed to send message. Please try again.");
      console.error(error);
    });

  });

});

