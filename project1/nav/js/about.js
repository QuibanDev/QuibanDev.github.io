$(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 80) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  });

  $(document).on("mousemove", function (e) {
    var cursor = $(".cursor");
    cursor.attr(
      "style",
      "top:" + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;"
    );
  });