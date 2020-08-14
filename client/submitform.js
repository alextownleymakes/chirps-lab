$(document).ready(function(){
  console.log("test")
    $("#getChirps").click(function(){
      $.get("/api", function(data, status){
        $("#displayChirps").html("test");
      });
    });
  });

              // fetch('/api/chirps/', {
            //     method: 'post',
            //     headers: {
            //         'Accept': 'application/json, text/plain, */*',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ user: "Joe Rogan", chirp: "ienfiwenfnwrklfnrf" })
            // }).then(res => res.json())
            //     .then(res => console.log(res));