






//interface logic
$(document).ready(function(){
  $("#trackerForm").submit(function(event){
    var firstName = $("input#firstName").val();
    var firstName = firstName.toUpperCase();
    var questionOne = parseInt($("input:radio[name=questionOne]:checked").val());
    var questionTwo = parseInt($("input:radio[name=questionTwo]:checked").val());
    var questionThree = parseInt($("input:radio[name=questionThree]:checked").val());
    var questionFour = parseInt($("input:radio[name=questionFour]:checked").val());
    var questionFive = parseInt($("input:radio[name=questionFive]:checked").val());
    var city = $("input#city").val();
    event.preventDefault();

    var totalScore = questionOne + questionTwo + questionThree + questionFour + questionFive;



    if (totalScore <= 5){
      $("#cssDesignTrack").show();
      $("#javaAndroidTrack").hide();
      $("#phpDrupalTrack").hide();
    } else if (totalScore >=6 && totalScore <=25){
      $("#javaAndroidTrack").show();
      $("#phpDrupalTrack").hide();
      $("#cssDesignTrack").hide();
    } else if (totalScore >=26) {
      $("#phpDrupalTrack").fadeIn();
      $("#javaAndroidTrack").hide();
      $("#cssDesignTrack").hide();
    } else if (totalScore == ""){
      $("#pleaseSelect").show();
    }
    console.log(totalScore)
    $(".firstName").text(firstName);
    $(".city").text(city);



  });
});

  $(".btn").click(function() {
    $("#phpDrupalTrack").fadeIn();
    $("#cssDesignTrack").fadeIn();
    $("#javaAndroidTrack").fadeIn();
    $("#pleaseSelect").fadeIn();
  });
