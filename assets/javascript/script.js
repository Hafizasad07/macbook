jQuery(".carousel0").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    /* use rewind if you don't want loop */
    margin: 0, 
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    items: 1,
  });

$( ".carousel0 .owl-prev").html('<img src="assets/icons/left-arrow.svg" alt="">');
$( ".carousel0 .owl-next").html('<img src="assets/icons/right-arrow.svg" alt="">');

$("#form-message").hide();
$("#contact-form").submit(function(e) {
    e.preventDefault();
    var form = $(this);
    $.ajax({
        url: "assets/contact/contact.php",
        method: "POST",
        data: form.serialize(),
        success: function(result){
            if (result == "The email massage was sent.") {
                $("#form-message").show();
                $("#contact-form")[0].reset();
                setTimeout(() => {
                    $("#form-message").hide();
                }, 10000);
            }
        }
    });
})