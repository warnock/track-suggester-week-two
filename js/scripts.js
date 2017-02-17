$(document).ready(function(){
  $("#trackerForm").submit(function(event){
    var firstName = $("input#firstName").val();

    $(".firstName").text(firstName);


    $("#cssDesignTrack").show();
    event.preventDefault();
  });
});
