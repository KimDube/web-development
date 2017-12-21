function createGrid(dim) {
  var $row = $("<div />", {
      class: 'row'
    });
    var $square = $("<div />", {
      class: 'square'
    });
  
    //add columns to intial row
    for (var i = 0; i < dim; i++) {
        $row.append($square.clone());
    }
    //copy row appropriate num times
    for (var i = 0; i < dim; i++) {
        $("#container").append($row.clone());
    }
    
    // fit rows to container
    $(".square").width(640/dim);
    $(".square").height(640/dim);
}

function clearScreen(){
    $(".square").remove();
};  

function newSize(){
  var new_dim = prompt("How many cells would you like per side? Choose an integer between 2 and 64.")
  if (new_dim > 64) {
  	alert("You choose an integer greater than 64. The grid length is being set to 64.");
  	new_dim = 64;
  }
  clearScreen();
  createGrid(new_dim);
  $(".square").mouseover(function() {
        $(this).css("background-color", "black");
        });
  return new_dim;
}

function getRainbow() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

$(document).ready(function () {
    var n = 16;
    createGrid(n);
  
    // Change square colour to black upon mouse over
    $(".square").mouseover(function() {
        $(this).css("background-color", "black");
        });
    
    // If Clear Screen is clicked
    $(".clearScreen").click(function() {
        clearScreen();createGrid(n);$(".square").mouseover(function() {
        $(this).css("background-color", "black");
        });});
  
      $(".newSize").click(function() {
        n = newSize();});
  
      // If rainbow is clicked
      $(".rainbow").click(function() {
        $(".square").mouseover(function() {
        $(this).css("background-color", getRainbow());
        });});
  
});