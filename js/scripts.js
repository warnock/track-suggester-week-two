$(document).ready(function(){
  $("#trackerForm").submit(function(event){
    var firstName = $("input#firstName").val();
    var firstName = firstName.toUpperCase();
    var codingTrack = $("input:radio[name=codingTrack]:checked").val();
    var city = $("input#city").val();

    $(".firstName").text(firstName);
    $(".city").text(city);

    if (codingTrack === "1", "2","3") {
      $("#pleaseSelect").show();
      $("#cssDesignTrack").hide();
      $("#phpDrupalTrack").hide();
      $("#javaAndroidTrack").hide();
    }

    if (codingTrack === "1"){
      $("#javaAndroidTrack").show();
      $("#cssDesignTrack").hide();
      $("#phpDrupalTrack").hide();
      $("#pleaseSelect").hide();
    } else if (codingTrack === "2") {
      $("#cssDesignTrack").show();
      $("#javaAndroidTrack").hide();
      $("#phpDrupalTrack").hide();
      $("#pleaseSelect").hide();
    } else if (codingTrack === "3") {
      $("#phpDrupalTrack").show();
      $("#cssDesignTrack").hide();
      $("#javaAndroidTrack").hide();
      $("#pleaseSelect").hide();
    }

    event.preventDefault();
  });

  $(".btn").click(function() {
    $("#phpDrupalTrack").fadeIn();
    $("#cssDesignTrack").fadeIn();
    $("#javaAndroidTrack").fadeIn();
    $("#pleaseSelect").fadeIn();
  });
});
