// JS file for todoList.html

//check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});


//click X to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove(); //this refers to the <li>, not the <span> element
  });
  //stop the action from bubbling
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13) {
    //use the val() method to grab the text entered in the input box
    var todoText = $(this).val();
    //empty the input field after pressing enter
    $(this).val("");
    //create a new <li> and add to <ul>
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
  }
});

//add a click listener on the FontAwesome plus icon
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
