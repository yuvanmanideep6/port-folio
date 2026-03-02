$(document).ready(function () {

  console.log("JS Loaded Successfully");

  // Smooth Scroll
  $('a.nav-link').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 800);
  });

  // Back To Top Button
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

});

// Initialize EmailJS
(function () {
  emailjs.init("WEm4jFFGVyUem7_OD");
})();

// Contact Form Submit
document.getElementById("contactForm")
.addEventListener("submit", function (e) {

  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.innerText = "Sending message...";

  emailjs.sendForm(
    "service_8c6sypt",
    "template_avcvlac",
    this
  )
  .then(function () {
    status.innerText =
      "✅ Message sent successfully! I'll get back to you soon.";
    document.getElementById("contactForm").reset();
  })
  .catch(function (error) {
    status.innerText =
      "❌ Failed to send message.";
    console.error(error);
  });

});
