import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "./css/style.css";
import "bootstrap";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/js/all.js";

$(function() {
    $('[data-toggle="tooltip"]').tooltip()

    $(".add-to-cart-btn").click(function() {
        alert("تم إضافة المنتج الى العربة");
    });

    $("#copyright").text(' جميع حقوق محفوظة ' + new Date().getFullYear());

    $(".product-option input[type='radio']").change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });
    // add background colors
    $(".color-option input[value='orange']").parents('.color-option').css('background-color', '#ffaf32');
    $(".color-option input[value='red']").parents('.color-option').css('background-color', '#ff322c');
    $(".color-option input[value='purple']").parents('.color-option').css('background-color', '#ac38b6');
    $(".color-option input[value='blue']").parents('.color-option').css('background-color', '#00c1ce');
});