import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "./css/style.css";
import "bootstrap";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "@fortawesome/fontawesome-free/js/all.js";

// call function when document is ready.
$(function() {
    // tooltip for cart icon
    $('[data-toggle="tooltip"]').tooltip()

    // show alert when button add to cart clicked
    $(".add-to-cart-btn").click(function() {
        alert("تم إضافة المنتج الى العربة");
    });

    // get full year
    $("#copyright").text(' جميع حقوق محفوظة ' + new Date().getFullYear());

    // change color and size product
    $(".product-option input[type='radio']").change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

    // add background colors
    $(".color-option input[value='orange']").parents('.color-option').css('background-color', '#ffaf32');
    $(".color-option input[value='red']").parents('.color-option').css('background-color', '#ff322c');
    $(".color-option input[value='purple']").parents('.color-option').css('background-color', '#ac38b6');
    $(".color-option input[value='blue']").parents('.color-option').css('background-color', '#00c1ce');

    // when quantity product change
    $('[data-product-quantity]').change(function() {

        // select new quantity
        var newQuantity = $(this).val();

        // find the line that have product info
        var parent = $(this).parents('[data-product-info]');

        // bring price of one product
        var pricePerUnit = parent.attr('data-product-price');

        // the total price of product is price of the one product multiplied by its quantity
        var totalPriceForProduct = newQuantity * pricePerUnit;

        // asgin new price into this line
        parent.find('.total-price-for-product').text(totalPriceForProduct + "$");

        // call the function
        calcTotalPrice();
    });

    // when delete button clicked
    $('[data-remove-from-cart]').click(function() {
        $(this).parents('[data-product-info]').remove();
        // call the function to update the total price
        calcTotalPrice();
    })

    // function calculate all product price.
    function calcTotalPrice() {

        var totalPriceForAllProducts = 0;

        $('[data-product-info]').each(function() {

            // get product price
            var pricePerUnit = $(this).attr('data-product-price');
            
            // get product quantity
            var quantity = $(this).find('[data-product-quantity]').val();

            // multiplied product price by its quantity
            var totalPriceProduct = pricePerUnit * quantity;

            // sum all products price to get total
            totalPriceForAllProducts = totalPriceForAllProducts + totalPriceProduct;

        });

        if (totalPriceForAllProducts === 0) {
            $('#total-price-for-all-products').text(totalPriceForAllProducts + "");
        } else {
            $('#total-price-for-all-products').text(totalPriceForAllProducts + " دولار");
        }

    }
});