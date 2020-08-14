$(document).ready(() => {
    console.log("test")
    // $("#getChirps").click(() => {
        $("#displayChirps").html("");
        $.get("/api/chirps")
            .then(data => {
                console.log(data)
                $.map(data,(chirp, i) => {
                    if (i !== "nextid"){
                    console.log(chirp)
                    $("#displayChirps").append('<div class="card" style="width: 30%; padding: 2%; margin: 10px; display: inline-flex; background-color: #f4f6f8; box-shadow: 5px 5px 5px #eee;"><div class="card-body"><h5 class="card-title">' + chirp.user + '</h5><h6 class="card-subtitle mb-2 text-muted">' + chirp.chirp +'</h6><div class="row"><div class="col-8"></div><div class="col-2"></div><div class="col-2 editButton" id="'+i+'" style="border: 1px solid #7ab; border-radius: 25px; background-color: #69a; font-size: 8px; color: #fff; padding: 0; text-align: center;">EDIT</div></div></div></div>')}
                })
            })
            .then(() => {
                $(".editButton").on('click',function() {
                    console.log(this.id);
                })
            })
});

() => {
    
}