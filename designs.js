// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
   event.preventDefault();
   var height, width;
   height = $("#inputHeight").val();
   width = $("#inputWeight").val();

   makeGrid(height, width);
});

function makeGrid(a, b) {
    $('tr').remove();
   for(var m = 1; m <= a; m++){
     $("#pixelCanvas").append("<tr></tr>");

       for(var n = 1; n <= b; n++){
         $("tr").filter(':last').append("<td></td>");
       }
   }
// add the color here!
    $('td').click(function addColor() {
     var color = $("#colorPicker").val();

       if($(this).attr("style")){
       $(this).removeAttr("style");
       } else {
       $(this).attr("style", "background-color: " + color);
       }
    });

}
