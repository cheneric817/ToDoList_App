// JS file for todoList.html

//check off specific todos by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});


//click X to delete todo
$("span").click(function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove(); //this refers to the <li>, not the <span> element
  });
  event.stopPropagation();
});
