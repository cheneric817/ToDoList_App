// JS file for todoList.html

//check off specific todos by clicking
$("li").click(function() {
  $(this).toggleClass("completed");
});
