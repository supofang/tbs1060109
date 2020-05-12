$(document).ready(function ($) {
  $out();
  setInterval(function () {
    $out();
  }, 5000)


  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("canvas.snow").let_it_snow({
      windPower: 0,
      speed: -1,
      color: "#ffffff",
      size: 1,
      count: 80,
      //        image: "images/petal.png",
      opacity: 0
    });

  } else {
    $("canvas.snow").let_it_snow({
      windPower: 0,
      speed: -1,
      color: "#ffffff",
      size: .5,
      count: 40,
      //        image: "images/petal.png",
      opacity: 0
    });

  }

  function $out() {
    $('h1.tit div').removeClass('out').each(function (index) {
      $(this).delay(index * 100).animate({
        'background': 'transparent'
      }, 0, function () {
        $(this).addClass('out')
      })
    })
  }

  $('.card-option').on("click", function (e) {
    e.preventDefault();
    $(this).addClass('flipOutY').hide().siblings('.card-option').addClass('flipOutY').removeClass('flipInY').hide();
    $(this).next('.card-result').addClass('flipInY').removeClass('flipOutY').show();
    //    window.location.reload();
    $(window).resize();
  });

  $('.card-close').on("click", function (e) {
    e.preventDefault();
    $(this).parent('.card-result').addClass('flipOutY').removeClass('flipInY').hide();
    $(this).parent().siblings('.card-option').addClass('flipInY').removeClass('flipOutY').show();
    $(window).resize();
  });
});
