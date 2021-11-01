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
    })
});