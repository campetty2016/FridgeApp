function Config(){

  $(".poff").click(function(){

    $(".wrapper").addClass("blackModal");
    $("body").css("backgroundColor", "black");

});

$(".house").click(function(){
  var Home = "index.html";
  window.location = Home;
});

  $("#Fridge").click(function(){
    var Fridge = "FridgeContents.html";
    window.location = Fridge;
  });

  $("#Recipes").click(function(){
    var Recipes = "recipes.html";
    window.location = Recipes;
  });

  
}









$(document).ready(function(){
  Config();
});
