$(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 80) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  });

  
$(document).ready(function () {
    // Add a class on mouse enter in the card
    $(".card").on("mouseenter", function () {
      $(this).addClass("selected").siblings().removeClass("selected");
    });
});
  