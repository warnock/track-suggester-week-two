$(document).ready(function(){
  $("#trackerForm").submit(function(event){
    var firstName = $("input#firstName").val();
    var codingTrack = $("input:radio[name=codingTrack]:checked").val();

    $(".firstName").text(firstName);

    if (codingTrack === "1"){
      $("#javaAndroidTrack").show();
    } else if (codingTrack === "2") {
      $("#cssDesignTrack").show();
    } else if (codingTrack === "3") {
      $("#phpDrupalTrack").show();
    }

    console.log(codingTrack)
    event.preventDefault();
  });
});
