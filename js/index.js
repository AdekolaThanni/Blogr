// On clicking product items toggler
$(".toggle-product").on("click", function () {
  // Condition to check if items display is on or not
  if ($(".item-product").css("display") == "none") {
    $(".item-product").css("display", "block");
    $(".arrow-product").css("transform", "rotate(180deg)");
    $(".toggle-product").css("border-bottom", "2px solid #fff");

    if ($(".item-company").css("display") == "block") {
      $(".item-company").css("display", "none");
      $(".arrow-company").css("transform", "rotate(0deg)");
      $(".toggle-company").css("border-bottom", "none");
    } else if ($(".item-connect").css("display") == "block") {
      $(".item-connect").css("display", "none");
      $(".arrow-connect").css("transform", "rotate(0deg)");
      $(".toggle-connect").css("border-bottom", "none");
    }
  } else {
    $(".item-product").css("display", "none");
    $(".arrow-product").css("transform", "rotateY(0deg)");
    $(".toggle-product").css("border-bottom", "none");
  }
});

// On clicking product items toggler
$(".toggle-company").on("click", function () {
  // Condition to check if items display is on or not
  if ($(".item-company").css("display") == "none") {
    $(".item-company").css("display", "block");
    $(".arrow-company").css("transform", "rotate(180deg)");
    $(".toggle-company").css("border-bottom", "2px solid #fff");

    if ($(".item-product").css("display") == "block") {
      $(".item-product").css("display", "none");
      $(".arrow-product").css("transform", "rotate(0deg)");
      $(".toggle-product").css("border-bottom", "none");
    } else if ($(".item-connect").css("display") == "block") {
      $(".item-connect").css("display", "none");
      $(".arrow-connect").css("transform", "rotate(0deg)");
      $(".toggle-connect").css("border-bottom", "none");
    }
  } else {
    $(".item-company").css("display", "none");
    $(".arrow-company").css("transform", "rotateY(0deg)");
    $(".toggle-company").css("border-bottom", "none");
  }
});

// On clicking product items toggler
$(".toggle-connect").on("click", function () {
  // Condition to check if items display is on or not
  if ($(".item-connect").css("display") == "none") {
    $(".item-connect").css("display", "block");
    $(".arrow-connect").css("transform", "rotate(180deg)");
    $(".toggle-connect").css("border-bottom", "2px solid #fff");

    if ($(".item-product").css("display") == "block") {
      $(".item-product").css("display", "none");
      $(".arrow-product").css("transform", "rotate(0deg)");
      $(".toggle-product").css("border-bottom", "none");
    } else if ($(".item-company").css("display") == "block") {
      $(".item-company").css("display", "none");
      $(".arrow-company").css("transform", "rotate(0deg)");
      $(".toggle-company").css("border-bottom", "none");
    }
  } else {
    $(".item-connect").css("display", "none");
    $(".arrow-connect").css("transform", "rotateY(0deg)");
    $(".toggle-connect").css("border-bottom", "none");
  }
});

if ($(".hamburger").css("display") == "none") {
  $(".header__top").css("display", "flex");
}

// On clicking hamburger

$(".hamburger").on("click", function () {
  if ($(".header__top").css("display") == "none") {
    $(".header__top").addClass("header__top-display-flex");
    $(".hamburger").attr("src", "images/icon-close.svg");
  } else {
    $(".header__top").removeClass("header__top-display-flex");
    $(".hamburger").attr("src", "images/icon-hamburger.svg");
  }
});
