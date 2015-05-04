$( document ).ready(function() {
  $('.game-button').attr("disabled", false);
});

$('.game-button').click(function() {
  $('.game-narrative').append("<br>Hello? Hello!");
  $(this).attr("disabled", true).val("Waiting on transmission...").attr("disabled", false);
})
