$(".nav-profile").on("click", function() {
    $("html,body").animate({ scrollTop: $('.h1-profile').offset().top });
});

$(".nav-skillSheet").on("click", function() {
    $("html,body").animate({ scrollTop: $('.h1-skillSheet').offset().top });
});

$(".nav-work").on("click", function() {
    $("html,body").animate({ scrollTop: $('.h1-work').offset().top });
});

$(".siteLink").on("click", function() {
    event.preventDefault();
    window.open($(this).attr('href'), '_blank');
})