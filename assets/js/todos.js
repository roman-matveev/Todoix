$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var newTodoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});
