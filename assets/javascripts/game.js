$( document ).ready(function() {
  $('.game-start').attr("disabled", false);
});

$('.game-start').click(function() {
  $('.game-narrative').append("<br>You pick up the radio, but it goes silent.");
  $(this).val("Sad...");
  $(this).attr("disabled", true);
})
