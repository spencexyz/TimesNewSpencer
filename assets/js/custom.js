$(document).ready(function() {
  $(".post").on('mouseenter', function(event) {
    var idVal = this.id;
    $("#dimmer_"+idVal).addClass("hover");
  });
  $(".post").on('mouseleave', function() {
    var idVal = this.id;
    $("#dimmer_"+idVal).removeClass("hover");
  });

  $("#mc-embedded-subscribe").click(function() {
    var clearInputs = function() {
      $("#mce-EMAIL").val("");
      $("#mce-FNAME").val("");
    };
    setTimeout(clearInputs, 2000);
  });


});
