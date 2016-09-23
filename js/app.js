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

  $("#Pizza").click(function(){
    var Pizza = "recipe.html";
    window.location = Pizza;
  });

	var doc = document.documentElement;
	doc.setAttribute('data-useragent', "IE");
}









$(document).ready(function(){
  Config();
});
