$(document).ready(function(){
  console.log("test")
    $("#getChirps").click(function(){
      $.get("/api", function(data, status){
        $("#displayChirps").html("test");
      });
    });
  });
