$(document).ready(function () {

  console.log("JS Loaded Successfully");

  // =============================
  // Smooth Scroll
  // =============================
  $('a.nav-link').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 800);
  });

  // =============================
  // Back To Top Button
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

});

// =============================
// EMAILJS INITIALIZATION
// =============================
(function () {
  emailjs.init("WEm4jFFGVyUem7_OD"); // <-- replace with your Public Key
})();


// =============================
// CONTACT FORM SUBMIT (WORKING VERSION)
// =============================
document.getElementById("contactForm")
.addEventListener("submit", function (e) {

  e.preventDefault(); // stops page refresh

  const status = document.getElementById("formStatus");
  status.innerText = "Sending message...";

  emailjs.sendForm(
    "service_8c6sypt",   // <-- replace
    "template_avcvlac",  // <-- replace
    this
  )
  .then(function () {

    status.innerText =
      "✅ Message sent successfully! I'll get back to you soon.";
    document.getElementById("contactForm").reset();

  })
  .catch(function (error) {

    status.innerText =
      "❌ Failed to send message. Please try again.";
    console.error("EmailJS Error:", error);
  });

});
