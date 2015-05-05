var nextMessage = "";
var optionA = "";
var optionB = "";
var currentTreeProgress = 0;

$( document ).ready(function() {
  $('.game-button').attr("disabled", false);
});

$('.game-button').click(function() {
  nextMessage = "Code word?";
  optionA = "Sagitarious.";
  optionB = "Sagitarious, <stupid code words>.";
  timeout_init();
  currentTreeProgress = currentTreeProgress + 1;
})


function timeout_init() {
  $('.game-button').attr("disabled", true);
  setTimeout(function() {
    $('.game-narrative').prepend("<p>" + nextMessage + "</p>");
    $('.game-button').attr("disabled", false).show();
    $('.game-button-a').val(optionA);
    $('.game-button-b').val(optionB);
  }, 2000);
}
