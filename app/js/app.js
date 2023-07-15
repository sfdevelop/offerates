$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".header__box").addClass("open");
    $("body").addClass("lock");
  });

  $(".header__box-close").on("click", function () {
    $(".header__box").removeClass("open");
    $("body").removeClass("lock");
  });
  
  $(".currency").select2({
    minimumResultsForSearch: -1
  });
  $(".language").select2({
    minimumResultsForSearch: -1
  });

  $(".country").select2({

  });

  $(".type").select2({

    placeholder: "Категория оффера",
  });

  $(".search").select2({
    // multiple: true
    // placeholder: "Select a state",
  });

  $('.offers__bottom-like').on('click', function () {
    $(this).toggleClass('active');
  });



});